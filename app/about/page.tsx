"use client";

import Image from "next/image";
import Link from "next/link";
import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

const publications = [
  { id: 1, title: 'La poesía guineoecuatoriana en español en su contexto colonial y (trans)nacional', journal: 'Impossibilia', year: '2020', url: 'https://revistaseug.ugr.es/index.php/impossibilia/article/view/23088/21763'},
  { id: 2, title: "Digital Storytelling in the Heritage Language Classroom", journal: "Review of Applied Linguistics", year: "2023", url: "#" },
  { id: 3, title: "Community-Based Language Learning Models", journal: "Nonprofit & Education Quarterly", year: "2022", url: "#" },
];

export default function About() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* SECTION 1: HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">

        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
              People
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem]">
            J. Bladimir Garcia
            <span className="block">Educator &amp; Researcher</span>
          </h1>
        </div>

        {/* Hero Card */}
        <div className="relative ml-0 bg-white dark:bg-[#2f333f] md:ml-24 transition-colors duration-300">
          <div className="flex flex-col md:flex-row">

            {/* Left Column */}
            <div className="shrink-0 md:w-[320px]">
              {/* FIX APPLIED HERE:
                  Changed -ml-6 to -ml-2.
                  This reduces the negative pull, creating a small left gap on mobile.
              */}
              <div className="relative h-[300px] w-[300px] bg-gray-200 -ml-4 -mt-4 md:-ml-24 md:-mt-5 md:h-[380px] md:w-[320px]">
                <Image src="/images/about-portrait.jpg" alt="Portrait" fill className="object-cover" priority />
              </div>

              <div className="flex flex-col gap-1 px-6 py-6 md:px-8 md:pt-10">
                <span className="text-lg font-medium text-[#2e3f90] dark:text-[#5c7cfa]">
                  Theology and Education
                </span>
                <div className="mt-2 text-lg md:mt-4">
                  <span className="mr-2 text-zinc-400">Email |</span>
                  <a href="mailto:your@email.com" className="text-[#2e3f90] underline decoration-[#2e3f90]/40 underline-offset-4 transition hover:decoration-[#2e3f90] dark:text-[#5c7cfa] dark:decoration-[#5c7cfa]/40">
                    bladimir@brinl.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="px-6 pb-12 pt-4 md:px-16 md:py-20">
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed md:space-y-10 md:text-2xl md:leading-relaxed">
                <p>I am a language teacher, nonprofit leader, and researcher working in the fields of pedagogy, technology, and humane innovation.</p>
                <p>As a PhD (ABD) in Hispanic Studies from Texas A&M University concentrating on Latin America, my research investigates borders, demographic changes, international conflicts, and their societal impacts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUALIFICATIONS */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="ml-0 pl-6 space-y-12 md:ml-24 md:pl-8 md:space-y-16">

            <AboutSection title="Qualifications">
              <p>Ongoing PhD research ion border conflict; BA in Philosophy and Logic from Columbia University; Master’s in Political Science with distinction from Villanova University as a presidential fellow.</p>
            </AboutSection>

            <AboutSection title="Academic background">
              <p>I have taught at Ursinus College and Texas A&M University, bringing an interdisciplinary perspective to my work.</p>
            </AboutSection>

            <AboutSection title="Teaching Philosophy">
              <p>My classes prioritize real-world language use, storytelling, and structured practice, so students can build confidence and agency in the target language.</p>
            </AboutSection>

            <AboutSection title="Interests">
              <p>As a hobbyist programmer, I explore the educational applications of machine learning, blending technology with academic expertise to advance innovative teaching methods. My work reflects a commitment to connecting language, technology, and education in practical and impactful ways.</p>
            </AboutSection>

            <AboutSection title="Featured Publications">
              <p>My publications include review articles, translations into Spanish and Portuguese, and a forthcoming book, Beyond Borders: Technology and Sovereignty in Latin America (Ashgate, 2026).</p><br/>
              <ul className="space-y-6">
                {publications.map((pub) => (
                  <li key={pub.id} className="flex flex-col gap-1">
                    <Link href={pub.url} className="group block font-medium decoration-zinc-300 underline-offset-4 hover:underline dark:decoration-zinc-600 text-lg">
                      {pub.title} ↗
                    </Link>
                    <span className="text-lg text-zinc-500 dark:text-zinc-400">
                      <span className="italic">{pub.journal}</span>, {pub.year}
                    </span>
                  </li>
                ))}
              </ul>
            </AboutSection>

          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: NEWS & SUBSCRIBE */}
      <div>
        <NewsSection />

        <section className="py-16 md:py-24 px-6 md:px-16">
          <div className="mx-auto max-w-7xl flex justify-center">
            <Subscribe />
          </div>
        </section>
      </div>

    </main>
  );
}

function AboutSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-2 text-lg leading-relaxed text-zinc-900 dark:text-zinc-300 md:mt-3 md:text-2xl md:leading-[1.7]">
        {children}
      </div>
    </section>
  );
}