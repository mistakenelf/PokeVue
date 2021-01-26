module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],
  plugins: ['import'],
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
