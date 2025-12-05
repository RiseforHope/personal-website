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
                body: ["18px", { lineHeight: "1.4", fontWeight: "400" }],
                h2: ["1.8rem", { lineHeight: "1.2", fontWeight: "400" }],
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};

export default config;
