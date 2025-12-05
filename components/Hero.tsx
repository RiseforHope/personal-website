import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen w-full flex-col justify-center overflow-hidden pt-20">
      {/* --- VIDEO BACKGROUND --- */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay (guaranteed translucent) */}
      <div className="absolute inset-0 z-10 bg-black opacity-40" aria-hidden="true" />

      {/* --- CONTENT (matches Navbar padding) --- */}
      <div className="relative z-20 w-full px-6 md:px-10">
        <div className="max-w-4xl space-y-6 pt-16 text-left">
          <h1 className="font-title text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-sm">
            Educator, Researcher, and <br className="hidden md:block" />
            Builder of Learning Systems
          </h1>

          <p className="max-w-2xl text-lg font-light leading-relaxed text-zinc-100 md:text-xl drop-shadow-sm">
            I work at the intersection of language, pedagogy, and humane
            innovation.
          </p>

          <div className="mt-8 flex justify-start">
            <Link
              href="/blog"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#6190E8] transition hover:bg-zinc-100 hover:shadow-lg dark:text-[#0f172a]"
            >
              Start Reading
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
