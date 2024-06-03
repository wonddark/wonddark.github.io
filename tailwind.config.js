/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--hover-background)'
      },
      textColor:{
        default: 'var(--color)',
        link: 'var(--link-color)'
      },
      backgroundColor:{
        base: 'var(--background)',
        alternate: 'var(--alternate-background)'
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
