module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
        'mercado': "url('/slider/mercado.png')",
        'atacado': "url('/slider/atacado.png')",

       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
