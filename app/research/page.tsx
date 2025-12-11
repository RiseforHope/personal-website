"use client";

import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

export default function Research() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* --- HEADER --- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">

        {/* Page Label */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
              Research
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Academic
            <span className="block text-zinc-400 dark:text-zinc-600">
              Focus &amp; Inquiry
            </span>
          </h1>
        </div>
      </section>

      {/* --- RESEARCH TOPICS --- */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-16">

          {/* Layout: Left Title / Right Content */}
          <div className="ml-0 pl-0 md:ml-24 md:pl-8 space-y-20 md:space-y-32">

            <ResearchSection title="Border Conflict, Demographic Change, and Latentism">
              <p>
                My research examines border disputes and demographic shifts in Latin America,
                with a focus on the Belize–Guatemala conflict. Using Latentism as a guiding framework,
                I study how borders, sovereignty, and population movements shape everyday life,
                political claims, and the stories communities tell about belonging and exclusion.
              </p>
            </ResearchSection>

            <ResearchSection title="Technology, Sovereignty, and Education">
              <p>
                I analyse how digital platforms and machine learning tools intersect with questions
                of sovereignty, governance, and schooling in Latin America. This work, including
                my forthcoming book <em>Beyond Borders: Technology and Sovereignty in Latin America</em>,
                asks who controls data, infrastructures, and narratives, and what that control means
                for citizens, students, and institutions.
              </p>
            </ResearchSection>

            <ResearchSection title="Language Pedagogy and the PROSLA Method">
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

      {/* --- FOOTER SECTIONS --- */}
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

// Helper Component (Same style as Teaching Page)
function ResearchSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12 border-b border-zinc-100 dark:border-zinc-700/50 pb-20 md:border-none md:pb-0">
      {/* Title Column */}
      <div className="md:col-span-5">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {/* Content Column */}
      <div className="md:col-span-7">
        <div className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-xl md:leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}