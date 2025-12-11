"use client";

import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

export default function Teaching() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* --- HEADER & PHILOSOPHY INTRO --- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">

        {/* Page Label */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
              Teaching
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Pedagogy &amp;
            <span className="block text-zinc-400 dark:text-zinc-600">
              Philosophy
            </span>
          </h1>
        </div>

        {/* Philosophy Statement (No Image) */}
        {/* We use a max-width to keep lines readable (approx 65-75 chars) */}
        <div className="max-w-4xl">
          <p className="text-2xl font-light leading-relaxed text-zinc-900 dark:text-zinc-100 md:text-3xl md:leading-relaxed">
            I design language and literature classes where students use the target language to do real work, building skill, judgment, and responsibility rather than just memorising forms.
          </p>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 md:mt-12">
            <p>
              I believe second language learning should feel <strong>real and relevant</strong> for every student. My role as an instructor is to design settings where students actively use the target language in a variety of student-centered contexts that foster comprehension through interactive tasks connecting prior knowledge to new content. I follow David Ausubel’s view that learning occurs more effectively when the target language is tied to the learner’s own experiences, and I pair this with clearly expressed instructional goals and outcomes that respect different learning styles and abilities.
            </p>
            <p>
              In practice, I use the PROSLA method and Task Based Language Teaching (TBLT), drawing on authentic materials such as texts, video, and audio in the target language, together with scaffolding and differentiation that keep student interest at the center. My classes blend the three modes of communication (interpretive, interpersonal, and presentational), and I avoid grammar-only or translation-only approaches. Instead, I integrate grammar in concept and context so that students notice patterns, use them meaningfully, and gradually gain confidence and precision in the language, with technology serving as a support for feedback and practice rather than a substitute for human interaction.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE PRINCIPLES (The "About" Layout) --- */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-16">

          {/* Layout: Left Title / Right Content */}
          <div className="ml-0 pl-0 md:ml-24 md:pl-8 space-y-16 md:space-y-24">

            <PrincipleSection title="Critical Agency">
              <p>
                In my courses, students are not passive recipients of content; they are agents who question texts, systems, and their own assumptions. I ask them to analyse borders, narratives, and power relations, and to make decisions in the target language that have consequences inside the classroom community. Through structured tasks in the PROSLA method, students learn to argue, negotiate, and tell their own stories with clarity and courage. The goal is simple: they leave with stronger language skills and a sharper sense of what kind of person they are becoming.
              </p>
            </PrincipleSection>

            <PrincipleSection title="The Digital Humanist">
              <p>
                I treat technology, including machine learning tools, as part of the human toolkit for reading, writing, and thinking more carefully. In practice, this means using AI for feedback, modelling, and exploration, while keeping human judgment, ethics, and context at the centre. Students learn how these systems work well, where they fail, and how to question the outputs they receive instead of accepting them as neutral. My aim is to form learners who are fluent in languages and in the digital systems that increasingly shape those languages.
              </p>
            </PrincipleSection>

            <PrincipleSection title="Inclusive Rigor">
              <p>
                I hold students to high standards and make those standards visible, concrete, and reachable. Lessons are built with clear outcomes, scaffolded tasks, and multiple entry points so that different abilities and backgrounds are aligned with the same level of seriousness. The PROSLA method helps me combine structured practice, formative feedback, and targeted support, including the careful use of ML tools to personalise practice. Inclusive rigour, for me, means that every student knows what strong work looks like and gets real support to reach it.
              </p>
            </PrincipleSection>

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

// Helper Component for consistency
function PrincipleSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
      {/* Title Column */}
      <div className="md:col-span-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {/* Content Column */}
      <div className="md:col-span-8">
        <div className="text-lg leading-relaxed text-zinc-900 dark:text-zinc-300 md:text-xl md:leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}