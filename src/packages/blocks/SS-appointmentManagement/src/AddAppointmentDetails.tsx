import React from "react";
// Customizable Area Start
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";

import { SafeAreaView } from "react-native-safe-area-context";
import FONTS from "../../utilities/src/Fonts/Fonts";
import Scale from "../../../components/src/Scale";
import { COLORS } from "../../utilities/src/Globals";

import CustomButton from "../../utilities/src/CustomButton";

import { height, width } from "../../utilities/src/Dimensions";

import AddAppointmentDetailsController, {
  Props
} from "./AddAppointmentDetailsController";
import { SuccessCheckMark, FailureCheckMark } from "./assets";

const { width: ScreenWidth } = Dimensions.get("screen");
// Customizable Area End
export default class AddAppointmentDetails extends AddAppointmentDetailsController {
  constructor(props: Props) {
    super(props);
  }
// Customizable Area Start
  spacer = () => {
    return <View style={styles.spacer} />;
  };
  appointmentSummaryContainer = () => {
    const {
      title,
      duration,
      price,
      selectedTime,
      personalDetails,
      image,
      orderID,
      orderDate,
      paymentType,
      timeZone,
      currency
    } = this.props.route.params;

    return (
      <View style={styles.appointmentSummary}>
        <Text style={styles.mediumTextBlack}>APPOINTMENT SUMMARY</Text>
        <Text style={styles.smallTextGray}>Order ID: {orderID}</Text>
        <Text style={styles.smallTextGray}>
          Order Date: {moment.utc(orderDate).format("MMMM DD YYYY, hh:mm")}
        </Text>
        <View style={styles.topServiceRow}>
          <Image source={{ uri: image }} style={[styles.imageListImage]} />
          <View style={styles.topServiceContainer}>
            <Text style={styles.bigTextGray}>Service</Text>

            <Text style={styles.regularTextBlack}>
              {title.length > 65 ? title.slice(0, 65) + "..." : title},{" "}
              {duration} mins
            </Text>
            <View style={{flexDirection:"row"}}>
          <Text style={styles.regularTextBlack}>{currency.symbol}</Text>
          <Text style={styles.regularTextBlack}>{price || 0}</Text>
          </View>
          </View>
        </View>
        <Text style={styles.bigTextGray}>Appointment Date & Time</Text>
        <View style={styles.serviceSummaryLineHorizontal}>
          <Text style={styles.regularTextBlack}>{selectedTime.date}</Text>
          <View style={styles.space} />
          <Text style={styles.regularTextBlack}>
            {moment(selectedTime.time, "hh:mm").format("hh:mm A")}
            {timeZone ? ` (${timeZone})` : ""}
          </Text>
        </View>
        <Text style={styles.bigTextGray}>Personal details</Text>
        <View style={styles.serviceSummaryLineHorizontal}>
          <Text style={styles.regularTextBlack}>{personalDetails.name}</Text>
          <View style={styles.space} />
          <Text style={styles.regularTextBlack}>
            {personalDetails.email} | {personalDetails.phone}
          </Text>

          {personalDetails.comment.length > 0 && <View style={styles.space} />}
          {personalDetails.comment.length > 0 && (
            <Text style={styles.smallTextGray}>{personalDetails.comment}</Text>
          )}
        </View>
        <Text style={styles.bigTextGray}>Mode of Payment</Text>
        <View style={styles.serviceSummaryLineHorizontal}>
          <Text style={styles.regularTextBlack}>
            {paymentType === "pay_online" ? "Online" : "Pay later at location"}
          </Text>
        </View>

        <View style={styles.totalSummaryLine}>
          <Text style={styles.semiBoldTextBlackBig}>Total</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={styles.semiBoldTextBlackBig}>{currency.symbol}</Text>
          <Text style={styles.semiBoldTextBlackBig}>{price || 0}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ paddingBottom: 35, alignItems: "center", width: "100%" }}
          onPress={this.handlePressBack}
        >
          <Text style={styles.mediumTextBlack}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  };
  successBlock = () => {
    const { personalDetails } = this.props.route.params;

    return (
      <>
        <View style={styles.sectionContainer}>
          <Image source={SuccessCheckMark} />

          <Text
            style={styles.sectionTitle}
          >{`THANK YOU, ${personalDetails.name.toUpperCase()}`}</Text>
          <View style={styles.purpleBorder} />
          <Text style={styles.regularTextGray}>
            {"Your booking is confirmed. We have sent a confirmation email to "}
            <Text style={styles.regularTextBlack}>{personalDetails.email}</Text>
          </Text>
        </View>
        {this.appointmentSummaryContainer()}
      </>
    );
  };
  failBlock = () => {
    const { personalDetails } = this.props.route.params;

    return (
      <View style={styles.failSectionContainer}>
        <Image source={FailureCheckMark} />
        <Text
          style={styles.sectionTitle}
        >{`SORRY, ${personalDetails.name.toUpperCase()}`}</Text>
        <View style={styles.purpleBorder} />
        <Text style={styles.regularTextGray}>
          {"Your booking is declined. Due to some issue. "}
        </Text>
        <CustomButton
          style={[styles.buttonGreen, { marginBottom: Scale(15) }]}
          styleDisabled={styles.buttonGreen}
          disabled={false}
          loading={false}
          text={"CHANGE THE PAYMENT METHOD"}
          onPress={this.changePaymentMethod}
        />
        <TouchableOpacity onPress={this.cancelTransaction}>
          <Text style={styles.regularTextGray}>Cancel Transaction?</Text>
        </TouchableOpacity>
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
        <ScrollView style={styles.container}>
          {this.props.route.params.success
            ? this.successBlock()
            : this.failBlock()}
        </ScrollView>
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
  topServiceContainer: { justifyContent: "space-between" },
  topServiceRow: {
    flexDirection: "row",
    paddingVertical: Scale(20),
    marginBottom: Scale(20),
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray2,
    width: "100%"
  },
  semiBoldTextBlackBig: {
    fontSize: Scale(16),
    textAlign: "center",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(18)
  },
  imageListImage: {
    width: Scale(60),
    height: Scale(75),
    borderRadius: Scale(4),
    marginRight: Scale(20)
  },
  bottomInfoContainer: {
    margin: Scale(20)
  },
  purpleBorder: {
    height: Scale(3),
    width: Scale(102),
    backgroundColor: COLORS.purple,
    marginVertical: Scale(20)
  },
  alertContainer: {
    backgroundColor: COLORS.white,
    width: "75%",

    borderRadius: Scale(8),
    justifyContent: "center",
    alignItems: "center"
  },
  alertTopContainer: {
    paddingVertical: Scale(40),
    paddingHorizontal: width * 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  seperator: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Scale(10)
  },
  alertButtonsContainer: {
    flexDirection: "row",
    paddingVertical: Scale(10),

    // paddingHorizontal: Scale(20),
    borderColor: COLORS.lightGray2,

    borderTopWidth: 1
  },
  timeCardsStyle: { marginTop: Scale(10) },
  timeCardsContainer: {
    alignSelf: "stretch"
  },
  appointmentSummary: {
    alignItems: "flex-start",
    paddingHorizontal: Scale(20),
    marginTop: Scale(20),
    marginBottom: Scale(20)
  },
  space: { marginBottom: Scale(10) },
  spacer: {
    height: Scale(8),
    width: "100%",
    backgroundColor: COLORS.grayishWhite2
  },
  sectionContainer: {
    paddingBottom: Scale(20),
    paddingTop: Scale(30),
    paddingHorizontal: Scale(20),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    alignSelf: "center"
  },
  failSectionContainer: {
    paddingBottom: Scale(20),
    paddingTop: Scale(80),
    paddingHorizontal: Scale(20),
    marginTop: height * 0.15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    alignSelf: "center"
  },
  sectionTitle: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(24),
    color: COLORS.black,
    fontWeight: "500",
    marginBottom: Scale(9),
    marginTop: Scale(30)
  },

  proceedButton: {
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Scale(15),
    borderRadius: Scale(5),
    marginTop: Scale(50)
  },
  proceedText: {
    fontFamily: FONTS.SemiBold,
    fontSize: Scale(14),
    color: COLORS.white,
    lineHeight: Scale(16.6)
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
    paddingBottom: Scale(50)
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
  serviceSummaryLineHorizontal: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: Scale(10),
    paddingBottom: Scale(20),
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1,
    marginBottom: Scale(20)
  },

  container: {
    backgroundColor: COLORS.white,

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
    lineHeight: Scale(20),
    maxWidth: width * 0.7
  },

  mediumTextBlack: {
    fontSize: Scale(14),
    textAlign: "left",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(20),
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
    textAlign: "center",
    fontFamily: FONTS.Regular,
    fontWeight: "400",
    color: COLORS.gray,
    lineHeight: Scale(20),
    maxWidth: width * 0.8
  },
  bigTextGray: {
    fontSize: Scale(16),
    textAlign: "left",
    fontFamily: FONTS.Regular,
    fontWeight: "400",
    color: COLORS.gray,
    lineHeight: Scale(18)
  },
  smallTextGray: {
    fontSize: Scale(10),
    textAlign: "left",
    fontFamily: FONTS.Regular,
    fontWeight: "400",
    color: COLORS.gray,
    lineHeight: Scale(18)
  },
  smallTextWhite: {
    fontSize: Scale(10),
    textAlign: "left",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.white,
    lineHeight: Scale(18)
  },
  regularTextPurple: {
    fontSize: Scale(14),
    textAlign: "left",
    fontFamily: FONTS.Medium,
    fontWeight: "400",
    color: COLORS.purple,
    lineHeight: Scale(18)
  },
  semiBoldTextGray: {
    fontSize: Scale(14),
    textAlign: "center",
    fontFamily: FONTS.SemiBold,
    fontWeight: "600",
    color: COLORS.gray,
    lineHeight: Scale(22)
  }
  // Customizable Area End
});
