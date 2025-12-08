import Link from "next/link";
import Image from "next/image";
<MenuLink href="/about" label="About" />


export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO / INTRO */}
      <section className="bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#2e3f90]">
            <span className="inline-flex items-center bg-[#2e3f90] px-3 py-2 text-white">
              PEOPLE &gt;
            </span>
            <span className="text-[#2e3f90]/90">
              {/* swap this text to whatever you want */}
              About
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
            {/* LEFT */}
            <div className="md:col-span-8">
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0b0f2b] md:text-6xl">
                J. Bladimir Garcia
              </h1>

              {/* small meta row */}
              <div className="mt-6 text-sm text-zinc-700">
                <span className="text-[#2e3f90]">Teaching &amp; Research</span>
                <span className="mx-2 text-zinc-400">|</span>
                <span>Language, pedagogy, border studies</span>
              </div>

              <div className="mt-2 text-sm text-zinc-700">
                Email{" "}
                <a
                  className="text-[#2e3f90] underline underline-offset-4"
                  href="mailto:you@example.com"
                >
                  you@example.com
                </a>
              </div>

              {/* INTRO PANEL (square corners, per your request) */}
              <div className="mt-8 bg-white px-8 py-8 shadow-sm">
                <p className="text-body text-zinc-900 leading-[1.62]">
                  I work at the intersection of language, pedagogy, and humane
                  innovation. My teaching focuses on building real-world
                  communicative competence, and my research explores border
                  conflict, identity, and meaning-making across communities.
                </p>

                <p className="mt-6 text-body text-zinc-900 leading-[1.62]">
                  I also build learning systems and tools that help teachers do
                  less busywork and more actual teaching, which is a rare,
                  endangered craft.
                </p>
              </div>
            </div>

            {/* RIGHT portrait */}
            <div className="md:col-span-4 md:justify-self-end">
              <div className="bg-white p-0 shadow-sm">
                <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden bg-zinc-100">
                  <Image
                    src="/images/about-portrait.jpg" // <- add this to /public/images/
                    alt="Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY SECTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b0f2b] md:text-4xl">
                Qualifications
              </h2>
              <p className="mt-4 text-body text-zinc-900 leading-[1.62]">
                PhD Candidate (Hispanic Studies) • Nonprofit Leader • Spanish
                Educator • Builder of learning tools
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b0f2b] md:text-4xl">
                Academic background
              </h2>
              <p className="mt-4 text-body text-zinc-900 leading-[1.62]">
                My work draws from phenomenology and hermeneutics, with a focus
                on border conflict and lived experience. I’m interested in how
                communities narrate themselves under pressure, and how
                institutions translate that pressure into policy, identity, and
                memory.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b0f2b] md:text-4xl">
                Teaching
              </h2>
              <p className="mt-4 text-body text-zinc-900 leading-[1.62]">
                I teach language as a lived skill: routines, retrieval, and
                performance built around tasks that resemble real communication.
                Clear expectations, high warmth, and no pretending worksheets
                are “rigor.”
              </p>

              <div className="mt-8">
                <Link
                  href="/teaching"
                  className="inline-flex items-center gap-3 text-[#2e3f90] underline-offset-4 hover:underline"
                >
                  View teaching philosophy
                  <img
                    src="/icons/right-arrow-red.svg"
                    alt=""
                    className="h-5 w-10"
                  />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#2e3f90] md:text-4xl">
                Projects
              </h2>
              <p className="mt-4 text-body text-zinc-900 leading-[1.62]">
                I build tools that reduce friction for teachers and raise the
                ceiling for students. Minimal interfaces, strong systems, and
                less noise.
              </p>

              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 text-[#2e3f90] underline-offset-4 hover:underline"
                >
                  Explore projects
                  <img
                    src="/icons/right-arrow-red.svg"
                    alt=""
                    className="h-5 w-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
