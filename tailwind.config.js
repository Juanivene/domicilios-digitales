import containerQuery from "@tailwindcss/container-queries";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        customBlue: "rgb(63, 117, 168)",
        yellowAlert: "rgb(255, 244, 229)",
        bgGray: "rgb(214, 214, 214)",
        bgDark: "rgb(80, 80, 80)",
      },
      screens: {
        xs: "569px",
        xxxl: "1067px",
        xxl: "927px",
      },
      darkMode: "class",
    },
  },
  plugins: [containerQuery, daisyui],
};
