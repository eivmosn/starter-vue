import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    rules: {
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration:not([const=true])',
          message: 'Use const enums instead',
        },
      ],
      'ts/no-unsafe-function-type': 'off',
    },
    gitignore: true,
  },
)
