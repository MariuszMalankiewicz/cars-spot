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
      },
      colors: {
        'btn-blue': '#0147FF',
        'white': '#F7F7F7',
        'black': '#282828',
      },
    },
  },
  plugins: [],
}