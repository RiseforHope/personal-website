import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen w-full flex-col overflow-hidden pt-20">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="University Campus"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay: White tint in light mode, Dark tint in dark mode */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/40 transition-colors duration-500" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-1 items-end px-6 md:items-center md:pl-10 md:pr-0">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12">

          {/* Spacer Col */}
          <div className="hidden lg:col-span-6 lg:block" />

          {/* Content Col */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="space-y-0 md:space-y-6 w-full">

              {/* MOBILE LAYOUT: Single Combined Box */}
              <div className="md:hidden bg-[#2e3f90] px-8 py-10 text-white text-center shadow-lg">
                <div className="text-sm font-medium tracking-wide text-white/90 uppercase">
                  Welcome to prosla
                </div>

                <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight">
                  Vibrant and open
                </h1>

                <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-white/85">
                  We’re quite a big college, which makes for a thriving
                  intellectual space, and there’s plenty of support to help you
                  make the most of Oxford.
                </p>
              </div>

              {/* DESKTOP LAYOUT: Separated 'Pill' and 'Box' */}
              <div className="hidden md:flex md:flex-col md:items-start md:w-[min(680px,100%)]">
                {/* Pill Label */}
                <div className="bg-[#2e3f90] px-8 py-3 text-sm font-medium tracking-wide text-white shadow-sm uppercase">
                  Welcome to prosla
                </div>

                {/* Main Content Box */}
                <div className="mt-6 w-full bg-[#2e3f90] px-8 py-10 text-white shadow-lg md:px-10">
                  <h1 className="text-5xl font-light leading-tight tracking-tight md:text-6xl">
                    Vibrant and open
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                    We’re quite a big college, which makes for a thriving
                    intellectual space, and there’s plenty of support to help you
                    make the most of Oxford.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM STRIP --- */}
      {/* Light: Beige | Dark: Brand Dark Gray */}
      <div className="relative z-10 w-full bg-[#f3efe6] dark:bg-[#242730] border-t border-transparent dark:border-zinc-800 transition-colors duration-300">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-10">
            <QuickLink title="TEACHING" subtitle="Lots of subjects, lots of support" href="/teaching" />
            <QuickLink title="RESEARCH" subtitle="A vibrant, friendly community" href="/research" />
            <QuickLink title="PROJECTS" subtitle="Demystifying Oxford and prosla" href="/projects" />
            <QuickLink title="ABOUT" subtitle="A diverse and growing community" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLink({
                     title,
                     subtitle,
                     href,
                   }: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      {/* Title Row */}
      <div className="inline-flex items-center gap-3">
        {/* Text: Zinc-800 (Dark Gray) -> Zinc-100 (White) in Dark Mode */}
        <div className="text-lg font-light uppercase tracking-[0.12em] text-zinc-800 dark:text-zinc-100 sm:text-xl md:text-sm md:font-normal md:tracking-widest underline-offset-4 transition-colors group-hover:underline group-hover:text-[#2e3f90] dark:group-hover:text-[#5c7cfa]">
          {title}
        </div>

        {/* Icon: Added dark:invert so the black arrow turns white */}
        <img
          src="/icons/right-arrow-blk.svg"
          alt=""
          className="h-9 w-9 transition-transform group-hover:translate-x-1 dark:invert"
        />
      </div>

      {/* Subtitle: Zinc-600 (Gray) -> Zinc-400 (Light Gray) in Dark Mode */}
      <div className="mt-2 hidden text-sm text-zinc-600 dark:text-zinc-400 md:block">
        {subtitle}
      </div>
    </Link>
  );
}