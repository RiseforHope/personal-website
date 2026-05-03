"use server";

import { createClient } from "@/lib/supabase/server";

export async function subscribeToNewsletter(email: string) {
  const trimmed = (email ?? "").trim();

  if (!trimmed || !/^\S+@\S+\.\S+$/.test(trimmed)) {
    return { error: "Please enter a valid email address." };
  }

  // ---------- Step-1 diagnostics ----------
  // Surface the specific failing piece in the UI so we don't have to dig
  // through Vercel logs to figure out which knob is wrong.
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url) {
    console.error("[subscribe] NEXT_PUBLIC_SUPABASE_URL is not set");
    return {
      error:
        "Server is missing NEXT_PUBLIC_SUPABASE_URL. Add it to Vercel → Settings → Environment Variables and redeploy.",
    };
  }
  if (!anonKey) {
    console.error("[subscribe] NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
    return {
      error:
        "Server is missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Add it to Vercel → Settings → Environment Variables and redeploy.",
    };
  }
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
    console.error("[subscribe] NEXT_PUBLIC_SUPABASE_URL looks malformed:", url);
    return {
      error: `NEXT_PUBLIC_SUPABASE_URL looks malformed: "${url}". It should be "https://<project-ref>.supabase.co".`,
    };
  }

  let supabase;
  try {
    supabase = await createClient();
  } catch (err) {
    console.error("[subscribe] createClient threw:", err);
    return {
      error:
        err instanceof Error
          ? `Supabase client init failed: ${err.message}`
          : "Supabase client init failed.",
    };
  }

  // ---------- Insert ----------
  let dbError;
  try {
    const result = await supabase.from("subscribers").insert({ email: trimmed });
    dbError = result.error;
  } catch (err) {
    // This is where "TypeError: fetch failed" lands when the URL is wrong,
    // the project is paused, or there's a network issue between Vercel and
    // Supabase. Bubble the real message up.
    console.error("[subscribe] Supabase fetch threw:", err);
    const msg =
      err instanceof Error ? err.message : "unknown network failure";
    return {
      error: `Could not reach Supabase (${msg}). Check that the project at ${url} is active (not paused) and that the URL above is correct.`,
    };
  }

  if (dbError) {
    console.error("[subscribe] Supabase insert error:", dbError);
    if (dbError.code === "23505") {
      return { error: "You are already subscribed!" };
    }
    if (dbError.code === "42P01") {
      return {
        error:
          'The "subscribers" table is missing in Supabase. Create it (with an "email" column) and try again.',
      };
    }
    return { error: dbError.message || "Database error. Please try again." };
  }

  // ---------- Email (best-effort, never blocks success) ----------
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress =
        process.env.RESEND_FROM_ADDRESS ??
        "J. Bladimir Garcia <onboarding@resend.dev>";

      const { error: emailError } = await resend.emails.send({
        from: fromAddress,
        to: trimmed,
        subject: "Thank you for subscribing",
        html: `<p>Thank you for subscribing. A first letter will arrive when the workshop reopens.</p><p>— J. Bladimir Garcia</p>`,
      });

      if (emailError) {
        console.error("[subscribe] Resend error (non-fatal):", emailError);
      }
    } catch (mailErr) {
      console.error("[subscribe] Resend threw (non-fatal):", mailErr);
    }
  }

  return { success: true };
}
