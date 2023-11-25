import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
// Customizable Area Start
import AsyncStorage from "@react-native-async-storage/async-storage";

// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End

}

interface S {
  // Customizable Area Start
  termsAndCondition: any;
  isLoading: boolean,
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class TermsAndConditionsController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  getTermsAndConditionApiCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      termsAndCondition: "",
      isLoading: false
      // Customizable Area End      
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area Start
    // Customizable Area End

  }

  async componentDidMount() {
    // Customizable Area Start
    this.getTermsAndConditions();
    // Customizable Area End 
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("on recieive==>" + JSON.stringify(message));
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
      // console.log("responseJson", responseJson);

      if (apiRequestCallId === this.getTermsAndConditionApiCallId) {
        if (responseJson && !responseJson.errors) {
          // console.log("TERMS&COND-RESPONSE", responseJson)
          if (responseJson?.data && responseJson?.data?.attributes && responseJson.data?.attributes?.description) {
            this.setState({ termsAndCondition: responseJson?.data?.attributes?.description })
          }
          this.setState({ isLoading: false })
        } else {
          // console.log("TERMS&COND-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
        }
      }

      if (errorReponse) {
        this.setState({ isLoading: false });
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
    // console.log("BODY", body);

    const header = {
      "Content-Type": contentType,
      token: token ? token : ''
      // token: this.state.token,
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
    // console.log("REQUEST-MESSAGE", requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async getTermsAndConditions() {
    let token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: true });
    this.getTermsAndConditionApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_termsandconditions/terms_and_conditions",
      token: token
    });
  }
  // Customizable Area End
}
