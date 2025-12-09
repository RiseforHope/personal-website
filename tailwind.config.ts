import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // 1. Labels/Metadata (14px)
        xs: ["0.875rem", { lineHeight: "1.25rem" }],

        // 2. Secondary Text (16px)
        sm: ["1rem", { lineHeight: "1.5rem" }],

        // 3. MAIN BODY TEXT - UPDATED
        // Previously 1.125rem (18px) -> Now 1.25rem (20px)
        base: ["1.25rem", { lineHeight: "1.85rem" }],

        // 4. Large Text - UPDATED to keep hierarchy
        // Previously 1.25rem -> Now 1.375rem (22px)
        lg: ["1.375rem", { lineHeight: "2rem" }],

        // 5. Headings
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.75rem", { lineHeight: "1.1" }],
        "5xl": ["3.25rem", { lineHeight: "1.1" }],

        // Custom overrides
        body: ["20px", { lineHeight: "1.6", fontWeight: "400" }], // Synced with base
        h2: ["1.8rem", { lineHeight: "1.2", fontWeight: "400" }],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;