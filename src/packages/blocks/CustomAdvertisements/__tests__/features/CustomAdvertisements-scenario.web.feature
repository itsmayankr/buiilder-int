Feature: CustomAdvertisements

    Scenario: User navigates to CustomAdvertisements
        Given I am a User loading CustomAdvertisements
        When I navigate to the CustomAdvertisements
        Then CustomAdvertisements will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors