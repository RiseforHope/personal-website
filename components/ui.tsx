// components/ui.tsx
import React from "react";
import Link from "next/link";

// --- Base Input Component ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className={`block w-full rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-black focus:ring-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${className}`}
        {...props}
      />
    </div>
  );
}

// --- Solid Black Button (Login/Signup) ---
export function SolidButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-bold tracking-wider text-white uppercase transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// --- Outline Button (Sign In on Navbar) ---
export function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-bold tracking-wider text-zinc-900 uppercase transition hover:border-black dark:border-zinc-800 dark:bg-black dark:text-white dark:hover:border-white"
    >
      {children}
    </Link>
  );
}
