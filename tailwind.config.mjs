/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3984E8',
        secondary: '#7F5AF0',
        dark: {
          main: '#16161A',
          secondary: '#202023',
        },
        neutral: {
          main: '#FFFFFE',
          secondary: '#C0C0C0',
        },
      },
    },
  },
  plugins: [],
};
