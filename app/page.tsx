import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/blog/FeatureCards";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <FeatureCards
        items={[
          {
            label: "TEACHING",
            title: "Why language class should feel like real life",
            excerpt:
              "There’s a tremendous vibrancy of learning when students do tasks that resemble actual communication. Here’s how I structure routines, retrieval, and performance so it stays human and rigorous.",
            href: "/blog/teaching-real-life",
            imageSrc: "/images/blog/teaching.jpg",
            imageAlt: "Students working together",
          },
          {
            label: "RESEARCH",
            title: "How I structure chapters so they don’t collapse",
            excerpt:
              "A minimalist system for outlining arguments, keeping sources tight, and writing sections that connect without repeating yourself into oblivion.",
            href: "/blog/structure-chapters",
            imageSrc: "/images/blog/research.jpg",
            imageAlt: "Writing desk and books",
          },
        ]}
      />
    </main>
  );
}
