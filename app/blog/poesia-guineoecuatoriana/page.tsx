"use client";

import Image from "next/image";
import { Share2 } from "lucide-react"; // Import Share icon

export default function Page() {

  // Logic for the Share Button
  const handleShare = async () => {
    // Check if the browser supports the native share API (Mobile/Modern Browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Projectional Reciprocity",
          text: "Check out this theoretical note by J. Bladimir Garcia.",
          url: window.location.href
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for desktop browsers that don't support share (Copy to Clipboard)
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      {/* 1. TOP IMAGE (Visible on ALL screens) */}
      <div
        className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800 md:mb-16">
        {/* Replace src with your actual image path */}
        <Image
          src="/images/post-hero-1.jpg"
          alt="Abstract representation of development"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* --- HEADER --- */}
      <header className="mb-12 md:mb-16">

        {/* 2. DATE UNDER LABEL (Changed to flex-col) */}
        <div className="mb-6 flex flex-col items-start gap-3">
          <span className="inline-block bg-[#2e3f90] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Theoretical Note
          </span>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            9 Dec. 2025
          </span>
        </div>

        <h1
          className="text-4xl font-bold leading-tight tracking-tight text-[#0b0f2b] dark:text-white md:text-5xl lg:text-6xl">
          Review of Dr Lawo-Sukam's book
        </h1>
      </header>

      {/* --- CONTENT --- */}
      <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:tracking-tight
                      prose-a:text-[#2e3f90] dark:prose-a:text-[#5c7cfa]
                      prose-blockquote:border-l-[#2e3f90] prose-blockquote:text-xl prose-blockquote:italic">

        <p className="lead">
          La <strong>literatura guineoecuatoriana</strong> escrita en español entraña una diversidad de entornos coloniales y (trans)nacionales en cuya expresión se hace evidente una poderosa y ferviente inclinación hacia lo emocional y simbólico, es decir, hacia la poesía.
        </p>

        <h3> Review of Alain Lawo-Sukam's "La poesía guineoecuatoriana en español en su contexto colonial y (trans)nacional" </h3>
        <p>
          A través de la literatura guineoecuatoriana se forja una historia de la literatura guineoecuatoriana a la vez fascinante y nefasta: fascinante porque su poesía escrita en español está atemperada por una fértil variedad cultural y étnica; nefasta por la triste realidad que la engendró. El poder, la soberbia, las riquezas e incluso la cultura misma del colono español en Guinea Ecuatorial yace allí donde no existe medio para expresar sino desde la  periferia  las emociones del ente  colonizado. Huelga anotar que, a raíz  de  la penosa situación en la que se encuentran las escritoras y los escritores guineoecuatorianos, surge (o debe surgir) el estudio crítico literario y político de cómo se muestra la cotidianidad de  sus  vidas  como  personas  colonizadas  ante  el colonizador. Por  consiguiente, a  la  poesía guineoecuatoriana escrita en español le urge, porque se lo ha ganado, un espacio relevante en la investigación académica universitaria. Esto es lo que arguye, casi a gritos, el libro que aquí comentamos
        </p>

        {/* 3. FUNCTIONAL SHARE BUTTON (Before the divider) */}
        <div className="mt-12 mb-8">
          <button
            onClick={handleShare}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2e3f90] dark:text-[#5c7cfa] transition-colors hover:text-[#2e3f90]/80"
          >
            <Share2 className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            Share this entry
          </button>
        </div>

        {/* --- CONTACT CTA (The "Soft Line" Section) --- */}
        <div className="border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-base italic text-zinc-600 dark:text-zinc-400">
            This entry outlines the core concepts of ongoing research. If you are interested in reading the full working
            paper, please{" "}
            <a href="mailto:bladimir@riseforhope.org" className="font-semibold no-underline hover:underline">
              get in touch
            </a>.
          </p>
        </div>

      </div>
    </>
  );
}