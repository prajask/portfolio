/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "var(--dark)",
        "light": "var(--light)",
        "primary": "var(--primary)",
        "gray": "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        "ibm": "var(--ibm)",
        "ibm-highlight": "var(--ibm-highlight)",
        "mosi": "var(--mosi)",
        "twilio": "var(--twilio)"
      },
    },
  },
  plugins: [],
};
