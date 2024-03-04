/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "light-primary": "#fbf9f3",
        "dark-primary": "#2f2e2e",
        "slate-gray": "#424242",
        "visual_brain-primary": "#3276E8",
        "lung_love-primary": "#0ACF83"
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
