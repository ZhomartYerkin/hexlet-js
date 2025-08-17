import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
export default defineConfig([  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,   // <-- здесь появятся process, __dirname, console и т.д.
      },
    },
  },

  // При необходимости можно исключить каталоги:
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },
])
