/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '480px'},
      'mo': {'min': '1300px', 'max': '1366px'},
      'big': {'min': '1367px', 'max': '1920px'},
    },

    colors: {
      background: '#0F0F0F',
      corVerde: '#0DCC5A',
      corBorda: '#2B2B2B',
      corBranca: '#FFFFFF',
      corTextoSecundario: '#868686',
      corCard: '#121212',
    },
    extend: {},
  },
  plugins: [],
}