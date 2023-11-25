import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Modal,
  Platform,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import ContactusController, { Props } from "./ContactusController";
import { AppHeader } from "../../../components/src/AppHeader";
import { backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
import Icon from 'react-native-vector-icons/Fontisto'
const configJSON = require("./config");

export default class Contactus extends ContactusController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      /* Customizable Area Start */
      <View style={styles.container}>
        <AppHeader title={'Support'} back={backArrow} onPressBack={() => navigation.goBack()} />
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={{ backgroundColor: "#fff" }}
          >
            <TouchableWithoutFeedback
              testID={"Background"}
              onPress={() => this.hideKeyboard()}
            >
              <View>
                <TextInput placeholder="Username"
                  value={this.state.messageType}
                  onChangeText={(text) => this.setState({ messageType: text })}
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 400,
                  }} />
                  <TextInput placeholder="Username"
                  value={this.state.messageType}
                  onChangeText={(text) => this.setState({ messageType: text })}
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                  }} />
                  <TextInput placeholder="Username"
                  value={this.state.messageType}
                  onChangeText={(text) => this.setState({ messageType: text })}
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                  }} />
                  <TextInput placeholder="Username"
                  value={this.state.messageType}
                  onChangeText={(text) => this.setState({ messageType: text })}
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                  }} />
                  <TextInput placeholder="Username"
                  value={this.state.messageType}
                  onChangeText={(text) => this.setState({ messageType: text })}
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                  }} />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView> */}
        <ScrollView>
          <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
              <View style={styles.aboutView}>
                <Text style={styles.aboutTxt}>About Gamma</Text>
                <Text style={styles.aboutDescTxt}>{configJSON.aboutDescription}</Text>
              </View>
              <View style={styles.aboutView}>
                <Text style={styles.aboutTxt}>How to buy subscription?</Text>
                <Text style={styles.aboutDescTxt}>{configJSON.aboutDescription}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.sendEmailnBtn} onPress={() => this.props.navigation.navigate('AddContactus')}>
          <Icon name="email" size={25} color="blue" style={{ left: Scale(5) }} />
          <Text style={styles.signInText}>Send us an E-mail</Text>
          <Icon name="angle-right" size={20} color="black" style={{ left: Scale(130) }} />
        </TouchableOpacity>
      </View>
      /* Customizable End Start */
      //Merge Engine End DefaultContainer
    );
  }
}
// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  aboutView: {
    marginHorizontal: Scale(20),
    marginTop: Scale(25)
  },
  aboutTxt: {
    color: '#000',
    fontSize: Scale(16),
    fontWeight: 'bold'
  },
  aboutDescTxt: {
    color: '#000',
    fontSize: Scale(16),
    fontWeight: '500',
    marginTop: Scale(10),
    lineHeight: Scale(22),
    letterSpacing: 0.5
  },
  sendEmailnBtn: {
    width: '90%',
    borderRadius: Scale(10),
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "white",
    padding: Scale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    alignSelf: 'center',
    bottom: Scale(20)
    // marginTop: Scale(220)
  },
  signInText: {
    fontWeight: "600",
    fontSize: Scale(18),
    color: "#000",
    opacity: 0.7,
    marginLeft: Scale(20)
  },

});
