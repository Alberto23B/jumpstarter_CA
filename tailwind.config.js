/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prosto: ["Prosto One", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 90s linear 3s infinite",
        "infinite-scroll2": "infinite-scroll 120s linear 3s infinite",
        "v-scroll": "vertical-scroll 90s linear infinite alternate",
        "v-scroll2": "vertical-scroll 95s linear infinite alternate-reverse",
        "fadeInOut": "fadeInOut 2s ease-in-out infinite",
        "glow": "glow 1s ease-in-out forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "vertical-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "fadeInOut": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
        "glow": {
          "0%": { transform: "scale(1)", color: "white" },
          "50%": { transform: "scale(1.2)", color: "#fbbf24" },
          "100%": { transform: "scale(1)", color: "white" },
        },
      },
    },
  },
  plugins: [],
};
