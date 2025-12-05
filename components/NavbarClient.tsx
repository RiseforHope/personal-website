"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface NavbarClientProps {
  user: User | null;
  signOut: () => Promise<void>;
}

export default function NavbarClient({ user, signOut }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent px-6 py-4 dark:border-transparent md:px-10">
      <div className="flex w-full items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="z-50 text-2xl font-bold tracking-tight text-zinc-900 italic dark:text-zinc-50"
          onClick={closeMenu}
        >
          prosla
        </Link>

        <div className="flex items-center gap-4">
          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLinks />
          </div>

          {/* AUTH BUTTONS (Visible on Mobile & Desktop) */}
          <AuthButtons user={user} signOut={signOut} />

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="z-50 block p-2 text-zinc-900 focus:outline-none md:hidden dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-500 ease-in-out dark:bg-black ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-6" onClick={closeMenu}>
            <NavLinks mobile />
          </div>
        </div>
      </div>
    </nav>
  );
}

// --- Helper Components ---

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseClass = mobile
    ? "text-2xl font-bold text-zinc-900 dark:text-white hover:text-zinc-600"
    : "text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white";

  const links = ["Home", "Teaching", "Research", "Projects", "About", "Contact"];

  return (
    <>
      {links.map((item) => (
        <Link
          key={item}
          href={item === "Home" ? "/" : "/blog"}
          className={baseClass}
        >
          {item}
        </Link>
      ))}
    </>
  );
}

function AuthButtons({
                       user,
                       signOut,
                     }: {
  user: User | null;
  signOut: () => Promise<void>;
}) {
  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/protected/dashboard"
          className="hidden text-sm font-medium text-black md:block dark:text-white"
        >
          Dashboard
        </Link>
        <form action={signOut}>
          <button className="rounded-md bg-zinc-900 px-4 py-2 text-xs font-bold text-white uppercase dark:bg-white dark:text-black">
            Sign Out
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/auth/login"
        className="flex items-center justify-center rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-xs font-bold tracking-wider text-zinc-900 uppercase transition hover:border-zinc-900 hover:bg-zinc-50 md:px-4 md:text-sm dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200 dark:hover:bg-zinc-900/40"
      >
        SIGN IN
      </Link>
      <Link
        href="/auth/signup"
        className="flex items-center justify-center rounded-md bg-black px-3 py-2 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-zinc-800 md:px-4 md:text-sm dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        SIGN UP
      </Link>
    </div>
  );
}