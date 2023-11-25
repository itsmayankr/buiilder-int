import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { runEngine } from "../../../framework/src/RunEngine";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

export const configJSON = require("./config");

export interface Props {
  navigation: any;
}

interface S {
  isLoading: boolean;
  token: any;
  resetEmail: any;
  setSeconds: any;
  setOtp: any;
}


interface SS {
  navigation: any;
}

export default class ForgotPasswordOTPController extends BlockComponent<Props, S, SS> {
  changePasswordApiCallId: any = "";
  getOtpOnEmailApiCallId: any = "";
  verifyOtpApiCallId: any = "";
  resetPasswordApiCallId: any = "";
  timer: any;

  constructor(props: Props) {
    super(props);
    
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
    ];

    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    this.state = {
      isLoading: false,
      token: "",
      resetEmail: "",
      setSeconds: 60,
      setOtp: "",
    };
  }

  async componentDidMount() {
    this.handleTimer();
    console.log("ScreenProps", this.props);
  }

  async receive(from: String, message: Message) {
    runEngine.debugLog("on recieive==>" + JSON.stringify(message));

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (apiRequestCallId === this.getOtpOnEmailApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log(" ", responseJson);
          this.setState({isLoading: false, token: responseJson?.refresh_token})
          this.props.navigation.navigate('ForgotPasswordOTP');
        } else {
          this.setState({isLoading: false})
          console.log("SEND-OTP-EMAIL-API-ERROR-RESPONSE", responseJson);
        }
      }

      if(apiRequestCallId == this.verifyOtpApiCallId) {
        if(responseJson && !responseJson.errors) {
          console.log("VERIFY-OTP-RESPONSE");
          this.setState({isLoading:false})
          this.props.navigation.navigate('NewPassword');
        } else {
          console.log("VERIFY-OTP-ERROR-RESPONSE");
          this.setState({isLoading:false})
          alert(responseJson.errors[0].otp);
        }
      }
    }
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, type, token } = data;
    console.log("BODY", body);

    const header = {
      "Content-Type": contentType,
      token: token
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    {
      body &&
        requestMessage.addData(
          getName(MessageEnum.RestAPIRequestBodyMessage),
          JSON.stringify(body)
        );
    }
    console.log("REQUEST-MESSAGE", requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async handleTimer() {
    this.timer = setInterval(() => {
      if (this.state.setSeconds > 0) {
        this.setState(({ setSeconds }) => ({
          setSeconds: setSeconds - 1,
        }));
      }
      if (this.state.setSeconds === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    console.log("this.timer", this.timer);
  }

  async onPressResendOTP(email:any) {
    console.log("email",email);
    this.setState({ setSeconds: 60 }, () => this.handleTimer());
    // this.setState({ isLoading: true })
      let apiData = {
        data: {
          email: this.props.navigation.state.params.email,
        },
      };
      this.getOtpOnEmailApiCallId = await this.apiCall({
        contentType: "application/json",
        method: "POST",
        endPoint: "bx_block_forgot_password/otps",
        body: apiData,
      });
  }


  async onClickVerifyOtp() {
    this.setState({ isLoading: true })
    let apiData = {
      data: {
        token: this.props.navigation.state.params.token,
        otp_code: this.state.setOtp,
      },
    };
    this.verifyOtpApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "POST",
      endPoint: "bx_block_forgot_password/otp_confirmations",
      body: apiData,
    });
  }
}
