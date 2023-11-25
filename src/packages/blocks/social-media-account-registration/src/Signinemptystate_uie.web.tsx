//This an auto generated file for Artboard Name = Signinemptystate And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width; 
import { imgc1eaef7b5e10e0789c863b3812e2ef96c37f2628 } from './assets'
let screenHeight = Dimensions.get('window').height; 
//Artboard Dimension 
let artBoardHeightOrg = 844; 
let artBoardWidthOrg = 390; 
//Re calculated Artboard Dimension 
let artBoardWidth =  isSameRatio() ? artBoardWidthOrg : screenWidth; 
let artBoardHeight =  isSameRatio() ? artBoardHeightOrg : screenHeight; 
// To check if Artboard and Device screen has same ratio 
function isSameRatio(): boolean {
    return artBoardWidthOrg / artBoardHeightOrg < 1 && screenWidth / screenHeight < 1 
}
 
//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch 
let extraSpace = 0; 

 
 
export default class Signinemptystate extends React.Component
{
	constructor(props:any)
	{ 
		super(props);
	} 

	state = {
	}

	componentDidMount() 
	{ 
		Dimensions.addEventListener('change', (e) => { 
			screenWidth = Dimensions.get('window').width; 
			screenHeight = Dimensions.get('window').height; 
			this.forceUpdate();
		});
	}

	render()
	{
		const local_styles = StyleSheet.create({
    SigninemptystateView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    image_BitmapCopyImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(60, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(73, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(165, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopyTxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(335, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(262, true, 1.0426829268292683),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1.0426829268292683),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_SUBTITLE1COLORSTYLEText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(262, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(407, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(224, true, 1.0426829268292683),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1.0426829268292683),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_SUBTITLE1COLORSTYLEText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(224, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_ForgotPasswordCopyText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(118, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(136, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(488, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_ForgotPasswordCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(118, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(136, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(488, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    button_ButtonsContainedEnabledButton: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(565, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        justifyContent: "center",
    },
})

const styles = {...global_styles, ...local_styles}
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.SigninemptystateView}>
		<Image data-elementId='image_BitmapCopy' 
		   style={styles.image_BitmapCopyImage}
		   source={imgc1eaef7b5e10e0789c863b3812e2ef96c37f2628}
		/>
		  <Text data-elementId='textlabel_SignIn' 
			   style={styles.textlabel_SignInText}>Sign In
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopyTxtInput}>
		   
		<TextInput 
			placeholder = {'Username'} 
			style={styles.SUBTITLE1COLORSTYLEText} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput}>
		   
		<TextInput 
			placeholder = {'Password'} 
			style={styles.SUBTITLE1COLORSTYLEText2} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_ForgotPasswordCopy' 
			   style={styles.textlabel_ForgotPasswordCopyText}>Forgot Password?
		  </Text>
		<TouchableOpacity data-elementId='button_ButtonsContainedEnabled' 
		  onPress ={ () => Alert.alert('I am Custom Button.')} 
		   style={styles.button_ButtonsContainedEnabledButton}>
		  <Text data-elementId='TEXTCOLORSTYLE' 
			   style={styles.TEXTCOLORSTYLEText}>SIGN IN
		  </Text>
		</TouchableOpacity>
		  <Text data-elementId='attrbuted_textlabel_Donthaveanaccoun' 
			   style={styles.attrbuted_textlabel_DonthaveanaccounText}>Don’t have an account?
		  		  <Text data-elementId='attrbuted_textlabel_Donthaveanaccoun' 
			   style={styles.attrbuted_textlabel_DonthaveanaccounText2}> 
		  </Text>
 
		  		  <Text data-elementId='attrbuted_textlabel_Donthaveanaccoun' 
			   style={styles.attrbuted_textlabel_DonthaveanaccounText3}>Sign Up
		  </Text>
 
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
