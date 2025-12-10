"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import Image
import { X, Instagram, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[100] w-full px-6 py-4 md:px-10 pointer-events-none">

      {/* Top Bar */}
      {/* UPDATED:
          1. Changed 'justify-end' to 'justify-between' to push Logo left and Burger right.
          2. Removed 'pointer-events-auto' from here (moved to individual items) so the gap between them remains clickable.
      */}
      <div className="flex w-full items-center justify-between">

        {/* --- 1. LOGO (Left) --- */}
        {/* mt-4 aligns it with the lowered burger. pointer-events-auto makes it clickable. */}
        <Link href="/" className="pointer-events-auto relative z-[110] mt-4">
          <Image
            src="/images/logo.svg" // <--- REPLACE with your logo path (e.g., .svg or .png)
            alt="Brand Logo"
            width={120} // Adjust width based on your actual file
            height={40} // Adjust height based on your actual file
            className="h-10 w-auto object-contain dark:invert" // dark:invert makes black logos white in dark mode automatically
            priority
          />
        </Link>

        {/* --- 2. MENU TOGGLE (Right) --- */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          // Added 'pointer-events-auto' here so the button works
          className={`pointer-events-auto relative z-[110] mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
              : "border-zinc-200 bg-white/70 text-zinc-900 backdrop-blur-md hover:bg-white dark:border-zinc-700 dark:bg-black/50 dark:text-zinc-50"
          }`}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            // Custom 2-line Burger
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <rect x="2" y="6" width="20" height="2" rx="1" />
              <rect x="2" y="16" width="20" height="2" rx="1" />
            </svg>
          )}
        </button>
      </div>

      {/* --- OVERLAY MENU --- */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ease-in-out pointer-events-auto ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#242730] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-8 py-12 md:px-12">

            {/* Navigation Links */}
            <div className="mt-24 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <MenuLink href="/teaching" label="Teaching" onClick={closeMenu} />
                <MenuLink href="/research" label="Research" onClick={closeMenu} />
                <MenuLink href="/projects" label="Projects" onClick={closeMenu} />
                <MenuLink href="/about" label="About" onClick={closeMenu} />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <SocialIcon href="#" label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="X"><Twitter className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="Facebook"><Facebook className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
              </div>
            </div>

            {/* Footer Area (Brinl) */}
            <div className="mt-auto pt-12 border-none">
              <BrinlFooter />
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

// --- SUB COMPONENTS ---

function BrinlFooter() {
  return (
    <div className="flex items-center justify-end gap-2 text-[10px] text-white/50">
      <span>Site by Brinl</span>
      <a href="mailto:hello@brinl.com" className="hover:text-white transition-colors">
        <Mail className="h-3 w-3" />
      </a>
    </div>
  );
}

function MenuLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-4xl font-medium tracking-tight text-white transition-opacity hover:opacity-70 md:text-5xl">
      {label}
    </Link>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-all hover:scale-110 hover:bg-white hover:text-[#2e3f90]">
      {children}
    </a>
  );
}