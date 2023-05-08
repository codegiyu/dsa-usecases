/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        green: "#ABD904",
        blue: "#245CA6",
        neutral: "#F2F2F2",
        dark: "#1A1A1A"
      },
      fontFamily: {
        sen: ['"Sen"', "sans-serif"],
        workSans: ['"Work Sans"', "sans-serif"]
      },
      spacing: {
        main: "calc(100vh - 120px)",
        mainHeight: "calc(100vh - 120px)",
      }
    },
  },
  plugins: [],
}

