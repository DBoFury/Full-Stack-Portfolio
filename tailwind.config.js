/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        mb: '360px',
        dt: '1440px',
      },
      boxShadow: {
        button: '0 5px 10px 0px rgba(0, 0, 0, 0.3)',
        'button-hover': '0 3px 3px 0 rgba(0, 0, 0, 0.4)',
      },
      colors: {
        onyx: '#424241',
        'pine-green': '#00887A',
        'ruddy-blue': '#77A6F6',
        'battleship-gray': '#8E8D89',
      },
      backgroundImage: {
        'oleg-d': "url('/Full-Stack-Portfolio/Oleg-D.webp')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-animated')],
};
