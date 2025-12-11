import Link from "next/link";

export default function Success() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f2ea] dark:bg-[#242730] text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
      <p className="text-xl mb-8">Your order has been received.</p>
      <Link href="/store" className="underline hover:text-[#2e3f90]">
        Back to Store
      </Link>
    </div>
  );
}