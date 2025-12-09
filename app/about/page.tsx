// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-zinc-900 overflow-x-hidden">
      {/* MAIN CONTAINER
          - px-6: Smaller padding for mobile/tablets
          - md:px-16: Larger padding for desktop
      */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-16 md:py-20">

        {/* --- HEADER SECTION --- */}
        <div className="mb-12 md:mb-20">
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white md:px-5">
              People
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2e3f90]/80">
              J. Bladimir García
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem]">
            J. Bladimir Garcia
            <span className="block">Educator &amp; Researcher</span>
          </h1>
        </div>

        {/* --- HERO CARD LAYOUT ---
          - ml-6: (Mobile/Tablet) Creates a small 24px indentation for the white card.
          - md:ml-24: (Desktop) Increases indentation to 96px.
        */}
        <div className="relative ml-0 bg-white md:ml-24">

          <div className="flex flex-col md:flex-row">

            {/* LEFT COLUMN: Image + Meta */}
            <div className="shrink-0 md:w-[320px]">

              {/* IMAGE WRAPPER
                 - ml-6: (Mobile) Pulls image left by 24px to align with Title.
                 - md:-ml-24: (Desktop) Pulls image left by 96px.
                 - -mt-4: (Mobile) Slight vertical overlap.
                 - md:-mt-5: (Desktop) Larger vertical overlap.
              */}
              <div className="relative h-[300px] w-[300px] bg-gray-200 -ml-6 -mt-4 md:-ml-24 md:-mt-5 md:h-[380px] md:w-[320px]">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of Bladimir García"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* META DATA FOOTER
                  - px-6: Mobile padding inside the card.
              */}
              <div className="flex flex-col gap-1 px-6 py-6 md:px-8 md:pt-10">
                <span className="text-base font-medium text-[#2e3f90]">
                  Theology and Education
                </span>

                <div className="mt-2 text-base md:mt-4">
                  <span className="mr-2 text-zinc-400">Email |</span>
                  <a
                    href="mailto:your@email.com"
                    className="text-[#2e3f90] underline decoration-[#2e3f90]/40 underline-offset-4 transition hover:decoration-[#2e3f90]"
                  >
                    your@email.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Bio Text
                - text-[18px] leading-[1.65]: Enforced specific metrics.
            */}
            <div className="px-6 pb-12 pt-4 md:px-16 md:py-20">
              <div className="max-w-2xl space-y-6 text-[18px] leading-[1.65] text-zinc-900 md:space-y-10 md:text-2xl md:leading-relaxed">
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
          </div>
        </div>

      </section>

      {/* LOWER SECTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 md:px-16 md:py-16">
          {/* ALIGNMENT CONTAINER:
              - ml-6: (Mobile) Matches the card indentation.
              - md:ml-24: (Desktop) Matches the desktop card indentation.
              - pl-6 / md:pl-8: Matches the footer padding relative to the card edge.
          */}
          <div className="ml-6 pl-6 space-y-10 md:ml-24 md:pl-8 md:space-y-12">
            <AboutSection title="Qualifications">
              <p>
                MA in Hispanic Studies; ongoing PhD research on border conflict, pedagogy,
                and language education.
              </p>
            </AboutSection>

            <AboutSection title="Academic background">
              <p>
                I have taught Spanish and literature across multiple levels, developing
                curricula that combine rigorous reading with authentic communication and
                writing.
              </p>
            </AboutSection>

            <AboutSection title="Undergraduate teaching">
              <p>
                My classes prioritize real-world language use, storytelling, and structured
                practice, so students can build confidence and agency in the target language.
              </p>
            </AboutSection>
          </div>
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
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
        {title}
      </h2>
      <div className="mt-2 text-[18px] leading-[1.65] text-zinc-900 md:mt-3 md:text-2xl md:leading-[1.7]">
        {children}
      </div>
    </section>
  );
}