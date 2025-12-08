// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f2ea]">
      {/* Top section: name + photo */}
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-12 md:flex-row md:items-start md:px-10 md:pt-20">
        {/* Left: name + intro text */}
        <div className="flex-1 md:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722f37]">
            People
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-zinc-950 md:text-5xl lg:text-6xl">
            Bladimir García
            <br />
            Educator & Researcher
          </h1>

          <div className="mt-8 space-y-4 text-[17px] leading-[1.7] text-zinc-800">
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

        {/* Right: photo */}
        <div className="w-full max-w-xs self-start md:self-auto">
          <div className="relative h-64 w-full md:h-80">
            <Image
              src="/images/about-portrait.jpg" // update to your real image path
              alt="Portrait of Bladimir García"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lower sections */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 space-y-12">
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

          <AboutSection title="Teaching focus">
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
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 text-[16px] leading-[1.7] text-zinc-800">
        {children}
      </div>
    </section>
  );
}
