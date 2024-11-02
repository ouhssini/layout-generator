/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  safelist: [
    {
      pattern: /^grid-cols-\d+$/, 
    },
    {
      pattern: /^gap-\d+(\.\d+)?$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
