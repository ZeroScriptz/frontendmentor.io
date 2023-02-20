/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#D6D9E6',
        bg: '#EFF5FF',
        pink: '#F9818E',
        orange: '#FFAF7E',
        gray: '#9699AA',
        denim: '#022959',
        purple: '#483EFF',
        'sky-blue': '#BEE2FD',
        'light-gray': '#D6D9E6',
        'very-light-gray': '#F8F9FF',
        'light-blue': '#ABBCFF',
        'denim-hover': '#164A8A',
        'red-errors': '#EE374A',
        'purple-hover': '#928CFF'
      },
      backgroundImage: {
        'desktop-sidebar': 'url("./assets/images/bg-sidebar-desktop.svg")',
        'mobile-sidebar': 'url("./assets/images/bg-sidebar-mobile.svg")',
        checkmark: 'url("./assets/images/icon-checkmark.svg")'
      },
      boxShadow: {
        form: '0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)'
      },
      borderRadius: {
        small: '4px',
        large: '8px',
        main: '15px',
        sidebar: '10px'
      }
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif']
    },
    fontSize: {
      heading: '2rem',
      'body-s': '0.75rem',
      'body-m': '0.875rem',
      'body-l': '1rem',
      'heading-mobile': '1.5rem',
      14: '0.875rem'
    },
    screens: {
      desktop: '940px',
      mobile: '375px'
    }
  },
  plugins: []
}