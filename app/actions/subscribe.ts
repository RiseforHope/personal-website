"use server";

import { createClient } from "@/lib/supabase/server";

export async function subscribeToNewsletter(email: string) {
  const trimmed = (email ?? "").trim();

  if (!trimmed || !/^\S+@\S+\.\S+$/.test(trimmed)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const supabase = await createClient();

    const { error: dbError } = await supabase
      .from("subscribers")
      .insert({ email: trimmed });

    if (dbError) {
      console.error("[subscribe] Supabase insert error:", dbError);
      if (dbError.code === "23505") {
        return { error: "You are already subscribed!" };
      }
      if (dbError.code === "42P01") {
        return {
          error:
            'The "subscribers" table is missing in Supabase. Create it and try again.',
        };
      }
      return { error: dbError.message || "Database error. Please try again." };
    }

    // Email is best-effort — never blocks the subscription.
    // Lazy-load Resend so a missing RESEND_API_KEY doesn't crash the module.
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
    } else {
      console.warn(
        "[subscribe] RESEND_API_KEY not set — skipping welcome email.",
      );
    }

    return { success: true };
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return {
      error:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred.",
    };
  }
}
