const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    
    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#682861",
            
   "secondary": "#B8E481",
            
   "accent": "#e8e804",
            
   "neutral": "#1e1e2a",
            
   "base-100": "#ffffff",
            
   "info": "#4173c8",
            
   "success": "#5be6c6",
            
   "warning": "#ca9907",
            
   "error": "#fa6b98",
            },
          },
        ],
      },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
