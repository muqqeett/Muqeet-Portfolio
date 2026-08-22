/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000',
          900: '#070707',
          850: '#0d0d0d',
          800: '#141414',
          750: '#1a1a1a',
          700: '#222222',
          600: '#333333',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          gold: '#eab308'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Montserrat', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-.075em',
        'tighter': '-.05em',
        'tight': '-.025em',
        'normal': '0',
        'wide': '.05em',
        'wider': '.1em',
        'widest': '.2em',
        'ultra': '.3em',
      }
    },
  },
  plugins: [],
}
