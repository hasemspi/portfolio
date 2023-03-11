/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        primary: "#570DF8",      
        secondary: "#F000B8",   
        accent: "#37CDBE",  
        neutral: "#3D4451",
        info: "#3ABFF8",   
        success: "#36D399",     
        warning: "#FBBD23",      
        error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui","tw-elements/dist/plugin")],
  
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },


}
