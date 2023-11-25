//This an auto generated file for Artboard Name = ChangePassword And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width; 
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

 
 
export default class ChangePassword extends React.Component
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
    ChangePasswordView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    image_BitmapImage: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(16, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(32, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(79, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    view_RectangleCopy: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(59, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(150, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_OldPasswordText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(109, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(168, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_OldPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(109, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(168, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(171, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(171, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    view_RectangleCopy3: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(59, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(225, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_NewPasswordText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(116, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(243, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_NewPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(116, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(243, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_copyText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(246, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_copyText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(246, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    view_RectangleCopy4: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(343, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(59, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(300, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_ConfirmPasswordText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(146, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(318, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_ConfirmPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(146, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(318, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    textlabel_copy2Text: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(321, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    attrbuted_textlabel_copy2Text: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(17, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(256, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(321, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "normal",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "right",
        textAlignVertical: "top",
        fontFamily: "Poppins-Regular",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    },
    button_ButtonsContainedEnabledButton: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(56, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(740, false, 1),
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
				style={styles.ChangePasswordView}>
		<View data-elementId='view_Rectangle13Copy3' 
		   style={[styles.view_Rectangle13Copy3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_ChangePassword' 
			   style={styles.textlabel_ChangePasswordText}>Change password
		  </Text>
		{/* <Image data-elementId='image_Bitmap' 
		   style={styles.image_BitmapImage}
		   source={img47d629fbfa967570ee428c6075c9417bf8967c1c}
		/> */}
		<View data-elementId='view_RectangleCopy' 
		   style={[styles.view_RectangleCopy, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_OldPassword' 
			   style={styles.textlabel_OldPasswordText}>Old Password
		  </Text>
		  <Text data-elementId='textlabel_' 
			   style={styles.textlabel_Text}>************
		  </Text>
		<View data-elementId='view_RectangleCopy3' 
		   style={[styles.view_RectangleCopy3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_NewPassword' 
			   style={styles.textlabel_NewPasswordText}>New Password
		  </Text>
		  <Text data-elementId='textlabel_copy' 
			   style={styles.textlabel_copyText}>************
		  </Text>
		<View data-elementId='view_RectangleCopy4' 
		   style={[styles.view_RectangleCopy4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_ConfirmPassword' 
			   style={styles.textlabel_ConfirmPasswordText}>Confirm Password
		  </Text>
		  <Text data-elementId='textlabel_copy2' 
			   style={styles.textlabel_copy2Text}>************
		  </Text>
		<TouchableOpacity data-elementId='button_ButtonsContainedEnabled' 
		  onPress ={ () => Alert.alert('I am Custom Button.')} 
		   style={styles.button_ButtonsContainedEnabledButton}>
		  <Text data-elementId='TEXTCOLORSTYLE' 
			   style={styles.TEXTCOLORSTYLEText}>SAVE PASSWORD
		  </Text>
		</TouchableOpacity>
			</View>
			</SafeAreaView>
	
		)
	}

}
