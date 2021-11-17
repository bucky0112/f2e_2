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
    height: {
      'screen-3/5': '63vh',
      screen: '100vh'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
