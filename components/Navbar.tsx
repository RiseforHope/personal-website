// components/Navbar.tsx
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { OutlineButton, SolidButton } from "@/components/ui";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 px-4 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-black/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Logo (Using text for now to match image placement) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-zinc-900 italic dark:text-zinc-50"
        >
          prosla
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* This link is hidden on small screens (mobile) */}
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-zinc-600 hover:text-black md:block dark:text-zinc-400 dark:hover:text-white"
          >
            Research
          </Link>

          {user ? (
            /* Logged In State */
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/protected/dashboard"
                className="hidden text-sm font-medium text-black md:block dark:text-white"
              >
                Dashboard
              </Link>
              <form action={signOut}>
                <SolidButton className="py-2 text-xs">Sign Out</SolidButton>
              </form>
            </div>
          ) : (
            /* Logged Out State - Matches Image 7 */
            <div className="flex items-center gap-2">
              <OutlineButton href="/auth/login">SIGN IN</OutlineButton>
              {/* Using Link wrapper for the solid button style */}
              <Link
                href="/auth/signup"
                className="flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-bold tracking-wider text-white uppercase transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
