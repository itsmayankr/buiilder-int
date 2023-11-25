import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'
import * as helpers from '../../../../framework/src/Helpers'
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"

import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import EmailAccountLoginBlock from "../../src/EmailAccountLoginBlock"
import {expect, jest, beforeEach} from '@jest/globals';

const navigation = require("react-navigation")

const screenProps = {
    navigation: {
        navigate: jest.fn(),
        replace: jest.fn(),
        isFocused: jest.fn(),
        
    },
    id: "EmailAccountLoginBlock"
}
// console.log("screenProps", screenProps)

const feature = loadFeature('./__tests__/features/email-account-login-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to Email Log In', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;
        given('I am a User attempting to Log In with a Email', async () => {
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />)
            expect(mobileAccountLogInWrapper).toBeTruthy()
            let apiData = {
                data: {
                    type: "email_account",
                    attributes: {
                        email: 'abc@gmail.com',
                        password: 'passwoord',
                        device_token: 'sahvabna',
                        device_type: 'Ios'
                    },
                },
            };
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;

            const msgValidationAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgValidationAPI.messageId);
            msgValidationAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "data": {}
                });
            instance.apiLoginCallId = msgValidationAPI.messageId
            runEngine.sendMessage("Unit Test", msgValidationAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'POST', 'endPoint': 'bx_block_login/logins', 'body': apiData, 'token': '' })

        });

        when('I navigate to the Log In Screen', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock
            instance.componentDidMount();
            instance.setState({ deviceId: 'avhdajbbjn', deviceType: 'sdcax' })
            instance.backAction();

        });

        then('I can select the Log In button with out errors', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock
            let buttonComponent = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'btnEmailLogIn');
            buttonComponent.simulate('press');
            
            instance.setState({username:''});
            instance.onPressSignIn();
            instance.setState({username:'Piyush'});
            instance.onPressSignIn();
            instance.setState({username:'Piyush@gmail.com'});
            instance.onPressSignIn();
            instance.setState({password:''});
            instance.onPressSignIn();
            instance.setState({password:'Piyush'});
            instance.onPressSignIn();
            instance.setState({password:'Piyush@123#'});
            instance.onPressSignIn();
        });

        then('I can select the Forgot Password button with out errors', () => {
            let buttonComponent = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'btnForgotPassword');
            buttonComponent.simulate('press');
            let buttonSignUpComponent = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'btnSignUp');
            buttonSignUpComponent.simulate('press');
        });

        then('I can enter a email address with out errors', () => {
            let textInputComponent = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'txtInputEmail');
            textInputComponent.simulate('changeText', 'hello@aol.com');
            let backButton = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'onClickBackground')
            backButton.simulate('press');
        });

        then('I can enter a password with out errors', () => {
            let textInputComponent = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'txtInputPassword');
            textInputComponent.simulate('changeText', 'passWord1!');
            instance.onChangePassword('Piyush');

            let btnPasswordShowHide = mobileAccountLogInWrapper.findWhere((node) => node.prop('testID') === 'btnPasswordShowHide');
            btnPasswordShowHide.simulate('press');
            instance.setState({isPasswordVisible: true});
            btnPasswordShowHide.simulate('press');
            instance.setState({isPasswordVisible: false});
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount();
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });
    });

    test('Empty Email Address', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;

        given('I am a User attempting to Log In with a Email Address', () => {
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />);
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        when('I Log In with an empty Email Address', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
            instance.setState({ username: "", password: "password!" });
        });

        then('Log In Should Fail', async ()  => {
            const msgLogInErrorRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgLogInErrorRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgLogInErrorRestAPI);
            msgLogInErrorRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage),
                {
                    "errors": [
                        {
                            "failed_login": "Account not found, or not activated"
                        }
                    ]
                });

            msgLogInErrorRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgLogInErrorRestAPI.messageId);
            instance.apiLoginCallId = msgLogInErrorRestAPI.messageId
            runEngine.sendMessage("Unit Test", msgLogInErrorRestAPI);
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'POST', 'endPoint': 'bx_block_login/logins', 'body': {}, 'token': '' })
            instance.setState({ isLoading: false })
        });

    });

    test('Email Address and Empty Password', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;

        given('I am a User attempting to Log In with a Email Address', () => {
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />);
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        when('I Log In with a Email Address and empty Password', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock
            instance.setState({ username: "test@aol.com", password: "" })
        });

        then('Log In Should Fail', () => {
        });
    });

    test('Password and Empty Email Address', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;

        given('I am a User attempting to Log In with a Email Address', () => {
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />);
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        when('I Log In with a Password and empty Email Address', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock
            instance.setState({ username: "", password: "password" })
        });

        then('Log In Should Fail', () => {
        });
    });

    test('Email Address and Password', ({ given, when, then }) => {

        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;

        given('I am a Registed User attempting to Log In with a Email Address', () => {
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />);
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        when('I Log In with Email Address and Password', () => {
            instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock
            instance.setState({ username: "abc@aol.com", password: "password" })
        });

        then('Log In Should Succeed', () => {
        });

        then('RestAPI will return token', async () => {
            let apiData = {
                data: {
                    type: "email_account",
                    attributes: {
                        email: 'abc@gmail.com',
                        password: 'passwoord',
                        device_token: 'sahvabna',
                        device_type: 'Ios'
                    },
                },
            };
            const msgLogInSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
            msgLogInSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgLogInSucessRestAPI.messageId);
            msgLogInSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
                "data": {
                    "id": "2",
                    "type": "account",
                    "attributes": {
                        "email": "piyushsharma1711@gmail.com",
                        "full_name": "Piyush Sharma",
                        "image": "https://minio.b139980.dev.eastus.az.svc.builder.cafe/sbucket/qcuqi9fhouyd1gn3ei2ybz9vnmvx",
                    }
                },
                "meta": {
                    "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q",
                    "refresh_token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q"
                },
            });
            instance.apiLoginCallId = msgLogInSucessRestAPI.messageId
            runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI)
            await instance.apiCall({ 'contentType': 'application/json', 'method': 'POST', 'endPoint': 'bx_block_login/logins', 'body': apiData, 'token': '' })
        });
    });

    test('Remember Me - Email Address Account Log In', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: EmailAccountLoginBlock;

        given('I am a Registed User who has already Logged In and selected Remember Me', () => {
            //Force ios to render mobile layout once.
            jest.spyOn(helpers, 'getOS').mockImplementation(() => 'ios');
            mobileAccountLogInWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />);
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        when('I navigate to Email Address Account Log In', () => {

            const msgRestoreCreds = new Message(getName(MessageEnum.ReciveUserCredentials))
            msgRestoreCreds.addData(getName(MessageEnum.LoginPassword), "passWord1!")
            msgRestoreCreds.addData(getName(MessageEnum.LoginUserName), "test@aol.com")
            runEngine.sendMessage("Unit Test", msgRestoreCreds)

        });

        then('The Country Code, Email Address and Password will be restored', () => {
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });
    });


});
