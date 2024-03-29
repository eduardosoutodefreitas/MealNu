/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "372px",
      },
      colors: {
        specialOrange: "#F16717",
        lightGray: "#767373",
        veryLightGray: "#F1F1F1",
        darkGray: "#1E1E1E",
        secundaryDark: "#232121",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
