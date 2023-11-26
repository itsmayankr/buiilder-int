import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
// import {runEngine} from '../../../../framework/src/RunEngine'
// import {Message} from "../../../../framework/src/Message"

// import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import AddAppointmentPersonal from "../../src/AddAppointmentPersonal";


const mockedCanGoBack = jest.fn().mockReturnValue(true);

const mockedGoBack = jest.fn();

const mockedNavigation = {
  navigate: mockedGoBack,
  canGoBack: mockedCanGoBack,
  goBack: mockedGoBack,
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
    let formikWrapper;

    given("I am a User loading AddAppointmentPersonal", () => {
      AddAppointmentPersonalWrapper = shallow(
        <AddAppointmentPersonal
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
              image: "",
              duration: 0,
              currentDate: new Date(),
              paymentType: null,
              paymentMethod: "Stripe",
              currency: {
                id: 0,
                name: "",
                symbol: "",
              },
              timeZone: undefined,
            },
          }}
        />
      );
      expect(AddAppointmentPersonalWrapper).toBeTruthy();
    });

    when("I navigate to the AddAppointmentPersonal", () => {
      instance = AddAppointmentPersonalWrapper.instance() as AddAppointmentPersonal;

    });

    then("AddAppointmentPersonal will load with out errors", () => {


      let btnComponent2 = AddAppointmentPersonalWrapper.find("Formik")
        .dive()
        .findWhere((node) => node.prop("testID") === "btnBack");

      btnComponent2.simulate("press");


      expect(AddAppointmentPersonalWrapper).toBeTruthy();
      const btnName = AddAppointmentPersonalWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnName");
      btnName.simulate('changeText', { target: { value: 'John Doe' } });
      btnName.simulate('blur');

      const nameError = AddAppointmentPersonalWrapper.find("Formik").dive().find('.nameError');
      expect(nameError.exists()).toBeFalsy();
        

      const btnEmail = AddAppointmentPersonalWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnEmail");
      btnEmail.simulate('changeText', { target: { value: 'example@email.com' } });
      btnEmail.simulate('blur');

      const emailError = AddAppointmentPersonalWrapper.find("Formik").dive().find('.emailError');
      expect(emailError.exists()).toBeFalsy();
        

      const btnPhone = AddAppointmentPersonalWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnPhone");
      btnPhone.simulate('changeText', { target: { value: '9876543218' } });
      btnPhone.simulate('blur');

      const phoneError = AddAppointmentPersonalWrapper.find("Formik").dive().find('.phoneError');
      expect(phoneError.exists()).toBeFalsy();
        

      const btnComment = AddAppointmentPersonalWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnComment");
      btnComment.simulate('changeText', { target: { value: 'John Doe' } });
      btnComment.simulate('blur');

      const commentError = AddAppointmentPersonalWrapper.find("Formik").dive().find('.commentError');
      expect(commentError.exists()).toBeFalsy();


      const btnSubmit = AddAppointmentPersonalWrapper.find("Formik").dive().findWhere(node => node.prop("testID") === "btnSubmit");
      btnSubmit.simulate('press');

    });

    then("I can leave the screen with out errors", () => {
      expect(AddAppointmentPersonalWrapper).toBeTruthy();
    });
  });
});
