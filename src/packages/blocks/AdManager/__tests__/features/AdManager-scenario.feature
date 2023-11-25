Feature: AdManager

    Scenario: User navigates to AdManager
        Given I am a User loading AdManager
        When I navigate to the AdManager
        Then AdManager will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors