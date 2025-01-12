/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "text-primary": "var(--primary)",
        "primary-100": "var(--primary-100)",
        "ibm": "var(--ibm)",
        "mosi": "var(--mosi)",
        "mosi-secondary": "var(--mosi-secondary)"
      },

      animation: {
        'gradient': 'gradient 3.5s linear infinite reverse',
      },

      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      }
    },
  },
  plugins: [],
};
