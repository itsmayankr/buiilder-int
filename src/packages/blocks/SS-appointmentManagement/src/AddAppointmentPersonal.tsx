import React from "react";
// Customizable Area Start
import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../utilities/src/Globals";

import { Formik } from "formik";
import FONTS from "../../utilities/src/Fonts/Fonts";
import Scale from "../../../components/src/Scale";
import { LeftArrow } from "../../landingpage/src/assets";
import CustomButton from "../../utilities/src/CustomButton";

import { width } from "../../utilities/src/Dimensions";

import AddAppointmentPersonalController, {
  Props
} from "./AddAppointmentPersonalController";
import { ClosableSection } from "../../utilities/src/ClosableSection";
import { PersonalDetailsType } from "./types";
import AnimatedTextInput from "../../utilities/src/AnimatedTextInput";

const { width: ScreenWidth } = Dimensions.get("screen");
// Customizable Area End
export default class AddAppointmentPersonal extends AddAppointmentPersonalController {
  constructor(props: Props) {
    super(props);
  }
// Customizable Area Start
  header = () => {
    return (
      <View style={[styles.headerContainer, styles.shadowProp]}>
        <TouchableOpacity
          testID="btnBack"
          onPress={() => this.props.navigation.goBack()}
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
    no,
    title,
    selected
  }: {
    no: string;
    title: string;
    selected: boolean;
  }) => {
    return (
      <View style={[styles.progressBox]}>
        <View
          style={[
            styles.progressLine,
            no === "1"
              ? {
                  left: (ScreenWidth - Scale(78)) / 6 + Scale(12),

                  width: (ScreenWidth - Scale(78)) / 6
                }
              : no === "3" && {
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
            style={!selected ? styles.smallTextGray : styles.smallTextWhite}
          >
            {no}
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
          no: "1",
          title: "Date & Time",
          selected: index === "1" || index === "2" || index === "3"
        })}
        {this.progressBox({
          no: "2",
          title: "Personal Details",
          selected: index === "2" || index === "3"
        })}
        {this.progressBox({
          no: "3",
          title: "Payment",
          selected: index === "3"
        })}
      </View>
    );
  };
  appointmentSummaryContainer = () => {
    const { title, duration, price, selectedTime, timeZone,currency } =
      this.props.route.params;

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
        <Text style={styles.bigTextGray}>Appointment Date & Time</Text>
        <View style={styles.serviceSummaryLineHorizontal}>
          <Text style={styles.regularTextBlack}>{selectedTime.date}</Text>
          <View style={styles.space} />
          <Text style={styles.regularTextBlack}>
            {moment(selectedTime.time, "hh:mm").format("hh:mm A")}
            {timeZone ? ` (${timeZone})` : ""}
          </Text>
        </View>

        <View style={styles.totalSummaryLine}>
          <Text style={styles.semiBoldTextBlack}>Total</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={styles.semiBoldTextBlack}>{currency.symbol}</Text>
          <Text style={styles.semiBoldTextBlack}>{price || 0}</Text>
          </View>
        </View>
      </View>
    );
  };

  spacer = () => {
    return <View style={styles.spacer} />;
  };
// Customizable Area End
  render() {
    // Customizable Area Start

    return (
      <Formik
        validationSchema={this.personalFormValidationSchema}
        initialValues={this.initialPersonalFormValues}
        enableReinitialize
        onSubmit={(values: PersonalDetailsType) => {
          Keyboard.dismiss();
          this.setState({ personalDetails: values });
          setTimeout(() => {
            this.onPressProceed("2");
          }, 250);
        }}
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          setFieldTouched,
          handleSubmit
        }) => (
          <SafeAreaView
            edges={["right", "left", "top"]}
            style={{ flex: 1, backgroundColor: COLORS.white }}
          >
            {this.header()}

            <ScrollView style={styles.container} nestedScrollEnabled>
              {this.progressSummaryBar("2")}
              {this.spacer()}
              <View style={styles.formContainer}>
                <Text style={styles.sectionTitle}>{"PERSONAL DETAILS"}</Text>
                <View>
                  <AnimatedTextInput
                    testID="btnName"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("name")}
                    onBlur={() => setFieldTouched("name")}
                    value={values.name}
                    label="Name"
                    mandatory
                    errorText={touched.name && errors.name && errors.name}
                  />
                  <AnimatedTextInput
                    testID="btnEmail"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    value={values.email}
                    mandatory
                    label="Email"
                    errorText={touched.email && errors.email && errors.email}
                  />
                  <AnimatedTextInput
                    testID="btnPhone"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("phone")}
                    onBlur={() => setFieldTouched("phone")}
                    value={values.phone}
                    label="Mobile"
                    mandatory
                    errorText={touched.phone && errors.phone && errors.phone}
                  />
                  <AnimatedTextInput
                    testID="btnComment"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    style={styles.commentInput}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("comment")}
                    onBlur={() => setFieldTouched("comment")}
                    value={values.comment}
                    label="Comment"
                    errorText={
                      touched.comment && errors.comment && errors.comment
                    }
                    multiline
                    numberOfLines={3}
                    renderRightAccessory={() => (
                      <Text style={styles.commentCountText}>
                        {`${values.comment.length} / 100`}
                      </Text>
                    )}
                  />
                </View>
              </View>
            </ScrollView>
            <ClosableSection isOpened={false} title={"APPOINTMENT SUMMARY"}>
              {this.appointmentSummaryContainer()}
            </ClosableSection>

            <View style={styles.footer}>
              <CustomButton
                testID="btnSubmit"
                style={styles.buttonGreen}
                styleDisabled={styles.buttonGreen}
                disabled={false}
                loading={false}
                text={"PROCEED"}
                onPress={() => handleSubmit()}
              />
            </View>
          </SafeAreaView>
        )}
      </Formik>
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
  appointmentSummary: {
    alignItems: "flex-start"
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
  space: { marginBottom: Scale(10) },
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
  serviceSummaryLineHorizontal: {
    width: "100%",
    alignItems: "flex-start",
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
  sectionTitle: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(14),
    color: COLORS.black,
    fontWeight: "500",
    marginBottom: Scale(20)
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
  formContainer: {
    marginTop: Scale(8),
    paddingVertical: Scale(20),
    paddingHorizontal: Scale(20)
  },
  inputContainer: {
    marginBottom: Scale(12),
    justifyContent: "flex-start",
    textAlignVertical: "top"
  },
  commentInput: {
    height: Scale(ScreenWidth * 0.3)
  },
  commentCountText: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(8),
    lineHeight: Scale(10),
    color: COLORS.black
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
    fontFamily: FONTS.Regular,
    fontWeight: "400",
    color: COLORS.purple,
    lineHeight: Scale(18)
  },

  semiBoldTextBlack: {
    fontSize: Scale(16),
    textAlign: "left",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(22)
  }
  // Customizable Area End
});
