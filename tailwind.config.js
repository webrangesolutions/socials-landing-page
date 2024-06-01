/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    
      xl: { max: "1579px" },

      // => @media (max-width: 1279px) { ... }

      lg: { max: "1123px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "967px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      
    },
    extend: {
      colors: {
        'border': 'linear-gradient(90deg, rgba(255, 255, 255) 100%, rgba(106, 106, 106) 0)',
        "yelloww": "#FFF528"
       
      },
      
    },
  },
  plugins: [],
}