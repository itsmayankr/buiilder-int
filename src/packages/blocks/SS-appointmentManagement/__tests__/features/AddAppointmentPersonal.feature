Feature: AddAppointmentPersonal

    Scenario: User navigates to AddAppointmentPersonal
        Given I am a User loading AddAppointmentPersonal
        When I navigate to the AddAppointmentPersonal
        Then AddAppointmentPersonal will load with out errors
        And I can leave the screen with out errors