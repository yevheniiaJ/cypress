const { defineConfig } = require("cypress");

module.exports = defineConfig({

  browser: "firefox",
  e2e: {
    baseUrl: "https://www.wikipedia.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
