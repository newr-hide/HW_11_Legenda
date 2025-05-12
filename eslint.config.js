// eslint.config.js
export default {
  languageOptions: {
      globals: {
          window: 'readonly',
          document: 'readonly',
          process: 'readonly',
          module: 'readonly',
          require: 'readonly'
      },
      ecmaVersion: 2022,
      sourceType: 'module'
  },
  rules: {
      semi: 'error',
      'no-unused-vars': 'off'
  }
};
