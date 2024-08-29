/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'c':{
          'orange':{
            '200':'#FFA451'
          },
          iris:{
            '200':'#5D577E',
            '500':"#27214D"
          }
        }
      }
    },
  },
  plugins: [],
}

