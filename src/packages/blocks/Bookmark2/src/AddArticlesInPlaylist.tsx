import React from "react";

// Customizable Area Start
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Modal,
    TouchableWithoutFeedback
} from "react-native";

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, bellIcon, logo, backArrow, success } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import Loader from "../../../components/src/Loader";
import AntDesign from 'react-native-vector-icons/AntDesign';
// Customizable Area End

import Bookmark2Controller, {
    Props
} from "./Bookmark2Controller";

export default class AddArticlesInPlaylist extends Bookmark2Controller {

    constructor(props: Props) {
        super(props);
    }

    render() {
        // Customizable Area Start
        // Merge Engine - render - Start
        console.log("isLoading", this.state.isLoading);
        return (
            <View style={styles.mainContainer}>
                <Header
                    menu={''}
                    backArrow={backArrow}
                    logo={logo}
                    search={search}
                    bell={bellIcon}
                    onPress={() => this.props.navigation.goBack()}
                    onPressNotification={() => { }}
                    onPressSearch={() => { }}
                    searchScreen={false}
                    back={''}
                    title={''}
                    onPressBack={() => { }} />

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.saveToPlaylistPopup}
                    onRequestClose={() => this.setState({ saveToPlaylistPopup: false })}
                    onDismiss={() => this.setState({ saveToPlaylistPopup: false })}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Playlists')}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image source={success} style={styles.successImage} resizeMode="contain" />
                                <Text style={styles.successText}>News added to the playlist successfully!</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                {/* <ScrollView style={{flex:1}}> */}
                <View style={{ flex: 1, }}>
                    <View style={styles.seeMoreView}>
                        <Text style={styles.popularText}>All Articles</Text>
                        <TouchableOpacity style={styles.doneBtn} onPress={() => this.onCLickDoneButton()} disabled={this.state.articlesIdsArray.length > 0 ? false : true}>
                            <Text style={styles.seeMoreText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.allArticleArray && this.state.allArticleArray.length > 0 ?
                        <View style={{ flex: 1, marginTop: Scale(10) }}>
                            <FlatList
                                style={{ marginTop: Scale(5), }}
                                data={this.state.allArticleArray}
                                renderItem={({ item, index }: { item: any, index: any }) => (
                                    <View style={styles.mediaHouseView}>
                                        <View style={styles.mediaImageStyleView}>
                                            <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                                                <TouchableOpacity style={styles.playControlView}>
                                                    <Icon name='control-play' size={10} color='blue' />
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </View>
                                        <View style={{ marginHorizontal: Scale(10), backgroundColor: "#fff", width: "76%" }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <Text style={[styles.name, { color: 'blue', opacity: 0.7, width: "80%" }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                                                <TouchableOpacity onPress={() => this.onClickAddArticle(item, index)} style={{ backgroundColor: "#fff" }}>
                                                    {item.isSelected ?
                                                        <AntDesign name="checkcircle" size={20} color="blue" /> :
                                                        <AntDesign name="pluscircleo" size={20} color="blue" />}
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={[styles.name, { opacity: 0.7, marginTop: Scale(3), }]} numberOfLines={2}>{item?.attributes?.description}</Text>
                                            <Text style={styles.mediaName}>{item?.attributes?.media_house}</Text>
                                            <View style={styles.timeView}>
                                                <Text style={{ color: '#000' }}>{'4h ago'}</Text>
                                                <View style={styles.dotView}></View>
                                                <Text>{'Aug 08, 22'}</Text>
                                                <View style={styles.dotView}></View>
                                                <Text>{item?.attributes?.country}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                        : !this.state.isLoading &&
                        <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                            <Text style={styles.noDataTxt}>No data found!</Text>
                        </View>
                    }
                </View>
                <Loader loading={this.state.isLoading} style={{}} />
                {/* </ScrollView > */}
                {/* </ScrollView> */}
            </View >
        )
        // Merge Engine - render - End
        // Customizable Area End
    }
}

// Customizable Area Start
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    outerView: {
        flexDirection: 'row',
        marginTop: Scale(15),
        marginHorizontal: Scale(15),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    smhImage: {
        height: Scale(22),
        width: Scale(22),
        borderRadius: Scale(15),
        left: Scale(110)
    },
    sydneyTxt: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        marginLeft: Scale(5),
        // opacity:0.7
    },
    national: {
        height: Scale(130),
        width: Scale(130),
        borderRadius: Scale(15)
    },
    sliderView: {
        marginHorizontal: Scale(10),
        marginTop: Scale(10)
    },
    slider: {
        width: '100%',
    },
    durationView: {
        flexDirection: 'row',
        marginHorizontal: Scale(25),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    durationTxt: {
        fontWeight: 'bold',
        color: '#000',
        opacity: 0.5
    },
    musicControlView: {
        flexDirection: 'row',
        marginHorizontal: Scale(30),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Scale(5)
    },
    speedPrevIcon: {
        height: Scale(22),
        width: Scale(23),
    },
    musicActivitiesView: {
        backgroundColor: '#CBC7C7',
        flexDirection: 'row',
        marginHorizontal: Scale(30),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Scale(10),
        borderRadius: Scale(20),
        paddingHorizontal: 20,
        padding: 10
    },
    lineView: {
        borderWidth: 0.7,
        opacity: .1,
        elevation: 2,
        borderColor: '#000',
        marginTop: Scale(15)
    },
    sharedView: {
        flexDirection: 'row',
        marginHorizontal: Scale(10),
        marginTop: Scale(5)
    },
    sharedBtn: {
        width: "40%",
        padding: Scale(10),
        backgroundColor: 'blue',
        borderRadius: Scale(10),
        elevation: 2,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mediaHouseView: {
        backgroundColor: '#fff',
        marginHorizontal: Scale(15),
        flexDirection: 'row',
        elevation: Scale(5),
        borderRadius: Scale(10),
        padding: Scale(15),
        marginVertical: Scale(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3,
    },
    imageStyle: {
        height: Scale(80),
        width: Scale(80),
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: Scale(16),
        fontWeight: 'bold'
    },
    mediaName: {
        fontSize: Scale(14),
        fontWeight: 'bold',
        opacity: 0.4,
        marginTop: Scale(5)
    },
    timeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        // width: '85%',
        marginTop: Scale(5),
        // backgroundColor:'red'
    },
    dotView: {
        height: Scale(5),
        width: Scale(5),
        borderRadius: Scale(5),
        backgroundColor: '#000'
    },
    subHeadText: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        marginHorizontal: Scale(15),
        opacity: 0.7
    },
    playControlView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: Scale(20),
        padding: Scale(10)
    },
    seeMoreView: {
        flexDirection: 'row',
        marginHorizontal: Scale(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Scale(15)
    },
    popularText: {
        fontSize: Scale(16),
        fontWeight: 'bold',
    },
    doneBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: Scale(10),
        backgroundColor: 'blue',
        borderRadius: Scale(8),
        width: '20%',
    },
    seeMoreText: {
        fontSize: Scale(14),
        fontWeight: 'bold',
        color: '#fff'
    },
    songListView: {
        marginHorizontal: Scale(15),
        justifyContent: 'center',
        alignItems: "center",
        marginTop: Scale(10),
    },
    trendingMediaView: {
        // marginHorizontal: Scale(15),
        // justifyContent: 'center',
        // alignItems: "center",
        marginTop: Scale(10),
    },
    trendingView: {
        // alignItems: "center",
        // marginLeft:Scale(18)
        marginHorizontal: Scale(10),
    },
    trendingImageStyle: {
        height: Scale(120),
        width: Scale(120),
        borderRadius: Scale(10),
    },
    popularMediaHouseView: {
        alignItems: "center",
        marginHorizontal: Scale(10),
    },
    mediaImageStyleView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 2,
        elevation: 5,
    },
    medisImageStyle: {
        height: Scale(90),
        width: Scale(90),
        borderRadius: Scale(10),
    },
    noDataView: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    noDataTxt: {
        color: 'gray',
        fontWeight: 'bold'
    },
    // MODAL STYLES
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        height: Scale(230),
        width: '80%',
        borderRadius: Scale(10),
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: Scale(5),
        paddingTop: Scale(10)
    },
    successImage: {
        height: Scale(80),
        width: Scale(80),
        marginTop: Scale(20)
    },
    successText: {
        color: '#000',
        fontSize: Scale(16),
        // fontWeight: "800",
        marginHorizontal: Scale(20),
        textAlign: 'center',
        letterSpacing: 1.5,
        marginTop: Scale(10)
    },
})
// Customizable Area End