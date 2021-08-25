const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./web/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'sidebar-color': '#FEBE85',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
