import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
// Customizable Area End

export const configJSON = require("./config");
export interface Props {
  navigation: any;
  id: string;
}

interface S {
  // Customizable Area Start
  name: string;
  userName: string;
  email: any;
  mobile: any;
  modalVisible: boolean;
  profileImage: any;
  profilePicture: any;
  isLoading: boolean;
  enable: boolean;
  subscriptionDetail: any;
  cancelSubscriptionModel: boolean;
  noSubscriptionMsg: boolean;
  imageLoader: boolean;
  isValidMobileNumber: any;
  code:any;
  isVisible:boolean;
  defaultCountryCode:any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class UserProfileBasicController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  getProfileDataApiCallId: any = "";
  updateProfileDataApicallId: any = "";
  getSubscriptionDetailcallId: any = "";
  phoneInput: any;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
    ];
    this.receive = this.receive.bind(this);


    this.state = {
      // Customizable Area Start
      name: "",
      userName: "",
      email: "",
      mobile: "",
      profilePicture: "",
      modalVisible: false,
      profileImage: '',
      isLoading: false,
      enable: true,
      subscriptionDetail: "",
      cancelSubscriptionModel: false,
      noSubscriptionMsg: false,
      imageLoader: false,
      isValidMobileNumber: true,
      code:'',
      isVisible:false,
      defaultCountryCode:"",
      // Customizable Area End
    };

    runEngine.attachBuildingBlock(this, this.subScribedMessages);
  }


  async receive(from: string, message: Message) {
    runEngine.debugLog("on recieive==>", message.properties.RestAPIResponceErrorMessage);

    // Customizable Area Start
    if (message.id === getName(MessageEnum.RestAPIResponceMessage)) {
      const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
      const responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
      const errorResponse = message.getData(getName(MessageEnum.RestAPIResponceErrorMessage));

      if (apiRequestCallId === this.getProfileDataApiCallId) {
        await this.handleProfileData(apiRequestCallId, responseJson, errorResponse);
      } else if (apiRequestCallId === this.updateProfileDataApicallId) {
        await this.handleUpdateProfileData(apiRequestCallId, responseJson, errorResponse);
      } else if (apiRequestCallId === this.getSubscriptionDetailcallId) {
        await this.handleSubscriptionDetail(apiRequestCallId, responseJson, errorResponse);
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  async handleProfileData(apiRequestCallId: string, responseJson: any, errorResponse: any) {
    if (responseJson && !responseJson.errors) {
      // console.log("PROFILE-RESPONSE", responseJson);
      this.setState({
        isLoading: false,
        name: responseJson?.data?.attributes?.full_name,
        userName: responseJson?.data?.attributes?.full_name,
        email: responseJson?.data?.attributes?.email,
        mobile: responseJson?.data?.attributes?.full_phone_number,
        profilePicture: responseJson?.data?.attributes?.image,
      });
      await AsyncStorage.setItem('userImage', responseJson?.data?.attributes?.image ?? '');
    } else {
      // console.log("PROFILE-RESPONSE-ERROR", responseJson);
      this.setState({ isLoading: false });

      if (responseJson?.errors[0]?.token) {
        alert('Token ' + responseJson?.errors[0]?.token);
      } else if (errorResponse) {
        alert(errorResponse);
      } else {
        alert(responseJson?.errors[0]);
      }
    }
  }

  async handleUpdateProfileData(apiRequestCallId: string, responseJson: any, errorResponse: any) {
    if (responseJson && !responseJson.errors) {
      // console.log("UPDATE-PROFILE-R/ESPONSE", responseJson);
      Alert.alert(
        "Profile",
        'Profile updated successfully!',
        [{ text: "OK", onPress: () => this.setState({ isLoading: false }) }]
      );
      this.setState({
        isLoading: false,
        enable: true,
        name: responseJson?.data?.attributes?.full_name,
        userName: responseJson?.data?.attributes?.full_name,
        email: responseJson?.data?.attributes?.email,
        mobile: responseJson?.data?.attributes?.full_phone_number,
        profilePicture: responseJson?.data?.attributes?.image
      });
      await AsyncStorage.setItem('email', responseJson?.data?.attributes?.email);
      await AsyncStorage.setItem('fullName', responseJson?.data?.attributes?.full_name);
      await AsyncStorage.setItem('userImage', responseJson?.data?.attributes?.image ?? '');
      await AsyncStorage.setItem('country_code',JSON.stringify(this.state.code));

    } else {
      this.setState({ isLoading: false, enable: true });
      if (errorResponse) {
        alert(errorResponse);
      }
      // console.log("UPDATE-PROFILE-RESPONSE-ERROR", responseJson);
    }
  }

  async handleSubscriptionDetail(apiRequestCallId: string, responseJson: any
    , errorResponse: any) {
    if (responseJson && !responseJson.errors) {
      // console.log("SUBSCRIPTION-RESPONSE", responseJson);
      if (responseJson.message === "No subscription found") {
        //istanbul ignore next
        this.setState({ noSubscriptionMsg: true })
      } else {
        this.setState({ subscriptionDetail: responseJson })
      }
    } else {
      // console.log("SUBSCRIPTION-RESPONSE-ERROR", responseJson);
    }
  }

  async componentDidMount() {
    let code:any = await AsyncStorage.getItem('country_code');
    setTimeout(() => {
      this.setState({isVisible: true});
    },1000)
    this.setState({code: JSON.parse(code)})
    this.getProfileDataApi();
    this.getSubscriptionDetail();
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
    // console.log("BODY", body);

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
    // console.log("REQUEST-MESSAGE", requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async getProfileDataApi() {
    let token = await AsyncStorage.getItem('token');
    let id = await AsyncStorage.getItem('userId');
    this.setState({ isLoading: true })
    // console.log("token", token);
    this.getProfileDataApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "account_block/accounts/" + id,
      token: token
      // token: "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MywiZXhwIjoxNjY0NTIxMzU0LCJ0b2tlbl90eXBlIjoibG9naW4ifQ.pzETAslAzfUbiDr2FLN0sk1CI3v9H1Orrm3VS24li6TtSLR6CfrUe_pydPkrG4-_4_W0Cu2cMQDosU3Q7KqBrg"
    });
  }

  async getSubscriptionDetail() {
    let token = await AsyncStorage.getItem('token');
    let id = await AsyncStorage.getItem('userId');

    this.getSubscriptionDetailcallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "account_block/premium_free_trial_status/" + id,
      token: token
    });
  }

  async onClickUpdateProfile() {
    let token = await AsyncStorage.getItem('token');
    let id = await AsyncStorage.getItem('userId');
    this.setState({ isLoading: true })
    // console.log("profileImage", this.state.name);
    let apiData = {
      data: {
        account: {
          email: this.state.email,
          full_phone_number: this.state.mobile,
          full_name: this.state.name ? this.state.name : "",
          // password: '',
          // image_url: this.state.profileImage
          image_url: this.state.profileImage ? this.state.profileImage.data : "",
        }
      },
    };

    this.updateProfileDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "PUT",
      endPoint: "account_block/accounts/" + id,
      body: apiData,
      token: token
      // token: "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MywiZXhwIjoxNjY0NTIxMzU0LCJ0b2tlbl90eXBlIjoibG9naW4ifQ.pzETAslAzfUbiDr2FLN0sk1CI3v9H1Orrm3VS24li6TtSLR6CfrUe_pydPkrG4-_4_W0Cu2cMQDosU3Q7KqBrg"
    });
  }

  onChangeName(text: any) {
    this.setState({ name: text, enable: false })
  }

  onChangeMobileNo(text: any) {
    let value = text.replace(/[~a-zA-Z !@#$%^&*()_|\-=?₹€£¥•;:.'",.<>{}[\]\\\/]/gi, "");
    this.setState({ mobile: value,});
    let checkValid = this.phoneInput?.isValidNumber(text);
    this.setState({isValidMobileNumber: checkValid})
    if(checkValid){
      this.setState({enable: false })
    } else this.setState({enable: true })
  }

  async onChangeCountryCode(code:any) { 
    console.log("checkValid", code);
    this.setState({ mobile: '',code: code });
    // await AsyncStorage.setItem('country_code',JSON.stringify(code));
  }

  onChangeFormattedMobileNo = (text: string) => {
    let value = text.replace(/[`~a-zA-Z !@#$%^&*()_|+\-=?₹€£¥;:'",.<>\{\}\[\]\\\/]/gi, "");
    // this.setState({ mobile: value , enable: false});
  };

  onClickChangeProfile = async () => {
    this.setState({ modalVisible: true })
  }

  async onClickCamera(type: string) {
    // console.log("Type", type);
    if (type == 'Gallery') {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true
      }).then(image => {
        // console.log("gallary", image);
        //istanbul ignore next
        let source = image;
        //istanbul ignore next
        this.setState({ profileImage: source, modalVisible: false, enable: false })
      });
    } else {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true
      }).then(image => {
        // console.log("gallary", image);
        //istanbul ignore next
        let source = image;
        //istanbul ignore next
        this.setState({ profileImage: source, modalVisible: false, enable: false })
      });
    }
  }

  onClickFeedbackPopup() {
    this.setState({ cancelSubscriptionModel: false });
  }
  // Customizable Area End
}
