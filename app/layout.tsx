import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
    {/* UPDATED BODY CLASS:
         1. bg-[#f5f2ea]: Default light background
         2. dark:bg-[#242730]: Your global dark background
         3. dark:text-zinc-100: Global text color for dark mode (so text is readable)
      */}
    <body className="antialiased font-sans text-body bg-[#f5f2ea] dark:bg-[#242730] dark:text-zinc-100">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
    </body>
    </html>
  );
}