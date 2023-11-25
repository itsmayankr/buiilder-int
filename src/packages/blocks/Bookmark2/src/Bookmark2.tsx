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
  TouchableWithoutFeedback,
  Modal
} from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, bellIcon, logo, backArrow, mediaImage } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import Loader from "../../../components/src/Loader";
import Entypo from 'react-native-vector-icons/Entypo';
import MediaPlayer from "../../../components/src/Player";
// Customizable Area End

import Bookmark2Controller, { Props } from "./Bookmark2Controller";

export default class Bookmark2 extends Bookmark2Controller {

  constructor(props: Props) {
    super(props);
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <View style={styles.mainContainer}>
        <Header
          menu={''}
          backArrow={backArrow}
          logo={logo}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.goBack()}
          onPressNotification={() => this.props.navigation.navigate('')}
          onPressSearch={() => { }}
          searchScreen={false}
          back={''}
          title={''}
          onPressBack={() => { }} />
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          {this.state.playlistArticles && this.state.playlistArticles.length > 0 ?
            <View style={{ flex: 1 }}>
              {
                this.state.playlist.length > 0 &&
                <MediaPlayer playlist={this.state.playlist} {...this.props} ref={this.playerRef} />
              }

              {/* Line View */}
              <View style={styles.lineView}></View>
              <View style={{ flex: 1, marginTop: Scale(10), }}>
                <Text style={styles.subHeadText}>Other National News</Text>
                {this.state.playlistArticles && this.state.playlistArticles.length > 0 ?
                  <FlatList
                    style={{ marginTop: Scale(5) }}
                    data={this.state.playlistArticles}
                    extraData={this.state.uiRender}
                    renderItem={({ item, index }: { item: any, index: any }) => (
                      <View style={styles.mediaHouseView}>
                        <View style={styles.mediaImageStyleView}>
                          <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                            <TouchableOpacity style={styles.playControlView} onPress={() => this.onClickPlay(item.id)}>
                              <Icon name='control-play' size={10} color='blue' />
                            </TouchableOpacity>
                          </ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: Scale(10), backgroundColor: '#fff', width: '77%' }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={[styles.name, { color: 'blue', opacity: 0.7, backgroundColor: '#fff', width: '95%' }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                            <TouchableOpacity onPress={() => this.onClickThreeDots(item)}>
                              <Entypo name="dots-three-vertical" size={15} color='gray' />
                            </TouchableOpacity>
                            {/* <Image source={save} style={{ height: Scale(15), width: Scale(15), tintColor: 'blue' }} resizeMode="contain" /> */}
                          </View>
                          <Text style={[styles.name, { opacity: 0.7, width: '72%', marginTop: Scale(3), }]}>{'ISIS leader in Syria killed in US strike, say officials.'}</Text>
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
                  /> : !this.state.isLoading && <View style={styles.noDataView}>
                    <Text style={styles.noDataTxt}>No data found!</Text>
                  </View>}
              </View>
            </View> : !this.state.isLoading &&
            <View style={{ flex: 1, }}>
              <View style={{ marginHorizontal: Scale(20), marginTop: Scale(20) }}>
                <Text style={styles.playListTxt}>Playlists</Text>
                <View style={styles.lineView}></View>
              </View>
              <View style={styles.mediaImageView}>
                <Image source={mediaImage} style={styles.mediaImage} />
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: Scale(20), fontWeight: "bold" }}>India Events</Text>
                <Text style={{ fontSize: Scale(16), color: 'gray' }}>October 2022</Text>
                <Text style={{ fontSize: Scale(12), color: 'gray' }}>Created Today</Text>
              </View>
              <View style={[styles.lineView, { marginHorizontal: Scale(20) }]}></View>
              <Text style={{ fontSize: Scale(18), color: 'gray', fontWeight: "500", alignSelf: 'center', marginTop: Scale(20) }}>There is no news in the playlist</Text>
              <TouchableOpacity style={styles.addNewsBtn} onPress={() => this.props.navigation.navigate('AddArticlesInPlaylist', { id: this.props.navigation.state.params.id })}>
                <Entypo name="plus" size={25} color="#fff" />
                <Text style={styles.addNewsTxt}>  Add News</Text>
              </TouchableOpacity>
            </View>}
            <Loader loading={this.state.isLoading} style={{ position: 'absolute', bottom: 100, left: 0, right: 0 }} />
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.movePlaylistPopup}
          onRequestClose={() => this.setState({ movePlaylistPopup: false })}
          onDismiss={() => this.setState({ movePlaylistPopup: false })}>
          <TouchableWithoutFeedback onPress={() => this.setState({ movePlaylistPopup: false })}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.moveView}>
                  <TouchableOpacity style={{ height: Scale(25), width: Scale(25), borderRadius: Scale(15), borderWidth: 4, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.onClickTop('top', this.state.listItem)}>
                    <TouchableOpacity style={{ height: Scale(20), width: Scale(20), borderRadius: Scale(15), borderWidth: 6, borderColor: this.state.moveTop ? 'blue' : '#fff' }} onPress={() => this.onClickTop('top', this.state.listItem)}>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.moveTxt}>Move to the top</Text>
                </View>
                <View style={[styles.lineView, { marginHorizontal: Scale(20) }]}></View>
                <View style={styles.moveView}>
                  <TouchableOpacity style={{ height: Scale(25), width: Scale(25), borderRadius: Scale(15), borderWidth: 4, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.onClickTop('last', this.state.listItem)}>
                    <TouchableOpacity style={{ height: Scale(20), width: Scale(20), borderRadius: Scale(15), borderWidth: 6, borderColor: this.state.moveLast ? 'blue' : '#fff' }} onPress={() => this.onClickTop('last', this.state.listItem)}>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.moveTxt}>Move to the last</Text>
                </View>
                <View style={[styles.lineView, { marginHorizontal: Scale(20) }]}></View>
                <View style={styles.moveView}>
                  <TouchableOpacity style={{ height: Scale(25), width: Scale(25), borderRadius: Scale(15), borderWidth: 4, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.onClickTop('remove', this.state.listItem)}>
                    <TouchableOpacity style={{ height: Scale(20), width: Scale(20), borderRadius: Scale(15), borderWidth: 6, borderColor: this.state.Remove ? 'blue' : '#fff' }} onPress={() => this.onClickTop('remove', this.state.listItem)}>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.moveTxt}>Remove from the playlist</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/* </ScrollView> */}
      </View>
    )
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
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

  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    height: Scale(180),
    width: '60%',
    borderRadius: Scale(10),
    backgroundColor: "white",
    // alignItems: "center",
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
  moveView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Scale(20),
    marginTop: Scale(15),
  },
  moveTxt: {
    fontSize: Scale(15),
    fontWeight: 'bold',
    marginLeft: Scale(15),
  },

  playListTxt: {
    fontSize: Scale(18),
    fontWeight: "bold"
  },
  mediaImageView: {
    marginVertical: Scale(20),
    height: Scale(201),
    width: Scale(201),
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },
  mediaImage: {
    height: Scale(200),
    width: Scale(200),
    // alignSelf: "center"
  },
  addNewsBtn: {
    marginTop: Scale(60),
    width: '90%',
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: Scale(10),
    alignItems: "center",
    backgroundColor: "blue",
    padding: Scale(14),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addNewsTxt: {
    fontWeight: "600",
    fontSize: Scale(18),
    color: "#fff",
  },
})
// Customizable Area End