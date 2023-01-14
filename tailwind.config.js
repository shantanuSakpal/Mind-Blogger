/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#fd3c46",
        "logo-color-100": "#FF9DA2",
      }
    },
  },
  plugins: [],
}
