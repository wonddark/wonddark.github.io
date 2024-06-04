const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}",
  ],
  theme: {
    fontSize: {
      xs: defaultTheme.fontSize.xs[0],
      sm: defaultTheme.fontSize.sm[0],
      base: defaultTheme.fontSize.base[0],
      lg: defaultTheme.fontSize.lg[0],
      xl: defaultTheme.fontSize.xl[0],
      "2xl": defaultTheme.fontSize["2xl"][0],
      "3xl": defaultTheme.fontSize["3xl"][0],
      "4xl": defaultTheme.fontSize["4xl"][0],
      "5xl": defaultTheme.fontSize["5xl"][0],
      "6xl": defaultTheme.fontSize["6xl"][0],
      "7xl": defaultTheme.fontSize["7xl"][0],
      "8xl": defaultTheme.fontSize["8xl"][0],
      "9xl": defaultTheme.fontSize["9xl"][0],
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-hover": "var(--hover-background)",
      },
      textColor: {
        default: "var(--color)",
        link: "var(--link-color)",
      },
      backgroundColor: {
        base: "var(--background)",
        alternate: "var(--alternate-background)",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
