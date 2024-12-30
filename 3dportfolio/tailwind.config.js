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
        accent: "#80a0a3",    // Accent color for links and highlights
        background: "#5a6162", // Background color
        dark: "#111111",
        light: "#f9f9f9"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
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
