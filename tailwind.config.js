module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily:{
      gotham:['Gotham Pro','sans-serif'],
    },
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'large-screen': '1590px',
    },
    color:{
      white:'#fff',
      orange:{
        100:'#FEEDD3',
        200:'#FE7865',
        300:'#E6604D',
        400:'#F55C46',
      },
      blue:{
        100:'#F5F8FC',
        200:'#EFEDFE',
        300:'#5BD5E6',
      },
      green:{
        100:'#FFFBF8',
        200:'#E8FBF7',
        300:'#5BE6B0',
      },
      gray:{
        100:'#ECECEE',
        200:'#DFDAFE',
        300:'#838388',
      },
      pink:{
        100:'#FEDAE8',
      },
      black:{
        100:'#2C2E3F',
        200:'#1441517',
        300:'#2C2E3F',
        400:'#0a0b0f',
      },
      yellow:{
        100:'#F55C46',
      },
    }
    ,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
