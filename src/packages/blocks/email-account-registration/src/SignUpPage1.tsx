import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Scale, { verticalScale } from "../../../components/src/Scale";
import Icon from "react-native-vector-icons/FontAwesome5";
import { appLogo,backArrow } from "./assets";

import EmailAccountRegistrationController from "./EmailAccountRegistrationController";

interface Props {
  email: string;
  onChangeEmail: (value: string) => void;
  fullName: string;
  onChangeFullname: (text: string) => void;
  isValidMobileNo: boolean;
  mobileNo: string;
  onChangeMobileNo: (text: string) => void;
  onChangeFormattedMobileNo: (text: string) => void;
  unFormattedMobileNo: string;
  isValidPassword: boolean;
  isValidPasswordlength: boolean;
  onChangeIsValidMobileNo: (value: boolean) => void;
  onChangeUnformattedMobileNo: (value: string) => void;
  password: string;
  isPasswordVisible: boolean;
  onChangeRegisterPassword: (text: string) => void;
  handlePasswordVisibility: () => void;
  isValidPasswordMatch: boolean;
  confirmPasswoord: string;
  isConfirmPasswordVisible: boolean;
  onChangeConfirmPassword: (text: string) => void;
  handleConfirmPasswordVisibility: () => void;
  handleTermsAndConditionModal: () => void;
  goBack1: () => void;
  countryCode: any,
  onChosseCountryCode: (selectedCountry:any) => void;
}

export default class SignUpPage1 extends Component<Props> {
  phoneInput: any;
  onChangeCountryCode = async (selectedCountry: any) => {
    console.log("props", this.props);
    this.props.onChangeMobileNo("");
    this.props.onChangeUnformattedMobileNo("");
    this.props.onChangeIsValidMobileNo(true);
    this.phoneInput.state.number = "";
    // this.setState({countryCode: selectedCountry})
    this.props.onChosseCountryCode(selectedCountry);
  };

  onBlurMobileNo = () => {
    if (this.props.unFormattedMobileNo === "") {
      this.props.onChangeIsValidMobileNo(true);
    }
    if (
      this.phoneInput.isValidNumber(this.props.mobileNo) !== null &&
      this.props.unFormattedMobileNo !== ""
    ) {
      this.props.onChangeIsValidMobileNo(
        this.phoneInput.isValidNumber(this.props.unFormattedMobileNo)
      );
    }
  };

