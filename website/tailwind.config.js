/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design token references - using CSS variables
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          secondary: 'var(--color-accent-secondary)',
          soft: 'var(--accent-amber-soft)',
        },
        // Slate neutrals scale
        slate: {
          50: 'var(--slate-50)',
          100: 'var(--slate-100)',
          200: 'var(--slate-200)',
          300: 'var(--slate-300)',
          400: 'var(--slate-400)',
          500: 'var(--slate-500)',
          600: 'var(--slate-600)',
          700: 'var(--slate-700)',
          800: 'var(--slate-800)',
          900: 'var(--slate-900)',
          950: 'var(--slate-950)',
        },
        // Semantic colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        // Legacy aliases for backward compatibility
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
        emerald: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#a78bfa',
        },
      },
      spacing: {
        // Tap target minimum
        'tap-min': 'var(--tap-target-min)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'glow-amber': 'var(--shadow-glow-amber)',
        'glow-cyan': 'var(--shadow-glow-cyan)',
        'glow-emerald': 'var(--shadow-glow-emerald)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Source Code Pro', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
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
