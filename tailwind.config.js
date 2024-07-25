module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA5C3B',

        secondary: '#EEC5C7',

        gray: {
          300: '#D0D5DD',
          600: '#475467',
          700: '#344054',
          900: '#101828',
          light: '#6B6B6B'
        },
        neutral: {
          100: "#EEF2F6",
          400: "#9AA4B2",
        },

        accent: {
          'textGray': '#5A5A5A',
          'linkLearMore': '#0D88D8',
          'textNav': '#8C8C8C',
          'buttonHeart': '#F5EEEC',
          'borderFollow': '#CDD5DF ',
        },

      },


    },
    backgroundImage: {
      'backgroundPage': 'linear-gradient(180deg, #FFF 0%, #EADBD7 100%)',

    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
  },

  plugins: [],
}
