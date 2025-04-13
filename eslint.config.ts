import type { TSESLint } from "@typescript-eslint/utils"
import { fixupPluginRules } from "@eslint/compat"
import next from "@next/eslint-plugin-next"
import prettierConfig from "eslint-config-prettier"
import globals from "globals"
import { dirname, resolve } from "path"
import tseslint from "typescript-eslint"
import { fileURLToPath } from "url"
import {
  baseConfig,
  importConfigArray,
  jsxA11yConfig,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  sharedFiles,
  typescriptConfig,
} from "./.eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const project = resolve(__dirname, "./tsconfig.json")

const ignoreConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/ignore",
  ignores: ["**/.next/**", "**/node_modules/**", "**/pnpm-lock.yaml"],
}

const languageOptionConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/language-options",
  files: sharedFiles,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 10,
      project,
      sourceType: "module",
    },
  },
}

export const nextConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/next",
  files: sharedFiles,
  plugins: {
    "@next/next": fixupPluginRules(next),
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs["core-web-vitals"].rules,
  },
}

const eslintConfig = tseslint.config(
  languageOptionConfig,
  ignoreConfig,
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  nextConfig,
  jsxA11yConfig,
  prettierConfig,
)

export default eslintConfig
