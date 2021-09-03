module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login': "url('https://www.giftmugs.in/wp-content/uploads/2015/10/about-bg-gift.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
