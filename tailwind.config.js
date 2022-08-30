module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#F8C565',
          DEFAULT: '#F8AF26',
          dark: '#E59500',
          tenPercent: 'rgba(24, 114, 228, 0.10)',
          fivePercent: 'rgba(24, 114, 228, 0.05)',
        },
        purple: {
          fivePercent: 'rgba(113, 106, 202, 0.05)',
        },
        green: {
          fivePercent: 'rgba(16, 120, 85, 0.05)',
        }
      },
      backgroundImage: {
        'blue-blob': "url('./assets/artist-spotlight-blob.png')",
        'header': "url('./assets/bg-header.svg')",
        'header-lg': "url('./assets/bg-header-lg.svg')",
        'gradiant': "url('./assets/bg-gradiant.svg')",
        'footer': "url('./assets/bg-footer.svg')"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      backgroundColor: ['even']
    },
  },
  plugins: [],
}
