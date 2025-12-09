# @batterii/eslint-config-vurvey-react

Contains [ESLint][eslint] configuration for Vurvey React projects. This configuration
[extends][eslint-ext] base configurations located in [@batterii/eslint-config-vurvey][base].

This package uses ESLint's modern [flat config format][flat-config] and requires ESLint 9+.

## Usage

To use this config, first install it and its peer dependencies as dev dependencies. Then, create a
file called `eslint.config.js` at the root of the repository with the following contents:

```javascript
import config from "@batterii/eslint-config-vurvey-react";

export default config;
```

Next, create scripts in your `package.json` for running the linter:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lintf": "eslint . --fix"
	}
}
```

Running these scripts will lint all applicable files in the repo based on the configuration.

If needed on a per-project basis, you can make changes to the configuration within the
`eslint.config.js` file by extending or modifying the exported config array. As a general rule,
however, shareable configuration should be preferred to help ensure code style consistency between
different repositories.

## Configuration Structure

This package exports an ESLint flat config from `config/index.mjs`. The configuration extends:

- Base Batterii config from [@batterii/eslint-config-vurvey][base]
- React recommended rules from `eslint-plugin-react`
- React Hooks rules from `eslint-plugin-react-hooks`
- React Refresh rules from `eslint-plugin-react-refresh`

Additional React-specific rules and TypeScript naming conventions are enforced for all
`.ts` and `.tsx` files in Vurvey React projects.

## Oxlint (Optional)

This package includes [oxlint][oxlint] as an optional dependency. Oxlint is a Rust-based linter that
is dramatically faster than ESLint, though it's still in active development and doesn't support all
ESLint rules.

Oxlint can be useful for quick linting during development, but ESLint should still be used for full
rule coverage. To use oxlint:

1. Ensure the optional dependency is installed: `npm install`
2. Create a `.oxlintrc.json` file at the root of your repository:

```json
{
	"extends": [
		"node_modules/@batterii/eslint-config-vurvey-react/oxlint/.oxlintrc.json"
	]
}
```

3. Add an oxlint script to your `package.json`:

```json
{
	"scripts": {
		"oxlint": "oxlint"
	}
}
```

**Note:** See [documentation/OXLINT.md](./documentation/OXLINT.md) for details on unsupported rules.

## Proposing Changes

Linter rules like these are a team effort. All developers subject to these rules should feel free to
propose changes so that we can arrive a set of common rules that work for everyone. To do this,
simply open a pull request and give other affected devs the opportunity to discuss in comments.

For organization and tracking purposes, pull requests to this repo should focus on changing a
small number of rules at a time. This will help keep discussion focused on individual conventions
and concerns.

Note that the rules in this repo only affect our front end React repositories. In order to make
changes to common rules, see [@batterii/eslint-config-vurvey][base].

## Publishing

`npm version` and `npm publish` can be used to publish this package as normal. These should be run
in the latest `main` branch by someone with write access to the package on NPM. When doing so, a
`preversion` script will lint the repo and a `prepublishOnly` script will automatically push the
verison number commmit and tag to the GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rules changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by ESLint's `--fix` flag.

Doing this will enable developers of affected repositories to upgrade to the breaking versions and
address the new errors when they are able.

[base]: https://github.com/Batterii/eslint-config-vurvey
[eslint]: https://eslint.org/
[eslint-ext]: https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/developer-guide/shareable-configs
[flat-config]: https://eslint.org/docs/latest/use/configure/configuration-files
[oxlint]: https://oxc.rs/docs/guide/usage/linter.html
[peer-deps]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[semver]: https://semver.org/
