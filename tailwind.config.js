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
      },
    },
  },
  plugins: [],
};
