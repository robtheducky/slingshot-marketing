import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'warm-bg':    '#FBF7F2',
        'bg-surface': '#FDFBF8',
        action:       { DEFAULT: '#D97706', hover: '#B45309', wash: '#FEF3C7' },
        slate:        { DEFAULT: '#9FB7C8', hover: '#8BA5B5' },
        sage:         '#B5C4B0',
        'text-dark':  '#2F2F2F',
        'text-muted': '#6B6B6B',
        'border-warm': '#E8DFD0',
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
} satisfies Config;
