module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Majalla", "sans-serif"],
      },
    },
    colors: {
      "pri-color": "#9AD0EC",
      "sec-color": "#1572A1",
      "white": "#fff",
      "black": "#000",
      "ter-color": "#EFDAD7",
      "green-1" :  "#35D1BE",
    }
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
