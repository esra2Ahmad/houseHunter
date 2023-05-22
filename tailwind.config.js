/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      lexend: ["lexend", "sans-serif"],
      },
     
     
      boxShadow:{
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      
      colors: {
        primary:"#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 10%)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        green:"#047857",
        greenl:"#d1fae5",
        white:"#fafafa",
        darkblue:"rgba(27, 28, 87, 1)",
        gray:"rgba(98, 102, 135, 1)",
        grayl:" #888b97 ",
        greenm:"rgba(16, 185, 129, 1)",
        grays:"rgba(104, 121, 159, 1)",
        syan:"rgba(209, 250, 229, 1)",
        graym:"rgba(136, 139, 151, 1)",
        offwhite:"rgba(224, 227, 235, 1)",
        orange:"rgba(245, 158, 11, 1)",
        bluem:"rgba(14, 23, 53, 1)",
        span:"rgba(60, 69, 99, 1)",
        gray2:"rgba(98, 102, 135, 1)",
       
     
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

