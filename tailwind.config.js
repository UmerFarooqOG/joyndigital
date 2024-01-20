/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Montserrat: ['Montserrat', "sans-seri"],
        Noto: ['Noto Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        '3f': 'repeat(3, 1fr)',
        '2f': 'repeat(2,1fr)',
        '1f': 'repeat(1,1fr)',
      },
      screens: {
        'xsm': '462px',

        'mdd': '862px',
        'xll': '1362px',
        'ssm': '310px',
      },
    },
  },
  plugins: [],
}

