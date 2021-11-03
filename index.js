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
		"@typescript-eslint/naming-convention": [
			"error",
			/* eslint-disable sort-keys */
			{
				selector: "default",
				format: ["camelCase", "PascalCase"],
			},
			{
				selector: "parameter",
				format: ["camelCase", "PascalCase"],
				leadingUnderscore: "allow",
			},
			{
				selector: "memberLike",
				modifiers: ["private"],
				format: ["camelCase"],
				leadingUnderscore: "require",
			},
			{
				selector: "memberLike",
				modifiers: ["protected"],
				format: ["camelCase"],
				leadingUnderscore: "require",
			},
			{
				selector: ["typeLike", "enumMember"],
				format: ["PascalCase"],
			},
			{
				selector: "typeParameter",
				format: ["PascalCase"],
			},
			{
				selector: "const",
				format: ["UPPER_CASE"],
			},
			/* eslint-enable sort-keys */
		],
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
