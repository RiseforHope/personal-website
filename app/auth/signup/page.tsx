"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, SolidButton } from "@/components/ui";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false); // Added state
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Essential for the verification link to work properly
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          // Store the subscribe preference in user metadata
          newsletter_subscribed: subscribe
        }
      },
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else if (data.session) {
      router.push("/");
    } else if (data.user) {
      setMessage("Account created! Check your email to verify your account.");
    }

    setIsLoading(false);
  };

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
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            label="Repeat Password"
            id="repeat-password"
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
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
              href="/auth/login"
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