//@ts-nocheck
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import SettingIcon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-tiny-toast';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  smh,
  speedPrev,
  speedNext,
  previous,
  next,
  play,
  share,
  save,
  pause,
  repeat,
  repeatOne,
  repeatOff,
} from '../../../packages/blocks/landingpage/src/assets';
import Scale from './Scale';
import TrackPlayer, {
  Capability,
  RepeatMode,
  State,
} from 'react-native-track-player';
import TextTicker from 'react-native-text-ticker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import RnVerticalSlider from 'rn-vertical-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { BlockComponent } from '../../framework/src/BlockComponent';
import Loader from './Loader';


let radio_props = [
  { label: '0.5x', value: 0.5 },
  { label: '0.75x', value: 0.75 },
  { label: 'Normal', value: 1 },
  { label: '1.25x', value: 1.25 },
  { label: '1.5x', value: 1.5 },
  { label: '2x', value: 2 },
]
interface Props {
  playlist: any;
  navigation: any;
  id: string;
  paginationRequest?: any;
}

interface S {
  isBuffering: boolean;
  isPlaybackSpeedModalVisible: boolean;
  isRepeat: boolean;
  isRepeatOne: boolean;
  loadingAudio: boolean;
  isAlreadyPlay: boolean;
  duration: any;
  timeElapsed: any;
  percent: any;
  current_track: number;
  inprogress: boolean;
  playbackSpeed: number;
  isTitleScroll: boolean;
  isDiscriptionScroll: boolean;
  volume: number;
  volumeMenu: boolean;
  // playerState: number;
}

;

interface SS {

}

