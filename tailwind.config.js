export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1B1611",
          light: "#2A231C",
          dark: "#120E0A",
        },
        cream: {
          DEFAULT: "#F6EFE2",
          soft: "#EFE5D2",
        },
        saffron: {
          DEFAULT: "#E08A2E",
          light: "#F0A857",
          dark: "#B96D1E",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#DCC085",
        },
        pine: {
          DEFAULT: "#2E4636",
          light: "#3E5C48",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.35)",
        card: "0 10px 30px -12px rgba(27,22,17,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
        slowZoom: "slowZoom 8s ease-in-out infinite alternate",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
