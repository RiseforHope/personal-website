import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "prod_tshirt",
    name: "PROSLA Signature Tee",
    price: 3500,
    image: "/images/store/hoddie-beige.jpg",
    description: "Heavyweight cotton, oversized fit. Puff-print logo.",
    printifyProductId: "REPLACE_WITH_PRODUCT_ID",
    printifyVariantId: "REPLACE_WITH_VARIANT_ID",
  },
  {
    id: "prod_tote",
    name: "Research Tote Bag",
    price: 2500,
    image: "/images/merch-tote.jpg",
    description: "Durable canvas for books and laptops. Internal pocket.",
    printifyProductId: "REPLACE_WITH_PRODUCT_ID",
    printifyVariantId: "REPLACE_WITH_VARIANT_ID",
  },
  {
    id: "prod_notebook",
    name: "Field Notes Journal",
    price: 1800,
    image: "/images/merch-notebook.jpg",
    description: "Dot grid, 120gsm paper. Perfect for drafting theories.",
    printifyProductId: "REPLACE_WITH_PRODUCT_ID",
    printifyVariantId: "REPLACE_WITH_VARIANT_ID",
  },
  {
    id: "prod_cap",
    name: "Dad Hat",
    price: 2800,
    image: "/images/merch-cap.jpg",
    description: "Embroidered logo, adjustable strap. 100% cotton.",
    printifyProductId: "REPLACE_WITH_PRODUCT_ID",
    printifyVariantId: "REPLACE_WITH_VARIANT_ID",
  },
];

export default function Store() {
  return (
    <main className="min-h-screen overflow-x-hidden text-zinc-900 transition-colors duration-300 dark:text-zinc-100">

      {/* --- HEADER (text + image) --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="label-block bg-accent">Store</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — text */}
          <div className="animate-fade-up">
            <h1 className="font-display mb-10 text-4xl font-bold leading-[1.1] tracking-[-0.025em] md:mb-12 md:text-7xl lg:text-[5.5rem] lg:leading-[1.04]">
              Support the
              <span className="block text-zinc-400 dark:text-zinc-600">
                Work
              </span>
            </h1>

            <p className="text-2xl font-light leading-[1.4] text-zinc-900 dark:text-zinc-100 md:text-3xl md:leading-[1.4]">
              A small, carefully chosen collection connected to my work in
              language, borders, and humane technology. All profits support{" "}
              <a
                href="https://www.riseforhope.org"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-accent dark:text-accent-soft"
              >
                Rise for Hope
              </a>
              , a nonprofit I founded to serve families facing pediatric cancer.
            </p>

            <p className="mt-8 text-lg leading-[1.62] text-zinc-600 dark:text-zinc-300">
              If you prefer to give directly, you can do that through the{" "}
              <a
                href="https://www.riseforhope.org"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-accent dark:text-accent-soft"
              >
                Rise for Hope website
              </a>
              . This page is simply another way to help, with something practical
              in your hands at the end.
            </p>
          </div>

          {/* RIGHT — image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-soft dark:bg-ink-soft animate-fade-up delay-100">
            <Image
              src="/images/store-hero.jpg"
              alt="Merchandise showcase"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="bg-paper-soft py-20 transition-colors duration-300 dark:bg-ink-soft md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- WHERE YOUR PURCHASE GOES --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl border-t border-rule pt-12 text-center dark:border-rule-dark">
          <h3 className="eyebrow mb-6 text-zinc-500 dark:text-zinc-400">
            Where your purchase goes
          </h3>

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/hands-r4h-logo.svg"
              alt="Rise for Hope Logo"
              width={80}
              height={80}
              className="h-16 w-16 object-contain"
            />
          </div>

          <p className="text-lg leading-[1.62] text-zinc-700 dark:text-zinc-300">
            After covering production costs, all remaining profits go to{" "}
            <a
              href="https://www.riseforhope.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-medium text-accent dark:text-accent-soft"
            >
              Rise for Hope
            </a>{" "}
            to support families walking through pediatric cancer.
          </p>
        </div>
      </section>

    </main>
  );
}
