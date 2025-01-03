/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['"Baskervville SC"', 'serif'],
        pisano: ["Dancing Script", 'cursive'],
      },
    },
  },
  plugins: [],
}
