import React from 'react';

// Customizable Area Start
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import { AppHeader } from '../../../components/src/AppHeader';
import { backArrow } from './assets';
import Scale from '../../../components/src/Scale';
import { MultiSelect } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Feather';
import CrossIcon from 'react-native-vector-icons/Entypo';
import Loader from '../../../components/src/Loader';
// Customizable Area End

import NotificationsController, { Props } from './NotificationsController';

export default class Notifications extends NotificationsController {
  constructor(props: Props) {
    super(props);
  }

  // Customizable Area Start
  renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <View
          style={[
            styles.checkBox,
            {
              backgroundColor: item.isSelected ? 'blue' : '#fff',
            },
          ]}
        >
          <Icon name='check' size={18} color='#fff' />
        </View>
      </View>
    );
  };
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    const { navigation } = this.props;
    console.log('scrollRef', this.scrollRef);
    return (
      <View style={styles.container}>
        <AppHeader
          title={'Preferences'}
          back={backArrow}
          onPressBack={() => navigation.goBack()}
          menu={undefined}
          logo={undefined}
          search={undefined}
          bell={undefined}
          onPress={() => {}}
          onPressNotification={() => {}}
          onPressSearch={() => {}}
          searchScreen={false}
          backArrow={undefined}
        />
        <ScrollView style={styles.scrollContainer} ref={this.scrollRef}>
          <View style={styles.mainView}>
            <Text style={[styles.txtName, { marginTop: Scale(30) }]}>
              Select Country
            </Text>
            <View style={styles.Container}>
              <MultiSelect
                style={styles.dropdown}
                containerStyle={[styles.shadow, {}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchContainer}
                iconStyle={styles.iconStyle}
                data={this.state.countryDropdown}
                labelField='label'
                valueField='index'
                placeholder='Country'
                value={this.state.country}
                search
                searchPlaceholder='Search...'
                onFocus={() => console.log('onFocus')}
                onChange={(item: any, index: any) =>
                  this.onChangeItem(item, index, 'country')
                }
                renderItem={(item) => this.renderItem(item)}
                // alwaysRenderItemSelected={true}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <CrossIcon color='black' name='cross' size={20} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
              Select the region(s) you are interested in
            </Text>
            <View style={styles.Container}>
              <MultiSelect
                style={styles.dropdown}
                containerStyle={[styles.shadow, {}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchContainer}
                iconStyle={styles.iconStyle}
                data={this.state.regionDropdown}
                labelField='label'
                valueField='index'
                placeholder='Region'
                value={this.state.region}
                search
                searchPlaceholder='Search...'
                onChange={(item, index) =>
                  this.onChangeItem(item, index, 'region')
                }
                renderItem={(item) => this.renderItem(item)}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <CrossIcon color='black' name='cross' size={20} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
              Select language
            </Text>
            <View style={styles.Container}>
              <MultiSelect
                style={styles.dropdown}
                containerStyle={[styles.shadow, {}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchContainer}
                iconStyle={styles.iconStyle}
                data={this.state.languageDropdown}
                labelField='label'
                valueField='index'
                placeholder='Language'
                value={this.state.language}
                search
                searchPlaceholder='Search...'
                onChange={(item, index) =>
                  this.onChangeItem(item, index, 'language')
                }
                renderItem={(item) => this.renderItem(item)}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <CrossIcon color='black' name='cross' size={20} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
              Select Media House
            </Text>
            <View style={styles.Container}>
              <MultiSelect
                style={styles.dropdown}
                containerStyle={[styles.shadow, {}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchContainer}
                iconStyle={styles.iconStyle}
                data={this.state.midiaHouseDropdown}
                labelField='label'
                valueField='index'
                placeholder='Media house'
                value={this.state.mediaHouse}
                search
                searchPlaceholder='Search...'
                onChange={(item, index) =>
                  this.onChangeItem(item, index, 'media')
                }
                renderItem={(item) => this.renderItem(item)}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <CrossIcon color='black' name='cross' size={20} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
              Select Categories
            </Text>
            <View style={[styles.Container, { marginBottom: 20 }]}>
              <MultiSelect
                style={styles.dropdown}
                containerStyle={[styles.shadow, {}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchContainer}
                iconStyle={styles.iconStyle}
                data={this.state.categoryDropdown}
                labelField='label'
                valueField='index'
                placeholder='Categories'
                value={this.state.categories}
                search
                searchPlaceholder='Search...'
                onChange={(item, index) =>
                  this.onChangeItem(item, index, 'category')
                }
                renderItem={(item) => this.renderItem(item)}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <CrossIcon color='black' name='cross' size={20} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <TouchableOpacity
              style={styles.saveBtn}
              disabled={this.state.enable}
              onPress={this.onClickSavePrefrences}
            >
              <Text style={styles.saveText}>SAVE PREFERENCES</Text>
            </TouchableOpacity>
          </View>
          <Loader loading={this.state.isLoading} />
        </ScrollView>
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
    backgroundColor: '#ffffffff',
  },
  Container: {
    backgroundColor: '#fff',
    marginTop: Scale(10),
  },
  mainView: {
    flex: 1,
    marginHorizontal: Scale(15),
  },
  scrollContainer: {
    flex: 1,
    // backgroundColor:'cyan',
    // height:200
  },
  dropdown: {
    height: Scale(55),
    backgroundColor: '#fff',
    borderRadius: Scale(12),
    padding: Scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
    width: '100%',
    zIndex: 1,
  },
  placeholderStyle: {
    fontSize: Scale(16),
  },
  selectedTextStyle: {
    fontSize: Scale(14),
  },
  iconStyle: {
    width: Scale(20),
    height: Scale(20),
  },
  checkBox: {
    height: Scale(20),
    width: Scale(20),
    // backgroundColor:'red',
    borderRadius: Scale(3),
    borderWidth: 1,
    borderColor: 'blue',
    marginRight: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Scale(14),
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: Scale(8),
    marginRight: Scale(12),
    paddingHorizontal: Scale(12),
    paddingVertical: Scale(8),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: Scale(5),
  },
  textSelectedStyle: {
    marginRight: Scale(5),
    fontSize: Scale(16),
  },
  txtName: {
    marginLeft: Scale(1),
    color: '#000',
    fontSize: Scale(14),
    fontWeight: '800',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: Scale(10),
    backgroundColor: '#fff',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: Scale(15),
  },
  item: {
    padding: Scale(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveBtn: {
    marginTop: Scale(50),
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(10),
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveText: {
    fontWeight: '600',
    fontSize: Scale(18),
    color: '#fff',
  },
});
// Customizable Area End
