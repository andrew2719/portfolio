/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c8fc',
          300: '#66acfa',
          400: '#3391f9',
          500: '#0075f7',
          600: '#005ec6',
          700: '#004694',
          800: '#002f63',
          900: '#001731',
          950: '#0a192f',
        },
        accent: {
          50: '#eafff9',
          100: '#d5fff4',
          200: '#acffe9',
          300: '#82ffdd',
          400: '#58ffd2',
          500: '#2effc7',
          600: '#25cc9f',
          700: '#1c9977',
          800: '#136650',
          900: '#093328',
          950: '#64ffda',
        },
        secondary: {
          50: '#f6f8fd',
          100: '#edf2fc',
          200: '#dbe5f9',
          300: '#c9d8f6',
          400: '#b7cbf3',
          500: '#a5bef0',
          600: '#8498c0',
          700: '#637290',
          800: '#424c60',
          900: '#212630',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};