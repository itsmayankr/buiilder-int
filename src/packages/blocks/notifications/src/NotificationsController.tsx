import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';
export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

interface S {
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
  regionArray: any,
  languageArray: any,
  mediaHouseArray: any,
  categoryArray: any,

  countryIdArray: any;
  regionIdArray: any,
  languageIdArray: any,
  mediaHouseIdArray: any,
  categoryIdArray: any,

  isLoading: boolean;

  enable: boolean;
  scrollHeight: any;
}

interface SS {
  id: any;
}

export default class NotificationsController extends BlockComponent<Props, S, SS> {
  getDataCallId: string = "";
  markAsReadCallId: string = "";
  deleteCallId: string = "";

  getCountryDataApicallId: string = "";
  getRegionDataApicallId: string = "";
  getLanguageDataApicallId: string = "";
  getMediaHouseDataApicallId: string = "";
  getCategoryDataApicallId: string = "";
  showPrefrencesDataApiCallId: string = "";
  updatePrefrencesDataApiCallId: string = "";
  scrollRef: any;

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    this.scrollRef = React.createRef();
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = {
      country: [],
      region: '',
      language: '',
      mediaHouse: '',
      categories: '',
      countryDropdown: [
        // { label: 'India', value: '1', id: '1', index: 0, isSelected: false },
        // { label: 'Australia', value: '2', id: '2', index: 1, isSelected: false },
        // { label: 'America', value: '3', id: '3', index: 2, isSelected: false },
        // { label: 'Japan', value: '4', id: '4', index: 3, isSelected: false },

      ],
      regionDropdown: [
        // { label: 'Alasca', value: '1' },
        // { label: 'New York', value: '2' },
        // { label: 'Caliofirnia', value: '3' },
      ],
      languageDropdown: [
        // { label: 'Hindi', value: '1' },
        // { label: 'English', value: '2' },
      ],
      midiaHouseDropdown: [
        // { label: 'BBC', value: '1' },
        // { label: 'The Hindu', value: '2' },
      ],
      categoryDropdown: [
        // { label: 'Economy', value: '1' },
        // { label: 'Sports', value: '2' },
        // { label: 'National', value: '3' },
      ],

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

      enable: false,
      scrollHeight:null

    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.getCountryData();
    this.getRegionData();
    this.getCategoryData();
    this.getLanguageData();
    this.getMediaHouseData();
    this.showPrefrences();

    if (this.isPlatformWeb() === false) {
      this.props.navigation.addListener("willFocus", () => {
      });
    }
  }


