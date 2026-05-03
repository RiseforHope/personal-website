"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

type ProjectItem = { title: string; content: string };
type ProjectSection = { category: string; items: ProjectItem[] };

const projectsData: ProjectSection[] = [
  {
    category: "Education Technology",
    items: [
      {
        title: "PROSLA Lesson Design Tool",
        content:
          "Proficiency Oriented Second Language Acquisition (PROSLA) is the backbone of my language teaching. I am developing a lesson-design tool that helps teachers create PROSLA-aligned tasks, learning outcomes, and assessments. The project combines my classroom practice with machine learning to suggest activities, sequence tasks, and keep proficiency—not test-prep—as the central goal.",
      },
      {
        title: "Machine Learning Feedback for Language Learners",
        content:
          "In this project, I experiment with ML models that provide targeted feedback on student writing and speaking without replacing teacher judgment. The focus is on clarity, tone, and communicative effectiveness in the target language, with the system designed to be transparent and easily overridden by the teacher. The aim is to give students more practice opportunities while keeping the classroom humane and relationship-centered.",
      },
    ],
  },
  {
    category: "Pedagogy and Curriculum",
    items: [
      {
        title: "PROSLA Classroom Labs",
        content:
          "I design and run classroom “labs” where Proficiency Oriented Second Language Acquisition is implemented across full units. Students work through task-based sequences that integrate interpretive, interpersonal, and presentational communication, supported by clear rubrics and ongoing feedback. These labs serve as living case studies for how structured, high-expectation teaching can coexist with warmth, flexibility, and student agency.",
      },
      {
        title: "Storytelling and Podcast Projects",
        content:
          "In my language and literature courses, students create podcasts, stories, and multimodal projects that require sustained target-language use and serious engagement with texts. These projects are designed to move beyond simple comprehension checks and into interpretation, argument, and creative expression. They also function as testbeds for how digital tools can support student voice in rigorous but accessible ways.",
      },
    ],
  },
  {
    category: "Nonprofit and Community Work",
    items: [
      {
        title: "Rise for Hope: Supporting Families Facing Pediatric Cancer",
        content:
          "As founder and director of Rise for Hope, I lead a nonprofit that supports children with cancer and their families through practical assistance and hopeful community. This work includes fundraising campaigns, volunteer coordination, and partnerships with local organizations. It is a concrete extension of my belief that education, technology, and care must ultimately serve real human needs.",
      },
      {
        title: "Workshops for Teachers and Schools",
        content:
          "I design and deliver workshops on PROSLA-based language teaching, humane uses of AI in education, and critical approaches to digital tools. These sessions help educators understand what ML can and cannot do, how to integrate it without losing their professional judgment, and how to design classrooms that are demanding, inclusive, and hopeful.",
      },
    ],
  },
  {
    category: "In Development",
    items: [
      {
        title: "Projectional Reciprocity in Education",
        content:
          "Building on my theoretical work on projectional reciprocity, I am developing a series of seminars and materials that help educators think about classrooms as sites of mutual formation. The project explores how feedback, relationships, and institutional structures shape both teacher and student, and how technology can either flatten or deepen these dynamics.",
      },
      {
        title: "Data-Informed, Human-Centered Curriculum Design",
        content:
          "This ongoing project explores how to use learning data to refine curricula without reducing students to metrics. I work on small-scale pilots that combine PROSLA outcomes, classroom observations, and ML-supported analysis to adjust tasks and assessments in ways that remain faithful to the complexity of human learning.",
      },
    ],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen overflow-x-hidden text-zinc-900 transition-colors duration-300 dark:text-zinc-100">

      {/* --- HEADER --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 md:mb-20 animate-fade-up">
          <div className="mb-8 md:mb-10">
            <span className="label-block bg-accent">Projects</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem] lg:leading-[1.04]">
            Applied Work &amp;
            <span className="block text-zinc-400 dark:text-zinc-600">
              Community
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl font-light leading-[1.5] text-zinc-700 dark:text-zinc-300 md:mt-12 md:text-2xl">
            My work bridges theory and practice, ranging from digital tools for language learning
            to community-based nonprofit leadership. Below is a selection of current and ongoing initiatives.
          </p>
        </div>
      </section>

      {/* --- ACCORDION SECTION — list-style, hairline-rule only --- */}
      <section className="bg-paper-soft py-20 transition-colors duration-300 dark:bg-ink-soft md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div>
            {projectsData.map((section, idx) => (
              <AccordionItem
                key={idx}
                index={idx + 1}
                section={section}
                defaultOpen={idx === 0}
                isLast={idx === projectsData.length - 1}
              />
            ))}
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

// --- LIST-STYLE ACCORDION ---
function AccordionItem({
  index,
  section,
  defaultOpen,
  isLast,
}: {
  index: number;
  section: ProjectSection;
  defaultOpen: boolean;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const numeral = String(index).padStart(2, "0");
  const panelId = `accordion-panel-${index}`;
  const triggerId = `accordion-trigger-${index}`;

  return (
    <div
      className={`border-t border-rule dark:border-rule-dark ${
        isLast ? "border-b" : ""
      }`}
    >
      {/* TRIGGER */}
      <h2 className="m-0">
        <button
          id={triggerId}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full select-none items-center justify-between gap-6 py-7 text-left transition-colors focus:outline-none focus-visible:bg-paper/40 dark:focus-visible:bg-ink/40"
        >
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="numeral text-sm text-zinc-400 dark:text-zinc-500">
              nº {numeral}.
            </span>
            <span className="font-display text-xl font-bold leading-[1.15] tracking-[-0.018em] text-zinc-900 transition-colors group-hover:text-accent dark:text-white dark:group-hover:text-accent-soft md:text-2xl">
              {section.category}
            </span>
          </div>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:text-accent dark:group-hover:text-accent-soft ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h2>

      {/* CONTENT PANEL */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] ${
          isOpen ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-10 pb-10 md:space-y-12 md:pb-12 md:pl-16">
          {section.items.map((item, i) => (
            <article key={i}>
              <h3 className="font-display mb-3 text-lg font-bold leading-[1.2] tracking-[-0.018em] text-zinc-950 dark:text-zinc-50 md:text-xl">
                {item.title}
              </h3>
              <p className="text-base leading-[1.62] text-zinc-600 dark:text-zinc-300 md:text-lg">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
