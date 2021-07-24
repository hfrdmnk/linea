module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'brand': ['cabin', 'ui-sans-serif', 'system-ui', '-apple-system', 'hHelvetia Neue', 'Roboto', 'sans-serif']
      },
      borderRadius: {
        'half-max': '2rem',
        'max': '3rem'
      },
      boxShadow: {
        normal: '0 8px 12px 0 rgba(160, 174, 192, 0.1)',
        elevated: '0 16px 24px 0 rgba(160, 174, 192, 0.3)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
