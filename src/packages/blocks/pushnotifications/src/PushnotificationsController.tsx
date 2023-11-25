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
}

interface S { 
  // Customizable Area Start
  notificationsArray: any;
  isLoading: boolean
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class PushnotificationsController extends BlockComponent<Props,S,SS> {
  notificationsApiCallId: string = "";
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
    ];

    this.state = {
      // Customizable Area Start
      notificationsArray: [
        // {
        //   title:'New',
        //   data:[
        //     {id:1, image:circleIcon, title: 'Mac smith', desciption:'Shared the playlist with you.', time:'10 mins ago', isExpand: false,},
        //     {id:2, image:circleIcon, title: 'Braeking News', desciption:'Shared the playlist with you.', time:'10 mins ago', isExpand: false,},
        //     {id:3, image:circleIcon, title: 'Braeking News', desciption:'Shared the playlist with you.', time:'10 mins ago', isExpand: false,},
        //     {id:4, image:circleIcon, title: 'Mac smith', desciption:'Shared the playlist with you.', time:'10 mins ago', isExpand: false,},
        //     {id:5, image:circleIcon, title: 'Braeking News', desciption:'Shared the playlist with you.', time:'10 mins ago', isExpand: false,},
        //     {id:6, image:circleIcon, title: 'Mac smith', desciption:'Shared the playlist with you. Shared the playlist with you. Shared the playlist with you. Shared the playlist with you. Shared the playlist with you.' , time:'10 mins ago', isExpand: false,},
        //   ]
        // },
        // {
        //   title:'Earlier',
        //   data:[
        //     {id:1, image:circleIcon, title: 'Diana j', desciption:'Shared the playlist with you.', time:'yesterday', isExpand: false,},
        //     {id:2, image:circleIcon, title: 'John smith', desciption:'Shared the playlist with you.', time:'June 13,2022', isExpand: false,},
        //     {id:3, image:circleIcon, title: 'Diana j', desciption:'Shared the playlist with you.', time:'May 13,2022', isExpand: false,},
        //     {id:4, image:circleIcon, title: 'John smith', desciption:'Shared the playlist with you.', time:'May 13,2022', isExpand: false,}
        //   ]
        // },
      ],
      isLoading: false,
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);

    // Customizable Area Start
    if (getName(MessageEnum.SessionResponseMessage) === message.id) {
      let token = message.getData(getName(MessageEnum.SessionResponseToken));
      runEngine.debugLog("TOKEN", token);
      
    } else if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if(apiRequestCallId === this.notificationsApiCallId) {
        if(responseJson && !responseJson.errors) {
          console.log("NOTIFICATIONS-API-RESPONSE", responseJson);
          this.setState({notificationsArray: responseJson, isLoading:false})
        } else {
          console.log("NOTIFICATIONS-API-ERROR-RESPONSE", responseJson);
          this.setState({isLoading:false})
        }
      }

    }
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
     this.getNotifications();;
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
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

  async getNotifications() {
    let token = await AsyncStorage.getItem("token");
    this.setState({isLoading:true})
    this.notificationsApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_push_notifications/push_notifications",
      token: token,
      // body: apiData,
    });
  }

  onPress (item:any) {
    if(item?.section?.title == 'New') {
      let temp = [...this.state.notificationsArray];
      temp[0].data[item?.index].isExpand = !temp[0].data[item?.index].isExpand;
      this.setState({notificationsArray: temp})
    } else {
      let temp = [...this.state.notificationsArray];
      temp[1].data[item?.index].isExpand = !temp[1].data[item?.index].isExpand;
      this.setState({notificationsArray: temp})
    }
  }
 
  getNotificationCount = (count:any) => {
    if(count.toString().length == 1) {
      return '0' + count
    } else {
      return count
    }
  }
  // Customizable Area End
}
