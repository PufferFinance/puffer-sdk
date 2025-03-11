import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['node_modules/', 'dist/', 'docs/.docusaurus', 'docs/build'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-duplicate-imports': 'error',
    },
  },
];
