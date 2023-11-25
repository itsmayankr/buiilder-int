// Customizable Area Start
import Toast from "react-native-toast-message";
import * as yup from "yup";
import { BlockComponent } from "../../../framework/src/BlockComponent";

import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { WebViewNavigation } from "react-native-webview";
import { closeAlert } from "react-native-customisable-alert";
import { runEngine } from "../../../framework/src/RunEngine";
const baseURL = require("../../../framework/src/config.js");
import {
  AppointmentApiType,
  AppointmentType,
  PaymentDetailsType,
  PaymentOption,
  PersonalDetailsType,
  SelectablePaymentOption
} from "./types";
import { RootStackParamList } from "../../utilities/src/RootStackParamList";
import { NavigationProp } from "@react-navigation/native";
import { Alert, BackHandler } from "react-native";


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
  navigation: NavigationProp<RootStackParamList, "BookAppointmentPayment">;
  id: string;
  // Customizable Area Start
  route: {
    params: {
      id: string;
      selectedTime: { date: string; time: string; id: number };
      title: string;
      price: number;
      duration: number;
      
      image: string;
      personalDetails: PersonalDetailsType;
      paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
      paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
      currency: catalogueItemDetails["attributes"]["currency"];
      currentDate:Date;
      timeZone?: string;
    };
  };
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  encReq: string;
  accessCode: string;
  isCheckout: boolean;

  isModalOpen: boolean;

  payNowPaymentType: string;
  token: string;
  data: [];
  showSummaryDetails: boolean;
  paymentDetails: PaymentDetailsType;
  loading: boolean;
  arrayHolder: [];
  progressType: "1" | "2" | "3";
  paymentType: PaymentOption;
  appointment?: AppointmentType;

  // Customizable Area End
}

interface SS {
  id: string;
}

export default class AddAppointmentPaymentController extends BlockComponent<
  Props,
  S,
  SS
