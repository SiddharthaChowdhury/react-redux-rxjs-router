module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "clearMocks": true,
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },

    // The glob patterns Jest uses to detect test files
    "testMatch": ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    "testPathIgnorePatterns": ['\\\\node_modules\\\\'],
    "transformIgnorePatterns": ['<rootDir>/node_modules/'],

    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "coverageDirectory": 'coverage',
    "collectCoverageFrom": ['src/**/*.{ts,tsx}'],

    "verbose": false,

    "setupFiles": ['<rootDir>/enzyme.config.ts']
};