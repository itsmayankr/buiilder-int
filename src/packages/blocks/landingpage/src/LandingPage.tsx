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
    ImageBackground,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
    SafeAreaView
  } from "react-native";
  import Entypo from 'react-native-vector-icons/Entypo';
  import Feather from 'react-native-vector-icons/Feather';
  import { search, navIcon, bellIcon, logo } from "./assets";
  import Scale from "../../../components/src/Scale";
  import Header from "../../../components/src/AppHeader";
  import Loader from "../../../components/src/Loader";
  import Player from '../../../components/src/Player'
// Customizable Area End

import LandingPageController, {
  Props,
  configJSON
} from "./LandingPageController";

export default class LandingPage extends LandingPageController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderPopularMediaHouse = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.mediaHouseView}
        testID='popularMediaHouse'
        onPress={() =>
          this.props.navigation.navigate('LandingPopularMedia', {
            title: 'popularMedia',
            item: item,
          })
        }
      >
        <View
          style={{
            backgroundColor: '#fff',
            height: Scale(92),
            width: Scale(92),
            borderRadius: Scale(10),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            source={{
              uri:
                item && item.attributes && item.attributes.image
                  ? item.attributes.image
                  : undefined,
            }}
            style={styles.imageStyle}
            resizeMode='stretch'
          />
        </View>
        <Text
          style={{
            marginTop: Scale(8),
            alignSelf: 'center',
            fontWeight: '500',
            textAlign: 'center',
            width: '75%',
          }}
        >
          {item && item.attributes && item.attributes.media_house
            ? item.attributes.media_house
            : null}
        </Text>
      </TouchableOpacity>
    )
  }

  renderCategory = (item: any) => {
    return (
      // console.log("image", item),
      <TouchableOpacity
        testID='categoriesItem'
        style={styles.mediaHouseView}
        onPress={() =>
          this.props.navigation.push('LandingPopularMedia', {
            title: 'categories',
            item: item,
          })
        }
      >
        <View
          style={{
            backgroundColor: '#fff',
            height: Scale(92),
            width: Scale(92),
            borderRadius: Scale(10),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
          }}
        >
          <Image
            source={{
              uri:
                item && item.attributes && item.attributes.image
                  ? item.attributes.image
                  : undefined,
            }}
            style={styles.imageStyle}
            resizeMode='cover'
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: Scale(12),
              marginTop: 5,
            }}
          >
            {item && item.attributes && item.attributes.name}
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
              fontSize: Scale(12),
            }}
          >
            {item &&
              item.attributes &&
              item.attributes.number_of_articles + ' Articles'}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  // Customizable Area End

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
      {/* Customizable Area Start */}
        <>
        <View style={[styles.mainContainer,{bottom: this.isPlatformiOS() ? Scale(48) : 0}]}>
          <Header
            testID='header'
            menu={navIcon}
            logo={logo}
            search={search}
            bell={bellIcon}
            // searchVisible={this.state.searchVisible}
            onPress={() => this.props.navigation.openDrawer()}
            onPressNotification={() =>
              this.props.navigation.navigate('Pushnotifications')
            }
            onPressSearch={() => this.onPressSearch()}
            searchScreen={false}
            back={undefined}
            title={undefined}
            backArrow={undefined}
          />
          <Modal
            animationType='fade'
            transparent={true}
            visible={this.state.searchVisible}
          >
            {/* // onRequestClose={() => this.setState({ feedbackSuccessPopup: false })} */}
            {/* // onDismiss={() => this.setState({ feedbackSuccessPopup: false })} */}
            <TouchableWithoutFeedback
              onPress={() => this.setState({ searchVisible: false })}
              testID='touchableWithoutFeedback'
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.searchView}>
                    <Feather name='search' size={18} color='#000' />
                    <TextInput
                      style={{
                        fontWeight: 'bold',
                        width: '80%',
                        height: Scale(40),
                        left: Scale(5),
                      }}
                      testID='searchInput'
                      // autoCapitalize="none"
                      value={this.state.searchValue}
                      placeholder='Search'
                      onChangeText={this.onChangeSearchValue}
                    />
                    <TouchableOpacity
                      onPress={() => this.onClickCancelSearch()}
                      testID='cancelSearch'
                    >
                      <Entypo name='cross' size={20} color='#000' />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.searchBtn}>
                    <Text style={styles.searchText}>SEARCH</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                  <Text style={styles.searchText}>SEARCH</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <ScrollView>
            <View style={{ flex: 1 }}>
              {this.state.playlist.length > 0 && (
                <Player
                  playlist={this.state.playlist}
                  {...this.props}
                  ref={this.playerRef}
                />
              )}
              <View style={styles.lineView}></View>

              {/* Popular Media House */}
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>Popular Media Houses</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MediaHouses')}
                  testID='seeMorePopularMediaHouse'
                >
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.songListView}>
                <FlatList
                  testID='popularMediaHouseFlatList'
                  style={{}}
                  data={
                    this.state.popularMediaHouse.length > 3
                      ? this.state.popularMediaHouse.slice(0, 3)
                      : this.state.popularMediaHouse
                  }
                  horizontal={true}
                  maxToRenderPerBatch={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }: any) => this.renderPopularMediaHouse(item)}
                />
              </View>

              {/* Categories View */}
              <View style={styles.seeMoreView}>
                <Text style={styles.popularText}>Categories</Text>
                <TouchableOpacity
                  testID='seeMoreCategories'
                  onPress={() =>
                    this.props.navigation.navigate('PopularCategory')
                  }
                >
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>

              {/* Categories List View */}
              <View style={styles.songListView}>
                <FlatList
                  testID='categoriesFlatList'
                  style={{ paddingBottom: this.isPlatformiOS() ? Scale(0) : Scale(80), marginBottom: 20 }}
                  data={
                    this.state.categoryArrayDynamic.length > 3
                      ? this.state.categoryArrayDynamic.slice(0, 3)
                      : this.state.categoryArrayDynamic
                  }
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => this.renderCategory(item)}
                />
              </View>
            </View>
          </ScrollView>
          {/* <Loader loading={this.state.isLoading} /> */}
          <Loader
            loading={this.state.isLoading}
            style={{ position: 'absolute', bottom: 170, left: 0, right: 0 }}
          />
        </View>
        </>
      {/* Customizable Area End */}
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: Scale(20)
    // paddingBottom: Scale(10),
  },
  outerView: {
    flexDirection: 'row',
    marginTop: Scale(15),
    marginHorizontal: Scale(15),
    alignItems: 'center',
    // backgroundColor:'red'
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
    // backgroundColor:'red',

  },
  mediaHouseView: {
    alignItems: "center",
    marginHorizontal: Scale(10),
    // backgroundColor:'red'
  },
  imageStyle: {
    height: Scale(90),
    width: Scale(90),
    borderRadius: Scale(5),
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchView: {
    // backgroundColor: '#e4eaeb',
    // backgroundColor: '#F9F9FD',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: Scale(10),
    padding: Scale(5),
    marginTop: Scale(15),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: Scale(5),
    elevation: Scale(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    height: Scale(300),
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
    paddingTop: Scale(10),
    borderWidth: 1,
    borderColor: "blue"
  },
  searchBtn: {
    width: '90%',
    borderRadius: Scale(10),
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: Scale(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    position: "absolute",
    bottom: Scale(15)
  },
  searchText: {
    fontWeight: "600",
    fontSize: Scale(18),
    color: "#fff",
    opacity: 0.8
  }
});
// Customizable Area End
