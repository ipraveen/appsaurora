/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './gatsby-browser.jsx',
        './src/pages/*.{js,jsx,ts,tsx}',
        './src/apps/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1200px', //'1440px',
        },
        fontFamily: {
            theme: ['"Baloo 2"', 'cursive', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                theme: 'border-stone-300',
            },
        },
    },
    plugins: [],
};
