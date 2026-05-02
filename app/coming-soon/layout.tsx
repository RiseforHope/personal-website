import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forthcoming — J. Bladimir Garcia",
  description:
    "An academic workshop in revision. Notes, essays, and tools will return shortly.",
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
