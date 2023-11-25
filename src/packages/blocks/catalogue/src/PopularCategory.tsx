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
import PopularCategoryController, { Props } from "./PopularCategoryController";
import Header from "../../../components/src/AppHeader";
import Scale, { verticalScale } from '../../../components/src/Scale';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { search, theHindu, bellIcon, logo, backArrow, bbcHindi } from "./assets";
import { GoogleSignin } from "@react-native-community/google-signin";
import { ScrollView } from "react-native-gesture-handler";
// Customizable Area End

export default class PopularCategory extends PopularCategoryController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderPopularMediaHouseCell = (item: any, index: any) => {
    return (
      <View style={{ marginTop: Scale(10),backgroundColor:'#fff',justifyContent:'space-between',flex:1 }}>
        <View style={styles.logoView}>
          <TouchableOpacity style={{ marginLeft: Scale(15) }} onPress={() => this.props.navigation.navigate('LandingPopularMedia', { title: 'categories', item: item })}>
            <View style={styles.imageViewStyle}>
              <Image source={{ uri: item?.attributes?.image }} style={styles.mediahouselogo} resizeMode={"cover"} />
            </View>
            <Text style={styles.mediahousename}>{item?.attributes?.name}</Text>
            {item?.attributes?.number_of_articles !== undefined && item?.attributes?.number_of_articles !== null &&
              <Text style={[styles.mediahousename, { fontSize: Scale(14), color: 'gray', fontWeight: '500' }]}>{item?.attributes?.number_of_articles + ' Articles'}</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderPopularMediaHouseContainer = () => {
    return (
      <View style={styles.mediahousecell}>
        <Text style={styles.heading}>Popular Categories</Text>
        <FlatList
          // style={{ marginHorizontal: Scale(15) }}
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
    height: Scale(115),
    width: Scale(110),
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: Scale(10),
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  mediahouselogo: {
    height: Scale(115),
    width: Scale(110),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: Scale(10),
  },
  logoView: {
    borderRadius: Scale(10),
    backgroundColor: '#fff'
  },
  mediahousecell: {
    marginTop: Scale(25),
    flex:1
  },
  mediahousename: {
    fontSize: Scale(14),
    marginTop: Scale(5),
    color: 'blue',
    fontWeight: '500',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: Scale(18),
    marginHorizontal: Scale(20)
  }
})
