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

      // HERE IS THE FIX:
      // We override the default sizes to be larger by default.
      fontSize: {
        // 1. Labels/Metadata (previously 12px, now 14px)
        xs: ["0.875rem", { lineHeight: "1.25rem" }],

        // 2. Secondary Text (previously 14px, now 16px)
        sm: ["1rem", { lineHeight: "1.5rem" }],

        // 3. MAIN BODY TEXT (previously 16px, now 18px)
        // This makes all standard text bigger on mobile instantly.
        base: ["1.125rem", { lineHeight: "1.75rem" }],

        // 4. Large Text (previously 18px, now 20px)
        lg: ["1.25rem", { lineHeight: "1.75rem" }],

        // 5. Headings scale up
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.75rem", { lineHeight: "1.1" }],
        "5xl": ["3.25rem", { lineHeight: "1.1" }],

        // Your custom overrides (kept for compatibility)
        body: ["18px", { lineHeight: "1.4", fontWeight: "400" }],
        h2: ["1.8rem", { lineHeight: "1.2", fontWeight: "400" }],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;