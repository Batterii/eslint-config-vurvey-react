# Oxlint

Oxlint is a new rust based linter. It is dramatically faster than eslint, but still in active development. It may be useful for quick linting while developing, though eslint should be used for full coverage.

## Usage

1. Create a .oxlintrc.json
2. Extend the .oxlintrc.json from your repo

```json
{
	"extends": [
		"node_modules/@batterii/eslint-config-vurvey/oxlint/.oxlintrc.json"
	],
	"rules": {
		"additional": "rules"
	}
}
```

### Unsupported Rules

- unsupported rule, but in development: constructor-super
- unsupported rule, but in development: getter-return
- unsupported rule: no-dupe-args
- unsupported rule, but in development: no-misleading-character-class
- unsupported rule: no-octal
- unsupported rule, but in development: no-undef
- unsupported rule, but in development: no-unreachable
- unsupported rule: prefer-const
- unsupported rule: @typescript-eslint/explicit-member-accessibility
- unsupported rule: @typescript-eslint/no-shadow
- unsupported rule: @typescript-eslint/no-unnecessary-qualifier
- unsupported rule: @typescript-eslint/no-use-before-define
- unsupported rule: @typescript-eslint/prefer-regexp-exec
- unsupported rule: @typescript-eslint/prefer-string-starts-ends-with
- unsupported rule: @typescript-eslint/unified-signatures
- unsupported rule: accessor-pairs
- unsupported rule: consistent-this
- unsupported rule: dot-notation
- unsupported rule: no-implicit-coercion
- unsupported rule: no-implied-eval
- unsupported rule: no-invalid-this
- unsupported rule: no-octal-escape
- unsupported rule: no-sequences
- unsupported rule: no-undef-init
- unsupported rule: no-underscore-dangle
- unsupported rule: no-unmodified-loop-condition
- unsupported rule: object-shorthand
- unsupported rule: prefer-arrow-callback
- unsupported rule: strict
- unsupported rule: max-len
- unsupported rule: no-restricted-properties
- unsupported rule: react/display-name
- unsupported rule: react/jsx-uses-react
- unsupported rule: react/jsx-uses-vars
- unsupported rule: react/no-deprecated
- unsupported rule: react/prop-types
- unsupported rule, but in development: react/require-render-return
- unsupported rule: react-hooks/static-components
- unsupported rule: react-hooks/use-memo
- unsupported rule: react-hooks/component-hook-factories
- unsupported rule: react-hooks/preserve-manual-memoization
- unsupported rule: react-hooks/incompatible-library
- unsupported rule: react-hooks/immutability
- unsupported rule: react-hooks/globals
- unsupported rule: react-hooks/refs
- unsupported rule: react-hooks/set-state-in-effect
- unsupported rule: react-hooks/error-boundaries
- unsupported rule: react-hooks/purity
- unsupported rule: react-hooks/set-state-in-render
- unsupported rule: react-hooks/- unsupported-syntax
- unsupported rule: react-hooks/config
- unsupported rule: react-hooks/gating
- unsupported rule: react-refresh/only-export-components
- unsupported rule: multiline-ternary
- unsupported rule: react/boolean-prop-naming
- unsupported rule: @typescript-eslint/naming-convention
