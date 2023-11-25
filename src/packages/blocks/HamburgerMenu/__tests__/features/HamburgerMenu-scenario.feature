Feature: HamburgerMenu

    Scenario: User navigates to HamburgerMenu
        Given I am a User loading HamburgerMenu
        When I navigate to the HamburgerMenu
        Then HamburgerMenu will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors