/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#B80000',
        info: '#25ABFF',
        success: '#27AE60',
        warning: '#FFE969',
        error: '#FF6D6D',
        black: {
          1: '#000000',
          2: '#1D1D1D',
          3: '#282828',
        },
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          50: '#E0E0E0',
          100: '#BDBDBD',
          600: '#4F4F4F',
          700: '#333333',
          900: '#000000',
        },
        // Keep old names for compatibility during transition
        'primary-teal': '#000000',
        'primary-orange': '#B80000',
      },
    },
  },
  plugins: [],
}
