import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"

import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { Modal } from "react-native"
import UserProfile from "../../src/UserProfileBasicBlock";
import { expect, jest, beforeEach } from '@jest/globals';

const navigation = require("react-navigation")

const screenProps = {
    navigation: {
        navigate: jest.fn(),
        replace: jest.fn(),
        isFocused: jest.fn(),
        goBack: jest.fn(),
    },
    id: "user-profile-basic"
}

const feature = loadFeature('./__tests__/features/user-profile-basic-scenario.feature');

let responseJson: {
    "data": {
        "id": "110",
        "type": "account_profile",
        "attributes": {
            "activated": false,
            "country_code": 91,
            "email": "Kittu@gmail.com",
            "full_name": "Kittuu",
            "full_phone_number": "911234567891",
            "last_name": null,
            "phone_number": 1234567891,
            "type": null,
            "created_at": "2023-02-17T07:37:53.166Z",
            "updated_at": "2023-03-06T18:49:52.304Z",
            "device_id": "",
            "unique_auth_id": "UvCVgHICbLs5PTSQayLMugtt",
            "image": "https://minio.b139980.dev.eastus.az.svc.builder.cafe/sbucket/2iyx7bfvxf5hxpqekxw9biy9tsvc"
        }
    },
    "meta": {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTEwLCJleHAiOjE2NzgyNTcxNDR9.EtY_BPXYTFxh2WCwIJNp3PABpMlKu07lcVSJBgYRxnOykWiVnB66P3sXgzURTHPnAtC7hzcWJjhRCkTZnzebpA"
    }
};

