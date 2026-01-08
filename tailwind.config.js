/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'capital-blue': '#004977',
        'capital-blue-light': '#0066a1',
        'capital-blue-dark': '#003558',
        'capital-red': '#D03027',
      },
      fontFamily: {
        sans: ['General Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'capital': '0 2px 8px rgba(0, 73, 119, 0.08)',
        'capital-lg': '0 4px 16px rgba(0, 73, 119, 0.12)',
      },
    },
  },
  plugins: [],
}
