import { BlockComponent } from '../../../framework/src/BlockComponent';
import { IBlock } from '../../../framework/src/IBlock';
import { runEngine } from '../../../framework/src/RunEngine';
import { Message } from '../../../framework/src/Message';
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum';

// Customizable Area Start
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Customizable Area End

export const configJSON = require('./config');

export interface Props {
  navigation: any;
}

interface S {
  token: any;
  resetEmail: any;
  isLoading: boolean;
  isValidEmail: any;
}

interface SS {
  navigation: any;
}

export default class ForgotPasswordEmailController extends BlockComponent<Props, S, SS> {
  getOtpOnEmailApiCallId: any = "";
  timer: any;
  focusListener: any;

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [getName(MessageEnum.RestAPIResponceMessage)];

    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    this.state = {
      token: "",
      resetEmail: "",
      isLoading: false,
      isValidEmail: false,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
     console.log("EmailCallinng")
     this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({resetEmail:""})
    });
  }

  async receive(from: String, message: Message) {
    runEngine.debugLog("on recieive==>" + JSON.stringify(message));

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );


      if (apiRequestCallId === this.getOtpOnEmailApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log("SEND-OTP-EMAIL-API-RESPONSE", responseJson);
          this.setState({isLoading: false})
          await AsyncStorage.setItem('resetToken', responseJson.meta.token);
          this.props.navigation.navigate('ForgotPasswordOTP',{email:this.state.resetEmail, token: responseJson.meta.token});
        } else {
          console.log("forget password", responseJson);
          // Alert.alert(
          //   "Error",
          //   responseJson?.errors[0].otp,
          //   [
          //     {
          //       text: "Cancel",
          //       onPress: () => this.setState({ isLoading: false }),
          //       style: "cancel"
          //     },
          //     { text: "OK", onPress: () => this.setState({ isLoading: false }) }
          //   ]
          // );
          // alert(responseJson?.errors[0].otp)
          this.setState({ isLoading: false, isValidEmail: responseJson?.errors[0].otp})
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
    console.log('BODY', body);

    const header = {
      'Content-Type': contentType,
      token: token,
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
    console.log('REQUEST-MESSAGE', requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async onClickSendOTP() {
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.state.resetEmail == "" || this.state.resetEmail == null) {
      alert('Please enter email.')
    } else if (emailReg.test(this.state.resetEmail) === false) {
      // alert('Please enter valid email.!');
      this.setState({isValidEmail:'Please enter valid email.'})
    } else {
      this.setState({ isLoading: true });
      let apiData = {
        data: {
          email: this.state.resetEmail,
        },
      };
      this.getOtpOnEmailApiCallId = await this.apiCall({
        contentType: "application/json",
        method: "POST",
        endPoint: "bx_block_forgot_password/otps",
        body: apiData,
      });
    }
    // this.props.navigation.navigate('ForgotPasswordOTP',{email:this.state.resetEmail});
  }
}
// Customizable Area End