  async receive(from: string, message: Message) {
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if (apiRequestCallId === this.getCountryDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("COUNTRY-RESPONSE", responseJson);
          let data = responseJson?.countries?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false
            }
          })
          this.setState({ countryDropdown: data }, () => {
            this.showPrefrences();
          })
        } else {
          console.log("COUNTRY-RESPONSE-ERROR", responseJson);
        }
      }

      if (apiRequestCallId === this.getRegionDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("REGION-RESPONSE", responseJson);
          let data = responseJson?.regions?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false
            }
          })
          this.setState({ regionDropdown: data })
        } else {
          console.log("REGION-RESPONSE-ERROR", responseJson);
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
              isSelected: false
            }
          })
          this.setState({ languageDropdown: data })
        } else {
          console.log("LANGUAGE-RESPONSE-ERROR", responseJson);
        }
      }

      if (apiRequestCallId === this.getMediaHouseDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("MEDIAHOUSE-RESPONSE", responseJson);
          let data = responseJson?.media_hosues?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.media_house,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false
            }
          })
          this.setState({ midiaHouseDropdown: data })
        } else {
          console.log("MEDIAHOUSE-RESPONSE-ERROR", responseJson);
        }
      }

      if (apiRequestCallId === this.getCategoryDataApicallId) {
        if (responseJson && !responseJson.errors) {
          console.log("CATEGORY-RESPONSE", responseJson);
          let data = responseJson?.categories?.data?.map((item: any, index: any) => {
            return {
              label: item?.attributes?.name,
              value: index + 1,
              id: item.id,
              index: index,
              isSelected: false
            }
          })
          this.setState({ categoryDropdown: data })
        } else {
          console.log("CATEGORY-RESPONSE-ERROR", responseJson);
        }
      }

      if (apiRequestCallId === this.showPrefrencesDataApiCallId) {
        if (responseJson && !responseJson.errors) {
          console.log("SHOW-PREFRENCES-RESPONSE", responseJson);
          
          this.setState({ isLoading: false, countryIdArray:[], regionIdArray:[],languageIdArray:[],mediaHouseIdArray:[],categoryIdArray:[] });
          if (responseJson?.data?.attributes?.countries) {
            this.setState({isLoading: false});
            let countryTemp = responseJson?.data?.attributes?.countries?.map((item: any, index: any) => {
              return {
                label: item?.name,
                value: index + 1,
                id: JSON.stringify(item.id),
                index: index,
                // isSelected: false
              }
            })
            let countryData = countryTemp?.map((item: any, index: any) => {
              this.state.countryDropdown.map((item1: any, index1: any) => {
                if (item.id === item1.id) {
                  this.state.countryDropdown[index1].isSelected = true;
                  index = index1;
                  let temp = [...this.state.countryIdArray,JSON.parse(item.id)];
                  this.setState({countryIdArray: temp})
                }
              })
              return index
            })
            this.setState({ country: countryData });
          }
          if (responseJson?.data?.attributes?.regions) {
            let regionTemp = responseJson?.data?.attributes?.regions?.map((item: any, index: any) => {
              return {
                label: item?.name,
                value: index + 1,
                id: JSON.stringify(item.id),
                index: index,
                // isSelected: false
              }
            })
            let regionData = regionTemp?.map((item: any, index: any) => {
              this.state.regionDropdown.map((item1: any, index1: any) => {
                if (item.id === item1.id) {
                  this.state.regionDropdown[item1.index].isSelected = true;
                  index = index1;
                  let temp = [...this.state.regionIdArray, JSON.parse(item.id)];
                  this.setState({regionIdArray: temp})
                }
              })
              return index
            })
            this.setState({ region: regionData });
          }
          if (responseJson?.data?.attributes?.languages) {
            let languageTemp = responseJson?.data?.attributes?.languages?.map((item: any, index: any) => {
              return {
                label: item?.language,
                value: index + 1,
                id: JSON.stringify(item.id),
                index: index,
                // isSelected: false
              }
            })
            let languageData = languageTemp?.map((item: any, index: any) => {
              this.state.languageDropdown.map((item1: any, index1: any) => {
                if (item.id === item1.id) {
                  this.state.languageDropdown[item1.index].isSelected = true;
                  index = index1;
                  let temp = [...this.state.languageIdArray, JSON.parse(item.id)];
                  this.setState({languageIdArray: temp})
                }
              })
              return index
            })
            this.setState({ language: languageData });
          }
          if (responseJson?.data?.attributes?.media_houses) {
            let mediaHouseTemp = responseJson?.data?.attributes?.media_houses?.map((item: any, index: any) => {
              return {
                label: item?.media_house,
                value: index + 1,
                id: JSON.stringify(item.id),
                index: index,
                // isSelected: false
              }
            })
            let mediaHousesData = mediaHouseTemp?.map((item: any, index: any) => {
              this.state.midiaHouseDropdown.map((item1: any, index1: any) => {
                if (item.id === item1.id) {
                  this.state.midiaHouseDropdown[item1.index].isSelected = true;
                  index = index1;
                  let temp = [...this.state.mediaHouseIdArray, JSON.parse(item.id)];
                  this.setState({mediaHouseIdArray: temp})
                }
              })
              return index
            })
            this.setState({ mediaHouse: mediaHousesData });
          }
          if (responseJson?.data?.attributes?.categories) {
            let categoryTemp = responseJson?.data?.attributes?.categories?.map((item: any, index: any) => {
              return {
                label: item?.name,
                value: index + 1,
                id: JSON.stringify(item.id),
                index: index,
                // isSelected: false
              }
            })
            let categoriesData = categoryTemp?.map((item: any, index: any) => {
              this.state.categoryDropdown.map((item1: any, index1: any) => {
                if (item.id === item1.id) {
                  this.state.categoryDropdown[item1.index].isSelected = true;
                  index = index1;
                  let temp = [...this.state.categoryIdArray,JSON.parse(item.id)];
                  this.setState({categoryIdArray: temp})
                }
              })
              return index
            })
            this.setState({ categories: categoriesData });
          }
        } else {
          console.log("SHOW-PREFRENCES-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
        }
      }

      if(apiRequestCallId === this.updatePrefrencesDataApiCallId) {
        if (responseJson && !responseJson.errors) {
          this.setState({isLoading: false});
          console.log("UPDATE-PREFRENCES-RESPONSE", responseJson);
          Alert.alert(
            "Preferences updated",
            "Your preferences have been updated successfully!",
            [
              { text: "OK", onPress: () => this.props.navigation.navigate('LandingPage') }
            ]
          )
        } else {
          this.setState({isLoading: false});
          console.log("UPDATE-PREFRENCES-RESPONSE-ERROR", responseJson);
        }
      }
    }
  }

  // async getSelectedPrefrencesData() {
  //   let data: any = await AsyncStorage.getItem("signUpData");
  //   let d = JSON.parse(data);
  //   console.log("Data", d?.attributes?.languages);
  //   let temp = d?.attributes?.languages;
  //   let Data = temp.map((item: any, index: any) => {
  //     this.state.countryDropdown.map((item: any, index1: any) => {
  //       if (index === index1) {
  //         this.state.countryDropdown[index].isSelected = !this.state.countryDropdown[index].isSelected
  //       }
  //     })
  //     return index
  //   })
  //   console.log('DataIndex', Data)
  //   this.setState({ country: Data });
  // }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
    console.log("BODY", body);

    const header = {
      "Content-Type": contentType,
      token: token ? token : ''
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

  getCountryData = async () => {
    this.getCountryDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_location/countries",
      // token: token
      // body: apiData,
    });
  }
  getRegionData = async () => {
    this.getRegionDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_location/regions",
    });
  }
  getLanguageData = async () => {
    this.getLanguageDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_language_options/languages",
    });
  }
  getMediaHouseData = async () => {
    this.getMediaHouseDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_admin/media_houses",
    });
  }
  getCategoryData = async () => {
    this.getCategoryDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_categories/categories",
    });
  }

  showPrefrences = async () => {
    let token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: true });
    this.showPrefrencesDataApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "account_block/show_preference",
      token: token
    });
  }

  timeSince(date: string) {
    let seconds = Math.floor(
      (new Date().valueOf() - new Date(date).valueOf()) / 1000
    );
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  convertDate(inputFormat: string) {
    function pad(s: any) {
      return s < 10 ? "0" + s : s;
    }
    let d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("-");
  }

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
    if (index.isSelected) {
      temp = [...IdArray, JSON.parse(index.id)];
    } else {
      for (let item of IdArray) {
        if (item == JSON.parse(index.id)) {
          let ind = IdArray.findIndex((e:any) => e == JSON.parse(index.id))
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

  onClickSavePrefrences = async () => { 
    let token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: true });
    let apiData = {
      data: {
        custom_information: {
          country_id: this.state.countryIdArray,
          region_id: this.state.regionIdArray,
          language_id: this.state.languageIdArray,
          media_house_id: this.state.mediaHouseIdArray,
          category_id: this.state.categoryIdArray
        } 
      },
    };
    this.updatePrefrencesDataApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "PUT",
      endPoint: "account_block/update_preference",
      body: apiData,
      token: token,
    });
  }

}
