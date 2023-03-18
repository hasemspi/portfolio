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
        dark: {
          
          "primary": "#be185d",
                   
          "secondary": "#3a92ad",
                   
          "accent": "#81ef6e",
                   
          "neutral": "#1B1523",
                   
          "base-100": "#1c1917",
                   
          "info": "#A8BBF0",
                   
          "success": "#1DD774",
                   
          "warning": "#DE8417",
                   
          "error": "#F96789",
         },
         light: {
                   
          "primary": "#570DF8",
                   
          "secondary": "#F000B8",
                   
          "accent": "#37CDBE",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
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
