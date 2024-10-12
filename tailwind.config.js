/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": 
        "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47)"
      }
    },
  },
  plugins: [],
}

