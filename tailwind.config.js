module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pokemon-yellow': '#ffcb05',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
