/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Barlow: ["Barlow"],
      Quattrocento: ["Quattrocento"],
      Satisfy: ["Satisfy"],
    },

    extend: {
      colors: {
        "yellow-tek": "#FDC913",
      },
    },
  },
  plugins: [],
};
