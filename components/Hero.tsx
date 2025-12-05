import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      // Tailwind classes handle the gradient switch:
      // Default (Light): bg-[linear-gradient(to_top,#A7BFE8,#6190E8)]
      // Dark Mode: dark:bg-[linear-gradient(to_top,#0f172a,#1e293b)]
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center md:px-10 bg-[linear-gradient(to_top,#A7BFE8,#6190E8)] dark:bg-[linear-gradient(to_top,#0f172a,#1e293b)]"
    >
      {/* --- CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-6 pt-16">
        <h1 className="font-title text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-sm">
          Educator, Researcher, and <br className="hidden md:block" />
          Builder of Learning Systems
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-100 md:text-xl drop-shadow-sm">
          I work at the intersection of language, pedagogy, and humane
          innovation.
        </p>

        <div className="mt-8 flex justify-center">
          {/* Button text color adapts: Blue in light mode, Dark Slate in dark mode */}
          <Link
            href="/blog"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#6190E8] transition hover:bg-zinc-100 hover:shadow-lg dark:text-[#0f172a]"
          >
            Start Reading
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}