"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { checkout } from "@/app/actions/stripe";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  printifyProductId: string;
  printifyVariantId: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPreviewOpen]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleBuy = async () => {
    setIsLoading(true);

    const result = await checkout(
      product.name,
      product.price,
      product.printifyProductId,
      product.printifyVariantId,
      quantity,
    );

    if (result?.url) {
      window.location.href = result.url;
    } else {
      setIsLoading(false);
      alert(`Error: ${result?.error || "Something went wrong."}`);
    }
  };

  return (
    <div className="group flex h-full flex-col">
      {/* Image — square edge, photographic */}
      <button
        type="button"
        onClick={openPreview}
        aria-label={`Preview ${product.name}`}
        className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-paper dark:bg-ink"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 400px, 90vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.04]"
        />

        {/* Quick-view eyebrow — minimal, matches the site's typographic system */}
        <span className="pointer-events-none absolute bottom-4 left-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          View →
        </span>
      </button>

      {/* Title + Price */}
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-base font-bold leading-[1.2] tracking-[-0.018em] text-zinc-950 dark:text-zinc-50 md:text-lg">
          {product.name}
        </h3>
        <p className="numeral shrink-0 text-base text-accent dark:text-accent-soft md:text-lg">
          ${(product.price / 100).toFixed(2)}
        </p>
      </div>

      {/* Description */}
      <p className="mb-8 text-sm leading-[1.55] text-zinc-600 dark:text-zinc-400">
        {product.description}
      </p>

      {/* Actions row — stepper + buy button, equal heights */}
      <div className="mt-auto flex items-stretch gap-3">
        <div className="flex items-center border border-rule dark:border-rule-dark">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="flex h-11 w-10 items-center justify-center text-zinc-500 transition-colors hover:text-zinc-900 disabled:opacity-30 disabled:hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-white"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="numeral w-8 text-center text-sm text-zinc-900 dark:text-white">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increment}
            className="flex h-11 w-10 items-center justify-center text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleBuy}
          disabled={isLoading}
          className="flex-1 bg-ink px-6 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-accent disabled:opacity-60 dark:bg-ink-panel dark:hover:bg-accent-soft"
        >
          {isLoading ? "Processing…" : "Buy now"}
        </button>
      </div>

      {/* Lightbox */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview for ${product.name}`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closePreview}
            aria-label="Close preview"
          />

          <div className="relative mx-4 w-full max-w-4xl">
            <div className="relative overflow-hidden bg-black">
              <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 900px, 95vw"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                type="button"
                onClick={closePreview}
                className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
