"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Instagram, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const FADE_MS = 280;

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    if (isOpen) {
      setIsMounted(true);
      return;
    }

    // keep mounted long enough to fade out
    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
    }, FADE_MS);

    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative z-[100] w-full bg-paper px-6 py-6 transition-colors duration-300 dark:bg-ink md:px-10 md:py-8">
      <div className="flex w-full items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative z-[110] inline-flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Brand Logo"
            width={120}
            height={40}
            className="h-9 w-auto object-contain dark:invert md:h-10"
            priority
          />
        </Link>

        {/* BURGER */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          className={`relative z-[110] inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink
            ${
            isOpen
              ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
              : "border-rule bg-white/70 text-zinc-900 hover:bg-white dark:border-rule-dark dark:bg-black/40 dark:text-zinc-50"
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="8" width="18" height="2" rx="1" />
              <rect x="3" y="14" width="18" height="2" rx="1" />
            </svg>
          )}
        </button>
      </div>

      {/* --- OVERLAY MENU (FADE ONLY) --- */}
      {isMounted && (
        <div
          id={menuId}
          className={`fixed inset-0 z-[90] ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          {/* overlay fade */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ease-out motion-reduce:transition-none ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
            onClick={closeMenu}
          />

          {/* panel fade (no slide) */}
          <div
            className={`absolute right-0 top-0 h-full w-full bg-ink-panel text-white shadow-2xl transition-opacity ease-out motion-reduce:transition-none md:w-[600px] ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            <div className="flex h-full flex-col px-8 py-12 md:px-12">
              <div className="mt-24 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <MenuLink href="/teaching" label="Teaching" onClick={closeMenu} />
                  <MenuLink href="/research" label="Research" onClick={closeMenu} />
                  <MenuLink href="/projects" label="Projects" onClick={closeMenu} />
                  <MenuLink href="/store" label="Store" onClick={closeMenu} />
                  <MenuLink href="/about" label="About" onClick={closeMenu} />
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <SocialIcon href="#" label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon href="#" label="X">
                    <Twitter className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon href="#" label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </SocialIcon>
                  <SocialIcon href="#" label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </SocialIcon>
                </div>
              </div>

              <div className="mt-auto border-none pt-12">
                <BrinlFooter />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Sub-components
function BrinlFooter() {
  return (
    <div className="flex items-center justify-end gap-2 text-[10px] text-white/50">
      <span>Site by Brinl</span>
      <a
        href="mailto:hello@brinl.com"
        className="transition-colors hover:text-white"
        aria-label="Email Brinl"
      >
        <Mail className="h-3 w-3" />
      </a>
    </div>
  );
}

function MenuLink({
                    href,
                    label,
                    onClick,
                  }: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-4xl font-medium tracking-tight text-white transition-opacity hover:opacity-70 md:text-5xl"
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
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-all hover:scale-110 hover:bg-white hover:text-accent"
    >
      {children}
    </a>
  );
}
