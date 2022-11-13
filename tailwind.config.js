/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0a7fad",
        "primary-light": "#57aedf",
        "primary-dark": "#00537d",
        "secondary": "#ec571c",
        "secondary-light": "#ff894b",
        "secondary-dark": "#b22200",
        "gray": "#fafafa",
        "dark-gray": "#222222",
        "dark-bg": "#121212"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
