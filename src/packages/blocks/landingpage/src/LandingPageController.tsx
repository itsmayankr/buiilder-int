import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { theHindu, economy, bbcHindi, national } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createRef } from "react";
// Customizable Area End

export const configJSON = require("./config");
export interface Props {
  navigation: any;
  id: string;
}

interface S {
  // Customizable Area Start
  popularMediaHouseArray: any;
  filteredArray: any;
  categoryArrayDynamic: any;
  categoryArray: any;
  popularMediaHouse: any;
  categories: any;
  searchVisible: boolean;
  searchValue: any;
  isLoading: boolean;
  isPlaying: boolean
  playlist: any[];
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class LandingPageController extends BlockComponent<Props, S, SS> {
  getPopularMediaHouseDataApicallId: any = "";
  getPopularCategoryDataApicallId: any = "";
  getAllArtclesDataApicallId: any = "";
  getSearchValueData: any = "";
  focusListener: any;
  playerRef: any;
  // isPlayerReady: boolean;

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    this.playerRef = createRef();
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
    ];

    this.state = {
      popularMediaHouseArray: [
        { name: 'The Hindu', image: theHindu },
        { name: 'Sydney Morning Hearled', image: bbcHindi },
        { name: 'BBC Hindi', image: bbcHindi },
      ],
      categoryArray: [
        { name: 'Sports', count: '17 Articles', image: economy },
        { name: 'Economy', count: '17 Articles', image: national },
        { name: 'National', count: '17 Articles', image: economy },
      ],
      categoryArrayDynamic: [],
      popularMediaHouse: [],
      filteredArray: [],
      categories: [],
      playlist: [],
      searchVisible: false,
      searchValue: "",
      isLoading: false,
      isPlaying: false

    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("on recieive==>" + JSON.stringify(message));

     // Customizable Area Start
    const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
    let responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
    let errorReponse = message.getData(getName(MessageEnum.RestAPIResponceErrorMessage));

    console.log("responseJson", responseJson);

    switch (apiRequestCallId) {
      case this.getPopularMediaHouseDataApicallId:
       this.handlePopularMediaHouseData(responseJson);
        break;

      case this.getAllArtclesDataApicallId:
        this.handleAllArticlesData(responseJson);
        break;

      case this.getPopularCategoryDataApicallId:
        this.handlePopularCategoryData(responseJson);
        break;

      case this.getSearchValueData:
        this.handleSearchValueData(responseJson);
        break;
    }

    if (errorReponse) {
      this.setState({ isLoading: false });
    }
    // Customizable Area End
  }

  // Customizable Area Start
  handlePopularMediaHouseData = (responseJson: any) => {
     if (responseJson && !responseJson.errors) {
          console.log("MEDIA-HOUSE-RESPONSE", responseJson);
          this.setState({ isLoading: false, popularMediaHouse: responseJson?.media_hosues.data });
        } else {
          console.log("MEDIA-HOUSE-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
     }
  }

  handleAllArticlesData = (responseJson: any) => {
    if (responseJson && !responseJson.errors) {
          console.log("ARTICLES-RESPONSE", responseJson);
          this.setState({ isLoading: false });
          let dataWithAudio = responseJson?.articles?.data?.filter((item: any) => item?.attributes?.audio_path);
          this.setPlayListDatafromApi(dataWithAudio);
        } else {
          console.log("ARTICLES-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
    }
  }

  handlePopularCategoryData = (responseJson: any) => {
    if (responseJson && !responseJson.errors) {
          console.log("CATEGORY-RESPONSE", responseJson);
          this.setState({ isLoading: false });
          let data = {
            attributes: {
              name: responseJson?.categories?.data[0].attributes?.name,
              image: responseJson?.categories?.data[0].attributes?.image
            }
          }
          let temp = [...responseJson?.categories?.data, data];
          let length = responseJson?.data?.length;
          console.log("length", length);
          if (length <= 2) {
            this.setState({ categoryArrayDynamic: temp });
          } else {
            this.setState({ categoryArrayDynamic: responseJson?.categories?.data });
          }

        } else {
          console.log("CATEGORY-RESPONSE-ERROR", responseJson);
          this.setState({ isLoading: false });
    }
  }

  handleSearchValueData = (responseJson: any) => {
     if (responseJson && !responseJson.errors) {
          console.log("SEARCH-RESPONSE", responseJson);
        } else {
          console.log("SEARCH-ERROR-RESPONSE", responseJson);
     }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    let token = await AsyncStorage.getItem('token');
    this.getPopularMediaHouseData(token);
    this.getPopularCategoryData(token);
    this.getAllArticlesData(token);
    this.focusListener = navigation.addListener("didFocus", () => {
      this.getPopularMediaHouseData(token);
      this.getPopularCategoryData(token);
      this.getAllArticlesData(token);
    });
  }

  async componentWillUnmount() {
    if (this.focusListener) this.focusListener = null;
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

  setPlayListDatafromApi = (data: any) => {
    let playlist: any[] = [];
    data?.map((item: any) => {
      if (item.attributes?.audio_path !== null) {
        playlist.push({
          id: item.id,
          url: item.attributes?.audio_path,
          title: item.attributes?.title,
          artist: item.attributes?.media_house,
          cover: item.attributes?.image,
          category: item.attributes?.category,
          description: item.attributes?.description,
          mediaHouseImage: item.attributes?.media_house_image,
          date: item.attributes?.created_at ? this.formateDate(item.attributes?.created_at) : null,
          // duration: item.attributes?.duration,
        })
      }
    })
    console.log("playlist", playlist);
    this.setState({ playlist: playlist })
  }

  formateDate = (date: any) => {
    date = new Date(date);
    let formattedDate = date.toLocaleString('default', { month: 'short', day: '2-digit', year: '2-digit' });
    console.log("formattedDate", formattedDate);
    if (formattedDate === 'Invalid Date') {
      return 'Sep 20, 22';
    }
    return formattedDate;
  }

  getPopularMediaHouseData = async (token: any) => {
    this.setState({isLoading:true}); 
    this.getPopularMediaHouseDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_admin/media_houses",
      token: token
      // body: apiData,
    });
  }

  getAllArticlesData = async (token: any) => {
    console.log("getAllArticlesData");
    this.getAllArtclesDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_articles/user_preferred_articles",
      token: token
      // body: apiData,
    });
  }

  getPopularCategoryData = async (token: any) => {
    console.log("getPopularCategoryData");
    this.getPopularCategoryDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_categories/categories",
      token: token
      // body: apiData,
    });
  }

  onPressSearch = () => {
    this.props.navigation.navigate('ElasticSearch')
  }

  onClickCancelSearch = () => {
    this.setState({ searchValue: "", searchVisible: false })
  }

  onChangeSearchValue = async (value: any) => {
    console.log("value", value);
    this.setState({ searchValue: value })
  }

  onSubmitSearch = async () => {
    console.log("searchValue", this.state.searchValue);
  }
  // Customizable Area End
}
