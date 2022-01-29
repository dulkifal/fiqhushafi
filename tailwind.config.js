module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "pri-color": "#9AD0EC",
      "sec-color": "#1572A1",
      "white": "#fff",
      "black": "#000",
      "ter-color": "#EFDAD7",
    }
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
