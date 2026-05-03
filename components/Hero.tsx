import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex w-full flex-col overflow-hidden md:min-h-screen">

      {/* ---------------------------------------------------------- */}
      {/* MOBILE LAYOUT — image, then card, then strip (stacked).    */}
      {/* The image gets its own dedicated 4:5 zone instead of being */}
      {/* covered by an absolutely-positioned dark card.             */}
      {/* ---------------------------------------------------------- */}
      <div className="relative aspect-[4/5] w-full md:hidden">
        <Image
          src="/images/hero.jpg"
          alt="University Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="md:hidden bg-ink px-8 py-14 text-center text-white animate-fade-up">
        <div className="flex items-center justify-center gap-3">
          <span className="numeral text-base text-white/50">i.</span>
          <span className="eyebrow text-white/80">Welcome</span>
        </div>
        <h1 className="font-display mt-6 text-3xl font-bold leading-[1.05] tracking-[-0.025em]">
          Educator. Scholar. Builder.
        </h1>
        <p className="mt-7 mx-auto max-w-xl text-lg leading-[1.55] text-white/80">
          I study how borders, technology, and language shape human agency,
          both in geopolitical conflicts and in classrooms.
        </p>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* DESKTOP LAYOUT — full-bleed image with overlay card.        */}
      {/* ---------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10 transition-colors duration-500 dark:bg-black/40" />
      </div>

      <div className="relative z-10 hidden md:flex flex-1 items-end pb-0 md:pl-10 md:pr-0">
        <div className="grid w-full grid-cols-12 items-center">
          <div className="col-span-6" />
          <div className="col-span-6 flex justify-end">
            <div className="flex w-full flex-col gap-6 animate-fade-up">
              {/* Welcome tab */}
              <div className="flex items-center gap-3 self-start bg-ink px-10 py-3">
                <span className="numeral text-sm text-white/50">i.</span>
                <span aria-hidden className="h-3 w-px bg-white/25" />
                <span className="eyebrow text-white/80">Welcome</span>
              </div>

              {/* Headline block */}
              <div className="w-full bg-ink px-10 py-20 text-white lg:py-24">
                <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-[-0.025em] lg:text-6xl">
                  Educator. Scholar. Builder.
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-[1.55] text-white/80 lg:text-xl">
                  I study how borders, technology, and language shape human agency,
                  both in geopolitical conflicts and in classrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* QUICKLINKS STRIP — same on mobile and desktop.              */}
      {/* ---------------------------------------------------------- */}
      <div className="relative z-20 w-full bg-paper-soft transition-colors duration-300 dark:bg-ink-soft">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-10">
            <QuickLink index="01" title="Teaching" subtitle="Lots of subjects, lots of support" href="/teaching" />
            <QuickLink index="02" title="Research" subtitle="A vibrant, friendly community" href="/research" />
            <QuickLink index="03" title="Projects" subtitle="Demystifying Oxford and PROSLA" href="/projects" />
            <QuickLink index="04" title="About" subtitle="A diverse and growing community" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLink({
  index,
  title,
  subtitle,
  href,
}: {
  index: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="flex items-baseline gap-3">
        <span className="numeral text-sm text-zinc-400 dark:text-zinc-500">{index}.</span>
        <div className="inline-flex items-center gap-3">
          <span className="link-underline text-2xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-accent dark:text-zinc-100 dark:group-hover:text-accent-soft md:text-sm md:font-semibold md:uppercase md:tracking-[0.22em]">
            {title}
          </span>
          <img
            src="/icons/right-arrow-blk.svg"
            alt=""
            className="h-9 w-9 transition-transform duration-300 group-hover:translate-x-1.5 dark:invert md:h-7 md:w-7"
          />
        </div>
      </div>
      <div className="mt-2 hidden text-sm text-zinc-600 dark:text-zinc-400 md:block md:pl-7">{subtitle}</div>
    </Link>
  );
}
