Feature: AddAppointmentDetails

    Scenario: User navigates to AddAppointmentDetails
        Given I am a User loading AddAppointmentDetails
        When I navigate to the AddAppointmentDetails
        Then AddAppointmentDetails will load with out errors
        And I can leave the screen with out errors