class MediaPlayer extends BlockComponent<Props, S, SS> {
  interval: any;
  focusListener: any;
  paginationRequest: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      volume: 1,
      isBuffering: false,
      isPlaybackSpeedModalVisible: false,
      isRepeat: false,
      isRepeatOne: false,
      loadingAudio: false,
      percent: 0,
      isAlreadyPlay: false,
      duration: 0,
      timeElapsed: 0,
      current_track: 0,
      inprogress: false,
      playbackSpeed: 1,
      isTitleScroll: false,
      isDiscriptionScroll: false,
      volumeMenu: false,
      // playerState: 0,
    };
  }

  async componentDidMount() {
    // const { navigation, playlist } = this.props;
    console.log('Player_props', this.props);
    // this.getStoredStateofPlayer();
    this.setupTrackPlayer();
    // this.focusListener = navigation.addListener('didFocus', () => {
    //   console.log('didFocus okay');
    //   this.setupTrackPlayer();
    // });
    this.interval = this.playerListner();

    // this.paginationRequest = this.paginationRequestListner();
  }

  async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<S>, snapshot?: any) {
    const { playlist } = this.props;
    if (prevProps.playlist !== playlist) {
      console.log('playlist updated', playlist);
      this.setupTrackPlayer();
    }
  }


  playerListner = () => {
    setInterval(async () => {
      this.getPlayerState().then(() => {
        // console.log('obj', obj);
        let percent = 0;
        percent = Math.floor(
          (this.state.timeElapsed / this.state.duration) * 100
        );
        // }
        // console.log('percent is NAN', percent);
        // console.log('percent is NAN', !Number.isNaN(percent));
        if (!isNaN(percent)) {
          this.setState({ percent: percent });
        }
        // if (!isNaN(percent)) {
        //   console.log('percent', percent);
        //   this.setState({ percent: percent });
        // }
        //   // const { current_track, timeElapsed, duration } = this.state;
        //   // const { playlist } = this.props;
        //   // const id = playlist[current_track].id;
        //   // const data = {
        //   //   id,
        //   //   percent,
        //   //   timeElapsed,
        //   //   duration,
        //   //   current_track,
        //   //   routeName: this.props.navigation.state.routeName,
        //   // };
        //   // // console.warn(this.props.navigation.state.routeName)
        //   // // if (this.state.playerState == 1) {
        //   //   AsyncStorage.setItem(
        //   //     this.props.navigation.state.routeName,
        //   //     JSON.stringify(data)
        //   //   ).then(() => {
        //   //     // this.setState({ playerState: 0 });
        //   //     // console.log('data stored', data);
        //   //   });
        //   // }
      });
    }, 500);
  };

  // paginationRequestListner = () => {
  //   setInterval(() => {
  //     console.log('paginationRequest');
  //     if (this.props.paginationRequest){
  //     this.props.paginationRequest();
  //     }
  //   }, 5000);
  // };

  getStoredStateofPlayer = async () => {
    const { playlist, navigation } = this.props;
    AsyncStorage.getItem(navigation.state.routeName)
      .then(async (data: any) => {
        if (data) {
          const playListData = JSON.parse(data);
          const { id, timeElapsed } = playListData;
          const index = playlist.findIndex((item: any) => item.id === id);
          console.log('playListData', playListData);
          if (id.toString() == playlist[index].id.toString()) {
            this.setupTrackPlayer().then(() => {
              TrackPlayer.skip(parseInt(index)).then(() => {
                this.setState({
                  // current_track: parseInt(index),s
                });
                TrackPlayer.seekTo(timeElapsed);
                TrackPlayer.play();
              });
            });
          } else {
            await this.setupTrackPlayer();
          }
        } else {
          await this.setupTrackPlayer();
        }
      })
      .catch(async (err: any) => {
        await this.setupTrackPlayer();
      });
  };

  getPlayerState = async () => {
    await TrackPlayer.getPosition().then((position: any) => {
      this.setState({ timeElapsed: position });
    });
    await TrackPlayer.getDuration().then((duration: any) => {
      this.setState({ duration: duration });
    });
    await TrackPlayer.getCurrentTrack().then((track: any) => {
      this.props.playlist.map((item: any, index: number) => {
        if (index === track) {
          this.setState({ current_track: index });
          // if (this.props.playlist.length - 1 === index) {
          //   console.log('paginationRequest');
          //   // this.props.paginationRequest()
          // }
        }
      });
    });
    await TrackPlayer.getState().then((state: any) => {
      switch (state) {
        case State.Playing:
          this.setState({
            isAlreadyPlay: true,
            isBuffering: false
          });
          break;
        case State.Paused:
          this.setState({
            isAlreadyPlay: false,
            isBuffering: false
          });
          break;
        case State.Stopped:
          this.setState({
            isAlreadyPlay: false,
            isBuffering: false
          });
          break;
        // case State.Buffering:
        //   this.setState({ isBuffering: true });
        //   break;
        case State.Connecting:
          this.setState({ isBuffering: true });
          break;
        default:
          break;
      }
    });
  };

  async componentWillUnmount() {
    clearInterval(this.interval);
    TrackPlayer.destroy();
    console.log('destroy');
    // this.focusListener.remove();
  }

  setupTrackPlayer = async () => {
    console.log('setupTrackPlayer');
    await TrackPlayer.reset();
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(this.props.playlist);
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo,
      ],
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
        Capability.SeekTo,
      ],
    });
    await TrackPlayer.setRepeatMode(RepeatMode.Off);
    await TrackPlayer.pause();
  };

  changeTime = async (seconds: any) => {
    // 50 / duration
    if (seconds !== 0) {
      let seektime: any = ((await seconds) / 100) * this.state.duration;
      this.setState({ timeElapsed: seektime });
      await TrackPlayer.seekTo(seektime);
    }
  };

  onStartPress = async () => {
    this.setState({ isAlreadyPlay: true });
    TrackPlayer.getQueue().then(async (queue: any) => {
      console.log('queue', queue);
      if (queue.length === 0) {
        console.log('if');
        this.setupTrackPlayer().then(async () => {
          await TrackPlayer.play();
          // this.setState({ playerState: 1 });
        });
      }
    });
    if (
      this.state.percent === 100 &&
      this.state.current_track === this.props.playlist.length - 1
    ) {
      await TrackPlayer.reset();
      await this.setupTrackPlayer();
      await TrackPlayer.play();
      // this.setState({ playerState: 1 });
    } else {
      await TrackPlayer.play();
    }
  };

  onForward10 = async () => {
    if (this.state.duration === 0) {
      return;
    }
    await TrackPlayer.seekTo(this.state.timeElapsed + 10);
  };

  onBackward10 = async () => {
    if (this.state.duration === 0) {
      return;
    }
    await TrackPlayer.seekTo(this.state.timeElapsed - 10);
  };

  onPausePress = async () => {
    this.setState({ isAlreadyPlay: false });
    await TrackPlayer.pause();
  };

  toogleRepeatAndRepeatOne = async () => {
    if (this.state.isRepeat) {
      await TrackPlayer.setRepeatMode(RepeatMode.Track);
      this.setState({ isRepeat: false, isRepeatOne: true });
      Toast.show('Repeat track', {
        position: Toast.position.BOTTOM,
        animation: true,
        containerStyle: styles.toastContainer,
      });
    } else if (this.state.isRepeatOne) {
      await TrackPlayer.setRepeatMode(RepeatMode.Off);
      this.setState({ isRepeat: false, isRepeatOne: false });
      Toast.show('Repeat off', {
        position: Toast.position.BOTTOM,
        animation: true,
        containerStyle: styles.toastContainer,
      });
    } else {
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      this.setState({ isRepeat: true, isRepeatOne: false });
      Toast.show('Repeat all', {
        position: Toast.position.BOTTOM,
        animation: true,
        containerStyle: styles.toastContainer,
      });
    }
  };

  onForward = async () => {
    const { playlist } = this.props;
    const { current_track, isRepeat, isRepeatOne } = this.state;

    let curr_track = playlist[current_track];
    let current_index = playlist.indexOf(curr_track) + 1;

    switch (true) {
      case current_index === playlist.length && isRepeat && !isRepeatOne:
        console.log(
          'current_index is same as playlist.length and isRepeat is true and isRepeatOne is false'
        );
        this.setState({ current_track: 0 });
        await TrackPlayer.stop();
        await this.setupTrackPlayer();
        await TrackPlayer.play();
        break;
      case current_index === playlist.length && !isRepeat && !isRepeatOne:
        console.warn(
          'current_index is same as playlist.length and isRepeat is false and isRepeatOne is false'
        );
        await TrackPlayer.pause();
        // this.props.paginationRequest();
        console.log('paginationRequest');
        break;
      case isRepeatOne:
        console.log(
          'current_index is same as playlist.length and isRepeat is false and isRepeatOne is true'
        );
        this.setState({ current_track: current_track, timeElapsed: 0 });
        await TrackPlayer.seekTo(0);
        break;
      default:
        console.log('default case');
        this.setState({ current_track: current_track + 1, timeElapsed: 0 });
        await TrackPlayer.skipToNext();
        break;
    }

    console.log(
      'isRepeatOne is ',
      isRepeatOne,
      'and repeat is ',
      isRepeat,
      'and current_index is ',
      current_index,
      'and playlist.length is ',
      playlist.length
    );
  };

  onBackward = async () => {
    const { playlist } = this.props;
    const { current_track, isRepeat, isRepeatOne } = this.state;
    this.setState({ isAlreadyPlay: false });

    let curr_track = playlist[current_track];
    let current_index = playlist.indexOf(curr_track);

    switch (true) {
      case current_index === 0 && isRepeat && !isRepeatOne:
        console.log(
          'current_index is 0 and isRepeat is true and isRepeatOne is false'
        );
        this.setState({ current_track: playlist.length - 1, timeElapsed: 0 });
        await TrackPlayer.skip(playlist.length - 1);
        break;
      case current_index === 0 && !isRepeat && !isRepeatOne:
        console.log(
          'current_index is 0 and isRepeat is false and isRepeatOne is false'
        );
        this.setState({ current_track: 0 });
        await TrackPlayer.stop();
        await this.setupTrackPlayer();
        break;
      case isRepeatOne:
        console.log(
          'current_index is 0 and isRepeat is false and isRepeatOne is true'
        );
        this.setState({ current_track: current_track });
        await TrackPlayer.seekTo(0);
        break;
      default:
        console.log('default case');
        this.setState({ current_track: current_track - 1, timeElapsed: 0 });
        await TrackPlayer.skipToPrevious();
        await TrackPlayer.play();
        break;
    }

    console.log(
      'isRepeatOne is ',
      isRepeatOne,
      'and repeat is ',
      isRepeat,
      'and current_index is ',
      current_index,
      'and playlist.length is ',
      playlist.length
    );
  };

  tooglePlaybackSpeedModal = () => {
    this.setState({
      isPlaybackSpeedModalVisible: !this.state.isPlaybackSpeedModalVisible,
    });
  };

  setPlaybackSpeed = async () => {
    this.tooglePlaybackSpeedModal();
    await TrackPlayer.setRate(this.state.playbackSpeed);
  };

  pad = function (num: number) {
    return ('0' + num).slice(-2);
  };

  mmss: (secs: number) => string = (secs) => {
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    minutes = minutes % 60;
    return this.pad(minutes) + ':' + this.pad(secs);
  };

  onPressSave = () => {
    let currentTrack_id = this.props.playlist[this.state.current_track].id;
    this.props.navigation.navigate('Sorting', { id: currentTrack_id });
  };

  onPressPlaybackSpeed = (value: any) => {
    console.log('value is ', value);
    this.setState({ playbackSpeed: value });
  };

  playSelectedTrack = (id: any) => {
    this.props.playlist.findIndex((item: any, index: number) => {
      if (item.id === id) {
        this.setState({ current_track: index });
        TrackPlayer.skip(index);
        TrackPlayer.play();
      }
    });
  };

  onVolumeChange = (value: number) => {
    this.setState({ volume: value });
    TrackPlayer.setVolume(value);
  };

  onVolumeChangeComplete = () => {
    this.setState({ volumeMenu: false });
  };

  toogleVolumeMenu = () => {
    this.setState({ volumeMenu: !this.state.volumeMenu });
  };

  trackDate = () => {
    const { playlist } = this.props;
    const { current_track } = this.state;
    const isIos = Platform.OS === 'ios';
    const date = playlist[current_track].date;
    const dateValue = isIos ? date : moment(date).format('DD MMM YY');

    const result = date
      ? dateValue
      : '20 Jun 2022';
    return result;
  }

  render() {
    const { playlist } = this.props;
    const {
      isBuffering,
      current_track,
      isAlreadyPlay,
      playbackSpeed,
      isRepeat,
      isRepeatOne,
      duration,
      timeElapsed,
      volume,
      volumeMenu,
      isPlaybackSpeedModalVisible,
      percent,
    } = this.state;
    // console.log("playlist---",new Date(playlist[current_track].date))
    return (
      <View>
        <View style={styles.outerView}>
          <View style={styles.mediaHouseContainer}>
            <Image
              source={
                playlist[current_track].mediaHouseImage
                  ? {
                    uri: playlist[current_track].mediaHouseImage,
                  }
                  : smh
              }
              style={styles.mediaHouseImage}
              resizeMode='cover'
            />
            <View style={styles.mediaHouseTitleContainer}>
              {playlist[current_track].title ? (
                <TextTicker
                  style={styles.mediaHouseText}
                  duration={playlist[current_track].title.length * 130}
                  loop
                  bounce
                  repeatSpacer={50}
                  marqueeDelay={1000}
                >
                  {playlist[current_track].title}
                </TextTicker>
              ) : (
                <Text style={styles.mediaHouseText}>News Article</Text>
              )}
            </View>
          </View>
          <Text style={styles.mediaHouseType}>
            {playlist[current_track].category
              ? playlist[current_track].category
              : 'National'}
          </Text>
        </View>
        <View style={styles.mediaHouseInfoConatiner}>
          <View style={styles.mediaHouseDescriptionContainer}>
            {playlist[current_track].description ? (
              <TextTicker
                useNativeDriver
                style={styles.newsDescriptionText}
                duration={playlist[current_track].description.length * 100}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
              >
                {playlist[current_track].description}
              </TextTicker>
            ) : (
              <Text style={styles.newsDescriptionText}>Description</Text>
            )}
          </View>
          <Text style={styles.newsDateText}>
            {this.trackDate()}
          </Text>
        </View>

        {/* Image View */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: playlist[current_track].cover
                ? playlist[current_track].cover
                : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-232c3f2700b91a0fd6e3a5a2e583a5da_screen.jpg?ts=1610645412',
            }}
            style={styles.national}
          />
        </View>
        {/* Slider View*/}
        {!isNaN(percent) && (
          <View style={styles.sliderView}>
            <Slider
              value={percent}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor='blue'
              minimumTrackTintColor='blue'
              maximumTrackTintColor='grey'
              tapToSeek={true}
              onSlidingComplete={(seconds) => this.changeTime(seconds)}
            // onValueChange={(seconds) => this.changeTime(seconds)}
            />
          </View>
        )}

        {/* Music Proogress Duration */}
        <View style={styles.durationView}>
          <Text style={styles.durationTxt}>
            {this.mmss(Math.floor(timeElapsed))}
          </Text>
          <Text style={styles.durationTxt}>
            {this.mmss(Math.floor(duration))}
          </Text>
        </View>

        <View style={styles.musicControlView}>
          <TouchableOpacity onPress={this.onBackward10}>
            <Image
              source={speedPrev}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onBackward}>
            <Image
              source={previous}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          {isAlreadyPlay ? (
            <TouchableOpacity onPress={this.onPausePress}>
              <Image source={pause} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onStartPress}>
              <Image
                source={play}
                style={styles.playButtonIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={this.onForward}>
            <Image
              source={next}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onForward10}>
            <Image
              source={speedNext}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>

        {/* Music Activities View */}
        <View style={styles.musicActivitiesView}>
          <TouchableOpacity onPress={this.onPressSave}>
            <Image
              source={save}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={share}
              style={styles.playerActionIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toogleRepeatAndRepeatOne}>
            {isRepeat && (
              <Image
                source={repeat}
                style={styles.playerActionIcon}
                resizeMode='contain'
              />
            )}
            {isRepeatOne && (
              <Image
                source={repeatOne}
                style={styles.playerActionIcon}
                resizeMode='contain'
              />
            )}
            {!isRepeat && !isRepeatOne && (
              <Image
                source={repeatOff}
                style={styles.playerActionIcon}
                resizeMode='contain'
              />
            )}
          </TouchableOpacity>
          <Menu opened={volumeMenu} onBackdropPress={this.toogleVolumeMenu}>
            <MenuTrigger onPress={this.toogleVolumeMenu}>
              <MaterialIcons name='volume-up' size={28} color='#353848' />
            </MenuTrigger>
            <MenuOptions
              optionsContainerStyle={{
                width: 20,
                height: 100,
                borderRadius: 5,
                marginTop: -100,
                marginLeft: 4,
              }}
            >
              <RnVerticalSlider
                value={volume}
                disabled={false}
                min={0}
                max={1}
                onChange={this.onVolumeChange}
                onComplete={this.onVolumeChangeComplete}
                width={20}
                height={100}
                step={0.01}
                borderRadius={5}
                minimumTrackTintColor={'blue'}
                maximumTrackTintColor={'grey'}
              />
            </MenuOptions>
          </Menu>
          <TouchableOpacity onPress={this.tooglePlaybackSpeedModal}>
            <SettingIcon name='gear' size={28} color='#353848' />
          </TouchableOpacity>
        </View>
        <Modal visible={isPlaybackSpeedModalVisible} transparent={true}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={this.tooglePlaybackSpeedModal}
          >
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Playback Speed</Text>
              </View>
              <View style={styles.modalBody}>
                <RadioForm animation={true}>
                  {radio_props.map((obj, i) => {
                    return (
                      <RadioButton labelHorizontal={true} key={obj.value}>
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={playbackSpeed === obj.value}
                          onPress={() => this.onPressPlaybackSpeed(obj.value)}
                          buttonInnerColor={'blue'}
                          buttonOuterColor={'blue'}
                          buttonSize={15}
                          buttonOuterSize={25}
                          buttonStyle={{ marginBottom: 5 }}
                          buttonWrapStyle={{ marginLeft: 10 }}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelStyle={{
                            fontSize: Scale(16),
                            color: '#000',
                            // marginBottom: 5,
                            marginLeft: 5,
                          }}
                          onPress={() => this.onPressPlaybackSpeed(obj.value)}
                        />
                      </RadioButton>
                    );
                  })}
                </RadioForm>
              </View>
              <View style={styles.modalFooter}>
                <TouchableOpacity
                  onPress={this.setPlaybackSpeed}
                  style={styles.doneButton}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <Loader
          loading={isBuffering}
          color='blue'
        />
      </View>
    );
  }
}

