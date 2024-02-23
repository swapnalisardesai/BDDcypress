import {Given} from "cypress-cucumber-preprocessor/steps"
Given("visit orangeHRM site and login with custom command.",()=>{
    
    cy.loginHRM("Admin","admin123")
})

Given('Visit Practice Automation Site login with {string} and {string} & Dashboard should be visible', (username, password)=> {
    cy.loginPracAutSite(username, password)
})