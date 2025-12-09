// app/components/NewsSection.tsx
"use client";

import Link from "next/link";

// Dummy data
const projects = [
  {
    id: 1,
    category: "Research",
    title: "Bridging the Gap: Pedagogy in Border Contexts",
    intro: "An exploration of how language acquisition shifts when cultural borders are fluid rather than fixed.",
    date: "Oct 12, 2024",
    href: "/blog/post-1", // Added dummy href
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
    <section className="bg-[#f5f2ea] py-20 text-zinc-900">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-12 px-6 md:px-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-[18px] font-bold uppercase tracking-[0.25em] text-white">
              Updates
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Current Projects &amp; News
          </h2>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 px-6 md:px-16 scrollbar-hide">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative flex min-w-[85vw] flex-col bg-white shadow-sm transition-shadow hover:shadow-md md:min-w-[400px] snap-start p-8"
            >
              {/* 1. & 2. Image Removed. Label moved to Left */}
              <div className="mb-6">
                 <span className="inline-block bg-[#f5f2ea] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2e3f90]">
                  {item.category}
                </span>
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-1 flex-col">
                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[#0b0f2b] md:text-2xl">
                    {/* Make title clickable as well for better UX */}
                    <Link href={item.href || "#"} className="hover:text-[#2e3f90] transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600 line-clamp-3">
                    {item.intro}
                  </p>
                </div>

                {/* 3. Bottom line removed */}
                {/* 4. Author removed */}

                {/* 5. Date as Link with Arrow Animation (Your specific code) */}
                <div className="mt-auto">
                  <Link href={item.href || "#"} className="group block">
                    {/* Title + arrow always stay together */}
                    <div className="inline-flex items-center gap-3">
                      <div className="text-lg font-light uppercase tracking-[0.12em] text-zinc-800 sm:text-xl md:text-sm md:font-normal md:tracking-widest underline-offset-4 transition-colors group-hover:underline group-hover:text-[#2e3f90]">
                        {item.date}
                      </div>

                      <img
                        src="/icons/right-arrow-blk.svg"
                        alt="Arrow Right"
                        className="h-9 w-9 transition-transform group-hover:translate-x-1"
                      />
                    </div>

                    {/* Hidden subtitle logic from your snippet (optional) */}
                    <div className="mt-2 hidden text-sm text-zinc-600 md:block"></div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer */}
          <div className="w-6 shrink-0 md:w-16" />
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