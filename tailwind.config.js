/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '280': '0px',
      '360': '360px',
      '460': '460px',
      '560': '560px',
      '660': '660px',
      '760': '760px',
      '860': '860px',
      '960': '960px', 
      '1000': '1000px',
      '1080': '1080px'
    }
  },
  plugins: [],
}
