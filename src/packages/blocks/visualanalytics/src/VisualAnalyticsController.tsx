import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
    getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import { createRef } from 'react';
import { runEngine } from "../../../framework/src/RunEngine";
import { theHindu } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import { Keyboard } from "react-native";
// Customizable Area End
export const configJSON = require("./config");

export interface Props {
    navigation: any;
    id: string;
}

interface S {
    // Customizable Area Start
    defaltPlaylistArray: any;
    popularMediaHouseArray: any;
    categoriesArray: any;
    isMedia: boolean;
    enableScrollViewScroll: boolean;
    deletePopup: boolean;
    // Add New Playlist States //
    playlistImage: any;
    playlistName: any;
    playlistDescription: any;
    newPlaylistModal: boolean;
    isPublic: boolean,
    isPrivate: boolean,
    isLoading: boolean;
    deletedItem: any;
    loading: boolean;
    perPage: any;
    page: any;
    onEndReachedCalledDuringMomentum: boolean;
    isDeleted: boolean;
    // Customizable Area End
}

interface SS {
    id: any;
}
export default class VisualAnalyticsController extends BlockComponent<Props, S, SS> {
    // Customizable Area Start
    currentRef: any;
    getDefaultPlaylistApicallId: string = "";
    createPlaylistApiCallId: string = "";
    deletePlaylistApiCallId: string = "";
    focusListener: any;
    // Customizable Area End
    constructor(props: Props) {
        super(props);
        this.receive = this.receive.bind(this);

        // Customizable Area Start
        this.currentRef = createRef();
        // Customizable Area End

        this.subScribedMessages = [
            getName(MessageEnum.RestAPIResponceMessage),
        ];

        this.state = {
            // Customizable Area Start
            defaltPlaylistArray: [],
            popularMediaHouseArray: [
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
            ],
            categoriesArray: [
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'Politics', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By BBC News', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
            ],
            isMedia: false,
            enableScrollViewScroll: true,
            deletePopup: false,
            // Add New Playlist States //
            playlistImage: "",
            playlistName: "",
            playlistDescription: "",
            newPlaylistModal: false,
            isPublic: false,
            isPrivate: false,
            isLoading: true,
            deletedItem: "",
            loading: false,
            perPage: 6,
            page: 1,
            onEndReachedCalledDuringMomentum: true,
            isDeleted: false
            // Customizable Area End
        };
        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }



    async receive(from: string, message: Message) {
        if (getName(MessageEnum.RestAPIResponceMessage) !== message.id) {
            return;
        }

        const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
        const responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));

        if (apiRequestCallId === this.getDefaultPlaylistApicallId) {
            await this.handleDefaultPlaylistResponse(responseJson);
        } else if (apiRequestCallId === this.createPlaylistApiCallId) {
            await this.handleCreatePlaylistResponse(responseJson);
        } else if (apiRequestCallId === this.deletePlaylistApiCallId) {
            await this.handleDeletePlaylistResponse(responseJson);
        }
    }

    // Customizable Area Start
    async handleDefaultPlaylistResponse(responseJson: any) {
        if (!responseJson || responseJson.errors) {
            console.log("DEFAULT-PLAYLIST-RESPONSE-ERROR", responseJson);
            this.setState({ isLoading: false });
            return;
        }

        console.log("DEFAULT-PLAYLIST-RESPONSE", responseJson);

        let temp = responseJson.playlists.data;

        if (this.state.isDeleted) {
            console.log("callingIf");
            this.setState({ isDeleted: false });
        } else if (this.state.defaltPlaylistArray.length > 0) {
            console.log("callingElseIf");
            temp = this.state.defaltPlaylistArray.concat(responseJson.playlists.data);
        } else {
            console.log("callingElse");
        }

        this.setState({ isLoading: false, loading: false, defaltPlaylistArray: temp });
    }

    async handleCreatePlaylistResponse(responseJson: any) {
        if (!responseJson || responseJson.errors) {
            console.log("CREATE-PLAYLIST-RESPONSE-ERROR", responseJson);
            alert(responseJson?.errors[0])
            this.setState({ isLoading: false });
            return;
        }

        console.log("CREATE-PLAYLIST-RESPONSE", responseJson);

        this.setState({
            isLoading: false,
            newPlaylistModal: false,
            playlistName: '',
            playlistDescription: '',
            isPublic: false,
            isPrivate: false,
            playlistImage: '',
            page: 1,
            defaltPlaylistArray: []
        });

        await this.getDefaultPlaylist('didMount');
    }

    async handleDeletePlaylistResponse(responseJson: any) {
        if (!responseJson || responseJson.errors) {
            console.log("DELETE-PLAYLIST-RESPONSE-ERROR", responseJson);
            this.setState({ isLoading: false });
            return;
        }

        console.log("DELETE-PLAYLIST-RESPONSE", responseJson);

        await this.getDefaultPlaylist();

        this.setState({ isLoading: false, deletePopup: false });
    }

    async componentDidMount() {
        const { navigation } = this.props;
        console.log("navigationSaved", navigation);
        this.getDefaultPlaylist('didMount');
        if (navigation.state.routeName == "Playlists") {
            this.focusListener = navigation.addListener("didFocus", () => {
                console.log("CallingAgainSaved");
                // this.getDefaultPlaylist()
                this.setState({ page: 1, isLoading: true, defaltPlaylistArray: [] }, () => this.getDefaultPlaylist('didMount'))
            });
        }
    }

    async componentWillUnmount() {
        if (this.focusListener) this.focusListener = null;
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

    async getDefaultPlaylist(type: string) {
        if (type === 'didMount') {
            this.setState({ isLoading: true })
        } else this.setState({isLoading:false})
        let token = await AsyncStorage.getItem('token');
        this.getDefaultPlaylistApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_playlists/playlists?per_page=" + this.state.perPage + "&page=" + this.state.page,
            token: token
            // body: apiData,
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
            this.createPlaylistApiCallId = await this.apiCall({
                contentType: "application/json",
                method: "POST",
                endPoint: "bx_block_playlists/playlists",
                token: token,
                body: apiData,
            })
            this.setState({ isLoading: true });
        }
    }

    async onClickDeleteIcon(item: any) {
        console.log("Item", item);
        this.setState({ deletePopup: true, deletedItem: item });
    }

    onClickPublic(type: any) {
        if (type === 'public') {
            this.setState({ isPublic: true, isPrivate: false })
            Keyboard.dismiss();
        } else {
            this.setState({ isPublic: false, isPrivate: true })
            Keyboard.dismiss();
        }
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

    async deletePlaylist(item: any) {
        console.log("item,index", item);
        this.setState({ isLoading: true, isDeleted: true, page: 1, perPage: 6 })
        let token = await AsyncStorage.getItem('token');
        this.deletePlaylistApiCallId = await this.apiCall({
            contentType: "application/json",
            method: "DELETE",
            endPoint: "bx_block_playlists/playlists/" + item.id,
            token: token,
        })
        // this.setState({ deletePopup: false })
    }

    onEndReached = async () => {
        console.log("onEndReached")
        this.setState({ page: this.state.page + 1 })
        this.setState({ loading: true });
        this.getDefaultPlaylist('onEndReached');
    }
    // Customizable Area End
}



