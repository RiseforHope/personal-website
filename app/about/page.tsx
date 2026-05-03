import Image from "next/image";
import Link from "next/link";
import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

const publications = [
  {
    id: 1,
    title:
      "La poesía guineoecuatoriana en español en su contexto colonial y (trans)nacional",
    journal: "Impossibilia",
    year: "2020",
    url: "https://revistaseug.ugr.es/index.php/impossibilia/article/view/23088/21763",
  },
  {
    id: 2,
    title: "Digital Storytelling in the Heritage Language Classroom",
    journal: "Review of Applied Linguistics",
    year: "2023",
    url: "#",
  },
  {
    id: 3,
    title: "Community-Based Language Learning Models",
    journal: "Nonprofit & Education Quarterly",
    year: "2022",
    url: "#",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden text-zinc-900 transition-colors duration-300 dark:text-zinc-100">

      {/* --- HERO --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="label-block bg-accent">People</span>
        </div>

        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem] lg:leading-[1.04]">
            J. Bladimir Garcia
          </h1>
          <p className="mt-6 max-w-3xl font-serif text-xl italic text-zinc-600 dark:text-zinc-300 md:mt-8 md:text-2xl">
            Educator, researcher &amp; founder in education technology.
          </p>
        </div>

        {/* Hero card — portrait peeks out on the left, body sits to the right */}
        <div className="mt-16 ml-0 bg-paper-soft transition-colors duration-300 dark:bg-ink-soft md:ml-24 md:mt-20 animate-fade-up delay-100">
          <div className="flex flex-col md:flex-row">

            {/* Left column: portrait + meta */}
            <div className="shrink-0 md:w-[320px]">
              <div className="relative -ml-4 -mt-4 h-[250px] w-[250px] bg-paper md:-ml-24 md:-mt-5 md:h-[380px] md:w-[320px] dark:bg-ink">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of J. Bladimir Garcia"
                  fill
                  sizes="(min-width: 768px) 320px, 250px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col gap-3 px-6 py-6 md:px-8 md:pt-10">
                <span className="eyebrow text-accent dark:text-accent-soft">
                  Technology &amp; Education
                </span>
                <a
                  href="mailto:bladimir@brinl.com"
                  className="link-underline text-base text-accent dark:text-accent-soft"
                >
                  bladimir@brinl.com
                </a>
              </div>
            </div>

            {/* Right column: bio paragraphs */}
            <div className="px-6 pb-12 pt-4 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="max-w-2xl space-y-6 text-lg leading-[1.55] md:space-y-8 md:text-xl md:leading-[1.55]">
                <p>
                  I am a language and English literature teacher, nonprofit leader, and startup founder who combines academic research, machine learning tools, and classroom practice to improve how students learn.
                </p>
                <p>
                  As a PhD candidate (ABD) in Hispanic Studies at Texas A&amp;M University with a focus on Latin America, I study borders, demographic change, international conflict, and their social impacts, while developing PROSLA-based language teaching approaches that use technology in a rigorous, personal, and humane way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUALIFICATIONS / BACKGROUND --- */}
      <section className="bg-paper-soft py-20 transition-colors duration-300 dark:bg-ink-soft md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-20 md:space-y-24">

            <AboutSection index={1} title="Qualifications">
              <p>
                I am currently completing PhD research on border conflict, and I hold a B.A. in Philosophy and Logic from Columbia University and an M.A. in Political Science (with distinction) from Villanova University, where I served as a Presidential Fellow.
              </p>
            </AboutSection>

            <AboutSection index={2} title="Academic background">
              <p>
                I have taught at Ursinus College and Texas A&amp;M University, bringing an interdisciplinary perspective that connects political thought, border studies, and language learning to my teaching and research.
              </p>
            </AboutSection>

            <AboutSection index={3} title="Teaching philosophy">
              <p>
                My classes center on real-world language use, storytelling, and structured practice so that students can build genuine communicative ability, confidence, and agency in the target language. I design my courses using the PROSLA method, aligning technology and assessment with clear, humane learning goals.
              </p>
            </AboutSection>

            <AboutSection index={4} title="Interests">
              <p>
                As a hobbyist programmer, I explore how machine learning can support teachers and students in practical ways — building tools that extend, rather than replace, human judgment in the classroom. My work reflects a sustained commitment to connecting language, technology, and education in concrete, impactful ways.
              </p>
            </AboutSection>

            <AboutSection index={5} title="Featured publications">
              <p>
                My publications include review essays, translations into Spanish and Portuguese, and a forthcoming book, <em>Beyond Borders: Technology and Sovereignty in Latin America</em> (Ashgate, 2026).
              </p>

              <ul className="mt-10 space-y-6">
                {publications.map((pub) => (
                  <li key={pub.id} className="flex flex-col gap-1">
                    <Link
                      href={pub.url}
                      className="link-underline inline-flex items-baseline gap-2 text-lg font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      {pub.title}
                      <span aria-hidden className="text-sm text-zinc-400 dark:text-zinc-500">↗</span>
                    </Link>
                    <span className="text-base text-zinc-500 dark:text-zinc-400">
                      <em>{pub.journal}</em>, {pub.year}
                    </span>
                  </li>
                ))}
              </ul>
            </AboutSection>

          </div>
        </div>
      </section>

      {/* --- NEWS + SUBSCRIBE --- */}
      <NewsSection />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-7xl justify-center">
          <Subscribe />
        </div>
      </section>
    </main>
  );
}

function AboutSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const numeral = String(index).padStart(2, "0");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
      {/* Title column */}
      <div className="md:col-span-4">
        <div className="mb-4 flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
          <span className="numeral text-base">nº {numeral}.</span>
          <span aria-hidden className="h-px w-10 bg-rule dark:bg-rule-dark" />
        </div>
        <h2 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.022em] text-zinc-900 dark:text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {/* Body column */}
      <div className="md:col-span-8">
        <div className="text-lg leading-[1.62] text-zinc-700 dark:text-zinc-300 md:text-xl md:leading-[1.6]">
          {children}
        </div>
      </div>
    </div>
  );
}
