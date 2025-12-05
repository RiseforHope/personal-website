import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#FDFFCC] px-6 text-center md:px-10">
      {/* --- BACKGROUND: Custom Mesh Gradient SVG --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <filter
              id="blur"
              filterUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1000"
              height="500"
            >
              <feGaussianBlur stdDeviation="102" />
            </filter>
            <filter id="noise" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1"
                numOctaves="3"
                result="turbulence"
                stitchTiles="stitch"
              />
              <feBlend in="SourceGraphic" in2="turbulence" mode="overlay" />
            </filter>
          </defs>
          <rect id="background" width="100%" height="100%" fill="#FDFFCC" />
          <g id="swatches" filter="url(#blur)">
            <rect x="128" y="29" width="504" height="522" fill="#35d9fa" />
            <rect x="50" y="-60" width="600" height="320" fill="#D6D6D6" />
            <rect
              x="-161"
              y="166"
              width="462"
              height="528"
              fill="#62CCAC"
            />
            <rect x="625" y="-287" width="650" height="754" fill="#6befc5" />
          </g>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{
              mixBlendMode: "luminosity",
              filter: "url(#noise)",
              opacity: 0.11, // Converted 11% to 0.11
            }}
          />
        </svg>

        {/* Optional: Very subtle white overlay if needed for contrast,
            but for now removed since we switched text to black */}
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-6 pt-16">
        {/* Changed text from white to zinc-900/zinc-700 for the light background */}
        <h1 className="font-title text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
          Educator, Researcher, and <br className="hidden md:block" />
          Builder of Learning Systems
        </h1>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-zinc-700 md:text-xl">
          I work at the intersection of language, pedagogy, and humane
          innovation.
        </p>

        <div className="mt-8 flex justify-center">
          {/* Inverted button colors: Black bg, White text */}
          <Link
            href="/blog"
            className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
          >
            Start Reading
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}