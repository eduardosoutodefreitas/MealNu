/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        specialOrange: "#F16717",
        lightGray: "#767373",
        veryLightGray: "#F1F1F1",
        darkGray: "#1E1E1E",
      },
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
};
