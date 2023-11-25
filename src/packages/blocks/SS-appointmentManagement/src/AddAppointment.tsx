import React from "react";
// Customizable Area Start
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,import React from "react";
  // Customizable Area Start
  import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from "react-native";
  
  import { Calendar, LocaleConfig } from "react-native-calendars";
  import { SafeAreaView } from "react-native-safe-area-context";
  import FONTS from "../../utilities/src/Fonts/Fonts";
  import Scale from "../../../components/src/Scale";
  import { COLORS } from "../../utilities/src/Globals";
  import { LeftArrow, RightArrow } from "../../landingpage/src/assets";
  import CustomButton from "../../utilities/src/CustomButton";
  import AddAppointmentController, { Props } from "./AddAppointmentController";
  import moment from "moment";
  import { width } from "../../utilities/src/Dimensions";
  import { ClosableSection } from "../../utilities/src/ClosableSection";
  
  const { width: ScreenWidth } = Dimensions.get("screen");
  
  LocaleConfig.locales.en = {
    monthNames:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    monthNamesShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    dayNames: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    dayNamesShort: "S_M_T_W_T_F_S".split("_")
  };
  LocaleConfig.defaultLocale = "en";
  // Customizable Area End
  export default class AddAppointment extends AddAppointmentController {
    constructor(props: Props) {
      super(props);
    }
  // Customizable Area Start
    header = () => {
      return (
        <View style={[styles.headerContainer, styles.shadowProp]}>
          <TouchableOpacity
            onPress={this.handlePressBack}
            style={styles.headerLeftContainer}
          >
            <Image
              source={LeftArrow}
              resizeMode="contain"
              style={{
                width: Scale(8),
                height: Scale(15),
                marginRight: Scale(10)
              }}
            />
            <Text style={styles.regularTextBlack}>Cancel & Back to Service</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
    progressBox = ({
      number,
      title,
      selected
    }: {
      number: string;
      title: string;
      selected: boolean;
    }) => {
      return (
        <View style={[styles.progressBox]}>
          <View
            style={[
              styles.progressLine,
              number === "1"
                ? {
                    left: (ScreenWidth - Scale(78)) / 6 + Scale(12),
  
                    width: (ScreenWidth - Scale(78)) / 6
                  }
                : number === "3" && {
                    right: (ScreenWidth - Scale(78)) / 6 + Scale(12),
  
                    width: (ScreenWidth - Scale(78)) / 6
                  }
            ]}
          />
          <View
            style={[
              styles.circle,
              selected && { backgroundColor: COLORS.purple }
            ]}
          >
            <Text
              style={
                !selected ? styles.progressTextGray : styles.progressTextWhite
              }
            >
              {number}
            </Text>
          </View>
          <Text style={selected ? styles.midTextBlack : styles.midTextGray}>
            {title}
          </Text>
        </View>
      );
    };
  
    progressSummaryBar = (index: string) => {
      return (
        <View style={styles.progressBarContainer}>
          {this.progressBox({
            number: "1",
            title: "Date & Time",
            selected: index === "1" || index === "2" || index === "3"
          })}
          {this.progressBox({
            number: "2",
            title: "Personal Details",
            selected: index === "2" || index === "3"
          })}
          {this.progressBox({
            number: "3",
            title: "Payment",
            selected: index === "3"
          })}
        </View>
      );
    };
  
    spacer = () => {
      return <View style={styles.spacer} />;
    };
  
    calendarView = () => {
      return (
        <Calendar
          minDate={moment.utc(this.props.route.params.currentDate).format("YYYY-MM-DD")}
          maxDate={moment(new Date()).add(3, "M").format("YYYY-MM-DD")}
          style={styles.calendar}
          markedDates={this.state.selected_date}
          onDayPress={(date) => this.changeDate(date.dateString)}
          firstDay={1}
          renderArrow={(direction) =>
            direction === "left" ? (
              <Image
                source={RightArrow}
                resizeMode="contain"
                style={{
                  width: Scale(15),
                  height: Scale(15),
                  marginLeft: Scale(45),
                  transform: [{ rotate: "180deg" }]
                }}
              />
            ) : (
              <Image
                source={RightArrow}
                resizeMode="contain"
                style={{
                  width: Scale(15),
                  marginRight: Scale(45),
                  height: Scale(15)
                }}
              />
            )
          }
          theme={{
            selectedDotColor: "red",
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
  
            textSectionTitleColor: COLORS.black,
            textDayHeaderFontWeight: "400",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            "stylesheet.day.basic": {
              base: {
                height: Scale(32),
                width: Scale(32),
  
                marginVertical: Scale(-5),
                alignItems: "center",
                justifyContent: "center"
              }
            },
  
            "stylesheet.calendar.header": {
              week: {
                marginTop: Scale(20),
                flexDirection: "row",
                paddingHorizontal: Scale(10),
                justifyContent: "space-between"
              }
            },
  
            dayTextColor: COLORS.black,
            textDayFontFamily: FONTS.Medium,
            textDayFontWeight: "500",
  
            textDayHeaderFontSize: Scale(14),
            textDayFontSize: Scale(14),
  
            monthTextColor: COLORS.darkGray,
            textMonthFontWeight: "bold",
            textMonthFontFamily: FONTS.Bold,
            textMonthFontSize: Scale(14),
            textDisabledColor: COLORS.lightGray3
          }}
        />
      );
    };
    timeBox = ({
      item,
      selected
    }: {
      item: {
        id: number;
        slot_start_time: string;
        slot_end_time: string;
        is_available: boolean;
      };
      selected: boolean;
    }) => {
      return (
        <TouchableOpacity
          onPress={() => this.selectTimeSlot(item)}
          disabled={selected || !item.is_available}
          style={[
            styles.timeButton,
            selected && { borderColor: COLORS.purple, opacity: 0.5 }
          ]}
        >
          <Text
            style={
              selected
                ? styles.midTextPurple
                : !item.is_available
                ? styles.midTextLightray
                : styles.midTextBlack
            }
          >
            {moment(item.slot_start_time, "hh:mm").format("hh:mm A")}
          </Text>
        </TouchableOpacity>
      );
    };
  
    availableTimesContainer = () => {
      if (this.state.loading) {
        return <ActivityIndicator style={styles.activityIndicator} />;
      } else if (this.state.availableTimes.length > 0) {
        return (
          <View style={styles.availableTimesContainer}>
            <Text style={styles.semiBoldTextGray}>
              AVAILABLE TIMES
              {this.state.timeZone ? ` (IN ${this.state.timeZone})` : ""}
            </Text>
            <FlatList
              numColumns={4}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              style={styles.timeCardsStyle}
              data={this.state.availableTimes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return this.timeBox({
                  item,
                  selected: this.state.selectedTimeSlot?.id === item.id
                });
              }}
              contentContainerStyle={styles.timeCardsContainer}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.availableTimesContainer}>
            <Text style={styles.semiBoldTextGray}>AVAILABLE TIMES</Text>
            <Text style={styles.regularTextGrayMessage}>
              {this.state.message ||
                "No Time Slots Available for the selected date"}
            </Text>
          </View>
        );
      }
    };
  
    appointmentDateTimeContainer = () => {
      return (
        <View style={styles.appointmentDateContainer}>
          <Text style={styles.mediumTextBlack}>APPOINTMENT DATE & TIME</Text>
          {this.calendarView()}
        </View>
      );
    };
    appointmentSummaryContainer = () => {
      const { title, duration, price , currency} = this.props.route.params;
  
      return (
        <View style={styles.appointmentSummary}>
          <Text style={styles.bigTextGray}>Service</Text>
          <View style={styles.serviceSummaryLine}>
            <Text style={styles.regularTextBlack}>
              {title}, {duration} mins
            </Text>
  
  
            <View style={{flexDirection:"row"}}>
            <Text style={styles.regularTextBlack}>{currency.symbol}</Text>
            <Text style={styles.regularTextBlack}>{price || 0}</Text>
            </View>
          </View>
          <View style={styles.totalSummaryLine}>
            <Text style={styles.semiBoldTextBlackBig}>Total</Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.semiBoldTextBlackBig}>{currency.symbol}</Text>
            <Text style={styles.semiBoldTextBlackBig}>{price || 0}</Text>
            </View>
  
          </View>
        </View>
      );
    };
  // Customizable Area End
    render() {
      // Customizable Area Start  
    
      return (
        <SafeAreaView
          edges={["right", "left", "top"]}
          style={{ flex: 1, backgroundColor: COLORS.white }}
        >
          {this.header()}
  
          <ScrollView style={styles.container} nestedScrollEnabled={true}>
            {this.progressSummaryBar("1")}
            {this.spacer()}
            {this.appointmentDateTimeContainer()}
            {this.availableTimesContainer()}
            {this.spacer()}
          </ScrollView>
          <ClosableSection isOpened={false} title={"APPOINTMENT SUMMARY"}>
            {this.appointmentSummaryContainer()}
          </ClosableSection>
  
          <View style={styles.footer}>
            <CustomButton
              style={styles.buttonGreen}
              styleDisabled={styles.buttonGreen}
              disabled={false}
              loading={false}
              text={"PROCEED"}
              onPress={this.onPressProceed}
            />
          </View>
        </SafeAreaView>
      );
      // Customizable Area End
    }
  }
  
  const styles = StyleSheet.create({
    // Customizable Area Start
  
    buttonGreen: {
      marginTop: Scale(20),
      marginBottom: Scale(30),
      borderWidth: 0,
      borderRadius: 5,
      backgroundColor: COLORS.green,
      borderColor: COLORS.green
    },
    activityIndicator: {
      paddingTop: Scale(30)
    },
    timeCardsStyle: { marginTop: Scale(10) },
    timeCardsContainer: {
      alignSelf: "stretch"
    },
    spacer: {
      height: Scale(8),
      width: "100%",
      backgroundColor: COLORS.grayishWhite2
    },
    availableTimesContainer: {
      marginVertical: Scale(20),
      paddingHorizontal: Scale(20)
    },
    calendar: {
      width: ScreenWidth - Scale(40),
      marginTop: Scale(20)
    },
    timeButton: {
      borderWidth: 1,
      borderRadius: Scale(3),
      width: (ScreenWidth - Scale(60)) / 4,
  
      borderColor: COLORS.lightGray2,
      margin: Scale(2.5),
      padding: Scale(10)
    },
    serviceSummaryLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
  
      marginTop: Scale(10),
      paddingBottom: Scale(20),
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1
    },
    totalSummaryLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: Scale(20),
      paddingBottom: Scale(20)
    },
    circle: {
      width: Scale(24),
      height: Scale(24),
      borderRadius: Scale(24),
      marginBottom: Scale(11),
  
      backgroundColor: COLORS.lightGray2,
      alignItems: "center",
      justifyContent: "center"
    },
    appointmentDateContainer: {
      alignItems: "flex-start",
      paddingHorizontal: Scale(20)
    },
    appointmentSummary: {
      alignItems: "flex-start"
    },
    progressBox: {
      alignItems: "center",
      width: (ScreenWidth - Scale(78)) / 3
    },
    progressLine: {
      borderWidth: 1,
      borderColor: COLORS.lightGray2,
      position: "absolute",
      elevation: -5,
      zIndex: -5,
      top: Scale(12),
  
      width: (ScreenWidth - Scale(78)) / 3
    },
    footer: {
      width: "100%",
      justifyContent: "center",
      paddingHorizontal: Scale(20),
  
      backgroundColor: COLORS.white,
      // borderTopLeftRadius: scale(20),
      //borderTopRightRadius: scale(20),
      shadowColor: "#BFD3E6",
      marginTop: 5,
  
      shadowOffset: { width: 0, height: -7 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      borderWidth: 0,
      elevation: 4
  
      //paddingBottom:Platform.OS =="ios"?Scale(8):Scale(0)
    },
  
    container: {
      backgroundColor: COLORS.white,
  
      marginTop: 3,
      flex: 1
    },
    progressBarContainer: {
      flexDirection: "row",
      paddingHorizontal: Scale(39),
      paddingVertical: Scale(20)
    },
  
    headerContainer: {
      backgroundColor: COLORS.white,
  
      flexDirection: "row",
      justifyContent: "space-between"
    },
    headerLeftContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: Scale(20),
      paddingVertical: Scale(20)
    },
  
    shadowProp: {
      shadowColor: COLORS.gray2,
      borderWidth: 0,
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 4
    },
    regularTextBlack: {
      fontSize: Scale(14),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.black,
      lineHeight: Scale(18),
      maxWidth: width * 0.7
    },
    mediumTextBlack: {
      fontSize: Scale(14),
      textAlign: "left",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.black,
      lineHeight: Scale(18),
      maxWidth: width * 0.7
    },
    semiBoldTextBlack: {
      fontSize: Scale(14),
      textAlign: "center",
      fontFamily: FONTS.SemiBold,
      fontWeight: "500",
      color: COLORS.black,
      lineHeight: Scale(18)
    },
    semiBoldTextBlackBig: {
      fontSize: Scale(16),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.black,
      lineHeight: Scale(18)
    },
    midTextBlack: {
      fontSize: Scale(12),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.black,
      lineHeight: Scale(18)
    },
    midTextGray: {
      fontSize: Scale(12),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.gray,
      lineHeight: Scale(18)
    },
    midTextLightray: {
      fontSize: Scale(12),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.lightGray2,
      lineHeight: Scale(18)
    },
    midTextPurple: {
      fontSize: Scale(12),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.purple,
      lineHeight: Scale(18)
    },
    regularTextGray: {
      fontSize: Scale(14),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.gray,
      lineHeight: Scale(18)
    },
    regularTextGrayMessage: {
      fontSize: Scale(12),
      textAlign: "center",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.gray,
      marginTop: Scale(20),
      lineHeight: Scale(18)
    },
    bigTextGray: {
      fontSize: Scale(16),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.gray,
      lineHeight: Scale(18),
      marginTop: Scale(20)
    },
    smallTextGray: {
      fontSize: Scale(10),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.gray,
      lineHeight: Scale(18)
    },
    progressTextGray: {
      fontSize: Scale(12),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "500",
      color: COLORS.gray,
      lineHeight: Scale(18)
    },
    progressTextBlack: {
      fontSize: Scale(12),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "500",
      color: COLORS.black,
      lineHeight: Scale(18)
    },
    smallTextWhite: {
      fontSize: Scale(10),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "500",
      color: COLORS.white,
      lineHeight: Scale(18)
    },
    progressTextWhite: {
      fontSize: Scale(12),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "500",
      color: COLORS.white,
      lineHeight: Scale(18)
    },
    regularTextPurple: {
      fontSize: Scale(14),
      textAlign: "left",
      fontFamily: FONTS.Regular,
      fontWeight: "400",
      color: COLORS.purple,
      lineHeight: Scale(18)
    },
    semiBoldTextGray: {
      fontSize: Scale(14),
      textAlign: "center",
      fontFamily: FONTS.Medium,
      fontWeight: "500",
      color: COLORS.gray,
      lineHeight: Scale(22)
    }
  
    // Customizable Area End
  });
  
  View
} from "react-native";

