Feature: CfGoogleAssistant

    Scenario: User navigates to CfGoogleAssistant
        Given I am a User loading CfGoogleAssistant
        When I navigate to the CfGoogleAssistant
        Then CfGoogleAssistant will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors