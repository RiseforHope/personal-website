import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

export default function Teaching() {
  return (
    <main className="min-h-screen overflow-x-hidden text-zinc-900 transition-colors duration-300 dark:text-zinc-100">

      {/* --- HEADER & PHILOSOPHY INTRO --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        {/* Page label + display title */}
        <div className="mb-12 md:mb-20 animate-fade-up">
          <div className="mb-8 md:mb-10">
            <span className="label-block bg-accent">Teaching</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem] lg:leading-[1.04]">
            Pedagogy &amp;
            <span className="block text-zinc-400 dark:text-zinc-600">
              Philosophy
            </span>
          </h1>
        </div>

        {/* Philosophy statement */}
        <div className="max-w-4xl animate-fade-up delay-100">
          <p className="text-2xl font-light leading-[1.4] text-zinc-900 dark:text-zinc-100 md:text-3xl md:leading-[1.4]">
            I design language and literature classes where students use the target
            language to do real work, building skill, judgment, and responsibility
            rather than just memorising forms.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.62] text-zinc-600 dark:text-zinc-300 md:mt-12">
            <p>
              I believe second language learning should feel <strong className="font-semibold text-zinc-900 dark:text-zinc-100">real and relevant</strong> for every student. My role as an instructor is to design settings where students actively use the target language in a variety of student-centered contexts that foster comprehension through interactive tasks connecting prior knowledge to new content. I follow David Ausubel’s view that learning occurs more effectively when the target language is tied to the learner’s own experiences, and I pair this with clearly expressed instructional goals and outcomes that respect different learning styles and abilities.
            </p>
            <p>
              In practice, I use the PROSLA method and Task Based Language Teaching (TBLT), drawing on authentic materials such as texts, video, and audio in the target language, together with scaffolding and differentiation that keep student interest at the center. My classes blend the three modes of communication (interpretive, interpersonal, and presentational), and I avoid grammar-only or translation-only approaches. Instead, I integrate grammar in concept and context so that students notice patterns, use them meaningfully, and gradually gain confidence and precision in the language, with technology serving as a support for feedback and practice rather than a substitute for human interaction.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE PRINCIPLES --- */}
      <section className="bg-paper-soft py-20 transition-colors duration-300 dark:bg-ink-soft md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-20 md:space-y-24">
            <PrincipleSection index={1} title="Critical Agency">
              <p>
                In my courses, students are not passive recipients of content; they are agents who question texts, systems, and their own assumptions. I ask them to analyse borders, narratives, and power relations, and to make decisions in the target language that have consequences inside the classroom community. Through structured tasks in the PROSLA method, students learn to argue, negotiate, and tell their own stories with clarity and courage. The goal is simple: they leave with stronger language skills and a sharper sense of what kind of person they are becoming.
              </p>
            </PrincipleSection>

            <PrincipleSection index={2} title="The Digital Humanist">
              <p>
                I treat technology, including machine learning tools, as part of the human toolkit for reading, writing, and thinking more carefully. In practice, this means using AI for feedback, modelling, and exploration, while keeping human judgment, ethics, and context at the centre. Students learn how these systems work well, where they fail, and how to question the outputs they receive instead of accepting them as neutral. My aim is to form learners who are fluent in languages and in the digital systems that increasingly shape those languages.
              </p>
            </PrincipleSection>

            <PrincipleSection index={3} title="Inclusive Rigor">
              <p>
                I hold students to high standards and make those standards visible, concrete, and reachable. Lessons are built with clear outcomes, scaffolded tasks, and multiple entry points so that different abilities and backgrounds are aligned with the same level of seriousness. The PROSLA method helps me combine structured practice, formative feedback, and targeted support, including the careful use of ML tools to personalise practice. Inclusive rigour, for me, means that every student knows what strong work looks like and gets real support to reach it.
              </p>
            </PrincipleSection>
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

function PrincipleSection({
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
        {/* Italic numeral ornament — echoes the FeatureCards system */}
        <div className="mb-4 flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
          <span className="numeral text-base">nº {numeral}.</span>
          <span aria-hidden className="h-px w-10 bg-rule dark:bg-rule-dark" />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-[-0.022em] text-zinc-900 dark:text-white md:text-3xl md:leading-[1.15]">
          {title}
        </h2>
      </div>

      {/* Content column */}
      <div className="md:col-span-8">
        <div className="text-lg leading-[1.62] text-zinc-700 dark:text-zinc-300 md:text-xl md:leading-[1.6]">
          {children}
        </div>
      </div>
    </div>
  );
}
