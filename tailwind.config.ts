import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        hover: 'var(--hover)',
        active: 'var(--active)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        paper: '#fcf7f7',
        ink: '#181818',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['Bebas Neue', 'sans-serif'],
      },
      transitionTimingFunction: {
        portfolio: 'cubic-bezier(.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
