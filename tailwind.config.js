// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
        'modern': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