let errorResponse: ['smething went wrong'];

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to UserProfile', ({ given, when, then }) => {
        let userProfileBlock: ShallowWrapper;
        let instance: UserProfile;

        given('I am a User loading UserProfile', () => {
            userProfileBlock = shallow(<UserProfile {...screenProps} />);
        });

        when('I navigate to the UserProfile', async () => {
            instance = userProfileBlock.instance() as UserProfile
            await instance.componentDidMount();
            await instance.getProfileDataApi();
        });

        then('UserProfile will load with out errors', async () => {
            expect(userProfileBlock).toBeTruthy();

            instance = userProfileBlock.instance() as UserProfile;

            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "data": {
                        "id": "110",
                        "type": "account_profile",
                        "attributes": {
                            "activated": false,
                            "country_code": 91,
                            "email": "Kittu@gmail.com",
                            "full_name": "Kittuu",
                            "full_phone_number": "911234567891",
                            "last_name": null,
                            "phone_number": 1234567891,
                            "type": null,
                            "created_at": "2023-02-17T07:37:53.166Z",
                            "updated_at": "2023-03-06T18:49:52.304Z",
                            "device_id": "",
                            "unique_auth_id": "UvCVgHICbLs5PTSQayLMugtt",
                            "image": "https://minio.b139980.dev.eastus.az.svc.builder.cafe/sbucket/2iyx7bfvxf5hxpqekxw9biy9tsvc"
                        }
                    },
                    "meta": {
                        "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTEwLCJleHAiOjE2NzgyNTcxNDR9.EtY_BPXYTFxh2WCwIJNp3PABpMlKu07lcVSJBgYRxnOykWiVnB66P3sXgzURTHPnAtC7hzcWJjhRCkTZnzebpA"
                    }
                });
            instance.getProfileDataApiCallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'account_block/accounts/2', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
            instance.handleProfileData('', responseJson, []);
        });

        then('UserProfile will load with errors', async () => {
            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "errors": [
                        {
                            "token": "Invalid token"
                        }
                    ]
                });
            instance.getProfileDataApiCallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'account_block/accounts/2', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
            instance.handleProfileData('', [], errorResponse);
        });

        // Subscription Api Call

        then('Subscription detail will load with out errors', async () => {
            expect(userProfileBlock).toBeTruthy();

            instance = userProfileBlock.instance() as UserProfile;

            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "data": {
                        "status": true,
                        "message": "No subscription found"
                    },
                });
                
            instance.getSubscriptionDetailcallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'account_block/premium_free_trial_status/10', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
        });

        then('Subscription detail will load with errors', async () => {
            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "errors": [
                        {
                            "token": "Invalid token"
                        }
                    ]
                });
            instance.getProfileDataApiCallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'account_block/accounts/2', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
            // instance.handleProfileData('', [], errorResponse);
        });

        // Update Profile Api Call

        then('UserProfile will be updated with out errors', async () => {
            expect(userProfileBlock).toBeTruthy();

            instance = userProfileBlock.instance() as UserProfile;

            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "data": []
                });
                
            instance.updateProfileDataApicallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'GET', 'endPoint': 'account_block/accounts/10', 'body': {}, 'token': 'ghasvdhgvhasvhas' })
        });

        then('I can enter text with out errors', () => {
            let userNameTextInputComponent = userProfileBlock.findWhere((node) => node.prop('testID') === 'userTextInput');
            userNameTextInputComponent.simulate('changeText', 'piyush');
            let mobileTextInputComponent = userProfileBlock.findWhere((node) => node.prop('testID') === 'mobileTextInput');
            mobileTextInputComponent.simulate('changeText', '327267862783');

        });

        then('I can select the button with with out errors', async () => {
            let backButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'onClickBackground')
            backButton.simulate('press');

            instance.setState({ profileImage: 'bjhsdbhjsbd' });
            let gallaryModal = userProfileBlock.findWhere((node) => node.prop('testID') === 'gallaryModalId')
            gallaryModal.simulate('press');
            instance.setState({ modalVisible: true });

            instance.setState({ profileImage: '' });
            let image = userProfileBlock.findWhere((node) => node.prop('testID') === 'imageBackground')
            image.simulate('onLoadStart');
            instance.setState({ imageLoader: true });
            // instance.setState({imageLoader:false}); 
            let gallaryModel = userProfileBlock.findWhere((node) => node.prop('testID') === 'onClickChangeProfile')
            gallaryModel.simulate('press');

            let changePasswordButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'changePasswordBtn')
            changePasswordButton.simulate('press');

            instance.setState({
                subscriptionDetail: {
                    "status": false,
                    "message": "Premium free trial is active",
                    "subscription_details": {
                        "plan": "Premium Free Trial",
                        "billing_amount": "0.0",
                        "next_bill_date": "March 18th, 2023",
                        "plan_features": "Premium Free Trial"
                    }
                }
            })
            instance.setState({
                subscriptionDetail: {
                    "status": true,
                }
            })
            let cancelSubscriptionButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'cancelSubscriptionBtn')
            cancelSubscriptionButton.simulate('press');

            let updateProfileButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'updateProfileBtn')
            updateProfileButton.simulate('press');
            await instance.onClickUpdateProfile();

            let onClickBackground = userProfileBlock.findWhere((node) => node.prop('testID') === 'onClickOutSide')
            onClickBackground.simulate('press');

            let onClickCamera = userProfileBlock.findWhere((node) => node.prop('testID') === 'onClickCamera')
            onClickCamera.simulate('press');
            let type = 'Gallery';
            instance.onClickCamera(type);
            let onClickCameraIcon = userProfileBlock.findWhere((node) => node.prop('testID') === 'onClickCameraIcon')
            onClickCameraIcon.simulate('press');

            let cancelButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'cancelBtn')
            cancelButton.simulate('press');

            let feedbackPopup = userProfileBlock.findWhere((node) => node.prop('testID') === 'feedbackPopup')
            feedbackPopup.simulate('press');

            let keepPlanButton = userProfileBlock.findWhere((node) => node.prop('testID') === 'keepPlanBtn')
            keepPlanButton.simulate('press');

            userProfileBlock.find(Modal).forEach((modal) => {
                //@ts-ignore
                modal.props().onRequestClose();
            });
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(userProfileBlock).toBeTruthy();
        });
    });
});
