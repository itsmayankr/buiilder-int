Feature: ElasticSearch

    Scenario: User navigates to ElasticSearch
        Given I am a User loading ElasticSearch
        When I navigate to the ElasticSearch
        Then ElasticSearch will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors