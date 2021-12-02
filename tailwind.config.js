module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#0B0D17',
      'trans': 'rgba(0,72,255,0.04)',
      'white': '#ffffff'
    }),
    extend: {
      colors: {
        'white': '#ffffff',
        'deepBlue': '#0B0D17',
      },
      backgroundImage: theme => ({
        'homeDesk': "url('/src/assets/images/background-home-desktop.jpg')",
        'homeTab': "url('/src/assets/images/background-home-tablet.jpg')",
        'homeMob': "url('/src/assets/images/background-home-mobile.jpg')",
        'destDesk': "url('/src/assets/images/background-destination-desktop.jpg')",
        'destTab': "url('/src/assets/images/background-destination-tablet.jpg')",
        'destMob': "url('/src/assets/images/background-destination-mobile.jpg')",
      }),
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'belle': ['Bellefair', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
