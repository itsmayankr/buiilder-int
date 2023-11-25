import React from 'react';
import { IBlock } from '../../../framework/src/IBlock';
import { Message } from '../../../framework/src/Message';
import { BlockComponent } from '../../../framework/src/BlockComponent';
import { runEngine } from '../../../framework/src/RunEngine';
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum';

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from './assets';
import { CommonStyle } from '../../../components/src/ClientGlobals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
// Customizable Area End

export const configJSON = require('./config');

export interface Props {
  navigation: any;
  id: string;
}

export interface S {
  // Customizable Area Start
  email: string;
  fullName: string;
  mobileNo: string;
  unFormattedMobileNo: string;
  password: string;
  confirmPasswoord: string;
  isValidEmail: boolean;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  isValidPassword: boolean;
  isValidPasswordlength: boolean
  isValidPasswordMatch: boolean;
  isValidMobileNo: boolean;
  activeTab: string;
  country: any;
  region: any;
  language: any;
  mediaHouse: any;
  categories: any;
  countryDropdown: any;
  regionDropdown: any;
  languageDropdown: any;
  midiaHouseDropdown: any;
  categoryDropdown: any;
  countryArray: any;
  regionArray: any;
  languageArray: any;
  mediaHouseArray: any;
  categoryArray: any;

  countryIdArray: any;
  regionIdArray: any;
  languageIdArray: any;
  mediaHouseIdArray: any;
  categoryIdArray: any;

