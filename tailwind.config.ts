import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Beige & Cream系
        cream: {
          50: '#fefdfb',
          100: '#faf9f7',
          200: '#f5f3f0',
          300: '#f0ede8',
          400: '#e8e4df',
          500: '#ddd7d0',
          600: '#c9c0b6',
          700: '#a8998c',
          800: '#8a7b6e',
          900: '#6b5f55',
        },
        // Soft Green系
        sage: {
          50: '#f7f9f7',
          100: '#ecf4ec',
          200: '#d1e7d1',
          300: '#a8d5a8',
          400: '#7abd7a',
          500: '#5a9e5a',
          600: '#4a8a4a',
          700: '#3d733d',
          800: '#335c33',
          900: '#2a4b2a',
        },
        // Gold & Amber系
        gold: {
          50: '#fefcf3',
          100: '#fdf7e0',
          200: '#f9e8b8',
          300: '#f4d787',
          400: '#eec351',
          500: '#e6b02e',
          600: '#d4af37',
          700: '#b8860b',
          800: '#956a0c',
          900: '#7a5a0e',
        },
        // Charcoal & Gray系
        charcoal: {
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Primary colors (ソフトグリーン)
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Secondary colors (ゴールド)
        secondary: {
          50: '#fefcf3',
          100: '#fdf7e0',
          200: '#f9e8b8',
          300: '#f4d787',
          400: '#eec351',
          500: '#e6b02e',
          600: '#d4af37',
          700: '#b8860b',
          800: '#956a0c',
          900: '#7a5a0e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config