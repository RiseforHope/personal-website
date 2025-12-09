"use client";

import { useState, FormEvent } from "react";

export default function SubscribeCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    // UPDATED BACKGROUND:
    // - Light Mode: #242730 (Dark Gray)
    // - Dark Mode: #2f333f (Lighter Gray - "Elevated")
    <div className="w-full max-w-2xl bg-[#242730] dark:bg-[#2f333f] p-6 md:p-10 shadow-lg rounded-sm transition-colors duration-300">

      {/* Label */}
      <h3 className="mb-6 text-base font-bold uppercase tracking-[0.2em] text-white/80 md:text-sm">
        Newsletter
      </h3>

      {status === "success" ? (
        <div className="py-4 text-center">
          <p className="text-xl text-white md:text-lg">Thanks for subscribing!</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm underline decoration-white/40 underline-offset-4 hover:decoration-white text-white/60 transition-all"
          >
            Reset
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-w-0 bg-white/10 px-4 py-4 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 border border-transparent transition-all"
            />

            <button
              type="submit"
              // Text color adjusted to Brand Blue on white button
              className="shrink-0 bg-white px-8 py-4 text-base font-bold uppercase tracking-widest text-[#2e3f90] transition-colors hover:bg-zinc-100 md:px-6 md:py-3 md:text-sm"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-white/40">
            No spam. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}