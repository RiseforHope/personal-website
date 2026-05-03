"use client";

import { FormEvent, useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/subscribe";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !/^\S+@\S+\.\S+$/.test(trimmed)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await subscribeToNewsletter(trimmed);
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
    <main className="bg-paper relative isolate flex min-h-[calc(100vh-9rem)] w-full flex-col overflow-hidden">

      {/* Left margin rule — only on wide screens, an old-print artifact */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-12 left-10 hidden w-px bg-[var(--rule)] lg:block animate-fade-in delay-100"
      />

      {/* Top colophon */}
      <div className="relative z-10 flex w-full items-center justify-between px-6 pt-10 md:px-16 md:pt-12">
        <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 animate-fade-up">
          <span className="numeral text-sm">Vol. III</span>
          <span className="h-px w-10 bg-[var(--rule)]" />
          <span className="eyebrow">A note from the desk</span>
        </div>
        <span className="numeral text-xs text-zinc-500 dark:text-zinc-400 animate-fade-up delay-100">
          MMXXVI
        </span>
      </div>

      {/* Centerpiece */}
      <section className="relative z-10 flex flex-1 items-center px-6 md:px-16">
        <div className="mx-auto w-full max-w-5xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 animate-fade-up delay-100">
            <span className="h-px w-12 bg-[#2e3f90] dark:bg-[#5c7cfa] animate-rule delay-200" />
            <span className="eyebrow text-[#2e3f90] dark:text-[#5c7cfa]">
              Provisional notice
            </span>
          </div>

          {/* Display word — Fraunces serif, the moment that earns its weight */}
          <h1 className="mt-8 font-serif text-[clamp(4rem,14vw,12rem)] not-italic font-light leading-[0.92] tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 animate-fade-up delay-200">
            Forthcoming<span className="text-[#2e3f90] dark:text-[#5c7cfa]">.</span>
          </h1>

          {/* Italic byline */}
          <p className="mt-8 font-serif text-xl italic text-zinc-600 dark:text-zinc-300 md:text-2xl animate-fade-up delay-300">
            A digital workshop by{" "}
            <span className="text-zinc-900 dark:text-zinc-100 not-italic font-sans font-medium tracking-tight">
              J. Bladimir Garcia
            </span>
            .
          </p>

          {/* Hairline separator */}
          <div className="mt-12 h-px w-32 bg-[var(--rule)] animate-rule delay-400" />

          {/* Body note — kept short and editorial */}
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <p className="text-lg leading-[1.7] text-zinc-700 dark:text-zinc-300 md:col-span-7 md:text-xl animate-fade-up delay-400">
              The site is under careful revision. Notes, essays, courses, and a small
              collection of <em>tools for teachers</em> will reappear here over the
              coming weeks. If you would like a quiet line when the chapters
              return, leave your address below.
            </p>

            {/* Subscribe — minimal, single line, no card */}
            <div className="md:col-span-5 animate-fade-up delay-500">
              {status === "success" ? (
                <div className="flex flex-col gap-2 border-l-2 border-[#2e3f90] dark:border-[#5c7cfa] pl-5 py-1">
                  <p className="font-serif italic text-lg text-zinc-800 dark:text-zinc-100">
                    Noted — thank you.
                  </p>
                  <p className="text-sm text-zinc-500">
                    A first letter will arrive when the workshop reopens.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label
                    htmlFor="cs-email"
                    className="eyebrow text-zinc-500 dark:text-zinc-400"
                  >
                    To be notified
                  </label>
                  <div className="flex items-end gap-4 border-b border-zinc-400 dark:border-zinc-500 pb-2 transition-colors focus-within:border-[#2e3f90] dark:focus-within:border-[#5c7cfa]">
                    <input
                      id="cs-email"
                      type="email"
                      required
                      placeholder="your@address.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full bg-transparent text-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none disabled:opacity-60 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="link-underline shrink-0 text-sm font-medium uppercase tracking-[0.22em] text-[#2e3f90] dark:text-[#5c7cfa] disabled:opacity-50"
                    >
                      {status === "loading" ? "…" : "Submit"}
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="font-serif italic text-sm text-red-600 dark:text-red-400">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    No advertising. One letter, occasionally.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer line — set in italic, gives the page a closing cadence */}
      <footer className="relative z-10 flex w-full items-end px-6 pb-12 pt-16 md:px-16 md:pb-14">
        <div className="flex items-center gap-3 animate-fade-up delay-500">
          <span aria-hidden className="h-px w-8 bg-[var(--rule)]" />
          <span className="font-serif italic text-sm text-zinc-500 dark:text-zinc-400">
            Composed in Pennsburg, PA.
          </span>
        </div>
      </footer>
    </main>
  );
}
