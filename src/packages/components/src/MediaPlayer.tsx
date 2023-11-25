import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Slider from '@react-native-community/slider';
import SettingIcon from 'react-native-vector-icons/FontAwesome';
import {
  smh,
  speedPrev,
  speedNext,
  previous,
  next,
  play,
  speed,
  share,
  save,
  pause,
} from '../../blocks/landingpage/src/assets';
import Scale from './Scale';

interface Props {
  playlist: any;
}

interface S {
  isRepeat: boolean;
  isRepeatOne: boolean;
  loadingAudio: boolean;
  isAlreadyPlay: boolean;
  duration: any;
  timeElapsed: any;
  percent: any;
  current_track: number;
  inprogress: boolean;
  audioRecorderPlayer: AudioRecorderPlayer;
}

export class MediaPlayer extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isRepeat: false,
      isRepeatOne: false,
      loadingAudio: false,
      percent: 0,
      isAlreadyPlay: false,
      duration: 0,
      timeElapsed: 0,
      current_track: 0,
      inprogress: false,
      audioRecorderPlayer: new AudioRecorderPlayer(),
    };
  }

  changeTime = async (seconds: any) => {
    // 50 / duration
    if (seconds !== 0) {
      let seektime: any = ((await seconds) / 100) * this.state.duration;
      await this.setState({ timeElapsed: seektime });
      await this.state.audioRecorderPlayer.seekToPlayer(seektime);
    }
  };

  onStartPress = async () => {
    const { playlist } = this.props;

    const { current_track, audioRecorderPlayer } = this.state;
    this.setState({ isAlreadyPlay: true, inprogress: true });
    // console.log('files', RNFetchBlob.fs.ls(dirs));
    // const path = 'file://' + dirs + '/' + playlist[current_track].path;
    const path = playlist[current_track].path;
    // console.log('path', path);
    if (this.state.timeElapsed !== 0) {
      audioRecorderPlayer.resumePlayer();
    } else {
      audioRecorderPlayer.startPlayer(path);
      audioRecorderPlayer.setVolume(1.0);
      audioRecorderPlayer.addPlayBackListener(async (e) => {
        if (e.currentPosition === e.duration) {
          audioRecorderPlayer.stopPlayer();
        }
        let percent = Math.round(
          (Math.floor(e.currentPosition) / Math.floor(e.duration)) * 100
        );
        if (percent === 100) {
          this.onForward();
        }
        await this.setState({
          timeElapsed: e.currentPosition,
          duration: e.duration,
          percent: percent,
        });
      });
    }
  };

  onForward15 = async () => {
    const { timeElapsed, duration } = this.state;
    let seektime: any = (await timeElapsed) + 15000;
    if (seektime > duration) {
      seektime = duration;
    }
    await this.setState({ timeElapsed: seektime });
    await this.state.audioRecorderPlayer.seekToPlayer(seektime);
  };

  onBackward15 = async () => {
    const { timeElapsed } = this.state;
    let seektime: any = (await timeElapsed) - 15000;
    if (seektime < 0) {
      seektime = 0;
    }
    await this.setState({ timeElapsed: seektime });
    await this.state.audioRecorderPlayer.seekToPlayer(seektime);
  };

  onPausePress = async () => {
    const { audioRecorderPlayer } = this.state;
    this.setState({ isAlreadyPlay: false });
    audioRecorderPlayer.pausePlayer();
  };

  onStopPress = async () => {
    const { audioRecorderPlayer } = this.state;
    await audioRecorderPlayer.stopPlayer();
    await audioRecorderPlayer.removePlayBackListener();
  };

  toogleRepeatAndRepeatOne = async () => {
    const { isRepeat, isRepeatOne } = this.state;
    if (isRepeat) {
      await this.setState({ isRepeat: false, isRepeatOne: true });
    } else if (isRepeatOne) {
      await this.setState({ isRepeat: false, isRepeatOne: false });
    } else {
      await this.setState({ isRepeat: true, isRepeatOne: false });
    }
  };

  onForward = async () => {
    this.setState({ percent: 0, timeElapsed: 0, duration: 0, inprogress: false, isAlreadyPlay: false });
    const { playlist } = this.props;

    const { current_track } = this.state;
    let curr_track = playlist[current_track];
    let current_index = playlist.indexOf(curr_track) + 1;
    if (current_index === playlist.length && this.state.isRepeat) {
      this.setState({ current_track: 0 });
    } else if (current_index === playlist.length && !this.state.isRepeat) {
      this.setState({ current_track: 0 });
      this.onStopPress();
    } else if (this.state.isRepeatOne) {
      this.setState({ current_track: current_track });
    } else {
      this.setState({ current_track: current_track + 1 });
    }
    this.onStopPress().then(async () => {
      await this.onStartPress();
    });
  };

  onBackward = async () => {
    this.setState({ percent: 0, timeElapsed: 0, duration: 0, inprogress: false, isAlreadyPlay: false });
    const { playlist } = this.props;

    const { current_track } = this.state;
    let curr_track = playlist[current_track];
    let current_index = playlist.indexOf(curr_track);
    if (current_index === 0 && this.state.isRepeat) {
      this.setState({ current_track: playlist.length - 1 });
    } else if (current_index === 0 && !this.state.isRepeat) {
      this.setState({ current_track: 0 });
      this.onStopPress();
    } else if (this.state.isRepeatOne) {
      this.setState({ current_track: current_track });
    } else {
      this.setState({ current_track: current_track - 1 });
    }
    this.onStopPress().then(async () => {
      await this.onStartPress();
    });
  };

  render() {
    const { playlist } = this.props;
    return (
      <>
        <View style={styles.outerView}>
          <Image source={smh} style={styles.smhImage} resizeMode='cover' />
          <Text style={styles.sydneyTxt}>Sydney Morning hearled</Text>
          <Text
            style={[
              styles.sydneyTxt,
              {
                fontSize: Scale(14),
                marginLeft: Platform.OS == 'ios' ? Scale(90) : Scale(110),
              },
            ]}
          >
            National
          </Text>
        </View>
        <View
          style={[
            styles.outerView,
            { justifyContent: 'space-between', marginTop: Scale(5) },
          ]}
        >
          <Text
            style={[
              styles.sydneyTxt,
              { fontSize: Scale(14), marginLeft: 0, fontWeight: '500' },
            ]}
          >
            Take it from my kid
          </Text>
          <Text
            style={[
              styles.sydneyTxt,
              { fontSize: Scale(14), fontWeight: '500' },
            ]}
          >
            20/jun/2022
          </Text>
        </View>

        {/* Image View */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Scale(15),
          }}
        >
          <Image
            source={{ uri: playlist[this.state.current_track].cover }}
            style={styles.national}
          />
        </View>
        {/* Slider View*/}
        <View style={styles.sliderView}>
          <Slider
            value={this.state.percent}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='blue'
            minimumTrackTintColor='blue'
            maximumTrackTintColor='grey'
            tapToSeek={false}
            onValueChange={(seconds) => this.changeTime(seconds)}
            // onSlidingComplete={async (value: number) => {
            //   // await TrackPlayer.seekTo(value);
            // }}
          />
        </View>

        {/* Music Proogress Duration */}
        {/* <View style={styles.durationView}>
              <Text style={styles.durationTxt}>02:23</Text>
              <Text style={styles.durationTxt}>06:23</Text>
            </View> */}

        <View style={styles.musicControlView}>
          <TouchableOpacity onPress={this.onBackward15}>
            <Image
              source={speedPrev}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onBackward}>
            <Image
              source={previous}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          {this.state.isAlreadyPlay ? (
            <TouchableOpacity onPress={this.onPausePress}>
              <Image source={pause} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onStartPress}>
              <Image
                source={play}
                style={[
                  styles.speedPrevIcon,
                  { height: Scale(50), width: Scale(50) },
                ]}
                resizeMode='contain'
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={this.onForward}>
            <Image
              source={next}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onForward15}>
            <Image
              source={speedNext}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        {/* Music Activities View */}
        <View style={styles.musicActivitiesView}>
          <TouchableOpacity>
            <Image
              source={save}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={share}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toogleRepeatAndRepeatOne}>
            <Image
              source={speed}
              style={styles.speedPrevIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SettingIcon name='gear' size={25} color='#000' />
            {/* <Image source={addToPlaylist} style={styles.speedPrevIcon} resizeMode='contain' /> */}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default MediaPlayer;

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
    padding: 10,
  },
});
