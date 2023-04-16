/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB43A",
        secondary: "#363740",
        black: {
          DEFAULT: "#1C1C27",
          light: "#363740",
        },
      },
    },
  },
  plugins: [],
};
