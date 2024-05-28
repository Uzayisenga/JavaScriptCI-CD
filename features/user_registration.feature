Feature: User registration

  Scenario: User register on GURUDEMO Website
    When A user navigate to visit here link
    And the user enter the email
    And the user clicks on submit button
    Then the user should receive confirmation table for credentials
