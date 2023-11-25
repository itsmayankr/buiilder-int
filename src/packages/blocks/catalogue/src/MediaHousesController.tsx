
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import StorageProvider from "../../../framework/src/StorageProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Customizable Area Start
// import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export interface Props {
  navigation: any;
  id: string;

  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  mediahouse: any;
  isLoading: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class SignInScreenController extends BlockComponent<Props,S,SS> {
  signupAccountApiCallId: any;
  googleSignInAccountApiCallId: any;
  getAllMediaHouseApiCallId: string = "";

  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    runEngine.attachBuildingBlock(this as IBlock, [
      getName(MessageEnum.RestAPIResponceMessage),
    ]);
    this.receive = this.receive.bind(this);

    // Customizable Area Start

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
    ];

    this.state = {
      mediahouse: [
        { text: "check" },
        { text: "sdfsdfds" },
        { text: "check" },
        { text: "sdfsdfds" }
      ],
      isLoading: false,
      // Customizable Area End
    };
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    this.getAllMediaHouses(token)
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
        console.log("responseJson", responseJson);
        if (apiRequestCallId === this.getAllMediaHouseApiCallId) {
            if (responseJson && !responseJson.errors) {
                console.log("MEDIA-HOUSE-RESPONSE", responseJson);
                this.setState({
                  isLoading: false,
                  mediahouse: responseJson.media_hosues.data,
                });
            } else {
                console.log("MEDIA-HOUSE-ERROR-RESPONSE");
                this.setState({ isLoading: false })
            }
        }
        if (errorReponse) {
            this.setState({ isLoading: false });
        }
    }
}

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, type, token } = data;
    console.log("BODY", body);

    const header = {
        "Content-Type": contentType,
        token: token
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
    console.log("REQUEST-MESSAGE", requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
};


  async getAllMediaHouses(token: any) {
    this.setState({ isLoading: true });
    this.getAllMediaHouseApiCallId = await this.apiCall({
        contentType: "application/json",
        method: "GET",
        endPoint: "bx_block_admin/media_houses",
        token: token
        // body: apiData,
    });
  }

  // Customizable Area End
}
