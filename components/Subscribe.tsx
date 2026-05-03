"use client";

import { useState, FormEvent } from "react";
import { subscribeToNewsletter } from "@/app/actions/subscribe";

export default function SubscribeCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await subscribeToNewsletter(email);
      if (result?.error) {
        setStatus("error");
        setErrorMessage(result.error);
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      console.error("Subscribe failed:", err);
      setStatus("error");
      setErrorMessage(
        "Couldn't reach the server. Please try again, or write to bladimir@brinl.com.",
      );
    }
  };

  return (
    <div className="w-full max-w-2xl bg-ink-panel p-8 transition-colors duration-300 dark:bg-ink-soft md:p-10">

      {/* Eyebrow */}
      <h3 className="eyebrow mb-6 text-white/70">Newsletter</h3>

      {status === "success" ? (
        <div className="animate-in fade-in zoom-in py-2 duration-300">
          <p className="font-serif text-xl italic text-white">Thanks for subscribing.</p>
          <button
            onClick={() => setStatus("idle")}
            className="link-underline mt-4 text-sm uppercase tracking-[0.22em] text-white/60"
          >
            Reset
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full min-w-0 border border-transparent bg-white/10 px-4 py-3.5 text-base text-white placeholder:text-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "…" : "Subscribe"}
            </button>
          </div>

          {status === "error" && (
            <p className="font-serif text-sm italic text-red-300">
              {errorMessage}
            </p>
          )}

          <p className="text-xs text-white/40">No spam. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  );
}
