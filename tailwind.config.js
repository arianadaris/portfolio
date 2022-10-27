/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      founders: ["FoundersRegular", "cursive"],
      foundersLight: ["FoundersLight", "Arial"],
      foundersLightI: ["FoundersLightItalic", "Times New Roman"],
      ogg: ["Ogg", "Courier New"]
    },
    borderWidth: {
      0.5: '0.5px',
      1: '1px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        gray: '#7C7D7D',
        white: '#fff',
        green: '#D0DCC5',
        blue: '#C5D2DC',
        purple: '#D5CFE2',
        pink: '#E2CFCF',
        lightblue: '#F4F7F7'
      },
      fontSize: {
        14: '0.729vw',
        16: '0.833vw',
        18: '0.9375vw',
        24: '1.25vw',
        32: '1.667vw',
        36: '1.875vw',
        48: '2.5vw',
        60: '3.125vw',
        70: '3.64583vw'
      },
      borderRadius: {
        100: '100px'
      },
      keyframes: {
        slide: {
          '0%, 100%': {
              transform: 'translateX(-50%)'
          },
          '50%': {
              transform: 'translateX(0)'
          },
        },
        fir: {
          'from': {
            opacity: 0,
            transform: 'translateX(-15px)'
          },
          'to': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        firl: {
          'from': {
            opacity: 0,
            width: '0'
          },
          'to': {
            opacity: 1,
            width: '100%'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
          slide: 'slide 2s ease-in-out infinite',
          fir: 'fir ease 0.4s forwards',
          firl: 'firl ease 0.4s forwards',
          wiggle: 'wiggle 2s ease-in-out infinite'
      },
      
    }
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ]
}
