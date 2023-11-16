/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text_color:'#5A4978',
        sub_text_color:'#989EA8',
        sub_text_color_2: '#ECE8E1',
        main_color:'#00008A',
        highligth:'#F29F05',
        line_color:'#C2C6CE',
        box_color_1:'#4A4AB4',
        box_color_2:'#2E64B5',
        
      },
      height:{
        xxl: '34rem'
      },
      border:{
        xs : '5px'
      },      
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

