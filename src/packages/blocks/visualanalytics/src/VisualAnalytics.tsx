import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";

// Customizable Area Start
import Loader from "../../../components/src/Loader";
import Entypo from 'react-native-vector-icons/Entypo';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';
import { search, navIcon, bellIcon, logo, backArrow, backIcon, mediaImage } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
import CameraIcon from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image'
// Customizable Area End

import VisualAnalyticsController, {
  Props
} from "./VisualAnalyticsController";

export default class VisualAnalytics extends VisualAnalyticsController {

  constructor(props: Props) {
    super(props);
  }

  // Customizable Area Start

  renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        {this.state.loading ? (
          <ActivityIndicator size={'large'} color="black" animating style={{}} />
        ) : null}
      </View>
    );
  }

  handlePlaylistEndReached = () => {
    if (!this.state.onEndReachedCalledDuringMomentum && this.state.defaltPlaylistArray.length > 5) {
      this.onEndReached(); // LOAD MORE DATA
      this.setState({ onEndReachedCalledDuringMomentum: true });
    }
  }

  renderPlaylistItem = (items: any) => {
    const item = items.item;
    const { navigation } = this.props;
    const hasImage = item?.attributes?.image != null;
    const imageUrl = hasImage ? item.attributes.image : mediaImage;

    return (
      <View style={styles.mediaHouseView}>
        {hasImage ? (
          <View style={styles.mediaImageStyleView}>
            <FastImage source={{ uri: imageUrl, priority: FastImage.priority.high, }} style={styles.imageStyle} resizeMode='cover' />
          </View>
        ) : (
          <View style={styles.mediaImageStyleView}>
            <FastImage source={mediaImage} style={styles.imageStyle} resizeMode='cover' />
          </View>
        )}
        <View style={{ marginHorizontal: Scale(15) }}>
          <View style={{}}>
            <Text
              onPress={() => navigation.navigate('Bookmark2', { id: item.id })}
              style={[styles.name, { color: 'blue', opacity: 0.7 }]}
            >
              {item.attributes && item.attributes.name ? item.attributes.name : ''}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", backgroundColor: "#fff", width: '83%' }}>
              <Text
                onPress={() => navigation.navigate('Bookmark2', { id: item.id })}
                style={[
                  styles.name,
                  {
                    color: 'gray',
                    opacity: 0.7,
                    marginTop: Scale(5),
                    fontSize: Scale(14),
                    backgroundColor: '#fff',
                    width: '80%',
                  },
                ]}
                numberOfLines={1}
              >
                {'You can listen more news here and enjoy the articles'}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Bookmark2', { id: item.id })}>
                <Image source={backIcon} style={{ height: Scale(25), width: Scale(25) }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.scopeView}>
            <TouchableOpacity style={styles.scopeButton}>
              {item.attributes.is_public !== null && item.attributes.is_public !== undefined && (
                <Text>{item.attributes.is_public ? 'Public' : 'Private'}</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Entypo name='share' size={18} color='gray' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => this.onClickDeleteIcon(item)}>
              <DeleteIcon name='delete' size={20} color='gray' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    console.log("defaltPlaylistArray", this.state.defaltPlaylistArray);
    console.log("isDeleted", this.state.isDeleted);
    const { defaltPlaylistArray } = this.state;
    const hasPlaylists = defaltPlaylistArray && defaltPlaylistArray.length > 0;
    return (
      <View style={styles.mainContainer}>
        <Header
          menu={navIcon}
          backArrow={''}
          logo={logo}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.openDrawer()}
          onPressNotification={() => this.props.navigation.navigate('Pushnotifications')}
          onPressSearch={() => { }}
          searchScreen={false}
          back={''}
          title={''}
          onPressBack={() => { }}
        />
        <View style={styles.playListView}>
          <Text style={styles.playListTxt}>Playlists</Text>
          <TouchableOpacity
            style={styles.playListBtn}
            onPress={() => this.setState({ newPlaylistModal: true })}
          >
            <Entypo name='plus' size={20} color='#fff' />
            <Text style={styles.newPlayListTxt}>New Playlist</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineView} />
        <View style={{ flex: 1 }}>
          {hasPlaylists ? (
            <View style={{ flex: 1, marginTop: Scale(10), backgroundColor: '#fff' }}>
              <FlatList
                style={{ marginTop: Scale(5), marginBottom: Scale(80), backgroundColor: '#fff', flex: 1, flexGrow: 1 }}
                data={defaltPlaylistArray}
                onEndReachedThreshold={0.5}
                onMomentumScrollEnd={this.handlePlaylistEndReached}
                onEndReached={() => this.setState({ onEndReachedCalledDuringMomentum: false })}
                ListFooterComponent={this.renderFooter}
                renderItem={(item) => this.renderPlaylistItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>) : (
            this.state.isLoading === false &&
            <View style={[styles.noDataView, {}]}>
              <Text style={styles.noDataTxt}>No playlist found!</Text>
            </View>
          )}
        </View >
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.newPlaylistModal}
          onRequestClose={() => {
            this.setState({ newPlaylistModal: false });
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.hideKeyboard();
            }}
          >
            <View style={styles.centeredTermsView}>
              <View style={styles.modalTermsView}>
                <View style={styles.contentView}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        newPlaylistModal: false,
                        playlistImage: '',
                        playlistName: '',
                        playlistDescription: '',
                        isPublic: false,
                        isPrivate: false,
                      })
                    }
                  >
                    <Image
                      source={backArrow}
                      style={{ height: Scale(18), width: Scale(18) }}
                      resizeMode='contain'
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: Scale(18),
                      fontWeight: 'bold',
                      marginLeft: Scale(15),
                    }}
                  >
                    New Playlist
                  </Text>
                </View>
                {this.state.playlistImage ? (
                  <ImageBackground
                    source={{
                      uri:
                        'data:image/jpeg;base64,' +
                        this.state.playlistImage.data,
                    }}
                    style={styles.playlistImage}
                    imageStyle={{ borderRadius: Scale(10) }}
                  />
                ) : (
                  <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <View style={styles.addImageView}>
                      <TouchableOpacity
                        style={styles.cameraView}
                        onPress={() => this.onPressCamera()}
                      >
                        <CameraIcon
                          name='camera'
                          color={'#fff'}
                          size={15}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: Scale(20),
                        width: '30%',
                        top: Scale(10),
                        left: Scale(10),
                        fontWeight: '600',
                      }}
                    >
                      Add a Playlist Picture
                    </Text>
                  </View>
                )}
                <Text style={[styles.txtName, { marginTop: Scale(20) }]}>
                  Name of playlist
                </Text>
                <View
                  style={[
                    styles.emailView,
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                  ]}
                >
                  <TextInput
                    style={[styles.emailTextInput, { width: '90%', height: Scale(45) }]}
                    placeholder='Playlist name'
                    value={this.state.playlistName}
                    onChangeText={(value) =>
                      this.setState({ playlistName: value })
                    }
                  />
                </View>
                <View style={[styles.lineView, { marginHorizontal: Scale(10) }]}></View>
                <Text style={[styles.txtName, { marginTop: Scale(20), opacity: 0.5, }]}>Add Description</Text>
                <View style={[styles.descriptionView, {}]}>
                  <TextInput
                    style={[styles.descriptionTextInput]}
                    multiline
                    placeholder='Playlist description'
                    value={this.state.playlistDescription}
                    onChangeText={(value) =>
                      this.setState({ playlistDescription: value })
                    }
                  />
                </View>
                <View
                  style={[styles.lineView, { marginHorizontal: Scale(10) }]}
                />
                <Text
                  style={[
                    styles.txtName,
                    { marginTop: Scale(20), opacity: 0.5 },
                  ]}
                >
                  Want to make
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: Scale(10),
                    marginTop: Scale(10),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: Scale(25),
                      width: Scale(25),
                      borderRadius: Scale(15),
                      borderWidth: 4,
                      borderColor: 'gray',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => this.onClickPublic('public')}
                  >
                    <TouchableOpacity
                      style={{
                        height: Scale(20),
                        width: Scale(20),
                        borderRadius: Scale(15),
                        borderWidth: 6,
                        borderColor: this.state.isPublic ? 'blue' : '#fff',
                      }}
                      onPress={() => this.onClickPublic('public')}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Scale(14),
                      marginLeft: Scale(10),
                    }}
                  >
                    Public
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: Scale(25),
                      width: Scale(25),
                      borderRadius: Scale(15),
                      borderWidth: 4,
                      borderColor: 'gray',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: Scale(60),
                    }}
                    onPress={() => this.onClickPublic('private')}
                  >
                    <TouchableOpacity
                      style={{
                        height: Scale(20),
                        width: Scale(20),
                        borderRadius: Scale(15),
                        borderWidth: 6,
                        borderColor: this.state.isPrivate ? 'blue' : '#fff',
                      }}
                      onPress={() => this.onClickPublic('private')}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Scale(14),
                      marginLeft: Scale(10),
                    }}
                  >
                    Private
                  </Text>
                </View>
                <View
                  style={[styles.lineView, { marginHorizontal: Scale(10) }]}
                />
                <TouchableOpacity
                  style={styles.doneBtn}
                  onPress={() => this.createPlaylist()}
                >
                  <Text style={[styles.saveText, { fontSize: Scale(14) }]}>
                    DONE
                  </Text>
                </TouchableOpacity>
              </View >
            </View >
          </TouchableWithoutFeedback >
          <Loader loading={this.state.isLoading} style={{}}/>
                
        </Modal >
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.deletePopup}
        >
          {/* <TouchableWithoutFeedback onPress={() => this.setState({ deletePopup: false })}> */}
          < View style={styles.centeredTermsView} >
            <View style={styles.modalTermsView}>
              <View style={styles.contentDeleteView}>
                <Text style={{ fontSize: Scale(20), fontWeight: "bold", alignSelf: 'center', marginTop: Scale(10) }}>Delete Playlist</Text>
                <View style={[styles.lineview, { marginTop: Scale(15), width: '100%' }]}></View>
                <Text style={{ fontSize: Scale(18), fontWeight: "500", alignSelf: 'center', marginTop: Scale(20), textAlign: 'center', marginHorizontal: Scale(60) }}>Are you sure you want to delete this playlist?</Text>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    style={styles.yesBtn}
                    onPress={() =>
                      this.deletePlaylist(this.state.deletedItem)
                    }
                  >
                    <Text style={{ fontSize: Scale(16) }}>Yes</Text>
                  </TouchableOpacity>
                  <View style={{ width: 20 }} />
                  <TouchableOpacity
                    style={styles.noBtn}
                    onPress={() => this.setState({ deletePopup: false })}
                  >
                    <Text style={{ fontSize: Scale(16), color: '#fff' }}>
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </View >
            </View >
          </View >
          {/* </TouchableWithoutFeedback> */}
        </Modal >
        <Loader loading={this.state.isLoading} />
      </View>)
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area End
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginLeft: Scale(15),
  },
  national: {
    height: Scale(130),
    width: Scale(130),
    borderRadius: Scale(15),
  },
  sliderView: {
    marginHorizontal: Scale(10),
    marginTop: Scale(10),
  },
  slider: {
    width: '100%',
  },
  durationView: {
    flexDirection: 'row',
    marginHorizontal: Scale(25),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationTxt: {
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.5,
  },
  musicControlView: {
    flexDirection: 'row',
    marginHorizontal: Scale(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Scale(5),
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
    paddingHorizontal: Scale(20),
    padding: Scale(10),
  },
  lineView: {
    borderWidth: 0.7,
    opacity: 0.1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(20),
    // marginHorizontal: Scale(20)
  },
  lineview: {
    borderWidth: 0.7,
    opacity: 0.2,
    borderColor: '#000',
  },
  mediaImageView: {
    marginVertical: Scale(20),
    height: Scale(201),
    width: Scale(201),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(14),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addNewsTxt: {
    fontWeight: '600',
    fontSize: Scale(18),
    color: '#fff',
  },
  sharedView: {
    flexDirection: 'row',
    marginHorizontal: Scale(10),
    marginTop: Scale(5),
  },
  sharedBtn: {
    width: '40%',
    padding: Scale(10),
    backgroundColor: 'blue',
    borderRadius: Scale(10),
    elevation: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  playListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scale(20),
    marginHorizontal: Scale(20),
    alignItems: 'center',
  },
  playListTxt: {
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  playListBtn: {
    backgroundColor: 'blue',
    width: '38%',
    padding: Scale(8),
    borderRadius: Scale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  newPlayListTxt: {
    fontSize: Scale(16),
    color: '#fff',
  },
  mediaHouseView: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(10),
    flexDirection: 'row',
    borderRadius: Scale(10),
    marginTop: Scale(10),
    marginBottom: Scale(5),
  },
  mediaImageStyleView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 2,
    backgroundColor: '#fff',
    elevation: 3,
    height: Scale(100),
    width: Scale(100),
    borderRadius: 10,
  },
  imageStyle: {
    height: Scale(100),
    width: Scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: Scale(3),
    borderRadius: Scale(10),
    backgroundColor: "#fff"
  },
  name: {
    fontSize: Scale(16),
    fontWeight: 'bold',
    marginTop: Scale(8),
  },
  mediaName: {
    fontSize: Scale(14),
    fontWeight: 'bold',
    opacity: 0.4,
    marginTop: Scale(5),
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginTop: Scale(5),
  },
  dotView: {
    height: Scale(5),
    width: Scale(5),
    borderRadius: Scale(5),
    backgroundColor: '#000',
  },
  subHeadText: {
    fontSize: Scale(16),
    fontWeight: 'bold',
    marginHorizontal: Scale(15),
    opacity: 0.7,
  },
  playControlView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // elevation: 3,
    borderRadius: Scale(20),
    padding: Scale(10),
  },
  scopeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(10),
  },
  scopeButton: {
    borderRadius: Scale(5),
    borderColor: 'gray',
    padding: Scale(2),
    width: '30%',
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
  },
  shareButton: {
    backgroundColor: '#f0efed',
    padding: Scale(3),
    width: '20%',
    borderRadius: Scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Scale(8),
  },

  // Modal Styles //
  centeredTermsView: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contentView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: Scale(10),
    marginTop: Scale(10),
    alignItems: 'center'
  },
  contentDeleteView: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(10),
    marginTop: Scale(10),
    alignItems: 'center',
  },
  modalTermsView: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginHorizontal: Scale(15),
  },
  modalDeleteView: {
    backgroundColor: 'red',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Scale(25)
  },
  yesBtn: {
    borderColor: 'gray',
    borderRadius: Scale(10),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Scale(10),
    backgroundColor: '#fff',
    width: '40%',
  },
  noBtn: {
    borderRadius: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    padding: Scale(10),
    backgroundColor: 'blue',
    width: '40%',
  },

  // New Playlist Modal Styles //
  addImageView: {
    borderRadius: Scale(10),
    borderWidth: 1,
    borderColor: "gray",
    width: Scale(160),
    padding: Scale(30),
    elevation: Scale(3),
    backgroundColor: '#fff',
    marginHorizontal: Scale(10),
    marginTop: Scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistImage: {
    borderRadius: Scale(10),
    borderWidth: 1,
    borderColor: 'gray',
    height: Scale(120),
    width: Scale(160),
    padding: Scale(30),
    elevation: Scale(3),
    backgroundColor: '#fff',
    marginHorizontal: Scale(10),
    marginTop: Scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraView: {
    backgroundColor: 'blue',
    height: Scale(40),
    width: Scale(40),
    borderRadius: Scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtName: {
    color: '#000',
    fontSize: Scale(15),
    fontWeight: 'bold',
    opacity: 0.5,
    marginLeft: Scale(20),
  },
  emailView: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    marginTop: Scale(10),
    marginHorizontal: Scale(35),
    padding: Scale(5),
    alignSelf: 'center',
    borderWidth: Scale(1),
    borderColor: 'gray',
  },
  emailTextInput: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    paddingHorizontal: Scale(5),
    fontSize: Scale(16),
    fontWeight: 'bold',
    // height: Scale(45),
  },
  descriptionTextInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    paddingHorizontal: Scale(5),
    fontSize: Scale(16),
    fontWeight: 'bold',
    // alignItems:"flex-start",
    height: '100%',
    textAlignVertical: 'top'
  },
  descriptionView: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    marginTop: Scale(10),
    padding: Scale(5),
    alignSelf: 'center',
    height: Scale(160),
    borderWidth: Scale(1),
    borderColor: 'gray',
  },
  doneBtn: {
    marginTop: Scale(50),
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: "center",
    backgroundColor: "blue",
    padding: Scale(14),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveText: {
    fontWeight: '600',
    fontSize: Scale(18),
    color: '#fff',
  },
  noDataView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
// Customizable AArea End
