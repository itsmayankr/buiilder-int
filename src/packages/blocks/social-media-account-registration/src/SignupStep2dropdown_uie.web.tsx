//This an auto generated file for Artboard Name = SignupStep2dropdown And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width; 
import { img74408cfcc8df6c84f18b7e1a0833a5c79089d706, img9ead9109913e037aede8a7a58d08f6e0bba1d248, img299883a10567b5996dedb8e54f29e2800b26dd19 } from './assets'
let screenHeight = Dimensions.get('window').height; 
//Artboard Dimension 
let artBoardHeightOrg = 1106; 
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

 
 
export default class SignupStep2dropdown extends React.Component
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
    SignupStep2dropdownView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    group_Group6Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(82, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(74, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-109, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    SUBTITLE1COLORSTYLEText: {
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
    attrbuted_SUBTITLE1COLORSTYLEText: {
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
    SUBTITLE1COLORSTYLEText2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 0.6206896551724138),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 0.6206896551724138),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_SUBTITLE1COLORSTYLEText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    SUBTITLE1COLORSTYLEText3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 0.7655172413793103),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 0.7655172413793103),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_SUBTITLE1COLORSTYLEText3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3TxtInput: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    view_PathCopy: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(6, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-16, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
        opacity: 1,
        backgroundColor: "rgba(240, 78, 54, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_GroupGroup3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(272, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(316, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Mask: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(272, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(247, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-11, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(12, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(229, 231, 240, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(4, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    },
    view_Rectangle2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(3, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(180, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-5, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        backgroundColor: "rgba(229, 231, 240, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_GroupGroup4: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(295, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(40, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-313, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(295, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(40, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_BitmapImage: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-37, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(10, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_SearchText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(51, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-262, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(10, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_SearchText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(51, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(10, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(53, 56, 72, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_Subtitle1CopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-295, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(76, false, 1),
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
    attrbuted_textlabel_Subtitle1CopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(76, false, 1),
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
    image_BitmapImage2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(78, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_Subtitle1Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-292, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(116, false, 1),
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
    attrbuted_textlabel_Subtitle1Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(116, false, 1),
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
    image_BitmapImage3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(118, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_Subtitle1Copy2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-292, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(156, false, 1),
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
    attrbuted_textlabel_Subtitle1Copy2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(156, false, 1),
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
    image_BitmapCopy3Image: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(158, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_Subtitle1Copy3Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-292, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(196, false, 1),
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
    attrbuted_textlabel_Subtitle1Copy3Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(196, false, 1),
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
    image_BitmapCopyImage: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(198, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_Subtitle1Copy4Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-292, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(236, false, 1),
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
    attrbuted_textlabel_Subtitle1Copy4Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(250, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(236, false, 1),
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
    image_BitmapCopy2Image: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(238, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    SUBTITLE1COLORSTYLEText5: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 0.7931034482758621),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 0.7931034482758621),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_SUBTITLE1COLORSTYLEText5: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(8, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4TxtInput: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(420, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        backgroundColor: "rgba(255, 255, 255, 1)",
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
    view_Rectangle4: {
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
    group_GroupGroup5: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-17, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(4, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_1Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(7, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    view_Rectangle5: {
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
    textlabel_2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-19, true, 1),
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
    attrbuted_textlabel_2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
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
    textlabel_AlreadyhaveanaccoText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(251, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1052, false, 1),
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
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1052, false, 1),
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
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1052, false, 1),
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
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1052, false, 1),
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
				style={styles.SignupStep2dropdownView}>
		<View data-elementId='group_Group6' 
		   style={[styles.group_Group6Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_SelectACountry' 
			   style={styles.textlabel_SelectACountryText}>Select a Country
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy2TxtInput}>
		   
		<TextInput 
			placeholder = {'Country'} 
			style={styles.SUBTITLE1COLORSTYLEText} 
		/>
		   
		</View>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmall' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallTxtInput}>
		   
		<TextInput 
			placeholder = {'India'} 
			style={styles.SUBTITLE1COLORSTYLEText2} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyTxtInput}>
		   
		<TextInput 
			placeholder = {'Australia'} 
			style={styles.SUBTITLE1COLORSTYLEText3} 
		/>
		   
		</View>
		<View data-elementId='group_Group' 
		   style={[styles.group_GroupGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_SelectRegionYouIn' 
			   style={styles.textlabel_SelectRegionYouInText}>Select region you interested in
		  </Text>
		<View data-elementId='group_Group' 
		   style={[styles.group_GroupGroup2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy3TxtInput}>
		   
		<TextInput 
			placeholder = {'Region'} 
			style={styles.SUBTITLE1COLORSTYLEText4} 
		/>
		   
		</View>
		<View data-elementId='view_PathCopy' 
		   style={[styles.view_PathCopy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		</View>
		<View data-elementId='group_Group' 
		   style={[styles.group_GroupGroup3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Mask' 
		   style={[styles.view_Mask, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='group_Group' 
		   style={[styles.group_GroupGroup4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage}
		   source={img299883a10567b5996dedb8e54f29e2800b26dd19}
		/>
		  <Text data-elementId='textlabel_Search' 
			   style={styles.textlabel_SearchText}>Search
		  </Text>
		</View>
		  <Text data-elementId='textlabel_Subtitle1Copy' 
			   style={styles.textlabel_Subtitle1CopyText}>New Jersey
		  </Text>
		<Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage2}
		   source={img74408cfcc8df6c84f18b7e1a0833a5c79089d706}
		/>
		  <Text data-elementId='textlabel_Subtitle1' 
			   style={styles.textlabel_Subtitle1Text}>Alaska
		  </Text>
		<Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage3}
		   source={img9ead9109913e037aede8a7a58d08f6e0bba1d248}
		/>
		  <Text data-elementId='textlabel_Subtitle1Copy2' 
			   style={styles.textlabel_Subtitle1Copy2Text}>New York
		  </Text>
		<Image data-elementId='image_BitmapCopy3' 
		   style={styles.image_BitmapCopy3Image}
		   source={img9ead9109913e037aede8a7a58d08f6e0bba1d248}
		/>
		  <Text data-elementId='textlabel_Subtitle1Copy3' 
			   style={styles.textlabel_Subtitle1Copy3Text}>Wisconsin
		  </Text>
		<Image data-elementId='image_BitmapCopy' 
		   style={styles.image_BitmapCopyImage}
		   source={img74408cfcc8df6c84f18b7e1a0833a5c79089d706}
		/>
		  <Text data-elementId='textlabel_Subtitle1Copy4' 
			   style={styles.textlabel_Subtitle1Copy4Text}>California
		  </Text>
		<Image data-elementId='image_BitmapCopy2' 
		   style={styles.image_BitmapCopy2Image}
		   source={img74408cfcc8df6c84f18b7e1a0833a5c79089d706}
		/>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmall' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallTxtInput2}>
		   
		<TextInput 
			placeholder = {'New York'} 
			style={styles.SUBTITLE1COLORSTYLEText5} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyTxtInput2}>
		   
		<TextInput 
			placeholder = {'Alaska'} 
			style={styles.SUBTITLE1COLORSTYLEText6} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_SelectLanguage' 
			   style={styles.textlabel_SelectLanguageText}>Select language
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy4TxtInput}>
		   
		<TextInput 
			placeholder = {'Language'} 
			style={styles.SUBTITLE1COLORSTYLEText7} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyTxtInput3}>
		   
		<TextInput 
			placeholder = {'English'} 
			style={styles.SUBTITLE1COLORSTYLEText8} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopyTxtInput}>
		   
		<TextInput 
			placeholder = {'Hindi'} 
			style={styles.SUBTITLE1COLORSTYLEText9} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_SelectMediaHouse' 
			   style={styles.textlabel_SelectMediaHouseText}>Select Media House
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy5' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy5TxtInput}>
		   
		<TextInput 
			placeholder = {'Media House'} 
			style={styles.SUBTITLE1COLORSTYLEText10} 
		/>
		   
		</View>
		<View data-elementId='view_PathCopy' 
		   style={[styles.view_PathCopy2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy2' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy2TxtInput}>
		   
		<TextInput 
			placeholder = {'BBC'} 
			style={styles.SUBTITLE1COLORSTYLEText11} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy2' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy2TxtInput}>
		   
		<TextInput 
			placeholder = {'The Hindu'} 
			style={styles.SUBTITLE1COLORSTYLEText12} 
		/>
		   
		</View>
		  <Text data-elementId='textlabel_SelectCategoriesCopy' 
			   style={styles.textlabel_SelectCategoriesCopyText}>Select Categories
		  </Text>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy5Copy' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingCopy5CopyTxtInput}>
		   
		<TextInput 
			placeholder = {'Categories'} 
			style={styles.SUBTITLE1COLORSTYLEText13} 
		/>
		   
		</View>
		<View data-elementId='view_PathCopy2' 
		   style={[styles.view_PathCopy22, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy3' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopy3TxtInput}>
		   
		<TextInput 
			placeholder = {'Economy'} 
			style={styles.SUBTITLE1COLORSTYLEText14} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy4' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy4TxtInput}>
		   
		<TextInput 
			placeholder = {'Sports'} 
			style={styles.SUBTITLE1COLORSTYLEText15} 
		/>
		   
		</View>
		<View data-elementId='textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy5' style={styles.textinput_TextFieldFilledLeadingIconNoAssistiveTextRestingWithIconSmallCopyCopy5TxtInput}>
		   
		<TextInput 
			placeholder = {'National'} 
			style={styles.SUBTITLE1COLORSTYLEText16} 
		/>
		   
		</View>
		<View data-elementId='group_Group3Copy' 
		   style={[styles.group_Group3CopyGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='group_Group2' 
		   style={[styles.group_Group2Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='group_Group' 
		   style={[styles.group_GroupGroup5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_1' 
			   style={styles.textlabel_1Text}>1
		  </Text>
		</View>
		</View>
		<View data-elementId='group_Group2Copy' 
		   style={[styles.group_Group2CopyGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_2' 
			   style={styles.textlabel_2Text}>2
		  </Text>
		</View>
		</View>
		<TouchableOpacity data-elementId='button_ButtonsContainedEnabledCopy' 
		  onPress ={ () => Alert.alert('I am Custom Button.')} 
		   style={styles.button_ButtonsContainedEnabledCopyButton}>
		  <Text data-elementId='TEXTCOLORSTYLE' 
			   style={styles.TEXTCOLORSTYLEText}>CREATE ACCOUNT
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
