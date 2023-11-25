//This an auto generated file for Artboard Name = ProfileBioChangePassword And Supports ReactNative Ver. = 0.62
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

 
 
export default class ProfileBioChangePassword extends React.Component
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
    ProfileBioChangePasswordView: {
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
        height: MergeEngineUtilities.deviceBasedDynamicDimension(192, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(150, false, 1),
        opacity: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group6Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(174, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_OldPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(109, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(107, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(216, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    view_Rectangle: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(1, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(205, false, 1),
        opacity: 1,
        backgroundColor: "rgba(229, 231, 240, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group5Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(230, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_NewPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(116, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    textlabel_Text2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(100, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    attrbuted_textlabel_Text2: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(216, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    view_RectangleCopy2: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(1, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(261, false, 1),
        opacity: 1,
        backgroundColor: "rgba(229, 231, 240, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    group_Group6Copy2Group: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(286, false, 1),
        opacity: 1,
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_ConfirmPasswordText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(146, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    textlabel_Text3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(70, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    attrbuted_textlabel_Text3: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(94, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(23, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(216, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(0, false, 1),
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
    view_RectangleCopy22: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(311, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(1, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(40, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(317, false, 1),
        opacity: 1,
        backgroundColor: "rgba(229, 231, 240, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
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
				style={styles.ProfileBioChangePasswordView}>
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
		<View data-elementId='group_Group6' 
		   style={[styles.group_Group6Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_OldPassword' 
			   style={styles.textlabel_OldPasswordText}>Old Password
		  </Text>
		  <Text data-elementId='textlabel_' 
			   style={styles.textlabel_Text}>************
		  </Text>
		</View>
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='group_Group5' 
		   style={[styles.group_Group5Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_NewPassword' 
			   style={styles.textlabel_NewPasswordText}>New Password
		  </Text>
		  <Text data-elementId='textlabel_' 
			   style={styles.textlabel_Text2}>************
		  </Text>
		</View>
		<View data-elementId='view_RectangleCopy' 
		   style={[styles.view_RectangleCopy2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View data-elementId='group_Group6Copy2' 
		   style={[styles.group_Group6Copy2Group, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		  <Text data-elementId='textlabel_ConfirmPassword' 
			   style={styles.textlabel_ConfirmPasswordText}>Confirm Password
		  </Text>
		  <Text data-elementId='textlabel_' 
			   style={styles.textlabel_Text3}>************
		  </Text>
		</View>
		<View data-elementId='view_RectangleCopy2' 
		   style={[styles.view_RectangleCopy22, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
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
