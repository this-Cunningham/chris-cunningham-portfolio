// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#1d1d1d',
      white: '#fafafa',
      transparent: colors.transparent,
      current: 'currentColor',
      gray: {
        ...colors.gray,
        DEFAULT: colors.gray[200],
      },
      cyan: {
        ...colors.cyan,
        DEFAULT: colors.cyan[500],
      },
      indigo: {
        ...colors.indigo,
        DEFAULT: colors.indigo[400],
      },
    },
    extend: {
      boxShadow: {
        innerCustom: 'inset 2px -2px 7px 0 rgba(0, 0, 0, 0.06)',
        mdCustom: '4px -4px 5px 0px rgb(0 0 0 / 0.08), -2px 2px 4px 0px rgb(0 0 0 / 0.06)',
        podBodyShadow: '9px -9px 24px 6px var(--tw-shadow-color), 0px 0px 50px -49px var(--tw-shadow-color)',
        podBodyShadow: `0.3px -0.2px 0.5px hsl(var(--tw-shadow-color) / 0.09),
        1.1px -0.9px 1.8px -0.1px hsl(var(--tw-shadow-color) / 0.1),
        1.9px -1.5px 3.1px -0.3px hsl(var(--tw-shadow-color) / 0.12),
        2.7px -2.2px 4.5px -0.4px hsl(var(--tw-shadow-color) / 0.13),
        3.7px -3px 6.2px -0.6px hsl(var(--tw-shadow-color) / 0.15),
        5px -4px 8.3px -0.8px hsl(var(--tw-shadow-color) / 0.16),
        6.7px -5.4px 11.2px -0.9px hsl(var(--tw-shadow-color) / 0.18),
        9px -7.2px 15px -1px hsl(var(--tw-shadow-color) / 0.19),
        11.9px -9.6px 19.8px -1.2px hsl(var(--tw-shadow-color) / 0.21),
        15.7px -12.6px 26.1px -1.3px hsl(var(--tw-shadow-color) / 0.22);`,
        podBodyInnerShadow: '3px -3px 12px 2px #fff, 3px -3px 24px -18px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
};

