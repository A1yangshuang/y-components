const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      red: colors.rose,
      pink: colors.fuchsia,
      purple: colors.purple,
      white: colors.white,
      blue: colors.blue,
      orange: colors.orange,
      emerald: colors.emerald,
      primary: {
        DEFAULT: '#2c648e', // blueBlack
        light: '#2c648ee6',
        dark: '#1b4469',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['hover'],
      // borderColor: ['focus-visible'],
    },
  },
  plugins: [],
};
