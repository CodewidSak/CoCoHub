/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Red & Black Sleek Theme
        dark: {
          bg: '#0a0a0a',
          surface: '#141414',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        primary: {
          DEFAULT: '#ef4444',
          dark: '#dc2626',
          light: '#f87171',
        },
        secondary: {
          DEFAULT: '#991b1b',
          dark: '#7f1d1d',
          light: '#b91c1c',
        },
        accent: {
          DEFAULT: '#fca5a5',
          dark: '#f87171',
          light: '#fecaca',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(239, 68, 68, 0.5)',
        'red-glow-lg': '0 0 40px rgba(239, 68, 68, 0.6)',
        'red-glow-xl': '0 0 60px rgba(239, 68, 68, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-red': 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
        'gradient-red-dark': 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(239, 68, 68, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
