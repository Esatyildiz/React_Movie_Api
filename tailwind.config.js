/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1200px',
          xl: '1200px',
        },
      },
      transitionDuration: {
        '400': '0.4s',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(.88, -.35, .565, 1.35)',
      },
      width: {
        'calc-100-minus-150': 'calc(100% - 150px)',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/trendingBg.svg')",
        "gradiend-filter": "linear-gradient(180deg,rgba(4,21,45,0) 0%,#04152d 79.17%)",
        "tabGradient": "linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)",
        "searchGradient": "linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)",
      },
      backgroundPosition: {
        'position': '50% 200px',
      },
      backgroundSize: {
        'size': '1400px',
      },
      backgroundColor: {
        'header-backdrop': 'rgba(0,0,0,.25)',
        "blackvar": "#04152d",
        "pink": "#da2f68",
      },
    },
  },
  plugins: [],
}