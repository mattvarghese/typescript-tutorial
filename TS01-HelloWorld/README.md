# TypeScript Tutorial / Hello World
This folder contains companion code for my YouTube TypeScript Tutorial
Chapter 1: Hello World
Link: <>
Blog Link: <>

# Contents
This chapter sets up a TypeScript NodeJS Console application
that runs a basic HTTP server. It covers
* Visual Studio Integration and debugging
* Basic tsconfig.json settings
* ESLint
* Unit Testing

# Setup Steps 
## Setup Project
```
$ npm init
$ npm install --save-dev typescript @types/node
$ npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs false --noImplicitAny true --sourceMap true --strict true --noImplicitThis true --alwaysStrict true --noUnusedLocals true --noUnusedParameters true --noImplicitReturns true --noFallthroughCasesInSwitch true --noImplicitOverride true --noPropertyAccessFromIndexSignature true --removeComments true
```
## Limit to src folder
Add 
```
  , "include": [
    "src"
  ]
```
to tsconfig.json
## Add src folder
Add src folder and main.ts
Update scripts

## Add jest
```
npm install -D ts-node ts-jest @types/jest
```
Also add jest.config.ts. See limiting to only TS files.

