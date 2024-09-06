/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebaszNeue: ['Bebas Neue', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        robotoFlex: [' Roboto Flex', 'sans-serif'],
      },
      colors: {
        'blue': '#0147FF',
        'white-top': '#FFFFFF',
        'white': '#F7F7F7',
        'black': '#282828',
        'blueGreen': '#1F4D60',
        'gray': '#F1F1F1',
      },
    },
  },
  plugins: [],
}
