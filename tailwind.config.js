/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
     
    },
    extend: {
      width: {
        140: "38.75rem",
        200: "12.5rem",
        308: "19.25rem",
        174: "10.87rem",
        280: "17.5rem",
      },
      height: {
        36: "2.25rem",
        46: "2.87rem",
      },
    },

    colors: {
      transparent: "transparent",
      primary: {
        white: "#FFF",
        zinc: "#313131",
        red: "#DE192B",
      },
      secondary: {
        black: "#000",
        "gray-1": "#414141",
        "gray-2": "#6c6c6c",
        "gray-3": "#919191",
        "light-gray-1": "#C2C2C2",
        "light-gray-2": "#E4E4E4",
        "light-gray-3": "#EEEEEE",
        "light-gray-4": "#F5F5F7",
        "light-gray-5": "#F9F9F9",
        "light-gray-6": "#FCFCFC",
        "moderate-orange": "#D2AB66",
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        DEFAULT: "0.313rem",
        1.6: "1.65625rem",
        8: "0.5rem;",
        4: "0.25rem",
        2: "0.125rem",
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        "custom-1": "0px 0px 7px 0px rgba(49, 49, 49, 0.40)",
        "custom-2": "0px 0px 10px 0px rgba(49, 49, 49, 0.24)",
        "custom-3": "0px 0px 5px 0px rgba(49, 49, 49, 0.10)",
      },
    },
  },

  plugins: [],
};
