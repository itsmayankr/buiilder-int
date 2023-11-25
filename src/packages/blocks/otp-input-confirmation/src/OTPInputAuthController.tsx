import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

export interface S {
  // Customizable Area Start
  otp: string;
  otpAuthToken: string;
  userAccountID: string;
  labelInfo: string;
  toMessage: string;
  isFromForgotPassword: boolean;
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class OTPInputAuthController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  otpAuthApiCallId: any;
  btnTxtSubmitOtp: string;
  placeHolderOtp: string;
  labelInfo: string;
  submitButtonColor: any =
    configJSON.submitButtonColor;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(
        MessageEnum.NavigationPayLoadMessage
      ),
      // Customizable Area End
    ];

    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(
      this,
      this.subScribedMessages
    );

    // Customizable Area Start
    this.state = {
      otp: '',
      otpAuthToken: '',
      userAccountID: '',
      labelInfo: configJSON.labelInfo,
      toMessage: '',
      isFromForgotPassword: false,
    };

    this.btnTxtSubmitOtp =
      configJSON.btnTxtSubmitOtp;
    this.placeHolderOtp =
      configJSON.placeHolderOtp;
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    switch (message.id) {
      case getName(
        MessageEnum.RestAPIResponceMessage
      ):
        if (!this.shouldHandleResponse(message)) {
          break;
        }

        const responseJson = message.getData(
          getName(
            MessageEnum.RestAPIResponceSuccessMessage
          )
        );
        const errorReponse = message.getData(
          getName(
            MessageEnum.RestAPIResponceErrorMessage
          )
        );

        if (
          !this.handleResponseJson(responseJson)
        ) {
          this.parseApiErrorResponse(
            responseJson
          );
        }
        if (errorReponse != null) {
          this.parseApiCatchErrorResponse(
            errorReponse
          );
        }
        break;

      case getName(
        MessageEnum.NavigationPayLoadMessage
      ):
        const phoneAuthToken = message.getData(
          getName(
            MessageEnum.AuthTokenDataMessage
          )
        );
        const phoneNumber = message.getData(
          getName(
            MessageEnum.AuthTokenPhoneNumberMessage
          )
        );
        const forgotPasswordBool = message.getData(
          getName(
            MessageEnum.EnterOTPAsForgotPasswordMessage
          )
        );
        const emailValue = message.getData(
          getName(
            MessageEnum.AuthTokenEmailMessage
          )
        );
        const userAccountID = phoneNumber
          ? '' + phoneNumber
          : '' + emailValue;
        const updatedLabel = userAccountID
          ? this.state.labelInfo.replace(
            'phone',
            userAccountID
          )
          : this.state.labelInfo;

        this.setState({
          otpAuthToken:
            phoneAuthToken ||
            this.state.otpAuthToken,
          userAccountID,
          labelInfo: updatedLabel,
          isFromForgotPassword:
            forgotPasswordBool !== undefined
              ? forgotPasswordBool
              : this.state.isFromForgotPassword,
        });
        break;

      default:
        break;
    }
  }

  shouldHandleResponse(message: Message) {
    return (
      this.otpAuthApiCallId != null &&
      this.otpAuthApiCallId ===
      message.getData(
        getName(
          MessageEnum.RestAPIResponceDataMessage
        )
      )
    );
  }

  handleResponseJson(responseJson: any) {
    if (!responseJson) {
      return false;
    }

    if (
      responseJson.meta &&
      responseJson.meta.token
    ) {
      this.setState({
        otpAuthToken: responseJson.meta.token,
      });
    }

    if (
      responseJson.messages ||
      (responseJson.meta &&
        responseJson.meta.token)
    ) {
      const msg = new Message(
        this.state.isFromForgotPassword
          ? getName(
            MessageEnum.NavigationNewPasswordMessage
          )
          : getName(
            MessageEnum.NavigationMobilePhoneAdditionalDetailsMessage
          )
      );
      msg.addData(
        getName(MessageEnum.AuthTokenDataMessage),
        this.state.otpAuthToken
      );
      msg.addData(
        getName(
          MessageEnum.NavigationPropsMessage
        ),
        this.props
      );
      this.send(msg);
      return true;
    }

    return false;
  }

  // Customizable Area Start
  async submitOtp() {
    if (
      !this.state.otp ||
      this.state.otp.length === 0
    ) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorOtpNotValid
      );
      return;
    }

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    if (this.state.isFromForgotPassword) {
      const header = {
        'Content-Type':
          configJSON.apiVerifyOtpContentType,
      };

      //GO TO REQUEST STATE
      this.otpAuthApiCallId =
        requestMessage.messageId;

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIResponceEndPointMessage
        ),
        configJSON.apiVerifyForgotPasswordOtpEndPoint
      );

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIRequestHeaderMessage
        ),
        JSON.stringify(header)
      );

      const data = {
        token: this.state.otpAuthToken
          ? this.state.otpAuthToken
          : '',
        otp_code: this.state.otp
          ? this.state.otp
          : '',
      };

      const httpBody = {
        data: data,
      };

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIRequestBodyMessage
        ),
        JSON.stringify(httpBody)
      );
    } else {
      const headers = {
        'Content-Type':
          configJSON.apiVerifyOtpContentType,
        token: this.state.otpAuthToken,
      };

      this.otpAuthApiCallId =
        requestMessage.messageId;

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIResponceEndPointMessage
        ),
        configJSON.apiVerifyOtpEndPoint +
        this.state.otp
      );

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIRequestHeaderMessage
        ),
        JSON.stringify(headers)
      );

      requestMessage.addData(
        getName(
          MessageEnum.RestAPIRequestBodyMessage
        ),
        JSON.stringify(JSON.stringify({}))
      );
    }

    requestMessage.addData(
      getName(
        MessageEnum.RestAPIRequestMethodMessage
      ),
      configJSON.apiVerifyOtpMethod
    );
    runEngine.sendMessage(
      requestMessage.id,
      requestMessage
    );
  }

  btnSubmitOTPProps = {
    onPress: () => this.submitOtp(),
  };

  txtMobilePhoneOTPWebProps = {
    onChangeText: (text: string) =>
      this.setState({ otp: text }),
  };

  txtMobilePhoneOTPMobileProps = {
    ...this.txtMobilePhoneOTPWebProps,
    keyboardType: 'numeric',
  };

  txtMobilePhoneOTPProps = this.isPlatformWeb()
    ? this.txtMobilePhoneOTPWebProps
    : this.txtMobilePhoneOTPMobileProps;

  // Customizable Area End
}
