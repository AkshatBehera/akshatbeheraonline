/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Gotham', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 300,
        medium: 300,
        bold: 300,
      },
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#000000',
        },
        accent: {
          light: '#ffffff',
          dark: '#ffffff',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        surface: {
          light: '#f8f9fa',
          dark: '#121212',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 