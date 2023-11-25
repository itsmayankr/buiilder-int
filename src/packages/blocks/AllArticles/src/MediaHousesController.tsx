import { IBlock } from '../../../framework/src/IBlock';
import { Message } from '../../../framework/src/Message';
import { BlockComponent } from '../../../framework/src/BlockComponent';
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum';
import { runEngine } from '../../../framework/src/RunEngine';

// Customizable Area Start
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default class SignInScreenController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  signupAccountApiCallId: any;
  googleSignInAccountApiCallId: any;
  getAllMediaHouseApiCallId: string = '';
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    runEngine.attachBuildingBlock(this as IBlock, [
      getName(MessageEnum.RestAPIResponceMessage),
    ]);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      mediahouse: [
        { text: 'check' },
        { text: 'sdfsdfds' },
        { text: 'check' },
        { text: 'sdfsdfds' },
      ],
      isLoading: false,
      // Customizable Area End
    };
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog('on recieive==>' + JSON.stringify(message));

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
      console.log('responseJson', responseJson);
      if (apiRequestCallId === this.getAllMediaHouseApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log('MEDIA-HOUSE-RESPONSE', responseJson);
          this.setState({
            isLoading: false,
            mediahouse: responseJson.media_hosues.data,
          });
        } else {
          console.log('MEDIA-HOUSE-ERROR-RESPONSE');
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
    console.log('BODY', body);

    const header = {
      'Content-Type': contentType,
      token: token,
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
    console.log('REQUEST-MESSAGE', requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    this.getAllMediaHouses(token);
  }

  async getAllMediaHouses(token: any) {
    this.setState({ isLoading: true });
    this.getAllMediaHouseApiCallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_admin/media_houses',
      token: token,
      // body: apiData,
    });
  }
  // Customizable Area End
}
