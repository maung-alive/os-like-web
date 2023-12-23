/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ['IBM Plex Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New'],
    }
  },
  plugins: [],
}