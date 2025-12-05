"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
// We don't need useRouter anymore since we aren't redirecting automatically
import { Input, SolidButton } from "@/components/ui";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // New state to handle the success view
  const [isSuccess, setIsSuccess] = useState(false);

  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (password !== repeatPassword) {
      setMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Redirect to Login page after they click the email link
        emailRedirectTo: `${location.origin}/auth/callback?next=/login`,
        data: {
          newsletter_subscribed: subscribe
        }
      },
    });

    if (error) {
      setMessage("Error: " + error.message);
      setIsLoading(false);
    } else {
      // Show the success message instead of the form
      setIsSuccess(true);
      setIsLoading(false);
    }
  };

  // ---------------------------------------------------------
  // SUCCESS VIEW (Shown after submission)
  // ---------------------------------------------------------
  if (isSuccess) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-4 py-12 dark:bg-zinc-950">
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <svg
              className="h-6 w-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Check your email
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            We've sent a confirmation link to <strong>{email}</strong>.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Please click the link in the email to verify your account. Once verified, you will be redirected to the login page.
          </p>

          <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              &larr; Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // FORM VIEW
  // ---------------------------------------------------------
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-4 py-12 dark:bg-zinc-950">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
            SIGN UP
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Create a new account
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-4">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="me@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            // Fix Mobile Zoom: text-base on mobile (16px), text-sm on desktop
            className="text-base md:text-sm"
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-base md:text-sm"
          />

          <Input
            label="Repeat Password"
            id="repeat-password"
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
            className="text-base md:text-sm"
          />

          <div className="flex items-center gap-2">
            <input
              id="subscribe"
              type="checkbox"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 text-black focus:ring-black"
            />
            <label
              htmlFor="subscribe"
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              Subscribe me to updates and language tips
            </label>
          </div>

          <SolidButton type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "SIGN UP"}
          </SolidButton>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-black underline hover:text-zinc-700 dark:text-white"
            >
              Login
            </Link>
          </p>
        </div>

        {message && (
          <div className="mt-4 rounded-md bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}