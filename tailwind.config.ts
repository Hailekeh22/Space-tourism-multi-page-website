import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xll: "1450px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        barrow: ["barrow", "sans-serif"],
        barrowRegular: ["barrowRegular", "sans-serif"],
        bellifair: ["bellifair", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
