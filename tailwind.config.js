/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoFlex: ['robotoFlex', 'sans-serif'],
        robotoCondensed: ['robotoCondensed', 'sans-serif'],
        bebaszNeue: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'light': '#F7F7F7',
        'dark': '#282828',

        btn: {
          primary: '#0147FF',
          secondary: '#F1F1F1',
          muted: '#EDEDED',
        },

        'info': '#0147FF',
      },
    },
  },
  plugins: [],
}
