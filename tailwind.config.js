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
      0.1: '0.1px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        gray: '#7C7D7D',
        white: '#fff',
        green: '#E2E9DB',
        blue: '#E2E9ED',
        purple: '#E5E1ED',
        pink: '#E2E9ED',
        lightblue: '#F4F7F7'
      },
      screens: {
        'xs': '0px'
      },
      margin: {
        50: '5%',
        'n5': '-2.5%',
        'n10': '-5%'
      },
      spacing: {
        'neg1': '-150px',
        'neg2': '-125px'
      },
      width: {
        105: '105%'
      },
      fontSize: {
        14: '0.729vw',
        16: '0.833vw',
        20: '1.04167vw',
        24: '1.25vw',
        28: '1.4583vw',
        32: '1.667vw',
        36: '1.875vw',
        40: '2.083vw',
        44: '2.29167vw',
        48: '2.5vw',
        58: '3.02083vw',
        60: '3.125vw',
        63: '3.28125vw',
        68: '3.54167vw'
      },
      borderRadius: {
        100: '100px'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(1, 0, 1, 0)',
        'out-expo': 'cubic-bezier(0, 1, 0, 1)'
      },
      animationDelay: {
        1600: '1600ms',
        1700: '1700ms',
        1800: '1800ms',
        1900: '1900ms'
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
        ups: {
          '0%': {
            opacity: 0,
              transform: 'translateY(50%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        turn: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'}
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }

      },
      animation: {
          slide: 'slide 2s ease-in-out infinite',
          fir: 'fir ease 1s forwards',
          firl: 'firl ease 0.8s forwards',
          up: 'ups 1s ease-in-out forwards',
          wiggle: 'wiggle 2s ease-in-out infinite',
          turn: 'turn 12s linear infinite',
          appear: 'appear 0.5s linear forwards'
      },
      
    }
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ]
}