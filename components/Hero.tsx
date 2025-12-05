import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

                {/* decorative mark on the right */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-40 overflow-hidden">
                  <Image
                    src="/images/hero-mark.png" // <-- replace or remove if you don’t want it
                    alt=""
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative z-10 w-full bg-zinc-100/90 backdrop-blur">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4 md:gap-10 md:px-10">
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
      <div className="flex items-center gap-3 text-sm font-semibold tracking-widest text-zinc-800">
        {title}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
      <div className="mt-2 text-sm text-zinc-600">{subtitle}</div>
    </Link>
  );
}
