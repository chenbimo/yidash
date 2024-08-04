import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    {
        files: ['**/*.{mjs,cjs,js}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    jsdoc.configs['flat/recommended'],
    {
        rules: {
            'no-prototype-builtins': 'off',
            'max-len': 'off',
            'no-unused-vars': 'off',
            'linebreak-style': ['error', 'unix'],
            'jsdoc/require-example': 1,
            'jsdoc/check-tag-names': [
                'error',
                {
                    definedTags: ['category']
                }
            ],
            'jsdoc/sort-tags': [
                'error',
                {
                    linesBetween: 1,
                    tagSequence: [
                        {
                            tags: [
                                //
                                'alias',
                                'category',
                                'params',
                                'return',
                                'returns',
                                'version',
                                'deprecated',
                                'since',
                                'author',
                                'summary',
                                'describe',
                                'todo',
                                'example',
                                '-other'
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
