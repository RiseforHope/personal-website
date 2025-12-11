"use server";

import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(email: string) {
  const supabase = await createClient();

  // 1. Validate email
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    // 2. Insert into Supabase
    const { error } = await supabase.from("subscribers").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return { error: "You are already subscribed!" };
      }
      return { error: "Something went wrong. Please try again." };
    }

    // 3. Send Welcome Email via Resend
    // NOTE: If you haven't verified a domain, 'from' must be 'onboarding@resend.dev'
    // and 'to' must be YOUR email (for testing).
    await resend.emails.send({
      from: "Bladimir <bladimir@riseforhope.org>",
      to: email,
      subject: "Welcome to the Newsletter",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h1>Welcome!</h1>
          <p>Thank you for subscribing to my academic portfolio updates.</p>
          <p>I will share my latest research, teaching notes, and project updates here.</p>
          <br />
          <p>Best,</p>
          <p><strong>Bladimir</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    // Even if the email fails, the subscription was successful, so we return success.
    // Ideally, you might want to log this error somewhere.
    return { success: true };
  }
}