/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure your paths are correct
  ],
  safelist: [
    {
      pattern: /^grid-cols-\d+$/, // This will safelist grid-cols-1 to grid-cols-12,
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
