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
  ActivityIndicator
} from "react-native";

import AllArticlesController, {
  Props,
  configJSON
} from "./AllArticlesController";
import Slider from '@react-native-community/slider';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, navIcon, bellIcon, logo, backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import { play, save, dots } from "./assets";
import Loader from "../../../components/src/Loader";
import FastImage from 'react-native-fast-image'

const scrollY = new Animated.Value(0);
const diffClamp = Animated.diffClamp(scrollY, 0, 10);
const translateY = diffClamp.interpolate({
  inputRange: [0, 13],
  outputRange: [0, -17],
});

export default class AllArticles extends AllArticlesController {

  constructor(props: Props) {
    super(props);
  }

  renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        {this.state.loading ? (
          <Loader loading={this.state.loading} style={{}} />
          // <ActivityIndicator
          //   // color="white"
          //   style={{ marginLeft: 8 }} />
        ) : null}
      </View>
    );
  }

  render() {
    console.log("allArticleArray", this.state.allArticleArray);
    return (
      <View style={styles.mainContainer}>
        <Header
          menu={navIcon}
          // backArrow={''}
          logo={logo}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.openDrawer()}
          onPressNotification={() => this.props.navigation.navigate('Pushnotifications')} />
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ flex: 1, }}>
            <View style={styles.seeMoreView}>
              <Text style={styles.popularText}>Trending</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Trending') }}>
                <Text style={styles.seeMoreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {this.state.trendingMediaHouse && this.state.trendingMediaHouse.length > 0 ?
              <View style={styles.trendingMediaView}>
                <FlatList
                  style={{}}
                  data={this.state.trendingMediaHouse.length > 3 ? this.state.trendingMediaHouse.slice(0, 3) : this.state.trendingMediaHouse}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View style={styles.trendingView}>
                      {/* <View style={{ backgroundColor: '#fff', height: Scale(90), width: Scale(90), borderRadius: Scale(10), justifyContent: 'center', alignItems: 'center', elevation: 2 }}> */}
                      <View style={[styles.mediaImageStyleView, { bottom: 0, backgroundColor: '#fff', borderRadius: Scale(10) }]}>
                        <FastImage source={{ uri: item.attributes.image }} style={styles.trendingImageStyle} resizeMode='stretch' />
                      </View>
                    </View>
                  )}
                />
              </View> :
              <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                <Text style={styles.noDataTxt}>No data found!</Text>
              </View>
            }
            <View style={styles.seeMoreView}>
              <Text style={styles.popularText}>Popular Media Houses</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('MediaHouses') }}>
                <Text style={styles.seeMoreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {this.state.popularMediaHouseArray && this.state.popularMediaHouseArray.length > 0 ?
              <View style={styles.songListView}>
                <FlatList
                  style={{}}
                  data={this.state.popularMediaHouseArray.length > 4 ? this.state.popularMediaHouseArray.slice(0, 4) : this.state.popularMediaHouseArray}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View style={styles.popularMediaHouseView}>
                      <View style={[styles.mediaImageStyleView, { borderRadius: Scale(10), backgroundColor: '#fff' }]}>
                        <Image source={{ uri: item?.attributes?.image }} style={styles.medisImageStyle} resizeMode='stretch' />
                      </View>
                      <Text style={{ marginTop: Scale(8), alignSelf: 'center', fontWeight: '500', textAlign: 'center', width: '75%' }}>{item?.attributes?.media_house}</Text>
                    </View>
                  )}
                />
              </View> :
              <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                <Text style={styles.noDataTxt}>No data found!</Text>
              </View>}
            <View style={styles.seeMoreView}>
              <Text style={styles.popularText}>Categories</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('PopularCategory') }}>
                <Text style={styles.seeMoreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {this.state.categoryArray && this.state.categoryArray.length > 0 ?
              <View style={[styles.songListView, {}]}>
                <FlatList
                  style={{ paddingBottom: 0, }}
                  data={this.state.categoryArray.length > 3 ? this.state.categoryArray.slice(0, 3) : this.state.categoryArray}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    // console.log("Item", item),
                    <View style={styles.trendingView}>
                      <Image source={{ uri: item?.attributes?.image }} style={[styles.imageStyle, { justifyContent: 'flex-end', alignItems: 'flex-start', height: Scale(110), width: Scale(140), borderRadius: 10 }]} resizeMode='cover' />
                      <View style={{ marginTop: Scale(5) }}>
                        <Text style={{ color: 'blue', fontWeight: '500', fontSize: Scale(16), marginLeft: Scale(10), bottom: Scale(5) }}>{item.attributes.name}</Text>
                        <Text style={{ color: '#000', fontWeight: '500', fontSize: Scale(12), marginLeft: Scale(10), bottom: Scale(5) }}>{item?.attributes?.number_of_articles + ' Articles'}</Text>
                      </View>
                    </View>
                  )}
                />
              </View> :
              <View style={[styles.noDataView, { marginTop: Scale(0) }]}>
                <Text style={styles.noDataTxt}>No data found!</Text>
              </View>}
            <View style={styles.seeMoreView}>
              <Text style={styles.popularText}>All Articles</Text>
              <TouchableOpacity onPress={() => { }}>
                <Text style={styles.seeMoreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {this.state.allArticleArray && this.state.allArticleArray.length > 0 ?
              <View style={{ flex: 1, marginTop: Scale(10), backgroundColor: '#fff', }}>
                <FlatList
                  style={{ marginTop: Scale(5), marginBottom: Scale(80), height: Scale(400)}}
                  data={this.state.allArticleArray}
                  // onEndReachedThreshold={0.5}
                  nestedScrollEnabled={true}
                  // initialNumToRender={3}
                  // onEndReached={() => this.onEndReached()}
                  onMomentumScrollEnd={() => {
                    if (!this.state.onEndReachedCalledDuringMomentum) {
                      this.onEndReached();    // LOAD MORE DATA
                      this.setState({ onEndReachedCalledDuringMomentum: true })
                    }
                  }
                  }
                  onEndReached={() => this.setState({ onEndReachedCalledDuringMomentum: false })}
                  ListFooterComponent={() => this.renderFooter()}
                  renderItem={({ item, index }) => (
                    <View style={styles.mediaHouseView}>
                      <View style={styles.mediaImageStyleView}>
                        <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                          <TouchableOpacity style={styles.playControlView}>
                            <Icon name='control-play' size={10} color='blue' />
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                      <View style={{ marginHorizontal: Scale(10), width: "76%", backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', justifyContent: 'space-between', }}>
                          <Text style={[styles.name, { color: 'blue', opacity: 0.7, width: "94%", backgroundColor: '#fff' }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                          <TouchableOpacity>
                            <Image source={save} style={{ height: Scale(15), width: Scale(15), tintColor: 'blue' }} resizeMode="contain" />
                          </TouchableOpacity>
                        </View>
                        <Text style={[styles.name, { opacity: 0.7, marginTop: Scale(3), backgroundColor: '#fff' }]} numberOfLines={2}>{item?.attributes?.description}</Text>
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
              </View> :
              <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                <Text style={styles.noDataTxt}>No data found!</Text>
              </View>}
          </View>
          <Loader loading={this.state.isLoading} />
        </ScrollView>
      </View >
    )
  }
}

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
  seeMoreText: {
    fontSize: Scale(14),
    fontWeight: 'bold',
    color: 'blue'
  },
  songListView: {
    marginHorizontal: Scale(15),
    justifyContent: 'center',
    alignItems: "center",
    marginTop: Scale(10),
  },
  trendingMediaView: {
    marginTop: Scale(10),
  },
  trendingView: {
    // backgroundColor:'red',
    marginHorizontal: Scale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 2,
    elevation: 5,
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
    // backgroundColor:'#fff',
    // borderRadius: Scale(10),
  },
  medisImageStyle: {
    height: Scale(90),
    width: Scale(90),
    borderRadius: Scale(5),
  },
  noDataView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1
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
    // backgroundColor:'red',
    bottom: 30
  },
})
