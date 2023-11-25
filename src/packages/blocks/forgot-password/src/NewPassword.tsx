import React from "react";

import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { appLogo, backArrow } from "./assets";
import Scale from "../../../components/src/Scale";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Loader from "../../../components/src/Loader";
import NewPasswordController, { Props } from "./NewPasswordController";

export default class NewPassword extends NewPasswordController {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.containerMobile}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backArrow} style={{ height: Scale(20), width: Scale(20), marginTop: Scale(25), marginLeft: Scale(10) }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => this.hideKeyboard()}>
            <View style={styles.mainView}>
              <Image source={appLogo} style={{ height: Scale(70), width: Scale(70) }} resizeMode='contain' />
              <Text style={styles.forgotText}>Reset Password</Text>
              <Text style={[styles.descText, { marginTop: Scale(20) }]}>Generate your new password</Text>
              <Text style={styles.emailTxt}>Enter new password</Text>
              <View style={[styles.emailView, { bottom: Scale(0), flexDirection: 'row', alignItems: 'center', marginTop: Scale(10), borderWidth: Scale(1), borderColor: this.state.isValidNewResetPasswordPassword ? 'red' : '#fff' }]}>
                <TextInput
                  style={[styles.emailTextInput, { width: '80%' }]}
                  placeholder='********************'
                  value={this.state.newResetPassword}
                  maxLength={50}
                  secureTextEntry={!this.state.isNewResetPasswordVisible}
                  // onChangeText={(text) => this.onChangeLoginPassword(text)} 
                  onChangeText={(text) => this.onChangeNewResetPassword(text)}
                />
                <TouchableOpacity onPress={() => this.setState({ isNewResetPasswordVisible: !this.state.isNewResetPasswordVisible })}>
                  {this.state.isNewResetPasswordVisible ?
                    <Icon name="eye-slash" size={25} color="blue" /> :
                    <Icon name="eye" size={25} color="blue" />
                  }
                </TouchableOpacity>
              </View>
              {this.state.isValidNewResetPasswordPassword &&
                <Text style={{ color: 'red', textAlign: 'center', marginHorizontal: Scale(40), marginTop: Scale(4), fontWeight: '600', opacity: 0.7 }}>Password must contain a minimum of 8 and a maximum of 50 characters, Atleast One number, One lowercase, One Uppercase
                  and One special character</Text>
              }
              <Text style={styles.emailTxt}>Confirm new password</Text>
              <View style={[styles.emailView, { bottom: Scale(3), flexDirection: 'row', alignItems: 'center', marginTop: Scale(10), borderWidth: Scale(1), borderColor: this.state.isValidResetPasswordMatch ? 'red' : '#fff' }]}>
                <TextInput
                  style={[styles.emailTextInput, { width: '80%',}]}
                  placeholder='********************'
                  maxLength={50}
                  value={this.state.newConfirmResetPassword}
                  secureTextEntry={!this.state.isNewConfirmResetPasswordVisible}
                  // onChangeText={(text) => this.onChangeLoginPassword(text)} 
                  onChangeText={(text) => this.onChangeConfirmResetPassword(text)} />
                <TouchableOpacity onPress={() => this.setState({ isNewConfirmResetPasswordVisible: !this.state.isNewConfirmResetPasswordVisible })}>
                  {this.state.isNewConfirmResetPasswordVisible ?
                    <Icon name="eye-slash" size={25} color="blue" /> :
                    <Icon name="eye" size={25} color="blue" />
                  }
                </TouchableOpacity>
              </View>
              {this.state.isValidResetPasswordMatch &&
                <Text style={{ color: 'red', textAlign: 'center', marginHorizontal: Scale(40), marginTop: Scale(4), fontWeight: '600', opacity: 0.7 }}>Passwords does not match.</Text>
              }
              <TouchableOpacity style={styles.saveBtn} onPress={() => this.onClickSubmit()} disabled={this.state.isValidResetPasswordMatch}>
                <Text style={styles.saveText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
          <Loader loading={this.state.isLoading} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerMobile: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(80),
    backgroundColor: '#fff',
    bottom: Scale(10)
  },
  forgotText: {
    fontSize: Scale(22),
    fontWeight: 'bold',
    color: 'blue',
    marginTop: Scale(80)
  },
  descText: {
    color: 'gray',
    textAlign: 'center',
  },
  emailTxt: {
    alignSelf: 'flex-start',
    marginTop: Scale(25),
    marginHorizontal: Scale(21),
    fontWeight: 'bold'
  },
  emailView: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding:1
  },
  emailTextInput: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    marginHorizontal: Scale(10),
    fontSize: Scale(16),
    // fontWeight: 'bold',
    height: Scale(55)
  },
  saveBtn: {
    marginTop: Scale(60),
    width: '90%',
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
  saveText: {
    fontWeight: "600",
    fontSize: Scale(18),
    color: "#fff",
  },
});
