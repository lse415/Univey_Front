/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text_color:'#5A4978',
        sub_text_color:'#989EA8',
        main_color:'#00008A',
        highligth:'#F29F05',
      },
      height:{
        xxl: '34rem'
      }
    },
  },
  plugins: [],
}

