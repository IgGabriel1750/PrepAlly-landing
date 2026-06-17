/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F7F6",
        pine: "#0C3B2E",
        ink: "#15211B",
        muted: "#5E6B63",
        whatsapp: "#25D366",
        gold: "#D9A441",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "Cambria", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
