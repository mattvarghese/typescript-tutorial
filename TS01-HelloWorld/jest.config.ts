import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    // https://github.com/kulshekhar/ts-jest/issues/1102
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"]
};
export default config;
