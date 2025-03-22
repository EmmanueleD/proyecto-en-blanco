/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5964',
          50: '#f0f7f8',
          100: '#d9eaec',
          200: '#b4d5db',
          300: '#8ebfc8',
          400: '#69aab6',
          500: '#1a5964',
          600: '#174e58',
          700: '#14434c',
          800: '#113840',
          900: '#0e2d34',
        },
        secondary: {
          DEFAULT: '#ffffaf',
          50: '#ffffe6',
          100: '#ffffcc',
          200: '#ffffb3',
          300: '#ffffaf',
          400: '#ffff8c',
          500: '#ffff69',
          600: '#ffff46',
          700: '#ffff23',
          800: '#ffff00',
          900: '#e6e600',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
