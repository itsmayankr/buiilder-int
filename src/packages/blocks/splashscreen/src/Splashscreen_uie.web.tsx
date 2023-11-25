//This an auto generated file for Artboard Name = Splashscreen And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet } from 'react-native'; 
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

 
 
export default class Splashscreen extends React.Component
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
    SplashscreenView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    imagenav_BitmapImageNav: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(80, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(97, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(155, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(374, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    view_Rectangle: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(391, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(140, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(704, false, 1),
        opacity: 1,
        backgroundColor: "rgba(31, 69, 252, 1)",
        borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    },
    textlabel_WelcomeYourNewsEText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(302, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(46, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(44, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(748, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
    },
    attrbuted_textlabel_WelcomeYourNewsEText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(302, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(46, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(44, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(748, false, 1),
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
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
    },
})

const styles = {...global_styles, ...local_styles}
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.SplashscreenView}>
		{/* <Image data-elementId='imagenav_Bitmap' 
		   style={styles.imagenav_BitmapImageNav}
		   source={imgc1eaef7b5e10e0789c863b3812e2ef96c37f2628}
		/> */}
		<View data-elementId='view_Rectangle' 
		   style={[styles.view_Rectangle, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_WelcomeYourNewsE' 
			   style={styles.textlabel_WelcomeYourNewsEText}>Welcome! Your News experience reimagined!
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
