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
        // Light
          // Primary-5%
          // Gray-11
          // Gray-8
          // Color-2
          // BG-2
        // Dark
          // Gray-11
          // Gray-8
          // Color-2
          // BG-2
          // Gray-0
        light: {
          primary5: '#f3f8ff',
          gray11: '#000000',
          gray8: '#616161',
          color1: '#df1525',
          color2: '#049c6b',
          bg2: '#e8ffeb'
        },
        dark: {
          primary5: '#01060d',
          gray11: '#fefefe',
          gray8: '#efefef',
          color1: '#ff9b9b',
          color2: '#07f8b5',
          bg2: '#2a4037'
        },
        shadow: 'rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
