module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pokemon-yellow': '#ffcb05',
        'pokemon-red': '#CC0000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
