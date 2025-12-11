"use client";

import { useState } from "react";
import Image from "next/image";
import { checkout } from "@/app/actions/stripe"; // We will create this next

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuy = async () => {
    setIsLoading(true);
    // Call the Server Action
    const result = await checkout(product.name, product.price);

    if (result?.url) {
      window.location.href = result.url; // Redirect to Stripe
    } else {
      setIsLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-sm mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-lg font-medium text-[#2e3f90] dark:text-[#5c7cfa]">
          ${(product.price / 100).toFixed(2)}
        </p>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        disabled={isLoading}
        className="mt-auto w-full border border-zinc-200 bg-white py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white disabled:opacity-50 dark:border-zinc-700 dark:bg-[#242730] dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
      >
        {isLoading ? "Loading..." : "Buy Now"}
      </button>
    </div>
  );
}