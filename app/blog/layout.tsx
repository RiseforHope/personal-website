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
    <main className="min-h-screen bg-[#f5f2ea] dark:bg-[#242730] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      {/* Spacer & Article Container */}
      <div className="h-20" />
      <article className="mx-auto max-w-3xl px-6 pt-8 pb-20 md:pt-12 md:pb-24">
        <Link
          href="/about"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#2e3f90] dark:text-zinc-400 dark:hover:text-[#5c7cfa]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Updates
        </Link>
        {children}
      </article>

      {/* FOOTER AREA */}
      {/* Added 'flex justify-center' here to center the form */}
      <div className="mx-auto max-w-7xl px-6 pb-20 flex justify-center">
        <Subscribe />
      </div>

    </main>
  );
}