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
    <div className="w-full max-w-2xl bg-[#242730] p-8 md:p-10">

      {/* Optional: Small Label so users know what this is */}
      <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
        Newsletter
      </h3>

      {status === "success" ? (
        <div className="py-4 text-center">
          <p className="text-lg text-white">Thanks for subscribing!</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs underline decoration-white/40 underline-offset-4 hover:decoration-white text-white/60"
          >
            Reset
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-w-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
            />

            <button
              type="submit"
              className="shrink-0 bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Subscribe
            </button>
          </div>

          <p className="text-[10px] text-white/40">
            No spam. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}