> {
  submitBookingCallId: string;
  callCCAvenueID: string;
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.callCCAvenueID = "";
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage)
    ];
    this.submitBookingCallId = "";
    this.state = {
      encReq: "",
      accessCode: "",
      isCheckout: true,
      appointment: {
        time_slot_id: "",
        catalogue_id: "",
        payment_mode: "pay_now",
        appointment_date: "",
        personal_detail_attributes: {
          full_name: "",
          full_phone_number: "",
          email: "",
          comment: ""
        },
        billing_address_attributes: {
          country: "",
          city: "",
          state: "",
          flat_number: "",
          address_line_2: "",
          address_line_1: "",
          zip_code: ""
        }
      },
      isModalOpen: false,
      payNowPaymentType: "",
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

      paymentType:
        this.props.route.params.paymentType === "pay_online" ||
        this.props.route.params.paymentType === "pay_online_or_in_person"
          ? "payNow"
          : "payAtLocation",

      progressType: "3",

      loading: false,
      arrayHolder: []
    };

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }
  async componentDidMount() {
    super.componentDidMount();
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }
  async componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }
  componentDidUpdate = (prevProps: Props, prevState: S) => {
    if (
      prevProps.route.params.paymentType !== this.props.route.params.paymentType
    ) {
      if (this.props.route.params.paymentType === "pay_in_person") {
        this.setState({
          paymentType: "payAtLocation"
        });
      } else if (this.props.route.params.paymentType === "pay_online") {
        this.setState({
          paymentType: "payNow"
        });
      }
    }
  };

  paymentInitialFormValues = {
    country: "",
    no: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    payment_mode: ""
  };
  paymentOptions: SelectablePaymentOption[] = [
    { label: "Pay now", value: "payNow" },
    { label: "Pay later at location", value: "payAtLocation" }
  ];

  selectPaymentOption = (option: SelectablePaymentOption) => {
    if (option.value === this.state.paymentType) return;
    const newIndex = this.paymentOptions.findIndex(
      (index) => index.value === option.value
    );
    this.setState({
      paymentType: this.paymentOptions[newIndex].value
    });
  };

  paymentFormValidationSchema = yup.object().shape({
    country: yup.string().required("Country is required"),
    addressLine1: yup.string().required("Address Line 1 is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup.string().required("Zip code is required")
  });

  backAction = () => {
    if (!this.state.isCheckout) {
      Alert.alert(
        "Are you sure you want to cancel a payment ?",
        "",
        [
          {
            text: "Cancel",
            onPress: () => null
          },
          {
            text: "Yes",
            onPress: () => this.setState({ isCheckout: true })
          }
        ],
        { cancelable: false }
      );
    } else {
      this.handlePressBack();
    }
    return true;
  };

  handlePressBack = () => {
    this.props.navigation.goBack();
  };
  callCCAVENUE = async (data: AppointmentApiType) => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const httpBody = {
      data
    };
    const apiEndPoint = `bx_block_ccavenue_integration/check_out_encrypt_data`;

    this.callCCAvenueID = await this.apiCall({
      setApiCallId: "callCCAVENUECallID",
      header,
      method: configJSON.apiMethodTypePost,
      endPoint: apiEndPoint,
      body: JSON.stringify(httpBody)
    });
  };

  handleErrorResponse = (errors: string[]) => {
    const {
      id,
      selectedTime,
      title,
      price,
      duration,
      image,
      currentDate,
      personalDetails,
      paymentType,
      timeZone,
      paymentMethod,
      currency
    } = this.props.route.params;
    const errorList = errors.join(`, \n`);

    Toast.show({
      type: "error",
      text1: errorList || "An error has occured"
    });
    if (errorList.includes("Time slot is already booked")) {
      return setTimeout(() => {
        this.props.navigation.navigate("BookAppointment", {
          id,
          title,
          price,
          duration,
          image,
          paymentType,
          paymentMethod,
          refresh: true,
          currentDate,
          currency
        });
      }, 4000);
    } else if (errorList.includes("Catalogue is currently inactive")) {
      return setTimeout(() => {
        this.props.navigation.navigate("Catalogue", { refresh: true });
      }, 4000);
    } else {
      if (!this.state.isModalOpen) {
        return setTimeout(() => {
          this.props.navigation.navigate("BookAppointmentDetails", {
            success: false,
            id,
            title,
            duration,
            price,
            selectedTime,
            personalDetails,
            paymentMethod,
            currentDate,
            paymentType:
              this.state.paymentType === "payNow"
                ? "pay_online"
                : "pay_in_person",
            image,
            timeZone,
            orderID: "1",
            orderDate: Date.now().toString(),
            currency
          });
        }, 4000);
      }
    }
  };

  handleCloseAlert = () => {
    closeAlert();
  };

  appointmentTypeParser = (
    appointment: AppointmentType
  ): AppointmentApiType => {
    const {
      id,
      selectedTime,
      title,
      price,
      duration,
      image,
      personalDetails,
      paymentType,
      timeZone,
      currency
    } = this.props.route.params;
    return {
      order_id: Math.floor(Math.random() * Date.now()).toString(36),
      amount: price.toString(),
      currency: currency.name,
      redirect_url:
        baseURL.baseURL +
        "/bx_block_ccavenue_integration/check_out_decrypt_data",
      cancel_url:
        baseURL.baseURL +
        "/bx_block_ccavenue_integration/check_out_decrypt_data",
      language: "EN",
      billing_name: appointment.personal_detail_attributes.full_name,
      billing_address: appointment.billing_address_attributes.address_line_1,
      billing_city: appointment.billing_address_attributes.city,
      billing_state: appointment.billing_address_attributes.state || "aa",
      billing_zip: appointment.billing_address_attributes.zip_code,
      billing_country: appointment.billing_address_attributes.country,
      billing_tel:
        appointment.personal_detail_attributes.full_phone_number.toString(),
      billing_email: appointment.personal_detail_attributes.email,
      delivery_name: appointment.personal_detail_attributes.full_name,
      delivery_address: appointment.billing_address_attributes.address_line_1,
      delivery_city: appointment.billing_address_attributes.city,
      delivery_state: appointment.billing_address_attributes.state || "aaa",
      delivery_zip: appointment.billing_address_attributes.zip_code,
      delivery_country: appointment.billing_address_attributes.country,
      delivery_tel:
        appointment.personal_detail_attributes.full_phone_number.toString(),
      customer_identifier: "",
      promo_code: "",
      integration_type: "iframe_normal"
    };
  };

  handleSubmitBooking = (appointment: AppointmentType) => {
    this.setState({ appointment });
    if (this.state.paymentType === "payNow") {
      if (this.props.route.params.paymentMethod === "Stripe") {
        this.setState({ appointment });
        this.handleCloseAlert();
        setTimeout(() => {
          this.handleStripe();
        }, 1000);
      } else {
        this.handleCloseAlert();
        this.callCCAVENUE(this.appointmentTypeParser(appointment));
      }
    } else {
      this.handleCloseAlert();
      this.bookAppointmentRequest(appointment);

    }
  };

  setIsModalOpen = (value: boolean) => {
    this.setState({ isModalOpen: value });
  };

  onSuccess = () => {
    this.setIsModalOpen(false);
    this.showAlert(
      "Payment Successful!",
      "you have successfully completed your payment"
    );
    if (this.state.appointment) {
      this.bookAppointmentRequest(this.state.appointment);
    }
  };

  handleStripe = () => {
    if (this.state.paymentType == "payNow") {
      this.setIsModalOpen(true);
    }
  };

  // Customizable Area End
  async receive(from: string, message: Message) {
    // Customizable Area Start
    const {
      id,
      selectedTime,
      title,
      price,
      duration,
      image,
      personalDetails,
      currency,paymentMethod,
      currentDate
    } = this.props.route.params;
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

      if (apiRequestCallId === this.submitBookingCallId) {
        if (responseJson && responseJson.data) {
          if (
            responseJson.data.attributes &&
            responseJson.data.attributes.order_id
          ) {
            return setTimeout(() => {
              this.props.navigation.navigate("BookAppointmentDetails", {
                id,
                success: true,
                title,
                duration,
                price,
                selectedTime,
                paymentType:
                  this.state.paymentType === "payNow"
                    ? "pay_online"
                    : "pay_in_person",
                personalDetails,
                image,
                orderID: responseJson.data.attributes.order_id,
                orderDate: responseJson.data.attributes.order_date,
                timeZone: this.props.route.params.timeZone,
                currency,
                paymentMethod,
                currentDate
              });
            }, 50);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }

      if (apiRequestCallId === this.callCCAvenueID) {
        this.setState({
          accessCode: responseJson.access_code,
          encReq: responseJson.enc_resp,
          isCheckout: false
        });

        this.parseApiCatchErrorResponse(errorReponse);
      }
    }

    // Customizable Area End
  }
  // Customizable Area Start
  apiCall = async (data: {
    header: {};
    method: string;
    endPoint: string;
    body: {} | null;
    setApiCallId: string;
  }) => {
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

  onNavigationStateChangeHandler = (webView: WebViewNavigation) => {
    if (webView.url.slice(-7).includes("Success")) {
      this.setState({ isCheckout: true });
      this.showAlert(
        configJSON.successPaymentTitle,
        configJSON.successPaymentMessage
      );
      setTimeout(() => {
        if (this.state.appointment) {
          this.bookAppointmentRequest(this.state.appointment);
        }
      }, 10);
    } else if (webView.url.slice(-7).includes("Failure")) {
      this.setState({ isCheckout: true });
      this.showAlert(
        configJSON.failPaymentTitle,
        configJSON.failPaymentMessage
      );
    } else if (webView.url.slice(-7).includes("Aborted")) {
      this.setState({ isCheckout: true });
      this.showAlert(
        configJSON.cancelPaymentTitle,
        configJSON.cancelPaymentMessage
      );
    }
  };

  bookAppointmentRequest = async (appointment: AppointmentType) => {
    const header = {
      "Content-Type": configJSON.validationApiContentType
    };

    const body = {
      appointment
    };
    const apiEndPoint = "bx_block_appointment_management/appointments";

    this.submitBookingCallId = await this.apiCall({
      setApiCallId: "submitBookingCallID",
      header,
      method: configJSON.apiMethodTypePost,
      endPoint: apiEndPoint,
      body: JSON.stringify(body)
    });
  };

  // Customizable Area End
}
