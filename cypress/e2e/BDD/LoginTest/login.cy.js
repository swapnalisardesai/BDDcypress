/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given("I navigate to the Website", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});


When("I entered valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.get('[id="input-email"]').type(element.email);
        cy.get('[id="input-password"]').type(element.validpassword);
    });
});


And("User click on sign in button", () => {
    cy.get('[type="submit"]').eq(0).click();
});


Then("Validate the title after login", () => {
    cy.title().should("eq", "Search -");
});