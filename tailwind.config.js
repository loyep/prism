const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./web/**/*.{jsx,tsx}'],
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
        // ...colors,
        background: colors.blueGray[50],
        blueGray: colors.blueGray,
        theme: colors.blueGray[900],
        focused: colors.blueGray[800],
        light: colors.blueGray[500],
        lighter: colors.blueGray[200],
        lightest: colors.blueGray[100],
        secondary: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
