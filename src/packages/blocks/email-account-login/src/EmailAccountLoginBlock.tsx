import React from "react";
// Customizable Area Start
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
// Merge Engine - import assets - Start
import Loader from "../../../components/src/Loader";
import Icon from "react-native-vector-icons/FontAwesome5";
import FBIcon from "react-native-vector-icons/AntDesign";
import Scale from "../../../components/src/Scale";
import { appLogo, facebookIcon, googleIcon, appleIcon } from "./assets";
// Merge Engine - import assets - End

// Merge Engine - Artboard Dimension  - Start
let artBoardHeightOrg = 667;
let artBoardWidthOrg = 375;
// Merge Engine - Artboard Dimension  - End
// Customizable Area End

import EmailAccountLoginController, {
  Props,
} from "./EmailAccountLoginController";

export default class EmailAccountLoginBlock extends EmailAccountLoginController {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    Dimensions.addEventListener("change", (e) => {
      // Customizable Area End
    });
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    const { navigation } = this.props;
    return (
      // Required for all blocks
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.onClickBackground()}
          testID="onClickBackground"
        >
          <View style={styles.mainView}>
            <Image
              source={appLogo}
              style={{ height: 70, width: 70 }}
              resizeMode="contain"
            />
            <Text style={styles.signInTxt}>SIGN IN</Text>
            <View style={styles.emailView}>
              <TextInput
                testID="txtInputEmail"
                style={styles.emailTextInput}
                placeholder="User Email"
                placeholderTextColor="gray"
                value={this.state.username}
                onChangeText={(value) => this.setState({ username: value })}
              />
            </View>
            <View
              style={[
                styles.emailView,
                {
                  bottom: Scale(3),
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: Scale(20),
                },
              ]}
            >
              <TextInput
                testID="txtInputPassword"
                style={[styles.emailTextInput, { width: "80%" }]}
                placeholder="Password"
                placeholderTextColor="gray"
                value={this.state.password}
                secureTextEntry={!this.state.isPasswordVisible}
                onChangeText={(text) => this.onChangePassword(text)}
              />
              <TouchableOpacity
                testID="btnPasswordShowHide"
                onPress={() =>
                  this.setState({
                    isPasswordVisible: !this.state.isPasswordVisible,
                  })
                }
              >
                {this.state.isPasswordVisible ? (
                  <Icon name="eye-slash" size={25} color="blue" />
                ) : (
                  <Icon name="eye" size={25} color="blue" />
                )}
              </TouchableOpacity>
            </View>
            {this.state.isValidPassword && (
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
                {this.state.error}
              </Text>
            )}
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => navigation.navigate("ForgotPassword")}
              testID="btnForgotPassword"
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => this.onPressSignIn()}
              testID="btnEmailLogIn"
            >
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.continueText}>Or continue with</Text>
            <View style={{ width: "85%" }}>
              {Platform.OS === "ios" ? (
                <View style={styles.socialIconView}>
                  <TouchableOpacity style={styles.socialIconBtn}>
                    <Image style={styles.socialIcon} source={googleIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialIconBtn}
                    onPress={() => this.onClickFacebookLogin()}
                  >
                    <Image
                      style={[
                        styles.socialIcon,
                        { height: Scale(27), width: Scale(27) },
                      ]}
                      source={facebookIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIconBtn}>
                    <Image
                      style={[
                        styles.socialIcon,
                        { height: Scale(27), width: Scale(27) },
                      ]}
                      source={appleIcon}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={[
                    styles.socialIconView,
                    { justifyContent: "space-evenly" },
                  ]}
                >
                  <TouchableOpacity style={styles.socialIconBtn}>
                    <Image style={styles.socialIcon} source={googleIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialIconBtn}
                    onPress={() => this.onClickFacebookLogin()}
                  >
                    <Image
                      style={[
                        styles.socialIcon,
                        { height: Scale(27), width: Scale(27) },
                      ]}
                      source={facebookIcon}
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.signUpView}>
                <Text style={styles.accountTxt}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("EmailAccountRegistration")
                  }
                  testID="btnSignUp"
                >
                  <Text
                    style={[
                      styles.accountTxt,
                      { color: "blue", textDecorationLine: "underline" },
                    ]}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Loader
          loading={this.state.isLoading}
          style={{ marginTop: Scale(170) }}
        />
      </ScrollView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}
// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Scale(70),
    backgroundColor: "#fff",
    // marginHorizontal:Scale()
  },
  signInTxt: {
    fontSize: Scale(22),
    fontWeight: "bold",
    color: "blue",
    marginTop: Scale(50),
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
    // padding: 25
  },
  emailTextInput: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    marginHorizontal: Scale(10),
    fontSize: Scale(16),
    // fontWeight: '500',
    height: Scale(55),
  },
  forgotButton: {
    marginTop: Scale(25),
  },
  forgotText: {
    color: "blue",
    fontSize: Scale(14),
    fontWeight: "700",
    opacity: 0.7,
  },
  signInBtn: {
    marginTop: Scale(50),
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: Scale(10),
    alignItems: "center",
    backgroundColor: "blue",
    padding: Scale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInText: {
    fontWeight: "600",
    fontSize: Scale(18),
    color: "#fff",
    opacity: 0.8,
  },
  continueText: {
    color: "#000",
    fontWeight: "bold",
    opacity: 0.7,
    fontSize: Scale(14),
    marginVertical: Scale(22),
  },
  socialIconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Scale(5),
  },
  socialIconBtn: {
    borderWidth: 0.5,
    backgroundColor: "#fff",
    borderRadius: Scale(5),
    height: Scale(50),
    width: Scale(90),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  socialIcon: {
    height: Scale(25),
    width: Scale(25),
  },
  signUpView: {
    flexDirection: "row",
    marginTop: Scale(50),
    alignSelf: "center",

  },
  accountTxt: {
    color: "#000",
    fontWeight: "bold",
    opacity: 0.7,
    fontSize: Scale(14),
  },
});
// Customizable Area End
