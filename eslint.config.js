const globals = require('globals');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.node } },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        ignores: ['dist/', 'coverage/', 'eslint.config.js']
    }
];
