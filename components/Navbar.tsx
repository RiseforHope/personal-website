/* -------------------------------------------------------------------------- */
/* IMPORTS                                   */
/* -------------------------------------------------------------------------- */
import NavbarClient from "@/components/NavbarClient";
// Imports for Future Auth Logic (Uncomment when needed)
// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

/* -------------------------------------------------------------------------- */
/* SERVER COMPONENT                               */
/* -------------------------------------------------------------------------- */
export default async function Navbar() {

  /* ------------------------------------------------------------------------
     1. AUTHENTICATION LOGIC (CURRENTLY DISABLED)
     To re-enable auth, uncomment the block below.
     ------------------------------------------------------------------------ */

  // const supabase = await createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // // Server Action for signing out
  // const signOut = async () => {
  //   "use server";
  //   const supabase = await createClient();
  //   await supabase.auth.signOut();
  //   redirect("/");
  // };

  /* ------------------------------------------------------------------------
     2. RENDER CLIENT COMPONENT
     ------------------------------------------------------------------------ */

  // Note: We removed the props 'user={user}' and 'signOut={signOut}'
  // because NavbarClient is currently not set up to receive them.
  return <NavbarClient />;
}