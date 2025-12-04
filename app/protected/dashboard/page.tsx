import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Security Gate: If not logged in, kick them back to login
  if (!user) {
    return redirect("/auth/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-green-600">
          Access Granted
        </h1>
        <p className="mb-6 text-gray-600">You are securely logged in.</p>
        <div className="rounded bg-gray-100 p-4 font-mono text-sm text-gray-800">
          Current User: <br />
          <strong>{user.email}</strong>
        </div>
      </div>
    </div>
  );
}
