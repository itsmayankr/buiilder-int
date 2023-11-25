import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Scale from "../../../components/src/Scale";
import { search, close } from "./assets";

//@ts-ignore


// Merge Engine - import assets - Start
// Merge Engine - import assets - End

// Merge Engine - Artboard Dimension  - Start

// Merge Engine - Artboard Dimension  - End
// Customizable Area End

import ElasticSearchController, {
  Props,
} from "./ElasticSearchController";

export default class ElasticSearch extends ElasticSearchController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  renderSearchBox = () => {
    return (
      <View style={styles.searchbox}>
        <Image source={search} style={styles.searchicon} />
        <TextInput
            style={styles.textinput}
            placeholder='Search'
            onChangeText={(text: any) =>
              this.setState({ searchtext: text})
            }
          />
           <Image source={close}  />
      </View>
    )
  }

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <View style={styles.container}>
        {this.renderSearchBox()}
      </View>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  searchbox: {
    height: Scale(50),
    // backgroundColor: "red",
    marginVertical: Scale(40),
    marginHorizontal: Scale(20),
    borderRadius: Scale(10),
    borderColor: "grey",
    borderWidth: Scale(1),
    paddingHorizontal: 20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },

  searchicon: {
    height: Scale(20),
    width: Scale(20)
  },

  textinput:{

    width: Scale(250),
    height: Scale(50)
  },


});
// Customizable Area End
