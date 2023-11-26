import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import * as helpers from "../../../../framework/src/Helpers";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

import React from "react";
import AddAppointment from "../../src/AddAppointment";
import moment from "moment";

const mockedCanGoBack = jest.fn().mockReturnValue(true);

const mockedGoBack = jest.fn();

const mockAddListener = jest.fn((event, callback) => {
  if (event === "focus") {
    // Simulate calling the callback when the 'focus' event is triggered
    callback();
  }
});

const mockedNavigation = {
  navigate: mockedGoBack,
  canGoBack: mockedCanGoBack,
  goBack: mockedGoBack,
  addListener: mockAddListener,
};

jest.mock("react-native-calendars", () => {
  const React = require("react");
  const MockCalendar = (props: any) => <div>Mock Calendar</div>;
  const LocaleConfig = {
    locales: {
      en: {}, // Provide an empty object or mock properties as needed
    },
    defaultLocale: "en",
  };

  return {
    Calendar: MockCalendar,
    LocaleConfig: LocaleConfig,
  };
});

const feature = loadFeature("./__tests__/features/AddAppointment.feature");

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AddAppointment", ({ given, when, then }) => {
    let AddAppointmentWrapper: ShallowWrapper;
    let instance: AddAppointment;

    given("I am a User loading AddAppointment", () => {
      AddAppointmentWrapper = shallow(
        <AddAppointment
          navigation={mockedNavigation as any}
          id={""}
          route={{
            params: {
              id: "",
              title: "",
              price: 0,
              currentDate: new Date(),
              duration: 0,
              image: "",
              paymentType: null,
              paymentMethod: "Stripe",
              refresh: undefined,
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
            },
          }}
        />
      );
    });

    when("I navigate to the AddAppointment", () => {
      instance = AddAppointmentWrapper.instance() as AddAppointment;

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
          data: {
            attributes: {
              time_slots: [
                {
                  id: 235235235,
                  slot_start_time: new Date(),
                  slot_end_time: moment(new Date())
                    .add(15, "m")
                    .toDate(),
                  is_available: true,
                },
              ],
            },
            headings: "headingString",
            contents: "content",
            created_at: 2452662,
          },
          meta: {
            time_zone_short: "UTC",
          },
        }
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1.messageId
      );
      instance.getDailyTimeSlotsCallId = magLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI1);
    });

    then("AddAppointment will load with out errors", () => {
      // Goback buttom Test
      let goBackBtn = AddAppointmentWrapper.findWhere(
        (node) => node.prop("testID") === "btnBack"
      );

      expect(goBackBtn).toBeTruthy();
      goBackBtn.simulate("press");

      // Proceed buttom Test
      let proceedBtn = AddAppointmentWrapper.findWhere(
        (node) => node.prop("data-testID") === "proceedBtn"
      );

      expect(proceedBtn).toBeTruthy();
      proceedBtn.simulate("press");
    });

    then("I can leave the screen with out errors", () => {
      const list = AddAppointmentWrapper.findWhere(
        (node) => node.prop("testID") === "availableTimesList"
      );

      const render_item = list.renderProp("renderItem")({
        item: {
          id: 235235235,
          slot_start_time: new Date(),
          slot_end_time: moment(new Date())
            .add(15, "m")
            .toDate(),
          is_available: true,
        },
        index: 0,
      });
      const key_extractor = list.renderProp("keyExtractor")(
        {
          item: {
            id: 235235235,
            slot_start_time: new Date(),
            slot_end_time: moment(new Date())
              .add(15, "m")
              .toDate(),
            is_available: true,
          },
        },
        0
      );
      // selectTimeSlot buttom Test
      // Find the button by its testID
      let timeSlotButton = render_item.findWhere(
        (node) => node.prop("testID") === "selectTimeSlotBtn"
      );

      // Simulate a press event
      timeSlotButton.first().simulate("press");
      expect(render_item).toBeTruthy();
      expect(key_extractor).toBeTruthy();

      // Proceed buttom Test
      let proceedBtn = AddAppointmentWrapper.findWhere(
        (node) => node.prop("data-testID") === "proceedBtn"
      );

      expect(proceedBtn).toBeTruthy();
      proceedBtn.simulate("press");
    });

    then("I can change date from calander", () => {
      // Proceed buttom Test
      let CalanderComp = AddAppointmentWrapper.findWhere(
        (node) => node.prop("data-testID") === "CalanderComp"
      );

      expect(CalanderComp).toBeTruthy();
      CalanderComp.simulate("dayPress", {
        dateString: moment().toISOString(),
      });
    });
    then("I can change calander arrow direction", () => {
      const list = AddAppointmentWrapper.findWhere(
        (node) => node.prop("data-testID") === "CalanderComp"
      );

      const render_arrow = list.renderProp("renderArrow")('left');

      expect(render_arrow).toBeTruthy();
    });

    then("I will get a error if there is no daily time slot", () => {
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
          errors: [
            {
              message: "Time slot is already booked",
            },
          ],
        }
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1.messageId
      );
      instance.getDailyTimeSlotsCallId = magLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI1);
    });

    then("I will get a error if there is no daily time slots", () => {
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
          message: "Time slot is already booked",
        }
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1.messageId
      );
      instance.getDailyTimeSlotsCallId = magLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI1);
    });
  });
});
