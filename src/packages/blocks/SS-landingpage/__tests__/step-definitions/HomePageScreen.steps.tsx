import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { _ } from "../../../../framework/src/IBlock";
import HomePageScreen from "../../src/HomePageScreen";
import { expect } from "@jest/globals";

const mockRNDeviceInfo = require("../../../core/node_modules/react-native-device-info/jest/react-native-device-info-mock.js");
const navigation = require("react-navigation");
jest.useFakeTimers();

// this should work
jest.mock("react-native-device-info", () => () => jest.fn());

// or you can try this
//jest.mock('react-native-device-info', () => ({

//default: jest.fn(),
const initialNavigation = navigation;
const screenProps = {
  navigation: initialNavigation,
  id__: "homepage",
};

const feature = loadFeature(
  "./__tests__/features/HomePageScreen-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.doMock("react-native-device-info", () => mockRNDeviceInfo);

    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to HomePage", ({ given, when, then }) => {
    let HomePageWrapper: ShallowWrapper;
    let instance: HomePageScreen;

    given("I am a User loading HomePage", () => {
      HomePageWrapper = shallow(<HomePageScreen {...screenProps} />);
    });

    when("I navigate to the HomePage", () => {
      instance = HomePageWrapper.instance() as HomePageScreen;

      instance.setState({
        brandInformation: {
          id: 1,
          type: "string",
          attributes: {
            id: 1,
            name: "string",
            testimonial: true,
            header: {
              id: 1,
              store_name: "string",
              image: {
                url: "string",
                id: 1,
              },
            },
            footer: {
              id: 1,
              copy_right_text: "string",
              phone_number: 1,
              country_code: "string",
              social_media: {
                facebook: {
                  selected: true,
                  url: "string",
                },
                twitter: {
                  selected: true,
                  url: "string",
                },
                instagram: {
                  selected: true,
                  url: "string",
                },
                youtube: {
                  selected: true,
                  url: "string",
                },
              },
              download_apps: {
                android: {
                  selected: true,
                  url: "string",
                },
                ios: {
                  selected: true,
                  url: "string",
                },
              },
            },
            banners: [
              {
                id: 1,
                redirect_url: "string",
                image: {
                  url: "string",
                  id: 1,
                },
              },
            ],
          },
        },
        topServices: [
          {
            id: "string",
            type: "string",
            attributes: {
              title: "string",
              description: "string",
              price: 1,
              discount: 1,
              duration: 1,
              status: true,

              category: {
                id: "string",
                name: "string",
              },
              images: [{ url: "string", id: 1 }],
            },
          },
        ],
      });

      instance.formatOpeningHoursObject([
        {
          id: 1,
          start_time: new Date(),
          end_time: new Date(),
          week_day: "Wednesday",
        },
      ]);

      const tokenMsg: Message = new Message(
        getName(MessageEnum.SessionResponseMessage)
      );
      tokenMsg.addData(getName(MessageEnum.SessionResponseToken), "TOKEN");
      runEngine.sendMessage("Unit Test", tokenMsg);

      const getConttactUsAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
    });

    then("HomePage will load with out errors", () => {
      expect(
        instance.bannerItem(
          {
            id: 0,
            redirect_url: "test",
            image: { url: "testURL", id: 1 },
          },
          1
        )
      ).toBeTruthy();

      expect(
        instance.heroBanner({
          id: 0,
          redirect_url: "test",
          image: { url: "testURL", id: 1 },
        })
      ).toBeTruthy();

      expect(
        instance.renderItem({
          item: { rating: 1, description: "test", author: "test" },
          index: 1,
        })
      ).toBeTruthy();

      expect(HomePageWrapper).toBeTruthy();

      instance.fetchSettingsRequest();
      instance.fetchBrandInformationRequest();
      instance.apiCall({
        setApiCallId: "getBrandInfoCallID",
        header: { "Content-Type": "application/json" },
        method: "GET",
        endPoint: "catalogue/brands",
        body: null,
      });
      let bannerButtonComponent = HomePageWrapper.findWhere(
        (node) => node.prop("testID") === "testBanner"
      );
      bannerButtonComponent.simulate("onPress");
      let viewVallButtonComponent = HomePageWrapper.findWhere(
        (node) => node.prop("testID") === "viewAllBTN"
      );
      expect(viewVallButtonComponent).toBeDefined;

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
          status: 500,
        }
      );
      magLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI.messageId
      );
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI);
      //
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
              created_at: 2452662,
            },
          ],
        }
      );
      magLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        magLogInSucessRestAPI1.messageId
      );
      instance.fetchBrandInformationCallId = magLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", magLogInSucessRestAPI1);
      //
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          status: 500,
        }
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
      const msgLogInSucessRestAPI1 = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI1
      );
      msgLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: [
            {
              headings: "headingString",
              contents: "content",
              created_at: 2452662,
            },
          ],
        }
      );
      msgLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI1.messageId
      );
      instance.fetchSettingsCallId = msgLogInSucessRestAPI1.messageId;
      instance.fetchTopServicesCallId = msgLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI1);
    });

    then("back button will work with out errors", () => {
      let buttonComponent = HomePageWrapper.findWhere(
        (node) => node.prop("testID") === "backBtn"
      );

      expect(buttonComponent).toBeTruthy();

      let buttonComponent2 = HomePageWrapper.findWhere(
        (node) => node.prop("testID") === "Background"
      );
      expect(buttonComponent2).toBeTruthy();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(HomePageWrapper).toBeTruthy();
    });
  });
});
