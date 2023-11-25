import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform, BackHandler } from "react-native";
import DeviceInfo from 'react-native-device-info';
// import { baseURL } from "../../../components/src/ClientGlobals";
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';

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
  username: string;
  isPasswordVisible: boolean;
  isValidPassword: boolean;
  isLoading: boolean;
  deviceId: any;
  deviceType: any;
  error: string;


  password: string;
  email: string;
  enablePasswordField: boolean;
  checkedRememberMe: boolean;
  placeHolderEmail: string;
  placeHolderPassword: string;
  imgPasswordVisible: any;
  imgPasswordInVisible: any;
  labelHeader: string;
  btnTxtLogin: string;
  labelRememberMe: string;
  btnTxtSocialLogin: string;
  labelOr: string;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountLoginController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiEmailLoginCallId: string = "";
  apiLoginCallId: string = "";
  apiFacebookLoginCallId: string = "";
  validationApiCallId: string = "";
  emailReg: RegExp;
  labelTitle: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      username: "",
      isPasswordVisible: false,
      isValidPassword: false,
      isLoading: false,
      deviceId: "",
      deviceType: "",
      error: "",

      email: "",
      password: "",
      enablePasswordField: true,
      checkedRememberMe: false,
      placeHolderEmail: configJSON.placeHolderEmail,
      placeHolderPassword: configJSON.placeHolderPassword,
      imgPasswordVisible: configJSON.imgPasswordVisible,
      imgPasswordInVisible: imgPasswordInVisible,
      labelHeader: configJSON.labelHeader,
      btnTxtLogin: configJSON.btnTxtLogin,
      labelRememberMe: configJSON.labelRememberMe,
      btnTxtSocialLogin: configJSON.btnTxtSocialLogin,
      labelOr: configJSON.labelOr,
    }

    this.emailReg = new RegExp("");
    // Customizable Area End

    runEngine.attachBuildingBlock(this, this.subScribedMessages);
  }

  async componentDidMount() {
    this.callGetValidationApi();
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    // Customizable Area Start
    let email = await AsyncStorage.getItem('email');
    if (email != null) {
      this.setState({ username: email })
    }

    BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

    this.getDeviceInfo();
    // Customizable Area End
  }

  // Customizable Area Start
  async componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  backAction = () => {
    if (this.props.navigation.isFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to quit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    }
  };

  async getDeviceInfo() {
    const deviceInfo = DeviceInfo.getUniqueId();
    if (Platform.OS === 'ios') {
      this.setState({ deviceId: deviceInfo, deviceType: 'ios' });
    } this.setState({ deviceId: deviceInfo, deviceType: 'android' });
  }

  onChangePassword(text: any) {
    this.setState({ password: text })
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    // console.log("BODY", body);

    const header = {
      "Content-Type": contentType,
      // token: token,
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
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(body)
    );
    console.log("requestMessageFBLogin", requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  onClickBackground() {
    this.hideKeyboard();
  }

  onPressSignIn = () => {
    // console.log("onPressSignIn")
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let text = this.state.username;
    if (this.state.username == '' || this.state.username == null) {
      Alert.alert('Alert', 'Please enter email.')
    } else if (emailReg.test(text) === false) {
      // this.setState({error: 'Please enter valid email', isValidPassword:true})
      Alert.alert('Alert', 'Please enter valid email.');
    } else if (this.state.password == '' || this.state.password == null) {
      Alert.alert('Alert', 'Please enter password.')
    } else {
      this.setState({ isValidPassword: false, isLoading: true });
      this.loginApi();
    }
  }

  loginApi = async () => {
    let apiData = {
      data: {
        type: "email_account",
        attributes: {
          email: this.state.username,
          password: this.state.password,
          device_token: this.state.deviceId,
          device_type: this.state.deviceType
        },
      },
    };

    this.apiLoginCallId = await this.apiCall({
      contentType: "application/json",
      method: "POST",
      endPoint: "bx_block_login/logins",
      body: apiData,
    });
  }
  setEmail = (text: string) => {
    this.setState({
      email: text,
    });
  };

  setPassword = (text: string) => {
    this.setState({
      password: text,
    });
  };

  setRememberMe = (value: boolean) => {
    this.setState({ checkedRememberMe: value });
  };

  handleClickShowPassword = () => {
    this.setState({
      enablePasswordField: !this.state.enablePasswordField,
    });
  };
  // Customizable Area End

  async receive(from: string, message: Message) {
    // Customizable Area Start

    // console.log("Message:-", message);

    if (getName(MessageEnum.RestAPIResponceMessage) !== message.id) {
      return;
    }

    const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
    let responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
    console.log("responseJson", responseJson);
    if (apiRequestCallId === this.apiLoginCallId) {
      if (responseJson && !responseJson.errors) {
        this.setState({ isLoading: false });
        const { meta, data } = responseJson;
        const { id, attributes } = data;
        await AsyncStorage.setItem('token', meta?.refresh_token);
        await AsyncStorage.setItem('userId', id);
        await AsyncStorage.setItem('email', attributes?.email);
        await AsyncStorage.setItem('fullName', attributes?.full_name ?? "");
        await AsyncStorage.setItem('userImage', attributes?.image ?? "");
        this.props.navigation.navigate('LandingPage');
      } else {
        this.setState({ isLoading: false, isValidPassword: true, error: 'Wrong Email ID or Password. Try again or click Forgot password to reset it.' });
      }
    }

    if (apiRequestCallId === this.apiFacebookLoginCallId) {
      if (responseJson && !responseJson.errors) {
        console.log("fb resposne", responseJson);
        const { meta, data } = responseJson;
        const { id, attributes } = data;
        await AsyncStorage.setItem('token', meta?.token);
        await AsyncStorage.setItem('userId', id);
        await AsyncStorage.setItem('email', attributes?.email);
        await AsyncStorage.setItem('fullName', attributes?.full_name ?? "");
        await AsyncStorage.setItem('userImage', attributes?.image ?? "");
        this.props.navigation.navigate('LandingPage');
      } else {
        Alert.alert(responseJson.errors[0].failed)
        console.log("fb resposne error", responseJson);
      }
    }
    // Customizable Area End
  }

  sendLoginFailMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginFaliureMessage));
    this.send(msg);
  }

  sendLoginSuccessMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginSuccessMessage));

    msg.addData(getName(MessageEnum.LoginUserName), this.state.email);
    msg.addData(getName(MessageEnum.CountyCodeDataMessage), null);
    msg.addData(getName(MessageEnum.LoginPassword), this.state.password);
    msg.addData(
      getName(MessageEnum.LoginIsRememberMe),
      this.state.checkedRememberMe
    );

    this.send(msg);
  }

  saveLoggedInUserData(responseJson: any) {
    if (responseJson && responseJson.meta && responseJson.meta.token) {
      const msg: Message = new Message(getName(MessageEnum.SessionSaveMessage));

      msg.addData(
        getName(MessageEnum.SessionResponseData),
        JSON.stringify(responseJson)
      );
      msg.addData(
        getName(MessageEnum.SessionResponseToken),
        responseJson.meta.token
      );

      this.send(msg);
    }
  }

  openInfoPage() {
    const msg: Message = new Message(getName(MessageEnum.AccoutLoginSuccess));

    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);

    this.send(msg);
  }

  goToForgotPassword() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationForgotPasswordMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    msg.addData(getName(MessageEnum.NavigationForgotPasswordPageInfo), "email");
    this.send(msg);
  }

  goToSocialLogin() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationSocialLogInMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  async onClickFacebookLogin() {
    console.log("onClickFacebookLogin",await LoginManager.getLoginBehavior()); 
   await LoginManager.logInWithPermissions(["email","public_profile"]).then(
      (permissionsResult) => {
        console.log("onClickFacebookLogin1",permissionsResult);
        if (permissionsResult.isCancelled) {
          console.log("Login cancelled")
        } else {
          console.log("Login DONE")
          AccessToken.getCurrentAccessToken()
            .then((tokenResult: any) => {
              console.log("tokenResult", tokenResult);
              const { accessToken } = tokenResult;
              this.getInfoFromToken(accessToken)
            })
            .catch(() => {
              runEngine.debugLog("ERROR GETTING DATA FROM FACEBOOK");
            });
        }
      },
      function (error) {
        runEngine.debugLog("Login fail with error: " + error);
      }
    )
    .then(() =>
    AccessToken.getCurrentAccessToken().then((data: any) => {
      console.log("data",data);
      // this._facebookDataFunction(data);
    })
  )
  .catch((error) => console.log("Login cancelled",error));
  }

  getInfoFromToken = (token: any) => {
    console.log("getInfoFromToken");
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,email,picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me?fields=email,name,first_name,last_name,id,picture',null,
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          console.log('result:', user);
          this.facebookLoginApiCall(token, user)
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  async facebookLoginApiCall(token: any, user: any) {
    let apiData = {
      "data": {
        "type": "social_account",
        "account": {
          "email": user?.email,
          "full_phone_number": "1234567892",
          "full_name": user?.name,  
          "password": "Piyush@1711#",
          "image_url": user?.picture?.data?.url,
          "unique_auth_id": token
        },
        "custom_information": {
          "country_id": [

          ],
          "region_id": [

          ],
          "language_id": [

          ],
          "media_house_id": [

          ],
          "category_id": [

          ]
        }
      }
    }
    console.log("apiData", apiData);

    this.apiFacebookLoginCallId = await this.apiCall({
      contentType: "application/json",
      method: "POST",
      endPoint: "account_block/accounts",
      body: apiData,
    });
  }


  doEmailLogIn(): boolean {
    if (
      this.state.email === null ||
      this.state.email.length === 0 ||
      !this.emailReg.test(this.state.email)
    ) {
      this.showAlert("Error", configJSON.errorEmailNotValid);
      return false;
    }

    if (this.state.password === null || this.state.password.length === 0) {
      this.showAlert("Error", configJSON.errorPasswordNotValid);
      return false;
    }

    const header = {
      "Content-Type": configJSON.loginApiContentType,
    };

    const attrs = {
      email: this.state.email,
      password: this.state.password,
    };

    const data = {
      type: "email_account",
      attributes: attrs,
    };

    const httpBody = {
      data: data,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiEmailLoginCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.loginAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.loginAPiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);

    return true;
  }

  callGetValidationApi() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType,
    };

    const getValidationsMsg = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationApiCallId = getValidationsMsg.messageId;

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.urlGetValidations
    );

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(getValidationsMsg.id, getValidationsMsg);
  }
}
