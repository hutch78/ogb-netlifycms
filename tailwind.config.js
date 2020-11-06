/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          100: '#ECEFF5',
          200: '#CBD2E1',
          300: '#ABB6CD',
          400: '#8C9AB7',
          500: '#6F7FA0',
          default: '#526488',
          600: '#3E4F70',
          700: '#2C3A57',
          800: '#1C263B',
          900: '#0D131E'
        },
        accent: {
          900: '#331E00',
          800: '#663B00',
          700: '#995700',
          600: '#CC740B',
          default: '#F7901E',
          500: '#FFA53C',
          400: '#FFB95E',
          300: '#FFCD8A',
          200: '#FFE1B8',
          100: '#FFF4E6'
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      }
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
