import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import CfApiIntegrationMediaHouse3 from "../../src/CfApiIntegrationMediaHouse3.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CfApiIntegrationMediaHouse3",
};

const feature = loadFeature(
  "./__tests__/features/CfApiIntegrationMediaHouse3-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to CfApiIntegrationMediaHouse3", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: CfApiIntegrationMediaHouse3;

    given("I am a User loading CfApiIntegrationMediaHouse3", () => {
      exampleBlockA = shallow(<CfApiIntegrationMediaHouse3 {...screenProps} />);
    });

    when("I navigate to the CfApiIntegrationMediaHouse3", () => {
      instance = exampleBlockA.instance() as CfApiIntegrationMediaHouse3;
    });

    then("CfApiIntegrationMediaHouse3 will load with out errors", () => {
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