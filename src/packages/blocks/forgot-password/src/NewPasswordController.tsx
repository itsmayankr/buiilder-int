import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { runEngine } from "../../../framework/src/RunEngine";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { Alert } from "react-native";
import * as Yup from "yup";
import { imgPasswordVisible, imgPasswordInVisible } from "./assets"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const configJSON = require("./config");

export interface Props {
  navigation: any;
}

interface S {
  isLoading: boolean;
  token: any;
  newResetPassword: any;
  newConfirmResetPassword: any;
  isNewResetPasswordVisible: boolean;
  isNewConfirmResetPasswordVisible: boolean;
  isValidNewResetPasswordPassword: boolean;
  isValidResetPasswordMatch: boolean;
}


interface SS {
  navigation: any;
}

export default class NewPasswordController extends BlockComponent<Props, S, SS> {
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
      newResetPassword: "",
      newConfirmResetPassword: "",
      isNewResetPasswordVisible: false,
      isNewConfirmResetPasswordVisible: false,
      isValidNewResetPasswordPassword: false,
      isValidResetPasswordMatch: false,
    };
  }

  async componentDidMount() {

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

      if(apiRequestCallId == this.resetPasswordApiCallId) {
        if(responseJson && !responseJson.errors) {
          console.log("RESET-PASSWORD-RESPONSE");
          // this.setState({isLoading: false});
          Alert.alert(
            "Reset Password",
            "Your password has been changed successfully!",
            [
              { text: "OK", onPress: () => this.onClickOk()}
            ]
          )
          
        } else {
          console.log("RESET-PASSWORD-ERROR-RESPONSE");
          this.setState({isLoading: false});
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

  onClickOk() {
    this.setState({isLoading:false});
    this.props.navigation.navigate('EmailAccountLoginBlock') 
  }

  onChangeNewResetPassword = (text: any) => {
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/;
    if (text != "") {
      if (reg.test(text)) {
        this.setState({ newResetPassword: text, isValidNewResetPasswordPassword: false })
      } else {
        this.setState({ newResetPassword: text, isValidNewResetPasswordPassword: true })
      }
    } else {
      this.setState({ newResetPassword: text, isValidNewResetPasswordPassword: false })
    }
  }

  onChangeConfirmResetPassword = (text: any) => {
    if (text != '') {
      if (text === this.state.newResetPassword) {
        this.setState({ newConfirmResetPassword: text, isValidResetPasswordMatch: false })
      } else {
        this.setState({ newConfirmResetPassword: text, isValidResetPasswordMatch: true })
      }
    } else {
      this.setState({ newConfirmResetPassword: text, isValidResetPasswordMatch: false })
    }
  }

  async onClickSubmit() {
    let token = await AsyncStorage.getItem('resetToken');
    if(this.state.newResetPassword == "" || this.state.newResetPassword == null) {
      alert('Please enter new password.')
    } else if(this.state.newConfirmResetPassword == "" || this.state.newConfirmResetPassword == null) {
      alert('Please enter confirm password.')
    } else if(this.state.newResetPassword != this.state.newConfirmResetPassword) {
      alert('New password and confirm password does not match.')
    } else {
      let apiData = {
        data: {
          token: token,
          new_password: this.state.newResetPassword,
        },
      };
      this.setState({isLoading: true});
      this.resetPasswordApiCallId = await this.apiCall({
        contentType: "application/json",
        method: "POST",
        endPoint: "bx_block_forgot_password/passwords",
        body: apiData,
      });
    }
  }
}
