/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ¡AQUÍ ESTÁ LA MAGIA! Sin el "src/" para que funcione en tu proyecto
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          violet: '#8B5CF6',
          fuchsia: '#D946EF',
          'violet-deep': '#7C3AED',
          'fuchsia-deep': '#C026D3',
          'bg-dark': '#0A0008',
          'bg-card': '#1A1226',
          'text-primary': '#F5F0FF',
          'text-secondary': '#B8A8D4',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'blob-float': 'blob-float 10s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out 1.5s infinite',
        'scroll-bounce': 'scroll-bounce 1.8s ease-in-out infinite',
        'fade-slide-up': 'fade-slide-up 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};