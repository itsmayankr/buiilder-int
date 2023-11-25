//This an auto generated file for Artboard Name = Landingpageupdated And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height; 
//Artboard Dimension 
let artBoardHeightOrg = 1087; 
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

 
 
export default class Landingpageupdated extends React.Component
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
    LandingpageupdatedView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    image_button_container_imagebutton_BitmapCopy: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(55, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(54, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(168, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(410, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    imagebutton_BitmapCopyImageCustomButton: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(54, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(54, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        resizeMode: "center",
    },
    view_Rectangle: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(391, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(78, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(48, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_BitmapImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(32, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(180, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(71, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapImage2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(22, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(75, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapImage3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(19, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(19, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(299, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(77, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapImage4: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(14, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(26, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    group_mediahousenameGroup: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(225, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(148, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_logoGroup: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(25, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Mask: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(25, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_Image1Image: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(26, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(14, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-26, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(5, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_SydneyMorningHeralText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(193, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(5, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_SydneyMorningHeralText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(193, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_NationalText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(61, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(301, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(150, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_NationalText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(61, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(301, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(150, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_TakeitfrommykidText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(152, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(186, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_TakeitfrommykidText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(152, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(186, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_20Jun2022Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(108, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(254, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(186, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_20Jun2022Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(108, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(254, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(186, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    group_imageGroup: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(111, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(110, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(140, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(230, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_RectangleCopy4: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(111, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(110, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_RectangleCopy4Copy: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(19, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(18, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(55, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group2Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(335, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(9, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(364, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group2Group2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(9, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Line3Copy: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(88, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Oval: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(9, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-4, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Line2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(335, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-94, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        opacity: 1,
        backgroundColor: "rgba(204, 204, 204, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_0223Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(31, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(377, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    attrbuted_textlabel_0223Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(31, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(377, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    textlabel_0623Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(32, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(330, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(377, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    attrbuted_textlabel_0623Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(32, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(330, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(377, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
    },
    image_BitmapImage5: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(38, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(424, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapImage6: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(26, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(328, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(424, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapImage7: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(114, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(427, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_BitmapCopyImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(254, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(427, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    view_Rectangle2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(335, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(47, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(28, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(486, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_repeatImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(21, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(223, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(498, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    group_addGroup: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(21, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(301, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(499, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(7, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(53, 56, 72, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(13, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-22, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(3, false, 1),
        opacity: 1,
        backgroundColor: "rgba(53, 56, 72, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(12, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-1, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(9, false, 1),
        opacity: 1,
        backgroundColor: "rgba(53, 56, 72, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Shape: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(19, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(69, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(500, false, 1),
        opacity: 1,
        backgroundColor: "rgba(53, 56, 72, 1)",
        borderColor: "rgba(53, 56, 72, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    },
    view_Path4: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(21, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(144, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(500, false, 1),
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Line: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(391, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(1, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(566, false, 1),
        opacity: 0.2692289806547619,
        borderColor: "rgba(151, 151, 151, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    },
    textlabel_PopularMediaHousesCopy2Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(204, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(21, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(589, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    },
    attrbuted_textlabel_PopularMediaHousesCopy2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(204, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(21, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(589, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    },
    textlabel_SeemoreCopyText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(68, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(590, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_SeemoreCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(68, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(590, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    group_Image1Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(626, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Mask2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(247, 247, 247, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_Image1Image2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(88, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(39, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-85, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(21, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    group_Image1Group2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(154, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(626, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Mask3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_Image1Image3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(86, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(46, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-83, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    group_Image1Group3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(283, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(626, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_Image1Image4: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(86, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(86, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-3, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(-3, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    view_Mask4: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(81, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-83, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_TheHinduText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(29, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_TheHinduText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(29, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_SydneyMorningHeralText2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(112, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(40, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(138, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_SydneyMorningHeralText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(112, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(40, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(138, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_BBCHindiText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(67, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(290, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_BBCHindiText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(67, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(290, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(714, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_CategoriesText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(101, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(25, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(766, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    },
    attrbuted_textlabel_CategoriesText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(101, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(25, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(766, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    },
    textlabel_SeemoreText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(68, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(769, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_SeemoreText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(68, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(298, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(769, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(31, 69, 252, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    image_nationalflagImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(169, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(169, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(275, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(797, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    image_fearestarteconomykocherlakotaImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(275, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(165, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(130, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(801, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    group_CategoryColorCopy2CopyGroup: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(121, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(160, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(803, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_ContainerCopy: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(121, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(160, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_TitleCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-107, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(113, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_TitleCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(113, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_StoriesCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-99, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(136, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    attrbuted_textlabel_StoriesCopyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(136, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    view_ContainerCopy2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(121, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(160, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(160, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(803, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_ContainerCopy3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(121, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(160, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(296, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(803, false, 1),
        opacity: 1,
        backgroundColor: "rgba(216, 216, 216, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_TitleCopyText2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(174, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(916, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_TitleCopyText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(174, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(916, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_TitleCopyText3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(310, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(916, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_TitleCopyText3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(24, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(310, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(916, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Bold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_StoriesCopyText2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(174, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(939, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    attrbuted_textlabel_StoriesCopyText2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(174, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(939, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    textlabel_StoriesCopyText3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(310, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(939, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    attrbuted_textlabel_StoriesCopyText3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(83, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(15, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(310, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(939, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(255, 255, 255, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Medium",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    },
    view_Rectangle3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(391, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(999, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle4: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(98, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(999, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle5: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(97, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(999, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle6: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(99, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(195, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(999, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Rectangle7: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(98, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(88, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(293, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(999, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    image_BitmapImage8: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(39, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1015, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    view_trend: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(15, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(237, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1015, false, 1),
        opacity: 1,
        borderColor: "rgba(146, 150, 171, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(2, true, 1),
    },
    view_Shape2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(19, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(139, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1016, false, 1),
        opacity: 1,
        backgroundColor: "rgba(143, 148, 170, 1)",
        borderColor: "rgba(143, 148, 170, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_allarticlesGroup: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(21, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(332, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1016, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_ShapeGroup: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(21, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path5: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(21, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path6: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-19, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(2, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path7: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(3, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(11, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-12, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(5, false, 1),
        opacity: 1,
        backgroundColor: "rgba(146, 150, 171, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    view_Path8: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(12, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(2, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(-7, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(9, false, 1),
        opacity: 1,
        backgroundColor: "rgba(146, 150, 171, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_HomeText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
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
    attrbuted_textlabel_HomeText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
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
    textlabel_SavedText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(106, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_SavedText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(106, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_TrendingText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(204, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_TrendingText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(204, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    textlabel_AllArticlesText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(301, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
    attrbuted_textlabel_AllArticlesText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(20, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(301, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(1047, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(143, 148, 170, 1)",
        textAlign: "center",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(14, true, 1),
    },
})

const styles = {...global_styles, ...local_styles}
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.LandingpageupdatedView}>
		<TouchableOpacity data-elementId='imagebutton_BitmapCopy' 
		  onPress ={ () => Alert.alert('I am Custom Image Button.')} 
		   style={styles.image_button_container_imagebutton_BitmapCopy}>
		{/* <Image data-elementId='imagebutton_BitmapCopy' 
		   style={styles.imagebutton_BitmapCopyImageCustomButton}
		   source={img433488b57a826236f5826c9dd51f1c4a5f4241cc}
		/> */}
		</TouchableOpacity>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage}
		   source={imge86d3534159ddb53de9882eda508cea8c426b064}
		/> */}
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage2}
		   source={img2adc335c9a2e921d97583fd059e577caca032251}
		/> */}
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage3}
		   source={imgd159edeade43bd463f06bf368d776088b096ea6d}
		/> */}
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage4}
		   source={imgc3db5bfd4deaa170e3030d22cfe23ff73cafd961}
		/> */}
		<View data-elementId='group_mediahousename' 
		   style={[styles.group_mediahousenameGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='group_logo' 
		   style={[styles.group_logoGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Mask' 
		   style={[styles.view_Mask, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_Image1' 
		   style={styles.image_Image1Image}
		   source={imge634ca433e24c9810ee2b1503ef69a44e7c1eb06}
		/> */}
		</View>
		  <Text data-elementId='textlabel_SydneyMorningHeral' 
			   style={styles.textlabel_SydneyMorningHeralText}>Sydney Morning Herald
		  </Text>
		</View>
		  <Text data-elementId='textlabel_National' 
			   style={styles.textlabel_NationalText}>National
		  </Text>
		  <Text data-elementId='textlabel_Takeitfrommykid' 
			   style={styles.textlabel_TakeitfrommykidText}>Take it from my kid
		  </Text>
		  <Text data-elementId='textlabel_20Jun2022' 
			   style={styles.textlabel_20Jun2022Text}>20/Jun/2022
		  </Text>
		<View data-elementId='group_image' 
		   style={[styles.group_imageGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_RectangleCopy4' 
		   style={[styles.view_RectangleCopy4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_RectangleCopy4Copy' 
		   style={[styles.view_RectangleCopy4Copy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		<View data-elementId='group_Group2' 
		   style={[styles.group_Group2Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='group_Group2' 
		   style={[styles.group_Group2Group2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Line3Copy' 
		   style={[styles.view_Line3Copy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Oval' 
		   style={[styles.view_Oval, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		<View data-elementId='view_Line2' 
		   style={[styles.view_Line2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		  <Text data-elementId='textlabel_0223' 
			   style={styles.textlabel_0223Text}>02:23
		  </Text>
		  <Text data-elementId='textlabel_0623' 
			   style={styles.textlabel_0623Text}>06:23
		  </Text>
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage5}
		   source={img00a22ed22e0a311b8205be9e125e7507bdbec551}
		/>
		<Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage6}
		   source={img0da0fd1a7ca4892e407540269977a0e668b0e588}
		/>
		<Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage7}
		   source={img40d7a5fc8913a8d8c7622c085164f1421e032664}
		/>
		<Image data-elementId='image_BitmapCopy' 
		   style={styles.image_BitmapCopyImage}
		   source={img40d7a5fc8913a8d8c7622c085164f1421e032664}
		/> */}
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_repeat' 
		   style={styles.image_repeatImage}
		   source={img19610e7ec901b675b8c650035fd4bda5e4b06058}
		/> */}
		<View data-elementId='group_add' 
		   style={[styles.group_addGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		<View data-elementId='view_Shape' 
		   style={[styles.view_Shape, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Line' 
		   style={[styles.view_Line, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_PopularMediaHousesCopy2' 
			   style={styles.textlabel_PopularMediaHousesCopy2Text}>Popular Media Houses
		  </Text>
		  <Text data-elementId='textlabel_SeemoreCopy' 
			   style={styles.textlabel_SeemoreCopyText}>See more
		  </Text>
		<View data-elementId='group_Image1' 
		   style={[styles.group_Image1Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Mask' 
		   style={[styles.view_Mask2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_Image1' 
		   style={styles.image_Image1Image2}
		   source={img3c60885cf71216a15a5138707f13461ce55654c8}
		/> */}
		</View>
		<View data-elementId='group_Image1' 
		   style={[styles.group_Image1Group2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Mask' 
		   style={[styles.view_Mask3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_Image1' 
		   style={styles.image_Image1Image3}
		   source={imge634ca433e24c9810ee2b1503ef69a44e7c1eb06}
		/> */}
		</View>
		<View data-elementId='group_Image1' 
		   style={[styles.group_Image1Group3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		{/* <Image data-elementId='image_Image1' 
		   style={styles.image_Image1Image4}
		   source={img50469679cb447ed3f3a7283f525f0561cba2c021}
		/> */}
		<View data-elementId='view_Mask' 
		   style={[styles.view_Mask4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		  <Text data-elementId='textlabel_TheHindu' 
			   style={styles.textlabel_TheHinduText}>The Hindu
		  </Text>
		  <Text data-elementId='textlabel_SydneyMorningHeral' 
			   style={styles.textlabel_SydneyMorningHeralText2}>Sydney Morning{'\n'}Herald
		  </Text>
		  <Text data-elementId='textlabel_BBCHindi' 
			   style={styles.textlabel_BBCHindiText}>BBC Hindi
		  </Text>
		  <Text data-elementId='textlabel_Categories' 
			   style={styles.textlabel_CategoriesText}>Categories
		  </Text>
		  <Text data-elementId='textlabel_Seemore' 
			   style={styles.textlabel_SeemoreText}>See more
		  </Text>
		{/* <Image data-elementId='image_nationalflag' 
		   style={styles.image_nationalflagImage}
		   source={imge49e346d261f682d7bef7b7cea1b6773e89311c2}
		/> */}
		{/* <Image data-elementId='image_fearestarteconomykocherlakota' 
		   style={styles.image_fearestarteconomykocherlakotaImage}
		   source={img3ce7db8a20da0b74686a1d43169c7898ac6cfdd4}
		/> */}
		<View data-elementId='group_CategoryColorCopy2Copy' 
		   style={[styles.group_CategoryColorCopy2CopyGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_ContainerCopy' 
		   style={[styles.view_ContainerCopy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_TitleCopy' 
			   style={styles.textlabel_TitleCopyText}>Sports
		  </Text>
		  <Text data-elementId='textlabel_StoriesCopy' 
			   style={styles.textlabel_StoriesCopyText}>17 Articles
		  </Text>
		</View>
		<View data-elementId='view_ContainerCopy' 
		   style={[styles.view_ContainerCopy2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_ContainerCopy' 
		   style={[styles.view_ContainerCopy3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_TitleCopy' 
			   style={styles.textlabel_TitleCopyText2}>Economy
		  </Text>
		  <Text data-elementId='textlabel_TitleCopy' 
			   style={styles.textlabel_TitleCopyText3}>National
		  </Text>
		  <Text data-elementId='textlabel_StoriesCopy' 
			   style={styles.textlabel_StoriesCopyText2}>17 Articles
		  </Text>
		  <Text data-elementId='textlabel_StoriesCopy' 
			   style={styles.textlabel_StoriesCopyText3}>17 Articles
		  </Text>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle6, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle7, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage8}
		   source={imgf45342017337f6f5267184dd97407cdc4a4922a9}
		/> */}
		<View data-elementId='view_trend' 
		   style={[styles.view_trend, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Shape' 
		   style={[styles.view_Shape2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='group_allarticles' 
		   style={[styles.group_allarticlesGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='group_Shape' 
		   style={[styles.group_ShapeGroup, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path6, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path7, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='view_Path' 
		   style={[styles.view_Path8, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		</View>
		  <Text data-elementId='textlabel_Home' 
			   style={styles.textlabel_HomeText}>Home
		  </Text>
		  <Text data-elementId='textlabel_Saved' 
			   style={styles.textlabel_SavedText}>Saved
		  </Text>
		  <Text data-elementId='textlabel_Trending' 
			   style={styles.textlabel_TrendingText}>Trending
		  </Text>
		  <Text data-elementId='textlabel_AllArticles' 
			   style={styles.textlabel_AllArticlesText}>All Articles
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
