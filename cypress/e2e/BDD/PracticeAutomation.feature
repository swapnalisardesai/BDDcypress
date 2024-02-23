Feature: Ecommerce Site - Practice Automation Testing

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with Username and Password
            | Username                    | Password    |
            | swapnali.sardesai@gmail.com | swapnali123 |
        And click on singin button
        Then Dashboard should be visible



    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with "<Username>" and "<Password>"
        And click on singin button
        Then Dashboard should be visible

        Examples:
            | Username                    | Password    |
            | swapnali.sardesai@gmail.com | swapnali123 |
            | Arjun@test.com              | Arjun@12    |



    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with "<Username>" and "<Password>"
        And click on singin button
        Then should be visible for "<Credentials>" credentials
        Examples:
            | Username                    | Password    | Credentials |
            | swapnali.sardesai@gmail.com | swapnali123 | Valid       |
            | Arjun@test.com              | Arjun12     | Invalid     |