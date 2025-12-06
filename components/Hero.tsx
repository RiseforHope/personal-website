import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen w-full flex-col overflow-hidden pt-20">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-1 items-end px-6 md:items-center md:pl-10 md:pr-0">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12">
          <div className="hidden lg:col-span-6 lg:block" />

          {/* Right column */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="space-y-0 md:space-y-6 w-full">
              {/* MOBILE: single combined box */}
              <div className="md:hidden bg-[#0b0f2b] px-8 py-10 text-white text-center shadow-lg">
                <div className="text-sm font-medium tracking-wide text-white/90">
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

              {/* DESKTOP: pill + box share the same width, aligned LEFT forever */}
              <div className="hidden md:flex md:flex-col md:items-start md:w-[min(680px,100%)]">
                <div className="bg-[#0b0f2b] px-8 py-3 text-sm font-medium tracking-wide text-white shadow-sm">
                  Welcome to prosla
                </div>

                <div className="mt-6 w-full bg-[#0b0f2b] px-8 py-10 text-white shadow-lg md:px-10">
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

      {/* BOTTOM STRIP */}
      <div className="relative z-10 w-full bg-[#f3efe6]">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-10">
            <QuickLink title="TEACHING" subtitle="Lots of subjects, lots of support" href="/" />
            <QuickLink title="RESEARCH" subtitle="A vibrant, friendly community" href="/" />
            <QuickLink title="PROJECTS" subtitle="Demystifying Oxford and prosla" href="/" />
            <QuickLink title="ABOUT" subtitle="A diverse and growing community" href="/" />
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
      {/* Title + arrow always stay together */}
      <div className="inline-flex items-center gap-3">
        <div className="text-lg font-light uppercase tracking-[0.12em] text-zinc-800 sm:text-xl md:text-sm md:font-semibold md:tracking-widest">
          {title}
        </div>

        <img
          src="/icons/right-arrow.svg"
          alt=""
          className="h-9 w-9 transition-transform group-hover:translate-x-1"
        />
      </div>

      <div className="mt-2 hidden text-sm text-zinc-600 md:block">{subtitle}</div>
    </Link>
  );
}

