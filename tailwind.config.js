/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-background)',
        'background-2': 'var(--color-background-2)',
        'brand-1': 'var(--color-brand-1)',
        'brand-2': 'var(--color-brand-2)',
        'vt-bg1': 'var(--vt-c-bg1)',
        'vt-bg2': 'var(--vt-c-bg2)',
        'vt-brand1': 'var(--vt-c-brand1)',
        'vt-brand2': 'var(--vt-c-brand2)',
        'vt-grey': 'var(--vt-c-grey)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        ibmPlexMono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}