/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      gray: '#7C7D7D',
      white: '#fff',
      green: '#D0DCC5',
      blue: '#C5D2DC',
      purple: '#D5CFE2',
      pink: '#E2CFCF'
    },
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
    borderRadius: {
      100: '100px'
    }
  },
  plugins: [],
}
