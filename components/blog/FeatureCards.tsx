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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-16 md:px-10 md:py-20">
        {items.map((item, i) => (
          <FeatureCard key={item.href} item={item} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
                       item,
                       reverse,
                     }: {
  item: FeatureItem;
  reverse: boolean;
}) {
  const { label, title, excerpt, href, imageSrc, imageAlt = "" } = item;

  return (
    <article className="relative">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        {/* TEXT */}
        <div className={`md:col-span-5 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="hidden md:inline-flex bg-[#722f37] px-10 py-4 text-sm font-medium tracking-wide text-white">
            {label}
          </div>

          <h2 className="mt-4 md:mt-10 text-4xl font-bold leading-[1.2] tracking-tight text-zinc-950 md:text-5xl md:leading-[1.2]">
            {title}
          </h2>

          <p className="mt-10 md:mt-8 max-w-prose text-body text-zinc-950 leading-[1.62] md:leading-[1.62]">{excerpt}</p>

          {/* CTA row */}
          <Link
            href={href}
            className="group mt-12 inline-flex w-full items-center justify-between gap-6 md:w-auto md:min-w-[420px]"
            style={{ color: "#722f37" }}
          >
<span className="text-base font-medium underline-offset-4 group-hover:underline">
              Find out more about what {label.toLowerCase()} has to offer
            </span>

            <img
              src="/icons/right-arrow.svg"
              alt=""
              className="h-6 w-12 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* IMAGE */}
        <div className={`md:col-span-7 ${reverse ? "md:order-1" : "md:order-2"}`}>
          {/* Image wrapper (no radius) */}
          <div className="relative overflow-hidden bg-zinc-100">
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

          {/* Mobile label bar OUTSIDE the image, flush to it */}
          <div className="md:hidden -mt-px">
            <div className="inline-block w-fit max-w-[85%] bg-[#722f37] px-8 py-6 text-xl font-medium tracking-wide text-white">
              {label}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
