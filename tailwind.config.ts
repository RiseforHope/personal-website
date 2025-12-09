import type { Config } from "tailwindcss";
// 1. Import the plugin here (Fixed from previous error)
import typography from "@tailwindcss/typography";

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

      /* -------------------------------------------------------------------------- */
      /* MOBILE STYLES LOCATION                                                    */
      /* In Tailwind, these "base" definitions apply to MOBILE screens by default. */
      /* -------------------------------------------------------------------------- */
      fontSize: {

        // MOBILE LABEL TEXT
        // When you use 'text-xs', it is 14px on Mobile.
        xs: ["0.875rem", { lineHeight: "1.25rem" }],

        // MOBILE SECONDARY TEXT
        // When you use 'text-sm', it is 16px on Mobile.
        sm: ["1rem", { lineHeight: "1.5rem" }],

        // MOBILE BODY TEXT (The one you wanted bigger)
        // When you use 'text-base' (or <body> default), it is 20px on Mobile.
        base: ["1.25rem", { lineHeight: "1.85rem" }],

        // MOBILE LARGE TEXT
        // When you use 'text-lg', it is 22px on Mobile.
        lg: ["1.375rem", { lineHeight: "2rem" }],

        // MOBILE HEADINGS
        // These sizes apply to mobile immediately.
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.75rem", { lineHeight: "1.1" }],
        "5xl": ["3.25rem", { lineHeight: "1.1" }],

        // Custom overrides
        // These also apply to Mobile by default.
        body: ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        h2: ["1.8rem", { lineHeight: "1.2", fontWeight: "400" }],
      },
    },
  },

  plugins: [typography],
};

export default config;