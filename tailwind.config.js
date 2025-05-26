/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F1',
          100: '#F7F1E3',
          200: '#F0E4C7',
          300: '#E9D7AB',
          400: '#E2CA8F',
          500: '#D4AF37', // Primary gold
          600: '#C99A2E',
          700: '#BE8525',
          800: '#B2701C',
          900: '#A65D13',
        },
        cream: {
          50: '#FAF9F6', // Light background
          100: '#F5F3E7',
          200: '#EFE9D7',
          300: '#E9DFC7',
          400: '#E3D5B7',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};