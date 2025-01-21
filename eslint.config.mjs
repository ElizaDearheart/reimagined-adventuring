import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,

  {
    rules: {
      "prefer-const": "warn",
      "vars-on-top": "warn",
    },
  },
  {
    ignores: [".config/*", "webpack.config.js"],
  },
];
