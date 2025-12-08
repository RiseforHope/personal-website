// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f2ea]">
      {/* HERO / INTRO */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="relative">
          {/* White card */}
          <div className="bg-white px-6 pb-10 pt-[240px] md:px-12 md:py-14 md:pt-14">

            {/* Title */}
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0b0f2b] md:text-6xl">
              J. Bladimir Garcia
            </h1>

            {/* Meta row (like department / role / email) */}
            <div className="mt-8 space-y-2 text-sm text-zinc-900/80">
              <div>
                <span className="text-[#722f37]">Theology and Education</span>{" "}
                <span className="text-zinc-700">|</span>{" "}
                <span className="text-zinc-700">Language Teacher</span>
              </div>
              <div>
                <span className="text-zinc-700">Email</span>{" "}
                <span className="text-zinc-700">|</span>{" "}
                <a
                  href="mailto:bladimir@brinl.com"
                  className="text-[#722f37] underline underline-offset-4"
                >
                  your@email.com
                </a>
              </div>
            </div>

            {/* Intro paragraph(s) */}
            <div className="mt-8 max-w-2xl space-y-6 text-[18px] leading-[1.65] text-zinc-900">
              <p>
                I am a language teacher, nonprofit leader, and researcher working
                at the intersection of pedagogy, technology, and humane
                innovation.
              </p>
              <p>
                My work focuses on helping students experience language learning
                as real life, not just grammar drills—through meaningful tasks,
                clear structures, and high expectations wrapped in care.
              </p>
            </div>
          </div>

          {/* Portrait — OUTSIDE the card, offset past the right edge on ALL screens */}
          <div
            className="
              pointer-events-none absolute z-10
              -right-6 -top-6
              sm:-right-6
              md:-right-8 md:-top-10
            "
          >
            <div
              className="
                relative bg-white p-2 shadow-sm
                h-[240px] w-[240px]
                sm:h-[220px] sm:w-[220px]
                md:h-[260px] md:w-[240px]
              "
            >
              <Image
                src="/images/about-portrait.jpg"
                alt="Portrait of Bladimir García"
                fill
                className="object-cover"
                priority
              />
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
      <div className="mt-3 text-[16px] leading-[1.7] text-zinc-800">
        {children}
      </div>
    </section>
  );
}
