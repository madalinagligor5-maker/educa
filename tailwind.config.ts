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
        coral: {
          DEFAULT: "#FF8F7E",
          hover: "#F27A68",
          light: "#FFEAE6",
        },
        sage: {
          DEFAULT: "#A8C5A1",
          hover: "#92B38A",
          light: "#EAF3E9",
        },
        powderPink: {
          DEFAULT: "#F6C5D1",
          light: "#FDF0F3",
        },
        sunYellow: {
          DEFAULT: "#FFD776",
          light: "#FFF6DD",
        },
        cream: {
          DEFAULT: "#FFFDF9",
          soft: "#FFF4E6",
        },
        charcoal: {
          DEFAULT: "#4B3F35",
          muted: "#756658",
        },
        taupe: {
          DEFAULT: "#8D7B68",
        },
        softBorder: "#E7E3DF",
        softMint: "#E9F3EE",
        lavender: {
          DEFAULT: "#DCCBFA",
          light: "#F3EEFE",
        },
      },
      fontFamily: {
        heading: ["var(--font-baloo2)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        paper: "0 10px 30px -5px rgba(75, 63, 53, 0.07), 0 4px 12px -2px rgba(75, 63, 53, 0.04)",
        floating: "0 20px 40px -10px rgba(75, 63, 53, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
