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
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";



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

jest.mock('@react-native-community/async-storage-backend-legacy', () => {
  return jest.fn().mockImplementation(() => {
    return {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      // ... other methods you might use
    };
  });
});

jest.mock('@react-native-community/async-storage', () => {
  return {
    create: jest.fn().mockImplementation(() => {
      return {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
        // ... other methods you might use
      };
    }),
  };
});

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
        <AddAppointmentPayment
          navigation={mockedNavigation as any}
          id={""}
          route={{
            params: {
              id: "",
              selectedTime: {
                date: "",
                time: "",
                id: 0,
              },
              title: "",
              price: 0,
              duration: 0,
              image: "",
              personalDetails: {
                name: "",
                email: "",
                phone: "",
                comment: "",
              },
              paymentType: 'pay_in_person',
              paymentMethod: "Stripe",
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
              currentDate: new Date(),
              timeZone: undefined,
            },
          }}
        />
      );
      expect(AddAppointmentWrapper).toBeTruthy();
      instance = AddAppointmentWrapper.instance() as AddAppointmentPayment;
    });

    when("I navigate to the AddAppointmentPayment", () => {
      instance = AddAppointmentWrapper.instance() as AddAppointmentPayment;
    });

    then("AddAppointmentPayment will load with out errors", () => {
   
      const txtCountry = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtCountry");
      txtCountry.simulate('changeText', { target: { value: 'India' } });
      txtCountry.simulate('blur');

      const countryError = AddAppointmentWrapper.find("Formik").dive().find('.countryError');
      expect(countryError.exists()).toBeFalsy();

      const txtNo = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtNo");
      txtNo.simulate('changeText', { target: { value: '2345678908765' } });
      txtNo.simulate('blur');

      const noError = AddAppointmentWrapper.find("Formik").dive().find('.noError');
      expect(noError.exists()).toBeFalsy();

      const txtAddress1 = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtAddress1");
      txtAddress1.simulate('changeText', { target: { value: ' yjhkb  bjk jukb uy g' } });
      txtAddress1.simulate('blur');

      const addressLine1Error = AddAppointmentWrapper.find("Formik").dive().find('.addressLine1Error');
      expect(addressLine1Error.exists()).toBeFalsy();


      const txtAddress2 = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtAddress2");
      txtAddress2.simulate('changeText', { target: { value: ' hivb kjb huv jhb hjb n' } });
      txtAddress2.simulate('blur');

      const addressLine2Error = AddAppointmentWrapper.find("Formik").dive().find('.addressLine2Error');
      expect(addressLine2Error.exists()).toBeFalsy();


      const txtCity = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtCity");
      txtCity.simulate('changeText', { target: { value: 'delhi' } });
      txtCity.simulate('blur');

      const cityError = AddAppointmentWrapper.find("Formik").dive().find('.cityError');
      expect(cityError.exists()).toBeFalsy();

      const txtState = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtState");
      txtState.simulate('changeText', { target: { value: 'new delhi' } });
      txtState.simulate('blur');

      const stateError = AddAppointmentWrapper.find("Formik").dive().find('.stateError');
      expect(stateError.exists()).toBeFalsy();

      const txtZip = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "txtZip");
      txtZip.simulate('changeText', { target: { value: '5473453' } });
      txtZip.simulate('blur');

      const zipError = AddAppointmentWrapper.find("Formik").dive().find('.zipError');
      expect(zipError.exists()).toBeFalsy();


      const btnSubmit = AddAppointmentWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnSubmit");
      btnSubmit.simulate('press');


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
    });

    then("I can leave the screen with out errors", () => {
      expect(AddAppointmentWrapper).toBeTruthy();
    });
  });
});
