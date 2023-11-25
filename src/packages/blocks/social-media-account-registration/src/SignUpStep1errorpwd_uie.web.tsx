//This an auto generated file for Artboard Name = SignUpStep1errorpwd And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width; 
import { imgc1eaef7b5e10e0789c863b3812e2ef96c37f2628 } from './assets'
let screenHeight = Dimensions.get('window').height; 
//Artboard Dimension 
let artBoardHeightOrg = 958; 
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

 
 
export default class SignUpStep1errorpwd extends React.Component
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
    SignUpStep1errorpwdView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    image_BitmapCopyImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(60, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(73, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(165, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopyTxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(249, false, 1),
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
    view_Path: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(6, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(348, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(261, false, 1),
        opacity: 1,
        backgroundColor: "rgba(225, 21, 21, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(321, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText2: {
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
    attrbuted_SUBTITLE1COLORSTYLEText2: {
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
    view_PathCopy: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(6, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(348, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(333, false, 1),
        opacity: 1,
        backgroundColor: "rgba(225, 21, 21, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3TxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(393, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText3: {
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
    attrbuted_SUBTITLE1COLORSTYLEText3: {
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
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4TxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(465, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    textlabel_PasswordsmustcontaText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(330, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(51, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(531, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(240, 78, 54, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    attrbuted_textlabel_PasswordsmustcontaText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(330, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(51, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(531, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(240, 78, 54, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy6CopyTxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(599, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText5: {
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
    attrbuted_SUBTITLE1COLORSTYLEText5: {
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
    textlabel_BycreatinganaccouText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(34, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(46, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(680, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    attrbuted_textlabel_BycreatinganaccouText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(34, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(46, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(680, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    attrbuted_textlabel_BycreatinganaccouText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(34, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(46, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(680, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    group_Group4Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(69, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(161, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(746, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group2Group: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(27, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(27, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_1Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-17, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(4, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_1Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(4, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    view_Rectangle2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(27, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(31, 69, 252, 0.1650185751748252)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    },
    textlabel_2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-19, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    button_ButtonsContainedEnabledButton: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(804, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        justifyContent: "center",
    },
    textlabel_AlreadyhaveanaccoText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(251, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(904, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(92, 95, 97, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_AlreadyhaveanaccoText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(251, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(904, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(92, 95, 97, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_AlreadyhaveanaccoText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(251, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(904, false, 1),
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
    attrbuted_textlabel_AlreadyhaveanaccoText3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(251, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(904, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
})

const styles = {...global_styles, ...local_styles}
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.SignUpStep1errorpwdView}>
		<Image data-elementId='image_BitmapCopy' 
		   style={styles.image_BitmapCopyImage}
		   source={imgc1eaef7b5e10e0789c863b3812e2ef96c37f2628}
		/>
		  <Text data-elementId='textlabel_Signup' 
			   style={styles.textlabel_SignupText}>Sign up
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopyTxtInput}>
		   
		<TextInput 
			placeholder = {'yash@gmail.com'} 
			style={styles.SUBTITLE1COLORSTYLEText} 
		/>
		   
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput}>
		   
		<TextInput 
			placeholder = {'Yash Sharma'} 
			style={styles.SUBTITLE1COLORSTYLEText2} 
		/>
		   
		</View>
		<View data-elementId='view_PathCopy' 
		   style={[styles.view_PathCopy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3TxtInput}>
		   
		<TextInput 
			placeholder = {'9876543210'} 
			style={styles.SUBTITLE1COLORSTYLEText3} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_Optional' 
			   style={styles.textlabel_OptionalText}>(optional)
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4TxtInput}>
		   
		<TextInput 
			placeholder = {'********'} 
			style={styles.SUBTITLE1COLORSTYLEText4} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_Passwordsmustconta' 
			   style={styles.textlabel_PasswordsmustcontaText}>Passwords must contain minimum 8 characters, Atleast One number, One lowercase, One Uppercase and One special character
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy6Copy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy6CopyTxtInput}>
		   
		<TextInput 
			placeholder = {'Confirm Password'} 
			style={styles.SUBTITLE1COLORSTYLEText5} 
		/>
		   
		</View>
		  <Text data-elementId='attrbuted_textlabel_Bycreatinganaccou' 
			   style={styles.attrbuted_textlabel_BycreatinganaccouText}>By creating an account, you agree to Gamma’s  
		  		  <Text data-elementId='attrbuted_textlabel_Bycreatinganaccou' 
			   style={styles.attrbuted_textlabel_BycreatinganaccouText2}>Terms & Conditions
		  </Text>
 
		  </Text>
		<View data-elementId='group_Group4' 
		   style={[styles.group_Group4Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='group_Group2' 
		   style={[styles.group_Group2Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_1' 
			   style={styles.textlabel_1Text}>1
		  </Text>
		</View>
		<View data-elementId='group_Group3' 
		   style={[styles.group_Group3Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_2' 
			   style={styles.textlabel_2Text}>2
		  </Text>
		</View>
		</View>
		<TouchableOpacity data-elementId='button_ButtonsContainedEnabled' 
		  onPress ={ () => Alert.alert('I am Custom Button.')} 
		   style={styles.button_ButtonsContainedEnabledButton}>
		  <Text data-elementId='TEXTCOLORSTYLE' 
			   style={styles.TEXTCOLORSTYLEText}>NEXT
		  </Text>
		</TouchableOpacity>
		  <Text data-elementId='attrbuted_textlabel_Alreadyhaveanacco' 
			   style={styles.attrbuted_textlabel_AlreadyhaveanaccoText}>Already have an account?
		  		  <Text data-elementId='attrbuted_textlabel_Alreadyhaveanacco' 
			   style={styles.attrbuted_textlabel_AlreadyhaveanaccoText2}> 
		  </Text>
 
		  		  <Text data-elementId='attrbuted_textlabel_Alreadyhaveanacco' 
			   style={styles.attrbuted_textlabel_AlreadyhaveanaccoText3}>Sign In
		  </Text>
 
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
