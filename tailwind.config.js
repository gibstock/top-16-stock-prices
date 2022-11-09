/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary5: '#f3f8ff',
          gray11: '#000000',
          gray8: '#616161',
          color1: '#df1525',
          color2: '#049c6b',
          bg1: '#fffce6',
          bg2: '#e8ffeb',
          shadow: 'rgba(0,0,0,0.1)'
        },
        dark: {
          primary5: '#01060d',
          gray11: '#fefefe',
          gray8: '#efefef',
          gray1: '#202020',
          gray0: '#000000',
          color1: '#ff9b9b',
          color2: '#07f8b5',
          bg1: '#49483e',
          bg2: '#2a4037',
          shadow: 'rgba(0,0,0,0.5)'
        },
        
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
