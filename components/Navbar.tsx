import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import NavbarClient from "@/components/NavbarClient";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Server Action for signing out
  const signOut = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  // Pass the data and action to the client component
  return <NavbarClient user={user} signOut={signOut} />;
}