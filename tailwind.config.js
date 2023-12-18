/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        orangada: '#fa4616',
        border: '#efefef',
      },
      minHeight: {
        maxScreen: '100svh',
      },
      fontFamily: {
        staatliches: ['Staatliches', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('src/assets/home.jpg')",
      },
    },
  },
};
