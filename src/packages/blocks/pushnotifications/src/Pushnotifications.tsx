import React from "react";
// Customizable Area Start
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  SectionList
} from "react-native";
import { bellIcon, navIcon, logo, search, circleIcon } from "./assets";
import Header from '../../../components/src/AppHeader';
import PushnotificationsController, {
  Props,
} from "./PushnotificationsController";
import Scale from "../../../components/src/Scale";
import Loader from "../../../components/src/Loader";
// Customizable Area End

export default class Pushnotifications extends PushnotificationsController {
  constructor(props: Props) {
    super(props);
  }

  // Customizable Area Start
  renderNotifications(item: any) {
    return (
      <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', marginHorizontal: Scale(10), marginVertical: 15, }} >
        <View style={[styles.dotView, { backgroundColor: item?.section?.title == "New" ? 'blue' : '#fff' }]}></View>
        <Image source={circleIcon} style={styles.image} resizeMode="contain" />
        <View style={{ backgroundColor: '#fff', marginHorizontal: Scale(10), width: '80%' }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: "space-between" }}>
            <Text style={styles.title}>{item?.item?.title}</Text>
            <Text style={styles.time} numberOfLines={2}>{item?.item?.updated_at}</Text>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: Scale(4) }}>
            {item?.item?.is_expand ? (
              <Text>{item?.item?.description}</Text>) :
              (
                <Text style={{ backgroundColor: '#fff', width: "90%" }} numberOfLines={2}>{item?.item?.description}</Text>
              )}
          </View>
          {item?.item?.description?.length > 50 ?
            <TouchableOpacity onPress={() => this.onPress(item)}>
              <Text style={{ color: 'blue', fontSize: Scale(13), marginTop: Scale(8) }}>
                {item?.item?.is_expand ?
                  'See less' : 'Read more'}
              </Text>
            </TouchableOpacity> : null}
        </View>
      </TouchableOpacity>
    )
  }

  renderSeperator() {
    return (
      <View style={styles.lineView} />
    )
  }

  renderHeader = (item: any) => {
    let count = item?.section?.data?.length;
    let getCount = this.getNotificationCount(count)
    return (
      <View style={styles.newView}>
        <Text style={{ fontSize: Scale(16), fontWeight: '700', marginLeft: Scale(5) }}>{item?.section?.title}</Text>
        <View style={styles.countView}>
          <Text style={{ color: '#fff' }}>{getCount}</Text>
        </View>
      </View>
    )
  }
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <View style={styles.screenContainer}>
        <Header
          menu={navIcon}
          backArrow={''}
          logo={logo}
          searchScreen={true}
          search={search}
          bell={bellIcon}
          onPress={() => this.props.navigation.openDrawer()}
          onPressNotification={() => { }}
          onPressSearch={() => { }}
          back={undefined}
          title={undefined}
          onPressBack={() => { }}
        />
        <View style={[styles.mainContainer, { backgroundColor: this.state.notificationsArray?.length > 0 ? '#dde2eb' : '#fff' }]}>
          {/* <View style={styles.headView}>
            <TouchableOpacity onPress={() => { navigation.navigate('LandingPage') }}>
              <Image source={backArrow} style={{ height: Scale(20), width: Scale(20), marginLeft: Scale(10) }} resizeMode='contain' />
            </TouchableOpacity>
            <Text style={styles.headingText}>Notifications</Text>
          </View> */}
          <View style={[styles.lineView, { marginTop: 0 }]} />
          {this.state.notificationsArray && this.state.notificationsArray?.length > 0 ?
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
              <SectionList
                sections={this.state.notificationsArray}
                ItemSeparatorComponent={this.renderSeperator}
                keyExtractor={(item, index) => item + index}
                renderItem={item => this.renderNotifications(item)}
                renderSectionHeader={(item) => this.renderHeader(item)}
              />
            </View> : this.state.isLoading === false &&
            <View style={styles.noDataView}>
              <Text style={styles.noDataTxt}>No notifications found!</Text>
            </View>}
        </View>
        <Loader loading={this.state.isLoading} style={{}} />
      </View >
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

 // Customizable Area Start
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    // backgroundColor:'#dde2eb'
  },
  headView: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: Scale(3),
    backgroundColor: "#fff"
  },
  headingText: {
    color: '#000',
    fontSize: Scale(18),
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: Scale(15)
  },
  newView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Scale(10),
    backgroundColor: 'rgba(243, 242, 251, 255)'
    // backgroundColor: '#e4eaeb'
  },
  countView: {
    backgroundColor: 'blue',
    opacity: 0.6,
    height: Scale(25),
    width: Scale(45),
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: Scale(15)
  },
  itemSeparator: {
    flex: 1,
    backgroundColor: 'red',
    width: 1
  },
  lineView: {
    borderWidth: 0.7,
    opacity: .1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(5),
  },
  dotView: {
    height: Scale(5),
    width: Scale(5),
    borderRadius: Scale(5),
    margin: 5,
    marginTop: Scale(20)
  },
  image: {
    width: 45,
    height: 45
  },
  title: {
    width: "80%",
    fontSize: Scale(14),
    fontWeight: 'bold',
    // backgroundColor:'green'
  },
  time: {
    fontSize: Scale(12),
    color: 'gray',
    fontWeight: "700",
    // backgroundColor:'red',
    width: '25%',
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


  // activityIndicatorContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#ffffff",
  // },
  // container: {
  //   flexGrow: 1,
  //   padding: 16,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   width: Platform.OS === "web" ? "75%" : "100%",
  //   maxWidth: 650,
  //   backgroundColor: "#ffffffff",
  // },
  // notificationRowContainer: {
  //   marginBottom: 15,
  //   borderRadius: 15,
  //   borderWidth: 1,
  //   paddingLeft: 16,
  //   paddingRight: 13,
  //   paddingVertical: 10,
  //   minHeight: 80,
  //   borderColor: "#e4e4e4",
  // },
  // notificationRowHeaderContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // notificationRowBodyContainer: {
  //   paddingRight: 30,
  //   marginTop: 6,
  // },
  // notificationRowTitleContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // bellIcon: {
  //   width: 14,
  //   height: 14,
  // },
  // notificationTitle: {
  //   marginLeft: 11,
  //   fontSize: 12,
  //   color: "#000000",
  //   fontWeight: "700"
  // },
  // notificationDate: {
  //   marginLeft: 11,
  //   fontSize: 12,
  //   color: "#000000",
  //   opacity: 0.3
  // },
  // notificationBody: {
  //   lineHeight: 20,
  //   fontSize: 12,
  //   color: "#000000",
  //   opacity: 0.7,
  // },
  // noNotificationContainer: {
  //   height: responsiveHeight(80),
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // noNotificationCircleContainer: {
  //   height: 72,
  //   width: 72,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // noNotificationCrossIcon: {
  //   width: 25,
  //   height: 25,
  // },
  // noNotificationSorryText: {
  //   marginTop: 12,
  //   fontSize: 16,
  //   color: "#2f2a2b",
  //   fontWeight: "700"
  // },
  // noNotificationText: {
  //   marginTop: 6,
  //   fontSize: 12,
  //   color: "#2f2a2b",
  // },
  // continueShoppingText: {
  //   fontSize: 14,
  // },
  // continueShoppingBtnContainer: {
  //   width: responsiveWidth(90),
  //   marginTop: 18,
  //   padding: 0,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
// Customizable Area End
