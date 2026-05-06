/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        display: ["Bebas Neue", "Impact", "Arial Black", "sans-serif"],
      },
      colors: {
        barber: {
          black: "#050505",
          dark: "#0B0B0E",
          card: "#121218",
          white: "#F8FAFC",
          blue: "#117BFF",
          red: "#E31B3D",
          muted: "#A1A1AA",
        },
      },
      boxShadow: {
        glowBlue: "0 0 35px rgba(17, 123, 255, 0.22)",
        glowRed: "0 0 35px rgba(227, 27, 61, 0.18)",
      },
      backgroundImage: {
        barberGradient:
          "linear-gradient(135deg, #E31B3D 0%, #117BFF 55%, #FFFFFF 120%)",
        darkRadial:
          "radial-gradient(circle at top, rgba(17,123,255,.18), transparent 36%), radial-gradient(circle at bottom right, rgba(227,27,61,.16), transparent 34%)",
      },
    },
  },
  plugins: [],
};
