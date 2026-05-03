import Link from "next/link";
import Image from "next/image";

type FeatureItem = {
  label: string;
  title: string;
  excerpt: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
};

export function FeatureCards({ items }: { items: FeatureItem[] }) {
  return (
    <section className="bg-paper-soft transition-colors duration-300 dark:bg-ink">
      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 md:px-10 md:py-28">
        {items.map((item, i) => (
          <FeatureCard key={item.href} item={item} reverse={i % 2 === 1} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
                       item,
                       reverse,
                       index,
                     }: {
  item: FeatureItem;
  reverse: boolean;
  index: number;
}) {
  const { label, title, excerpt, href, imageSrc, imageAlt = "" } = item;
  const numeral = String(index).padStart(2, "0");

  return (
    <article className="relative">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:items-start md:gap-12">

        {/* --- TEXT CONTENT --- */}
        <div
          className={`order-2 md:col-span-5 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {/* Label — desktop only; mobile gets the bar over the image */}
          <div className="hidden md:inline-flex">
            <span className="label-block bg-accent">{label}</span>
          </div>

          {/* Italic numeral — academic footnote ornament */}
          <div className="mt-7 hidden md:flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
            <span className="numeral text-base">nº {numeral}.</span>
            <span aria-hidden className="h-px w-10 bg-rule dark:bg-rule-dark" />
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.12] tracking-[-0.022em] text-zinc-950 dark:text-zinc-50 md:text-5xl md:leading-[1.08]">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="mt-6 max-w-prose text-lg leading-[1.62] text-zinc-600 dark:text-zinc-300 md:mt-8">
            {excerpt}
          </p>

          {/* CTA */}
          <Link
            href={href}
            className="group/cta mt-10 inline-flex items-center gap-5 text-accent transition-colors dark:text-accent-soft md:mt-12"
          >
            <span className="link-underline text-base font-medium">
              Read more on {label.toLowerCase()}
            </span>
            <img
              src="/icons/right-arrow-blue.svg"
              alt=""
              className="h-5 w-10 transition-transform duration-300 group-hover/cta:translate-x-1.5 dark:brightness-150"
            />
          </Link>
        </div>

        {/* --- IMAGE CONTENT --- */}
        <div
          className={`group/img order-1 md:col-span-7 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <div className="relative aspect-[16/10] md:aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover/img:scale-[1.025]"
                priority={false}
              />
            </div>
          </div>

          {/* Mobile label bar — sits flush under the image */}
          <div className="md:hidden">
            <span className="label-block bg-accent">{label}</span>
          </div>
        </div>

      </div>
    </article>
  );
}
