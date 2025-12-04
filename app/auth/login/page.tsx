// src/app/auth/login/page.tsx
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client"; // The file we created earlier
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const supabase = createClient();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // 1. Magic Link Login
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // This is where the user returns after clicking the email link
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Check your email for the login link!");
    }
    setIsLoading(false);
  };

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-8 dark:bg-zinc-900">
      <div className="w-full max-w-md space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access the academic dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl dark:bg-zinc-800 dark:ring-white/10">
          {/* GitHub Button */}
          <button
            onClick={handleGitHubLogin}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#24292F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            Continue with GitHub
          </button>

          <div className="relative my-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm leading-6 font-medium">
              <span className="bg-white px-6 text-gray-900 dark:bg-zinc-800 dark:text-gray-100">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Magic Link Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-medium text-gray-900 dark:text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-inset sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700 dark:focus:ring-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm leading-6 font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {isLoading ? "Sending Link..." : "Send Magic Link"}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {message && (
            <div className="mt-4 rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
