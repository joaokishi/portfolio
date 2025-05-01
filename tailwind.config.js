/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8F9FA',
          dark: '#0D1117'
        },
        primary: {
          light: '#1A1A1A',
          dark: '#C9D1D9'
        },
        accent: {
          blue: '#58A6FF',
          orange: '#FF6F61'
        },
        hover: {
          light: '#E9ECEF',
          dark: '#161B22'
        }
      }
    },
  },
  plugins: [],
} 