import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import * as helpers from "../../../../framework/src/Helpers";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

// import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../../framework/src/Messages/MessageEnum";
import AddAppointmentDetails from "../../src/AddAppointmentDetails";

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
  id: "AddAppointmentDetails",
  route: {
    params: {
      orderID: "111234",
      orderDate: "12-12-2222",
      success: true,
      personalDetails: {
        name: "TEST",
        email: "TEST",
        phone: "TEST",
        comment: "TEST"
      },
      selectedTime: { date: "", time: "", id: 12 },
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
  "./__tests__/features/AddAppointmentDetails.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AddAppointmentDetails", ({ given, when, then }) => {
    let filterBlocks: ShallowWrapper;
    let instance: AddAppointmentDetails;

    given("I am a User loading AddAppointmentDetails", () => {
      filterBlocks = shallow(<AddAppointmentDetails {...screenProps} />);
      expect(filterBlocks).toBeTruthy();
      instance = filterBlocks.instance() as AddAppointmentDetails;
    });

    when("I navigate to the AddAppointmentDetails", () => {
      instance = filterBlocks.instance() as AddAppointmentDetails;
    });

    then("AddAppointmentDetails will load with out errors", () => {
      expect(filterBlocks).toBeTruthy();

      instance.changePaymentMethod(), instance.cancelTransaction();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(filterBlocks).toBeTruthy();
    });
  });
});
