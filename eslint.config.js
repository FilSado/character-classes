import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, 
        jest: true,       
      },
      sourceType: 'module', 
    },
  },
  pluginJs.configs.recommended,
  {
    extends: "airbnb-base",
    rules: { },
  },
];