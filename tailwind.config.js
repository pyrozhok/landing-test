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
        450: '#141c4899',
      },
    }),
    backgroundImage: {
      'hero-gradient': "url('/images/hero-background.svg')",
      'hero-title-gradient':
        'linear-gradient(102deg, rgba(109, 156, 246, 0.7) -11.46%, #fff 46.19%)',
      'blue-linear-gradient':
        'linear-gradient(90deg, rgba(109, 156, 246, 0.7), rgba(195, 214, 251, 0.88), rgb(255, 255, 255), rgba(208, 223, 252, 0.9), rgba(109, 156, 246, 0.7))',
      'form-border':
        'linear-gradient(90deg, rgba(27, 36, 79, 1), rgba(39, 56, 113, 1), rgba(44, 66, 127, 1))',
      'form-background':
        'linear-gradient(269deg, rgba(24, 38, 74, 0.8) 22.75%, rgba(15, 22, 49, 0.8) 93.35%)',
      'card-linear-gradient':
        'linear-gradient(180deg, rgba(40, 74, 144, 0.35), rgba(40, 74, 144, 0.14) 100%)',
      ...defaultTheme.backgroundImage,
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
    boxShadow: {
      about: '0px 0px 30px -8px rgb(36, 59, 185)',
      reviews: '0px 0px 50px -15px rgb(36, 59, 185)',
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
