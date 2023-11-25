import React from "react";
// Customizable Area Start
import { Formik } from "formik";
import WebView from "react-native-webview";
import {
  ActivityIndicator,
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
import { showAlert } from "react-native-customisable-alert";
import { SafeAreaView } from "react-native-safe-area-context";
import FONTS from "../../utilities/src/Fonts/Fonts";
import Scale from "../../../components/src/Scale";
import { COLORS } from "../../utilities/src/Globals";
import { LeftArrow } from "../../landingpage/src/assets";
import CustomButton from "../../utilities/src/CustomButton";

import { width } from "../../utilities/src/Dimensions";
const baseURL = require("../../../framework/src/config.js");
import AddAppointmentPaymentController, {
  Props
} from "./AddAppointmentPaymentController";
import { ClosableSection } from "../../utilities/src/ClosableSection";
import {
  AppointmentType,
  PaymentDetailsType,
  SelectablePaymentOption
} from "./types";
import AnimatedTextInput from "../../utilities/src/AnimatedTextInput";
import { heightFromPercentage } from "framework/src/Utilities";

const { width: ScreenWidth } = Dimensions.get("screen");
export const configJSON = require("./config");

import StripePayments from "../../stripepayments/src/StripePayments";


  // Customizable Area End
export default class AddAppointmentPayment extends AddAppointmentPaymentController {
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
  radioButton = (
    option: SelectablePaymentOption,
    index: number,
    disabled: boolean
  ) => {
    return (
      <TouchableOpacity
        testID="btnSelect"
        key={`payment-option-${index}`}
        style={styles.radioButton}
        disabled={disabled}
        onPress={() => this.selectPaymentOption(option)}
      >
        <View style={styles.radioOuter}>
          {this.state.paymentType === option.value && (
            <View style={styles.radioInner} />
          )}
        </View>
        <Text style={disabled ? styles.smallGrayText : styles.smallBlackText}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

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
      timeZone,
      currency
    } = this.props.route.params;

    return (
      <View style={styles.appointmentSummary}>
        <Text style={styles.bigTextGray}>Service</Text>
        <View style={styles.serviceSummaryLine}>
          <Text style={styles.regularTextBlack}>
            {title}, {duration} mins
          </Text>
          <View style={{flexDirection:"row"}}>
          <Text style={styles.regularTextBlack}>{currency.symbol} </Text>
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

        <View style={styles.totalSummaryLine}>
          <Text style={styles.semiBoldTextBlackBig}>Total</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={styles.semiBoldTextBlackBig}>{currency.symbol} </Text>
          <Text style={styles.semiBoldTextBlackBig}>{price || 0}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderWebView = () => {
    return (
      <SafeAreaView
        edges={["right", "left", "top"]}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          position: "absolute",
          bottom: 0,
          height: "100%",
          elevation: 1000,

          zIndex: 1000,
          width: "100%"
        }}
      >
        <WebView
          testID="webView"
          source={{
            uri:
              baseURL.baseURL +
              "/" +
              configJSON.webViewUrl +
              this.state.encReq +
              "&access_code=" +
              this.state.accessCode
          }}
          renderLoading={() => (
            <ActivityIndicator size={"large"} color={COLORS.darkGray} />
          )}
          style={styles.webView}
          javaScriptEnabled={true}
          
          allowFileAccessFromFileURLs={true}
          onMessage={(event) => {
          }}
          domStorageEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          injectedJavaScript={configJSON.injectedJavaScript}
          onNavigationStateChange={this.onNavigationStateChangeHandler}
        />
      </SafeAreaView>
    );
  };

  customAlert = () => {
    const { id, selectedTime, personalDetails } = this.props.route.params;
    const { city, country, state, zip, addressLine1, no, addressLine2 } =
      this.state.paymentDetails;
    const appointmentParams: AppointmentType = {
      time_slot_id: selectedTime.id,
      catalogue_id: id,
      payment_mode:
        this.state.paymentType === "payAtLocation" ? "pay_later" : "pay_now",
      appointment_date: selectedTime.date,
      personal_detail_attributes: {
        full_name: personalDetails.name,
        full_phone_number: personalDetails.phone,
        email: personalDetails.email,
        comment: personalDetails.comment
      },
      billing_address_attributes: {
        country: country,
        city: city,
        state: state,
        flat_number: no,
        address_line_2: addressLine2,
        address_line_1: addressLine1,
        zip_code: zip
      }
    };
    return (
      <View style={styles.alertContainer}>
        <View style={styles.alertTopContainer}>
          <Text style={[styles.regularTextGray, { textAlign: "center" }]}>
            Are you sure you want to place the order?
          </Text>
        </View>
        <View style={styles.alertButtonsContainer}>
          <TouchableOpacity
            onPress={this.handleCloseAlert}
            style={[
              styles.seperator,
              { borderRightWidth: 1, borderRightColor: COLORS.lightGray2 }
            ]}
          >
            <Text style={styles.regularTextGray}>No</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.handleSubmitBooking(appointmentParams)}
            style={styles.seperator}
          >
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // Customizable Area End
  render() {
    // Customizable Area Start
    return (
      <Formik
        validationSchema={this.paymentFormValidationSchema}
        initialValues={this.paymentInitialFormValues}
        enableReinitialize
        onSubmit={(values: PaymentDetailsType) => {
          Keyboard.dismiss();
          this.setState({ paymentDetails: values });
          setTimeout(() => {
            showAlert({
              alertType: "custom",
              customAlert: this.customAlert()
            });
          }, 250);
        }}
      >
        {({
          values,
          handleChange,
          touched,
          errors,
          setFieldTouched,
          handleSubmit
        }) => (
          <SafeAreaView
            edges={["right", "left", "top"]}
            style={{ flex: 1, backgroundColor: COLORS.white }}
          >
            {!this.state.isCheckout && this.renderWebView()}
             <StripePayments onSuccess={this.onSuccess} isModalOpen={this.state.isModalOpen} setIsModalOpen={this.setIsModalOpen} paymentDetails={this.state.paymentDetails}  personalDetails={this.props.route.params.personalDetails}  id={this.props.route.params.id} navigation={this.props.navigation}/>
            {this.header()}

            <ScrollView style={styles.container} nestedScrollEnabled>
              {this.progressSummaryBar("3")}
              {this.spacer()}

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{"PAYMENT LOCATION"}</Text>
                {this.radioButton(
                  this.paymentOptions[0],
                  0,
                  this.props.route.params.paymentType === "pay_in_person"
                )}
                {this.radioButton(
                  this.paymentOptions[1],
                  1,
                  this.props.route.params.paymentType === "pay_online"
                )}
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{"ADDRESS"}</Text>

                <View style={styles.formContainer}>
                  <AnimatedTextInput
                    testID="txtCountry"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("country")}
                    onBlur={() => setFieldTouched("country")}
                    value={values.country}
                    mandatory
                    label="Country "
                    errorText={
                      touched.country && errors.country && errors.country
                    }
                  />
                  <AnimatedTextInput
                    testID="txtNo"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("no")}
                    onBlur={() => setFieldTouched("no")}
                    value={values.no}
                    label="Flat / House / Apartment No."
                    errorText={touched.no && errors.no && errors.no}
                  />
                  <AnimatedTextInput
                    testID="txtAddress1"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    mandatory
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("addressLine1")}
                    onBlur={() => setFieldTouched("addressLine1")}
                    value={values.addressLine1}
                    label="Address line 1 "
                    errorText={
                      touched.addressLine1 &&
                      errors.addressLine1 &&
                      errors.addressLine1
                    }
                  />
                  <AnimatedTextInput
                    testID="txtAddress2"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.inputContainer}
                    onChangeText={handleChange("addressLine2")}
                    onBlur={() => setFieldTouched("addressLine2")}
                    value={values.addressLine2}
                    label="Address line 2"
                    errorText={
                      touched.addressLine2 &&
                      errors.addressLine2 &&
                      errors.addressLine2
                    }
                  />
                  <View style={styles.inputsRow}>
                    <AnimatedTextInput
                      testID="txtCity"
                      borderColor={COLORS.lightGray2}
                      borderColorFocused={COLORS.purple}
                      focusedLabelColor={COLORS.gray}
                      textColor={COLORS.black}
                      focusedTextColor={COLORS.purple}
                      labelColor={COLORS.lightGray3}
                      containerStyle={styles.smallInputContainer}
                      onChangeText={handleChange("city")}
                      mandatory
                      onBlur={() => setFieldTouched("city")}
                      value={values.city}
                      label="City "
                      errorText={touched.city && errors.city && errors.city}
                    />
                    <AnimatedTextInput
                      testID="txtState"
                      borderColor={COLORS.lightGray2}
                      borderColorFocused={COLORS.purple}
                      focusedLabelColor={COLORS.gray}
                      textColor={COLORS.black}
                      focusedTextColor={COLORS.purple}
                      labelColor={COLORS.lightGray3}
                      containerStyle={styles.smallInputContainer}
                      onChangeText={handleChange("state")}
                      onBlur={() => setFieldTouched("state")}
                      value={values.state}
                      mandatory
                      label="State"
                      errorText={touched.state && errors.state && errors.state}
                    />
                  </View>
                  <AnimatedTextInput
                    testID="txtZip"
                    borderColor={COLORS.lightGray2}
                    borderColorFocused={COLORS.purple}
                    focusedLabelColor={COLORS.gray}
                    textColor={COLORS.black}
                    focusedTextColor={COLORS.purple}
                    labelColor={COLORS.lightGray3}
                    containerStyle={styles.smallInputContainer}
                    onChangeText={handleChange("zip")}
                    onBlur={() => setFieldTouched("zip")}
                    mandatory
                    value={values.zip}
                    label="Zip code "
                    errorText={touched.zip && errors.zip && errors.zip}
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
  alertContainer: {
    backgroundColor: COLORS.white,
    width: "75%",

    borderRadius: Scale(8),
    justifyContent: "center",
    alignItems: "center"
  },
  webView: {
    width: "95%",
    height: heightFromPercentage(99),
    flex: 1
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
    alignItems: "flex-start"
  },
  space: { marginBottom: Scale(10) },
  spacer: {
    height: Scale(8),
    width: "100%",
    backgroundColor: COLORS.grayishWhite2
  },
  sectionContainer: {
    paddingVertical: Scale(20),
    paddingHorizontal: Scale(20)
  },
  sectionTitle: {
    fontFamily: FONTS.Medium,
    fontSize: Scale(14),
    color: COLORS.black,
    fontWeight: "500",
    marginBottom: Scale(20)
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12
  },
  radioOuter: {
    height: Scale(24),
    width: Scale(24),
    borderRadius: Scale(24),
    borderWidth: Scale(1),
    marginRight: Scale(12),
    borderColor: COLORS.radioGray,
    alignItems: "center",
    justifyContent: "center"
  },
  radioInner: {
    width: Scale(14),
    height: Scale(14),
    borderRadius: Scale(14),
    backgroundColor: COLORS.green
  },
  formContainer: {
    marginTop: Scale(8)
  },
  inputContainer: {
    marginBottom: Scale(12)
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  smallInputContainer: {
    flex: 0.48,
    marginBottom: Scale(12)
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
  serviceSummaryLineHorizontal: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: Scale(10),
    paddingBottom: Scale(20),
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1
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
  semiBoldTextBlack: {
    fontSize: Scale(14),
    textAlign: "center",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(18)
  },
  semiBoldTextBlackBig: {
    fontSize: Scale(16),
    textAlign: "left",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(22)
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
  smallBlackText: {
    fontSize: Scale(12),
    textAlign: "left",
    fontFamily: FONTS.Regular,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: Scale(18)
  },
  smallGrayText: {
    fontSize: Scale(12),
    textAlign: "left",
    fontFamily: FONTS.Medium,
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
