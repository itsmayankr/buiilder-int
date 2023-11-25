// Customizable Area Start
import moment from "moment";
import { Linking, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import Toast from "react-native-toast-message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

import { runEngine } from "../../../framework/src/RunEngine";
import { topCatalogueItem } from "../../catalogue/src/utils/types";
import {
  BrandInformationType,
  IBannerItem,
  IGalleryItem,
  IHowItWorksItem,
  ITestimonialItem,
  SettingsType
} from "./utils/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../utilities/src/RootStackParamList";

// Customizable Area End

const configJSON = require("./config");

export interface Props {
  navigation: NavigationProp<RootStackParamList, "HomePageScreen">;
  id__: string;
  // Customizable Area Start

  // Customizable Area End
}

interface S {
  // Customizable Area Start

  bannerItems: IBannerItem[];
  topServices?: topCatalogueItem[];
  brandInformation?: BrandInformationType;

  howItWorks: IHowItWorksItem[];
  settings?: SettingsType;
  gallery: IGalleryItem[];
  testimonials: ITestimonialItem[];
  isEmulator: boolean;
  topServicesLoading: boolean;
  brandInfoLoading: boolean;
  settingsLoading: boolean;
  location: {
    address: {
      street: string;
      region: string;
      city: string;
      country: string;
      postCode: string;
    };

    openingHours: {
      day: string;
      open: string;
      close: string;
    }[];
    geo: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
  };
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id__: string;
  // Customizable Area End
}

export default class HomePageScreenController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiPhoneLoginCallId: string;
  labelTitle: string;
  private readonly errorTitle = "Error";
  fetchTopServicesCallId: string;

  fetchBrandInformationCallId: string;
  fetchSettingsCallId: string;

  // Customizable Area End

  constructor(props: Props) {
    super(props);

    // Customizable Area Start
    this.receive = this.receive.bind(this);
    this.fetchTopServicesCallId = "";

    this.apiPhoneLoginCallId = "";
    this.fetchBrandInformationCallId = "";
    this.fetchSettingsCallId = "";
    this.subScribedMessages = [
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials)
    ];

    this.state = {
      topServicesLoading: false,
      brandInfoLoading: false,
      settingsLoading: false,
      isEmulator: false,
      settings: undefined,
      bannerItems: [],
      topServices: undefined,

      howItWorks: [],
      gallery: [],
      testimonials: [
        {
          author: "John B",
          rating: 4.3,
          description:
            "Description here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
          author: "Lee L",
          rating: 3.5,
          description:
            "Description here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
          author: "Fabian A",
          rating: 5,
          description:
            "Description here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
      ],
      location: {
        address: {
          street: "",
          region: "",
          city: "",
          country: "",
          postCode: ""
        },

        openingHours: [],
        geo: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      }
    };

    this.labelTitle = configJSON.labelTitle;
    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
    // Customizable Area Start
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    this.fetchTopServicesRequest();
    this.fetchSettingsRequest();
    this.fetchBrandInformationRequest();
    this.checkEmulator();

    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      let errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );
      if (responseJson && responseJson.errors && responseJson.errors.length) {
        this.handleErrorResponse(responseJson.errors);
      }

      if (apiRequestCallId === this.fetchTopServicesCallId) {
        this.setState({ topServicesLoading: false });
        if (responseJson && responseJson.data) {
          this.setState({
            topServices: responseJson.data
          });
        } 
        this.parseApiCatchErrorResponse(errorReponse);
      }

      if (apiRequestCallId === this.fetchSettingsCallId) {
        this.setState({ settingsLoading: false });
        if (responseJson && responseJson.data) {
          this.setState({
            settings: responseJson.data
          });
        } 
        this.parseApiCatchErrorResponse(errorReponse);
      }

      if (apiRequestCallId === this.fetchBrandInformationCallId) {
        this.setState({ brandInfoLoading: false });
        if (responseJson && responseJson.data) {
          this.setState({
            brandInformation: responseJson.data
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  onPressViewAllServices = () =>
    this.props.navigation.navigate("Catalogue", {});

  checkEmulator = () => {
    return DeviceInfo.isEmulator().then(
      (value) =>
        value && Platform.OS === "ios" && this.setState({ isEmulator: true })
    );
  };

  formatOpeningHoursObject = (
    object: SettingsType["attributes"]["opening_hours"]
  ) => {
    return object.map((item, index) => {
      return {
        day: moment(item.week_day, "dddd").format("ddd"),
        open: moment(item.start_time).format("hh:mm A"),
        close: moment(item.end_time).format("hh:mm A")
      };
    });
  };

  handleErrorResponse = (errors: { [key: string]: string }[]) => {
    Toast.show({
      type: "error",
      text1: Object.values(errors[0])[0] || "An error has occured"
    });
  };

  fetchTopServicesRequest = async () => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const apiEndPoint = `bx_block_catalogue/catalogues/top_services`;

    this.fetchTopServicesCallId = await this.apiCall({
      setApiCallId: "getTopServicesCallID",
      header,
      method: configJSON.apiMethodTypeGet,
      endPoint: apiEndPoint,
      body: null
    });
  };
  onPressBanner = (link: string) => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link);
      } else {
      }
    });
  };

  handlePressMap = () => {
    this.state.settings &&
      this.state.settings.attributes &&
      this.state.settings.attributes.location_url &&
      this.onPressMap(this.state.settings?.attributes.location_url);
  };
  onPressMap = (link?: string) => {
    if (link) {
      Linking.canOpenURL(link).then((supported) => {
        if (supported) {
          Linking.openURL(link);
        } else {
        }
      });
    }
  };

  fetchBrandInformationRequest = async () => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const apiEndPoint = `catalogue/brands`;

    this.fetchBrandInformationCallId = await this.apiCall({
      setApiCallId: "getBrandInfoCallID",
      header,
      method: configJSON.apiMethodTypeGet,
      endPoint: apiEndPoint,
      body: null
    });
  };
  fetchSettingsRequest = async () => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const apiEndPoint = `bx_block_settings/common_settings`;

    this.fetchSettingsCallId = await this.apiCall({
      setApiCallId: "getSettingsCallID",
      header,
      method: configJSON.apiMethodTypeGet,
      endPoint: apiEndPoint,
      body: null
    });
  };

  apiCall = async (data: {
    header: {};
    method: string;
    endPoint: string;
    body: {} | null;
    setApiCallId: string;
  }) => {
    this.setState({ topServicesLoading: true });

    const { header, method, endPoint, body } = data;
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `${endPoint}`
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        body
      );

    runEngine.sendMessage(requestMessage.id, requestMessage);

    return requestMessage.messageId;
  };

  // Customizable Area End
}
