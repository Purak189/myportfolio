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
        'brand-3': 'var(--color-brand-3)',
        'grey': 'var(--color-grey)',
        'grey-2': 'var(--color-grey-2)',
        'vt-bg1': 'var(--vt-c-bg1)',
        'vt-bg2': 'var(--vt-c-bg2)',
        'vt-brand1': 'var(--vt-c-brand1)',
        'vt-brand2': 'var(--vt-c-brand2)',
        'vt-brand3': 'var(--vt-c-brand3)',
        'vt-grey': 'var(--vt-c-grey)',
        'vt-grey2': 'var(--vt-c-grey2)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        ibmPlexMono: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'about-bg': "url('@/assets/img/background-aboutme.png')",
        'projects-bg': "url('@/assets/img/background-projects.png')",
        'formation-bg': "url('@/assets/img/background-code.png')",
      },
    },
  },
  plugins: [],
}