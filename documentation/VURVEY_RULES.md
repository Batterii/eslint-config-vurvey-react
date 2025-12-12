# ESLint Rules Reference

This document explains the rules explicitly declared in the ESLint configuration.

---

## ESLint Core Rules

### `multiline-ternary`

**Setting:** `["error", "always-multiline"]`

Enforces newlines between operands of ternary expressions when the expression spans multiple lines. With `always-multiline`, if the ternary is on a single line it's fine, but if any part is on a new line, all parts must be on separate lines.

[📖 Rule Documentation](https://eslint.org/docs/latest/rules/multiline-ternary)

---

### `no-nested-ternary`

**Setting:** `"off"`

This rule normally disallows nested ternary expressions. It's turned off here, meaning nested ternaries are permitted.

[📖 Rule Documentation](https://eslint.org/docs/latest/rules/no-nested-ternary)

---

## React Hooks Rules

### `react-hooks/rules-of-hooks`

**Setting:** `"error"`

Enforces the Rules of Hooks—that hooks are only called at the top level of a function component or custom hook, and not inside loops, conditions, or nested functions. This ensures hooks are called in the same order on every render.

[📖 Rule Documentation](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

---

## React Rules

### `react/boolean-prop-naming`

**Setting:** `"error"`

Enforces consistent naming of boolean props. By default, boolean props should be prefixed with `is`, `has`, or similar prefixes (e.g., `isEnabled`, `hasError`) to clearly indicate they're boolean values.

[📖 Rule Documentation](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)
