module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    __DEV__: true,
    Component: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'react', 'prettier', 'react-hooks'],
  rules: {
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prefer-stateless-function': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore',
      },
    ],
    'react/forbid-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
