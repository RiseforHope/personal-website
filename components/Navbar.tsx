import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

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
    <nav className="border-b border-zinc-100 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-zinc-900 dark:text-zinc-50">
          Academic Portfolio
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/blog" className="hover:text-black dark:hover:text-white">
            Research & Blog
          </Link>

          {user ? (
            <>
              <Link
                href="/protected/dashboard"
                className="text-black dark:text-white"
              >
                Dashboard
              </Link>
              <form action={signOut}>
                <button className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black">
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="hover:text-black dark:hover:text-white"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
