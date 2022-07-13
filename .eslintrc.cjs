module.exports = {
  root: true,
  extends: [
    '@tinkin',
    '@tinkin/eslint-config/react',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'filenames/match-regex': 'off',
  },
}
