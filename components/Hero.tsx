import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="University Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10 dark:bg-black/40 transition-colors duration-500" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-1 items-end px-6 pb-0 md:pl-10 md:pr-0">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12">
          <div className="hidden lg:col-span-6 lg:block" />
          <div className="lg:col-span-6 flex justify-end">
            <div className="space-y-0 md:space-y-6 w-full">

              {/* MOBILE BLOCK */}
              <div className="md:hidden bg-[#242730] px-8 py-12 text-white text-center shadow-lg animate-fade-up">
                <div className="flex items-center justify-center gap-3">
                  <span className="numeral text-base text-white/60">i.</span>
                  <span className="eyebrow text-white/80">Welcome</span>
                </div>
                <h1 className="font-display mt-6 text-2xl font-bold leading-[1.05] tracking-tight">
                  Educator. Scholar. Builder.
                </h1>
                <p className="mt-8 mx-auto max-w-xl text-lg leading-relaxed text-white/85">
                  I study how borders, technology, and language shape human agency, both in geopolitical conflicts and in classrooms.
                </p>
              </div>

              {/* DESKTOP BLOCK */}
              <div className="hidden md:flex md:flex-col md:items-start w-full">

                {/* Welcome tab — small italic numeral + hairline rule above */}
                <div className="animate-fade-up">
                  <div className="flex items-center gap-3 bg-[#242730] px-8 py-3 text-white shadow-sm">
                    <span className="numeral text-sm text-white/55">i.</span>
                    <div className="h-3 w-px bg-white/25" />
                    <span className="eyebrow text-white">Welcome</span>
                  </div>
                </div>

                {/* Headline block */}
                <div className="mt-6 w-full bg-[#242730] px-8 py-10 md:py-24 text-white shadow-lg md:px-10 animate-fade-up delay-100">
                  <h1 className="font-display text-2xl font-bold leading-[1.04] tracking-[-0.025em] md:text-6xl">
                    Educator. Scholar. Builder.
                  </h1>
                  <p className="mt-8 max-w-xl text-lg leading-[1.55] text-white/85 md:text-xl animate-fade-up delay-300">
                    I study how borders, technology, and language shape human agency,
                    both in geopolitical conflicts and in classrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM STRIP --- */}
      <div className="relative z-20 w-full bg-[#f3efe6] dark:bg-[#2f333f] border-none transition-colors duration-300">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-10">
            <QuickLink index="01" title="TEACHING" subtitle="Lots of subjects, lots of support" href="/teaching" />
            <QuickLink index="02" title="RESEARCH" subtitle="A vibrant, friendly community" href="/research" />
            <QuickLink index="03" title="PROJECTS" subtitle="Demystifying Oxford and PROSLA" href="/projects" />
            <QuickLink index="04" title="ABOUT" subtitle="A diverse and growing community" href="/about" />
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
          <span className="link-underline text-xl font-light uppercase tracking-[0.12em] text-zinc-800 dark:text-zinc-100 sm:text-2xl md:text-sm md:font-normal md:tracking-widest transition-colors group-hover:text-[#2e3f90] dark:group-hover:text-[#5c7cfa]">
            {title}
          </span>
          <img
            src="/icons/right-arrow-blk.svg"
            alt=""
            className="h-9 w-9 transition-transform duration-300 group-hover:translate-x-1.5 dark:invert"
          />
        </div>
      </div>
      <div className="mt-2 hidden text-sm text-zinc-600 dark:text-zinc-400 md:block md:pl-7">{subtitle}</div>
    </Link>
  );
}
