module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      }
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#e5e5e5',
      'dark-green': '#006D77'
    }),
    width: {
      screen: '99vw',
      full: '100%'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
