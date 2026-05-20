/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e5f2ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b2ff',
          400: '#3399ff',
          500: '#007fff',
          600: '#0066cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933',
          950: '#001224', // Dark Mode
        },
        neutral: {
          50: '#F0F0F0',
          100: '#E0E0E0',
          200: '#CCCCCC',
          300: '#B8B8B8',
          400: '#A3A3A3',
          500: '#8F8F8F',
          600: '#7A7A7A',
          700: '#666666',
          800: '#525252',
          900: '#3D3D3D',
          950: '#292929', // Fundo escuro principal se fizer Dark Mode
        },
      },
    },
  },
  plugins: [],
};
