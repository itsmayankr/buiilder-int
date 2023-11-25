
import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import StorageProvider from "../../../framework/src/StorageProvider";


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

export default class SignInScreenController extends BlockComponent<Props, S, SS> {
  signupAccountApiCallId: any;
  googleSignInAccountApiCallId: any;
  getAllCategoriesApiCallId: string = "";

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
    this.getPopularCategories()
  }



  async receive(from: string, message: Message) {
    // Customizable Area Start
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
    if (apiRequestCallId === this.getAllCategoriesApiCallId) {
      if (responseJson && !responseJson.errors) {
        console.log("CATEGORIES-RESPONSE", responseJson);
        this.setState({
          isLoading: false,
          mediahouse: responseJson.categories.data,
        }, () => { 
          console.log("CATEGORIES-RESPONSE-STATE", this.state.mediahouse);
        });
      } else {
        console.log("CATEGORIES-ERROR-RESPONSE");
        this.setState({ isLoading: false })
      }
    }
    if (errorReponse) {
      this.setState({ isLoading: false });
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

  async getPopularCategories() {
    this.setState({ isLoading: true });
    this.getAllCategoriesApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_categories/categories",
      token: ''
      // body: apiData,
    });
  }
  // Customizable Area End
}
