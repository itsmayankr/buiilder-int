Feature: AddAppointmentDetails

    Scenario: User navigates to AddAppointmentDetails
        Given I am a User loading AddAppointmentDetails
        When I navigate to the AddAppointmentDetails
        Then I can navigate back to previous screen

    Scenario: User navigates to AddAppointmentDetails with out success      
        Given I am a User loading AddAppointmentDetails
        When I navigate to the AddAppointmentDetails
        Then I can change the payment method
        And I can cancel the transaction

     Scenario: User navigates to AddAppointmentDetails without proper data
        Given I am a User loading AddAppointmentDetails
        When I navigate to the AddAppointmentDetails
        Then I can navigate back to previous screen
