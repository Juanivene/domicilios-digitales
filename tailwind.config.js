import containerQuery from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(63, 117, 168)",
        yellowAlert: "rgb(255, 244, 229)",
      },
      screens: {
        xs: "569px",
        xxxl: "1067px",
        xxl: "927px",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [containerQuery, require("daisyui")],
};
