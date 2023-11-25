import React from 'react';

//Customizable Area Start
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image
} from 'react-native';

import { AppHeader } from '../../../components/src/AppHeader';
import { appLogo, backArrow } from './assets';
import Scale from '../../../components/src/Scale';
import Loader from '../../../components/src/Loader';
import Icon from 'react-native-vector-icons/FontAwesome5';
//Customizable Area End

import ForgotPasswordController, { Props } from './ForgotPasswordController';

export default class ForgotPasswordEmail extends ForgotPasswordController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start

    const { navigation } = this.props;
    // console.log("reset", this.state.resetEmail);
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.containerMobile}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('EmailAccountLoginBlock')}>
            <Image source={backArrow} style={{ height: Scale(20), width: Scale(20), marginTop: Scale(25), marginLeft: Scale(10) }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => this.hideKeyboard()}>
            <View style={styles.mainView}>
              <Image source={appLogo} style={{ height: Scale(70), width: Scale(70) }} resizeMode='contain' />
              <Text style={styles.forgotText}>Forgot Password</Text>
              <Text style={[styles.descText, { marginTop: Scale(20) }]}>Enter your registered email address</Text>
              <Text style={styles.descText}>to receive password reset information</Text>
              <Text style={styles.emailTxt}>Email</Text>
              <View style={styles.emailView}>
                <TextInput
                  style={styles.emailTextInput}
                  placeholder='Enter your email here'
                  value={this.state.resetEmail}
                  onChangeText={(value) => this.setState({ resetEmail: value })} />
              </View>
              {this.state.isValidEmail != "" &&
                <Text style={{ color: 'red', textAlign: 'center', marginHorizontal: Scale(40), marginTop: Scale(4), fontWeight: '600', opacity: 0.7 }}>{this.state.isValidEmail}</Text>
              }
              <TouchableOpacity style={styles.saveBtn} onPress={() => this.onClickSendOTP()}>
                <Text style={styles.saveText}>Send OTP</Text>
              </TouchableOpacity>
              <Loader loading={this.state.isLoading} style={{}} />
            </View>

          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ScrollView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  containerMobile: {
    flex: 1,
    backgroundColor: '#fff',
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
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: Scale(5),
    // padding: 25
  },
  emailTextInput: {
    backgroundColor: '#fff',
    borderRadius: Scale(10),
    marginHorizontal: Scale(10),
    fontSize: Scale(16),
    // fontWeight: 'bold',
    height: Scale(60)
  },
  saveBtn: {
    marginTop: Scale(60),
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveText: {
    fontWeight: '600',
    fontSize: Scale(18),
    color: '#fff',
  },
});
// Customizable Area End
