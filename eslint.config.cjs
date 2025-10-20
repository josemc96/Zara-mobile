// eslint.config.cjs
const js = require("@eslint/js")
const tseslint = require("typescript-eslint")
const globals = require("globals")

module.exports = [
  { ignores: ["dist/**", "build/**", "node_modules/**"] },

  // 2) Reglas JS para todo
  js.configs.recommended,

  // 3) Reglas TS SOLO para .ts/.tsx
  ...tseslint.configs.recommended.map((cfg) => ({
    ...cfg,
    files: ["**/*.ts", "**/*.tsx"],
  })),

  // 4) Código de app en navegador
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2021 },
    },
    rules: {},
  },

  // 5) Archivos de configuración en Node
  {
    files: ["eslint.config.{js,cjs}", "webpack.config.{js,cjs,mjs}", "**/*.config.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: { ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]
