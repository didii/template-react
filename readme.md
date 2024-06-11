# Vite + React + TypeScript + ESLint + Prettier

Some template I built up, this includes:

* Vite: The build tool
* React: The FE framework
* TypeScript: The main programming language
* ESLint: linter to help writing consistent code
* Prettier: formatter to speed up development and prevent annoying merge conflicts

## Tooling

I recommend VSCode with the following extensions in order of importance:

* [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint): It is set as the default formatter for TS and TSX files and runs first prettier, then eslint.
  * Note: if the extension crashes, reload the window to restart it. This can happen if the config is wrong.
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Show ESLint errors
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Simple and effective spell checker
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): Show errors and warnings inline

## ESLint

ESlint has a big configuration file included.
The main goal of this is to have it behave as a helpful tool rather than an annoyance.
Most errors are set to warnings and everything that TS already tells us, is turned off.

Included plugins:

* React: adds some helpful warnings here and there like forgetting a `key` attribute inside a `map`
* React-hooks: probably the most important one to make sure your dependency array is up-to-date. Never ignore that rule unless you know what you are doing.
* Import: Checks import order of the imports and auto-fixes them.

Have fun!
