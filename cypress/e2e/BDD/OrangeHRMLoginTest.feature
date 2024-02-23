Feature: I want to login into the site with valid data
  Background: Navigate to the OrangeHRM Website
     Given Visit Orange HRM site
  Scenario: Login as new sign up user for OrangeHRM with valid data
    When I entered valid credentials in OrangeHRM
    And User click on sign in button for OrangeHRM
    Then Validate the title after login OrangeHRM             

    Scenario: Login with Invalid Credentials
        Given Visit Orange HRM site
        When Enter invalid Username and Password
        And User click on sign in button for OrangeHRM
        Then Validate the Error