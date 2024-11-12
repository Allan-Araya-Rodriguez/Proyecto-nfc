/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#043D76',
        'secondary': '#FF6600',
        'background': '#F2F2F2',
      },
      fontFamily: {
        'serif': ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
