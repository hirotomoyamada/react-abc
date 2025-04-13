import type { TSESLint } from "@typescript-eslint/utils"
import { fixupPluginRules } from "@eslint/compat"
import reactHooks from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/react-hooks",
  files: sharedFiles,
  plugins: { "react-hooks": fixupPluginRules(reactHooks) },
  rules: {
    ...reactHooks.configs.recommended.rules,

    "react-hooks/exhaustive-deps": "error",
  },
}
