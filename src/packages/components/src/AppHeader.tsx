import { View, TouchableOpacity, Image, StyleSheet, Text, Platform } from "react-native";
import React, { FC } from "react";

import Scale from '../src/Scale';

interface Props {
  // loading: boolean;
  testID?: string;
  menu: any,
  logo: any,
  search: any,
  bell: any,
  onPress: () => void;
  onPressNotification: () => void;
  onPressSearch: () => void;
  searchScreen: boolean;
  back: any;
  title: any;
  backArrow: any;
  onPressBack?: () => void;
  // onClickCancel: () => void;
}
const Header: FC<Props> = ({ menu, logo, search, bell, onPress, onPressNotification, onPressSearch, searchScreen, backArrow, back, title, onPressBack, testID }) => {

  return (
    <View style={[styles.headerViewMain, { justifyContent: "center" }]} testID={testID}>
      {/* {searchVisible ? */}
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onPress}>
          <Image source={menu ? menu : backArrow} style={{ width: Scale(20), height: Scale(20),left:5 }} resizeMode='contain' />
        </TouchableOpacity>
        <Image source={logo} style={{ width: Scale(35), height: Scale(35), tintColor: '#000', marginLeft: Scale(150) }} />
        <View style={{ flexDirection: 'row', marginLeft: Scale(130) }}>
          <TouchableOpacity onPress={onPressSearch}>
            <Image source={search} style={{ width: Scale(20), height: Scale(20) }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNotification}>
            <Image source={bell} style={{ width: Scale(20), height: Scale(20), marginLeft: Scale(15), tintColor: searchScreen ? "blue" : "#000" }} resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
      {/* <TextInput style={{ fontWeight: 'bold', width: '80%', }}
            autoCapitalize="none"
            value={searchValue}
            placeholder="Search"
            onChangeText={(searchValue) => onChangeSearchValue(searchValue)}
            onSubmitEditing={onSubmitSearch}
          />
          <TouchableOpacity onPress={onClickCancel}>
            <Icon name="cross" size={20} color="#000" style={{backgroundColor:'#e4eaeb'}} />
          </TouchableOpacity> */}
      {/* </View> : */}

    </View>
  );
};

const AppHeader: FC<Props> = ({ back, title, onPressBack, menu,logo,search,bell,onPress,onPressSearch,onPressNotification,searchScreen,backArrow }) => {
  return (
    <View style={styles.headerViewMain}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={back} style={{ height: Scale(20), width: Scale(20) }} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={{ fontSize: Scale(22), fontWeight: 'bold', marginLeft: Scale(20) }}>{title}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  landingPageView: {
    flex: 1,
  },
  landingPageText: {
    fontSize: 42,
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#323441",
    marginTop: 15
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerViewMain: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    height: Platform.OS === "ios" ? Scale(85) : Scale(70),
    paddingBottom: 10,
    zIndex:1,
    // justifyContent:'center'
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Scale(15),
    backgroundColor: '#fff',
  },
  searchView: {
    backgroundColor: '#e4eaeb',
    // backgroundColor: '#F9F9FD',
    borderRadius: Scale(10),
    padding: 1,
    marginTop: Scale(15),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Header;
export { AppHeader };
