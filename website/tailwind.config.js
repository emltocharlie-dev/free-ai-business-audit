/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          dark: '#020617',
          light: '#1e293b',
        },
        amber: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fbbf24',
          soft: 'rgba(245, 158, 11, 0.1)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          dark: '#0891b1',
          light: '#22d3ee',
        },
        orange: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Source Code Pro', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'radar-draw': 'radarDraw 1.5s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        radarDraw: {
          'from': { opacity: '0', strokeDasharray: '1000', strokeDashoffset: '1000' },
          'to': { opacity: '1', strokeDasharray: '1000', strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
