import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'

import React from "react";
import Surveys from "../../src/Surveys"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "Surveys"
  }

const feature = loadFeature('./__tests__/features/Surveys-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to Surveys', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:Surveys; 

        given('I am a User loading Surveys', () => {
            exampleBlockA = shallow(<Surveys {...screenProps}/>);
        });

        when('I navigate to the Surveys', () => {
             instance = exampleBlockA.instance() as Surveys
        });

        then('Surveys will load with out errors', () => {
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
