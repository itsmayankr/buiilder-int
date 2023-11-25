import React from "react";
// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, navIcon, bellIcon, logo, save } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import Loader from "../../../components/src/Loader";
import FastImage from 'react-native-fast-image'
// Customizable Area End

import CatalogueController, { Props } from "./CatalogueController";

export default class Catalogue extends CatalogueController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
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

  renderTrendingMediaHouseItem = ({ item }: any) => (
    <View style={styles.trendingView}>
      <View style={[styles.mediaImageStyleView, { bottom: 0, backgroundColor: '#fff', borderRadius: Scale(10) }]}>
        <FastImage source={{ uri: item.attributes.image }} style={styles.trendingImageStyle} resizeMode='stretch' />
      </View>
    </View>
  );

  renderPopularMediaHouseItem = ({ item }: any) => (
    <View style={styles.popularMediaHouseView}>
      <View style={[styles.mediaImageStyleView, { borderRadius: Scale(10), backgroundColor: '#fff' }]}>
        <Image source={{ uri: item?.attributes?.image }} style={styles.medisImageStyle} resizeMode='stretch' />
      </View>
      <Text style={{ marginTop: Scale(8), alignSelf: 'center', fontWeight: '500', textAlign: 'center', width: '75%' }}>{item?.attributes?.media_house}</Text>
    </View>
  );

  renderCategoryItem = ({ item }: any) => (
    <View style={styles.trendingView}>
      <Image source={{ uri: item?.attributes?.image }} style={[styles.imageStyle, { justifyContent: 'flex-end', alignItems: 'flex-start', height: Scale(110), width: Scale(140), borderRadius: 10 }]} resizeMode='cover' />
      <View style={{ marginTop: Scale(5) }}>
        <Text style={{ color: 'blue', fontWeight: '500', fontSize: Scale(16), marginLeft: Scale(10), bottom: Scale(5) }}>{item.attributes.name}</Text>
        <Text style={{ color: '#000', fontWeight: '500', fontSize: Scale(12), marginLeft: Scale(10), bottom: Scale(5) }}>{item?.attributes?.number_of_articles + ' Articles'}</Text>
      </View>
    </View>
  );

  renderAllArticlesItem = ({ item }: any) => (
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
  );

  renderTrendingMediaHouse = () => {
    const { trendingMediaHouse } = this.state;
    return (
      <View style={styles.trendingMediaView}>
        <FlatList
          style={{}}
          data={trendingMediaHouse.length > 3 ? trendingMediaHouse.slice(0, 3) : trendingMediaHouse}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => this.renderTrendingMediaHouseItem(item)}
        />
      </View>
    )
  }

  renderPopularMediaHouse = () => {
    const { popularMediaHouseArray } = this.state;
    return (<View style={styles.popularMediaHouseView}>
      <FlatList
        style={{}}
        data={popularMediaHouseArray.length > 3 ? popularMediaHouseArray.slice(0, 3) : popularMediaHouseArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) =>  this.renderPopularMediaHouseItem(item)}
      />
    </View>)
  }

  renderCategories = () => {
    const { categoryArray } = this.state;
    return (
      <View style={styles.popularMediaHouseView}>
        <FlatList
          style={{}}
          data={categoryArray.length > 3 ? categoryArray.slice(0, 3) : categoryArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => this.renderCategoryItem(item)}
        />
      </View>
    )
  }

  renderAllArticles = () => {
    const { allArticleArray } = this.state;
    return (
      <View style={{ flex: 1, marginTop: Scale(10), backgroundColor: '#fff', }}>
        <FlatList
          style={{ marginTop: Scale(5), marginBottom: Scale(80), height: Scale(400) }}
          data={allArticleArray}
          horizontal={false}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => this.renderAllArticlesItem(item)}
          onMomentumScrollEnd={() => {
            if (!this.state.onEndReachedCalledDuringMomentum) {
              this.onEndReached();    // LOAD MORE DATA
              this.setState({ onEndReachedCalledDuringMomentum: true })
            }
          }}
          onEndReached={() => this.setState({ onEndReachedCalledDuringMomentum: false })}
          ListFooterComponent={() => this.renderFooter()}
        />
      </View>
    )
  }
  // Customizable Area End


  render() {
    const { navigation } = this.props;
    const { trendingMediaHouse, popularMediaHouseArray, categoryArray, allArticleArray } = this.state;

    return (
      <>
        {/* Merge Engine DefaultContainer */}
        {/* Customizable Area Start */}
        {/* Merge Engine UI Engine Code */}
        <View style={styles.mainContainer}>
          <Header
            menu={navIcon}
            logo={logo}
            search={search}
            bell={bellIcon}
            onPress={() => this.props.navigation.openDrawer()}
            onPressNotification={() => this.props.navigation.navigate('Pushnotifications')}
            onPressSearch={() => { }}
            searchScreen={false}
            back={undefined}
            title={undefined}
            backArrow={undefined}
            onPressBack={() => { }} />
          <ScrollView nestedScrollEnabled={true}>
            <View style={{ flex: 1, }}>
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>Trending</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              {trendingMediaHouse && trendingMediaHouse.length > 0 ? (
                this.renderTrendingMediaHouse()
              ) : (
                <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                  <Text style={styles.noDataTxt}>No data found!</Text>
                </View>
              )}
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>Popular Media Houses</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PopularMediaHouses')}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              {popularMediaHouseArray && popularMediaHouseArray.length > 0 ? (
                this.renderPopularMediaHouse()
              ) : (
                <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                  <Text style={styles.noDataTxt}>No data found!</Text>
                </View>
              )}
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              {categoryArray && categoryArray.length > 0 ? (
                this.renderCategories()
              ) : (
                <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                  <Text style={styles.noDataTxt}>No data found!</Text>
                </View>
              )}
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>All Articles</Text>
                <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              {allArticleArray && allArticleArray.length > 0 ? (
                this.renderAllArticles()
              ) : (
                <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                  <Text style={styles.noDataTxt}>No data found!</Text>
                </View>)}
            </View>
            <Loader loading={this.state.isLoading} />
          </ScrollView>
        </View>
        {/* Merge Engine UI Engine Code */}
        {/* Customizable Area End */}
        {/* //Merge Engine End DefaultContainer */}
      </>
    );
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
});
// Customizable Area End
