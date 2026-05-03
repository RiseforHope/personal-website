import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

export default function Research() {
  return (
    <main className="min-h-screen overflow-x-hidden text-zinc-900 transition-colors duration-300 dark:text-zinc-100">

      {/* --- HEADER --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 md:mb-20 animate-fade-up">
          <div className="mb-8 md:mb-10">
            <span className="label-block bg-accent">Research</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem] lg:leading-[1.04]">
            Academic
            <span className="block text-zinc-400 dark:text-zinc-600">
              Focus &amp; Inquiry
            </span>
          </h1>
        </div>
      </section>

      {/* --- RESEARCH TOPICS --- */}
      <section className="bg-paper-soft py-20 transition-colors duration-300 dark:bg-ink-soft md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-20 md:space-y-28">
            <ResearchSection index={1} title="Border Conflict, Demographic Change, and Latentism">
              <p>
                My research examines border disputes and demographic shifts in Latin America,
                with a focus on the Belize–Guatemala conflict. Using Latentism as a guiding framework,
                I study how borders, sovereignty, and population movements shape everyday life,
                political claims, and the stories communities tell about belonging and exclusion.
              </p>
            </ResearchSection>

            <ResearchSection index={2} title="Technology, Sovereignty, and Education">
              <p>
                I analyse how digital platforms and machine learning tools intersect with questions
                of sovereignty, governance, and schooling in Latin America. This work, including
                my forthcoming book <em>Beyond Borders: Technology and Sovereignty in Latin America</em>,
                asks who controls data, infrastructures, and narratives, and what that control means
                for citizens, students, and institutions.
              </p>
            </ResearchSection>

            <ResearchSection index={3} title="Language Pedagogy and the PROSLA Method">
              <p>
                In my teaching-related research, I develop and test the PROSLA method, which combines
                task-based learning, clear assessment criteria, and humane uses of technology to
                support student agency. I am especially interested in how machine learning can
                provide meaningful feedback without flattening the complexity of language, identity,
                and classroom relationships.
              </p>
            </ResearchSection>
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

function ResearchSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const numeral = String(index).padStart(2, "0");
  const isLast = index === 3;

  return (
    <div
      className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${
        !isLast ? "border-b border-rule pb-20 dark:border-rule-dark md:border-none md:pb-0" : ""
      }`}
    >
      {/* Title column */}
      <div className="md:col-span-5">
        {/* Italic numeral ornament — academic footnote motif */}
        <div className="mb-4 flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
          <span className="numeral text-base">nº {numeral}.</span>
          <span aria-hidden className="h-px w-10 bg-rule dark:bg-rule-dark" />
        </div>
        <h2 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.022em] text-zinc-900 dark:text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {/* Content column */}
      <div className="md:col-span-7">
        <div className="text-lg leading-[1.62] text-zinc-700 dark:text-zinc-300 md:text-xl md:leading-[1.6]">
          {children}
        </div>
      </div>
    </div>
  );
}
