const { rgba } = require('style-value-types');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'beige': '#F5F5DC',
        'brown': '#f2e8e5',
        'fack': '#846358',
        'gray': '#777B7E',
        'marron': '#43302b',
        'columbia': '#D1EAF0',
        'prussian': '#012A4A',
        'cream': '#B1B0C1',
        'jean': '#05407E',
        'whity': '#F3F4F6',
        'whity2': '#F9FAFB',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui", "tailwindcss-transforms")],
};
