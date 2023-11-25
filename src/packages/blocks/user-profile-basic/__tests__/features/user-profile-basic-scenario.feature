Feature: UserProfile

    Scenario: User navigates to UserProfile
        Given I am a User loading UserProfile
        When I navigate to the UserProfile
        Then UserProfile will load with out errors
        Then UserProfile will load with errors
        Then Subscription detail will load with out errors
        Then Subscription detail will load with errors
        Then UserProfile will be updated with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors