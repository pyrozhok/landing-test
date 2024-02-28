/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-aeonik)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        large: '40px',
      },
      letterSpacing: {
        'tight-1': '-0.01em',
        'tight-2': '-0.02em',
        'tight-3': '-0.03em',
      },
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: '#FFFFFF',
      black: '#0A0812',
      red: '#F04242',
      primary: {
        blue: '#243BB9',
        green: '#4DB29A',
        pink: '#BE6AA7',
        orange: '#D8A87C',
      },
      secondary: {
        blue: '#3F57DA',
      },
      grey: {
        100: '#EFF1F6',
        200: '#BDC4D1',
      },
      blue: {
        100: '#3D79F5',
        200: '#0054FF',
        400: '#172136',
      },
    }),
    backgroundImage: {
      'hero-gradient': "url('/images/hero-background.svg')",
    },
    // FIXME: Check if the breakpoints ("screens") are correct for the project
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
