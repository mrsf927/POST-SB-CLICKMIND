/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clickmind: {
          primary: '#0F172A', // Placeholder dark blue
          secondary: '#3B82F6', // Placeholder blue
          accent: '#0EA5E9', // Placeholder light blue
          background: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}
