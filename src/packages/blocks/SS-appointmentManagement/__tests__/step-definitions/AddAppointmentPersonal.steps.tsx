import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

// import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import AddAppointmentPersonal from "../../src/AddAppointmentPersonal";

const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    addListener: jest.fn().mockImplementation((event, callback) => {
      if (event === "willFocus") {
        callback();
      }
    }),
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
    replace: jest.fn(),
    trim: jest.fn(),
    props: jest.fn(),
    Alert: jest.fn(),
    filter: jest.fn()
  },
  id: "AddAppointmentPersonal",
  route: {
    params: {
      selectedTime: { date: "", time: "" },
      id: "string",
      title: "string",
      price: 11,
      duration: 15,
      image: "string",
      paymentType: null
    }
  }
};

const feature = loadFeature(
  "./__tests__/features/AddAppointmentPersonal.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AddAppointmentPersonal", ({ given, when, then }) => {
    let AddAppointmentPersonalWrapper: ShallowWrapper;
    let instance: AddAppointmentPersonal;

    given("I am a User loading AddAppointmentPersonal", () => {
      AddAppointmentPersonalWrapper = shallow(
        <AddAppointmentPersonal {...screenProps} />
      );
      expect(AddAppointmentPersonalWrapper).toBeTruthy();
      instance =
        AddAppointmentPersonalWrapper.instance() as AddAppointmentPersonal;
    });

    when("I navigate to the AddAppointmentPersonal", () => {
      instance =
        AddAppointmentPersonalWrapper.instance() as AddAppointmentPersonal;
    });

    then("AddAppointmentPersonal will load with out errors", () => {
      expect(AddAppointmentPersonalWrapper).toBeTruthy();

      let btnComponent2 = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnBack");

      btnComponent2.simulate("onPress");

      let textInputComponentName = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnName");
      textInputComponentName.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentName.prop("onChangeText")("abc");
      expect(textInputComponentName.prop("onChangeText")).toBeDefined();
      textInputComponentName.prop("onBlur")({ target: { name: "" } });

      let textInputComponentEmail = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnEmail");
      textInputComponentEmail.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentEmail.prop("onChangeText")("abc");
      expect(textInputComponentEmail.prop("onChangeText")).toBeDefined();
      textInputComponentEmail.prop("onBlur")({ target: { name: "" } });

      let textInputComponentPhone = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnPhone");
      textInputComponentPhone.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentPhone.prop("onChangeText")("abc");
      expect(textInputComponentPhone.prop("onChangeText")).toBeDefined();
      textInputComponentPhone.prop("onBlur")({ target: { name: "" } });

      let textInputComponentComment = AddAppointmentPersonalWrapper.find(
        "Formik"
      )
        .dive()
        .findWhere((node) => node.prop("testID") === "btnComment");
      textInputComponentComment.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentComment.prop("onChangeText")("abc");
      expect(textInputComponentComment.prop("onChangeText")).toBeDefined();
      textInputComponentComment.prop("onBlur")({ target: { name: "" } });
      let btnComponent3 = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnSubmit");

      btnComponent3.simulate("onPress");
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(AddAppointmentPersonalWrapper).toBeTruthy();

      instance.onPressProceed("2");
    });
  });
});
