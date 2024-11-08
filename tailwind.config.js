/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}', // Include pages directory
    './components/**/*.{vue,js}', // Include components directory
    './layouts/**/*.{vue,js}', // Include layouts if applicable
    './app.vue', // Include your main app file if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

