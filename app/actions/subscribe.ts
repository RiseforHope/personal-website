"use server";

import { createClient } from "@/lib/supabase/server";

export async function subscribeToNewsletter(email: string) {
  const supabase = await createClient();

  // Basic email validation
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const { error } = await supabase.from("subscribers").insert({ email });

    if (error) {
      // Error code 23505 is for unique constraint violations (duplicate email)
      if (error.code === "23505") {
        return { error: "You are already subscribed!" };
      }
      return { error: "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch (err) {
    return { error: "An unexpected error occurred." };
  }
}