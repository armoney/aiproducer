/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minWidth: {
      '20': '20px',
    },
    extend: {
      height: {
        144: "36rem",
      },
      colors: {
        "secondary-600": "#468202",
        "secondary-500": "#57a202",
        "secondary-400": "#79b535",
        "secondary-200": "#9ac767",
        "secondary-100": "#ddeccc",
        "secondary-50": "#eef6e6",
        "primary-600": "#07617f",
        "primary-500": "#09799f",
        "primary-400": "#3a94b2",
        "primary-200": "#9dc9d9",
        "primary-100": "#cee4ec",
        "primary-50": "#eaf4f7",
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