  render() {
    let {
      email,
      onChangeEmail,
      fullName,
      onChangeFullname,
      isValidMobileNo,
      mobileNo,
      onChangeMobileNo,
      onChangeFormattedMobileNo,
      isValidPassword,
      isValidPasswordlength,
      password,
      isPasswordVisible,
      onChangeRegisterPassword,
      handlePasswordVisibility,
      isValidPasswordMatch,
      confirmPasswoord,
      isConfirmPasswordVisible,
      onChangeConfirmPassword,
      handleConfirmPasswordVisibility,
      handleTermsAndConditionModal,
      unFormattedMobileNo,
      goBack1,
      countryCode,
      onChosseCountryCode
    } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={goBack1} style={styles.backbuttonview}>
        <Image source={backArrow} style={{ height: Scale(20), width: Scale(20), marginTop: Scale(25), marginLeft: Scale(10) }} resizeMode='contain' />
        </TouchableOpacity>
        <View style={{ backgroundColor: "#fff", marginTop: Scale(15) }}>
          <Image
            source={appLogo}
            style={{ height: 70, width: 70, alignSelf: "center" }}
            resizeMode="contain"
          />
          <Text style={styles.signInTxt}>SIGN UP</Text>
          <View
            style={[
              styles.emailView,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              testID="txtInputEmail"
              style={[styles.emailTextInput, { width: "90%" }]}
              placeholder="Email"
              value={email}
              onChangeText={onChangeEmail}
            />
            <Text
              style={{
                color: "red",
                right: 10,
                fontSize: Scale(16),
                fontWeight: "bold",
              }}
            >
              *
            </Text>
          </View>
          <View
            style={[
              styles.emailView,
              {
                marginTop: Scale(15),
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <TextInput
              testID="txtInputFullName"
              style={[styles.emailTextInput, { width: "90%" }]}
              placeholder="Full name"
              value={fullName}
              onChangeText={onChangeFullname}
            />
            <Text
              style={{
                color: "red",
                right: 10,
                fontSize: Scale(16),
                fontWeight: "bold",
              }}
            >
              *
            </Text>
          </View>
          <View
            style={[
              styles.emailView,
              !isValidMobileNo && {
                borderColor: "red",
                borderWidth: 1,
              },
              {
                marginTop: Scale(15),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <PhoneInput
              ref={(ref) => {
                this.phoneInput = ref;
              }}
              defaultValue={mobileNo}
              defaultCode={countryCode.cca2}
              layout="second"
              value={mobileNo}
              placeholder="Mobile Number"
              onChangeText={onChangeMobileNo}
              onChangeFormattedText={onChangeFormattedMobileNo}
              onChangeCountry={this.onChangeCountryCode}
              countryPickerProps={{ withAlphaFilter: true }}
              textContainerStyle={styles.textContainerStyle}
              containerStyle={styles.containerStyle}
              textInputStyle={styles.textInputStyle}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              textInputProps={{
                onBlur: this.onBlurMobileNo,
                value: unFormattedMobileNo,
                selectionColor:'#9fdfbf'
              }}
            />
            {/* <TextInput
            style={[styles.emailTextInput, { width: '75%' }]}
            placeholder='Mobile number'
            maxLength={10}
            value={this.state.mobileNo}
            keyboardType='numeric'
            onChangeText={(text) => this.onChangeMobileNo(text)}
          /> */}
            <Text
              style={{
                opacity: 0.3,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              (optional)
            </Text>
          </View>
          {!isValidMobileNo && (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginHorizontal: Scale(40),
                marginTop: Scale(4),
                fontWeight: "600",
                opacity: 0.7,
              }}
            >
              Please enter valid mobile number
            </Text>
          )}
          <View
            style={[
              styles.emailView,
              {
                bottom: Scale(3),
                flexDirection: "row",
                alignItems: "center",
                marginTop: Scale(15),
                borderColor:
                  isValidPassword && isValidPasswordlength == true
                    ? "red"
                    : "#fff",
                borderWidth: 1,
              },
            ]}
          >
            <TextInput
              testID="txtInputPassword"
              style={[styles.emailTextInput, { width: "87%" }]}
              placeholder="Password"
              value={password}
              maxLength={50}
              secureTextEntry={!isPasswordVisible}
              onChangeText={onChangeRegisterPassword}
            />
            <TouchableOpacity
              testID="btnPasswordShowHide"
              onPress={handlePasswordVisibility}
            >
              {isPasswordVisible ? (
                <Icon name="eye-slash" size={25} color="gray" />
              ) : (
                <Icon name="eye" size={25} color="gray" />
              )}
            </TouchableOpacity>
            {/* <Text
            style={{
              color: 'red',
              fontSize: Scale(16),
              fontWeight: 'bold',
              bottom: 18,
              left: 3,
            }}
          >
            *
          </Text> */}
          </View>
          {isValidPassword && (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginHorizontal: Scale(40),
                marginTop: Scale(4),
                fontWeight: "600",
                opacity: 0.7,
              }}
            >
              Password must contain a minimum of 8 and a maximum of 50 characters, Atleast One number,
              One lowercase, One Uppercase and One special character
            </Text>
          )}

          
          <View
            style={[
              styles.emailView,
              {
                bottom: Scale(3),
                flexDirection: "row",
                alignItems: "center",
                marginTop: Scale(15),
                borderColor: isValidPasswordMatch == true ? "red" : "#fff",
                borderWidth: 1,
              },
            ]}
          >
            <TextInput
              testID="txtInputConfirmPassword"
              style={[styles.emailTextInput, { width: "87%" }]}
              placeholder="Confirm password"
              value={confirmPasswoord}
              maxLength={50}
              secureTextEntry={!isConfirmPasswordVisible}
              onChangeText={onChangeConfirmPassword}
            />
            <TouchableOpacity
              testID="btnConfirmPasswordShowHide"
              onPress={handleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <Icon name="eye-slash" size={25} color="gray" />
              ) : (
                <Icon name="eye" size={25} color="gray" />
              )}
            </TouchableOpacity>
            {/* <Text
            style={{
              color: 'red',
              fontSize: Scale(16),
              fontWeight: 'bold',
              bottom: 18,
              left: 3,
            }}
          >
            *
          </Text> */}
          </View>
          {isValidPasswordMatch && (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginHorizontal: Scale(40),
                marginTop: Scale(4),
                fontWeight: "600",
                opacity: 0.7,
              }}
            >
              Password and confirm password does not match.
            </Text>
          )}
          <Text style={styles.agreeText}>
            By creating an account, you agree to Gamma's
          </Text>
          <TouchableOpacity
            testID="btnTermsAndCondition"
            style={styles.forgotButton}
            onPress={handleTermsAndConditionModal}
          >
            <Text style={styles.forgotText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInTxt: {
    fontSize: Scale(22),
    fontWeight: "bold",
    color: "blue",
    marginTop: Scale(25),
    alignSelf: "center",
  },
  emailView: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: Scale(25),
    padding: 5,
    alignSelf: "center",
  },
  emailTextInput: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    marginHorizontal: Scale(5),
    fontSize: Scale(16),
    // fontWeight: '600',
    height: Scale(45),
  },
  textContainerStyle: {
    backgroundColor: "transparent",
    width: "100%",
    height: Scale(50),
  },
  containerStyle: {
    backgroundColor: "transparent",
    width: "80%",
    height: Scale(50),
    paddingLeft: Scale(10),
    paddingRight: Scale(10),
  },
  textInputStyle: {
    backgroundColor: "transparent",
    height: Scale(50),
    fontSize: Scale(16),
  },
  agreeText: {
    fontSize: Scale(14),
    fontWeight: "700",
    opacity: 0.7,
    marginTop: Scale(15),
    alignSelf: "center",
  },
  forgotButton: {
    marginTop: Scale(1),
    alignSelf: "center",
  },
  forgotText: {
    color: "blue",
    fontSize: Scale(14),
    fontWeight: "700",
    opacity: 0.7,
  },
  countryPickerButtonStyle: {
    width: Scale(65),
    height: Scale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  backbuttonview: {
    marginTop: verticalScale(30),
    marginLeft: Scale(25),
  },
  backbtn: { height: 16, width: 11 },
});
