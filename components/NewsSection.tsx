"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Theoretical Note",
    title: "Projectional Reciprocity: A Relational Theory of Development",
    intro: "I propose projectional reciprocity: we grow through reciprocal encounters.",
    date: "9 Dec. 2025",
    href: "/blog/projectional-reciprocity",
  },
  {
    id: 2,
    category: "Publication",
    title: "La poesía guineoecuatoriana: Reseña académica",
    intro:
      "La literatura guineoecuatoriana escrita en español en su entorno colonial y (trans)nacional.",
    date: "Sep 28, 2024",
    href: "/blog/poesia-guineoecuatoriana",
  },
  {
    id: 3,
    category: "Publication",
    title: "The Future of Nonprofit Language Education",
    intro:
      "Discussing sustainable models for community-based education programs in under-served areas.",
    date: "Aug 15, 2024",
    href: "/blog/post-3",
  },
  {
    id: 4,
    category: "Event",
    title: "Annual Educator Symposium 2025",
    intro:
      "Join us for a weekend of collaborative learning, strategy sharing, and curriculum development.",
    date: "July 22, 2024",
    href: "/blog/post-4",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-paper py-20 text-zinc-900 transition-colors duration-300 dark:bg-ink dark:text-zinc-100 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 px-6 md:px-10 md:mb-16">
          <div className="mb-6">
            <span className="label-block bg-accent">Updates</span>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-bold tracking-[-0.022em] text-zinc-900 dark:text-white md:text-5xl md:leading-[1.08]">
              Current Projects &amp; News
            </h2>

            <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500 md:flex">
              <span>Scroll</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500 md:hidden">
              Swipe to explore →
            </div>
          </div>
        </div>

        {/* CARDS — horizontal snap scroll */}
        <div className="scrollbar-hide flex w-full cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 active:cursor-grabbing">

          {/* Left edge spacer — matches header padding */}
          <div className="w-6 shrink-0 md:w-10" />

          {projects.map((item) => (
            <article
              key={item.id}
              className="group relative flex min-w-[85vw] snap-start flex-col bg-paper-soft p-8 transition-colors duration-300 dark:bg-ink-soft md:min-w-[420px]"
            >
              {/* Category */}
              <div className="mb-6">
                <span className="inline-block bg-paper px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent dark:bg-ink dark:text-accent-soft">
                  {item.category}
                </span>
              </div>

              {/* Title + intro */}
              <div className="flex flex-1 flex-col">
                <div className="mb-8">
                  <h3 className="font-display mb-3 text-xl font-bold leading-[1.18] tracking-[-0.018em] text-zinc-950 dark:text-white md:text-2xl">
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-accent dark:hover:text-accent-soft"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-base leading-[1.55] text-zinc-600 line-clamp-3 dark:text-zinc-400">
                    {item.intro}
                  </p>
                </div>

                {/* Date + arrow */}
                <Link href={item.href} className="group/cta mt-auto inline-flex items-center gap-3">
                  <span className="link-underline numeral text-sm text-zinc-700 group-hover/cta:text-accent dark:text-zinc-300 dark:group-hover/cta:text-accent-soft">
                    {item.date}
                  </span>
                  <img
                    src="/icons/right-arrow-blk.svg"
                    alt=""
                    className="h-6 w-7 transition-transform duration-300 group-hover/cta:translate-x-1.5 dark:invert"
                  />
                </Link>
              </div>
            </article>
          ))}

          {/* Right edge spacer */}
          <div className="w-6 shrink-0 md:w-10" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
