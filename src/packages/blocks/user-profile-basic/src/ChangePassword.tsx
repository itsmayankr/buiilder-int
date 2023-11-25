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
} from 'react-native';

import { AppHeader } from '../../../components/src/AppHeader';
import { backArrow } from './assets';
import Scale from '../../../components/src/Scale';
import Loader from '../../../components/src/Loader';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Customizable Area End

import ChangePasswordController, { Props } from './ChangePasswordController';

export default class ChangePassword extends ChangePasswordController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
        behavior={this.isPlatformiOS() ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <AppHeader
          title={'Change password'}
          back={backArrow}
          onPressBack={() => navigation.goBack()}
          menu={undefined}
          logo={undefined}
          search={undefined}
          bell={undefined}
          onPress={() => {}}
          onPressNotification={() => {}}
          onPressSearch={() => {}}
          searchScreen={false}
          backArrow={undefined}
        />
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.containerMobile}
        >
          <TouchableWithoutFeedback onPress={() => this.hideKeyboard()}>
            <View style={styles.mainView}>
              <View style={styles.changePswrdBtn}>
                <Text style={styles.changePswrdText}>Current password</Text>
                <TextInput
                  style={[styles.textInputStyle, { marginLeft: Scale(5) }]}
                  placeholder='******************'
                  value={this.state.oldPassword}
                  secureTextEntry={!this.state.isOldPasswordVisible}
                  onChangeText={(value) =>
                    this.setState({ oldPassword: value })
                  }
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isOldPasswordVisible: !this.state
                        .isOldPasswordVisible,
                    })
                  }
                >
                  {this.state.isOldPasswordVisible ? (
                    <Icon name='eye-slash' size={25} color='gray' />
                  ) : (
                    <Icon name='eye' size={25} color='gray' />
                  )
                  // <Image source={imgPasswordInVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} /> :
                  // <Image source={imgPasswordVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} />
                  }
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.changePswrdBtn,
                  {
                    marginTop: Scale(10),
                    borderColor:
                      this.state.isValidPassword ? 'red' : '#fff',
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={styles.changePswrdText}>New password</Text>
                <TextInput
                  style={[styles.textInputStyle, { marginLeft: Scale(25) }]}
                  placeholder='******************'
                  value={this.state.newPassword}
                  secureTextEntry={!this.state.isNewPasswordVisible}
                  onChangeText={(text) => this.onChangeNewPassword(text)}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isNewPasswordVisible: !this.state
                        .isNewPasswordVisible,
                    })
                  }
                >
                  {this.state.isNewPasswordVisible ? (
                    <Icon name='eye-slash' size={25} color='gray' />
                  ) : (
                    <Icon name='eye' size={25} color='gray' />
                  )
                  // <Image source={imgPasswordInVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} /> :
                  // <Image source={imgPasswordVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} />
                  }
                </TouchableOpacity>
              </View>
              {this.state.isValidPassword && (
                <Text
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    marginHorizontal: Scale(40),
                    marginTop: Scale(4),
                    fontWeight: '600',
                    opacity: 0.7,
                  }}
                >
                  Password must contain minimum 8 characters, Atleast One
                  number, One lowercase, One Uppercase and One special
                  character
                </Text>
              )}
              <View
                style={[
                  styles.changePswrdBtn,
                  {
                    marginTop: Scale(10),
                    borderColor:
                      this.state.isValidPasswordMatch
                        ? 'red'
                        : '#fff',
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={styles.changePswrdText}>Confirm password</Text>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder='******************'
                  value={this.state.confirmPassword}
                  secureTextEntry={!this.state.isConfirmPasswordVisible}
                  onChangeText={(text) =>
                    this.onChangeConfirmPassword(text)
                  }
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isConfirmPasswordVisible: !this.state
                        .isConfirmPasswordVisible,
                    })
                  }
                >
                  {this.state.isConfirmPasswordVisible ? (
                    <Icon name='eye-slash' size={25} color='gray' />
                  ) : (
                    <Icon name='eye' size={25} color='gray' />
                  )
                  // <Image source={imgPasswordInVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} /> :
                  // <Image source={imgPasswordVisible} style={{ height: 30, width: 30, tintColor: 'blue' }} />
                  }
                </TouchableOpacity>
              </View>
              {this.state.isValidPasswordMatch && (
                <Text
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    marginHorizontal: Scale(40),
                    marginTop: Scale(4),
                    fontWeight: '600',
                    opacity: 0.7,
                  }}
                >
                  {this.state.passwordMatch}
                </Text>
              )}
              <Loader loading={this.state.isLoading} />
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => this.onClickChangePassword()}
              >
                <Text style={styles.saveText}>SAVE PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
    // Merge Engine - render - End
    // Cusomizable Area End
  }
}

// Cusomizable Area Start
const styles = StyleSheet.create({
  containerMobile: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  changePswrdBtn: {
    marginTop: Scale(30),
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: Scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changePswrdText: {
    fontWeight: '600',
    fontSize: Scale(16),
    color: '#000',
  },
  textInputStyle: {
    width: '45%',
    fontSize: Scale(16),
    // fontWeight: '600',
    height: Scale(40),
    backgroundColor: '#fff',
  },
  saveBtn: {
    marginTop: Scale(250),
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
// Cusomizable Area End
