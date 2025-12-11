"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

// --- DATA STRUCTURE ---
const projectsData = [
  {
    category: "Education Technology",
    items: [
      {
        title: "PROSLA Lesson Design Tool",
        content: "Proficiency Oriented Second Language Acquisition (PROSLA) is the backbone of my language teaching. I am developing a lesson-design tool that helps teachers create PROSLA-aligned tasks, learning outcomes, and assessments. The project combines my classroom practice with machine learning to suggest activities, sequence tasks, and keep proficiency—not test-prep—as the central goal."
      },
      {
        title: "Machine Learning Feedback for Language Learners",
        content: "In this project, I experiment with ML models that provide targeted feedback on student writing and speaking without replacing teacher judgment. The focus is on clarity, tone, and communicative effectiveness in the target language, with the system designed to be transparent and easily overridden by the teacher. The aim is to give students more practice opportunities while keeping the classroom humane and relationship-centered."
      }
    ]
  },
  {
    category: "Pedagogy and Curriculum",
    items: [
      {
        title: "PROSLA Classroom Labs",
        content: "I design and run classroom “labs” where Proficiency Oriented Second Language Acquisition is implemented across full units. Students work through task-based sequences that integrate interpretive, interpersonal, and presentational communication, supported by clear rubrics and ongoing feedback. These labs serve as living case studies for how structured, high-expectation teaching can coexist with warmth, flexibility, and student agency."
      },
      {
        title: "Storytelling and Podcast Projects",
        content: "In my language and literature courses, students create podcasts, stories, and multimodal projects that require sustained target-language use and serious engagement with texts. These projects are designed to move beyond simple comprehension checks and into interpretation, argument, and creative expression. They also function as testbeds for how digital tools can support student voice in rigorous but accessible ways."
      }
    ]
  },
  {
    category: "Nonprofit and Community Work",
    items: [
      {
        title: "Rise for Hope: Supporting Families Facing Pediatric Cancer",
        content: "As founder and director of Rise for Hope, I lead a nonprofit that supports children with cancer and their families through practical assistance and hopeful community. This work includes fundraising campaigns, volunteer coordination, and partnerships with local organizations. It is a concrete extension of my belief that education, technology, and care must ultimately serve real human needs."
      },
      {
        title: "Workshops for Teachers and Schools",
        content: "I design and deliver workshops on PROSLA-based language teaching, humane uses of AI in education, and critical approaches to digital tools. These sessions help educators understand what ML can and cannot do, how to integrate it without losing their professional judgment, and how to design classrooms that are demanding, inclusive, and hopeful."
      }
    ]
  },
  {
    category: "In Development",
    items: [
      {
        title: "Projectional Reciprocity in Education",
        content: "Building on my theoretical work on projectional reciprocity, I am developing a series of seminars and materials that help educators think about classrooms as sites of mutual formation. The project explores how feedback, relationships, and institutional structures shape both teacher and student, and how technology can either flatten or deepen these dynamics."
      },
      {
        title: "Data-Informed, Human-Centered Curriculum Design",
        content: "This ongoing project explores how to use learning data to refine curricula without reducing students to metrics. I work on small-scale pilots that combine PROSLA outcomes, classroom observations, and ML-supported analysis to adjust tasks and assessments in ways that remain faithful to the complexity of human learning."
      }
    ]
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* --- HEADER --- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
              Projects
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Applied Work &amp;
            <span className="block text-zinc-400 dark:text-zinc-600">
              Community
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 md:mt-12 md:text-2xl">
            My work bridges theory and practice, ranging from digital tools for language learning
            to community-based nonprofit leadership. Below is a selection of current and ongoing initiatives.
          </p>
        </div>
      </section>

      {/* --- ACCORDION SECTION --- */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 md:px-16">
          <div className="space-y-4">
            {projectsData.map((section, idx) => (
              <AccordionItem key={idx} section={section} defaultOpen={idx === 0} />
            ))}
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

/// --- ACCORDION COMPONENT ---
function AccordionItem({ section, defaultOpen }: { section: any, defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-sm overflow-hidden bg-[#f5f2ea] dark:bg-[#242730] transition-colors">

      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // UPDATES:
        // 1. Removed 'hover:bg-black/5' and 'dark:hover:bg-white/5' (No background change)
        // 2. Added 'focus:outline-none' (Removes the blue/black border on click)
        // 3. Added 'select-none' (Prevents text highlighting on double clicks)
        className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none select-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-[#2e3f90] dark:text-white md:text-xl">
          {section.category}
        </h2>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <ChevronUp className="h-6 w-6 text-zinc-400" /> : <ChevronDown className="h-6 w-6 text-zinc-400" />}
        </div>
      </button>

      {/* CONTENT PANEL */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-8 pt-2 space-y-10">
          {section.items.map((item: any, i: number) => (
            <div key={i} className="pl-4 border-l-2 border-zinc-300 dark:border-zinc-600">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}