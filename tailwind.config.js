/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "color-primary": "#ffd909",
      "color-secondary": "#ff5f6a",
      "color-main": "#2b2b2b",
      "color-sub": "#9d9c9b",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        pacifico: ["Pacifico"],
      },
    },
  },
  plugins: [require("daisyui")],
};
