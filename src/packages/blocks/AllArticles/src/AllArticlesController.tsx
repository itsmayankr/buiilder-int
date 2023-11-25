import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
    getName
} from "../../../framework/src/Messages/MessageEnum";
import { useRef, createRef } from 'react';
import { Animated } from 'react-native';
import { runEngine } from "../../../framework/src/RunEngine";
import { theHindu, economy, bbcHindi, national, smh } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
export const configJSON = require("./config");

export interface Props {
    navigation: any;
    id: string;
}

interface S {
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
}

interface SS {
    id: any;
}
export default class AllArticlesController extends BlockComponent<Props, S, SS> {
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
        ];

        this.currentRef = createRef();

        this.state = {
            trendingMediaHouse: [],
            popularMediaHouseArray: [
                { name: 'The Hindu', image: theHindu },
                { name: 'Sydney Morning Hearled', image: theHindu },
                { name: 'BBC Hindi', image: theHindu },
            ],
            allArticleArray: [
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By Sydney Morning Hearld', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                // { name: 'Deportes', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By BBC News', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                // { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                // { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                // { name: 'Deportes', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                // { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
            ],
            categoryArray: [
                // { name: 'Sports', count: '17 Articles', image: economy },
                // { name: 'Economy', count: '17 Articles', image: national },
                // { name: 'National', count: '17 Articles', image: economy },
            ],
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
    }

    async componentDidMount() {
        let token = await AsyncStorage.getItem('token');
        let id = await AsyncStorage.getItem('userId');
        this.getTrendingMediaApi(token);
        this.getPopularMediaApi(token, id);
        this.getCategoriesMediaApi(token, id);
        this.getAllArticlesApi();
    }

    async receive(from: String, message: Message) {
        // runEngine.debugLog("on recieive==>" + JSON.stringify(message));

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
            // console.log("responseJson", responseJson);
            if (apiRequestCallId === this.getTrendingMediaApiCallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("TRENDING-MEDIA-RESPONSE", responseJson);
                    this.setState({ trendingMediaHouse: responseJson.data })
                } else {
                    // console.log("TRENDING-MEDIA-ERROR-RESPONSE");
                    this.setState({ isLoading: false })
                }
            }

            if (apiRequestCallId === this.getPopularMediaHouseDataApicallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("POPULAR-MEDIA-RESPONSE", responseJson);
                    this.setState({
                      isLoading: false,
                      popularMediaHouseArray:
                        responseJson.media_hosues.data,
                    });
                } else {
                    // console.log("POPULAR-MEDIA-ERROR-RESPONSE");
                    this.setState({ isLoading: false })
                }
            }
            if (apiRequestCallId === this.getCategoriesApiCallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("CATEGORIES-MEDIA-RESPONSE", responseJson);
                    this.setState({
                      categoryArray:
                        responseJson.categories.data,
                    });
                } else {
                    // console.log("CATEGORIES-MEDIA-ERROR-RESPONSE");
                    this.setState({ isLoading: false })
                }
            }
            if (apiRequestCallId === this.getAllArticlesApiCallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("ALL_ARTICLES-RESPONSE", responseJson);
                    let temp: any;
                    if(this.state.allArticleArray.length > 0) {
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
            if (errorReponse) {
                this.setState({ isLoading: false });
            }
        }
    }

    apiCall = async (data: any) => {
        const { contentType, method, endPoint, body, type, token } = data;
        // console.log("BODY", body);
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
        // console.log("REQUEST-MESSAGE", requestMessage);
        runEngine.sendMessage(requestMessage.id, requestMessage);
        return requestMessage.messageId;
    };

    async getTrendingMediaApi(token: any) {
        // this.setState({ isLoading: true });
        this.getTrendingMediaApiCallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_articles/trending?preference=false",
            token: token
            // body: apiData,
        });
    }

    async getPopularMediaApi(token: any, id: any) {
        // this.setState({ isLoading: true });
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
            endPoint:"bx_block_categories/categories",
            // endPoint: "bx_block_categories/category_article?id=" + id,
            token: token
            // body: apiData,
        });
    }
    async getAllArticlesApi() {
        let token = await AsyncStorage.getItem('token')
        // this.setState({ isLoading: true });
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
}
