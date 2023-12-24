/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        orangada: '#fa4616',
        border: '#efefef',
        navBorder: '#c8c8c8',
        blueberryLight: 'rgba(9, 45, 77, 0.8)',
        blueberry: 'rgba(9, 45, 77, 1)',
        darkBerry: 'rgb(5, 28, 48)',
      },
      minHeight: {
        maxScreen: '100svh',
      },
      height: {
        customHeight: '80svh',
        mobileCustomHeight: '100svh',
      },
      fontFamily: {
        staatliches: ['Staatliches', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('src/assets/home.jpg')",
      },
      letterSpacing: {
        wider: '.05em',
      },
      padding: {
        '15rem': '15rem',
      },
    },
  },
};
