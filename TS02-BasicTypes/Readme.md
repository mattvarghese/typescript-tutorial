# TS01: TypeScript Tutorial / Hello World
This folder contains companion code for my YouTube TypeScript Tutorial

Chapter 2: Basic Types
* Link: TBD
* Blog Link: TBD
* GitHub: https://github.com/mattvarghese/typescript-tutorial > TS02-BasicTypes

# Running GitHub code
Make sure to do
```
$ npm install
```
before running the code after cloning from GitHub, or doing **npm run clean**.

# Contents
This chapter teaches you the basic types in TypeScript. We will cover:
* Code comments
* Literals
* Constants
* Variables
* boolean
* number
* string
* Regular Expressions
* function
* Union Types
* never
* Intersection types
* undefined
* void
* null
* Nullable
* Type conversions
* any and unknown
* Type assertions and checks
* Type aliases
* Arrays
* Tuples
* Enumerations
* object
* Type alias for object
* mutable vs. immutable
* Enum indexed properties
* Some native object types

# Setup Commands
```
$ npm init
$ npm install --save-dev typescript @types/node
$ npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs false --noImplicitAny true --sourceMap true --strict true --noImplicitThis true --alwaysStrict true --noUnusedLocals true --noUnusedParameters true --noImplicitReturns true --noFallthroughCasesInSwitch true --noImplicitOverride true --noPropertyAccessFromIndexSignature true --removeComments true
```
## If you also setup ESLint
```
$ npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
