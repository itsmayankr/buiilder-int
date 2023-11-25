Feature: Trending

    Scenario: User navigates to Trending
        Given I am a User loading Trending
        When I navigate to the Trending
        Then Trending will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors