/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B1120",
        surface: "#121A2B",
        "surface-light": "#1B2537",
        "surface-hover": "#212C42",
        border: "#223049",
        accent: {
          DEFAULT: "#38BDF8",
          cyan: "#22D3EE",
          dim: "#0EA5C9",
        },
        ink: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          faint: "#5B6B85",
        },
        sale: "#FB923C",
        success: "#34D399",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.35)",
        card: "0 1px 0 rgba(255,255,255,0.03), 0 8px 24px -8px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(11,17,32,0) 0%, #0B1120 90%)",
      },
    },
  },
  plugins: [],
};
