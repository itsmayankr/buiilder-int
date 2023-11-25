import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import CustomAdvertisements from "../../src/CustomAdvertisements.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CustomAdvertisements",
};

const feature = loadFeature(
  "./__tests__/features/CustomAdvertisements-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to CustomAdvertisements", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: CustomAdvertisements;

    given("I am a User loading CustomAdvertisements", () => {
      exampleBlockA = shallow(<CustomAdvertisements {...screenProps} />);
    });

    when("I navigate to the CustomAdvertisements", () => {
      instance = exampleBlockA.instance() as CustomAdvertisements;
    });

    then("CustomAdvertisements will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    then("I can enter text with out errors", () => {
      let textInputComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "txtInput"
      );
      const event = {
        preventDefault() {},
        target: { value: "hello@aol.com" },
      };
      textInputComponent.simulate("change", event);
    });

    then("I can select the button with with out errors", () => {
      let buttonComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "btnAddExample"
      );
      buttonComponent.simulate("press");
      expect(exampleBlockA).toBeTruthy();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
    });
  });
});
