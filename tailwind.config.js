/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('tailwind-clip-path')],
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
      clipPath: {
        skew: 'polygon(0 0, 100% 0, 100% 100%, 85% 100%)',
      },
    },
  },
  plugins: [],
}
