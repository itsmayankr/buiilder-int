// Customizable Area Start
import moment from "moment";
import Toast from "react-native-toast-message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { COLORS } from "../../utilities/src/Globals";
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";


import {
  PaymentDetailsType,
  PaymentOption,
  PersonalDetailsType,
  SelectablePaymentOption
} from "./types";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../utilities/src/RootStackParamList";


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

export const configJSON = require("./config");
// Customizable Area End
export interface Props {
  navigation: NavigationProp<RootStackParamList, "BookAppointment">;
  id: string;
  // Customizable Area Start
  route: {
    params: {
      id: string;
      title: string;
      price: number;
      currentDate:Date;
      duration: number;
      image: string;
      paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
      paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
      refresh?: boolean;
      currency: catalogueItemDetails["attributes"]["currency"];

    };
  };
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  token: string;
  data: [];
  timeZone?: string;
  currentMonth: string | Date;
  showSummaryDetails: boolean;
  selectedTimeSlot?: { date: string; time: string; id: number };
  selected_date: {
    [date: string]: {
      selected: boolean;
      disableTouchEvent: boolean;
      selectedColor: string;
      selectedTextColor: string;
    };
  };
  personalDetails: PersonalDetailsType;
  availableTimes: {
    id: number;
    slot_start_time: string;
    slot_end_time: string;
    is_available: boolean;
  }[];
  paymentDetails: PaymentDetailsType;
  loading: boolean;
  arrayHolder: [];
  message: string;
  progressType: "1" | "2" | "3";
  paymentType: PaymentOption | string;

  // Customizable Area End
}

interface SS {
  id: string;
}

export default class AddAppointmentController extends BlockComponent<
  Props,
  S,
  SS
> {
  getDailyTimeSlotsCallId: string;
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

    this.getDailyTimeSlotsCallId = "";
    this.state = {
      token: "",
      availableTimes: [],
      data: [],
      message: "",
      showSummaryDetails: true,
      paymentDetails: {
        country: "",
        no: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: ""
      },
      personalDetails: { name: "", email: "", phone: "", comment: "" },
      paymentType: "payAtLocation",
      currentMonth: new Date(),
      selectedTimeSlot: undefined,
      progressType: "1",
      selected_date: {},
      loading: false,
      arrayHolder: []
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  // Customizable Area Start
  async componentDidMount() {
    super.componentDidMount();
    this.getToken();
    this.props.navigation.addListener("focus", () => {
      this.setState({
        selected_date: {
          [moment.utc(this.props.route.params.currentDate).format("YYYY-MM-DD")]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: COLORS.purple,
            selectedTextColor: COLORS.white
          }
        }
      });
    });
  }
  componentDidUpdate = (prevProps: Props, prevState: S) => {
    if (this.state.selected_date !== prevState.selected_date) {
      this.setState({ selectedTimeSlot: undefined });
      this.getDailyTimeSlotsRequest(
        Object.keys(this.state.selected_date)[0],
        this.props.route.params.id
      );
    }
  };

  getToken = () => {
    const msgs: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msgs);
  };
  handlePressBack = () => this.props.navigation.goBack();
  onPressProceed = () => {
    const { id, title, duration, price, image, paymentType, paymentMethod,currency,currentDate } =
    
      this.props.route.params;

    if (!this.state.selectedTimeSlot) {
      Toast.show({
        type: "error",
        text1: "Please select appointment date and time!"
      });
    } else {
      this.props.navigation.navigate("BookAppointmentPersonal", {
        id,
        title,
        duration,
        price,
        image,
        selectedTime: this.state.selectedTimeSlot,
        paymentType,
        paymentMethod,
        timeZone: this.state.timeZone,
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

  paymentInitialFormValues = {
    country: "",
    no: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: ""
  };
  paymentOptions: SelectablePaymentOption[] = [
    { label: "Pay now", value: "payNow" },
    { label: "Pay later at location", value: "payAtLocation" }
  ];

  changeDate = (date: string) => {
    this.setState({
      selected_date: {
        [date]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: COLORS.purple,
          selectedTextColor: COLORS.white
        }
      }
    });
  };

  selectTimeSlot = ({
    id,
    slot_start_time,
    slot_end_time,
    is_available
  }: {
    id: number;
    slot_start_time: string;
    slot_end_time: string;
    is_available: boolean;
  }) => {
    const date = moment(Object.keys(this.state.selected_date)[0], "YYYY-MM-DD");
    this.setState({
      selectedTimeSlot: {
        date: `${date.format("dddd")}, ${date.format("Do MMMM YYYY")}`,
        time: slot_start_time,
        id: id
      }
    });
  };

  handleErrorResponse = (errors: { [key: string]: string }[]) => {
    Toast.show({
      type: "error",
      text1: Object.values(errors[0])[0] || "An error has occured"
    });
  };
  handleResponse = (responseJson: {
    data: {
      attributes: {
        time_slots: {
          id: number;
          slot_start_time: string;
          slot_end_time: string;
          is_available: boolean;
        }[];
      };
    };
    message?: string;
    meta: {
      message: string;
      time_zone: string;
      time_zone_short: string;
    };
  }) => {
    if (responseJson && responseJson.data) {
      if (
        responseJson.data.attributes &&
        responseJson.data.attributes.time_slots
      ) {
        this.setState({
          availableTimes: responseJson.data.attributes.time_slots,
          timeZone: responseJson.meta?.time_zone_short
        });
      }
    } else if (responseJson.message) {
      this.setState({
        message: responseJson.message,
        availableTimes: [],
        selectedTimeSlot: undefined
      });
    }
  };
// Customizable Area End
  async receive(from: string, message: Message) {
    // Customizable Area Start
    this.setState({ loading: false });
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

      if (apiRequestCallId === this.getDailyTimeSlotsCallId) {
        this.handleResponse(responseJson);
      }
      this.parseApiCatchErrorResponse(errorReponse);
    }

    // Customizable Area End
  }
  apiCall = async (data: {
    header: {};
    method: string;
    endPoint: string;
    body: {} | null;
    setApiCallId: string;
  }) => {
    this.setState({ loading: true });

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

  getDailyTimeSlotsRequest = async (date: string, idNo: string) => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const apiEndPoint = `bx_block_appointment_management/availabilities?catalogue_id=${idNo}&availability_date=${date}`;

    this.getDailyTimeSlotsCallId = await this.apiCall({
      setApiCallId: "getDailyTimeSlotsCallID",
      header,
      method: configJSON.apiMethodTypeGet,
      endPoint: apiEndPoint,
      body: null
    });
  };
  // Customizable Area Start

  // Customizable Area End
}
