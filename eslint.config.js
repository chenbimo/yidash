import globals from 'globals';
import pluginJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
    recommendedConfig: pluginJs.configs.recommended
});

const jsRules = {
    'no-prototype-builtins': 'off',
    'max-len': 'off'
};

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{mjs,cjs,js}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            ...jsRules
        },
        st
    },
    ...compat.extends('plugin:prettier/recommended')
];
