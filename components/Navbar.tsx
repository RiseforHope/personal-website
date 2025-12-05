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
    // bg-transparent and consistent padding (px-6 md:px-10)
    <nav className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent px-6 py-4 dark:border-transparent md:px-10">
      <div className="flex w-full items-center justify-between">

        {/* SECTION 1: Logo (Now on the LEFT) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-zinc-900 italic dark:text-zinc-50"
        >
          prosla
        </Link>

        {/* SECTION 2: Navigation Links & Auth (Now on the RIGHT) */}
        <div className="flex items-center gap-4">
          {/* Navigation Links */}
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-zinc-600 hover:text-black md:block dark:text-zinc-400 dark:hover:text-white"
          >
            Research
          </Link>

          {user ? (
            /* Logged In State */
            <div className="flex items-center gap-4">
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
            /* Logged Out State */
            <div className="flex items-center gap-2">
              {/* SIGN IN = Outline */}
              <Link
                href="/auth/login"
                className="flex items-center justify-center rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm font-bold tracking-wider text-zinc-900 uppercase transition hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200 dark:hover:bg-zinc-900/40"
              >
                SIGN IN
              </Link>

              {/* SIGN UP = Solid */}
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