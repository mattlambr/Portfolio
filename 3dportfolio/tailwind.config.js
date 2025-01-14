/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dadeef",   // Topography line color
        secondary: "#c0c6c8", // Light gray for body text
        accent: "#4b917d",    // Accent color for links and highlights
        background: "#111111", // Background color
        dark: "#111111",
        light: "#f9f9f9"
      },
      fontFamily: {
        sans: ["Public Sans", "ui-sans-serif", "system-ui"], // Add Public Sans
      },
      textShadow: {
        'black-outline': '0 2px 2px black, 0 -2px 2px black, -2px 0 2px black, 2px 0 2px black',
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"], // Allows scaling on active state
      backgroundColor: ["active"], // Allows background color change on active
      transform: ["active"], // Allows transform animations on active
    },
  },
  plugins: [
    require("tailwindcss-textshadow"), // For text shadows
  ],
};
