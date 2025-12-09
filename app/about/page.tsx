// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-zinc-900 overflow-x-hidden">
      {/* MAIN CONTAINER */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-16">

        {/* --- HEADER SECTION --- */}
        <div className="mb-20">
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex bg-[#2e3f90] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              People
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2e3f90]/80">
              J. Bladimir García
            </span>
          </div>

          {/* Main Title - Aligned to left container edge */}
          <h1 className="text-xl font-bold leading-[1] tracking-tight md:text-7xl lg:text-[5.5rem]">
            J. Bladimir Garcia
            <span className="block">Educator &amp; Researcher</span>
          </h1>
        </div>

        {/* --- HERO CARD LAYOUT ---
            1. md:ml-24 -> Pushes the white background 6rem to the RIGHT.
        */}
        <div className="relative ml-0 bg-white md:ml-24">
          <div className="flex flex-col md:flex-row">

            {/* LEFT COLUMN: Image + Meta */}
            <div className="shrink-0 md:w-[320px]">

              {/* IMAGE WRAPPER
                  1. md:-ml-24 -> Pulls the image 6rem to the LEFT.
                  This cancels out the parent's ml-24, making the image align perfectly
                  with the main Title (x=0).
                  2. md:-mt-5 -> Pulls image up slightly for the vertical overlap effect.
              */}
              <div className="relative h-[300px] w-full bg-gray-200 md:-ml-24 md:-mt-5 md:h-[380px] md:w-[320px]">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of Bladimir García"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* META DATA FOOTER
                  This remains inside the white card flow.
                  It starts at the card edge (indented) + its own padding.
              */}
              <div className="flex flex-col gap-1 px-10 py-8 md:px-8 md:pt-10">
                <span className="text-base font-medium text-[#2e3f90]">
                  Theology and Education
                </span>

                <div className="mt-4 text-base">
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

            {/* RIGHT COLUMN: Bio Text */}
            <div className="px-8 py-12 md:px-16 md:py-20">
              <div className="max-w-2xl space-y-10 text-2xl leading-relaxed text-zinc-900">
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
        <div className="mx-auto max-w-7xl space-y-12 px-8 py-14 md:px-16 md:py-16">
          {/* ALIGNMENT CONTAINER:
              Matches the indentation of the "Theology" footer above.
              md:ml-24 (Card Edge) + md:pl-8 (Footer Padding)
          */}
          <div className="md:ml-24 md:pl-8 space-y-12">
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
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 text-2xl leading-[1.7] text-zinc-900">{children}</div>
    </section>
  );
}