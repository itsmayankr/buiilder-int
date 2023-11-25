import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import * as helpers from "../../../../framework/src/Helpers";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../../framework/src/Messages/MessageEnum";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

import React from "react";
import AddAppointment from "../../src/AddAppointment";
const navigation = require("react-navigation");
const screenProps = {
  navigation: navigation,
  id: "AddAppointment",
  route: {
    params: {
      id: "string",
      title: "string",
      price: 11,
      duration: 15,
      image: "string",

      paymentType: null
    }
  }
};

const createTestProps = (props: Object) => ({
  navigation: {
    addListener: jest.fn().mockImplementation((event, callback) => {
      if (event === "willFocus") {
        callback();
      }
    }),
    navigate: jest.fn(),

    dispatch: jest.fn(),
    replace: jest.fn(),
    trim: jest.fn(),
    props: jest.fn(),
    Alert: jest.fn(),
    filter: jest.fn()
  },
  ...props
});

const mockedCanGoBack = jest.fn().mockReturnValue(true);

const mockedGoBack = jest.fn();

const mockedNavigation = {
  canGoBack: mockedCanGoBack,
  goBack: mockedGoBack
};

const feature = loadFeature("./__tests__/features/AddAppointment.feature");

defineFeature(feature, (test) => {
  let props: any;
  beforeEach(() => {
    jest.resetModules();

    props = createTestProps(screenProps);
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AddAppointment", ({ given, when, then }) => {
    let filterBlocks: ShallowWrapper;
    let instance: AddAppointment;
    let instance2: AddAppointment;

    given("I am a User loading AddAppointment", () => {
      filterBlocks = shallow(
        <AddAppointment {...screenProps} navigation={mockedNavigation as any} />
      );
      expect(filterBlocks).toBeTruthy();
      instance = filterBlocks.instance() as AddAppointment;
      instance2 = filterBlocks.instance() as AddAppointment;
      instance.setState({
        paymentType: "payNow"
      });
      instance2.setState({
        selectedTimeSlot: undefined,
        paymentType: "payAtLocation",
        availableTimes: [
          {
            id: 1,
            slot_start_time: "123",
            slot_end_time: "123",
            is_available: true
          }
        ]
      });
      const magLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      magLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI
      );
      magLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          status: 500
        }
      );
      magLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI.messageId
      );
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI);
      const magLogInSucessRestAPI1 = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: [
            {
              headings: "headingString",
              contents: "content",
              created_at: 2452662
            }
          ]
        }
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1.messageId
      );
      instance.getDailyTimeSlotsCallId = magLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI1);
      instance.handlePressBack();
      instance.onPressProceed();

      instance.props.route.params.id === "12";
      instance.componentDidMount();
      instance.changeDate("2022-22-02");
    });

    when("I navigate to the AddAppointment", () => {
      instance = filterBlocks.instance() as AddAppointment;

      instance2.onPressProceed();
    });

    then("AddAppointment will load with out errors", () => {
      expect(filterBlocks).toBeTruthy();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(filterBlocks).toBeTruthy();
    });
  });
});
