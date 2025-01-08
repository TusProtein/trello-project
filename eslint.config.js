// // May 13 2023
// export default {
//     env: { browser: true, es2020: true, node: true },
//     extends: [
//         'eslint:recommended',
//         'plugin:react/recommended',
//         'plugin:react/jsx-runtime',
//         'plugin:react-hooks/recommended',
//     ],
//     parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//     settings: { react: { version: '18.2' } },
//     plugins: ['react', 'react-hooks', 'react-refresh'],
//     rules: {
//         'react-refresh/only-export-components': 'warn',
//         'react-hooks/rules-of-hooks': 'error',
//         'react-hooks/exhaustive-deps': 'warn',
//         'react/prop-types': 0,
//         'react/display-name': 0,

//         'no-console': 1,
//         'no-lonely-if': 1,
//         'no-unused-vars': 1,
//         'no-trailing-spaces': 1,
//         'no-multi-spaces': 1,
//         'no-multiple-empty-lines': 1,
//         'space-before-blocks': ['error', 'always'],
//         'object-curly-spacing': [1, 'always'],
//         indent: ['warn', 2],
//         semi: [1, 'never'],
//         quotes: ['error', 'single'],
//         'array-bracket-spacing': 1,
//         'linebreak-style': 0,
//         'no-unexpected-multiline': 'warn',
//         'keyword-spacing': 1,
//         'comma-dangle': 1,
//         'comma-spacing': 1,
//         'arrow-spacing': 1,
//     },
// };

import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default defineConfig([
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: true,
                node: true,
                es2020: true,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        rules: {
            'react-refresh/only-export-components': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': 0,
            'react/display-name': 0,

            'no-console': 1,
            'no-lonely-if': 1,
            'no-unused-vars': 1,
            'no-trailing-spaces': 1,
            'no-multi-spaces': 1,
            'no-multiple-empty-lines': 1,
            'space-before-blocks': ['error', 'always'],
            'object-curly-spacing': [1, 'always'],
            indent: ['warn', 2],
            semi: [1, 'never'],
            quotes: ['error', 'single'],
            'array-bracket-spacing': 1,
            'linebreak-style': 0,
            'no-unexpected-multiline': 'warn',
            'keyword-spacing': 1,
            'comma-dangle': 1,
            'comma-spacing': 1,
            'arrow-spacing': 1,
        },
    },
    {
        // Cấu hình của "eslint:recommended"
        rules: {
            'no-unused-vars': 'warn',
            'no-trailing-spaces': 'warn',
            'no-multi-spaces': 'warn',
        },
    },
    {
        // Cấu hình của "plugin:react/recommended"
        settings: {
            react: {
                version: '18.2',
            },
        },
        rules: {
            'react/prop-types': 'off',
            'react/display-name': 'off',
        },
    },
    {
        // Cấu hình của "plugin:react-hooks/recommended"
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
]);
