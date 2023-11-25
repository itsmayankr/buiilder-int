Feature: Email Account Registration
    Scenario: Register Email Account SignupPage 1
        Given I am a User attempting to Register after confirming OTP
        When I navigate to the Registration Screen
        Then I can enter a email with out errors
        And I can enter a full name with out errors
        And I can enter a mobile number with out errors
        And I can enter a password with out errors
        And I can toggle the Password Show/Hide with out errors
        And I can enter a confimation password with out errors
        And I can toggle the Confimation Password Show/Hide with out errors
        And I can see terms and condition
        And I can select the Submit button with out errors
        And I can navigate to SignupPage 2 with out errors
        And I can leave the screen with out errors


    Scenario: Register Email Account SignupPage 2
        Given I am a User attempting to Register after confirming OTP
        When I navigate to the Registration Screen
        Then I can go back to Signup page 1 screen with out errors
        And I can select country dropdown with out errors
        And I can select region dropdown with out errors
        And I can select language dropdown with out errors
        And I can select media house dropdown with out errors
        And I can select category dropdown with out errors
        And I am receiving error message when am trying to register after some time
        And I am receiving error message when am trying to register without email
        And I am receiving error message when am trying to register without password
        And I am receiving error message when am trying to register
        And I can leave the screen with out errors

    Scenario: Network call mock test for registerApiCallId
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for registerApiCallId
        And I am facing errors with email while network call for registerApiCallId
        And I am facing errors with password while network call for registerApiCallId
        And I am facing errors with message while network call for registerApiCallId

    Scenario: Network call mock test for getCountryData
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for getCountryData
        And I am facing errors with message while network call for getCountryData

    Scenario: Network call mock test for getRegionData
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for getRegionData
        And I am facing errors with message while network call for getRegionData

    Scenario: Network call mock test for getLanguageData
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for getLanguageData
        And I am facing errors with message while network call for getLanguageData

    Scenario: Network call mock test for getMediaHouseData
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for getMediaHouseData
        And I am facing errors with message while network call for getMediaHouseData

    Scenario: Network call mock test for getCategoryData
        Given I am a User attempting to Register with a Email
        When I navigate to the Registration Screen
        Then I can Network call for getCategoryData
        And I am facing errors with message while network call for getCategoryData

    Scenario: Valid Registration
        Given I am a User attempting to Register with a Email
        When I Register with all valid data
        Then Registration Should Succeed
        And RestAPI will return token
        And I can close all popups