import React from "react";

// Customizable Area Start
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Modal,
  Image,
  SafeAreaView,
} from "react-native";

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import Scale, { verticalScale } from "../../../components/src/Scale";
import { Dropdown } from "react-native-element-dropdown";
import { AppHeader } from "../../../components/src/AppHeader";
import { backArrow, success } from "./assets";
import Icon from "react-native-vector-icons/Feather";
import { Rating, AirbnbRating } from "react-native-ratings";
import Loader from "../../../components/src/Loader";

import ContactusController, { Props, configJSON } from "./ContactusController";
import { scaledSize } from "../../../framework/src/Utilities";

export default class AddContactus extends ContactusController {
  constructor(props: Props) {
    super(props);
  }

  renderItem = (item: any) => {
    // console.log("item", item);
    return (
      <View style={styles.item}>
        <View
          style={[
            styles.checkBox,
            { backgroundColor: item.isSelected ? "blue" : "#fff" },
          ]}
        >
          <Icon name="check" size={18} color="#fff" />
        </View>
        <Text
          style={{
            fontSize: Scale(14),
            color: item.isSelected ? "blue" : "#000",
          }}
        >
          {item.label}
        </Text>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    console.log("this.inputRef", this.inputRef);
    // console.log("this.state.messageType", this.state.messageType);
    return (
      // <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <AppHeader
          title={"Feedback"}
          back={backArrow}
          onPressBack={() => navigation.goBack()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.keyboardPadding}
        >
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={{}}
            ref={(component) => {
              this.inputRef = component;
            }}
          >
            <TouchableWithoutFeedback
              testID={"Background"}
              style={{ backgroundColor: "red", flex: 1 }}
              onPress={() => this.onPressBackScreen()}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  marginHorizontal: Scale(15),
                  marginVertical: 15,
                }}
              >
                <Text style={[styles.txtName, { marginTop: Scale(0) }]}>
                  User name
                </Text>
                <View
                  style={[
                    styles.emailView,
                    { flexDirection: "row", justifyContent: "space-between" },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.emailTextInput,
                      { width: "90%", height: Scale(45) },
                    ]}
                    placeholder="User name"
                    editable={false}
                    value={this.state.username}
                    onChangeText={(value) => this.setState({ username: value })}
                  />
                </View>
                <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
                  Enter your email
                </Text>
                <View
                  style={[
                    styles.emailView,
                    { flexDirection: "row", justifyContent: "space-between" },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.emailTextInput,
                      { width: "90%", height: Scale(45) },
                    ]}
                    placeholder="Email"
                    value={this.state.email}
                    editable={false}
                    onChangeText={(value) => this.setState({ email: value })}
                  />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
                  Application version
                </Text>
                <Text
                    style={{
                      marginTop: verticalScale(10),
                      color: "red",
                      marginRight: 10,
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
                    { flexDirection: "row", justifyContent: "space-between" },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.emailTextInput,
                      { width: "90%", height: Scale(45) },
                    ]}
                    placeholder="Version"
                    value={this.state.appVersion}
                    onChangeText={(value) =>
                      this.setState({ appVersion: value })
                    }
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
                    Preferred language
                  </Text>
                  <Text
                    style={{
                      marginTop: verticalScale(10),
                      color: "red",
                      marginRight: 10,
                      fontSize: Scale(16),
                      fontWeight: "bold",
                    }}
                  >
                    *
                  </Text>
                </View>

                <View style={styles.languageView}>
                  <TouchableOpacity
                    style={[
                      styles.languageButton,
                      {
                        backgroundColor:
                          this.state.language == "English" ? "blue" : "#fff",
                      },
                    ]}
                    onPress={() => this.selectLanguage("english")}
                  >
                    <Text
                      style={{
                        fontSize: Scale(14),
                        fontWeight: "bold",
                        opacity: this.state.language == "English" ? null : 0.5,
                        color:
                          this.state.language == "English" ? "#fff" : "#000",
                      }}
                    >
                      English
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.languageButton,
                      {
                        backgroundColor:
                          this.state.language == "Hindi" ? "blue" : "#fff",
                      },
                    ]}
                    onPress={() => this.selectLanguage("hindi")}
                  >
                    <Text
                      style={{
                        fontSize: Scale(14),
                        fontWeight: "bold",
                        opacity: this.state.language == "Hindi" ? null : 0.5,
                        color: this.state.language == "Hindi" ? "#fff" : "#000",
                      }}
                    >
                      Hindi
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
                    Nature of message
                  </Text>
                  <Text
                    style={{
                      marginTop: verticalScale(10),
                      color: "red",
                      marginRight: 10,
                      fontSize: Scale(16),
                      fontWeight: "bold",
                    }}
                  >
                    *
                  </Text>
                </View>

                <Dropdown
                  style={styles.containerDrop}
                  containerStyle={[styles.shadow, { width: "90%" }]}
                  data={this.state.messageDropdown}
                  dropdownPosition="bottom"
                  labelField="label"
                  valueField="label"
                  placeholder="Select one"
                  placeholderStyle={{
                    color: "gray",
                    fontWeight: "500",
                    left: 10,
                  }}
                  value={this.state.messageType}
                  onChange={(item) => this.onChange(item)}
                  renderItem={(item) => this.renderItem(item)}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      styles.txtName,
                      { marginTop: Scale(10), opacity: 0.5 },
                    ]}
                  >
                    Your description
                  </Text>
                  <Text
                    style={{
                      marginTop: verticalScale(10),
                      color: "red",
                      marginRight: 10,
                      fontSize: Scale(16),
                      fontWeight: "bold",
                    }}
                  >
                    *
                  </Text>
                </View>

                <View style={styles.descriptionView}>
                  <TextInput
                    onFocus={() => this.OnFocusDescription()}
                    style={[styles.emailTextInput, { width: "95%" }]}
                    multiline={true}
                    placeholder="Your description"
                    value={this.state.description}
                    onChangeText={(value) => this.onChangeDescription(value)}
                  />
                </View>
                {this.state.messageType == "Support ticket" && (
                  <View>
                    <Text
                      style={[
                        styles.txtName,
                        { marginTop: Scale(10), opacity: 1 },
                      ]}
                    >
                      Attachment{" "}
                      <Text style={{ fontSize: Scale(14), color: "gray" }}>
                        {" "}
                        Optional
                      </Text>
                    </Text>
                    {this.state.file ? (
                      <Image
                        source={{
                          uri:
                            "da,height: Scale(45)ta:image/jpeg;base64," +
                            this.state.file.data,
                        }}
                        style={styles.attachmentStyle}
                      />
                    ) : (
                      <TouchableOpacity
                        style={[styles.attachFileBtn, {}]}
                        onPress={() => this.onPressAttachFile()}
                      >
                        <Text
                          style={{ fontSize: Scale(14), fontWeight: "500" }}
                        >
                          Attach file
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
                {this.state.messageType == "Feedback" && (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={[
                          styles.txtName,
                          { marginTop: Scale(10), opacity: 1 },
                        ]}
                      >
                        Rating
                      </Text>
                      <Text
                        style={[
                          styles.txtName,
                          { marginTop: Scale(10), opacity: 0.5 },
                        ]}
                      >
                        {this.state.ratingType}
                      </Text>
                    </View>
                    <View style={[styles.ratingView, {}]}>
                      <AirbnbRating
                        count={5}
                        reviews={[]}
                        reviewSize={0}
                        defaultRating={0}
                        size={30}
                        onFinishRating={(value) => this.onSelectRating(value)}
                        starContainerStyle={{
                          justifyContent: "space-between",
                          width: "85%",
                          bottom: 10,
                        }}
                      />
                    </View>
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
          <Loader loading={this.state.isLoading} style={{}} />
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.feedbackSuccessPopup}
            onRequestClose={() =>
              this.setState({ feedbackSuccessPopup: false })
            }
            onDismiss={() => this.setState({ feedbackSuccessPopup: false })}
          >
            <TouchableWithoutFeedback
              onPress={() => this.onClickFeedbackPopup()}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image
                    source={success}
                    style={styles.successImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.successText}>
                    Thanks for reaching out to us. Your query/feedback is
                    submitted to the Gamma team and we will reach out to you
                    shortly.{" "}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => this.sendFeedback()}
        >
          <Text style={styles.saveText}>SEND EMAIL</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardPadding: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  goBack: {
    marginLeft: 16,
  },
  txtName: {
    color: "#000",
    fontSize: Scale(15),
    fontWeight: "bold",
    opacity: 0.5,
  },
  emailView: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: Scale(10),
    padding: 5,
    alignSelf: "center",
  },
  ratingView: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: Scale(10),
    padding: 5,
    alignSelf: "center",
  },
  descriptionView: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    marginTop: Scale(10),
    padding: Scale(5),
    // paddingVertical:Scale(40),
    alignSelf: "center",
    height: Scale(160),
  },
  emailTextInput: {
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    marginHorizontal: Scale(5),
    fontSize: Scale(16),
    fontWeight: "500",
    // height: Scale(45)
  },
  languageView: {
    flexDirection: "row",
    marginTop: Scale(10),
  },
  languageButton: {
    height: Scale(50),
    width: "25%",
    borderRadius: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    margin: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerDrop: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: Scale(10),
    marginHorizontal: Scale(0),
    padding: Scale(13),
    // paddingVertical: Scale(0),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
    marginTop: Scale(10),
  },
  dropDown: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: Scale(0),
    borderRadius: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
    marginTop: Scale(10),
    marginHorizontal: Scale(15),
  },
  item: {
    padding: Scale(17),
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    height: Scale(20),
    width: Scale(20),
    borderRadius: Scale(10),
    borderWidth: 1,
    borderColor: "blue",
    marginRight: Scale(10),
    justifyContent: "center",
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
  attachFileBtn: {
    height: Scale(50),
    width: "25%",
    borderRadius: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    margin: Scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    backgroundColor: "#fff",
  },
  attachmentStyle: {
    height: Scale(50),
    width: "25%",
    borderRadius: Scale(5),
  },
  saveBtn: {
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: Scale(10),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: Scale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(2),
    // bottom: Scale(10),
  },
  saveText: {
    fontWeight: "600",
    fontSize: Scale(16),
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: Scale(230),
    width: "80%",
    borderRadius: Scale(10),
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    paddingTop: Scale(10),
  },
  successImage: {
    height: Scale(80),
    width: Scale(80),
    marginTop: Scale(20),
  },
  successText: {
    color: "#000",
    fontSize: Scale(16),
    fontWeight: "800",
    marginHorizontal: Scale(20),
    textAlign: "center",
    // lineHeight:Scale(10),
    letterSpacing: 1.5,
    marginTop: Scale(10),
  },
});
