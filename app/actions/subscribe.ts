"use server";

import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(email: string) {
  console.log("1. Action started for:", email); // DEBUG LOG

  const supabase = await createClient();

  // Validate
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    console.log("2. Validation failed");
    return { error: "Please enter a valid email address." };
  }

  try {
    // --- SUPABASE STEP ---
    console.log("3. Attempting Supabase Insert...");
    const { error: dbError } = await supabase.from("subscribers").insert({ email });

    if (dbError) {
      console.error("Supabase Error:", dbError); // SEE THIS IN TERMINAL
      if (dbError.code === "23505") {
        return { error: "You are already subscribed!" };
      }
      return { error: "Database error. Please try again." };
    }
    console.log("4. Supabase Insert Successful");

    // --- RESEND STEP ---
    console.log("5. Attempting Resend Email...");

    // NOTE: In Test Mode, 'to' MUST be your own verified email address.
    const { data, error: emailError } = await resend.emails.send({
      from: "J. Bladimir Garcia <onboarding@resend.dev>",
      to: email, // If this is NOT your account email, it will fail in test mode
      subject: "Welcome to the Newsletter",
      html: "<p>Thanks for subscribing!</p>",
    });

    if (emailError) {
      console.error("Resend Error:", emailError); // SEE THIS IN TERMINAL
      // We don't return an error to the user here because the subscription
      // was technically successful (saved to DB), just the email failed.
    } else {
      console.log("6. Resend Success:", data);
    }

    return { success: true };

  } catch (err) {
    console.error("UNEXPECTED CRASH:", err);
    return { error: "An unexpected error occurred." };
  }
}