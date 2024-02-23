Feature: Ecommerce site Login examples

    Scenario: login with valid credentials
        Given visit orangeHRM site and login with custom command.


    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Site login with "<Username>" and "<Password>" & Dashboard should be visible
        Examples:
            | Username                    | Password    |
            | swapnali.sardesai@gmail.com | swapnali123 |
            | Arjun@test.com              | Arjun@12    |