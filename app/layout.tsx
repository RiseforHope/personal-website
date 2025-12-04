import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // <--- Import it
import "./globals.css";

export const metadata: Metadata = {
  title: "Academic Portfolio",
  description: "My academic work and research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <Navbar /> {/* <--- Add it here */}
        {children}
      </body>
    </html>
  );
}
