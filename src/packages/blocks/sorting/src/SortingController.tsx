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
    playlistType: any;
    newPlaylistModal: boolean;
    isPublic: boolean;
    isPrivate: boolean;
    saveToPlaylistPopup: boolean;
    playlistImage: any;
    playlistName: any;
    playlistDescription: any;
    playlistId: any;
    isLoading: boolean;
    playlistIdsArray: any;
    articleIdsArray: any;
    loading: boolean;
    perPage: any;
    page: any;
    onEndReachedCalledDuringMomentum: boolean;
    // Customizable Area End
}

interface SS {
    id: any;
    // Customizable Area Start
    // Customizable Area End
}

export default class SortingController extends BlockComponent<Props, S, SS> {
    getDefaultPlaylistApicallId: string = "";
    addArticlesInPlaylistApiCallId: string = "";
    createNewPlaylistApiCallId: string = "";
    constructor(props: Props) {
        super(props);
        this.receive = this.receive.bind(this);
        // Customizable Area Start
        this.subScribedMessages = [
            getName(MessageEnum.RestAPIResponceMessage),
            getName(MessageEnum.RestAPIResponceSuccessMessage),
            getName(MessageEnum.RestAPIResponceDataMessage),
        ];

        this.state = {
            playlistType: [],
            newPlaylistModal: false,
            isPublic: false,
            isPrivate: false,
            saveToPlaylistPopup: false,
            playlistImage: "",
            playlistName: "",
            playlistDescription: "",
            playlistId: "",
            isLoading: false,
            playlistIdsArray: [],
            articleIdsArray: [],
            loading: false,
            perPage: 7,
            page: 1,
            onEndReachedCalledDuringMomentum: true,
        };
        // Customizable Area End
        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }

    async componentDidMount() {
        console.log("navigationAddPlaylist", this.props);
        let id = this.props?.navigation?.state?.params?.id;
        if (id != null && id != undefined && id != "") {
            let temp = [...this.state.articleIdsArray, JSON.parse(id)];
            this.setState({ articleIdsArray: temp }, () => console.log("articleIdsArray", this.state.articleIdsArray))
        }
        this.setState({ isLoading: true });
        this.getDefaultPlaylist();
    }

    async receive(from: string, message: Message) {
        // Customizable Area Start
        // runEngine.debugLog("on recieive==>" + JSON.stringify(message));
        // const { RestAPIResponceDataMessage, RestAPIResponceSuccessMessage } = MessageEnum;
        // const { getData } = message;
        // const apiRequestCallId = getData(RestAPIResponceDataMessage);
        // const responseJson = getData(RestAPIResponceSuccessMessage);
        // console.log("callingReceive",responseJson)
        const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
        let responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
        console.log("responseJson", responseJson);
        switch (apiRequestCallId) {
            case this.getDefaultPlaylistApicallId:
                this.handleGetDefaultPlaylistResponse(responseJson);
                break;
            case this.addArticlesInPlaylistApiCallId:
                this.handleAddArticlesToPlaylistResponse(responseJson);
                break;
            case this.createNewPlaylistApiCallId:
                this.handleCreateNewPlaylistResponse(responseJson);
                break;
            default:
                break;
        }
        // Customizable Area End
    }

    // Customizable Area Start
    handleGetDefaultPlaylistResponse(responseJson: any) {
        console.log("apiRequestCallId", responseJson)
        if (responseJson && !responseJson.errors) {
            console.log("DEFAULT-PLAYLIST-RESPONSE", responseJson);
            const { playlistType } = this.state;
            const temp = playlistType.length > 0 ? [...playlistType, ...responseJson.playlists.data] : responseJson.playlists.data;
            this.setState({ isLoading: false, playlistType: temp, loading: false });
        } else {
            console.log("DEFAULT-PLAYLIST-RESPONSE-ERROR", responseJson);
            this.setState({ isLoading: false, loading: false });
        }
    }

