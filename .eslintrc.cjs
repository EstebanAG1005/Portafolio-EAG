module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  "ignorePatterns": ["*.css", "**/vendor/*.css"],
  rules: {
    "react/jsx-filename-extension": [0],
    "max-len": ["error", {"code": 30000}],
    "import/extensions":[0],
    'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$'] }] 
  },
};
