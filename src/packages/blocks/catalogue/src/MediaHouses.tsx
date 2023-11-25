import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import MediaHousesController, { Props } from "./MediaHousesController";
import Header from "../../../components/src/AppHeader";
import scale, { verticalScale } from '../../../components/src/Scale';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { search, theHindu, bellIcon, logo, backArrow, bbcHindi } from "./assets";

import { ScrollView } from "react-native-gesture-handler";
import Scale from "../../../components/src/Scale";
// Customizable Area End

export default class MediaHouses extends MediaHousesController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderPopularMediaHouseCell = (item: any, index: any) => {
    return (
      <View style={{ justifyContent: 'space-between', flex: 1, marginTop: Scale(10) }}>
        <View style={styles.logoView}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: "space-between" }} onPress={() => this.props.navigation.navigate('LandingPopularMedia', { title: 'popularMedia', item: item })}>
            <View style={styles.imageViewStyle}>
              <Image source={{ uri: item?.attributes?.image }} style={styles.mediahouselogo} resizeMode={"cover"} />
            </View>
            <Text style={styles.mediahousename}>{item?.attributes?.media_house}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderPopularMediaHouseContainer = () => {
    return (
      <View style={styles.mediahousecell}>
        <Text style={styles.heading}>Popular Media Houses</Text>
        <FlatList
          // style={{backgroundColor:'red'}}
          data={this.state.mediahouse}
          extraData={this.state}
          numColumns={3}
          renderItem={({ item, index }) =>
            this.renderPopularMediaHouseCell(item, index)
          }
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backArrow={backArrow}
          logo={logo}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.goBack()}
          onPressNotification={() => this.props.navigation.navigate('')}
          menu={undefined}
          onPressSearch={() => { }}
          searchScreen={false}
          back={undefined}
          title={undefined}
          onPressBack={() => { }} />
        {this.renderPopularMediaHouseContainer()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageViewStyle: {
    height: scale(100),
    width: scale(100),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: Scale(10)
  },
  mediahouselogo: {
    height: scale(100),
    width: scale(100),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: Scale(10)
  },
  logoView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    borderRadius: Scale(10)
  },
  mediahousecell: {
    marginTop: scale(25),
    flex:1
  },
  mediahousename: {
    fontSize: scale(16),
    marginTop: Scale(5),
    textAlign: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: scale(18),
    marginHorizontal: Scale(20)
  }
})
