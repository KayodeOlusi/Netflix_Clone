module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        noto : ['Noto Sans Display'],
        festive : ['Festive'],
        akronim : ['Akronim'],
        josefin : ['Josefin Sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
