module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'semi': 'off',
    'no-var': 'off',
    'comma-spacing': 'off',
    'require-await': 'off',
    'dot-notation': 'off',
    'camelcase': 'off',
    'no-useless-escape': 'off'
  }
}
