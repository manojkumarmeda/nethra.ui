/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fffe',
          100: '#ccfffe',
          200: '#99fffd',
          300: '#66fffc',
          400: '#33fffb',
          500: '#20B2AA',
          600: '#1a9f99',
          700: '#148c88',
          800: '#0e7977',
          900: '#086666',
        },
        secondary: {
          500: '#17a2b8',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'rotate-slow': 'spin 10s linear infinite',
        'float': 'float 4s infinite ease-in-out',
        'glow': 'glow 2s infinite alternate',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '1' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(32, 178, 170, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(32, 178, 170, 0.8))' },
        },
      },
      backgroundImage: {
        'app-preview': "url('/assets/bg-app-preview.png')",
      },
    },
  },
  plugins: [],
}
