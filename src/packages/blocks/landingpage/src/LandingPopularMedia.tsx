import React, { createRef } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground,
    Animated,
    Dimensions
} from "react-native";

import LandingPopularMediaController, {
    Props,
    configJSON
} from "./LandingPopularMediaController";
import Slider from '@react-native-community/slider';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, navIcon, bellIcon, logo, backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import { smh, theHindu, bbcHindi, national, economy, speedPrev, speedNext, previous, next, play, speed, share, save, addToPlaylist } from "./assets";
import Loader from "../../../components/src/Loader";
import Player from "../../../components/src/Player";

export default class LandingPopularMedia extends LandingPopularMediaController {

    constructor(props: Props) {
        super(props);
    }

    renderFooter = () => {
        return (
          //Footer View with Load More button
          <View style={styles.footer}>
            {this.state.loading ? (
              <Loader loading={this.state.loading} style={{}} />
            ) : null}
          </View>
        );
      }

    render() {
        // console.log("popularMediaHouseArray", this.state.popularMediaHouseArray);
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
                    back={undefined}
                    title={undefined}
                    onPressBack={() => { }} />
                <View style={{ flex: 1, }}>
                    {/* <View style={styles.outerView}>
                        <Image source={smh} style={styles.smhImage} resizeMode='cover' />
                        <Text style={styles.sydneyTxt}>Sydney Morning hearled</Text>
                        <Text style={[styles.sydneyTxt, { fontSize: Scale(14), marginLeft: Scale(90) }]}>National</Text>
                    </View>
                    <View style={[styles.outerView, { justifyContent: 'space-between', marginTop: Scale(5) }]}>
                        <Text style={[styles.sydneyTxt, { fontSize: Scale(14), marginLeft: 0, fontWeight: "500" }]}>Take it from my kid</Text>
                        <Text style={[styles.sydneyTxt, { fontSize: Scale(14), fontWeight: '500' }]}>20/jun/2022</Text>
                    </View> */}

                    {/* Image View */}
                    {/* <View style={{ justifyContent: 'center', alignItems: "center", marginTop: Scale(15) }}>
                        <Image source={economy} style={styles.national} />
                    </View> */}

                    {/* Slider View*/}
                    {/* <View style={styles.sliderView}>
                        <Slider
                            style={styles.slider}
                            value={20}
                            minimumValue={0}
                            maximumValue={100}
                            thumbTintColor="blue"
                            minimumTrackTintColor="blue"
                            maximumTrackTintColor="#000000"
                            onSlidingComplete={() => { }}
                        />
                    </View> */}

                    {/* Music Proogress Duration */}
                    {/* <View style={styles.durationView}>
                        <Text style={styles.durationTxt}>02:23</Text>
                        <Text style={styles.durationTxt}>06:23</Text>
                    </View> */}

                    {/* Music Controlls */}
                    {/* <View style={styles.musicControlView}>
                        <TouchableOpacity>
                            <Image source={speedPrev} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={previous} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={play} style={[styles.speedPrevIcon, { height: Scale(50), width: Scale(50) }]} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={next} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={speedNext} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                    </View> */}

                    {/* Music Activities View */}
                    {/* <View style={styles.musicActivitiesView}>
                        <TouchableOpacity>
                            <Image source={save} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={share} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={speed} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={addToPlaylist} style={styles.speedPrevIcon} resizeMode='contain' />
                        </TouchableOpacity>
                    </View> */}
                    {
                        this.state.playlist.length > 0 &&
                        <Player playlist={this.state.playlist} {...this.props} ref={this.playerRef} paginationRequest={() => this.getApiCall()} />
                    }

                    {/* Line View */}
                    <View style={styles.lineView}></View>
                    {this.state.isMedia ?
                        <View style={{ flex: 1, marginTop: Scale(10), }}>
                            <Text style={styles.subHeadText}>{this.state.mediaName + " - Playing Next"}</Text>
                            {this.state.popularMediaHouseArray && this.state.popularMediaHouseArray.length > 0 ?
                                <FlatList
                                    style={{ marginTop: Scale(5) }}
                                    data={this.state.popularMediaHouseArray}
                                    // onTouchStart={() => this.onEnableScroll( false )}
                                    // onMomentumScrollEnd = {() => this.onEnableScroll( true )}
                                    renderItem={({ item, index }: any) => (
                                        <View style={styles.mediaHouseView}>
                                            <View style={styles.mediaImageStyleView}>
                                                <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                                                    <TouchableOpacity style={styles.playControlView} onPress={() => this.onClickPlay(item.id)}>
                                                        <Icon name='control-play' size={10} color='blue' />
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                            </View>
                                            <View style={{ marginHorizontal: Scale(10), backgroundColor: '#fff', width: '76%' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                    <Text style={[styles.name, { color: 'blue', opacity: 0.7, backgroundColor: '#fff', width: '90%' }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sorting', { id: item.id })}>
                                                        <Image source={save} style={{ height: Scale(15), width: Scale(15), tintColor: 'blue' }} resizeMode="contain" />
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={[styles.name, { opacity: 0.7, marginTop: Scale(3), }]} numberOfLines={2}>{item?.attributes?.description}</Text>
                                                <Text style={styles.mediaName}>{item?.attributes?.media_house}</Text>
                                                <View style={styles.timeView}>
                                                    <Text style={{ color: '#000' }}>{this.formateTime(item?.attributes?.created_at)}</Text>
                                                    <View style={styles.dotView}></View>
                                                    <Text>{this.formateDate(item?.attributes?.created_at)}</Text>
                                                    <View style={styles.dotView}></View>
                                                    <Text>{item?.attributes?.country}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        // <View style={styles.mediaHouseView}>
                                        //     <ImageBackground source={item.image} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                                        //         <TouchableOpacity style={styles.playControlView}>
                                        //             <Icon name='control-play' size={10} color='blue' />
                                        //         </TouchableOpacity>
                                        //     </ImageBackground>
                                        //     <View style={{ marginHorizontal: Scale(10) }}>
                                        //         <Text style={[styles.name, { color: 'blue', opacity: 0.7 }]}>{item.name}</Text>
                                        //         <Text style={[styles.name, { opacity: 0.7, width: '75%', marginTop: Scale(3) }]}>{item.heading}</Text>
                                        //         <Text style={styles.mediaName}>{item.mediaName}</Text>
                                        //     </View>
                                        // </View>
                                    )}
                                /> : this.state.isLoading === false &&
                                <View style={styles.noDataView}>
                                    <Text style={styles.noDataTxt}>No data found!</Text>
                                </View>}

                        </View> :
                        <View style={{ flex: 1, marginTop: Scale(10), }}>
                            <Text style={styles.subHeadText}>{this.state.mediaName + " - Playing Next"} </Text>
                            {this.state.categoriesArray && this.state.categoriesArray.length > 0 ?
                                <FlatList
                                    style={{ marginTop: Scale(5) }}
                                    data={this.state.categoriesArray}
                                    renderItem={({ item, index }: any) => (
                                        <View style={styles.mediaHouseView}>
                                            <View style={styles.mediaImageStyleView}>
                                                <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                                                    <TouchableOpacity style={styles.playControlView} onPress={() => this.onClickPlay(item.id)}>
                                                        <Icon name='control-play' size={10} color='blue' />
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                            </View>
                                            <View style={{ marginHorizontal: Scale(10), backgroundColor: "#fff", width: '77%', }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                    <Text style={[styles.name, { color: 'blue', opacity: 0.7, width: '90%', backgroundColor: '#fff' }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sorting', { id: item.id })}>
                                                        <Image source={save} style={{ height: Scale(15), width: Scale(15), tintColor: 'blue' }} resizeMode="contain" />
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={[styles.name, { opacity: 0.7, marginTop: Scale(3), }]} numberOfLines={2}>{item?.attributes?.description}</Text>
                                                <Text style={styles.mediaName}>{item?.attributes?.media_house}</Text>
                                                <View style={styles.timeView}>
                                                    <Text style={{ color: '#000' }}>{this.formateTime(item?.attributes?.created_at)}</Text>
                                                    <View style={styles.dotView}></View>
                                                    <Text>{this.formateDate(item?.attributes?.created_at)}</Text>
                                                    <View style={styles.dotView}></View>
                                                    <Text>{item?.attributes?.country}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        // <View style={styles.mediaHouseView}>
                                        //     <ImageBackground source={item.image} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                                        //         <TouchableOpacity style={styles.playControlView}>
                                        //             <Icon name='control-play' size={10} color='blue' />
                                        //         </TouchableOpacity>
                                        //     </ImageBackground>
                                        //     <View style={{ marginHorizontal: Scale(10) }}>
                                        //         <Text style={[styles.name, { color: 'blue', opacity: 0.7 }]}>{item.name}</Text>
                                        //         <Text style={[styles.name, { opacity: 0.7, width: '75%', marginTop: Scale(3) }]}>{item.heading}</Text>
                                        //         <Text style={styles.mediaName}>{item.mediaName}</Text>
                                        //     </View>
                                        // </View>
                                    )}
                                /> : this.state.isLoading === false &&
                                <View style={styles.noDataView}>
                                    <Text style={styles.noDataTxt}>No data found!</Text>
                                </View>}
                        </View>}
                    <Loader loading={this.state.isLoading} style={{ position: 'absolute', bottom: 100, left: 0, right: 0 }} />
                </View>
                {/* </ScrollView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingBottom:Scale(85)
    },
    outerView: {
        flexDirection: 'row',
        marginTop: Scale(15),
        marginHorizontal: Scale(15),
        alignItems: 'center',
    },
    smhImage: {
        height: Scale(30),
        width: Scale(30),
        borderRadius: Scale(15),
    },
    sydneyTxt: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        marginLeft: Scale(15)
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
    mediaHouseView: {
        backgroundColor: '#fff',
        marginHorizontal: Scale(15),
        // marginTop: Scale(10),
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
    timeView: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: "center",
        // width: '70%',
        marginTop: Scale(5)
    },
    dotView: {
        height: Scale(5),
        width: Scale(5),
        borderRadius: Scale(5),
        backgroundColor: '#000'
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
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'red',
        bottom: 30
      },
})