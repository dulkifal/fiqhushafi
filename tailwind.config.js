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
     
   
     
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/forms'), 
  ],
}
