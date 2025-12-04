import Link from "next/link";
import { SmoothText } from "@/components/SmoothText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Academic Portfolio
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          <SmoothText text="Exploring the intersection of Data, Research, and Technology." />
        </h1>

        <div className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            Welcome. I am a researcher focusing on [Your Field Here]. This
            platform serves as a repository for my publications, academic
            thoughts, and ongoing projects.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/protected/dashboard"
            className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Dashboard
          </Link>
          <Link
            href="/auth/login"
            className="text-sm leading-6 font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Log in <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
