/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        body: '#06030D',
        heading: '#fff',
        subtext: '#f5f5fa',
        text: '#949495',
        secondary: '#8079fd',
      },
      backgroundImage: {
        'hero-b': "url('/assets/h-bg.png')",
      },
    }
  },
  plugins: [],
}
