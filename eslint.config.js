import globals from "globals";
   import pluginJs from "@eslint/js";
   import eslintPluginImport from "eslint-plugin-import";  

   export default [
     {
       ignores: ['**/node_modules/**/*'],      },
     {
       languageOptions: {
         globals: {
           ...globals.browser,
           ...globals.node,
           jest: true,
         },
         sourceType: 'module',
       },
       plugins: {
         import: eslintPluginImport, 
       },
       rules: {
         ...pluginJs.configs.recommended.rules, 
         'no-console': 'off', 
       },
     },
   ];