import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
                   
          "success": "#36D399",
                   
          "warning": "#ffa800",
                   
          "error": "#dc2c2b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
