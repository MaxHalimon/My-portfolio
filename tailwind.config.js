/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          500: '#0073b1',
          600: '#005582',
          700: '#003d5b',
        },
      },
    },
  },
  plugins: [],
}
