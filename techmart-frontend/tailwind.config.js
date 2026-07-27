/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        base: "#050505",
        surface: "#141414",
        "surface-light": "#1E1E1E",
        "surface-hover": "#262626",
        border: "#2C2C2C",

        /* Accent Colors */
        accent: {
          DEFAULT: "#2AA36B",
          cyan: "#38C17F",
          dim: "#1E7C52",
        },

        /* Text */
        ink: {
          DEFAULT: "#F8F8F8",
          muted: "#C0C0C0",
          faint: "#8F8F8F",
        },

        /* Status */
        sale: "#FF8A3D",
        success: "#39D98A",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(42,163,107,.35)",
        card: "0 15px 40px rgba(0,0,0,.45)",
      },

      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 100%)",

        hero:
          "radial-gradient(circle at top left, rgba(42,163,107,.25), transparent 40%), radial-gradient(circle at bottom right, rgba(18,110,78,.25), transparent 45%), linear-gradient(135deg,#050505,#111111,#15241B,#050505)",

        card:
          "linear-gradient(145deg,#171717,#0E0E0E)",

        button:
          "linear-gradient(135deg,#2AA36B,#38C17F)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },

  plugins: [],
};