import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import batteriiConfig from "@batterii/eslint-config-vurvey";
import globals from "globals";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export { batteriiConfig };

export default defineConfig([
	{
		extends: [
			batteriiConfig,
			react.configs.flat.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			globals: globals.browser,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			//JS Rules
			"no-nested-ternary": "off",
			//React Rules
			"react-hooks/rules-of-hooks": "error",
			"react/boolean-prop-naming": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "warn", //propTypes have been removed in React 19, setting to warn to progressively move towards upgrading, see: https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-react-apis
			//TS Rules
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-use-before-define": [
				"error",
				{
					functions: false,
					variables: false, //allows variables assigned to functions to be used 'before' their declaration
				},
			],
			"@typescript-eslint/naming-convention": "off",
		},
	},
	{
		files: ["**/*.tsx"],
		rules: {
			"@typescript-eslint/no-misused-promises": "off",
		},
	},
	eslintPluginPrettierRecommended,
]);
