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
                'theme-900': '#0f172a',
                'theme-800': '#1e293b',
                'theme-700': '#334155',
                'theme-600': '#475569',
                'theme-500': '#64748b',
                'theme-400': '#C5E0D6',
                'theme-300': '#cbd5e1',
                'theme-200': '#e2e8f0',
                'theme-100': '#f1f5f9',
                'theme-50': '#f8fafc',
                selection: 'bg-orange-100',
            },
        },
    },
    plugins: [],
};
