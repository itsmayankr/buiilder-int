import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
    getName
} from "../../../framework/src/Messages/MessageEnum";
import { createRef } from 'react';
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { theHindu } from "./assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
    navigation: any;
    id: string;
}

interface S {
    // Customizable Area Start
    popularMediaHouseArray: any;
    categoriesArray: any;
    allTrendingArray: any;
    isMedia: boolean;
    enableScrollViewScroll: boolean;
    isLoading: boolean;
    // Customizable Area End
}

interface SS {
    id: any;
}
export default class TrendingController extends BlockComponent<Props, S, SS> {
    // Customizable Area Start
    currentRef: any;
    unsubscribe: any;
    getAllTrendingDataApiCallId: any = "";
    // Customizable Area End

    constructor(props: Props) {
        super(props);
        this.receive = this.receive.bind(this);

        // Customizable Area Start
        this.currentRef = createRef();
        // Customizable Area End

        this.subScribedMessages = [getName(MessageEnum.RestAPIResponceMessage),];

        this.state = {
            // Customizable Area Start
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
                { name: 'Deportes', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By BBC News', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'National', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'Deportes', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
                { name: 'Sports', image: theHindu, heading: 'ISIS leader in Syria killed in US strike, say officials.', mediaName: 'By The Hindu', time: '4h ago', date: 'Aug 08, 22', place: 'New york' },
            ],
            allTrendingArray: [],
            isMedia: false,
            enableScrollViewScroll: true,
            isLoading: false,
            // Customizable Area End
        };
        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }


    async receive(from: string, message: Message) {
        runEngine.debugLog("on recieive==>" + JSON.stringify(message));

        if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
            const apiRequestCallId = message.getData(
                getName(MessageEnum.RestAPIResponceDataMessage)
            );

            let responseJson = message.getData(
                getName(MessageEnum.RestAPIResponceSuccessMessage)
            );

            let errorReponse = message.getData(
                getName(MessageEnum.RestAPIResponceErrorMessage)
            );

            if (apiRequestCallId === this.getAllTrendingDataApiCallId) {
                if (responseJson && !responseJson.errors) {
                    console.log("TRENDING-RESPONSE", responseJson);
                    this.setState({ isLoading: false, allTrendingArray: responseJson?.data });
                    //   this.setState({ popularMediaHouse: responseJson?.data })
                } else {
                    console.log("TRENDING-RESPONSE-ERROR", responseJson);
                    this.setState({ isLoading: false })
                }
            }

            if (errorReponse) {
                this.setState({ isLoading: false });
            }
        }
    }

    // Customizable Area Start
    async componentDidMount() {
        let token = await AsyncStorage.getItem('token');
        this.getAllTrendingData(token);
        this.unsubscribe = this.props.navigation.addListener('didFocus', () => {
            this.getAllTrendingData(token);
        })
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

    async getAllTrendingData(token: any) {
        this.setState({ isLoading: true });
        this.getAllTrendingDataApiCallId = await this.apiCall({
            contentType: "application/json",
            method: "GET",
            endPoint: "bx_block_articles/trending?preference=false",
            token: token
            // body: apiData,
        });
    }
    // Customizable Area End
}
