import type { TSESLint } from "@typescript-eslint/utils"
import { fixupPluginRules } from "@eslint/compat"
import { flatConfigs } from "eslint-plugin-import"
import unusedImports from "eslint-plugin-unused-imports"
import { sharedFiles } from "./shared"

export const importConfigArray: TSESLint.FlatConfig.Config[] = [
  {
    name: "eslint/import",
    files: sharedFiles,
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins.import),
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": sharedFiles.map(
          (file) => "." + file.split(".").pop(),
        ),
      },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    name: "eslint/import/unused",
    files: sharedFiles,
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
]
