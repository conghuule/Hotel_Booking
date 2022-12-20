/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: {
          0: '#CCF9FF',
          50: '#7CE8FF',
          100: '#55D0FF',
          150: '#00ACDF',
          200: '#0080BF',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
