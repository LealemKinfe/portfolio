import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#F7664D",
        Secondary: "#F9D278",
        Tertiary: "#3C5C42",
        Quaternary: "#E8FCFF",
        Quinary: "#FDECCA",
      },
      animation: {
        "spin-slow": "spin 200s reverse linear infinite",
        "spin-mid": "spinadjust 200s linear infinite",
      },
      keyframes: {
        spinadjust: {
          "0%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
