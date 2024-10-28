/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '480px'},
      'mo': {'min': '1366px', 'max': '1366px'},
      'big': {'min': '1367px', 'max': '1920px'},
    },

    colors: {
      background: '#0F0F0F',
      corVerdeClaro: '#0DCC5A',
      corVerdeEscuro: '#0F7337',
      corBorda: '#0F7337',
      corBranca: '#FFFFFF',
      corTextoSecundario: '#868686',
      corCard: '#0F0F0F',
      corCardSec: '#2B2B2B'

    },
    extend: {},
  },
  plugins: [],
}