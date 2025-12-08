// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f2ea]">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="relative">
          {/* TITLE OUTSIDE THE CARD (top-left) */}
          <div className="relative z-30 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">
              <span className="inline-flex bg-[#722f37] px-4 py-2 text-white">
                People
              </span>
              <span className="text-[#722f37]/80">
                THE VERY REVD PROFESSOR BLADIMIR GARCÍA
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0b0f2b] md:text-6xl">
              Bladimir García
              <br />
              Educator &amp; Researcher
            </h1>
          </div>

          {/* CARD + OVERLAPS */}
          <div className="relative mt-8">
            {/* MOBILE PORTRAIT (overlaps into the card) */}
            <div className="md:hidden relative z-20 w-[240px] max-w-full bg-white p-2 shadow-sm -mb-16 sm:-mb-20">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of Bladimir García"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* DESKTOP PORTRAIT (overlaps card from the left) */}
            <div className="pointer-events-none absolute left-0 top-0 hidden md:block md:-translate-x-12 z-20">
              <div className="relative h-[260px] w-[240px] bg-white p-2 shadow-sm">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of Bladimir García"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* WHITE CARD */}
            <div
              className="
                relative z-10 bg-white px-6 pb-10 pt-24
                md:px-12 md:py-14 md:pl-[340px]
              "
            >
              {/* Meta row */}
              <div className="space-y-2 text-sm text-zinc-900/80">
                <div>
                  <span className="text-[#722f37]">Theology and Education</span>{" "}
                  <span className="text-zinc-700">|</span>{" "}
                  <span className="text-zinc-700">Language Teacher</span>
                </div>
                <div>
                  <span className="text-zinc-700">Email</span>{" "}
                  <span className="text-zinc-700">|</span>{" "}
                  <a
                    href="mailto:your@email.com"
                    className="text-[#722f37] underline underline-offset-4"
                  >
                    your@email.com
                  </a>
                </div>
              </div>

              {/* Intro */}
              <div className="mt-8 max-w-2xl space-y-6 text-[18px] leading-[1.65] text-zinc-900">
                <p>
                  I am a language teacher, nonprofit leader, and researcher working
                  at the intersection of pedagogy, technology, and humane innovation.
                </p>
                <p>
                  My work focuses on helping students experience language learning as
                  real life, not just grammar drills—through meaningful tasks, clear
                  structures, and high expectations wrapped in care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER SECTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-12 px-6 py-14 md:px-10 md:py-16">
          <AboutSection title="Qualifications">
            <p>
              MA in Hispanic Studies; ongoing PhD research on border conflict,
              pedagogy, and language education.
            </p>
          </AboutSection>

          <AboutSection title="Academic background">
            <p>
              I have taught Spanish and literature across multiple levels,
              developing curricula that combine rigorous reading with authentic
              communication and writing.
            </p>
          </AboutSection>

          <AboutSection title="Undergraduate teaching">
            <p>
              My classes prioritize real-world language use, storytelling, and
              structured practice, so students can build confidence and agency
              in the target language.
            </p>
          </AboutSection>
        </div>
      </section>
    </main>
  );
}

function AboutSection({
                        title,
                        children,
                      }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-[#0b0f2b] md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 text-[16px] leading-[1.7] text-zinc-800">{children}</div>
    </section>
  );
}
