module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4560FF",
        accent: "#FFBF0D",
        white: "#FFFFFF",
        black: "#232326"
       },
    },
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    sans: ['Manrope', 'sans-serif'],
    icon: ['Material Icons'],
  },
  plugins: [],
}
