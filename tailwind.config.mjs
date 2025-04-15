/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scanne ces fichiers pour les classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077b6', // Bleu principal
        secondary: '#00b4d8', // Bleu clair
        dark: '#1a1a1a', // Noir pour header/footer
      },
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};