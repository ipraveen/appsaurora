module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'cypress/globals': true,
    },
    globals: {
        navigation: "readonly",
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'cypress'],
    rules: {
        'react/prop-types': 0,
    },
};
