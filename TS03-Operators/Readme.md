# TS03: TypeScript Tutorial / Operators
This folder contains companion code for my YouTube TypeScript Tutorial
Playlist: https://www.youtube.com/watch?v=23253VvVqB4&list=PLi5RQ31roh7lAUtSPZdzWZ6newdoXAyPI

Chapter 3: Operators
* Link: https://www.youtube.com/watch?v=8BoYqScxpsU
* Blog Link: https://mattvarghese-cs.blogspot.com/2022/03/ts03-operators-in-typescript.html
* GitHub: https://github.com/mattvarghese/typescript-tutorial > TS03-Operators

# Running GitHub code
Make sure to do
```
$ npm install
```
before running the code after cloning from GitHub, or doing **npm run clean**.

# Contents
* Assignment Operator
* Destructuring
* Arithmetic Operators
* Arithmetic Assignment Operators
* Increment/Decrement Operators
* Comparison Operators
* Logical Operators
* Bitwise Operators
* Comma Operator
* Spread Operator
* Conditional Operator
* Other Operators
* Operator Precedence

# Setup Commands
You don't need to do these if you're using a clone of the repository. You only need these if starting from scratch.
```
$ npm init
$ npm install --save-dev typescript @types/node
$ npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs false --noImplicitAny true --sourceMap true --strict true --noImplicitThis true --alwaysStrict true --noUnusedLocals true --noUnusedParameters true --noImplicitReturns true --noFallthroughCasesInSwitch true --noImplicitOverride true --noPropertyAccessFromIndexSignature true --removeComments true
```
## If you also setup ESLint
```
$ npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
