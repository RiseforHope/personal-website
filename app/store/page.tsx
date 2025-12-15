"use client";

import Image from "next/image";
import ProductCard from "@/components/ProductCard";

// Define your 4 items here
const products = [
  {
    id: "prod_tshirt",
    name: "PROSLA Signature Tee",
    price: 3500,
    image: "/images/store/hoddie-beige.jpg",
    description: "Heavyweight cotton, oversized fit. puff print logo.",
    // NEW: Printify IDs (Replace these with real numbers from Printify later)
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
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* HEADER SECTION (Grid Layout) */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">

        {/* Label (Full Width) */}
        <div className="mb-8 md:mb-12">
          <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
            Store
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* LEFT COLUMN: Text Content */}
          <div>
            <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-7xl lg:text-[5.5rem] mb-8 md:mb-12">
              Support the
              <span className="block text-zinc-400 dark:text-zinc-600">
                Work
              </span>
            </h1>

            <div className="space-y-8 text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-2xl">
              <p>
                On this page, I share a small, carefully designed collection connected to my work in language, borders, and humane technology. These items are sold through my personal site, and all profits support Rise for Hope, a nonprofit I founded to serve families facing pediatric cancer.
              </p>

              <p>
                If you prefer to give directly, you can always do that through the{' '}
                <a
                  href="https://www.riseforhope.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#2e3f90] hover:underline dark:text-white"
                >
                  <span className="bg-gradient-to-r from-[#30d4ef] via-[#3b82f6] to-[#37e581] bg-clip-text text-transparent">
                  Rise for Hope website.
                  </span>
                </a>{' '}
                This page is simply another way to help, with something practical in your hands at the end.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="relative h-[400px] w-full lg:h-[600px] lg:mt-4 bg-zinc-100 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <Image
              src="/images/store-hero.jpg"
              alt="Merchandise showcase"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER: Where your purchase goes */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-2xl border-t border-zinc-200 pt-12 text-center dark:border-zinc-700">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Where your purchase goes
          </h3>

          {/* HEART SVG LOGO SPACE */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/hands-r4h-logo.svg"
              alt="Rise for Hope Logo"
              width={100}
              height={100}
              className="w-15 h-15 object-contain"
            />
          </div>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Items are sold through my personal site, and after covering production costs, I send the remaining profits to{' '}
            <a
              href="https://www.riseforhope.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2e3f90] hover:underline dark:text-white"
            >
              <span className="bg-gradient-to-r from-[#30d4ef] via-[#3b82f6] to-[#37e581] bg-clip-text text-transparent">
              Rise for Hope
              </span>
            </a>
            {' '}to support families walking through pediatric cancer.
          </p>
        </div>
      </section>

    </main>
  );
}