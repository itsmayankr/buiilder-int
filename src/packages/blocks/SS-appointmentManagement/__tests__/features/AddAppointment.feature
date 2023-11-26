Feature: AddAppointment

    Scenario: User navigates to AddAppointment
        Given I am a User loading AddAppointment
        When I navigate to the AddAppointment
        Then AddAppointment will load with out errors
        And I can leave the screen with out errors
        And I can change date from calander
        And I can change calander arrow direction
        And I will get a error if there is no daily time slot
        And I will get a error if there is no daily time slots