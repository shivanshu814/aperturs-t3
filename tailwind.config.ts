import { type Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =   withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 6px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          
          "primary": "#132da0",
                   
          "secondary": "#e3f2ff",
                   
          "accent": "#2d68ff",
                   
          "neutral": "#f7f7fc",
                   
          "base-100": "#ffffff",
                   
          "info": "#3ABFF8",
                   
          "success": "#22c55e",
                   
          "warning": "#ffa800",
                   
          "error": "#dc2c2b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config);
