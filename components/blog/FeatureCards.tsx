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
    <section className="bg-white dark:bg-[#242730] transition-colors duration-300">
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-10 md:py-24">
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
          {/* Desktop Label */}
          <div className="hidden md:inline-flex bg-[#2e3f90] px-6 py-3 text-sm font-medium tracking-wide text-white">
            {label}
          </div>

          {/* Italic numeral — academic footnote-style ornament */}
          <div className="mt-6 hidden md:flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
            <span className="numeral text-base">nº {numeral}.</span>
            <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 md:mt-4 text-4xl font-bold leading-[1.15] tracking-[-0.022em] text-zinc-950 dark:text-zinc-50 md:text-5xl md:leading-[1.1]">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="mt-6 md:mt-8 max-w-prose text-lg leading-[1.62] text-zinc-600 dark:text-zinc-300">
            {excerpt}
          </p>

          {/* CTA Link */}
          <Link
            href={href}
            className="group mt-10 inline-flex w-full items-center justify-between gap-6 md:mt-12 md:w-auto md:min-w-[420px]
                       text-[#2e3f90] dark:text-[#5c7cfa] transition-colors"
          >
            <span className="link-underline text-base font-medium">
              Find out more about what {label.toLowerCase()} has to offer
            </span>

            <img
              src="/icons/right-arrow-blue.svg"
              alt=""
              className="h-6 w-12 transition-transform duration-300 group-hover:translate-x-1.5 dark:brightness-150"
            />
          </Link>
        </div>

        {/* --- IMAGE CONTENT --- */}
        <div
          className={`order-1 md:col-span-7 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          {/* Image Wrapper */}
          <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <div className="relative aspect-[16/10] md:aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Mobile Label Bar */}
          {/* Adjusted padding/size to match the rest of the site design (cleaner look) */}
          <div className="md:hidden -mt-px">
            <div className="inline-block w-fit max-w-[90%] bg-[#2e3f90] px-6 py-4 text-sm font-bold tracking-wide text-white">
              {label}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}