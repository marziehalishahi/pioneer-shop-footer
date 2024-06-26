/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  prefix: "tw-",
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/assets/img/2.png')",
      },

      colors: {
        primary: "rgb(123, 48, 123)",
        secondary: "#ecc94b",
        muted: "#d4d4d4",
        g2: {
          light: "#d1d5db",
          DEFAULT: "#6b7280",
          dark: "#374151",
        },
      },

      fontFamily: {
        iran: "IRANSans",
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1500px",
        // => @media (min-width: 1280px) { ... }
      },

      boxShadow: {
        dot: "0 2px 4px 0 #ff5f5f",
      },
    },
  },
  plugins: [],
};
