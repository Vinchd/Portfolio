/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "520px",
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        primary: "#010409",
        secondary: "#E6EDF3",
        tertiary: "#0D1117",
        link: "#2F81F7",
        // buttongrey: "#21262D",
        // buttongreen: "#238636",
        // textbutton: "#C9D1D9",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "1.4",
            fontWeight: "600",
          },
        ],
        xl: [
          "1.625rem",
          {
            lineHeight: "1.42",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.375rem",
          {
            lineHeight: "1.45",
            fontWeight: "600",
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.48",
            fontWeight: "600",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "300",
          },
        ],
        xs: [
          "0.875rem",
          {
            lineHeight: "1.53",
            fontWeight: "300",
          },
        ],
        "2xs": [
          "0.75rem",
          {
            lineHeight: "1.57",
            fontWeight: "300",
          },
        ],
      },
    },
    plugins: [],
  },
};
