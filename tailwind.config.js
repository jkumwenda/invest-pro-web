module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        turquoise: {  
          DEFAULT: '#5EBFE6',  
          '50': '#FDFEFF',  
          '100': '#EBF7FC',  
          '200': '#C8E9F6',  
          '300': '#A5DBF1',  
          '400': '#81CDEB',  
          '500': '#5EBFE6',  
          '600': '#2DACDE',  
          '700': '#1C8BB7',  
          '800': '#156687',  
          '900': '#0D4156'
        },
        'rolling-stone': {
          DEFAULT: '#767B7F',
          '50': '#D5D6D8',
          '100': '#CACCCE',
          '200': '#B5B8BA',
          '300': '#A0A4A7',
          '400': '#8B8F93',
          '500': '#767B7F',
          '600': '#5B5F62',
          '700': '#404345',
          '800': '#252728',
          '900': '#0A0A0B'
        },
        'tory-blue': {  
          DEFAULT: '#115890',  
          '50': '#6BB4EE',  
          '100': '#59ABEB',  
          '200': '#3498E7',  
          '300': '#1A85D9',  
          '400': '#156EB4',  
          '500': '#115890',  
          '600': '#0B395E',  
          '700': '#051B2C',  
          '800': '#000000',  
          '900': '#000000'
        },  
        'seashell': {
          DEFAULT: '#F1F1F1',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F1F1F1',
          '600': '#D5D5D5',
          '700': '#B9B9B9',
          '800': '#9D9D9D',
          '900': '#818181'
        }, 
        'shuttle-gray': {
          DEFAULT: '#5E6C78',
          '50': '#C0C7CE',
          '100': '#B5BDC5',
          '200': '#9EA9B3',
          '300': '#8795A1',
          '400': '#70818F',
          '500': '#5E6C78',
          '600': '#455059',
          '700': '#2D3339',
          '800': '#14171A',
          '900': '#000000'
        },                      
      },
     
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }, 
      fontFamily: {
      lato: ['Lato'],
      nunito:['Nunito']
    }  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}