/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-color": "#151828",
        "green-primary": "#1de49f",
        "green-secondary": "#07432e",
        "background-secondary": "rgb(50, 58, 93)",
        "font-color-primary": "rgb(227, 231, 239)",
        "font-color-secondary": "rgb(167, 162, 182)",
        "font-color-terciary": "rgb(132, 135, 141)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
    },
  },
  variants: {},
  plugins: [],
};
