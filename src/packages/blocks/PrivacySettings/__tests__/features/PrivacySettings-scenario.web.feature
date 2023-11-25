Feature: PrivacySettings

    Scenario: User navigates to PrivacySettings
        Given I am a User loading PrivacySettings
        When I navigate to the PrivacySettings
        Then PrivacySettings will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors