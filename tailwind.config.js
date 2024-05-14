/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCyan: "hsl(176, 68%, 64%)",
        primaryBlue: "hsl(198, 60%, 50%)",
        primaryLightRed: "hsl(0, 100%, 63%)",
        neutralDarkBlue1: "hsl(217, 28%, 15%)",
        neutralDarkBlue2: "hsl(218, 28%, 13%)",
        neutralDarkBlue3: "hsl(216, 53%, 9%)",
        neutralDarkBlue4: "hsl(219, 30%, 18%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Raleway: ["Raleway", "Sans-Serif"],
        OpenSans: ["Open Sans", "Sans-Serif"],
      },
      backgroundImage:{
        hero_Desktop: 'url("/bg-curvy-desktop.svg")',
        hero_mobile: 'url("/bg-curvy-mobile.svg")'
      }
    },
  },
  plugins: [],
};
