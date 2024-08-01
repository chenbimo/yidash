import globals from 'globals';
import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    {
        //
        languageOptions: {
            //
            globals: { ...globals.browser, ...globals.node }
        }
    },
    jsdoc.configs['flat/recommended'],
    pluginJs.configs.recommended,
    {
        files: ['**/*.js'],
        plugins: {
            jsdoc
        },
        rules: {
            'jsdoc/require-alias': 'warn'
        }
    }
];
