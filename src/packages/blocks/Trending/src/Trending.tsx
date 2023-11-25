import React from "react";
// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground} from "react-native";


import Loader from "../../../components/src/Loader";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { search, navIcon, bellIcon, logo, play, save } from "./assets";
import Scale from "../../../components/src/Scale";
import Header from "../../../components/src/AppHeader";
// Customizable Area End

import TrendingController, {
  Props} from "./TrendingController";
export default class Trending extends TrendingController {

  constructor(props: Props) {
    super(props);
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    console.log("currentRef", this.currentRef);
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
          onPressSearch={() => {}} 
          searchScreen={false} 
          back={undefined} 
          title={undefined} 
          onPressBack={() => {}} />

        <View style={{ flex: 1, }}>
          <View style={styles.outerView}>
            <Text style={styles.sydneyTxt}>Trending</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity style={{marginRight:10}}>
                <Image source={play} style={styles.smhImage} resizeMode='cover' />
              </TouchableOpacity>
              <TouchableOpacity><Text style={[styles.sydneyTxt, { fontSize: Scale(14), marginLeft: Scale(0), color: 'blue' }]}>Play All</Text></TouchableOpacity>
            </View>
          </View>
          {this.state.allTrendingArray && this.state.allTrendingArray.length > 0 ?
            <View style={{ flex: 1, marginTop: Scale(10), backgroundColor: '#fff', paddingBottom: Scale(95) }}>
              {/* <Text style={styles.subHeadText}>Other Sydney Morning Heraled </Text> */}
              <FlatList
                style={{ marginTop: Scale(5), flex: 1, }}
                data={this.state.allTrendingArray}
                // ListFooterComponent={<View style={{height: 120}}/>}
                renderItem={({ item, index }: any) => (
                  <View style={styles.mediaHouseView}>
                    <ImageBackground source={{ uri: item?.attributes?.image }} style={styles.imageStyle} imageStyle={{ borderRadius: Scale(10) }} resizeMode='stretch'>
                      <TouchableOpacity style={styles.playControlView}>
                        <Icon name='control-play' size={10} color='blue' />
                      </TouchableOpacity>
                    </ImageBackground>
                    <View style={{ marginHorizontal: Scale(10), width: '77%', }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', justifyContent: 'space-between', }}>
                        <Text style={[styles.name, { color: 'blue', opacity: 0.7, width: "90%", backgroundColor: '#fff' }]} numberOfLines={1}>{item?.attributes?.title}</Text>
                        <TouchableOpacity>
                          <Image source={save} style={{ height: Scale(15), width: Scale(15), tintColor: 'blue' }} resizeMode="contain" />
                        </TouchableOpacity>
                      </View>
                      <Text style={[styles.name, { opacity: 0.7, marginTop: Scale(3) }]} numberOfLines={2}>{item?.attributes?.description}</Text>
                      <Text style={styles.mediaName}>{item?.attributes?.media_house}</Text>
                      <View style={styles.timeView}>
                        <Text style={{ color: '#000' }}>{'4h ago'}</Text>
                        <View style={styles.dotView}></View>
                        <Text>{'Aug 08,22'}</Text>
                        <View style={styles.dotView}></View>
                        <Text>{item?.attributes?.country}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View> :
            this.state.isLoading === false &&
            <View style={styles.noDataView}>
              <Text style={styles.noDataTxt}>No data found!</Text>
            </View>} 
        </View>
        <Loader loading={this.state.isLoading} />
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
    // backgroundColor:'red',
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
    // width:"100%"
    // paddingBottom:130
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
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: "center",
    // width: '97%',
    marginTop: Scale(5)
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
    padding: Scale(10),
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
  }
})
// Customizable Area End
