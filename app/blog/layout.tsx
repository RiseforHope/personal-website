"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Subscribe from "@/components/Subscribe";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f2ea] dark:bg-[#242730] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      {/* REMOVED: <div className="h-32" /> */}
      {/* The Navbar pushes everything down automatically now. */}

      <article className="mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-16 md:pb-24">
        <Link
          href="/about"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#2e3f90] dark:text-zinc-400 dark:hover:text-[#5c7cfa]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Updates
        </Link>
        {children}
      </article>

      <div className="mx-auto max-w-7xl px-6 pb-20 flex justify-center">
        <Subscribe />
      </div>

    </main>
  );
}