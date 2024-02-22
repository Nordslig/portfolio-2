/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      headlines: ["Modern Antiqua", "serif"],
    },
    extend: {
      colors: {
        primary: "#542b10",
        secondary: "#e6d5be",
      },
    },
  },
  plugins: [],
};
