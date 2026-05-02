import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "J. Bladimir Garcia — Educator, Scholar, Builder",
  description:
    "Teaching, research, and writing on borders, technology, and language. An academic workshop in progress.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${fraunces.variable}`}
    >
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