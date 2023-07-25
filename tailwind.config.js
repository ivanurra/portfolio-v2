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
        "green-secondary": "#053625",
        "background-secondary": "rgb(50, 58, 93)",
        "font-color-primary": "rgb(227, 231, 239)",
        "font-color-secondary": "rgb(183, 178, 200)",
        "font-color-terciary": "rgb(132, 135, 141)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontSize: {
      xxs: "0.5rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      m: "1.1rem",
      l: "1.2rem",
      xl: "1.3rem",
      xxl: "1.5rem",
      "2xl": "1.7rem",
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
