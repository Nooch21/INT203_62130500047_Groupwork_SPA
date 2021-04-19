module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'shop-color': '#F7C8C7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
