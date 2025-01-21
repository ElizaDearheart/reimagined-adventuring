import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

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
