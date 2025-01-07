/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sec1-bgimg': "url('/public/img/bg.png')",
      }
    },
  },
  plugins: [],
}

