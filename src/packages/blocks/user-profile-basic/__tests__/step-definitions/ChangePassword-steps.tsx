import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import ChangePassword from "../../src/ChangePassword";
import { TextInput } from "react-native";
import { expect, jest, beforeEach } from '@jest/globals';


const navigation = require("react-navigation");

const screenProps = {
    navigation: navigation,
    id: "ChangePassword",
};

const feature = loadFeature("./__tests__/features/ChangePassword-scenario.feature");

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    });

    test("User navigates to Forget Password", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: ChangePassword;

        given("I am a User loading Forget Password", () => {
            exampleBlockA = shallow(<ChangePassword {...screenProps} />);
        });

        when("I navigate to the Forget Password", () => {
            instance = exampleBlockA.instance() as ChangePassword;
        });

        then("Forget Password will load with out errors", () => {
            expect(exampleBlockA).toBeTruthy();
        });

        then("I can leave the screen with out errors", () => {
            instance.componentWillUnmount();
            expect(exampleBlockA).toBeTruthy();
        });
    });

    test("User changing the password", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: ChangePassword;

        given("I am a user changing the password", () => {
            exampleBlockA = shallow(<ChangePassword {...screenProps} />);
        });

        when("I navigate to the Forget Password", () => {
            instance = exampleBlockA.instance() as ChangePassword;
            let buttonComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "keyboardhide"
            );
            buttonComponent.simulate("press");
            instance.hideKeyboard;
        });

        then("I can enter current password without any error", () => {
            const wrapper = shallow(<ChangePassword navigation={undefined} />);
            const input = wrapper.find(TextInput);
            input.at(1).simulate("changeText", "password123");
            expect(wrapper.state("oldPassword")).toEqual("");
            wrapper.instance().setState({ oldPassword: "password123" });

            // instance.appHeader();
            let textInputComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "currentpassword"
            );
            textInputComponent.simulate("onChangeText", "FIRST");
            instance.setState({ oldPassword: "dfjisdjfjod" });
            let buttonComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "visibleoldpassword"
            );
            buttonComponent.simulate("press");
            instance.setState({ isOldPasswordVisible: false });
            expect(exampleBlockA).toBeTruthy();
        });

        then("I can enter new password without any error", () => {
            const wrapper = shallow(<ChangePassword navigation={undefined} />);
            const input = wrapper.find(TextInput);
            input.at(2).simulate("changeText", "dsfsdf");
            expect(wrapper.state("newPassword")).toEqual("");

            let textInputComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "newpassword"
            );

            textInputComponent.simulate(
                "onChangeText",
                instance.onChangeNewPassword("dsfsdf")
            );
            instance.setState({ newPassword: "df8oijedf", isValidPassword: true });
            let buttonComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "newpasswordvisibile"
            );
            buttonComponent.simulate("press");
            instance.setState({ isNewPasswordVisible: false });
            expect(exampleBlockA).toBeTruthy();
        });

        then("I can enter confirm password without any error", () => {

            let textInputComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "confirmpassword"
            );

            textInputComponent.simulate(
                "onChangeText",
                instance.onChangeConfirmPassword("dsfsdf")
            );
            instance.onChangeConfirmPassword("text");
            instance.setState({
                confirmPassword: "sdijoadj",
                isValidPasswordMatch: true,
            });
            let buttonComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "confirmpasswordvisible"
            );
            buttonComponent.simulate("press");
            instance.setState({ isConfirmPasswordVisible: false });
            expect(exampleBlockA).toBeTruthy();
        });

        then("I can leave the screen with out errors", () => {
            instance.componentWillUnmount();
            expect(exampleBlockA).toBeTruthy();
        });
    });

    test("User requesting password change", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: ChangePassword;

        given("I am a user requesting password change", () => {
            exampleBlockA = shallow(<ChangePassword {...screenProps} />);
        });

        when("I navigate to the Forget Password", () => {
            instance = exampleBlockA.instance() as ChangePassword;
        });

        then("I can press the button without any error", () => {
            let buttonComponent = exampleBlockA.findWhere(
                (node) => node.prop("testID") === "button"
            );
            buttonComponent.simulate("press");
            expect(exampleBlockA).toBeTruthy();
        });
        then("The rest api will run without any error", () => {
            let apiData = {
                data: {
                    current_password: 'dhsdijdsfiosod',
                    new_password: 'dhsdijdsfiosod',
                    confirm_password: 'dhsdijdsfiosod',
                },
            };
            instance.apiCall({
                contentType: "application/json",
                method: "PUT",
                endPoint: "bx_block_profile/passwords/12",
                body: apiData,
                token: 'token',
            });
            const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

            msg.addData(
                getName(MessageEnum.RestAPIResponceDataMessage),
                msg.messageId
            );
            instance.changePasswordApiCallId = msg.messageId;
            runEngine.sendMessage('From unit test', msg);
            // instance.successCallback
            instance.setState({ isLoading: false })
            // instance.failureCallBack

        });

        then("I can leave the screen with out errors", () => {
            instance.componentWillUnmount();
            expect(exampleBlockA).toBeTruthy();
        });
    });


});
