/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      ["light", "dark", "cupcake"],
      {
        mytheme: {
        
"primary": "#faff7f",
        
"secondary": "#ff829d",
        
"accent": "#e85a87",
        
"neutral": "#2b2c36",
        
"base-100": "#4b4b4e",
        
"info": "#397bf3",
        
"success": "#147b6a",
        
"warning": "#fbb560",
        
"error": "#ee112e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

