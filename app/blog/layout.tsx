"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Subscribe from "@/components/Subscribe";

export default function BlogLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    // SHARED BACKGROUND & TRANSITIONS
    <main className="min-h-screen bg-[#f5f2ea] dark:bg-[#242730] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      {/* NAV BAR SPACER */}
      <div className="h-24" />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">

        {/* SHARED BACK LINK */}
        <Link
          href="/about"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#2e3f90] dark:text-zinc-400 dark:hover:text-[#5c7cfa]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Updates
        </Link>

        {/* THE INDIVIDUAL POST CONTENT GOES HERE */}
        {children}

      </article>

      {/* SHARED SUBSCRIBE FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <Subscribe />
      </div>

    </main>
  );
}