
"use client";

import Link from "next/link";
import { Instagram, Youtube, Linkedin, Bookmark } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import the new component

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-white py-12 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex w-full flex-col gap-6 px-6 md:px-10">

        {/* TOP ROW: Social Icons (Left) and Theme Toggle (Right) */}
        <div className="flex w-full items-center justify-between">

          {/* Social Icons Group */}
          <div className="flex items-center gap-5 text-zinc-400">
            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-label="TikTok"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <Instagram className="h-4 w-4" />
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <Youtube className="h-4 w-4" />
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <Linkedin className="h-4 w-4" />
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-label="X"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <Bookmark className="h-4 w-4" />
            </Link>

            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Link>
          </div>

          {/* New Theme Toggle Component */}
          <ThemeToggle />
        </div>

        {/* BOTTOM ROWS: Text Content */}
        <div className="space-y-6">
          <p className="text-sm font-light text-zinc-500">
            © 2025 PROSLA™ Method. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="#" className="hover:text-black dark:hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}