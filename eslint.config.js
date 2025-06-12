import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ISKLJUČUJEMO ovo pravilo jer u React 17+ nije potrebno importovati React
    },
    settings: {
      react: {
        version: "detect", // automatsko prepoznavanje React verzije
      },
    },
  },

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.test.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
  },
];
