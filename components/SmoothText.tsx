"use client";
import { motion, Variants } from "framer-motion";

export function SmoothText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const words = text.split(" ");

  // We explicitly tell TypeScript this is a "Variants" object
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} className="mr-2" key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
