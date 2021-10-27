module.exports = {
	env: {
		browser: true,
	},
	extends: [
		"@batterii/eslint-config-vurvey/base",
		"plugin:react/recommended",
	],
	overrides: [{
		extends: "./test.js",
		files: ["*.test.ts", "*.test.tsx"],
	}],
	plugins: [
		"react",
		"react-hooks",
	],
	rules: {
		"@typescript-eslint/no-extra-parens": "off",
		"multiline-ternary": ["error", "always-multiline"],
		"no-nested-ternary": "off",
		"react-hooks/rules-of-hooks": "error",
		"react/boolean-prop-naming": "error",
	},
	settings: {
		react: {version: "detect"},
	},
};
