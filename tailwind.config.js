/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './style.css'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-Image': "url('images/backg-img.jpeg')",
      }
    },
  },
  plugins: [],
}

