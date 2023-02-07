// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "cursive"],
        "source-sans-pro": ['"Source Sans Pro"', "cursive"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
}
