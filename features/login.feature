# Feature: User login

#   Scenario: User login on GURUDEMO Website
#     When A user navigate to visit loginPage
#     And the user enter the UID
#     And the user enter the Password
#     And the user clicks on login button
#     Then the user should see the Managementpage


Feature: Login functionality
 
  Scenario: User login in to GURUDEMO Website
    When A user enter user ID as " mngr572981"
    And the user enter password as "taqajam"
    And the user clicks on Login button
    Then the user should be redicted to Manager page