/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '1359px'},
      'mo': {'min': '1366px', 'max': '1699px'},
      'big': {'min': '1700px'},
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