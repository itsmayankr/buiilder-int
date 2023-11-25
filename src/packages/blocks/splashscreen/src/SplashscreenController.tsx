import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
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
  timeout: any;
  // Customizable Area End

}

interface SS {
  id: any;
}

export default class SplashscreenController extends BlockComponent<Props,S,SS> {
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.state = {
      timeout: 3000
    }
    // Customizable Area Startg
    this.subScribedMessages = [];
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
     // Customizable Area Start
    runEngine.debugLog("Message Recived", message);
     // Customizable Area End
  }
  // Customizable Area Start
  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    console.log("token-splash", token);

    setTimeout(() => {
      if(token) {
        this.props.navigation.navigate('LandingPage'); 
      } else {
        this.props.navigation.replace('EmailAccountLoginBlock');
      }
    }, this.state.timeout);
  }

  goToHome() {
    if (this.state.timeout > 0) {
      const msg: Message = new Message(
        getName(MessageEnum.NavigationHomeScreenMessage)
      );
      msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
      this.send(msg);
    }
  }
  // Customizable Area End
}
