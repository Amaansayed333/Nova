/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",   // dark blue
        secondary: "#1e40af", // blue
        lightBlue: "#38bdf8", // light blue
      },
    },
  },
  plugins: [],
}
