import { getPostContent, getSortedPostsData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { meta, content } = getPostContent(params.slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="mb-8 block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to list
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {meta.title}
        </h1>
        <time className="mt-2 block text-zinc-500 dark:text-zinc-400">
          {meta.date}
        </time>
      </header>

      <div className="prose prose-zinc dark:prose-invert">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
