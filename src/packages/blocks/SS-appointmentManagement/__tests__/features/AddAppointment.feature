Feature: AddAppointment

    Scenario: User navigates to AddAppointment
        Given I am a User loading AddAppointment
        When I navigate to the AddAppointment
        Then AddAppointment will load with out errors
        And I can leave the screen with out errors