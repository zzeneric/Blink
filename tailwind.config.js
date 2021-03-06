module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '4/10': '40%',
      },
      height: {
        '0.7screen':'70vh',
        '1/7':'14.29%',
        '6/7':'85.71%',
      },
      animate: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      scale: {
        '275': '2.75',
        '365':'3.65',
      },
      translate: {
        '150': '150%',
        'xtip': "128%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
