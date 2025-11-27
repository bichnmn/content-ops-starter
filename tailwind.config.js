/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Màu chính Ahamove
        primary: {
          DEFAULT: '#FF7F32',
          light: '#FFA066',
          dark: '#E66F2D',
          50: '#FFF5EF',
          100: '#FFEBDF',
          200: '#FFD7BF',
          300: '#FFC39F',
          400: '#FFAF7F',
          500: '#FF7F32',
          600: '#FF6B0F',
          700: '#E65E00',
          800: '#B34900',
          900: '#803400',
        },
        secondary: {
          DEFAULT: '#0E4174',
          light: '#1B5A99',
          dark: '#0A2F52',
          50: '#E6F0F9',
          100: '#CCE1F3',
          200: '#99C3E7',
          300: '#66A5DB',
          400: '#3387CF',
          500: '#0E4174',
          600: '#0C375F',
          700: '#092D4A',
          800: '#072335',
          900: '#041920',
        },
        // Màu bổ sung
        accent: '#FF7F32',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
        info: '#17A2B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
