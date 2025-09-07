/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B7F52',
          dark: '#095F3E',
          light: '#27A379'
        }
      }
    },
  },
  plugins: [],
}
