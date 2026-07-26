/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F7F6F2",
        surface: "#FFFFFF",
        "surface-light": "#EEF3EC",
        "surface-hover": "#E3EADF",
        border: "#D8E0D5",

        accent: {
          DEFAULT: "#5E7D5A",
          cyan: "#7A9A74",
          dim: "#4F6B4C",
        },

        ink: {
          DEFAULT: "#2F3B2F",
          muted: "#6E776B",
          faint: "#8E978B",
        },

        sale: "#B08968",
        success: "#6A8F65",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(94,125,90,0.25)",
        card: "0 8px 25px rgba(0,0,0,0.08)",
      },

      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(247,246,242,0) 0%, #F7F6F2 100%)",
      },
    },
  },
  plugins: [],
};