/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9fb',
          100: '#e0f2f7',
          200: '#bae6f0',
          300: '#7dd3e8',
          400: '#3fb8db',
          500: '#1b9bc8',
          600: '#157ba8',
          700: '#146089',
          800: '#164b70',
          900: '#1a3d5c',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffe8d6',
          200: '#ffd4ad',
          300: '#ffb87a',
          400: '#ff9d47',
          500: '#ff8c1f',
          600: '#e67e1b',
          700: '#c26917',
          800: '#9e5518',
          900: '#7d451a',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a3d5c 0%, #146089 50%, #157ba8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
