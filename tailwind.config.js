/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1D50A2',
        'custom-green': '#26A69A',
        'custom-red': '#C10015',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '1440px': '1440px',
        '66px': '66px',
        '431px': '431px',
        '16px': '16px',
        '25px': '25px',
      },
      opacity: {
        '0': '0',
      },
      borderRadius: {
        'dropdown-tl': '5.16px',
      },
    },
  },
  plugins: [],
}