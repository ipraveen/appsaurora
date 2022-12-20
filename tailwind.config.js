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
                "theme-900": '#126171',
                "theme-800": '#7eab9a',
                "theme-400": "#C5E0D6",
                "theme-200": "#c5e0d6c7",
                "theme-100": "#c5e0d687",
                "theme-blue": "#4b9dea",
                selection: 'bg-orange-100'
            },
        },
    },
    plugins: [],
};
