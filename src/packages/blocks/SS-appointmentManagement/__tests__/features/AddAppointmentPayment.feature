Feature: AddAppointmentPayment

    Scenario: User navigates to AddAppointmentPayment
        Given I am a User loading AddAppointmentPayment
        When I navigate to the AddAppointmentPayment
        Then AddAppointmentPayment will load with out errors
        And I can leave the screen with out errors