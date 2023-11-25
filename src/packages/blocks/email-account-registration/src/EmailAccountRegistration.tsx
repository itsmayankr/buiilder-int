import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Modal,
  Dimensions
} from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import PhoneInput from "react-phone-number-input/react-native-input";
import PhoneInput from "react-native-phone-number-input";
import { appLogo, check, backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
import Loader from "../../../components/src/Loader";
import RenderHtml from 'react-native-render-html';

import CountryCodeSelector from "../../country-code-selector/src/CountryCodeSelector";
import RightIcon from "react-native-vector-icons/Entypo";
import CrossIcon from "react-native-vector-icons/Entypo";
import SignUpPage1 from "./SignUpPage1";
import SignUpPage2 from "./SignUpPage2";
// Customizable Area End

import EmailAccountRegistrationController, {
  Props,
  configJSON,
} from "./EmailAccountRegistrationController";


export default class EmailAccountRegistration extends EmailAccountRegistrationController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // _renderItem = (item: any) => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={{ fontSize: Scale(14), left: Scale(10) }}>
  //         {item.label}
  //       </Text>
  //       {/* <View style={styles.checkBox}>
  //         <Image source={check} style={{ height: Scale(14), width: Scale(14) }} />
  //       </View> */}
  //     </View>
  //   );
  // };

  render() {
    const signUpPage1Props = {
      email: this.state.email,
      onChangeEmail: this.onChangeEmail,
      fullName: this.state.fullName,
      onChangeFullname: this.onChangeFullname,
      isValidMobileNo: this.state.isValidMobileNo,
      mobileNo: this.state.mobileNo,
      onChangeMobileNo: this.onChangeMobileNo,
      onChangeFormattedMobileNo: this.onChangeFormattedMobileNo,
      unFormattedMobileNo: this.state.unFormattedMobileNo,
      isValidPassword: this.state.isValidPassword,
      onChangeUnformattedMobileNo: this.onChangeUnformattedMobileNo,
      onChangeIsValidMobileNo: this.onChangeIsValidMobileNo,
      password: this.state.password,
      isPasswordVisible: this.state.isPasswordVisible,
      onChangeRegisterPassword: this.onChangeRegisterPassword,
      handlePasswordVisibility: this.handlePasswordVisibility,
      isValidPasswordMatch: this.state.isValidPasswordMatch,
      confirmPasswoord: this.state.confirmPasswoord,
      isConfirmPasswordVisible: this.state.isConfirmPasswordVisible,
      onChangeConfirmPassword: this.onChangeConfirmPassword,
      handleConfirmPasswordVisibility: this.handleConfirmPasswordVisibility,
      handleTermsAndConditionModal: this.handleTermsAndConditionModal,
      goBack1: this.goBack1,
      countryCode: this.state.countryCode,
      onChosseCountryCode: this.onChosseCountryCode,
    }

    const signUpPage2Props = {
      countryDropdown: this.state.countryDropdown,
      multiselect: this.multiselect,
      country: this.state.country,
      onChangeItem: this.onChangeItem,
      regionDropdown: this.state.regionDropdown,
      region: this.state.region,
      languageDropdown: this.state.languageDropdown,
      language: this.state.language,
      midiaHouseDropdown: this.state.midiaHouseDropdown,
      mediaHouse: this.state.mediaHouse,
      categoryDropdown: this.state.categoryDropdown,
      categories: this.state.categories,
      onClickSkipSignUp: this.onClickSkipSignUp,
      goBack: this.goBack,
    }
    const width = Dimensions.get('window').width;
    
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardPadding}
          behavior={this.isPlatformiOS() ? "padding" : undefined}
        >
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={{ backgroundColor: "#fff" }}
          >
            <TouchableWithoutFeedback
              testID={"Background"}
              onPress={() => this.hideKeyboard()}
            >
              {/* Customizable Area Start */}
              <View style={{ backgroundColor: "#fff", bottom: Scale(10) }}>
                {this.state.activeTab === "SignUp1" ? (
                  <SignUpPage1 {...signUpPage1Props} />
                ) : (
                  <SignUpPage2 {...signUpPage2Props} />
                )}
                <View style={styles.tabView}>
                  <View style={styles.tabButton}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>1</Text>
                  </View>
                  <View
                    style={[
                      styles.tabButton,
                      {
                        backgroundColor:
                          this.state.activeTab == "SignUp1" ? "#fff" : "blue",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color:
                          this.state.activeTab == "SignUp1" ? "blue" : "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </Text>
                  </View>
                </View>
                <Loader loading={this.state.isLoading} />
                {this.state.activeTab === "SignUp2" ? (
                  <TouchableOpacity
                    testID="CreateAccountButton"
                    style={styles.signInBtn}
                    onPress={() => this.onClickCreateAccount()}
                  >
                    <Text style={styles.signInText}>CREATE ACCOUNT</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    testID="NextButton"
                    style={styles.signInBtn}
                    onPress={() => this.onClickNext()}
                  >
                    <Text style={styles.signInText}>NEXT</Text>
                  </TouchableOpacity>
                )}
                <View style={styles.signUpView}>
                  <Text style={styles.accountTxt}> Already have an account? </Text>
                  <TouchableOpacity
                    testID="SignInButton"
                    onPress={() =>
                      this.props.navigation.navigate("EmailAccountLoginBlock")
                    }
                  >
                    <Text
                      style={[
                        styles.accountTxt,
                        {
                          color: "blue",
                          textDecorationLine: "underline",
                          opacity: 1,
                        },
                      ]}
                    >
                    Sign in
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <Modal
              animationType="slide"
              transparent={true}
              supportedOrientations={["portrait", "landscape"]}
              visible={this.state.isRegistered}
              onRequestClose={() => {
                this.setState({ isRegistered: false });
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      fontSize: Scale(16),
                      fontWeight: "bold",
                      marginTop: Scale(30),
                    }}
                  >
                    You have registered successfully!
                  </Text>
                  <TouchableOpacity
                    testID="modalSigninButton"
                    style={styles.signInBtn}
                    onPress={() => {
                      this.props.navigation.navigate("EmailAccountLoginBlock");
                      this.setState({ isRegistered: false });
                    }}
                  >
                    <Text
                      style={{
                        fontSize: Scale(16),
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.termsAndConditionModal}
              onRequestClose={() => {
                this.setState({ termsAndConditionModal: false });
              }}
            >
              <View style={styles.centeredTermsView}>
                <View style={styles.modalTermsView}>
                  <View style={styles.contentView}>
                    <Text
                      style={{
                        fontSize: Scale(16),
                        fontWeight: "bold",
                        textDecorationLine: "underline",
                      }}
                    >
                      Terms & Conditions
                    </Text>
                    <TouchableOpacity
                      testID="modalCrossButton"
                      onPress={() =>
                        this.setState({ termsAndConditionModal: false })
                      }
                    >
                      <CrossIcon color="black" name="cross" size={20} />
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={{ marginTop: Scale(5) }}>
                    <RenderHtml
                      contentWidth={width}
                      source={{ html: this.state.termsAndCondition }}
                      tagsStyles={{ pre: { fontSize: Scale(16), fontWeight: '400' }, p: { fontWeight: '500', padding: 0, margin: 0, fontSize: Scale(16) }, strong: { fontWeight: '500' } }}
                      classesStyles={{ fontRed: { color: 'red' } }}
                    />
                    {/* <Text style={styles.subHeading}>{this.state.termsAndCondition}</Text> */}

                  </ScrollView>
                </View>
              </View>
            </Modal>
          </ScrollView>
          {/* Customizable Area End */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // Customizable Area Start
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardPadding: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Scale(80),
    backgroundColor: "#fff",
    bottom: Scale(20),
  },
  signInTxt: {
    fontSize: Scale(22),
    fontWeight: "bold",
    color: "blue",
    marginTop: Scale(40),
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
    fontWeight: '600',
    height: Scale(45),
  },
  emailEror: {
    marginHorizontal: Scale(25),
    marginTop: Scale(5),
  },
  emailErrorText: {
    color: "red",
    fontSize: Scale(14),
    fontWeight: "600",
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
  signInBtn: {
    marginTop: Scale(20),
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
    opacity: 0.7,
  },
  signUpView: {
    flexDirection: "row",
    marginTop: Scale(7),
    alignSelf: "center",
    
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
    color: "#000",
  },
  countryPickerButtonStyle: {
    width: Scale(50),
    height: Scale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  accountTxt: {
    color: '#000',
    fontWeight: 'bold',
    opacity: 0.7,
    fontSize: Scale(14)
  },
  tabView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    height: Scale(25),
    width: Scale(25),
    borderRadius: Scale(7),
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: Scale(5),
    marginTop: Scale(25),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skipView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: Scale(16),
    fontWeight: 'bold',
    color: 'blue'
  },
  headingText: {
    fontSize: Scale(18),
    fontWeight: 'bold',
    color: '#000',
    marginTop: Scale(40),
    textAlign: "center",
    alignSelf: 'center'
  },
  txtName: {
    marginLeft: Scale(1),
    color: "#000",
    fontSize: Scale(14),
    fontWeight: '600'
  },
  dropdownContainer: {
    padding: Scale(10),
    backgroundColor: "#fff",
    minHeight: 55,
    marginTop: Scale(10),
    marginBottom: Scale(10),
    borderRadius: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  renderItemSty: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: Scale(10),
    backgroundColor: "#fff",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: Scale(15),
  },
  selectedItemView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
    backgroundColor: "#fff",
    padding: Scale(10),
    marginVertical: Scale(5),
    margin: Scale(5),
  },

  containerDrop: {
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    marginHorizontal: Scale(10),
  },
  dropDown: {
    backgroundColor: "red",
    flexDirection: "row",
    paddingVertical: Scale(10),
    borderRadius: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
    marginTop: Scale(10)
  },
  checkBox: {
    height: Scale(20),
    width: Scale(20),
    borderRadius: Scale(5),
    borderWidth: 1,
    borderColor: 'blue',
    marginRight: Scale(10),
    justifyContent: 'center', alignItems: 'center'
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  modalView: {
    height: 200,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 10,
  },
  centeredTermsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentView: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Scale(10),
    marginTop: Scale(10),
  },
  modalTermsView: {
    height: "85%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginHorizontal: Scale(15),
  },
  subHeading: {
    fontSize: Scale(17),
    fontWeight: "500",
    marginTop: Scale(5),
    letterSpacing: 0.5,
    lineHeight: Scale(22),
    marginHorizontal: Scale(10),
  },

  /* --------- */

  Container: {
    backgroundColor: "#fff",
    marginTop: Scale(10),
  },
  dropdown: {
    height: Scale(55),
    backgroundColor: "#fff",
    borderRadius: Scale(12),
    padding: Scale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
    width: "100%",
    zIndex: 1,
  },
  countryDropdown: {
    height: Scale(55),
    backgroundColor: "#fff",
    borderRadius: Scale(12),
    paddingLeft: Scale(10),
    width: "22%",
    zIndex: 1,
    // borderWidth: 1,
  },
  placeholderStyle: {
    fontSize: Scale(16),
  },
  iconStyle: {
    width: Scale(20),
    height: Scale(20),
  },
  inputSearchStyle: {
    height: Scale(40),
    fontSize: Scale(16),
  },
  icon: {
    marginRight: Scale(5),
  },
  item: {
    padding: Scale(17),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Scale(14),
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: Scale(8),
    marginRight: Scale(12),
    paddingHorizontal: Scale(12),
    paddingVertical: Scale(8),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
  },
  textSelectedStyle: {
    marginRight: Scale(5),
    fontSize: Scale(16),
  },
  // Customizable Area End
});
