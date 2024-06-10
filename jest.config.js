module.exports = {
  preset: "ts-jest",
  "extensionsToTreatAsEsm": [".ts"],
  testEnvironment: "node",
  testMatch: [
    '<rootDir>/__tests__/**/*.test.ts',  // Matches .test.ts files in __tests__ and its subfolders
  ],
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },  
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Ensure this path points to your tsconfig.json
    },
  },
};