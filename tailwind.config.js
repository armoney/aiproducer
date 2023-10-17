/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        144: "36rem",
      },
      colors: {
        "primary-600": "#468202",
        "primary-500": "#57a202",
        "primary-400": "#79b535",
        "primary-200": "#9ac767",
        "primary-100": "#ddeccc",
        "primary-50": "#eef6e6",
        "seondary-600": "#07617f",
        "secondary-500": "#09799f",
        "secondary-400": "#3a94b2",
        "secondary-200": "#9dc9d9",
        "secondary-100": "#cee4ec",
        // "brand-green": "#57a202",
        // "brand-blue": "#09799f",
        "brand-red": "#db2428",
        "brand-orange": "#ff9a14",
        "logo-font-dark": "#454545",
        "logo-font-med": "#444444",
        "logo-font-light": "#414143",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
