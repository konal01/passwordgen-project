/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        'tiny5-regular': [ "Tiny5",'sans-serif'],
      },
      colors: {
        'custom-green': '#59cd90',
      },
      boxShadow: {
        'colored': '0 0 10px rgba(89, 205, 144, 0.5)',
      },
    },
  },
  plugins: [],
}

