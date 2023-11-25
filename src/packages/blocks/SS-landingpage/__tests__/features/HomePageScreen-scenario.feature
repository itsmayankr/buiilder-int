Feature: homepage
    Scenario: User navigates to HomePage
        Given I am a User loading HomePage
        When I navigate to the HomePage
        Then HomePage will load with out errors
        Then back button will work with out errors
        And I can leave the screen with out errors
