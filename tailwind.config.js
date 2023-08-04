/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#424241",
        "pine-green": "#00887A",
        "ruddy-blue": "#77A6F6",
        "battleship-gray": "#8E8D89",
      },
      backgroundImage: {
        "photo-mobile-back": "url('/figures/mobile/PhotoBg.png')",
      },
    },
  },
  plugins: [],
};
