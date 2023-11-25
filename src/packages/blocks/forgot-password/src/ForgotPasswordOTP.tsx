import React from "react";

//Customizable Area Start
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    SafeAreaView
} from "react-native";

import ForgotPasswordOTPController, { Props } from "./ForgotPasswordOTPController";
import { AppHeader } from '../../../components/src/AppHeader';
import { backArrow, appLogo } from './assets';
import Scale from "../../../components/src/Scale";
import OtpInputs from 'react-native-otp-inputs';
import Loader from '../../../components/src/Loader';
import Icon from 'react-native-vector-icons/Feather'

export default class ForgotPasswordOTP extends ForgotPasswordOTPController {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        let email = this.props?.navigation?.state?.params?.email;
        return (
            <ScrollView
                keyboardShouldPersistTaps="always"
                style={styles.containerMobile}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Image source={backArrow} style={{ height: Scale(20), width: Scale(20), marginTop: Scale(25), marginLeft: Scale(10) }} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={() => this.hideKeyboard()}>
                        <View style={styles.mainView}>
                            <Image source={appLogo} style={{ height: Scale(70), width: Scale(70) }} resizeMode='contain' />
                            <Text style={styles.forgotText}>Enter OTP</Text>
                            <Text style={[styles.descText, { marginTop: Scale(20) }]}>Please enter the OTP sent to your registered email ID</Text>
                            {/* <Text style={styles.descText}>your password</Text> */}
                            <View style={{ flexDirection: 'row', marginHorizontal: Scale(20), marginTop: Scale(15) }}>
                                <OtpInputs
                                    autofillFromClipboard={false}
                                    numberOfInputs={5}
                                    handleChange={(otp) => this.setState({ setOtp: otp })}
                                    inputStyles={styles.otpInput} />
                            </View>
                            <View style={styles.secView}>
                                <View style={styles.lineView} />
                                <View>
                                    <Text style={styles.secTxt}>{this.state.setSeconds} Sec</Text>
                                </View>
                                <View style={styles.lineView} />
                            </View>
                            <TouchableOpacity style={styles.resendBtn} onPress={() => this.onPressResendOTP(email)} disabled={this.state.setSeconds > 0 ? true : false}>
                                <Text style={styles.resendTxt}>Resend OTP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveBtn} onPress={() => this.onClickVerifyOtp()}>
                                <Text style={styles.saveText}>Verify & Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                    <Loader loading={this.state.isLoading} style={{}} />
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
        fontSize: Scale(14),
        // backgroundColor:'red',
        width: "70%"
    },
    otpInput: {
        height: Scale(55),
        width: Scale(55),
        borderRadius: 10,
        backgroundColor: "#ebe7e6",
        // backgroundColor: 'rgba(243, 242, 251, 255)',
        marginTop: Scale(2),
        textAlign: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        elevation: 2,
        fontSize: Scale(16),
        fontWeight: 'bold'

    },
    emailTxt: {
        alignSelf: 'flex-start',
        marginTop: Scale(25),
        marginHorizontal: Scale(21),
        fontWeight: 'bold'
    },
    secView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Scale(25),
        marginTop: Scale(15)
    },
    lineView: {
        borderWidth: 0.8,
        opacity: .1,
        elevation: 2,
        borderColor: '#000',
        flex: 1
    },
    secTxt: {
        width: 80,
        textAlign: 'center'
    },
    resendBtn: {
        marginTop: Scale(25)
    },
    resendTxt: {
        color: 'blue',
        fontSize: Scale(16),
        fontWeight: "800"
    },
    saveBtn: {
        marginTop: Scale(30),
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
