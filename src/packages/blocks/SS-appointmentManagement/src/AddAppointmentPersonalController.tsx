import * as yup from "yup";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import { PersonalDetailsType } from "./types";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../utilities/src/RootStackParamList";

// Customizable Area Start
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
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: NavigationProp<RootStackParamList, "BookAppointmentPersonal">;
  id: string;
  // Customizable Area Start
  route: {
    params: {
      id: string;
      selectedTime: { date: string; time: string; id: number };
      title: string;
      price: number;
      image: string;
      duration: number;
      currentDate: Date;
      paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
      paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
      currency: catalogueItemDetails["attributes"]["currency"];

      timeZone?: string;
    };
  };
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  token: string;
  data: [];
  showSummaryDetails: boolean;
  personalDetails: PersonalDetailsType;

  loading: boolean;
  arrayHolder: [];
  progressType: "1" | "2" | "3";

  // Customizable Area End
}

interface SS {
  id: string;
}

export default class AddAppointmentPersonalController extends BlockComponent<
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
      data: [],
      showSummaryDetails: true,
      personalDetails: { name: "", email: "", phone: "", comment: "" },

      progressType: "2",

      loading: false,
      arrayHolder: []
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }
  // Customizable Area Start
  async componentDidMount() {
    super.componentDidMount();
  }

  onPressProceed = (index: string) => {
    const {
      id,
      title,
      duration,
      price,
      image,
      selectedTime,
      paymentType,
      currentDate,
      paymentMethod,
      timeZone,
      currency
    } = this.props.route.params;
    if (index === "2") {
      this.props.navigation.navigate("BookAppointmentPayment", {
        id,
        title,
        duration,
        image,
        price,
        selectedTime,
        personalDetails: this.state.personalDetails,
        paymentType,
        paymentMethod,
        timeZone,
        currentDate,
        currency
      });
    }
  };

  initialPersonalFormValues = {
    name: "",
    email: "",
    phone: "",
    comment: ""
  };

  personalFormValidationSchema = yup
    .object()
    .shape({
      name: yup
        .string()
        .min(4, "Name must be minimum 4 characters")
        .required("Name is required"),
      email: yup.string().required("Email is required"),
      phone: yup.string().required("Mobile is required"),
      comment: yup.string().max(100, "Max 100 characters allowed")
    })
    .test(
      "test-valid",
      "Please enter valid mobile or email",
      function (values: {
        name: string;
        email: string;
        phone: string;
        comment: string;
      }) {
        const mobileRegex = /^[0-9]{9,13}$/;
        let isValidMobile = mobileRegex.test(values.phone);

        if (!isValidMobile) {
          return this.createError({
            message: "Please enter a valid mobile number",
            path: "phone"
          });
        }
        return true;
      }
    )
    .test(
      "test-valid",
      "Please enter valid email",
      function (values: {
        name: string;
        email: string;
        phone: string;
        comment: string;
      }) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValidEmail = emailRegex.test(values.email);

        if (!isValidEmail) {
          return this.createError({
            message: "Please enter a valid email address",
            path: "email"
          });
        }
        return true;
      }
    );
  // Customizable Area End
  async receive(from: string, message: Message) {
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  // Customizable Area End
}
