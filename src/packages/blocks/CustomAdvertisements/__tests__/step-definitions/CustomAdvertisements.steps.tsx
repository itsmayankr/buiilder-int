import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'

import React from "react";
import CustomAdvertisements from "../../src/CustomAdvertisements"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "CustomAdvertisements"
  }

const feature = loadFeature('./__tests__/features/CustomAdvertisements-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to CustomAdvertisements', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:CustomAdvertisements; 

        given('I am a User loading CustomAdvertisements', () => {
            exampleBlockA = shallow(<CustomAdvertisements {...screenProps}/>);
        });

        when('I navigate to the CustomAdvertisements', () => {
             instance = exampleBlockA.instance() as CustomAdvertisements
        });

        then('CustomAdvertisements will load with out errors', () => {
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