    handleAddArticlesToPlaylistResponse(responseJson: any) {
        if (responseJson && !responseJson.errors) {
            console.log("ADD-ARTICLES-PLAYLIST-RESPONSE", responseJson);
            this.setState({ saveToPlaylistPopup: true });
        } else {
            console.log("ADD-ARTICLES-PLAYLIST-RESPONSE-ERROR", responseJson);
            this.setState({ isLoading: false });
            alert(responseJson.errors);
        }
    }

    handleCreateNewPlaylistResponse(responseJson: any) {
        if (responseJson && !responseJson.errors) {
            console.log("CREATE-NEW-PLAYLIST-RESPONSE", responseJson);
            this.setState({ isLoading: false, newPlaylistModal: false, playlistImage: "", playlistDescription: "", playlistName: "", isPublic: false, isPrivate: false, page: 1, playlistType: [] });
            this.getDefaultPlaylist();
        } else {
            console.log("CREATE-NEW-PLAYLIST-RESPONSE-ERROR", responseJson);
            alert(responseJson?.errors[0])
            this.setState({ isLoading: false });
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

    async getDefaultPlaylist() {
        console.log('getDefaultPlaylist');
        let token = await AsyncStorage.getItem('token');
        this.getDefaultPlaylistApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_playlists/playlists?per_page=" + this.state.perPage + "&page=" + this.state.page,
            token: token
        });
    }

    async onPressCamera() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
            includeBase64: true
        }).then(image => {
            console.log("gallary", image);
            let source = image;
            this.setState({ playlistImage: source })
        });
    }

    async onClickCheckBox(item: any, index: any) {
        console.log("temp", item, index);
        let temp = [...this.state.playlistType];
        temp[index].isSelected = !temp[index].isSelected;
        let temp1: any = [];
        if (item.isSelected) {
            temp1 = [...this.state.playlistIdsArray, JSON.parse(item.id)]
        } else {
            for (let item1 of this.state.playlistIdsArray) {
                if (item1 === JSON.parse(item.id)) {
                    temp1 = [...this.state.playlistIdsArray];
                }
            }
        }
        this.setState({ playlistType: temp, playlistId: item.id, playlistIdsArray: temp1 }, () => console.log("playlistIdsArray", this.state.playlistIdsArray));
    }
    onClickPublic(type: any) {
        if (type === 'public') {
            this.setState({ isPublic: true, isPrivate: false })
        } else {
            this.setState({ isPublic: false, isPrivate: true })
        }
    }

    onClickBackground() {
        this.props.navigation.navigate('Playlists');
        this.setState({ saveToPlaylistPopup: false });
    }

    async onClickAddToPlaylist() {
        let token = await AsyncStorage.getItem('token');
        let apiData = {
            data: {
                article_ids: this.state.articleIdsArray,
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

    async createPlaylist() {
        let token = await AsyncStorage.getItem('token');
        if (this.state.playlistName == "" || this.state.playlistName == null) {
            alert('Please enter playlist name.')
        } else if (this.state.playlistDescription == "" || this.state.playlistDescription == null) {
            alert('Please enter playlist description.')
        } else if (!this.state.isPublic && !this.state.isPrivate) {
            alert('Please choose playlist is public or private.')
        } else {
            let apiData = {
                data: {
                    name: this.state.playlistName,
                    description: this.state.playlistDescription,
                    is_public: this.state.isPublic,
                    image: this.state.playlistImage.data
                }
            }
            console.log("apiData", apiData);
            this.createNewPlaylistApiCallId = await this.apiCall({
                contentType: "application/json",
                method: "POST",
                endPoint: "bx_block_playlists/playlists",
                token: token,
                body: apiData,
            })
            this.setState({ isLoading: true });
        }
    }

    onEndReached = async () => {
        console.log("onEndReached")
        this.setState({ page: this.state.page + 1 })
        this.setState({ loading: true });
        this.getDefaultPlaylist();
    }

    onModalClose = () => {
        this.setState({
            newPlaylistModal: false,
            playlistImage: "",
            playlistName: "",
            playlistDescription: "",
            isPublic: false,
            isPrivate: false
        })
    }
    // Customizable Area End
}
