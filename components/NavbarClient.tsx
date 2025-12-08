"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface NavbarClientProps {
  user: User | null;
  signOut: () => Promise<void>;
}

export default function NavbarClient({ user, signOut }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent px-6 py-4 md:px-10">
      <div className="flex w-full items-center justify-end">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
            isOpen
              ? "border-white/30 bg-white/10 text-white"
              : "border-zinc-200 bg-white/70 text-zinc-900 backdrop-blur hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-zinc-50"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Overlay + slide-in panel */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ease-in-out ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop (darker on desktop) */}
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full transition-colors duration-500 ${
            isOpen ? "bg-black/40 md:bg-black/50" : "bg-transparent"
          }`}
        />

        {/* Panel: full width on mobile, half on desktop */}
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-1/2 bg-[#2e3f90] text-white transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-6 py-10 md:px-10">
            <div className="mt-16 flex flex-col gap-8">
              <div onClick={closeMenu} className="flex flex-col gap-8">
                <MenuLink href="/teaching" label="Teaching" />
                <MenuLink href="/research" label="Research" />
                <MenuLink href="/projects" label="Projects" />
                <MenuLink href="/about" label="About" />
              </div>

              {/* Social icons under About */}
              <div className="flex items-center gap-4">
                <SocialIcon href="https://instagram.com/" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialIcon>

                <SocialIcon href="https://x.com/" label="X">
                  <Twitter className="h-4 w-4" />
                </SocialIcon>

                <SocialIcon href="https://facebook.com/" label="Facebook">
                  <Facebook className="h-4 w-4" />
                </SocialIcon>

                <SocialIcon href="https://linkedin.com/" label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
              </div>

            </div>

            <div className="mt-auto pt-12">
              <AuthRow user={user} signOut={signOut} closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-4xl font-light tracking-tight transition-opacity hover:opacity-80 md:text-5xl"
    >
      {label}
    </Link>
  );
}

function SocialIcon({
                      href,
                      label,
                      children,
                    }: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 transition hover:bg-white/15"
    >
      {children}
    </a>
  );
}

function AuthRow({
                   user,
                   signOut,
                   closeMenu,
                 }: {
  user: User | null;
  signOut: () => Promise<void>;
  closeMenu: () => void;
}) {
  if (user) {
    return (
      <div>
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/protected/dashboard"
            onClick={closeMenu}
            className="flex-1 rounded-md border border-white/25 bg-white/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider transition hover:bg-white/15"
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
            <button className="w-full rounded-md bg-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#0b0f2b] transition hover:bg-white/90">
              Sign Out
            </button>
          </form>
        </div>

        <div className="mt-3 text-center text-xs text-white/70">Site by Brinl</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link
          href="/auth/signup"
          onClick={closeMenu}
          className="flex-1 rounded-md bg-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#0b0f2b] transition hover:bg-white/90"
        >
          Sign Up
        </Link>

        <Link
          href="/auth/login"
          onClick={closeMenu}
          className="flex-1 rounded-md border border-white/25 bg-white/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/15"
        >
          Sign In
        </Link>
      </div>

      <div className="mt-3 text-left text-xs text-white/70">Site by Brinl</div>
    </div>
  );
}
