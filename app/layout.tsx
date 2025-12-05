import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"; // <--- Import this
import "./globals.css";

const titleFont = localFont({
  src: "./fonts/title.woff2",
  variable: "--font-title",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/body.woff2",
  variable: "--font-body",
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
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${bodyFont.variable} ${titleFont.variable} antialiased`}
    >
    {/* Wrap everything inside ThemeProvider */}
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