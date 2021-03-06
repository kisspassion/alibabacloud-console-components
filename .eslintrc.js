module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['@alicloud/eslint-config-console-components/ts'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json',
      },
      rules: {
        'no-underscore-dangle': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-plusplus': 'off',
        'react/static-property-placement': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      extends: ['@alicloud/eslint-config-console-components/js'],
    },
  ],
}
