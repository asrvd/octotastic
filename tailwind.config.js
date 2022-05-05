module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/modali/dist/modali.css",
  ],
  theme: {
    extend: {},
    minWidth: {
      '1/5': '20%',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
