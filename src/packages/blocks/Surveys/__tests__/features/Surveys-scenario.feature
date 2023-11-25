Feature: Surveys

    Scenario: User navigates to Surveys
        Given I am a User loading Surveys
        When I navigate to the Surveys
        Then Surveys will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors