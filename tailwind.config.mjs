/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellowBackground:"#FFF500",
        yellowSecondary:'#FEB900',
        customPink: '#FF00F5',
        green: '#1AFF5A',
        yel: '#E5FE40 ',
        red: '#FF0000',
        pu: '#7B08FD',
        puu:'#6E07E3',
        ro:'#EA49EA',
        he:'#F26622',
        pc:'#FD0A62',
        pin:'#FF004D',
        bl:'#F34EEE',
      },
      fontFamily:{
        myFont:['my-font-bold'],
        myFontNormal:['my-font-normal'],
        myFontGroBold:['my-font-grobold'],
        myFontMountain:['my-font-hallowine']
      },
      keyframes: {
        diagonalShake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(3px, -3px)' },
          '50%': { transform: 'translate(-3px, 0)' },
          '75%': { transform: 'translate(3px, 3px)' },
        },
      },
      animation: {
        'diagonal-shake': 'diagonalShake 1.5s infinite',
      },
      screens: {
        'me': '320px',
        'mi': '361px',
        'xs': '390px',
        'pro':'1023px',
        'lg': '1025px',
        'pxl':'1300px',
        'p2xl':'1400px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
