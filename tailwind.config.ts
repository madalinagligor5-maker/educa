import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFDF9",
          bgSecondary: "#FAF6EE",
          primary: "#E06D53",
          primaryHover: "#D97736",
          text: "#2D3748",
          sage: "#88A88E",
          sky: "#7CA5B8",
          yellow: "#F9D678",
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
export default config;
