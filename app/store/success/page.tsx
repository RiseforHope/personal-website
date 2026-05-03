import Link from "next/link";

export default function Success() {
  return (
    <main className="paper-mesh relative isolate flex min-h-screen w-full flex-col overflow-hidden">

      {/* Top colophon */}
      <div className="relative z-10 flex w-full items-center justify-between px-6 pt-10 md:px-16 md:pt-12">
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="h-px w-12 bg-accent dark:bg-accent-soft animate-rule delay-200" />
          <span className="eyebrow text-accent dark:text-accent-soft">
            Confirmation
          </span>
        </div>
      </div>

      {/* Centerpiece */}
      <section className="relative z-10 flex flex-1 items-center px-6 md:px-16">
        <div className="mx-auto w-full max-w-4xl">

          <h1 className="font-serif text-[clamp(3.5rem,12vw,10rem)] not-italic font-light leading-[0.95] tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 animate-fade-up delay-100">
            Thank you<span className="text-accent dark:text-accent-soft">.</span>
          </h1>

          <p className="mt-8 font-serif text-xl italic text-zinc-600 dark:text-zinc-300 md:text-2xl animate-fade-up delay-200">
            Your order has been received.
          </p>

          <div className="mt-12 h-px w-32 bg-rule dark:bg-rule-dark animate-rule delay-300" />

          <p className="mt-12 max-w-2xl text-lg leading-[1.7] text-zinc-700 dark:text-zinc-300 animate-fade-up delay-300">
            A confirmation has been sent to the email on file. The piece will
            be produced and shipped over the coming days; a tracking note will
            arrive once it's on its way.
          </p>

          <Link
            href="/store"
            className="link-underline numeral mt-12 inline-flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent-soft animate-fade-up delay-400"
          >
            ← Back to the store
          </Link>
        </div>
      </section>

      {/* Footer dateline */}
      <footer className="relative z-10 flex w-full items-end px-6 pb-12 pt-16 md:px-16 md:pb-14">
        <div className="flex items-center gap-3 animate-fade-up delay-500">
          <span aria-hidden className="h-px w-8 bg-rule dark:bg-rule-dark" />
          <span className="font-serif italic text-sm text-zinc-500 dark:text-zinc-400">
            Sent with gratitude.
          </span>
        </div>
      </footer>
    </main>
  );
}
