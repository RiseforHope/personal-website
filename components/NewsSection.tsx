// app/components/NewsSection.tsx
import Image from "next/image";

// Dummy data to demonstrate the layout
const projects = [
  {
    id: 1,
    category: "Research",
    image: "/images/blog/teaching.jpg",
    title: "Bridging the Gap: Pedagogy in Border Contexts",
    intro: "An exploration of how language acquisition shifts when cultural borders are fluid rather than fixed.",
    date: "Oct 12, 2024",
    author: "J. B. García",
  },
  {
    id: 2,
    category: "Workshop",
    image: "/images/blog/teaching.jpg",
    title: "Humane Innovation in the Classroom",
    intro: "A practical guide to implementing technology without losing the human connection that drives learning.",
    date: "Sep 28, 2024",
    author: "Team Lead",
  },
  {
    id: 3,
    category: "Publication",
    image: "/images/blog/teaching.jpg",
    title: "The Future of Nonprofit Language Education",
    intro: "Discussing sustainable models for community-based education programs in under-served areas.",
    date: "Aug 15, 2024",
    author: "J. B. Garcia",
  },
  {
    id: 4,
    category: "Event",
    image: "/images/project-4.jpg",
    title: "Annual Educator Symposium 2025",
    intro: "Join us for a weekend of collaborative learning, strategy sharing, and curriculum development.",
    date: "July 22, 2024",
    author: "Events Team",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#f5f2ea] py-20 text-zinc-900">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER - Aligned with previous layouts */}
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
        {/* - overflow-x-auto: Enables horizontal scrolling
            - snap-x: Enforces smooth snapping to cards
            - scrollbar-hide: Utility to hide the scrollbar (see styles below)
        */}
        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 px-6 md:px-16 scrollbar-hide">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative flex min-w-[85vw] flex-col bg-white shadow-sm transition-shadow hover:shadow-md md:min-w-[400px] snap-start"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* LABEL: Bottom Right Edge */}
                <div className="absolute bottom-0 right-0 z-10 bg-[#2e3f90] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  {item.category}
                </div>
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-1 flex-col p-8">
                {/* Intro Text */}
                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[#0b0f2b] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600 line-clamp-3">
                    {item.intro}
                  </p>
                </div>

                {/* FOOTER: Date & Author */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <span>{item.date}</span>
                  <span className="text-[#2e3f90]">{item.author}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer to ensure last card isn't flush with edge on scroll */}
          <div className="w-6 shrink-0 md:w-16" />
        </div>
      </div>

      {/* OPTIONAL: Scrollbar Hiding Styles (Add to globals.css if preferred) */}
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