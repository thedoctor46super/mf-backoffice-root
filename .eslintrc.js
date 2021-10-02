module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  rules: {
    'vue/require-default-prop': 'off',
    'vue/attribute-hyphenation': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
