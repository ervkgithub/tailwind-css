const plugin = require('tailwindcss/plugin')

module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.{html,js}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    // screens:{
    //   sm:'400px',
    //   md:'700px',
    //   lg:'900px',
    //   xl:'1400px',
    // },

    // colors:{
    //   indigo:{
    //     light:'#b3bcf5',
    //     DEFAULT:'5c6ac4',
    //     dark:'202e78'
    //   }
    // },

    // spacing:{
    //   1:'0.35rem',
    //   2:'0.75rem'
    // },

    extend: {
      // screens:{
      //     '3xl':'1600px',
      //   },
      //  colors:{
      //   'regal-blue':'243c5a'
      //  },
      //  spacing:{
      //   '13':'3.25rem',
      //   '15':'3.75rem'
      //  } 
    },
  },
  variants: {
    extend: {
      // backgroundColor:['active'],
      // textColor:['visited']
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const newUtilities = {
        '.scale-1':{
          transform:'scale(1)'
        },
        '.rotate-1':{
          transform:'rotate(1)'
        }
      }
      addUtilities(newUtilities, {
        variants:['responsive', 'hover']
      })
    }),
    plugin(function({addComponents}){
      const button = {
        '.btn':{
          padding:'10rem 20rem',
          fontWeight:'500'
        },
        '.btn-blue':{
          color:'#fff',
          '&:hover':{
            color:'#000'
          }
        }
      }
      addComponents(button,{
        variants:['hover']
      })
    }),
    plugin(function({addBase, theme}){
      const heading = {
        'h1':{ fontSize:theme('spacing.6')},
        'h2':{ fontSize:theme('spacing.8')},
        'h3':{ fontSize:theme('spacing.9')},
      }
      addBase(heading,{
        variants:['hover']
      })
    })
  ],
  presets:[
    require('./preset/tailwind.preset');
  ]
}
