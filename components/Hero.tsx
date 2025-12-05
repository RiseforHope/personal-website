import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen w-full flex-col overflow-hidden pt-20">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg" // <-- replace with your background image
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* subtle wash like the reference */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-12">
          {/* left side intentionally empty on desktop (image carries it) */}
          <div className="hidden lg:col-span-6 lg:block" />

          {/* right-side card stack */}
          <div className="lg:col-span-6 lg:justify-self-end">
            <div className="space-y-6">
              {/* small pill */}
              <div className="inline-block bg-[#0b0f2b] px-8 py-3 text-sm font-medium tracking-wide text-white shadow-sm">
                Welcome to prosla
              </div>

              {/* main block */}
              <div className="relative bg-[#0b0f2b] px-8 py-10 text-white shadow-lg md:px-10">
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

      {/* BOTTOM STRIP */}
      <div className="relative z-10 w-full bg-[#f3efe6]">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-10">
            <QuickLink
              title="UNDERGRADUATE STUDY"
              subtitle="Lots of subjects, lots of support"
              href="/"
            />
            <QuickLink
              title="GRADUATE STUDY"
              subtitle="A vibrant, friendly community"
              href="/"
            />
            <QuickLink
              title="PUPILS AND TEACHERS"
              subtitle="Demystifying Oxford and prosla"
              href="/"
            />
            <QuickLink
              title="ALUMNI"
              subtitle="A diverse and growing community"
              href="/"
            />
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
      {/* Mobile: title left, arrow far right */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-light uppercase tracking-[0.14em] text-zinc-800 md:text-sm md:font-semibold md:tracking-widest">
          {title}
        </div>

        <img
          src="/icons/right-arrow.svg"
          alt=""
          className="h-6 w-24 transition-transform group-hover:translate-x-1 md:h-4 md:w-4"
        />
      </div>

      {/* Subtitle hidden on mobile, shown on desktop */}
      <div className="mt-2 hidden text-sm text-zinc-600 md:block">
        {subtitle}
      </div>
    </Link>
  );
}
