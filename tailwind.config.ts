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
        "spin-slow": "spin 50s reverse linear infinite",
        "spin-mid": "spinadjust 50s linear infinite",
        scale: "scale 1s linear alternate infinite",
      },
      keyframes: {
        spinadjust: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scale: {
          "0%": { scale: "1" },
          "100%": { scale: "1.05" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
