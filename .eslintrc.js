module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2020',
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:import/typescript',
  ],
  plugins: ['import', 'vue'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'newline-before-return': 'warn',
    'prefer-const': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/html-self-closing': 0,
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
