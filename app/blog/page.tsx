import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Research & Thoughts
      </h1>

      <div className="space-y-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative flex flex-col items-start"
          >
            <div className="relative z-10 w-full rounded-2xl bg-zinc-50 p-6 transition group-hover:bg-zinc-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                <Link href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h2>
              <time className="relative z-10 mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
                {post.date}
              </time>
              <p className="relative z-10 mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
