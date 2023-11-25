//This an auto generated file for Artboard Name = Termscondition And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, View, Text, StyleSheet, Image} from 'react-native'; 
import React from 'react'; 

import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import global_styles from "../../utilities/src/global_styles";
let screenWidth = Dimensions.get('window').width; 
import { img43a0d309b426a324b2a6f247a4e95effc536767c } from './assets'
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

 
 
export default class Termscondition extends React.Component
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
    TermsconditionView: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        alignItems: "flex-start",
    },
    textlabel_TermsConditionsText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(240, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(33, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(64, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(71, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
    },
    attrbuted_textlabel_TermsConditionsText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(240, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(33, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(64, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(71, false, 1),
        opacity: 1,
        backgroundColor: "transparent",
        fontStyle: "normal",
        fontWeight: "bold",
        includeFontPadding: false,
        padding: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
        color: "rgba(17, 21, 28, 1)",
        textAlign: "left",
        textAlignVertical: "top",
        fontFamily: "Poppins-SemiBold",
        fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
    },
    imagenav_BitmapImageNav: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(14, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(32, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(80, false, 1),
        opacity: 1,
        resizeMode: "contain",
    },
    textlabel_IfYouHaveAWebsitText: {
        position: "absolute",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(540, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(146, false, 1),
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
    attrbuted_textlabel_IfYouHaveAWebsitText: {
        position: "relative",
        width: MergeEngineUtilities.deviceBasedDynamicDimension(342, true, 1),
        height: MergeEngineUtilities.deviceBasedDynamicDimension(540, false, 1),
        marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(24, true, 1),
        marginTop: MergeEngineUtilities.deviceBasedDynamicDimension(146, false, 1),
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
})

const styles = {...global_styles, ...local_styles}
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.TermsconditionView}>
		<View data-elementId='view_Rectangle13Copy3' 
		   style={[styles.view_Rectangle13Copy3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text data-elementId='textlabel_TermsConditions' 
			   style={styles.textlabel_TermsConditionsText}>Terms & Conditions
		  </Text>
		<Image data-elementId='imagenav_Bitmap' 
		   style={styles.imagenav_BitmapImageNav}
		   source={img43a0d309b426a324b2a6f247a4e95effc536767c}
		/>
		  <Text data-elementId='textlabel_IfYouHaveAWebsit' 
			   style={styles.textlabel_IfYouHaveAWebsitText}>If you have a website or software application, you will likely need to have Terms of Service or as some people call it – Terms of Use for it. Terms of Service or Terms and Conditions (T&C) will, in legal terms, limit your business or personal liability. {'\n'}{'\n'}It is highly recommended to have robust and comprehensive Terms and Conditions for any website, online business, or application. It will provide you with proper protection in case some of your customers or users will decide to take legal action against your business. {'\n'}{'\n'}The best practice is only to allow using your service to people that agree with your Terms & Conditions, Disclaimer and Privacy Policy. This way, your website, business, or app will be protected from potential legal dangers. 
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
