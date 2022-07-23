/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cyan' : '#00F0FF',
      'banner': '#462AED',
      'navcolor': '#011411',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}