import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

// import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import AddAppointmentPayment from "../../src/AddAppointmentPayment";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "AddAppointmentPayment",
  route: {
    params: {
      personalDetails: {
        name: "TEST",
        email: "TEST",
        phone: "TEST",
        comment: "TEST"
      },
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
  "./__tests__/features/AddAppointmentPayment.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AddAppointmentPayment", ({ given, when, then }) => {
    let AddAppointmentWrapper: ShallowWrapper;
    let instance: AddAppointmentPayment;

    given("I am a User loading AddAppointmentPayment", () => {
      AddAppointmentWrapper = shallow(
        <AddAppointmentPayment {...screenProps} />
      );
      expect(AddAppointmentWrapper).toBeTruthy();
      instance = AddAppointmentWrapper.instance() as AddAppointmentPayment;
    });

    when("I navigate to the AddAppointmentPayment", () => {
      instance = AddAppointmentWrapper.instance() as AddAppointmentPayment;
    });

    then("AddAppointmentPayment will load with out errors", () => {
      let textInputComponentName = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtCountry");
      textInputComponentName.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentName.prop("onChangeText")("abc");
      expect(textInputComponentName.prop("onChangeText")).toBeDefined();
      textInputComponentName.prop("onBlur")({ target: { name: "" } });
      let textInputComponentNo = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtNo");
      textInputComponentNo.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentNo.prop("onChangeText")("abc");
      expect(textInputComponentNo.prop("onChangeText")).toBeDefined();
      textInputComponentNo.prop("onBlur")({ target: { name: "" } });
      let textInputComponentAddr1 = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtAddress1");
      textInputComponentAddr1.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentAddr1.prop("onChangeText")("abc");
      expect(textInputComponentAddr1.prop("onChangeText")).toBeDefined();
      textInputComponentAddr1.prop("onBlur")({ target: { name: "" } });
      let textInputComponentAddr2 = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtAddress2");
      textInputComponentAddr2.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentAddr2.prop("onChangeText")("abc");
      expect(textInputComponentAddr2.prop("onChangeText")).toBeDefined();
      textInputComponentAddr2.prop("onBlur")({ target: { name: "" } });
      let textInputComponentCity = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtCity");
      textInputComponentCity.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentCity.prop("onChangeText")("abc");
      expect(textInputComponentCity.prop("onChangeText")).toBeDefined();
      textInputComponentCity.prop("onBlur")({ target: { name: "" } });
      let textInputComponentState = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtState");
      textInputComponentState.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentState.prop("onChangeText")("abc");
      expect(textInputComponentState.prop("onChangeText")).toBeDefined();
      textInputComponentState.prop("onBlur")({ target: { name: "" } });
      textInputComponentCity.prop("onBlur")({ target: { name: "" } });
      let textInputComponentZip = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "txtZip");
      textInputComponentZip.simulate("change", {
        target: { name: "full_name", value: "abc" }
      });
      textInputComponentZip.prop("onChangeText")("abc");
      expect(textInputComponentZip.prop("onChangeText")).toBeDefined();
      textInputComponentZip.prop("onBlur")({ target: { name: "" } });
      let btnComponent2 = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnBack");

      btnComponent2.simulate("onPress");
      let btnComponent3 = AddAppointmentWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnSubmit");

      btnComponent3.simulate("onPress");
      instance.customAlert();
      instance.selectPaymentOption({ label: "test", value: "payNow" });
      const tokenMsg: Message = new Message(
        getName(MessageEnum.SessionResponseMessage)
      );
      tokenMsg.addData(getName(MessageEnum.SessionResponseToken), "TOKEN");
      runEngine.sendMessage("Unit Test", tokenMsg);

      const getConttactUsAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );

      getConttactUsAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: [
            {
              id: "10",
              type: "contact",
              attributes: {
                name: "Tester",
                email: "test@me.com",
                phone_number: "13015551212",
                description: "None",
                created_at: "2021-03-08T23:17:49.068Z",
                user: "Firstname Lastname"
              }
            }
          ]
        }
      );
      instance.submitBookingCallId = getConttactUsAPI.messageId;
      runEngine.sendMessage("Unit Test", getConttactUsAPI);

      const createConttactUsAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      const createConttactUsAPI2 = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      const createConttactUsAPI3 = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      createConttactUsAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { errors: ["Catalogue is currently inactive"] }
      );
      instance.submitBookingCallId = createConttactUsAPI.messageId;
      runEngine.sendMessage("Unit Test", createConttactUsAPI);
      createConttactUsAPI2.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { errors: ["Time slot is already booked"] }
      );
      instance.submitBookingCallId = createConttactUsAPI2.messageId;
      runEngine.sendMessage("Unit Test", createConttactUsAPI2);
      createConttactUsAPI3.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { errors: ["UNDEFINED"] }
      );
      instance.submitBookingCallId = createConttactUsAPI3.messageId;
      runEngine.sendMessage("Unit Test", createConttactUsAPI3);
      instance.handleCloseAlert();
      instance.handleSubmitBooking({
        time_slot_id: "string",
        catalogue_id: "string",
        payment_mode: "pay_later",
        appointment_date: "string",
        personal_detail_attributes: {
          full_name: "string",
          full_phone_number: "string",
          email: "string",
          comment: "string"
        },
        billing_address_attributes: {
          country: "string",
          city: "string",
          state: "string",
          flat_number: "string",
          address_line_2: "string",
          address_line_1: "string",
          zip_code: "string"
        }
      });
      instance.apiCall({
        setApiCallId: "submitBookingCallID",
        header: { "Content-Type": "application/json" },
        method: "GET",
        endPoint: "bx_block_catalogue/catalogues",
        body: null
      });
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(AddAppointmentWrapper).toBeTruthy();

      instance.render();
    });
  });
});
