/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("Visit Orange HRM site", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});
When("I entered valid credentials in OrangeHRM", () => {
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    //cy.get('[type="submit"]').click()
})

And("User click on sign in button for OrangeHRM", () => {
    cy.get('[type="submit"]').eq(0).click();
});

Then("Validate the title after login OrangeHRM", () => {

    cy.title().should("eq", "OrangeHRM")
})



When("Enter invalid Username and Password", ()=>{
    cy.wait(3000)
    cy.get('[name="username"]').type("Admin123")
    cy.get('[name="password"]').type('admin')
})

Then("Validate the Error", ()=>{
    cy.get('.oxd-alert-content-text').should('have.text', "Invalid credentials")
})
