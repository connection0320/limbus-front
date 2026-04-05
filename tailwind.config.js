/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c8860a',
          light: '#e09a0c',
          dim: '#b87000',
          bright: '#ffe066',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#141414',
          border: '#2c2c2c',
        },
      },
      fontFamily: {
        sans: [
          'Noto Sans KR',
          'Apple SD Gothic Neo',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      keyframes: {
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.8s ease-out both',
        'scroll-bounce': 'scrollBounce 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


