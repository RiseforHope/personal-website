import type { Metadata } from "next";
import localFont from "next/font/local"; // <--- Import this
import Navbar from "@/components/Navbar";
import "./globals.css";

// 1. Configure the Title Font
const titleFont = localFont({
  src: "./fonts/title.woff2", // <--- Simple and clean
  variable: "--font-title",
  display: "swap",
});

// 2. Configure the Body Font
const bodyFont = localFont({
  src: "./fonts/body.woff2", // <--- Simple and clean
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
    <html lang="en">
      {/* 3. Add both variables to the body className */}
      <body
        className={`${bodyFont.variable} ${titleFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
