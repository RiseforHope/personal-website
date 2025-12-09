"use client";

import Link from "next/link";

// Sample data structure
const newsItems = [
  {
    id: 1,
    label: "Conference",
    title: "Keynote at the International Symposium on Bilingualism",
    description:
      "Discussing the future of heritage language education and the role of digital storytelling in preserving cultural narratives.",
    date: "Oct 12, 2024",
    href: "/blog/symposium-2024",
  },
  {
    id: 2,
    label: "Publication",
    title: "New Article: 'Pedagogy of the Borderlands'",
    description:
      "Published in the Journal of Latin American Educational Studies. An exploration of teaching methods in conflict zones.",
    date: "Sep 28, 2024",
    href: "/blog/pedagogy-borderlands",
  },
  {
    id: 3,
    label: "Workshop",
    title: "Digital Humanities for High School Educators",
    description:
      "A weekend intensive helping local educators integrate digital archives into their history curriculum.",
    date: "Aug 15, 2024",
    href: "/blog/digital-humanities-workshop",
  },
];

export default function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-16 md:py-20">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
        News & Updates
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: (typeof newsItems)[0] }) {
  return (
    <div className="flex flex-col items-start gap-4">
      {/* 2. Label on the left */}
      <span className="inline-block bg-[#f5f2ea] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2e3f90]">
        {item.label}
      </span>

      {/* Main Title & Description */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold leading-tight text-zinc-900">
          <Link href={item.href} className="hover:text-[#2e3f90] transition-colors">
            {item.title}
          </Link>
        </h3>
        <p className="text-base leading-relaxed text-zinc-600">
          {item.description}
        </p>
      </div>

      {/* 3. No bottom dividing line */}
      {/* 4. Author removed */}

      {/* 5. Date as Link with Arrow Animation */}
      <div className="mt-2">
        <Link href={item.href} className="group block">
          {/* Title + arrow always stay together */}
          <div className="inline-flex items-center gap-3">
            <div className="text-lg font-light uppercase tracking-[0.12em] text-zinc-800 sm:text-xl md:text-sm md:font-normal md:tracking-widest underline-offset-4 transition-colors group-hover:underline group-hover:text-[#2e3f90]">
              {item.date}
            </div>

            {/* Ensure this path exists in your public folder, or swap for a Lucide icon */}
            <img
              src="/icons/right-arrow-blk.svg"
              alt="Arrow Right"
              className="h-9 w-9 transition-transform group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}