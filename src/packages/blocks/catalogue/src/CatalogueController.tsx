import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { createRef } from 'react';
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
  trendingMediaHouse: any;
  popularMediaHouseArray: any;
  allArticleArray: any;
  categoryArray: any;
  isMedia: boolean;
  enableScrollViewScroll: boolean
  isLoading: boolean;
  loading: boolean;
  perPage: any;
  page: any;
  onEndReachedCalledDuringMomentum: boolean,
  scrollDisabled: boolean,
  // Customizable Area End
}

interface SS {
  id: any;
}
export default class CatalogueController extends BlockComponent<Props, S, SS> {
  currentRef: any;
  getTrendingMediaApiCallId: string = "";
  getPopularMediaHouseDataApicallId: string = "";
  getCategoriesApiCallId: string = "";
  getAllArticlesApiCallId: string = ""

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area Start
      // Customizable Area End
    ];

    this.currentRef = createRef();

    this.state = {
      trendingMediaHouse: [],
      popularMediaHouseArray: [],
      allArticleArray: [],
      categoryArray: [],
      isMedia: false,
      enableScrollViewScroll: true,
      isLoading: false,
      loading: false,
      perPage: 6,
      page: 1,
      onEndReachedCalledDuringMomentum: true,
      scrollDisabled: false,
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area Start
    // Customizable Area End
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    let id = await AsyncStorage.getItem('userId');
    this.getTrendingMediaApi(token);
    this.getPopularMediaApi(token, id);
    this.getCategoriesMediaApi(token, id);
    this.getAllArticlesApi();
  }

  async receive(from: string, message: Message) {
    const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
    const responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
    const errorReponse = message.getData(getName(MessageEnum.RestAPIResponceErrorMessage));

    switch (apiRequestCallId) {
      case this.getTrendingMediaApiCallId:
        this.handleTrendingMediaApiResponse(responseJson, errorReponse);
        break;
      case this.getPopularMediaHouseDataApicallId:
        this.handlePopularMediaHouseDataApiResponse(responseJson, errorReponse);
        break;
      case this.getCategoriesApiCallId:
        this.handleCategoriesApiResponse(responseJson, errorReponse);
        break;
      case this.getAllArticlesApiCallId:
        this.handleAllArticlesApiResponse(responseJson, errorReponse);
        break;
    }

    if (errorReponse) {
      this.setState({ isLoading: false });
    }
  }

  // Customizable Area Start
  handleTrendingMediaApiResponse(responseJson: any, errorReponse: any) {
    if (responseJson && !responseJson.errors) {
      console.log("TRENDING-MEDIA-RESPONSE", responseJson);
      this.setState({ trendingMediaHouse: responseJson.data })
    } else {
      this.setState({ isLoading: false })
    }
  }

  handlePopularMediaHouseDataApiResponse(responseJson: any, errorReponse: any) {
    if (responseJson && !responseJson.errors) {
      console.log("POPULAR-MEDIA-RESPONSE", responseJson);
      this.setState({
        isLoading: false,
        popularMediaHouseArray: responseJson.media_hosues.data,
      });
    } else {
      this.setState({ isLoading: false })
    }
  }

  handleCategoriesApiResponse(responseJson: any, errorReponse: any) {
    if (responseJson && !responseJson.errors) {
      console.log("CATEGORIES-MEDIA-RESPONSE", responseJson);
      this.setState({
        categoryArray: responseJson.categories.data,
      });
    } else {
      this.setState({ isLoading: false })
    }
  }

  handleAllArticlesApiResponse(responseJson: any, errorReponse: any) {
    if (responseJson && !responseJson.errors) {
      console.log("ALL_ARTICLES-RESPONSE", responseJson);
      let temp: any;
      if (this.state.allArticleArray.length > 0) {
        temp = this.state.allArticleArray.concat(responseJson.articles.data)
      } else {
        temp = responseJson.articles.data
      }
      this.setState({ isLoading: false, loading: false, allArticleArray: temp })
    } else {
      console.log("ALL_ARTICLES-ERROR-RESPONSE");
      this.setState({ isLoading: false, loading: false })
    }
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, token } = data;
    console.log("endpoint", endPoint);
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
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async getTrendingMediaApi(token: any) {
    this.getTrendingMediaApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_articles/trending?preference=false",
      token: token
      // body: apiData,
    });
  }

  async getPopularMediaApi(token: any, id: any) {
    this.getPopularMediaHouseDataApicallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_admin/media_houses",
      // endPoint: "bx_block_admin/media_house_article?id=" + id,
      token: token
      // body: apiData,
    });
  }

  async getCategoriesMediaApi(token: any, id: any) {
    this.setState({ isLoading: true });
    this.getCategoriesApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_categories/categories",
      // endPoint: "bx_block_categories/category_article?id=" + id,
      token: token
      // body: apiData,
    });
  }
  
  async getAllArticlesApi() {
    let token = await AsyncStorage.getItem('token')
    this.getAllArticlesApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_articles/articles?per_page=" + this.state.perPage + "&page=" + this.state.page,
      token: token
      // body: apiData,
    });
  }

  onEndReached = async () => {
    console.log("onEndReached")
    this.setState({ page: this.state.page + 1, perPage: this.state.perPage })
    this.setState({ loading: true });
    this.getAllArticlesApi();
  }
  // Customizable Area End
}
