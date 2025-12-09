"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"; // Removed 'Menu' import
import { User } from "@supabase/supabase-js";

interface NavbarClientProps {
  user?: User | null;
  signOut?: () => Promise<void>;
}

export default function NavbarClient({ user, signOut }: NavbarClientProps) {
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
      <div className="flex w-full items-center justify-end pointer-events-auto">

        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`relative z-[110] mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
              : "border-zinc-200 bg-white/70 text-zinc-900 backdrop-blur-md hover:bg-white dark:border-zinc-700 dark:bg-black/50 dark:text-zinc-50"
          }`}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            // CUSTOM 2-LINE BURGER ICON
            // Matching the h-8 w-8 (32px) size of the previous icon
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              {/* Top Line */}
              <rect x="2" y="6" width="20" height="2" rx="1" />
              {/* Bottom Line (pushed down to y=16 to create space) */}
              <rect x="2" y="16" width="20" height="2" rx="1" />
            </svg>
          )}
        </button>
      </div>

      {/* --- OVERLAY MENU (Unchanged) --- */}
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
          className={`absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#2e3f90] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-8 py-12 md:px-12">
            <div className="mt-24 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <MenuLink href="/teaching" label="Teaching" onClick={closeMenu} />
                <MenuLink href="/research" label="Research" onClick={closeMenu} />
                <MenuLink href="/projects" label="Projects" onClick={closeMenu} />
                <MenuLink href="/about" label="About" onClick={closeMenu} />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <SocialIcon href="#" label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="X"><Twitter className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="Facebook"><Facebook className="h-5 w-5" /></SocialIcon>
                <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              {signOut ? (
                <AuthRow user={user || null} signOut={signOut} closeMenu={closeMenu} />
              ) : (
                <div className="text-[10px] uppercase tracking-widest text-white/50">
                  Site by Brinl
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Sub-components (MenuLink, SocialIcon, AuthRow) remain unchanged...
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

function AuthRow({ user, signOut, closeMenu }: { user: User | null; signOut: () => Promise<void>; closeMenu: () => void }) {
  if (user) {
    return (
      <div>
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/protected/dashboard"
            onClick={closeMenu}
            className="flex-1 rounded-md border border-white/25 bg-white/10 px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#2e3f90]"
          >
            Dashboard
          </Link>
          <form
            action={async () => {
              await signOut();
              closeMenu();
            }}
            className="flex-1"
          >
            <button className="w-full rounded-md bg-white px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-[#0b0f2b] transition hover:bg-white/90">
              Sign Out
            </button>
          </form>
        </div>
        <div className="mt-4 text-center text-[10px] uppercase tracking-widest text-white/50">
          Site by Brinl
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link
          href="/auth/signup"
          onClick={closeMenu}
          className="flex-1 rounded-md bg-white px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-[#0b0f2b] transition hover:bg-white/90"
        >
          Sign Up
        </Link>
        <Link
          href="/auth/login"
          onClick={closeMenu}
          className="flex-1 rounded-md border border-white/25 bg-white/10 px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#2e3f90]"
        >
          Sign In
        </Link>
      </div>
      <div className="mt-4 text-left text-[10px] uppercase tracking-widest text-white/50">
        Site by Brinl
      </div>
    </div>
  );
}