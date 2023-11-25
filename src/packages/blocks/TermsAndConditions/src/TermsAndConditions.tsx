import React from "react";

// Customizable Area Start
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Scale from "../../../components/src/Scale";
//@ts-ignore
import RenderHtml from 'react-native-render-html';
import { backArrow } from './assets';
import { AppHeader } from "../../../components/src/AppHeader";
import Loader from "../../../components/src/Loader";
// Merge Engine - import assets - Start
// Merge Engine - import assets - End

// Merge Engine - Artboard Dimension  - Start
let artBoardHeightOrg = 667;
let artBoardWidthOrg = 375;
// Merge Engine - Artboard Dimension  - End
// Customizable Area End

import TermsAndConditionsController, {
  Props,
} from "./TermsAndConditionsController";

export default class TermsAndConditions extends TermsAndConditionsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    const { navigation } = this.props;
    const width = Dimensions.get('window').width;
    // console.log("this.state.termsAndCondition",this.state.termsAndCondition); 
    // Merge Engine - render - Start
   
    return (
      <View style={styles.container}>
        <AppHeader
          title={'Terms & Conditions'}
          back={backArrow}
          onPressBack={() => navigation.goBack()}
          menu={undefined} logo={undefined}
          search={undefined} bell={undefined}
          onPress={() => { }}
          onPressNotification={() => { }}
          onPressSearch={() => { }}
          searchScreen={false}
          backArrow={undefined} />
        <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
          <View style={styles.mainView}>
            <RenderHtml
              contentWidth={width}
              source={{html: this.state.termsAndCondition}}
              tagsStyles={{pre: {fontSize:Scale(16),fontWeight:'400'}, p:{fontWeight:'500',padding:0,margin:0,fontSize:Scale(16)},strong:{fontWeight:'500'}}}
              classesStyles={{fontRed: {color: 'red'}}}
              />
            {/* <Text style={styles.subHeading}>{this.state.termsAndCondition}</Text> */}
            {/* <Text style={[styles.subHeading,{marginTop:Scale(15)}]}>{configJSON.terms2}</Text>
            <Text style={[styles.subHeading,{marginTop:Scale(15)}]}>{configJSON.terms2}</Text>
            <Text style={[styles.subHeading,{marginTop:Scale(15)}]}>{configJSON.terms2}</Text> */}
          </View>
        </ScrollView>
        <Loader loading={this.state.isLoading} style={{}} />
      </View>
    );
    // Merge Engine - render - End
    // Customizable Area End

  }
}

const styles = StyleSheet.create({
  // Customizable Area Start
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subHeading: {
    fontSize: Scale(17),
    fontWeight: '500',
    marginTop: Scale(5),
    letterSpacing: 0.7,
    lineHeight: Scale(25),
  },
  mainView: {
    // flex: 1,
    marginTop: Scale(20),
    marginHorizontal: Scale(15),
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  // Customizable Area End
});
