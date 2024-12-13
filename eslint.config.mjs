import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}']
  },
  {
    ignores: [
      '**/.eslintrc.js',
      '**/.prettierrc.js',
      '**/.lintstagedrc.js',
      '**/webpack.config.*.js',
      '**/swagger-codegen.js',
      '**/automatic',
      '**/build',
      '**/target'
    ]
  },
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'jsx-a11y': jsxA11Y
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 2019,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      'import/resolver': {
        webpack: {
          config: 'webpack.config.js'
        }
      },

      react: {
        pragma: 'React',
        version: 'detect'
      }
    },

    rules: {
      eqeqeq: 2,
      semi: ['error', 'never'],

      camelcase: [
        2,
        {
          ignoreDestructuring: true,
          ignoreImports: true
        }
      ],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true
        }
      ],

      'comma-dangle': ['error', 'never'],

      'no-console': [
        'error',
        {
          allow: ['warn', 'error']
        }
      ],

      'no-var-requires': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      'jsx-quotes': ['error', 'prefer-single']
    }
  }
]
