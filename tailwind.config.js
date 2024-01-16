/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", defaultTheme.fontFamily.sans],
      },
      colors: {
        "silver-bg": "#EFF5FF",
        denim: "#022959",
        grey: "#9699AA",
        "light-blue": "#ABBCFF",
        "light-grey": "#D6D9E6",
        orange: "#FFAF7E",
        pink: "#F9818E",
        purple: "#483EFF",
        "red-errors": "#EE374A",
        "sky-blue": "#BEE2FD",
        "very-light-grey": "#F8F9FF",
        "border-color": "#D6D9E6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
