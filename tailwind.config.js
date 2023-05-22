/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#FF5555",
        secondary: "#FDE598",
      },
      fontFamily: {
        Clash: ["Clash Display", "sans-serif"],
      },
      lineHeight: {
        head: "54px",
      },
    },
  },
  plugins: [],
};
