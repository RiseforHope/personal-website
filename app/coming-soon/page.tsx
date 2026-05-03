export default function ComingSoon() {
  return (
    <main className="paper-mesh relative isolate flex min-h-screen w-full flex-col overflow-hidden">

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
            <span className="h-px w-12 bg-accent dark:bg-accent-soft animate-rule delay-200" />
            <span className="eyebrow text-accent dark:text-accent-soft">
              Provisional notice
            </span>
          </div>

          {/* Display word — Fraunces serif, the moment that earns its weight */}
          <h1 className="mt-8 font-serif text-[clamp(4rem,14vw,12rem)] not-italic font-light leading-[0.92] tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 animate-fade-up delay-200">
            Forthcoming<span className="text-accent dark:text-accent-soft">.</span>
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

          {/* Body note — kept short and editorial, with mailto inline */}
          <div className="mt-12 max-w-2xl animate-fade-up delay-400">
            <p className="text-lg leading-[1.7] text-zinc-700 dark:text-zinc-300 md:text-xl">
              The site is under careful revision. Notes, essays, courses, and a small
              collection of <em>tools for teachers</em> will reappear here over
              the coming weeks. For correspondence in the meantime, write to{" "}
              <a
                href="mailto:bladimir@brinl.com"
                className="link-underline font-medium text-accent dark:text-accent-soft"
              >
                bladimir@brinl.com
              </a>
              .
            </p>
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
