/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "570px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors:{
        "BlueWhite": "#87CEEB",
      }
    },
    fontFamily:{
      "Roboto": ["Roboto", "sans-serif"],
      "Montserrat": ["Montserrat", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "16px",
        lg: "24px",
      },
    },    
  },
  plugins: [],
}