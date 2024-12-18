//  @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  // corePlugins:{
  //   preflight:false,
  // },
  // important:'#_next',
  // plugins:[

  // ]
  theme: {
    extend: {
      colors:{
        green:{
          500:"#10B981",
        },
        primary: { 
                    50: '#EBF2EB',
                    75: '#DDEADE',
                    100: '#F0FFD9', 
                    300: '#B8FF48',
                    400: '#D8FF9A',
                    500: '#6BA50F', 
                    600: '#708C68', 
                    700: '#B8FF48'
                  },
                  gray: {
                              400: '#909090',
                              500: '#575757',
                              600: '#2A2A2A',
                              700: '#232323'
                            },
                            customBlue: {
                              light: '#3AB7FF',
                              DEFAULT: '#1D4ED8', 
                              dark: '#1E3A8A',
                            },
        customGreen:{
          light:'#BBCF8D',
          DEFAULT:'#10B981',
          dark:'#047857'
        },
        borderWidth:{
          '0.5':'0.5px',
        },
        fontFamily: {
                  sans: ['var(--font-manrope)', 'sans-serif'], // Apply Manrope as default sans-serif font
                  garamond: ['var(--font-ebgaramond)', 'serif'],
                }
      },
            },
  },
  plugins: [],
};
// const config = {
//   content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
//   corePlugins: {
//     preflight: false
//   },
//   important: '#__next',
//   plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin')],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#EBF2EB',
//           75: '#DDEADE',
//           100: '#F0FFD9', 
//           300: '#B8FF48',
//           400: '#D8FF9A',
//           500: '#6BA50F', 
//           600: '#708C68', 
//           700: '#B8FF48'
//         },
//         gray: {
//           400: '#909090',
//           500: '#575757',
//           600: '#2A2A2A',
//           700: '#232323'
//         },
//         customBlue: {
//           light: '#3AB7FF',
//           DEFAULT: '#1D4ED8', 
//           dark: '#1E3A8A',
//         },
//         customGreen: {
//           light: '#A7F3D0',
//           DEFAULT: '#10B981',
//           dark: '#047857',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-manrope)', 'sans-serif'], // Apply Manrope as default sans-serif font
//         garamond: ['var(--font-ebgaramond)', 'serif'],
//       }
//     },
//   }
// }

// export default config