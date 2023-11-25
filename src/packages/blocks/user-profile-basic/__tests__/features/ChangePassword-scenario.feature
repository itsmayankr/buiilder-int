Feature: Email Address Account Log In

    Scenario: User navigates to Forget Password
       Given I am a User loading Forget Password
        When I navigate to the Forget Password
        Then Forget Password will load with out errors
        And I can leave the screen with out errors

   Scenario: User changing the password
     Given I am a user changing the password
      When I navigate to the Forget Password
      Then I can enter current password without any error
      Then I can enter new password without any error
      Then I can enter confirm password without any error
      And I can leave the screen with out errors

    Scenario: User requesting password change
     Given I am a user requesting password change
      When I navigate to the Forget Password
      Then I can press the button without any error
      Then The rest api will run without any error
      And I can leave the screen with out errors
     
