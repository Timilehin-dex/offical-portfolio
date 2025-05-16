/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [],
};
