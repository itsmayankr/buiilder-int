import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'

import React from "react";
import CfApiIntegrationMediaHouse1 from "../../src/CfApiIntegrationMediaHouse1"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "CfApiIntegrationMediaHouse1"
  }

const feature = loadFeature('./__tests__/features/CfApiIntegrationMediaHouse1-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to CfApiIntegrationMediaHouse1', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:CfApiIntegrationMediaHouse1; 

        given('I am a User loading CfApiIntegrationMediaHouse1', () => {
            exampleBlockA = shallow(<CfApiIntegrationMediaHouse1 {...screenProps}/>);
        });

        when('I navigate to the CfApiIntegrationMediaHouse1', () => {
             instance = exampleBlockA.instance() as CfApiIntegrationMediaHouse1
        });

        then('CfApiIntegrationMediaHouse1 will load with out errors', () => {
            expect(exampleBlockA).toBeTruthy();
        });

        then('I can enter text with out errors', () => {
            let textInputComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'txtInput');
            textInputComponent.simulate('changeText', 'hello@aol.com');
        });

        then('I can select the button with with out errors', () => {
            let buttonComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'btnExample');
            buttonComponent.simulate('press');
            expect(instance.state.txtSavedValue).toEqual("hello@aol.com");
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(exampleBlockA).toBeTruthy();
        });
    });


});
