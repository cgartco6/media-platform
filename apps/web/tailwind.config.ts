import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#39ff14",
          pink: "#ff00aa",
          white: "#ffffff"
        }
      }
    }
  },
  plugins: []
};
export default config;
