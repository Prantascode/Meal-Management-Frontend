/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361ee',
        secondary: '#3f37c9',
        success: '#4cc9f0',
        danger: '#e63946',
        warning: '#fca311',
      },
    },
  },
  plugins: [],
}