/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top, 0px)',
        'safe-bottom': 'env(safe-area-inset-bottom, 0px)',
        'safe-left': 'env(safe-area-inset-left, 0px)',
        'safe-right': 'env(safe-area-inset-right, 0px)',
      },
      colors: {
        mint: { 50: '#f2fbf7', 100: '#e1f6ec', 200: '#c3edd9', 300: '#95ddbe', 400: '#61c69d', 500: '#3ba77d', 600: '#2b8663', 700: '#236c51', 800: '#1e5642', 900: '#194737' },
        sage: { 50: '#f4f6f2', 100: '#e5e9de', 200: '#ccdbcc', 300: '#a3bda8', 400: '#7a9e82', 500: '#587c60', 600: '#415e48', 700: '#314737', 800: '#233327', 900: '#17211a' },
        sand: { 50: '#faf8f5', 100: '#f3efe8', 200: '#e8e0d3', 300: '#d4c7b3', 400: '#bfad93', 500: '#ab9778', 600: '#9a8468', 700: '#7f6c55', 800: '#6a5a48', 900: '#584b3e' },
        terracotta: { 50: '#fbf6f3', 100: '#f6ebdf', 200: '#ecd2bf', 300: '#dfb097', 400: '#d0896b', 500: '#bf6747', 600: '#a55034', 700: '#863f28', 800: '#6c3321', 900: '#572a1c' },
        charcoal: { 50: '#f5f6f6', 100: '#e7e8e9', 200: '#ced0d3', 300: '#a7abb2', 400: '#7d828c', 500: '#5d626c', 600: '#494d56', 700: '#3b3e45', 800: '#2e3037', 900: '#202227' },
        warm: { 50: '#fdfbf7', 100: '#faf5eb', 200: '#f4eada', 300: '#ebdbca', 400: '#debfa6', 500: '#cf9e7c', 600: '#be7e57', 700: '#a7623d', 800: '#8d4d2d', 900: '#713a20' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
