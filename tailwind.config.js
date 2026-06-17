/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Foundation — neutrals (this is what adds depth)
        paper: "#F4F6F5",
        surface: "#FFFFFF",
        mist: "#E9EEEC",
        hairline: "#D7DEDB",
        muted: "#5A6B64",
        ink: "#16202A",
        // Brand — from the logo
        navy: "#1A2A4A",
        "navy-deep": "#11203B",
        green: "#1FB257",
        "green-soft": "#D8F0E0",
        "green-hover": "#1A9D4C",
        // Warmth — micro-accent, tiny doses only
        gold: "#E0A43B",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "Cambria", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
