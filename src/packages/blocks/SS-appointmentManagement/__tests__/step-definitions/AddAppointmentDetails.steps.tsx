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
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import AddAppointmentDetails from "../../src/AddAppointmentDetails";

const mockedCanGoBack = jest.fn().mockReturnValue(true);

const mockedGoBack = jest.fn();

const mockedNavigation = {
  navigate: mockedGoBack,
  canGoBack: mockedCanGoBack,
  goBack: mockedGoBack,
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
    let AddAppointmentDetailsWrapper: ShallowWrapper;
    let instance: AddAppointmentDetails;

    given("I am a User loading AddAppointmentDetails", () => {
      AddAppointmentDetailsWrapper = shallow(
        <AddAppointmentDetails
          navigation={mockedNavigation as any}
          id={""}
          route={{
            params: {
              id: "",
              title: "Title of Appointment",
              duration: 0,
              price: 0,
              currentDate: new Date(),
              selectedTime: {
                date: "",
                time: "",
                id: 0,
              },
              personalDetails: {
                name: "firstName",
                email: "example@email.com",
                phone: "123456789",
                comment: "Comment message",
              },
              image: "",
              orderID: "",
              orderDate: "",
              success: true,
              paymentType: 'pay_online',
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
              timeZone: 'Asia/Kolkata',
              paymentMethod: "Stripe",
            },
          }}
        />
      );
      expect(AddAppointmentDetailsWrapper).toBeTruthy();
    });

    when("I navigate to the AddAppointmentDetails", () => {
      instance = AddAppointmentDetailsWrapper.instance() as AddAppointmentDetails;
    });

    then("I can navigate back to previous screen", () => {
      let btnBack = AddAppointmentDetailsWrapper.findWhere(
        (node) => node.prop("testID") === "btnBack"
      );

      btnBack.simulate("press");
    });

  });
  test("User navigates to AddAppointmentDetails with out success", ({
    given,
    when,
    then,
  }) => {
    let AddAppointmentDetailsWrapper: ShallowWrapper;
    let instance: AddAppointmentDetails;

    given("I am a User loading AddAppointmentDetails", () => {
      AddAppointmentDetailsWrapper = shallow(
        <AddAppointmentDetails
          navigation={mockedNavigation as any}
          id={""}
          route={{
            params: {
              id: "",
              title: "",
              duration: 0,
              price: 0,
              currentDate: new Date(),
              selectedTime: {
                date: "",
                time: "",
                id: 0,
              },
              personalDetails: {
                name: "",
                email: "",
                phone: "",
                comment: "",
              },
              image: "",
              orderID: "",
              orderDate: "",
              success: false,
              paymentType: null,
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
              timeZone: undefined,
              paymentMethod: "Stripe",
            },
          }}
        />
      );
      expect(AddAppointmentDetailsWrapper).toBeTruthy();
    });

    when("I navigate to the AddAppointmentDetails", () => {
      instance = AddAppointmentDetailsWrapper.instance() as AddAppointmentDetails;
    });

    then("I can change the payment method", () => {
      let changePaymentMethodBtn = AddAppointmentDetailsWrapper.findWhere(
        (node) => node.prop("testID") === "changePaymentMethodBtn"
      );

      changePaymentMethodBtn.simulate("press"); 
    });

    then("I can cancel the transaction", () => {
      let cancelTransactionBtn = AddAppointmentDetailsWrapper.findWhere(
        (node) => node.prop("testID") === "cancelTransactionBtn"
      );

      cancelTransactionBtn.simulate("press"); 
    });
  });
  test("User navigates to AddAppointmentDetails without proper data", ({ given, when, then }) => {
    let AddAppointmentDetailsWrapper: ShallowWrapper;
    let instance: AddAppointmentDetails;

    given("I am a User loading AddAppointmentDetails", () => {
      AddAppointmentDetailsWrapper = shallow(
        <AddAppointmentDetails
          navigation={mockedNavigation as any}
          id={""}
          route={{
            params: {
              id: "",
              title: "Title of Appointment Title of Appointment Title of Appointment Title of Appointment Title of Appointment Title of Appointment Title of Appointment ",
              duration: 0,
              price: 0,
              currentDate: new Date(),
              selectedTime: {
                date: "",
                time: "",
                id: 0,
              },
              personalDetails: {
                name: "firstName",
                email: "example@email.com",
                phone: "123456789",
                comment: "Comment message",
              },
              image: "",
              orderID: "",
              orderDate: "",
              success: true,
              paymentType: null,
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
              timeZone: undefined,
              paymentMethod: "Stripe",
            },
          }}
        />
      );
      expect(AddAppointmentDetailsWrapper).toBeTruthy();
    });

    when("I navigate to the AddAppointmentDetails", () => {
      instance = AddAppointmentDetailsWrapper.instance() as AddAppointmentDetails;
    });

    then("I can navigate back to previous screen", () => {
      let btnBack = AddAppointmentDetailsWrapper.findWhere(
        (node) => node.prop("testID") === "btnBack"
      );

      btnBack.simulate("press");
    });
  });
});
