module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single'],
    'vue/html-quotes': ['error', 'double'],
    "vue/max-attributes-per-line": ["error", {
        "singleline": {
          max: 4,
          allowFirstLine: true
        }
      }],
    "vue/require-prop-types": "off",
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
    "eqeqeq":"off",
    "vue/attribute-hyphenation": "off"

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
