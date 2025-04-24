// .eslintrc.js
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // only if using TypeScript
    plugins: ['prettier'],
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:prettier/recommended'
    ],
    rules: {
        // Custom ESLint rules
        'prettier/prettier': ['error', { singleQuote: true, semi: true }],
        'react/react-in-jsx-scope': 'off', // Next.js handles this
        // Add any custom rules here
    },
};
