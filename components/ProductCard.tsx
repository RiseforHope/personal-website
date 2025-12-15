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

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuy = async () => {
    setIsLoading(true);

    const result = await checkout(
        product.name,
        product.price,
        product.printifyProductId,
        product.printifyVariantId,
        quantity
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
        {/* Image Container (single image, clickable for preview) */}
        <button
            type="button"
            onClick={openPreview}
            aria-label={`Preview ${product.name}`}
            className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800"
        >
          <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 768px) 400px, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Optional subtle hint (only on hover/focus) */}
          <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium tracking-wide text-white/90 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          Quick view
        </span>
        </button>

        {/* Title & Price */}
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-[#2e3f90] dark:text-[#5c7cfa]">
            ${(product.price / 100).toFixed(2)}
          </p>
        </div>

        {/* Description */}
        <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {product.description}
        </p>

        {/* ACTIONS ROW: Counter + Buy Button */}
        <div className="mt-auto flex items-stretch gap-3">
          <div className="flex items-center border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-[#242730]">
            <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className="flex h-full w-10 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="w-8 text-center text-sm font-bold text-zinc-900 dark:text-white">
            {quantity}
          </span>

            <button
                type="button"
                onClick={increment}
                className="flex h-full w-10 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
              type="button"
              onClick={handleBuy}
              disabled={isLoading}
              className="flex-1 border border-zinc-200 bg-white py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white disabled:opacity-50 dark:border-zinc-700 dark:bg-[#242730] dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            {isLoading ? "Processing..." : "Buy Now"}
          </button>
        </div>

        {/* Lightbox Preview */}
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
                <div className="relative overflow-hidden bg-black shadow-2xl">
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
