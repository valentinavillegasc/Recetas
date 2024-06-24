/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        greenOne: "#7CB518",
        greenTwo: "#5C8001",
        orangeOne: "#FBB02D",
        orangeTwo: "#fb6107",
      },
    },
  },
  plugins: [],
};
