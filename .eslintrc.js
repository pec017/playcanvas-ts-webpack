module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
    },
    plugins: ['@typescript-eslint'],
    settings: {
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
    },
    globals: {
      less: true,
    },
    ignorePatterns: ['*.js', '*.d.ts'],
  };