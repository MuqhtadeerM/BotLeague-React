/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        arena: {
          bg: "#0a0a0a",
          card: "#141414",
          border: "#2a2a2a",
          red: "#e8192c",
          redDark: "#b01020",
          blue: "#1a3a6e",
          text: "#f0f0f0",
          muted: "#888888",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        sub: ["Roboto", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
