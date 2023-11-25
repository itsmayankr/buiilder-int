import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { closeAlert } from "react-native-customisable-alert";
import { runEngine } from "../../../framework/src/RunEngine";

import {
  PaymentDetailsType,
  PaymentOption,
  PersonalDetailsType
} from "./types";



import { RootStackParamList } from "../../utilities/src/RootStackParamList";
import { NavigationProp } from "@react-navigation/native";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");
export type catalogueItemDetails = {
  attributes: {
    category: { id: string; type: string; attributes: {} };
    description: string;
    discount: number;
    duration: number;
    images: { url: string }[];
    current_date:Date;
    payment_type: string;
    payment_preferences:
      | "pay_online"
      | "pay_in_person"
      | "pay_online_or_in_person"
      | null;
    price: number;
    status: boolean;
    title: string;
    payment_method: "Stripe" | "Ccavenue";

    currency: {
      id: number;
      name: string;
      symbol: string;
    };
  };
  id: string;
  type: string;
};

export interface Props {
  navigation: NavigationProp<RootStackParamList, "BookAppointmentDetails">;
  id: string;
  // Customizable Area Start
  route: {
    params: {
      id: string;
      title: string;
      duration: number;
      price: number;
      currentDate:Date;
      selectedTime: { date: string; time: string; id: number };
      personalDetails: PersonalDetailsType;
      image: string;
      orderID: string;
      orderDate: string;
      success: boolean;
      paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
      currency: catalogueItemDetails["attributes"]["currency"];
      timeZone?: string;
      paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
    };
  };
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  token: string;
  data: [];
  showSummaryDetails: boolean;
  paymentDetails: PaymentDetailsType;
  loading: boolean;
  arrayHolder: [];
  progressType: "1" | "2" | "3";
  paymentType: PaymentOption | string;
  

  // Customizable Area End
}

interface SS {
  id: any;
}

export default class AddAppointmentDetailsController extends BlockComponent<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage)
    ];

    this.state = {
      token: "",
      showSummaryDetails: true,
      data: [],
      paymentDetails: {
        country: "",
        no: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: ""
      },

      paymentType: "payAtLocation",

      progressType: "3",

      loading: false,
      arrayHolder: []
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }
  async componentDidMount() {
    super.componentDidMount();
  }

  changePaymentMethod = () => {
    this.props.navigation.navigate("BookAppointmentPayment", {
      ...this.props.route.params
    });
  };
  handlePressBack = () => {
    this.props.navigation.navigate("HomePageScreen");
  };

  cancelTransaction = () => {
    this.props.navigation.navigate("Catalogue", {});
  };

  handleCloseAlert = () => {
    closeAlert();
  };

  async receive(from: string, message: Message) {
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  // Customizable Area End
}
