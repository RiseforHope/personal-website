"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Subscribe from "@/components/Subscribe";

export default function Legal() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">

      {/* --- HEADER --- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">

        {/* Back Link */}
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#2e3f90] dark:text-zinc-400 dark:hover:text-[#5c7cfa]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Home
        </Link>

        <div className="mb-12">
          <span className="inline-flex bg-[#2e3f90] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white md:px-5">
            Legal
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-[1.3] tracking-tight md:text-6xl mb-8">
          Privacy Policy &amp; <br />
          <span className="text-zinc-400 dark:text-zinc-600">Terms of Service</span>
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Last Updated: December 2025
        </p>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <section className="bg-white dark:bg-[#2f333f] py-16 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 md:px-16 space-y-16">

          {/* 1. PRIVACY POLICY */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#2e3f90] dark:text-[#5c7cfa] mb-8 border-b border-zinc-200 dark:border-zinc-700 pb-4">
              Privacy Policy
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {/* FIX: Use div instead of p for blocks containing text + lists */}
              <div>
                <strong>1. Information Collection</strong><br />
                I collect information that you voluntarily provide, specifically your email address when you subscribe to the newsletter, and your shipping/billing details when you purchase items from the store.
              </div>

              <div>
                <strong>2. How I Use Your Data</strong><br />
                <ul className="list-disc pl-5 mt-2 space-y-1 text-base">
                  <li><strong>Newsletter:</strong> Your email is stored securely to send you updates regarding my research, teaching, and projects. I do not sell your email to third parties.</li>
                  <li><strong>Store Orders:</strong> Your address and payment information are used solely to process and ship your order.</li>
                </ul>
              </div>

              <div>
                <strong>3. Third-Party Services</strong><br />
                To provide these services, I use trusted third-party providers:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-base">
                  <li><strong>Supabase:</strong> For secure database storage of subscriber emails.</li>
                  <li><strong>Resend:</strong> To deliver the newsletter emails.</li>
                  <li><strong>Stripe:</strong> To process payments. I do not store your credit card information on my servers; it is handled directly by Stripe&apos;s secure infrastructure.</li>
                </ul>
              </div>

              <div>
                <strong>4. Your Rights</strong><br />
                You may unsubscribe from the newsletter at any time using the link provided in the emails or by contacting me directly. You may also request the deletion of your personal data from my records.
              </div>
            </div>
          </div>

          {/* 2. TERMS OF SERVICE */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#2e3f90] dark:text-[#5c7cfa] mb-8 border-b border-zinc-200 dark:border-zinc-700 pb-4">
              Terms of Service
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <div>
                <strong>1. Store Policy & Returns</strong><br />
                As this is a personal project supporting a nonprofit, I generally cannot offer returns or exchanges unless an item arrives damaged or defective. If there is an issue with your order, please contact me immediately, and I will do my best to resolve it.
              </div>

              <div>
                <strong>2. Shipping</strong><br />
                I aim to ship items within 3-5 business days. Once a package has been handed to the postal carrier, I cannot be responsible for shipping delays or lost packages, though I will assist where possible in tracking them down.
              </div>

              <div>
                <strong>3. Intellectual Property</strong><br />
                The content on this site, including the PROSLA methodology, essays, and research notes, is my intellectual property. You are welcome to reference this work for educational purposes with proper citation. Please do not reproduce substantial portions of this work for commercial purposes without permission.
              </div>

              <div>
                <strong>4. Nonprofit Transparency</strong><br />
                Profits from the store are donated to <em>Rise for Hope</em>. While I strive for transparency, the purchase of merchandise is technically a commercial transaction and not a tax-deductible donation. Direct donations should be made via the Rise for Hope website.
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="border-t border-zinc-200 dark:border-zinc-700 pt-12">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 italic">
              Questions regarding these terms? <br />
              Please contact: <a href="mailto:hello@brinl.com" className="underline hover:text-[#2e3f90] dark:hover:text-white">hello@brinl.com</a>
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="mx-auto max-w-7xl flex justify-center">
          <Subscribe />
        </div>
      </section>

    </main>
  );
}