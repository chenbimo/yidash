import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    //
    {
        //
        files: ['**/*.{mjs,cjs,js}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                document: 'readonly'
            }
        },
        rules: {
            'no-prototype-builtins': 'off',
            'max-len': 'off',
            'linebreak-style': ['error', 'unix']
        }
    },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended
];
