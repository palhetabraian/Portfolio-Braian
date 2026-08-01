import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fcf7f7",
        ink: "#181818"
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        accent: ["Bebas Neue", "sans-serif"]
      },
      transitionTimingFunction: {
        portfolio: "cubic-bezier(.2, 0, 0, 1)"
      }
    }
  },
  plugins: []
} satisfies Config;
