import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  Modal
} from "react-native";

import { AppHeader } from '../../../components/src/AppHeader';
import { backArrow, rightArrow, avatar } from './assets';
import PhoneInput from 'react-native-phone-number-input';
import RightArrow from 'react-native-vector-icons/AntDesign'
import Scale from "../../../components/src/Scale";
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../../../components/src/Loader';
// Customizable Area End

import UserProfileBasicController, {
  Props
} from "./UserProfileBasicController";

export default class UserProfileBasicBlock extends UserProfileBasicController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        behavior={this.isPlatformiOS() ? "padding" : undefined}
        style={{ flex: 1 }}>
        <AppHeader
          title={'Profile'}
          back={backArrow}
          onPressBack={
            //istanbul ignore next
            () => navigation.goBack()}
          menu={undefined}
          logo={undefined}
          search={undefined}
          bell={undefined}
          onPress={() => { }}
          onPressNotification={() => { }}
          onPressSearch={() => { }}
          searchScreen={false} backArrow={undefined} />
        <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
          <TouchableWithoutFeedback onPress={() => { this.hideKeyboard() }} testID="onClickBackground">
            <View style={styles.container}>
              {
                this.state.profileImage ?
                  <View>
                    <ImageBackground source={{ uri: 'data:image/jpeg;base64,' + this.state.profileImage.data }} style={styles.userImage} imageStyle={{ borderRadius: Scale(50) }}>
                      <TouchableOpacity style={styles.cameraView} onPress={() => this.setState({ modalVisible: true })} testID="gallaryModalId">
                        <Icon name='camera' color={'#fff'} size={15} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View> :
                  <View>
                    <ImageBackground testID="imageBackground" source={this.state.profilePicture ? { uri: this.state.profilePicture } : avatar} style={styles.userImage} imageStyle={{ borderRadius: Scale(50) }}
                      onLoadStart={() => this.setState({ imageLoader: true })} onLoadEnd={() => this.setState({ imageLoader: false })}>
                      <Loader loading={this.state.imageLoader} />
                      <TouchableOpacity style={styles.cameraView} onPress={() => this.onClickChangeProfile()} testID="onClickChangeProfile">
                        <Icon name='camera' color={'#fff'} size={15} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
              }

              <Text style={styles.nameStyle}>{this.state.userName}</Text>
              <View style={styles.basicDetailView}>
                <Text style={styles.basicText}>Basic details</Text>
                <View style={styles.detailsView}>
                  <View style={styles.detailView}>
                    <Text style={styles.textStyle}>Full Name</Text>
                    <TextInput
                      testID="userTextInput"
                      style={[styles.textInputStyle, { overflow: 'hidden', }]}
                      placeholder='Enter name'
                      value={this.state.name}
                      numberOfLines={1}
                      maxLength={25}
                      onChangeText={(text) => this.onChangeName(text)} />
                  </View>
                  <View style={styles.lineView} />
                  <View style={[styles.detailView, { marginTop: Scale(20) }]}>
                    <Text style={styles.textStyle}>Email</Text>
                    <Text style={styles.emailText} numberOfLines={1}>{this.state.email}</Text>
                  </View>
                  <View style={[styles.lineView, { marginTop: Scale(15) }]} />
                  <View style={[styles.detailView,{backgroundColor:'transparent',marginTop:Scale(5)}]}>
                    <Text style={styles.textStyle}>MobileNo</Text>
                    {this.state.isVisible &&
                    <PhoneInput
                      ref={(ref) => {
                        this.phoneInput = ref;
                      }}
                      defaultValue={this.state.mobile}
                      defaultCode={this.state.code?.cca2}
                      layout='second'
                      value={this.state.mobile}
                      placeholder='Mobile Number'
                      onChangeText={(text) => this.onChangeMobileNo(text)}
                      onChangeFormattedText ={(text) => this.onChangeFormattedMobileNo(text)}
                      onChangeCountry={(code) => this.onChangeCountryCode(code)}
                      countryPickerProps={{ withAlphaFilter: true }}
                      textContainerStyle={styles.textContainerStyle}
                      containerStyle={styles.containerStyle}
                      textInputStyle={styles.textInputStyle1}
                      countryPickerButtonStyle={styles.countryPickerButtonStyle}
                      textInputProps={{
                        // maxLength: 10,
                        value: this.state.mobile,
                        
        
                      }}
                    /> }
                    {/* <TextInput
                      testID="mobileTextInput"
                      style={styles.textInputStyle}
                      placeholder=''
                      value={this.state.mobile}
                      maxLength={12}
                      onChangeText={(text) => this.onChangeMobileNo(text)} /> */}
                  </View>
                  <View style={styles.lineView} />
                </View>
              </View>
              <Text style={styles.mobileNoErrorMsg}>{this.state.isValidMobileNumber ? "" : "invalid mobile number"}</Text>
              <TouchableOpacity testID="changePasswordBtn" style={styles.changePswrdBtn} onPress={() => navigation.navigate('ChangePassword')}>
                <Text style={styles.changePswrdText}>Change password</Text>
                <Image source={rightArrow} style={{ height: Scale(20), width: Scale(20) }} resizeMode='contain' />
              </TouchableOpacity>

              <View style={[styles.basicDetailView, { marginTop: Scale(25) }]}>
                <Text style={styles.basicText}>Subscription details</Text>
                <View style={styles.detailsView}>
                  {this.state.subscriptionDetail ?
                    <View style={{}}>
                      <View style={styles.innerDetailView}>
                        <View style={styles.activeSubscriptionBtn}>
                          <Text style={styles.activeSubscriptionText}>{this.state.subscriptionDetail.status ? 'Inactive Subscription' : 'Active Subscription'}</Text>
                        </View>
                        <View style={styles.subDetailView}>
                          <Text style={styles.headingTxt}>Plan</Text>
                          <Text style={styles.subHeadingTxt}>{this.state.subscriptionDetail.subscription_details?.plan}</Text>
                        </View>
                        <View style={styles.subDetailView}>
                          <Text style={styles.headingTxt}>Billing Amount</Text>
                          <Text style={styles.subHeadingTxt}>{this.state.subscriptionDetail.subscription_details?.billing_amount + '/month'}</Text>
                        </View>
                        <View style={styles.subDetailView}>
                          <Text style={styles.headingTxt}>Next Bill Date</Text>
                          <Text style={styles.subHeadingTxt}>{this.state.subscriptionDetail.subscription_details?.next_bill_date}</Text>
                        </View>
                        <View style={styles.subDetailView}>
                          <Text style={styles.headingTxt}>Plan Features</Text>
                          <Text style={styles.subHeadingTxt}>{this.state.subscriptionDetail.subscription_details?.plan_features}</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.changePlanBtn}>
                        <Text style={styles.changePlanTxt}>Change Plan</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.cancelSubsView} testID="cancelSubscriptionBtn" onPress={() => this.setState({ cancelSubscriptionModel: true })}>
                        <Text style={styles.cancelSubsText}>Cancel Subscription</Text>
                        <RightArrow name="right" size={15} color='blue' style={{ top: 1 }} />
                      </TouchableOpacity>
                    </View> :
                    <View style={[styles.noDataView, { marginTop: Scale(30) }]}>
                      <Text style={styles.noDataTxt}>No subscription found</Text>
                    </View>}
                </View>
              </View>

              <TouchableOpacity style={styles.saveBtn} testID="updateProfileBtn" disabled={this.state.enable} onPress={() => this.onClickUpdateProfile()}>
                <Text style={styles.saveText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({ modalVisible: false });
              this.props.navigation.goBack();
            }}>
            <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })} testID="onClickOutSide">
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Select Option</Text>
                  <TouchableOpacity testID="onClickCamera" onPress={() => this.onClickCamera('Camera')} style={{ height: 40, width: '100%', backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity testID="onClickCameraIcon" onPress={() => this.onClickCamera('Gallery')} style={{ height: 40, width: '100%', backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>Gallery</Text>
                  </TouchableOpacity>
                  <View style={{ position: 'absolute', bottom: 25, height: 40, width: '100%' }}>
                    <TouchableOpacity onPress={() => {
                      this.setState({ modalVisible: !this.state.modalVisible })
                    }} testID="cancelBtn"
                      style={{ height: 40, width: '100%', backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center', }}>
                      <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.cancelSubscriptionModel}
            onRequestClose={() => this.setState({ cancelSubscriptionModel: false })}
            onDismiss={() => this.setState({ cancelSubscriptionModel: false })}>
            <TouchableWithoutFeedback onPress={() => this.onClickFeedbackPopup()} testID="feedbackPopup">
              <View style={styles.centeredModelView}>
                <View style={styles.modalMainView}>
                  <View style={styles.successView}>
                    <Text style={styles.successText}>Are you sure you want to cancel your subscription?</Text>
                  </View>
                  <TouchableOpacity style={styles.cancelSubsBtn}>
                    <Text style={styles.cancelSubscriptionTxt}>CANCEL SUBSCRIPTION</Text>
                  </TouchableOpacity>
                  <TouchableOpacity testID="keepPlanBtn" onPress={() => this.setState({ cancelSubscriptionModel: false })}>
                    <Text style={styles.keepPlanTxt}>Keep plan</Text>
                  </TouchableOpacity>
                  <View style={[styles.lineViewModel, { marginHorizontal: Scale(20) }]}></View>
                  <View style={styles.noteView}>
                    <Text style={styles.noteTxt}>NOTE</Text>
                    <Text style={styles.noteDescTxt}>No refund will be processed if a user cancel the subscription.</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Loader loading={this.state.isLoading} style={{}} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  userImage: {
    height: Scale(100),
    width: Scale(100),
    alignSelf: 'center',
    marginTop: Scale(40),
    borderRadius: Scale(50),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cameraView: {
    backgroundColor: 'blue',
    height: Scale(25),
    width: Scale(25),
    borderRadius: Scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    left: Scale(30),
  },
  basicText: {
    fontSize: Scale(16),
    fontWeight: 'bold',
    marginHorizontal: Scale(28)
  },
  nameStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: Scale(16),
    marginTop: Scale(5)
  },
  basicDetailView: {
    marginTop: Scale(60),
    marginBottom: 5,
  },
  detailsView: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(15),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: Scale(10),
    paddingBottom: Scale(25),
    marginTop: Scale(5)
  },
  detailView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Scale(15),
    flexDirection: 'row',
    marginTop: Scale(15),
  },
  lineView: {
    borderWidth: 0.7,
    opacity: .1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(5),
    marginHorizontal: Scale(15),
  },
  lineViewModel: {
    borderWidth: 0.7,
    opacity: .1,
    elevation: 2,
    borderColor: '#000',
    marginTop: Scale(20),
    width: '85%'
  },
  textStyle: {
    fontWeight: '600',
    fontSize: Scale(16)
  },
  changePswrdBtn: {
    marginTop: Scale(30),
    width: '93%',
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: Scale(10),
    alignItems: "center",
    backgroundColor: "#fff",
    padding: Scale(20),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  changePswrdText: {
    fontWeight: "600",
    fontSize: Scale(16),
    color: "#000",
  },
  saveBtn: {
    marginTop: Scale(50),
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 220,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 25,
    paddingTop: 10
  },
  textInputStyle: {
    width: '55%',
    fontSize: Scale(16),
    backgroundColor: '#fff',
    height: 40
  },
  emailText: {
    width: '55%',
    fontSize: Scale(16),
  },
  // Subscription Styles
  innerDetailView: {
    marginHorizontal: Scale(12),
    marginVertical: Scale(12)
  },
  activeSubscriptionBtn: {
    backgroundColor: 'blue',
    borderRadius: Scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    padding: Scale(7),
    marginVertical: Scale(8)
  },
  activeSubscriptionText: {
    color: '#fff',
    opacity: 0.9,
  },
  subDetailView: {
    marginVertical: Scale(10)
  },
  headingTxt: {
    opacity: 0.5,
    fontWeight: '500',
    fontSize: Scale(14),
  },
  subHeadingTxt: {
    color: "#000",
    fontWeight: '500',
    fontSize: Scale(16),
    marginTop: Scale(5),
  },
  changePlanBtn: {
    padding: Scale(18),
    backgroundColor: '#e0ebeb',
    borderRadius: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Scale(12),
    marginTop: Scale(10)
  },
  changePlanTxt: {
    fontWeight: '500',
    fontSize: Scale(16),
    color: 'blue'
  },
  cancelSubsView: {
    flexDirection: 'row',
    marginHorizontal: Scale(17),
    alignItems: 'center',
    marginTop: Scale(15),
  },
  cancelSubsText: {
    fontSize: Scale(12),
    color: 'blue'
  },
  centeredModelView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalMainView: {
    width: '90%',
    borderRadius: Scale(10),
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    paddingTop: Scale(10),
    paddingVertical: Scale(25)
  },
  successView: {
    marginHorizontal: Scale(80),
    marginTop: Scale(20)
  },
  successText: {
    fontSize: Scale(16),
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: Scale(20)
  },
  cancelSubsBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: Scale(15),
    marginTop: Scale(30),
    borderRadius: Scale(8),
  },
  cancelSubscriptionTxt: {
    fontSize: Scale(14),
    fontWeight: '500',
    color: '#fff',
    opacity: 0.8
  },
  keepPlanTxt: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: Scale(20),
  },
  noteView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(20),
  },
  noteTxt: {
    fontSize: Scale(14),
    fontWeight: 'bold'
  },
  noteDescTxt: {
    marginHorizontal: Scale(95),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: Scale(5)
  },
  noDataView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataTxt: {
    color: 'gray',
    fontWeight: 'bold'
  },
  textContainerStyle: {
    backgroundColor: 'transparent',
    width: '100%',
    height: Scale(50),
    marginLeft:0
  },
  containerStyle: {
    backgroundColor: 'transparent',
    width: '75%',
    height: Scale(50),
    paddingLeft: Scale(10),
    paddingRight: Scale(10),
    // marginLeft:15
  },
  textInputStyle1: {
    backgroundColor: 'transparent',
    height: Scale(50),
    fontSize: Scale(16),
    color: '#000',
    right:Scale(15)
  },
  countryPickerButtonStyle: {
    width: Scale(60),
    height: Scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    right:Scale(10)
  },
  mobileNoErrorMsg:{
    color: "red",
    textAlign: "center",
    marginHorizontal: Scale(40),
    marginTop: Scale(4),
    fontWeight: "600",
    opacity: 0.7,
  }
});
// Customizable Area End

