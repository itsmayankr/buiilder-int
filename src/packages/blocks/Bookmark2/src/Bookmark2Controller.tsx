import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createRef } from "react";
import TrackPlayer from "react-native-track-player";
import moment from "moment";
import { Platform } from 'react-native'
// Customizable Area Start

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  playlist: any;
  playlistArticles: any;
  isLoading: boolean;
  movePlaylistPopup: boolean;
  moveTop: boolean;
  moveLast: boolean;
  Remove: boolean;
  allArticleArray: any;
  articlesIdsArray: any;
  playlistIdsArray: any;
  saveToPlaylistPopup: boolean,
  uiRender: boolean,
  listItem: any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class Bookmark2Controller extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  getArticlesInPlaylistApiCallId: string = "";
  getAllArticlesApiCallId: string = "";
  removeArticlesApiCallId: string = "";
  moveArticleApiCallId: string = "";
  addArticlesInPlaylistApiCallId: string = "";
  playerRef: any;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.playerRef = createRef();

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      playlist: [],
      playlistArticles: "",
      isLoading: true,
      movePlaylistPopup: false,
      moveTop: false,
      moveLast: false,
      Remove: false,
      allArticleArray: [],
      articlesIdsArray: [],
      playlistIdsArray: [],
      saveToPlaylistPopup: false,
      uiRender: false,
      listItem: "",
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) !== message.id) {
      return;
    }

    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );
    const responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );

    switch (apiRequestCallId) {
      case this.getArticlesInPlaylistApiCallId:
        this.handleGetArticlesInPlaylistResponse(responseJson);
        break;

      case this.getAllArticlesApiCallId:
        this.handleGetAllArticlesResponse(responseJson);
        break;

      case this.removeArticlesApiCallId:
        this.handleRemoveArticlesResponse(responseJson);
        break;

      case this.moveArticleApiCallId:
        this.handleMoveArticleResponse(responseJson, apiRequestCallId);
        break;

      case this.addArticlesInPlaylistApiCallId:
        this.handleAddArticlesInPlaylistResponse(responseJson);
        break;
    }
    // Customizable Area End
  }
  
  // Customizable Area Start
  async componentDidMount() {
    console.log("PROOPS", this.props);
    let id = this.props?.navigation?.state?.params?.id;
    if (id != null && id != undefined && id != "") {
      let temp = [...this.state.playlistIdsArray, JSON.parse(id)];
      this.setState({ playlistIdsArray: temp }, () => console.log("playlistIdsArray", this.state.playlistIdsArray))
    }
    this.getArticlesInPlaylist();
    this.getAllArticlesApi();
  }

  handleGetArticlesInPlaylistResponse = (responseJson: any) => {
    if (responseJson && !responseJson.errors) {
      console.log("DEFAULT-AERICLES-PLAYLIST-RESPONSE bookmark2", responseJson);
      const dataWithAudio = responseJson?.data?.filter((item: any) => item?.attributes?.audio_path);
      this.setState({ playlistArticles: dataWithAudio }, () => console.log("CallingDefault"));
      TrackPlayer.reset();
      this.setPlayListDatafromApi(dataWithAudio);
    } else {
      console.log("DEFAULT-AERICLES-PLAYLIST-RESPONSE-ERROR", responseJson);
    }
  }

  handleGetAllArticlesResponse = (responseJson: any) => {
    if (responseJson && !responseJson.errors) {
      console.log("ALL_ARTICLES-RESPONSE", responseJson);
      this.setState({ allArticleArray: responseJson.articles.data, isLoading: false });
    } else {
      console.log("ALL_ARTICLES-ERROR-RESPONSE");
      this.setState({ isLoading: false })
    }
  }

  handleRemoveArticlesResponse = (responseJson: any) => {
    if (responseJson && !responseJson.errors) {
      console.log("REMOVE-AERICLES-IN-PLAYLIST-RESPONSE", responseJson);
      this.setState({ isLoading: false, movePlaylistPopup: false, moveTop: false, moveLast: false, Remove: false });
      this.getArticlesInPlaylist()
    } else {
      console.log("REMOVE-AERICLES-IN-PLAYLIST-RESPONSE-ERROR", responseJson);
      this.setState({ isLoading: false });
    }
  }

  handleMoveArticleResponse = (responseJson: any, apiRequestCallId: string) => {
    if (responseJson && !responseJson.errors) {
      console.log(apiRequestCallId === this.removeArticlesApiCallId ? "REMOVE-AERICLES-IN-PLAYLIST-RESPONSE" : "MOVE-AERICLES-IN-PLAYLIST-RESPONSE", responseJson);
      this.setState({ isLoading: false, movePlaylistPopup: false, moveTop: false, moveLast: false, Remove: false });
      this.getArticlesInPlaylist()
    } else {
      console.log(apiRequestCallId === this.removeArticlesApiCallId ? "REMOVE-AERICLES-IN-PLAYLIST-RESPONSE-ERROR" : "MOVE-AERICLES-IN-PLAYLIST-RESPONSE-ERROR", responseJson);
      this.setState({ isLoading: false });
    }
  }

  handleAddArticlesInPlaylistResponse = (responseJson: any) => {
    if (responseJson && !responseJson.errors && responseJson.status != 404) {
      console.log("ADD-ARTICLES-PLAYLIST-RESPONSE", responseJson);
      this.setState({ saveToPlaylistPopup: true, isLoading: false });
    } else if (responseJson && responseJson.status === 404) {
      alert("Something went wrong");
      this.setState({ isLoading: false });
    } else {
      console.log("ADD-ARTICLES-PLAYLIST-RESPONSE-ERROR", responseJson);
      this.setState({ isLoading: false });
      alert(responseJson.errors);
    }
  }

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

  async getArticlesInPlaylist() {
    let token = await AsyncStorage.getItem('token');
    this.getArticlesInPlaylistApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_playlists/playlists/" + this.props.navigation.state.params.id,
      token: token,
    });
  }

  async getAllArticlesApi() {
    this.setState({ isLoading: true });
    let token = await AsyncStorage.getItem('token');
    this.getAllArticlesApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "GET",
      endPoint: "bx_block_articles/articles",
      token: token
      // body: apiData,
    });
  }

  async removeArticle(item: any) {
    this.setState({ isLoading: true });
    let token = await AsyncStorage.getItem('token');
    let apiData = {
      data: {
        article_id: item?.attributes?.article_id,
        playlist_id: this.props.navigation.state.params.id,
      }
    }
    this.removeArticlesApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "DELETE",
      endPoint: "bx_block_playlists/delete_from_playlist",
      token: token,
      body: apiData,
    });
  }
  async moveArticles(item: any, type: any) {
    let token = await AsyncStorage.getItem('token');
    let id = JSON.parse(this.props?.navigation?.state?.params?.id);
    let apiData = {
      article_id: JSON.parse(item?.attributes?.article_id),
      rank: type == 'top' ? 1 : 3,
      id: id,
    }
    this.moveArticleApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "POST",
      endPoint: "bx_block_playlists/set_position",
      token: token,
      body: apiData,
    });
  }

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
    let dateFormat = moment(formattedDate).format('"DD MMM YY"');
    console.log("dateFormat", JSON.parse(dateFormat));
    if (Platform.OS === 'ios') {
      return formattedDate;
    } else {
      return JSON.parse(dateFormat);
    }
    // return formattedDate;
  }
  formateTime = (time: any) => {
    let localDate: any = new Date(time);

    let current: any = new Date();

    let seconds = Math.floor((current - localDate) / 1000);

    let interval = seconds / 31536000;

    if (isNaN(interval)) {
      return '4h ago';
    }

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  onClickThreeDots(item: any) {
    this.setState({ movePlaylistPopup: true, listItem: item }, () =>
      console.log("listItem", this.state.listItem))
  }

  onClickTop(type: any, item: any) {
    console.log("item", item, "type", type);
    if (type === 'top') {
      this.setState({ moveTop: true, moveLast: false, Remove: false });
      this.moveArticles(item, type);
    } else if (type === 'last') {
      this.setState({ moveTop: false, moveLast: true, Remove: false });
      this.moveArticles(item, type);
    } else {
      this.setState({ moveTop: false, moveLast: false, Remove: true });
      this.removeArticle(item)
    }
  }

  onClickAddArticle(item: any, index: any) {
    let temp = [...this.state.allArticleArray];
    temp[index].isSelected = !temp[index].isSelected;
    let temp1: any = [];
    if (item.isSelected) {
      temp1 = [...this.state.articlesIdsArray, JSON.parse(item.id)]
    } else {
      for (let item1 of this.state.articlesIdsArray) {
        if (item1 === JSON.parse(item.id)) {
          temp1 = [...this.state.articlesIdsArray];
        }
      }
    }
    this.setState({ allArticleArray: temp, articlesIdsArray: temp1 }, () => console.log("articlesIdsArray", this.state.articlesIdsArray))
  }

  async onCLickDoneButton() {
    let token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: true });
    let apiData = {
      data: {
        article_ids: this.state.articlesIdsArray,
        playlist_ids: this.state.playlistIdsArray
      }
    }
    this.addArticlesInPlaylistApiCallId = await this.apiCall({
      contentType: "application/json",
      method: "POST",
      endPoint: "bx_block_bookmark2/add_to_playlist",
      token: token,
      body: apiData,
    });
  }

  onClickPlay = (id: any) => {
    this.playerRef.current?.playSelectedTrack(id);
  }
  // Customizable Area End
}
