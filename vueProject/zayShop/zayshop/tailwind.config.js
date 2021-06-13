module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      indigo: {
        light: '#b3bcf5',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      
    },
  
  variants: {
    extend: {},
    // extend: {padding: ['hover'],backgroundColor: ['active'],},
  },
  plugins: [],
  screens: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
}
