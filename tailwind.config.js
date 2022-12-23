/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "cursive"],
        avenirBold: ["AvenirBold", "cursive"],
        sanford: ["Sanford", "cursive"]
      },
      borderRadius: {
        'round': '100px'
      },
      screens: {
        'xs': '0px'
      }
    },
  },
  plugins: [],
}