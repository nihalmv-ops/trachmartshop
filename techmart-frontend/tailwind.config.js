/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F8F7F3",          // Cream background
        surface: "#FFFFFF",       // White cards
        "surface-light": "#F2F5F0",
        "surface-hover": "#E8EFE5",
        border: "#D8E2D4",

        accent: {
          DEFAULT: "#5E7D5A",     // Sage Green
          cyan: "#6F8E68",
          dim: "#4F6B4C",
        },

        ink: {
          DEFAULT: "#243224",     // Dark text
          muted: "#667266",
          faint: "#97A097",
        },

        sale: "#C58A4A",
        success: "#4F8A5B",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 10px 40px rgba(94,125,90,0.18)",
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },

      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(248,247,243,0) 0%, #F8F7F3 100%)",
      },
    },
  },
  plugins: [],
};