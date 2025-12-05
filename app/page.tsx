import Link from "next/link";
import { GraduationCap, ScrollText, FolderKanban, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero"; // Import the new Hero

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero Section (With Mesh Gradient) */}
      <Hero />
    </main>
  );
}