export default MediaPlayer;

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    marginTop: Scale(15),
    paddingHorizontal: Scale(15),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor:'red'
  },
  mediaHouseContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  mediaHouseImage: {
    height: Scale(30),
    width: Scale(30),
    borderRadius: Scale(15),
  },
  mediaHouseTitleContainer: {
    flex: 1,
    marginLeft: Scale(10),
    marginRight: Scale(10),
  },
  mediaHouseDescriptionContainer: { flex: 1 },
  mediaHouseText: {
    fontSize: Scale(16),
    fontWeight: 'bold',
    marginLeft: Scale(15),
    // width: '70%',
  },
  mediaHouseType: {
    fontWeight: 'bold',
    fontSize: Scale(14),
  },
  mediaHouseInfoConatiner: {
    flexDirection: 'row',
    paddingHorizontal: Scale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Scale(5),
    width: '100%',
  },
  newsDescriptionText: {
    fontSize: Scale(14),
    marginLeft: 0,
    fontWeight: '500',
  },
  newsDateText: {
    fontSize: Scale(14),
    fontWeight: '500',
    marginLeft: Scale(15),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(15),
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
  playerActionIcon: {
    height: Scale(22),
    width: Scale(23),
  },
  playButtonIcon: { height: Scale(50), width: Scale(50) },
  musicActivitiesView: {
    backgroundColor: '#CBC7C7',
    flexDirection: 'row',
    marginHorizontal: Scale(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Scale(10),
    borderRadius: Scale(20),
    paddingHorizontal: 20,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  modalBody: {
    padding: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalFooter: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  doneButton: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toastContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginBottom: Scale(50),
    borderRadius: 13,
    padding: 13,
  },
});