  isLoading: boolean;
  isPreferences: boolean;
  token: any;
  selected: any;
  isRegistered: boolean;
  countryIddArray: any;
  seletedIndex: any;
  termsAndConditionModal: boolean;
  termsAndCondition: any;
  isSkipped: boolean;
  countryCode: any;
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountRegistrationController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start  
  multiselect: any;
  phoneInput: any;
  registerApiCallId: string = '';
  getCountryDataApicallId: string = '';
  getRegionDataApicallId: string = '';
  getLanguageDataApicallId: string = '';
  getMediaHouseDataApicallId: string = '';
  getCategoryDataApicallId: string = '';
  createAccountApiCallId: string = '';
  getTermsAndConditionApiCallId: string;
  // Customizable Area End
  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      // getName(MessageEnum.NavigationPayLoadMessage),
      // getName(MessageEnum.CountryCodeMessage)
    ];
    this.receive = this.receive.bind(this);
    this.multiselect = React.createRef();

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {
      // Customizable Area Start
      email: '',
      fullName: '',
      mobileNo: '',
      unFormattedMobileNo: '',
      password: '',
      confirmPasswoord: '',
      isValidEmail: false,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      isValidPassword: false,
      isValidPasswordlength: false,
      isValidPasswordMatch: false,
      isValidMobileNo: true,
      activeTab: 'SignUp1',
      country: '',
      region: '',
      language: '',
      mediaHouse: '',
      categories: '',
      countryDropdown: [],
      regionDropdown: [],
      languageDropdown: [],
      midiaHouseDropdown: [],
      categoryDropdown: [],
      countryArray: [],
      regionArray: [],
      languageArray: [],
      mediaHouseArray: [],
      categoryArray: [],

      countryIdArray: [],
      regionIdArray: [],
      languageIdArray: [],
      mediaHouseIdArray: [],
      categoryIdArray: [],

      isLoading: false,
      isPreferences: false,
      token: '',
      selected: [],
      isRegistered: false,
      countryIddArray: [],
      seletedIndex: null,
      termsAndConditionModal: false,
      termsAndCondition: "",
      isSkipped: false,
      countryCode: "",
      // Customizable Area End
    };
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    this.setState({ token: token });
    // if (token) {
    this.getCountryData();
    this.getRegionData();
    this.getCategoryData();
    this.getLanguageData();
    this.getMediaHouseData();
    this.getTermsAndConditions();
    // }
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
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

      if (apiRequestCallId === this.registerApiCallId) {
        if (responseJson && !responseJson.errors) {
          // console.log("REGISTER-RESPONSE", responseJson);
          this.setState({
            isLoading: false,
            activeTab: 'SignUp2',
            isPreferences: true,
            token: responseJson?.meta?.token,
          });
          await AsyncStorage.setItem('token', responseJson?.meta?.token);
        } else {
          // console.log("REGISTER-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
          if (responseJson?.errors[0]?.email) {
            Alert.alert('Email ' + responseJson?.errors[0]?.email);
          } else if (responseJson?.errors[0]?.password) {
            Alert.alert('Password ' + responseJson?.errors[0]?.password);
          } else {
            Alert.alert(responseJson?.errors[0]);
          }
        }
      }

      if (apiRequestCallId === this.createAccountApiCallId) {
        if (responseJson && !responseJson.errors) {
          if (this.state.isSkipped) {
            this.setState({ isLoading: false });
            const userID: [string, string] = ['userId', responseJson?.data?.id];
            const token: [string, string] = ['token', responseJson?.meta?.token];
            const email: [string, string] = ['email', responseJson?.data?.attributes?.email];
            const fullName: [string, string] = ['fullName', responseJson?.data?.attributes?.full_name];
            await AsyncStorage.multiSet([userID, token, email, fullName]);
            await AsyncStorage.setItem('country_code',JSON.stringify(this.state.countryCode));
            this.props.navigation.navigate('LandingPage');
          } else {
            this.setState({ isLoading: false, isRegistered: true });
            const userID: [string, string] = ['userId', responseJson?.data?.id];
            const token: [string, string] = ['token', responseJson?.meta?.token];
            await AsyncStorage.multiSet([userID, token]);
            await AsyncStorage.setItem('country_code',JSON.stringify(this.state.countryCode));
          }
        } else {
          console.log("CREATE-RESPONSE", responseJson);
          this.setState({ isLoading: false });
          if (responseJson?.errors[0]?.token) {
            Alert.alert('Token ' + responseJson?.errors[0]?.token);
          }
          if (responseJson?.errors[0]?.email) {
            Alert.alert('Email ' + responseJson?.errors[0]?.email + '.');
          } else if (responseJson?.errors[0]?.password) {
            Alert.alert('Password ' + responseJson?.errors[0]?.password);
          } else if (responseJson?.errors[0].failed) {
            Alert.alert("Email", responseJson?.errors[0].failed + '.');
          } else if (responseJson?.errors[0].account) {
            Alert.alert("Account", responseJson?.errors[0].account + '.');
          } else {
            Alert.alert(responseJson?.errors[0]);
          }
        }
      }

      if (apiRequestCallId === this.getCountryDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("COUNTRY-RESPONSE", responseJson);
          let data = responseJson?.countries?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false,
            };
          });
          this.setState({ countryDropdown: data }, () => {
            // console.log("countryDropdown", this.state.countryDropdown)
          });
          // console.log("Data", data);
        } else {
          console.log("COUNTRY-RESPONSE-ERROR", responseJson);
        }
      }

      if (apiRequestCallId === this.getRegionDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log('REGION-RESPONSE', responseJson);
          let data = responseJson?.regions?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false,
            };
          });
          this.setState({ regionDropdown: data });
          // console.log("Data", data);
        } else {
          console.log('REGION-RESPONSE-ERROR', responseJson);
        }
      }

      if (apiRequestCallId === this.getLanguageDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("LANGUAGE-RESPONSE", responseJson);
          let data = responseJson?.languages?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.language,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false,
            };
          });
          this.setState({ languageDropdown: data });
          // console.log("Data", data);
        } else {
          console.log('LANGUAGE-RESPONSE-ERROR', responseJson);
        }
      }

      if (apiRequestCallId === this.getMediaHouseDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("MEDIAHOUSE-RESPONSE", responseJson);
          let data = responseJson?.media_hosues.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.media_house,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false,
            };
          });
          this.setState({ midiaHouseDropdown: data });
          // console.log("Data", data);
        } else {
          console.log('MEDIAHOUSE-RESPONSE-ERROR', responseJson);
        }
      }

      if (apiRequestCallId === this.getCategoryDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("CATEGORY-RESPONSE", responseJson);
          let data = responseJson?.categories.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false,
            };
          });
          this.setState({ categoryDropdown: data });
          // console.log("Data", data);
        } else {
          console.log('CATEGORY-RESPONSE-ERROR', responseJson);
        }
      }

      if (apiRequestCallId === this.getTermsAndConditionApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log("TERMS&COND-RESPONSE", responseJson);
          let Data = "";
          let Data1 = "";

          if (responseJson?.data && responseJson?.data?.attributes && responseJson.data?.attributes?.description) {
            this.setState({ termsAndCondition: responseJson?.data?.attributes?.description })
            // if (responseJson?.data?.attributes?.description?.includes('<p>')) {
            //   Data = responseJson?.data?.attributes?.description?.split('<p>').join('');
            //   if (Data?.includes('</p>')) {
            //     Data1 = Data.split('</p>').join('\n');
            //     this.setState({ termsAndCondition: Data1 }, () => {
            //       console.log("Data1", this.state.termsAndCondition)
            //     })
            //   } else {
            //     this.setState({ termsAndCondition: Data }, () => {
            //       console.log("Data", this.state.termsAndCondition)
            //     })
            //   }
            // }
          }
          this.setState({ isLoading: false })
        } else {
          console.log("TERMS&COND-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, type, token } = data;
    // console.log("BODY", body);

    const header = {
      'Content-Type': contentType,
      token: token ? token : '',
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

  getCountryData = async () => {
    this.getCountryDataApicallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_location/countries',
      // token: token
      // body: apiData,
    });
  };
  getRegionData = async () => {
    this.getRegionDataApicallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_location/regions',
      // token: token
      // body: apiData,
    });
  };
  getLanguageData = async () => {
    this.getLanguageDataApicallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_language_options/languages',
      // token: token
      // body: apiData,
    });
  };
  getMediaHouseData = async () => {
    this.getMediaHouseDataApicallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_admin/media_houses',
      // token: token
      // body: apiData,
    });
  };
  getCategoryData = async () => {
    this.getCategoryDataApicallId = await this.apiCall({
      contentType: 'application/json',
      method: 'GET',
      endPoint: 'bx_block_categories/categories',
      // token: token
      // body: apiData,
    });
  };

  async getTermsAndConditions() {
    let token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: true });
    this.getTermsAndConditionApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_termsandconditions/terms_and_conditions",
      // token: token
    });
  }

  createAccountApi = async () => {
    this.setState({ isLoading: true });
    let apiData = {
      data: {
        type: "email_account",
        account: {
          email: this.state.email,
          full_phone_number: this.state.mobileNo,
          full_name: this.state.fullName,
          password: this.state.password,
          // image_url: ""
        },
        custom_information: {
          country_id: this.state.countryIdArray,
          region_id: this.state.regionIdArray,
          language_id: this.state.languageIdArray,
          media_house_id: this.state.mediaHouseIdArray,
          category_id: this.state.categoryIdArray,
        },
      },
    };

    this.createAccountApiCallId = await this.apiCall({
      contentType: 'application/json',
      method: 'POST',
      endPoint: 'account_block/accounts',
      body: apiData,
      // token: token
    });
  };

  // switchTab = () => {
  //   if (this.state.activeTab == "SignUp1") {
  //     this.setState({ activeTab: "SignUp2" });
  //   } else {
  //     this.setState({ activeTab: "SignUp1" });
  //   }
  // };
  goBack = () => this.setState({ activeTab: 'SignUp1' });
  goBack1 = () => this.props.navigation.navigate('EmailAccountLoginBlock');
  handlePasswordVisibility = () =>
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible,
    });

  handleConfirmPasswordVisibility = () =>
    this.setState({
      isConfirmPasswordVisible: !this.state.isConfirmPasswordVisible,
    });

  handleTermsAndConditionModal = () =>
    this.setState({ termsAndConditionModal: true });

  // onChangeItem = (item: any, index: any, type: any) => {
  //   if (type === 'country') {
  //     let option = [...this.state.countryDropdown];
  //     if (option.length > 0) {
  //       option[index.index].isSelected = !option[index.index].isSelected;
  //     }
  //     // let temp = [...this.state.countryIdArray, index.id];
  //     let temp: any = [];
  //     if (index.isSelected == true) {
  //       temp = [...this.state.countryIdArray, JSON.parse(index.id)];
  //     } else {
  //       for (let item of this.state.countryIdArray) {
  //         if (item == JSON.parse(index.id)) {
  //           let ind = this.state.countryIdArray.findIndex(
  //             (e: any) => e == JSON.parse(index.id)
  //           );
  //           let del = this.state.countryIdArray.splice(ind, 1);
  //           temp = [...this.state.countryIdArray];
  //         }
  //       }
  //     }
  //     this.setState({
  //       country: item,
  //       countryDropdown: option,
  //       countryIdArray: temp,
  //     });
  //   } else if (type === 'region') {
  //     let option = [...this.state.regionDropdown];
  //     option[index.index].isSelected = !option[index.index].isSelected;
  //     // let temp = [...this.state.regionIdArray, index.id];
  //     let temp: any = [];
  //     if (index.isSelected == true) {
  //       temp = [...this.state.regionIdArray, JSON.parse(index.id)];
  //     } else {
  //       for (let item of this.state.regionIdArray) {
  //         if (item == JSON.parse(index.id)) {
  //           let ind = this.state.regionIdArray.findIndex(
  //             (e: any) => e == JSON.parse(index.id)
  //           );
  //           let del = this.state.regionIdArray.splice(ind, 1);
  //           temp = [...this.state.regionIdArray];
  //         }
  //       }
  //     }
  //     // console.log("temp", item)
  //     this.setState({
  //       region: item,
  //       regionDropdown: option,
  //       regionIdArray: temp,
  //     });
  //   } else if (type === 'language') {
  //     let option = [...this.state.languageDropdown];
  //     option[index.index].isSelected = !option[index.index].isSelected;
  //     // let temp = [...this.state.languageIdArray, index.id];
  //     let temp: any = [];
  //     if (index.isSelected == true) {
  //       temp = [...this.state.languageIdArray, JSON.parse(index.id)];
  //     } else {
  //       for (let item of this.state.languageIdArray) {
  //         if (item == JSON.parse(index.id)) {
  //           let ind = this.state.languageIdArray.findIndex(
  //             (e: any) => e == JSON.parse(index.id)
  //           );
  //           let del = this.state.languageIdArray.splice(ind, 1);
  //           temp = [...this.state.languageIdArray];
  //         }
  //       }
  //     }
  //     this.setState({
  //       language: item,
  //       languageDropdown: option,
  //       languageIdArray: temp,
  //     });
  //   } else if (type === 'media') {
  //     let option = [...this.state.midiaHouseDropdown];
  //     option[index.index].isSelected = !option[index.index].isSelected;
  //     // let temp = [...this.state.mediaHouseIdArray, index.id];
  //     let temp: any = [];
  //     if (index.isSelected == true) {
  //       temp = [...this.state.mediaHouseIdArray, JSON.parse(index.id)];
  //     } else {
  //       for (let item of this.state.mediaHouseIdArray) {
  //         if (item == JSON.parse(index.id)) {
  //           let ind = this.state.mediaHouseIdArray.findIndex(
  //             (e: any) => e == JSON.parse(index.id)
  //           );
  //           let del = this.state.mediaHouseIdArray.splice(ind, 1);
  //           temp = [...this.state.mediaHouseIdArray];
  //         }
  //       }
  //     }
  //     this.setState({
  //       mediaHouse: item,
  //       midiaHouseDropdown: option,
  //       mediaHouseIdArray: temp,
  //     });
  //   } else {
  //     let option = [...this.state.categoryDropdown];
  //     option[index.index].isSelected = !option[index.index].isSelected;
  //     // let temp = [...this.state.categoryIdArray, index.id];
  //     let temp: any = [];
  //     if (index.isSelected == true) {
  //       temp = [...this.state.categoryIdArray, JSON.parse(index.id)];
  //     } else {
  //       for (let item of this.state.categoryIdArray) {
  //         if (item == JSON.parse(index.id)) {
  //           let ind = this.state.categoryIdArray.findIndex(
  //             (e: any) => e == JSON.parse(index.id)
  //           );
  //           let del = this.state.categoryIdArray.splice(ind, 1);
  //           temp = [...this.state.categoryIdArray];
  //         }
  //       }
  //     }
  //     this.setState({
  //       categories: item,
  //       categoryDropdown: option,
  //       categoryIdArray: temp,
  //     });
  //   }
  //   // let result = this.state.countryDropdown.find((key: any) => key.id === data && data[0].id)
  //   // let result = this.state.countryDropdown.filter(o1 => data.find(o2 => o1.id === o2.id));
  // };

  onChangeItem = (item: any, index: any, type: any) => {
    switch (type) {
      case 'country':
        const setCountryDropDown = this.onChangeDropDownItem(item, index, this.state.countryDropdown, this.state.countryIdArray);
        this.setState({
          country: setCountryDropDown.item,
          countryDropdown: setCountryDropDown.dropDown,
          countryIdArray: setCountryDropDown.IdArray,
        });
        break;
      case 'region':
        const setRegionDropDown = this.onChangeDropDownItem(item, index, this.state.regionDropdown, this.state.regionIdArray);
        this.setState({
          region: setRegionDropDown.item,
          regionDropdown: setRegionDropDown.dropDown,
          regionIdArray: setRegionDropDown.IdArray,
        });
        break;
      case 'language':
        const setLanguageDropDown = this.onChangeDropDownItem(item, index, this.state.languageDropdown, this.state.languageIdArray);
        this.setState({
          language: setLanguageDropDown.item,
          languageDropdown: setLanguageDropDown.dropDown,
          languageIdArray: setLanguageDropDown.IdArray,
        });
        break;
      case 'media':
        const setMediaDropDown = this.onChangeDropDownItem(item, index, this.state.midiaHouseDropdown, this.state.mediaHouseIdArray);
        this.setState({
          mediaHouse: setMediaDropDown.item,
          midiaHouseDropdown: setMediaDropDown.dropDown,
          mediaHouseIdArray: setMediaDropDown.IdArray,
        });
        break;
      default:
        const setCategoryDropDown = this.onChangeDropDownItem(item, index, this.state.categoryDropdown, this.state.categoryIdArray);
        this.setState({
          categories: setCategoryDropDown.item,
          categoryDropdown: setCategoryDropDown.dropDown,
          categoryIdArray: setCategoryDropDown.IdArray,
        });
        break;
    }
  }

  onChangeDropDownItem = (item: any, index: any, dropDown: any, IdArray: any) => {
    let option = [...dropDown];
    if (option.length > 0) {
      option[index.index].isSelected = !option[index.index].isSelected;
    }
    let temp: any = [];
    if (index.isSelected == true) {
      temp = [...IdArray, JSON.parse(index.id)];
    } else {
      for (let item of IdArray) {
        if (item == JSON.parse(index.id)) {
          let ind = IdArray.findIndex(
            (e: any) => e == JSON.parse(index.id)
          );
          IdArray.splice(ind, 1);
          temp = [...IdArray];
        }
      }
    }
    return {
      dropDown: option,
      IdArray: temp,
      item: item
    }
  }

  // countrySelector = (item: any, type: any) => {
  //   // console.log("type", item);
  //   if (type == "country") {
  //     let temp = [...this.state.countryArray, item.label];
  //     let temp1 = [...this.state.countryIdArray, item.id];
  //     this.setState({
  //       country: item.value,
  //       countryArray: temp,
  //       countryIdArray: temp1,
  //     });
  //   } else if (type == "region") {
  //     let temp = [...this.state.regionArray, item.label];
  //     let temp1 = [...this.state.regionIdArray, item.id];
  //     this.setState({
  //       region: item.value,
  //       regionArray: temp,
  //       regionIdArray: temp1,
  //     });
  //   } else if (type == "language") {
  //     let temp = [...this.state.languageArray, item.label];
  //     let temp1 = [...this.state.languageIdArray, item.id];
  //     this.setState({
  //       language: item.value,
  //       languageArray: temp,
  //       languageIdArray: temp1,
  //     });
  //   } else if (type == "media") {
  //     let temp = [...this.state.mediaHouseArray, item.label];
  //     let temp1 = [...this.state.mediaHouseIdArray, item.id];
  //     this.setState({
  //       mediaHouse: item.value,
  //       mediaHouseArray: temp,
  //       mediaHouseIdArray: temp1,
  //     });
  //   } else {
  //     let temp = [...this.state.categoryArray, item.label];
  //     let temp1 = [...this.state.categoryIdArray, item.id];
  //     this.setState({
  //       categories: item.value,
  //       categoryArray: temp,
  //       categoryIdArray: temp1,
  //     });
  //   }
  // };

  // deleteItem = (item: any, index: any, type: any) => {
  //   if (type == "country") {
  //     let temp = this.state.countryArray.splice(index, 1);
  //     let temp1 = [...this.state.countryArray];
  //     this.setState({ countryArray: temp1 });
  //   } else if (type == "region") {
  //     let temp = this.state.regionArray.splice(index, 1);
  //     let temp1 = [...this.state.regionArray];
  //     this.setState({ regionArray: temp1 });
  //   } else if (type == "language") {
  //     let temp = this.state.languageArray.splice(index, 1);
  //     let temp1 = [...this.state.languageArray];
  //     this.setState({ languageArray: temp1 });
  //   } else if (type == "media") {
  //     let temp = this.state.mediaHouseArray.splice(index, 1);
  //     let temp1 = [...this.state.mediaHouseArray];
  //     this.setState({ mediaHouseArray: temp1 });
  //   } else {
  //     let temp = this.state.categoryArray.splice(index, 1);
  //     let temp1 = [...this.state.categoryArray];
  //     this.setState({ categoryArray: temp1 });
  //   }
  // };

  onChangeRegisterPassword = (text: any) => {
    // console.log("text", text)
    // let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/;
    if (text != '') {
      if (reg.test(text)) {
        this.setState({ password: text, isValidPassword: false });
      } else {
        this.setState({ password: text, isValidPassword: true });
      }
    } else {
      this.setState({ password: text, isValidPassword: false });
    }
  };

  onChangeConfirmPassword = (text: any) => {
    if (text != '') {
      if (text === this.state.password) {
        this.setState({ confirmPasswoord: text, isValidPasswordMatch: false });
      } else {
        this.setState({ confirmPasswoord: text, isValidPasswordMatch: true });
      }
    } else {
      this.setState({ confirmPasswoord: text, isValidPasswordMatch: false });
    }
  };

  // onChangeMobileNo = (text: any) => {
  //   let value = text.replace(/[`~a-zA-Z !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  //   // console.log("value", value);
  //   this.setState({ mobileNo: value })
  // }

  onChangeMobileNo = (text: string) => {
    let value = text.replace(/[`~a-zA-Z !@#$%^&*()_|+\-=?₹€£¥;:'",.<>\{\}\[\]\\\/]/gi, "");
    this.setState({ mobileNo: value, unFormattedMobileNo: value });
  };

  onChangeFormattedMobileNo = (text: string) => {
    let value = text.replace(/[`~a-zA-Z !@#$%^&*()_|+\-=?₹€£¥;:'",.<>\{\}\[\]\\\/]/gi, "");
    // this.setState({ mobileNo: value });
  };

  onChangeUnformattedMobileNo = (text: string) => {
    let value = text.replace(/[`~a-zA-Z !@#$%^&*()_|+\-=?₹€£¥;:'",.<>\{\}\[\]\\\/]/gi, "");
    this.setState({ unFormattedMobileNo: value });
  };

  onChangeIsValidMobileNo = (text: boolean) => {
    this.setState({ isValidMobileNo: text });
  };

  onChangeEmail = (value: string) => {
    this.setState({ email: value });
  };

  onChangeFullname = (text: string) => {
    this.setState({ fullName: text });
  };

  onChosseCountryCode = (selectedCountry: any) => {
    console.log("selectedCountry",selectedCountry);
    this.setState({countryCode:selectedCountry})
  }

  onClickNext = () => {
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/;
    let text = this.state.email;
    if (this.state.email == '' || this.state.email == null) {
      //  this.setState({isValidEmail: true})
      alert('Please enter email.');
    } else if (emailReg.test(text) === false) {
      alert('Please enter valid email.');
    } else if (this.state.fullName == "" || this.state.fullName == null) {
      alert('Please enter full name.');
    } else if (this.state.mobileNo != "" && !this.state.isValidMobileNo) {
      alert('Please enter valid mobile number.');
    } else if (this.state.password == "" || this.state.password == null) {
      alert('Please enter password.');
    } else if(passwordReg.test(this.state.password) === false) {
      alert('Please enter valid password.');
    } else if (this.state.confirmPasswoord == "" || this.state.confirmPasswoord == null) {
      alert('Please enter confirm password.');
    } else if(passwordReg.test(this.state.confirmPasswoord) === false) {
      alert('Please enter valid confirm password.');
    } else if (this.state.password != this.state.confirmPasswoord) {
      alert('Password does not match.');
    } else {
      this.setState({ activeTab: 'SignUp2' });
    }
    
    // this.registerAccountApi();
  };

  onClickSkipSignUp = async () => {
    this.setState({ isLoading: true, isSkipped: true });
    let apiData = {
      data: {
        type: "email_account",
        account: {
          email: this.state.email,
          full_phone_number: this.state.mobileNo,
          full_name: this.state.fullName,
          password: this.state.password,
        },
        custom_information: {
          country_id: this.state.countryIdArray,
          region_id: this.state.regionIdArray,
          language_id: this.state.languageIdArray,
          media_house_id: this.state.mediaHouseIdArray,
          category_id: this.state.categoryIdArray,
        },
      },
    };
    console.log("SkipSignUp", apiData);

    this.createAccountApiCallId = await this.apiCall({
      contentType: 'application/json',
      method: 'POST',
      endPoint: 'account_block/accounts',
      body: apiData,
    });
  }

  onClickCreateAccount = async () => {
    // if (this.state.countryIdArray.length == 0) {
    //   alert('Please choose country.')
    // } else if (this.state.regionIdArray.length == 0) {
    //   alert('Please choose region.')
    // } else if (this.state.languageIdArray.length == 0) {
    //   alert('Please choose language.')
    // } else if (this.state.mediaHouseIdArray.length == 0) {
    //   alert('Please choose media house.')
    // } else if (this.state.categoryIdArray.length == 0) {
    //   alert('Please choose category.')
    // } else {
    //   this.createAccountApi();
    // }
    this.createAccountApi();
  };
  // Customizable Area End
}
