/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fafafa-bg': '#FAFAFA',
        'f1f1f1-bg': '#F1F1F1',
        'custom-gray': '#262626',
        '02274F-bg': '#02274F',
        'fdfdfd-bg': '#FDFDFD',
        'f4f4f4-bg': '#F4F4F4',

      },
      width: {
        '438px': '438px',
        '295px': '295px',
        '385.88px': '385.88px',
        '272px': '272px',
        '356px': '356px',

      },
      height: {
        '534px': '534px',
        '116px': '116px',
        '288px': '288px',
        '54px': '54px',
        '44px': '44px',
        '315px': '315px',

      },
      borderRadius: {
        '18px': '18px',
        '9px': '9px',
      },
      inset: {
        'top-161px': '161px',
        'left-501px': '501px',
        '55px': '55px',
        '72px': '72px',
        '205.88px': '205.88px',
        '25.88px': '25.88px',
      }
    },
  },
  plugins: [],
}

