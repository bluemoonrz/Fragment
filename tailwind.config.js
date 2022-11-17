/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Miltonian: "'Miltonian', cursive",
        Delius: "'Delius Swash Caps', cursive",
      }
    },
  },
  plugins: [],
}
