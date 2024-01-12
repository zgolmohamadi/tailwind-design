/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.{html,js,css}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      width: {
        484: '30.25rem',
      },

      screens: {
        xl: '99.83rem',
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        DEFAULT: '0.313rem',
        1.6: '1.65625rem',
        8: '0.5rem;',
        4: '0.25rem',
        2: '0.125rem',
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        'custom-1': '0px 0px 7px 0px rgba(49, 49, 49, 0.40)',
        'custom-11': '0px 0px 7px 0px rgba(49, 49, 49, 0.18)',
        'custom-2': '0px 0px 10px 0px rgba(49, 49, 49, 0.24)',
        'custom-22': '0px 0px 7px rgba(49, 49, 49, 0.18)',
        'custom-3': '0px 0px 5px 0px rgba(49, 49, 49, 0.1)',
      },
    },

    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      primary: {
        white: '#FFF',
        zinc: '#313131',
        red: '#DE192B',
      },
      secondary: {
        black: '#000',
        'gray-1': '#414141',
        'gray-2': '#6c6c6c',
        'gray-3': '#919191',
        'light-gray-1': '#C2C2C2',
        'light-gray-2': '#E4E4E4',
        'light-gray-3': '#EEEEEE',
        'light-gray-4': '#F5F5F7',
        'light-gray-5': '#F9F9F9',
        'light-gray-6': '#FCFCFC',
        'moderate-orange': '#D2AB66',
      },
    },
  },

  plugins: [],
};