import Swiper from "react-native-swiper";
import FONTS from "../../utilities/src/Fonts/Fonts";
import ProductCard from "../../utilities/src/ProductCard";
import Scale from "../../../components/src/Scale";
import { BellIcon, StarEmpty, StarFilled } from "./assets";
import { BrandInformationType } from "./utils/types";

import { SafeAreaView } from "react-native-safe-area-context";
import { width } from "../../utilities/src/Dimensions";
import { Image } from "../../utilities/src/Image";
import { COLORS } from "../../utilities/src/Globals";
import HomePageScreenController, { Props } from "./HomePageScreenController";
import { topCatalogueItem } from "../../catalogue/src/utils/types";


const { width: ScreenWidth } = Dimensions.get("screen");
// Customizable Area End
export default class HomePageScreen extends HomePageScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start
  header = () => {
    return (
      <View style={[styles.headerContainer, styles.shadowProp]}>
        <View style={styles.headerLeftContainer}>
          <Text style={styles.headerTitle}>
            {this.state.brandInformation?.attributes?.header?.store_name ||
              "Store"}
          </Text>
        </View>
        <TouchableOpacity style={styles.headerRightContainer}>
          <Image
            source={BellIcon}
            resizeMode="contain"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  bannerItem = (
    item: BrandInformationType["attributes"]["banners"][0],
    index: number
  ) => {
    return (
      <TouchableOpacity
        testID="testBanner"
        onPress={() => this.onPressBanner(item.redirect_url)}
        style={styles.bannerItemContainer}
      >
        <Image
          key={index.toString()}
          spinner={{
            style: { paddingBottom: 50 },
            size: "large"
          }}
          source={{ uri: item.image.url }}
          style={styles.bannerBackgroundImage}
        ></Image>
      </TouchableOpacity>
    );
  };

  heroBanner = (banner: BrandInformationType["attributes"]["banners"][0]) => {
    return (
      <Swiper
        containerStyle={styles.swiperContainer}
        paginationStyle={styles.swiperPagination}
        activeDotColor={COLORS.black}
        activeDotStyle={[styles.swiperDot, styles.shadowProp]}
        dotColor={COLORS.white}
        dotStyle={[styles.swiperDot, styles.shadowProp]}
      >
        {this.bannerItem(banner, 0)}
      </Swiper>
    );
  };

  renderItem = ({
    item,
    index
  }: {
    item: { rating: number; description: string; author: string };
    index: number;
  }) => {
    return (
      <View key={index.toString()} style={styles.testimonial}>
        <Text style={styles.testimonialAuthor}>{item.author}</Text>
        {this.getStars(item.rating)}
        <Text style={styles.testimonialComment} numberOfLines={4}>
          {item.description}
        </Text>
      </View>
    );
  };

  getStars = (rating: number) => {
    const filledStarCount = Math.floor(rating);
    const filled = Array(filledStarCount).fill("");
    const empty = Array(5 - filledStarCount).fill("");
    return (
      <View style={styles.starsContainer}>
        {filled.map((item, index) => (
          <Image key={index.toString()} source={StarFilled} style={styles.star} />
        ))}
        {empty.map((item, index) => (
          <Image key={index.toString()} source={StarEmpty} style={styles.star} />
        ))}
      </View>
    );
  };

  listEmptyComponent = () => {
    if (this.state.topServicesLoading) {
      return <ActivityIndicator style={styles.activityIndicatorContainer} />;
    }
  };
  renderTopItem = ({ item }: { item: topCatalogueItem }) => {
    return (
      <ProductCard
        navigation={this.props.navigation}
        id={item.id}
        product={item.attributes}
        containerStyle={styles.catalogueCard}
      />
    );
  };
  topServicesContainer = () => {
    const banners = this.state.brandInformation?.attributes?.banners;
    return (
      <View>
        {banners && banners.length > 0 && banners[0].image.url && (
          <View style={styles.mb20}>{this.heroBanner(banners[0])}</View>
        )}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{"TOP SERVICES"}</Text>
          <TouchableOpacity
            testID="viewAllBTN"
            onPress={this.onPressViewAllServices}
          >
            <Text style={styles.viewAllText}>{"View all"}</Text>
          </TouchableOpacity>
        </View>
        {this.state.topServices && this.state.topServices.length && (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.servicesList}
            data={this.state.topServices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderTopItem}
            contentContainerStyle={styles.catalogueListContentContainer}
          />
        )}
        {banners && banners.length > 1 && banners[1].image.url && (
          <View style={styles.mb20}>{this.heroBanner(banners[1])}</View>
        )}
      </View>
    );
  };

  testimonialsContainer = () => {
    return (
      <View style={styles.testimonialsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{"TESTIMONIALS"}</Text>
        </View>
        <View style={styles.testimonialsContentContainer}>
          <FlatList
            data={this.state.testimonials}
            renderItem={this.renderItem}
            horizontal
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  };

  renderSettingsContainer = () => {
    if (this.state.settingsLoading) {
      return <ActivityIndicator style={styles.activityIndicatorContainer} />;
    } else if (this.state.settings?.attributes.opening_hours) {
      const hoursObject = this.formatOpeningHoursObject(
        this.state.settings.attributes.opening_hours
      );

      return hoursObject.map((data, index) => {
        return (
          <View key={index.toString()} style={styles.dayContainer}>
            <Text style={[styles.locationDetailText, { flexGrow: 1 }]}>
              {data.day}
            </Text>
            <Text style={styles.locationDetailText}>
              {`${data.open} - ${data.close}`}
            </Text>
          </View>
        );
      });
    }
  };
  // Customizable Area End
  render() {
    // Customizable Area Start

    const banners = this.state.brandInformation?.attributes?.banners;

    return (
      <SafeAreaView style={styles.safeArea} edges={["right", "left", "top"]}>
        {this.header()}
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.container}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          {this.topServicesContainer()}

          <View>
            {this.state.brandInformation &&
              this.state.brandInformation.attributes.testimonial &&
              this.testimonialsContainer()}
          </View>

          {banners && banners.length > 2 && banners[2].image.url && (
            <View style={styles.mb20}>{this.heroBanner(banners[2])}</View>
          )}

          <View style={styles.locationMainContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{"LOCATION"}</Text>
            </View>
            <View style={styles.locationContentContainer}>
              <View style={styles.mapContainer}>
                {this.state.settingsLoading ? (
                  <ActivityIndicator
                    style={styles.activityIndicatorContainer}
                  />
                ) : (
                  this.state.settings &&
                  this.state.settings?.attributes?.image?.url &&
                  this.state.settings.attributes.location_url && (
                    <TouchableOpacity
                      testID="testPressMap"
                      onPress={this.handlePressMap}
                    >
                      <Image
                        source={{
                          uri: this.state.settings.attributes.image.url
                        }}
                        resizeMode="contain"
                        style={styles.mapImage}
                      />
                    </TouchableOpacity>
                  )
                )}
              </View>
              <Text style={styles.locationSubtitle}>{"Address"}</Text>
              {this.state.settingsLoading ? (
                <ActivityIndicator style={styles.activityIndicatorContainer} />
              ) : (
                <Text style={styles.locationDetailText}>
                  {this.state.settings?.attributes.address_line1 + "\n"}
                  {this.state.settings?.attributes.address_line2 &&
                    this.state.settings?.attributes.address_line2 + "\n"}
                  {this.state.settings?.attributes.city +
                    ", " +
                    this.state.settings?.attributes.state +
                    "\n"}
                  {this.state.settings?.attributes.country + "\n"}
                  {this.state.settings?.attributes.pin_code + "\n"}
                </Text>
              )}

              <View>
                <Text style={styles.locationSubtitle}>{"Opening Hours"}</Text>

                {this.renderSettingsContainer()}
              </View>
    
            </View>
          </View>
          <View
            style={{
              paddingVertical: Scale(20),
              alignItems: "center"
            }}
          ></View>
        </ScrollView>
      </SafeAreaView>
    );

    // Customizable Area End
  }
}

const styles = StyleSheet.create({
  // Customizable Area Start
  headerContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  activityIndicatorContainer: {
    alignSelf: "center",

    width: width - Scale(20),
    height: Scale(40),
    marginBottom: Scale(20)
  },

  locationMainContainer: { marginTop: Scale(20) },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(20)
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(20)
  },
  bellIcon: {
    width: Scale(17),
    height: Scale(19),
    marginRight: Scale(10)
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: Scale(20)
  },

  shadowProp: {
    shadowColor: COLORS.black,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  headerTitle: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(18),
    lineHeight: Scale(21),
    color: COLORS.purple,
    textAlign: "center"
  },
  scrollViewContainer: {
    flex: 1,
    marginRight: 0
  },
  scrollViewContentContainer: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    width: Platform.OS === "web" ? "75%" : "100%",
    maxWidth: 650,
    backgroundColor: COLORS.white
  },
  buttonsContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  bannerBackgroundImage: {
    width: ScreenWidth,
    aspectRatio: 1.3,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  bannerItemContainer: {
    backgroundColor: COLORS.lightBrown,
    flexDirection: "row"
  },
  bannerContentContainer: {
    paddingHorizontal: Scale(15),
    flex: 1,
    justifyContent: "center"
  },
  bannerDescription: {
    color: COLORS.blueGray,
    fontFamily: FONTS.Medium,
    fontSize: Scale(14),
    lineHeight: Scale(18)
  },
  bannerButton: {
    flexDirection: "row",
    paddingTop: Scale(10),
    alignItems: "center"
  },
  bannerButtonText: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(13),
    lineHeight: Scale(18),
    color: COLORS.blueGray
  },
  bannerButtonIcon: {
    width: Scale(13),
    height: Scale(15),
    marginLeft: Scale(10)
  },
  swiperContainer: {
    height: Scale(140)
  },
  swiperPagination: {
    bottom: Scale(5)
  },
  swiperDot: {
    width: Scale(5),
    height: Scale(5),
    alignItems: "center",
    justifyContent: "center",

    borderRadius: Scale(4)
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  mb20: {
    marginBottom: Scale(20)
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Scale(20),
    marginBottom: Scale(10)
  },
  sectionTitle: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(14),
    lineHeight: Scale(16.6),
    color: COLORS.black
  },
  viewAllText: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(12),
    lineHeight: Scale(14),
    color: COLORS.gray
  },
  servicesList: {
    flex: 1
  },
  stylistsList: {
    flex: 1
  },
  catalogueListContentContainer: {
    paddingTop: Scale(20),
    paddingLeft: Scale(20)
  },
  catalogueCard: {
    width: Scale(148),
    marginRight: Scale(15)
  },
  howItWorksContainer: {
    paddingHorizontal: Scale(20)
  },
  stepsContainer: {
    marginTop: Scale(15)
  },
  stepContainer: {
    flexDirection: "row"
  },
  stepNumberContainer: {
    width: Scale(30),
    alignItems: "center"
  },
  stepLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: Scale(15),
    borderLeftWidth: Scale(1),
    borderColor: COLORS.lightGray2,
    borderStyle: "dashed"
  },
  stepNumber: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(14),
    lineHeight: Scale(16.6),
    color: COLORS.gray,
    padding: Scale(4),
    backgroundColor: COLORS.lightGray4,
    borderRadius: 1000
  },
  stepDetailContainer: {
    flex: 1,
    paddingLeft: Scale(12),
    paddingRight: Scale(25),
    paddingVertical: Scale(5),
    marginBottom: Scale(15)
  },
  stepText: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(14),
    lineHeight: Scale(16.6),
    color: COLORS.black
  },
  textGray: {
    color: COLORS.gray
  },
  galleryContainer: {
    marginTop: Scale(5)
  },
  galleryContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: Scale(20),
    paddingTop: Scale(20)
  },
  galleryImage: {
    width: Scale(ScreenWidth * 0.5),
    height: Scale(ScreenWidth * 0.5),
    marginBottom: Scale(20),
    borderRadius: Scale(4)
  },
  testimonialsSection: {
    marginTop: Scale(10),
    marginBottom: Scale(20)
  },
  testimonialsContentContainer: {
    padding: Scale(20),
    paddingBottom: 0
  },
  testimonial: {
    marginBottom: Scale(20),
    width: width * 0.6,
    marginRight: Scale(20)
  },
  testimonialAuthor: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(14),
    lineHeight: Scale(24),
    color: COLORS.black
  },
  starsContainer: {
    flexDirection: "row",
    marginTop: Scale(5),
    marginBottom: Scale(15)
  },
  star: {
    width: Scale(17),
    height: Scale(16),
    marginRight: Scale(7)
  },
  testimonialComment: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(12),
    lineHeight: Scale(21),
    color: COLORS.gray
  },
  locationContentContainer: {
    paddingHorizontal: Scale(20)
  },
  mapContainer: {
    width: "100%",
    aspectRatio: 1.6,
    marginVertical: Scale(20),
    borderRadius: Scale(4),
    overflow: "hidden"
  },
  maps: {
    flex: 1
  },
  locationSubtitle: {
    fontFamily: FONTS.Medium,
    color: COLORS.black,
    fontSize: Scale(14),
    marginBottom: Scale(5)
  },
  locationDetailText: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(12),
    lineHeight: Scale(19),
    color: COLORS.gray
  },
  openMapButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Scale(6),
    marginBottom: Scale(20),
    height: Scale(19)
  },
  openMapText: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(12),
    color: COLORS.purple,
    textDecorationLine: "underline",
    textDecorationColor: COLORS.purple,
    marginLeft: Scale(6)
  },
  dayContainer: {
    flexDirection: "row",
    width: "40%"
  }
  // Customizable Area End
});
