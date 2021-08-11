module.exports = {
  purge: {
    content: ['./pages/*.js', './pages/**/*.js', './components/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'red': '#CA4343',
      'gray': '#F7F7F7',
      'black': '#191515',
      'white': '#FFFFFF',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
