import { Message } from "../../../../framework/src/Message";
import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'

import React from "react";
import PrivacySettings from "../../src/PrivacySettings"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "PrivacySettings"
  }

const feature = loadFeature('./__tests__/features/PrivacySettings-scenario.feature');

const item = [{
    id: 1,
    name: 'angellist',
}]

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to PrivacySettings', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:PrivacySettings; 

        given('I am a User loading PrivacySettings', () => {
            exampleBlockA = shallow(<PrivacySettings {...screenProps}/>);
        });

        when('I navigate to the PrivacySettings', () => {
             instance = exampleBlockA.instance() as PrivacySettings
             let from = ""
             let message:any = Message;
             instance.receive(from, message);
             instance.setState({txtSavedValue:''})
            
             instance.onSelectedItemsChange(item)
        });

        then('PrivacySettings will load with out errors', () => {
            expect(exampleBlockA).toBeTruthy();
        });

        then('I can enter text with out errors', () => {
            let textInputComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'txtInput');
            // textInputComponent.simulate('changeText', 'hello@aol.com');
        });

        then('I can select the button with with out errors', () => {
            // let buttonComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'btnExample');
            // buttonComponent.simulate('press');

            let hideKeyboardButton = exampleBlockA.findWhere((node) => node.prop('testID') === 'hideKeyboard');
            hideKeyboardButton.simulate('press');
            // expect(instance.state.txtSavedValue).toEqual("hello@aol.com");
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(exampleBlockA).toBeTruthy();
        });
    });


});
