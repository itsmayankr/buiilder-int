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
  // Customizable Area Start
  oldPassword: any;
  newPassword: any;
  confirmPassword: any;
  isValidPassword: boolean;
  isValidPasswordMatch: boolean;
  isLoading: boolean;
  isOldPasswordVisible: boolean;
  isNewPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  passwordMatch: string;
  // Customizable Area End
}

interface SS {
  navigation: any;
}

export default class ChangePasswordController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  changePasswordApiCallId: any = '';
  getOtpOnEmailApiCallId: any = '';
  verifyOtpApiCallId: any = '';
  resetPasswordApiCallId: any = '';
  timer: any;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [getName(MessageEnum.RestAPIResponceMessage)];

    this.receive = this.receive.bind(this);

    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      isValidPassword: false,
      isValidPasswordMatch: false,
      isLoading: false,
      isOldPasswordVisible: false,
      isNewPasswordVisible: false,
      isConfirmPasswordVisible: false,
      passwordMatch: '',
    };

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
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

      if (apiRequestCallId === this.changePasswordApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log('CHANGE-PASSWORD-RESPONSE', responseJson);
          this.setState({ isLoading: false });
          // Alert.alert('Your password has been changed successfully.!')
          Alert.alert(
            'Change Password',
            'Your password has been changed successfully!',
            [
              {
                text: 'OK',
                onPress: () => this.onClickOk(),
              },
            ]
          );
        } else if (responseJson.errors[0].profile == 'Invalid credentials') {
          // this.setState({ isLoading: false })
          Alert.alert(
            'Change Password',
            'Current password entered is incorrect. Please try again!',
            [
              {
                text: 'OK',
                onPress: () => this.onClickOkError(),
              },
            ]
          );
        } else {
          console.log('CHANGE-PASSWORD-RESPONSE-ERROR', responseJson);
          this.setState({ isLoading: false });
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    console.log('changhe');
  }

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

  onClickOk() {
    this.setState({ isLoading: false });
    this.props.navigation.navigate('UserProfile');
  }

  onClickOkError() {
    this.setState({ isLoading: false });
  }

  onChangeNewPassword = (text: any) => {
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (text != '') {
      if (reg.test(text)) {
        this.setState({
          newPassword: text,
          isValidPassword: false,
        });
      } else {
        this.setState({
          newPassword: text,
          isValidPassword: true,
        });
      }
    } else {
      this.setState({
        newPassword: text,
        isValidPassword: false,
      });
    }
  };

  onChangeConfirmPassword = (text: any) => {
    let value = text;
    console.log('text', value);
    if (this.state.isValidPasswordMatch) {
      if (value === this.state.newPassword) {
        this.setState({
          confirmPassword: value,
          isValidPasswordMatch: false,
        });
      } else {
        this.setState({ confirmPassword: value });
      }
    } else {
      this.setState({
        confirmPassword: value,
        isValidPasswordMatch: false,
      });
    }
    // }
  };

  async onClickChangePassword() {
    let token = await AsyncStorage.getItem('token');
    console.log('this.state.oldPassword', this.state.oldPassword);
    console.log('this.state.newPassword', this.state.newPassword);

    if (this.state.oldPassword == '' || this.state.oldPassword == null) {
      alert('Please enter old password.');
    } else if (this.state.newPassword == '' || this.state.newPassword == null) {
      alert('Please enter new password.');
    } else if (
      this.state.confirmPassword == '' ||
      this.state.confirmPassword == null
    ) {
      alert('Please enter confirm password.');
    } else if (this.state.newPassword != this.state.confirmPassword) {
      this.setState({
        passwordMatch: 'Passwords do not match.',
        isValidPasswordMatch: true,
      });
    } else if (this.state.oldPassword === this.state.newPassword) {
      this.setState({
        passwordMatch: 'Old password and new password can not be same.',
        isValidPasswordMatch: true,
      });
      // alert('Old password and new password can not be same.!')
    } else {
      this.setState({ isLoading: true });
      let apiData = {
        data: {
          current_password: this.state.oldPassword,
          new_password: this.state.newPassword,
          confirm_password: this.state.confirmPassword,
        },
      };
      this.changePasswordApiCallId = await this.apiCall({
        contentType: 'application/json',
        method: 'PUT',
        endPoint: 'bx_block_profile/passwords/12',
        body: apiData,
        token: token,
      });
      // alert('Old password and new password can not be same.!')
    }
  }
  // Customizable Area End
}
