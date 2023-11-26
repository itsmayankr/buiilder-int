import React from "react";
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
  import FONTS from "../../SS-utilities/src/Fonts/Fonts";
  import Scale from "../../../components/src/Scale";
  import { COLORS } from "../../SS-utilities/src/Globals";
  import { LeftArrow, RightArrow } from "../../landingpage/src/assets";
  import CustomButton from "../../SS-utilities/src/CustomButton";
  import AddAppointmentController, { Props } from "./AddAppointmentController";
  import moment from "moment";
  import { width } from "../../SS-utilities/src/Dimensions";
  import { ClosableSection } from "../../SS-utilities/src/ClosableSection";
  
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
            testID="btnBack"
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
          data-testID='CalanderComp'
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
          testID="selectTimeSlotBtn"
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
              testID="availableTimesList"
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
              data-testID="proceedBtn"
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
  