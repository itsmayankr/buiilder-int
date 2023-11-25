import React from "react";
// Customizable Area Start
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/src/AppHeader";
import { search, bellIcon, logo, backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
// Customizable Area End

import MediaHousesController, { Props } from "./MediaHousesController";

export default class MediaHouses extends MediaHousesController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
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
  // Customizable Area End

  render() {
    // Customizable Area Start
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
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageViewStyle: {
    height: Scale(100),
    width: Scale(100),
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
    height: Scale(100),
    width: Scale(100),
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
    marginTop: Scale(25),
    flex:1
  },
  mediahousename: {
    fontSize: Scale(16),
    marginTop: Scale(5),
    textAlign: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: Scale(18),
    marginHorizontal: Scale(20)
  }
})
// Customizable Area End
