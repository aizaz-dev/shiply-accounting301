/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6DD400', 
        textColor:'#019818',
        pText:'#646464',
        greyText:'#7A7A7A',
        greenPrimary:'#16A34A',
     
      },
      screens: {
        'tab': '850px', 
        'laptop': '960px',
      },
      padding: {
        'desktop': '80px',   
        'tab': '40px',
        'mobile': '28px',  
      },
    },
  },
  plugins: [],
};
