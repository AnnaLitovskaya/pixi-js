module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: ['react'],
  rules: {
    'jest/no-conditional-expect': ['off'],
    'array-callback-return': ['off'],
  },
};
