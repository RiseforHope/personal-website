"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Research",
    title: "Bridging the Gap: Pedagogy in Border Contexts",
    intro: "An exploration of how language acquisition shifts when cultural borders are fluid rather than fixed.",
    date: "Oct 12, 2024",
    href: "/blog/post-1",
  },
  {
    id: 2,
    category: "Workshop",
    title: "Humane Innovation in the Classroom",
    intro: "A practical guide to implementing technology without losing the human connection that drives learning.",
    date: "Sep 28, 2024",
    href: "/blog/post-2",
  },
  {
    id: 3,
    category: "Publication",
    title: "The Future of Nonprofit Language Education",
    intro: "Discussing sustainable models for community-based education programs in under-served areas.",
    date: "Aug 15, 2024",
    href: "/blog/post-3",
  },
  {
    id: 4,
    category: "Event",
    title: "Annual Educator Symposium 2025",
    intro: "Join us for a weekend of collaborative learning, strategy sharing, and curriculum development.",
    date: "July 22, 2024",
    href: "/blog/post-4",
  },
];

export default function NewsSection() {
  return (
    // Section Background: Beige -> Dark Base (#242730)
    <section className="bg-[#f5f2ea] dark:bg-[#242730] py-20 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 px-6 md:px-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white md:text-sm">
              Updates
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-zinc-900 dark:text-white">
            Current Projects &amp; News
          </h2>
        </div>

        {/* CARDS SCROLL */}
        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 px-6 md:px-16 scrollbar-hide">
          {projects.map((item) => (
            <div
              key={item.id}
              // CARD BACKGROUND: White -> Lighter Dark (#2f333f)
              className="group relative flex min-w-[85vw] flex-col bg-white dark:bg-[#2f333f] shadow-sm transition-all hover:shadow-md md:min-w-[400px] snap-start p-8"
            >
              {/* Label */}
              <div className="mb-6">
                {/* Label BG: Beige -> Dark Base (#242730) to contrast with the card */}
                <span className="inline-block bg-[#f5f2ea] dark:bg-[#242730] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2e3f90] dark:text-zinc-300">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[#0b0f2b] dark:text-white md:text-2xl">
                    <Link href={item.href} className="hover:text-[#2e3f90] dark:hover:text-[#5c7cfa] transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {item.intro}
                  </p>
                </div>

                {/* EXACT ANIMATION STRUCTURE RESTORED */}
                <div className="mt-auto">
                  <Link href={item.href} className="group block">
                    {/* Title + arrow always stay together */}
                    <div className="inline-flex items-center gap-3">
                      <div className="text-lg font-light uppercase tracking-[0.12em] text-zinc-800 dark:text-zinc-200 sm:text-xl md:text-sm md:font-normal md:tracking-widest underline-offset-4 transition-colors group-hover:underline group-hover:text-[#2e3f90] dark:group-hover:text-[#5c7cfa]">
                        {item.date}
                      </div>

                      <img
                        src="/icons/right-arrow-blk.svg"
                        alt="Arrow"
                        className="h-9 w-9 transition-transform group-hover:translate-x-1 dark:invert"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="w-6 shrink-0 md:w-16" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}