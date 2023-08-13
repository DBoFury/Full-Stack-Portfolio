/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        mb: "360px",
        dt: "1440px",
      },
      boxShadow: {
        button: "0 5px 10px 0px rgba(0, 0, 0, 0.3)",
        "button-hover": "0 3px 3px 0 rgba(0, 0, 0, 0.4)",
      },
      colors: {
        onyx: "#424241",
        "pine-green": "#00887A",
        "ruddy-blue": "#77A6F6",
        "battleship-gray": "#8E8D89",
      },
      backgroundImage: {
        "oleg-d": "url('/Full-Stack-Portfolio/Oleg D.webp')",

        "about-1": "url('/Full-Stack-Portfolio/figures/desktop/AboutBg 1.png')",
        "about-2": "url('/Full-Stack-Portfolio/figures/desktop/AboutBg 2.png')",
        "about-3": "url('/Full-Stack-Portfolio/figures/desktop/AboutBg 3.png')",
        "about-3-left":
          "url('/Full-Stack-Portfolio/figures/desktop/AboutBg 3 (Left).png')",
        "about-3-right":
          "url('/Full-Stack-Portfolio/figures/desktop/AboutBg 3 (Right).png')",
        "project-1":
          "url('/Full-Stack-Portfolio/figures/desktop/ProjectBg 1.png')",
        "project-2":
          "url('/Full-Stack-Portfolio/figures/desktop/ProjectBg 2.png')",
        "project-3":
          "url('/Full-Stack-Portfolio/figures/desktop/ProjectBg 3.png')",
        "project-4":
          "url('/Full-Stack-Portfolio/figures/desktop/ProjectBg 4.png')",
        "contact-left":
          "url('/Full-Stack-Portfolio/figures/desktop/ContactBg (Left).png')",
        "contact-right":
          "url('/Full-Stack-Portfolio/figures/desktop/ContactBg (Right).png')",

        "photo-mobile-back":
          "url('/Full-Stack-Portfolio/figures/mobile/PhotoBg.png')",
        "mobile-about-1":
          "url('/Full-Stack-Portfolio/figures/mobile/AboutBg 1.png')",
        "mobile-about-2":
          "url('/Full-Stack-Portfolio/figures/mobile/AboutBg 2.png')",
        "mobile-project-1":
          "url('/Full-Stack-Portfolio/figures/mobile/ProjectBg 1.png')",
        "mobile-project-2":
          "url('/Full-Stack-Portfolio/figures/mobile/ProjectBg 2.png')",
        "mobile-project-3":
          "url('/Full-Stack-Portfolio/figures/mobile/ProjectBg 3.png')",
        "mobile-project-4":
          "url('/Full-Stack-Portfolio/figures/mobile/ProjectBg 4.png')",
        "mobile-contact-1":
          "url('/Full-Stack-Portfolio/figures/mobile/ContactBg (Left).png')",
        "mobile-contact-2":
          "url('/Full-Stack-Portfolio/figures/mobile/ContactBg (Right).png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "grow-line-vertical": {
          from: { height: "0" },
          to: { height: "var(--line-height)" },
        },
        "grow-line-horizontal": {
          from: { width: "0" },
          to: { width: "var(--line-width)" },
        },
        "scale-in": {
          from: { scale: 0 },
          to: { scale: "100%" },
        },
        "bg-appearance": {
          from: { scale: 0, transform: "rotate(-45deg)" },
          to: { scale: "100%", transform: "rotate(0deg)" },
        },
        "plus-appearance": {
          from: { scale: 0, transform: "rotate(-180deg)" },
          to: { scale: "100%", transform: "rotate(0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "grow-line-vertical": "grow-line-vertical",
        "grow-line-horizontal": "grow-line-horizontal",
        "scale-in": "scale-in",
        "bg-appearance": "bg-appearance",
        "plus-appearance": "plus-appearance",
      },
      animationDuration: {
        1500: "1500ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
