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
      },
      keyframes: {
        'slide': {
          '0%, 100%': {
            transform: 'translateX(25%)'
          },
          '50%': {
            transform: 'translateX(-25%)'
          }
        },
        'send': {
          '0%, 100%': {
            transform: 'translateX(5%)'
          },
          '50%': {
            transform: 'translateX(-5%)'
          }
        }
      },
      animation: {
        slide: 'slide 2s ease-in-out infinite',
        send: 'send 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}