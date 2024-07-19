/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: ["Dancing Script", "cursive"],
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        color01: "#86D1E6",
        color02: "#1D738B",
        color03: "#F5F5F2",
        color04: "#5DB7D1",
        color05: "rgba(0, 0, 0, 0.015)",
        textBlack: "#333333",

        skeletonLoader: "#E0E0E0",
        placeholderBg: "rgba(0, 0, 0, 0.015)",
        skeletonBorder: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
