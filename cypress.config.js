const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;//added for cucumber
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//added for mocha plugin- report
  e2e: {
    includeShadowDom: true,//for shadow dom to get element directaly
    specPattern: "**/*.feature",//it can only run feature files//for bdd
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);//for mocha
    },
  },
});



 