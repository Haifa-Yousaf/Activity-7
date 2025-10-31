module.exports = {
  testEnvironment: "node",
  verbose: true,
  testTimeout: 10000,
  reporters: [
    "default",
    [ "jest-junit", {
      outputDirectory: "test-results",
      outputName: "junit.xml",
      suiteName: "jest",
      addFileAttribute: "true"
    }]
  ]
};
