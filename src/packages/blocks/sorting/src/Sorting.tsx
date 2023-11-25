import React from "react";
// Customizable Area Start
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Header from '../../../components/src/AppHeader';
import {
  backArrow,
  logo,
  search,
  bellIcon,
  success,
  mediaImage,
} from './assets';
import Scale from '../../../components/src/Scale';
import Loader from '../../../components/src/Loader';
import PlusIcon from 'react-native-vector-icons/Entypo';
import CameraIcon from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
// Customizable Area End

import SortingController, {
  Props
  //configJSON
} from "./SortingController";

export default class Sorting extends SortingController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  onMomentumScrollEnd = () => {
    if (!this.state.onEndReachedCalledDuringMomentum && this.state.playlistType.length > 5) {
      this.onEndReached(); // LOAD MORE DATA
      this.setState({ onEndReachedCalledDuringMomentum: true });
    }
  };

  renderItem = ({ item, index }: any) => {
    const isSelected = item?.isSelected;
    const itemImageSource = item?.attributes?.image;
    return (
      <View style={styles.itemContainer}>
        {item?.attributes?.image != null ?
          <View style={[styles.imageStyle, { backgroundColor: '#fff' }]}>
            <FastImage source={{ uri: itemImageSource }} style={styles.imageStyle} />
          </View> :
          <View style={[styles.imageStyle, { backgroundColor: '#fff' }]}>
            <FastImage source={mediaImage} style={styles.imageStyle} />
          </View>}
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{item.attributes.name}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {item.attributes.description}
            </Text>
            <TouchableOpacity
              style={[
                styles.checkBox,
                { backgroundColor: isSelected ? 'blue' : '#f0efed' },
              ]}
              onPress={() => this.onClickCheckBox(item, index)}
            >
              <CameraIcon
                name='check'
                size={18}
                color={isSelected ? '#fff' : '#f0efed'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        {this.state.loading ? <Loader loading={this.state.loading} style={{}} /> : null}
      </View>
    );
  };
  // Customizable Area End

  render() {
    const {
      playlistType,
      newPlaylistModal,
      isPublic,
      isPrivate,
      playlistImage,
      playlistName,
      playlistDescription,
      isLoading,
      saveToPlaylistPopup,
      playlistIdsArray,
    } = this.state;
    return (
      //Merge Engine DefaultContainer
      <View style={styles.container}>
        {/* Customizable Area Start */}
        <Header
          backArrow={backArrow}
          logo={logo}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.goBack()}
          onPressNotification={() => { }}
          menu={undefined}
          onPressSearch={() => { }}
          searchScreen={false}
          back={undefined}
          title={undefined}
          onPressBack={() => { }}
        />
        <View style={styles.playListView}>
          <Text style={styles.playListTxt}>Add to Playlist</Text>
          <TouchableOpacity
            style={styles.playListBtn}
            onPress={() => this.setState({ newPlaylistModal: true })}
          >
            <PlusIcon name='plus' size={20} color='#fff' />
            <Text style={styles.newPlayListTxt}>New Playlist</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <View style={styles.lineView} />
          {playlistType && playlistType.length > 0 ? (
            <View>
              <FlatList
                style={styles.flatListStyle}
                data={playlistType}
                onEndReachedThreshold={0.5}
                onMomentumScrollEnd={this.onMomentumScrollEnd}
                onEndReached={() =>
                  this.setState({ onEndReachedCalledDuringMomentum: false })
                }
                ListFooterComponent={this.renderFooter}
                renderItem={(item) => this.renderItem(item)}
              />
            </View>
          ) : (
            !isLoading && (
              <View style={styles.noDataView}>
                <Text style={styles.noDataTxt}>No playlist found!</Text>
              </View>
            )
          )}
          <Modal
            animationType='slide'
            transparent={true}
            visible={newPlaylistModal}
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
                      }>
                      <Image
                        source={backArrow}
                        style={styles.playlistItemImage}
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
                  {playlistImage ? (
                    <ImageBackground
                      source={{
                        uri: 'data:image/jpeg;base64,' + playlistImage.data,
                      }}
                      style={styles.playlistImage}
                      imageStyle={styles.playlistImageStyle}
                    />
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={styles.addImageView}>
                        <TouchableOpacity
                          style={styles.cameraView}
                          onPress={this.onPressCamera}
                        >
                          <CameraIcon name='camera' color={'#fff'} size={15} />
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
                      { flexDirection: 'row', justifyContent: 'space-between' },
                    ]}
                  >
                    <TextInput
                      style={[
                        styles.emailTextInput,
                        { width: '90%', height: Scale(45) },
                      ]}
                      placeholder='Playlist name'
                      value={playlistName}
                      onChangeText={(value) =>
                        this.setState({ playlistName: value })
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
                    Add Description
                  </Text>
                  <View style={[styles.descriptionView, {}]}>
                    <TextInput
                      style={[styles.emailTextInput, { width: '95%' }]}
                      multiline
                      placeholder='Playlist description'
                      value={playlistDescription}
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
                          borderColor: isPublic ? 'blue' : '#fff',
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
                          borderColor: isPrivate ? 'blue' : '#fff',
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
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            animationType='fade'
            transparent={true}
            visible={saveToPlaylistPopup}
            onRequestClose={() => this.setState({ saveToPlaylistPopup: false })}
            onDismiss={() => this.setState({ saveToPlaylistPopup: false })}
          >
            <TouchableWithoutFeedback onPress={() => this.onClickBackground()}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image
                    source={success}
                    style={styles.successImage}
                    resizeMode='contain'
                  />
                  <Text style={styles.successText}>
                    News added to the playlist successfully!
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Loader loading={isLoading} />
        </View>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => this.onClickAddToPlaylist()}
          disabled={playlistIdsArray.length > 0 ? false : true}
        >
          <Text style={styles.saveText}>SAVE TO PLAYLIST</Text>
        </TouchableOpacity>
        {/* Customizable Area End */}
      </View>
      //Merge Engine End DefaultContainer
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  scrollContainer: {
    flex: 1,
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
  lineView: {
    borderWidth: 0.7,
    opacity: 0.1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(20),
    marginHorizontal: Scale(20),
  },
  lineViewStyle: {
    borderWidth: 0.7,
    opacity: 0.1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(20),
    marginHorizontal: Scale(10),
  },
  imageStyle: {
    height: Scale(80),
    width: Scale(80),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkBox: {
    height: Scale(22),
    width: Scale(22),
    borderRadius: Scale(3),
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: Scale(8),
  },
  saveBtn: {
    marginTop: Scale(50),
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(16),
    shadowColor: '#000',
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

  // Modal Style
  centeredTermsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    // justifyContent: "space-between",
    marginHorizontal: Scale(10),
    marginTop: Scale(10),
    alignItems: 'center',
  },
  modalTermsView: {
    // height: '95%',
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    // alignItems: "center",
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
  addImageView: {
    borderRadius: Scale(10),
    borderWidth: 1,
    borderColor: 'gray',
    // height:Scale(40),
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
    marginHorizontal: Scale(5),
    fontSize: Scale(16),
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'top',
    // height: Scale(45),
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
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    height: Scale(230),
    width: '80%',
    borderRadius: Scale(10),
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    paddingTop: Scale(10),
  },
  successImage: {
    height: Scale(80),
    width: Scale(80),
    marginTop: Scale(20),
  },
  successText: {
    color: '#000',
    fontSize: Scale(16),
    // fontWeight: "800",
    marginHorizontal: Scale(20),
    textAlign: 'center',
    letterSpacing: 1.5,
    marginTop: Scale(10),
  },
  noDataView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: Scale(100),
  },
  noDataTxt: {
    color: 'gray',
    fontWeight: 'bold',
  },
  playlistImageStyle: {
    borderRadius: Scale(10),
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'red',
    bottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: Scale(10),
  },
  imageContainer: {
    backgroundColor: '#fff',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(10),
    width: '78%',
  },
  itemName: {
    fontSize: Scale(18),
    fontWeight: 'bold',
    marginTop: Scale(8),
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Scale(),
  },
  description: {
    width: '70%',
    color: 'gray',
  },
  flatListStyle: { marginTop: Scale(5), marginBottom: Scale(0) },
  playlistItemImage: { height: Scale(18), width: Scale(18) },
});
// Customizable Area End
