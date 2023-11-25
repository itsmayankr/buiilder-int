import { IBlock } from '../../../framework/src/IBlock';
import { Message } from '../../../framework/src/Message';
import { BlockComponent } from '../../../framework/src/BlockComponent';
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum';
import { runEngine } from '../../../framework/src/RunEngine';

// import { imgPasswordInVisible, imgPasswordVisible } from "./assets";

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

interface S {
  // Customizable Area Start
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  selectedItems: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class PrivacySettingsController extends BlockComponent<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [getName(MessageEnum.AccoutLoginSuccess)];

    this.state = {
      // Customizable Area Start
      txtInputValue: '',
      txtSavedValue: 'A',
      enableField: false,
      selectedItems: [],
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog('Message Recived', message);

    // Customizable Area Start
    if (message.id === getName(MessageEnum.AccoutLoginSuccess)) {
      // let value = message.getData(getName(MessageEnum.AuthTokenDataMessage));

      this.showAlert(
        'Change Value',
        'From: ' + this.state.txtSavedValue + ' To: ' + ''
      );

      this.setState({
        txtSavedValue: '',
      });
    }
    // Customizable Area End
  }
}
