import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import React from 'react';
import { Platform } from "react-native";
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
  language: any;
  messageDropdown: any;
  messageType: any;
  messageNo: any;
  username: any;
  email: any;
  appVersion: any;
  description: any;
  rating: any;
  ratingType: any;
  isLoading: boolean;
  feedbackSuccessPopup: boolean;
  file: any;
  enable: boolean,
  
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class ContactusController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  sendFeedbackApiCallId: any;
  inputRef: any;
  // Customizable Area End
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
    ];

    this.state = {
      language: "",
      messageDropdown: [
        { label: 'Feedback', value: 1, isSelected: false, id: 0 },
        { label: 'Support ticket', value: 2, isSelected: false, id: 1 },
      ],
      messageType: "",
      messageNo: null,
      username: "",
      email: "",
      appVersion: "",
      description: "",
      rating: null,
      ratingType: "",
      isLoading: false,
      feedbackSuccessPopup: false,
      file: "",
      enable: false
    };
    this.inputRef = React.createRef();
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
    let email: any = await AsyncStorage.getItem('email');
    let name:any = await AsyncStorage.getItem('fullName');
    this.setState({email:email, username:name })
    console.log('checkuseremail===========', this.state.email)
    this.getToken();
    if (this.isPlatformWeb() === false) {
      this.props.navigation.addListener("willFocus", () => {
        this.getToken();
      });
    }
    // Customizable Area Start
    // Customizable Area End
  }

  getToken = () => {
    const msg: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msg);
  };


  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {

      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      const errorResponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );
      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      // if(errorReponse) {
      //   this.setState({isLoading: false})
      // }

      if (responseJson && !responseJson.errors) {
        if (apiRequestCallId === this.sendFeedbackApiCallId) {
          console.log("SEND_FEEDBACK_SUCCESS");
          this.setState({ feedbackSuccessPopup: true, isLoading: false })
        } else {
          console.log("SEND_FEEDBACK_ERROR");
          this.setState({ isLoading: false })

        }
      }

      if (errorResponse) {
        this.setState({ isLoading: false });
        alert(errorResponse);
      }

    }
    // Customizable Area End
  }

  // Customizable Area Start
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

  selectLanguage(type: any) {
    if (type == "english") {
      this.setState({ language: 'English' });
    } else {
      this.setState({ language: 'Hindi' });
    }
  }

  OnFocusDescription() {
    if (Platform.OS === "ios") {
      this.inputRef.scrollTo({ x: 0, y: 250, animated: true })
    }
  }

  onChange(item: any) {
    console.log("item", item);
    let temp: any = [];
    if (item.value == 1) {
      let index = item.value - 1;
      let index1 = 1;
      temp = [...this.state.messageDropdown];
      temp[index].isSelected = !temp[index].isSelected;
      temp[index1].isSelected = false;
    } else {
      let index = item.value - 1;
      let index1 = 0;
      temp = [...this.state.messageDropdown];
      temp[index].isSelected = !temp[index].isSelected;
      temp[index1].isSelected = false;
    }
    this.setState({ messageDropdown: temp, messageNo: item.id });
    if (item.isSelected) {
      this.setState({ messageType: item.label, });
    } else {
      this.setState({ messageType: '', })
    }
  }

  onSelectRating(value: any) {
    console.log("value", value);
    if (value == 1) {
      this.setState({ ratingType: 'Bad' })
    } else if (value == 2) {
      this.setState({ ratingType: 'Ok' })
    } else if (value == 3) {
      this.setState({ ratingType: 'Good' })
    } else if (value == 4) {
      this.setState({ ratingType: 'Very Good' })
    } else if (value == 5) {
      this.setState({ ratingType: 'Amazing' })
    }
    this.setState({ rating: value });
  }

  onPressBackScreen() {
    console.log("calling");
    this.hideKeyboard();
  }
  onChangeDescription(value: string) {
    this.setState({ description: value });
  }
  onClickFeedbackPopup() {
    this.props.navigation.navigate('Contactus');
    this.setState({ feedbackSuccessPopup: false });
  }
  async onPressAttachFile() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true
    }).then(image => {
      console.log("gallary", image);
      let source = image;
      this.setState({ file: source })
    });
  }


  sendFeedback = async () => {
    let token = await AsyncStorage.getItem('token');
    if (this.state.username == '' || this.state.username == null) {
      alert('Please enter name')
    } else if (this.state.email == '' || this.state.email == null) {
      alert('Please enter email')
    } else if (this.state.appVersion == '' || this.state.appVersion == null) {
      alert('Please enter application version')
    } else if (this.state.language == '' || this.state.language == null) {
      alert('Please select language')
    } else if (this.state.messageType == '' || this.state.messageType == null) {
      alert('Please select nature of message')
    } else if (this.state.description == '' || this.state.username == null) {
      alert('Please enter description')
    } else if (this.state.messageType == 'Feedback') {
      if (this.state.rating == '' || this.state.rating == null) {
        alert('Please choose rating')
      } else {
        this.setState({ isLoading: true });
        let apiData = {
          data: {
            name: this.state.username,
            email: this.state.email,
            application_version: this.state.appVersion,
            preferred_language: this.state.language,
            nature_of_message: this.state.messageNo,
            description: this.state.description,
            rating: this.state.rating,
            image_url: this.state.file.data ? this.state.file.data : ""
          }
        }
        this.sendFeedbackApiCallId = await this.apiCall({
          contentType: "application/json",
          method: "POST",
          endPoint: "bx_block_contact_us/contacts",
          token: token,
          body: apiData,
        });
      }
    } else {
      this.setState({ isLoading: true });
      let apiData = {
        data: {
          name: this.state.username,
          email: this.state.email,
          application_version: this.state.appVersion,
          preferred_language: this.state.language,
          nature_of_message: this.state.messageNo,
          description: this.state.description,
          rating: this.state.rating,
          image_url: this.state.file.data
        }
      }
      this.sendFeedbackApiCallId = await this.apiCall({
        contentType: "application/json",
        method: "POST",
        endPoint: "bx_block_contact_us/contacts",
        // endPoint: "bx_block_feedback/feedbacks",
        token: token,
        body: apiData,
      });

      // OLD API CALLING //
      // this.sendFeedbackApiCallId = await this.apiCall({
      //   contentType: "application/json",
      //   method: "POST",
      //   endPoint: "bx_block_contact_us/contacts",
      //   token: token,
      //   body: apiData,
      // });
    }
  }
  // Customizable Area End
}
