"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarClientProps {
  user?: User | null; // Made optional to prevent errors if not passed
  signOut?: () => Promise<void>;
}

export default function NavbarClient({ user, signOut }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
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
    <nav className="sticky top-0 z-[100] w-full px-6 py-4 md:px-10">

      {/* Top Bar: Flex container for Toggle + Menu Button */}
      <div className="flex w-full items-center justify-end gap-4">


        {/* 2. Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`relative z-[110] inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
              : "border-zinc-200 bg-white/70 text-zinc-900 backdrop-blur-md hover:bg-white dark:border-zinc-700 dark:bg-black/50 dark:text-zinc-50"
          }`}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* --- OVERLAY MENU --- */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#2e3f90] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-8 py-12 md:px-12">

            {/* Navigation Links */}
            <div className="mt-16 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <MenuLink href="/teaching" label="Teaching" onClick={closeMenu} />
                <MenuLink href="/research" label="Research" onClick={closeMenu} />
                <MenuLink href="/projects" label="Projects" onClick={closeMenu} />
                <MenuLink href="/about" label="About" onClick={closeMenu} />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
                <SocialIcon href="#" label="X"><Twitter className="h-4 w-4" /></SocialIcon>
                <SocialIcon href="#" label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
                <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              </div>
            </div>

            {/* Footer / Auth */}
            <div className="mt-auto pt-12 border-t border-white/10">
              {/* Only render auth row if props exist */}
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

// ... Sub-components (MenuLink, SocialIcon, AuthRow) remain the same as previous response ...
function MenuLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-4xl font-medium tracking-tight text-white transition-opacity hover:opacity-70 md:text-5xl">
      {label}
    </Link>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-all hover:scale-110 hover:bg-white hover:text-[#2e3f90]">
      {children}
    </a>
  );
}

function AuthRow({ user, signOut, closeMenu }: { user: User | null; signOut: () => Promise<void>; closeMenu: () => void }) {
  // ... Keep your AuthRow logic here ...
  return <></>; // Placeholder to keep code block short, use your existing logic
}