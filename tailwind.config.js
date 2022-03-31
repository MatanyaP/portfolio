module.exports = {
  content: [
    "pages/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in-out 2s alternate",
        wiggle: 'wiggle 1s ease-in-out 2s',
        headShake: 'headShake 1s ease-in-out 2s',
        spin: 'spin 1s ease-in-out 2s',
        grow: 'grow 1s ease-in-out 2s',
        chaos: 'chaos 1s ease-in-out 2s',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        headShake: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
        grow: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        chaos: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.5)' },
          '75%': { transform: 'scale(0.5)' },
        },
        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(720deg)' },
          '75%': { transform: 'rotate(1080deg)' },
        },


      },
    },
  },
  plugins: [],
}
