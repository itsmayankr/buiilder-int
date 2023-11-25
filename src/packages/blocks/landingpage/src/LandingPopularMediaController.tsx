import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
    getName
} from "../../../framework/src/Messages/MessageEnum";
import { useRef, createRef } from 'react';
import { Animated, Platform } from 'react-native';
import { runEngine } from "../../../framework/src/RunEngine";
import { theHindu, economy, bbcHindi, national, smh } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const configJSON = require("./config");
import TrackPlayer from 'react-native-track-player';
import moment from "moment";
export interface Props {
    navigation: any;
    id: string;
}

interface S {
    popularMediaHouseArray: any;
    categoriesArray: any;
    isMedia: boolean;
    enableScrollViewScroll: boolean;
    specificMediaHouseId: any;
    isLoading: boolean
    mediaName: string;
    playlist: any;
    page: number;
    token: string;
}

interface SS {
    id: any;
}
export default class LandingPopularMediaController extends BlockComponent<Props, S, SS> {
    currentRef: any;
    playerRef: any;
    getSpecificMediaHouseDataApicallId: string = "";
    getSpecificCategoriesDataApicallId: string = "";

    constructor(props: Props) {
        super(props);
        this.receive = this.receive.bind(this);

        this.currentRef = createRef();
        this.playerRef = createRef();

        this.subScribedMessages = [
            getName(MessageEnum.RestAPIResponceMessage),
        ];

        this.state = {
            playlist: [],
            page: 1,
            token: "",
            popularMediaHouseArray: [
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'Economy', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
            ],
            categoriesArray: [
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld' },
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By BBC News' },
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu' },
            ],
            isMedia: false,
            enableScrollViewScroll: true,
            specificMediaHouseId: "",
            isLoading: false,
            mediaName: "",
        };
        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }

    async componentDidMount() {
        console.log("this.props", this.props);
        this.getApiCall();
    }

    getApiCall = async () => {
        let token = await AsyncStorage.getItem('token');
        if (token) {
            this.setState({ token: token });
        }
        let id = this.props?.navigation?.state?.params?.item?.id
        if (this.props?.navigation?.state?.params?.title == 'popularMedia') {
            let text = "";
            if (this.props?.navigation?.state?.params?.item?.attributes?.media_house.includes(".")) {
                text = this.props?.navigation?.state?.params?.item?.attributes?.media_house.replace('.', "");
                this.setState({ mediaName: text })
            } else {
                text = this.props?.navigation?.state?.params?.item?.attributes?.media_house;
                this.setState({ mediaName: text })
            }
            this.setState({ isMedia: true });
            this.getSpecificMediaHouseDataApiPagination(id, token);
        } else {
            let text = "";
            if (this.props?.navigation?.state?.params?.item?.attributes?.name.includes(".")) {
                text = this.props?.navigation?.state?.params?.item?.attributes?.name.replace('.', "");
                this.setState({ mediaName: text })
            } else {
                text = this.props?.navigation?.state?.params?.item?.attributes?.name;
                this.setState({ mediaName: text })
            }
            this.setState({ isMedia: false });
            this.getSpecificCategoryDataApiPagination(id, token);
        }
    }

    async receive(from: string, message: Message) {
        runEngine.debugLog("Message Recived", message);
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

            console.log("data from api", responseJson);

            if (apiRequestCallId === this.getSpecificMediaHouseDataApicallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("SPECIFIC-MEDIA-HOUSE-RESPONSE", responseJson);
                    this.setState({ isLoading: false });
                    let dataWithAudio = responseJson?.media_houses?.data?.filter((item: any) => item?.attributes?.audio_path);
                    const data = this.state.popularMediaHouseArray.concat(dataWithAudio);
                    this.setState({ popularMediaHouseArray: data, page: this.state.page + 1 })
                    console.log("mediahouse data pagination",);
                    TrackPlayer.reset();
                    this.setPlayListDatafromApi(data);
                } else {
                    console.log("SPECIFIC-MEDIA-HOUSE-RESPONSE-ERROR", responseJson);
                    this.setState({ isLoading: false });
                }
            }

            if (apiRequestCallId === this.getSpecificCategoriesDataApicallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("SPECIFIC-CATEGORY-RESPONSE", responseJson);
                    this.setState({ isLoading: false });
                    let dataWithAudio = responseJson?.categories?.data?.filter((item: any) => item?.attributes?.audio_path);
                    const data = this.state.categoriesArray.concat(dataWithAudio);
                    this.setState({ categoriesArray: data, page: this.state.page + 1 })
                    console.log("category data pagination",);
                    TrackPlayer.reset();
                    this.setPlayListDatafromApi(data);
                } else {
                    console.log("SPECIFIC-CATEGORY-RESPONSE-ERROR", responseJson);
                    this.setState({ isLoading: false });
                }
            }
        }
    }

    formateDate = (date: any) => {
        date = new Date(date);
        let formattedDate = date.toLocaleString('default', { month: 'short', day: '2-digit', year: '2-digit' });
        console.log("formattedDate", formattedDate);
        if (formattedDate === 'Invalid Date') {
            return 'Sep 20, 22';
        }
        let dateFormat = moment(formattedDate).format('"DD MMM YY"');
        console.log("dateFormat",JSON.parse(dateFormat));
        if(Platform.OS === 'ios'){
            return formattedDate;
        } else {
            return JSON.parse(dateFormat);
        }
        // return formattedDate;
    }

    formateTime = (time: any) => {
        var localDate: any = new Date(time);

        let current: any = new Date();

        var seconds = Math.floor((current - localDate) / 1000);

        var interval = seconds / 31536000;

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

    async getSpecificMediaHouseDataApi(id: any, token: any) {
        console.log("Id", id);
        this.setState({ isLoading: true });
        this.getSpecificMediaHouseDataApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_admin/media_house_article?id=" + id,
            token: token
            // body: apiData,
        });
    }

    async getSpecificCategoryDataApi(id: any, token: any) {
        console.log("getSpecificCategoryDataApiId", id);
        this.setState({ isLoading: true });
        this.getSpecificCategoriesDataApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_categories/category_article?id=" + id ,
            token: token
            // body: apiData,
        });
    }

    async getSpecificCategoryDataApiPagination(id: any, token: any) {
        console.log("getSpecificCategoryDataApiId", id);
        this.setState({ isLoading: true });
        this.getSpecificCategoriesDataApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_categories/category_article?id=" + id + "&page=" + this.state.page + "&per_page=10",
            token: token
            // body: apiData,
        });
    }

    onClickPlay = (id: any) => {
        this.playerRef.current?.playSelectedTrack(id);
    }

    async getSpecificMediaHouseDataApiPagination(id: any, token: any) {
        console.log("Id", id);
        this.setState({ isLoading: true });
        this.getSpecificMediaHouseDataApicallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_admin/media_house_article?id=" + id + "&page=" + this.state.page + "&per_page=10",
            token: token
            // body: apiData,
        });
    }


}
