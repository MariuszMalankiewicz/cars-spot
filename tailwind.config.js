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
        //--- background---
        // White Smoke
        'bg-primary': '#F7F7F7',
        // Nero
        'bg-secondary': '#282828',

        // ---btn background
        // Navy Blue
        'bg-btn-primary': '#0147FF',
        // White Smoke
        'bg-btn-secondary': '#F1F1F1',

        // ---Decoration---
        // Astronaut Blue
        'bg-decoration-primary': '#1F4D60',

        // ---text---
        // Nero 
        'text-primary': '#282828',
        // White
        'text-secondary': '#FFFFFF',
        // Navy Blue
        'text-tertiary': '#0147FF',
        // Maire
        'text-quaternary': '#1D1D1B',
        // Black
        'text-fiverow': '#000000',

        // ---btn text
        // White Smoke
        'btn-text-primary': '#F7F7F7',
        // Navy Blue 
        'btn-text-secondary': '#0147FF',
        // White
        'btn-text-teritiary': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
