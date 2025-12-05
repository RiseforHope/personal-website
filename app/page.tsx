import Link from "next/link";
import { GraduationCap, ScrollText, FolderKanban, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero"; // Import the new Hero

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero Section (With Mesh Gradient) */}
      <Hero />

      {/* 2. Three Clickable Blocks (Below the fold) */}
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-20 dark:bg-black md:px-10">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* Block 1: Teaching */}
          <Link
            href="/teaching"
            className="group relative flex flex-col items-center justify-center space-y-4 rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-100"
          >
            <div className="rounded-full bg-zinc-50 p-4 transition-colors group-hover:bg-zinc-100 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
              <GraduationCap className="h-6 w-6 text-zinc-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white" />
            </div>
            <div>
              <h3 className="font-title text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Teaching
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Courses, workshops, and mentorship.
              </p>
            </div>
            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </div>
          </Link>

          {/* Block 2: Research & Writing */}
          <Link
            href="/research"
            className="group relative flex flex-col items-center justify-center space-y-4 rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-100"
          >
            <div className="rounded-full bg-zinc-50 p-4 transition-colors group-hover:bg-zinc-100 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
              <ScrollText className="h-6 w-6 text-zinc-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white" />
            </div>
            <div>
              <h3 className="font-title text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Research & Writing
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Publications, essays, and notes.
              </p>
            </div>
            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </div>
          </Link>

          {/* Block 3: Projects */}
          <Link
            href="/projects"
            className="group relative flex flex-col items-center justify-center space-y-4 rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-100"
          >
            <div className="rounded-full bg-zinc-50 p-4 transition-colors group-hover:bg-zinc-100 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
              <FolderKanban className="h-6 w-6 text-zinc-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white" />
            </div>
            <div>
              <h3 className="font-title text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Projects
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Tools, apps, and experiments.
              </p>
            </div>
            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}