import type { TSESLint } from "@typescript-eslint/utils"
import jsxA11y from "eslint-plugin-jsx-a11y"
import { sharedFiles } from "./shared"

export const jsxA11yConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/jsx-a11y",
  files: sharedFiles,
  plugins: {
    "jsx-a11y": jsxA11y,
  },
  rules: {
    ...jsxA11y.configs.recommended.rules,
  },
}
