// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Config>{
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06060f',
        text: '#f0efff',
        muted: 'rgba(240,239,255,0.45)',
        muted2: 'rgba(240,239,255,0.2)',
        border: 'rgba(255,255,255,0.08)',
        borderHover: 'rgba(255,255,255,0.18)',
        glass: 'rgba(255,255,255,0.04)',
        glassHover: 'rgba(255,255,255,0.08)',
        red: '#ff3d3d',
        orange: '#ff8c42',
        cyan: '#00d4ff',
        purple: '#b06dff',
        green: '#3dffa0',
      },
      fontFamily: {
        sans: ['"Neue Montreal"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
