import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"

import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import TermsAndConditions from "../../src/TermsAndConditions"
import { expect, jest, beforeEach } from '@jest/globals';

const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "TermsAndConditions"
}

const feature = loadFeature('./__tests__/features/TermsAndConditions-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to TermsAndConditions', ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: TermsAndConditions;

        given('I am a User loading TermsAndConditions', () => {
            exampleBlockA = shallow(<TermsAndConditions {...screenProps} />);
        });

        when('I navigate to the TermsAndConditions', async () => {
            instance = exampleBlockA.instance() as TermsAndConditions
            await instance.componentDidMount();
            await instance.getTermsAndConditions();
        });

        then('TermsAndConditions will load with out errors', async () => {
            expect(exampleBlockA).toBeTruthy();

            instance = exampleBlockA.instance() as TermsAndConditions;
    
            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "data": {
                        "id": "1",
                        "type": "terms_and_conditions",
                        "attributes": {
                            "description": "<p>Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.</p><p>Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.</p><p>All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and condition.</p><p>Last Updated: Nov 2022</p>"
                        }
                    }
                });
            instance.getTermsAndConditionApiCallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'bx_block_termsandconditions/terms_and_conditions', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
            instance.setState({isLoading:false})
        });

        then('TermsAndConditions will load with errors', async () => {
            const termsAndConditionAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            termsAndConditionAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), termsAndConditionAPI);
            termsAndConditionAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "errors": [
                        {
                            // "failed_login": "Account not found, or not activated"
                        }
                    ]
                });
            termsAndConditionAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), termsAndConditionAPI.messageId);
            instance.getTermsAndConditionApiCallId = termsAndConditionAPI.messageId
            runEngine.sendMessage("Unit Test", termsAndConditionAPI);
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'bx_block_termsandconditions/terms_and_conditions', 'body': {}, 'token': 'ghasvdhgvhasvhas' });
            let errorResponse = undefined
            instance.setState({ isLoading: false })
        });

        then('I can enter text with out errors', () => {
            
        });

        then('I can select the button with with out errors', () => {
           
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(exampleBlockA).toBeTruthy();
        });
    });


});
