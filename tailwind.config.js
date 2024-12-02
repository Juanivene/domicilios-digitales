import containerQuery from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { customBlue: "rgb(63, 117, 168)" } },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [containerQuery, require("daisyui")],
};
