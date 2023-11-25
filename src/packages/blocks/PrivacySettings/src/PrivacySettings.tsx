import React from 'react';

// Customizable Area Start
import {
  Dimensions,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import MergeEngineUtilities from '../../utilities/src/MergeEngineUtilities';

// Merge Engine - Artboard Dimension  - Start
let artBoardHeightOrg = 667;
let artBoardWidthOrg = 375;
// Merge Engine - Artboard Dimension  - End

import MultiSelect from 'react-native-multiple-select';
// Customizable Area End

import PrivacySettingsController, { Props } from './PrivacySettingsController';
export default class PrivacySettings extends PrivacySettingsController {
  // Customizable Area Start
  multiSelect: any;
  // Customizable Area End
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    Dimensions.addEventListener('change', (e) => {
      MergeEngineUtilities.init(
        artBoardHeightOrg,
        artBoardWidthOrg,
        Dimensions.get('window').height,
        Dimensions.get('window').width
      );
      this.forceUpdate();
    });
    this.multiSelect = React.createRef();
    // Customizable Area End
  }

  // Customizable Area Start
  items = [
    // name key is must. It is to show the text in front
    { id: 1, name: 'angellist' },
    { id: 2, name: 'codepen' },
    { id: 3, name: 'envelope' },
    { id: 4, name: 'etsy' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10, name: 'instagram' },
  ];

  onSelectedItemsChange = (item: any) => {
    console.log('item', item);
    this.setState({ selectedItems: item });
  };

  async componentDidMount() {
    console.log('multiselect', this.multiSelect);
  }

  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    const { selectedItems } = this.state;
    return (
      <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
        <TouchableWithoutFeedback
          testID='hideKeyboard'
          onPress={() => {
            this.hideKeyboard();
          }}
        >
          <View>
            <MultiSelect
              // testID='MultiSelect'
              hideTags
              items={this.items}
              uniqueKey='id'
              onSelectedItemsChange={(item: any) =>
                this.onSelectedItemsChange(item)
              }
              selectedItems={this.state.selectedItems}
              selectText='Pick Items'
              searchInputPlaceholderText='Search Items...'
              ref={(component) => {
                this.multiSelect = component;
              }}
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor='#CCC'
              tagBorderColor='#CCC'
              tagTextColor='#CCC'
              selectedItemTextColor='#CCC'
              selectedItemIconColor='#CCC'
              itemTextColor='#000'
              displayKey='name'
              searchInputStyle={{ color: '#CCC' }}
              submitButtonColor='#48d22b'
              submitButtonText='Submit'
            />
            <View>
              {this.multiSelect &&
                this.multiSelect.getSelectedItemsExt &&
                this.multiSelect.getSelectedItemsExt(selectedItems)}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: Platform.OS === 'web' ? '75%' : '100%',
    maxWidth: 650,
    backgroundColor: '#ffffffff',
  },
  title: {
    marginBottom: 32,
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 8,
  },
  body: {
    marginBottom: 32,
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 8,
  },
  bgPasswordContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000000',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#767676',
    borderRadius: 2,
    padding: 10,
    borderWidth: Platform.OS === 'web' ? 0 : 1,
  },
  bgMobileInput: {
    flex: 1,
  },
  showHide: {
    alignSelf: 'center',
  },
  imgShowhide: Platform.OS === 'web' ? { height: 30, width: 30 } : {},
});
 // Customizable Area End
