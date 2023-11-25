import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { MultiSelect } from 'react-native-element-dropdown';
import CrossIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { backArrow } from './assets';
import Scale from '../../../components/src/Scale';

interface Props {
  countryDropdown: any;
  multiselect: any;
  country: any;
  onChangeItem: (item: any, index: any, type: any) => void;
  regionDropdown: any;
  region: any;
  languageDropdown: any;
  language: any;
  midiaHouseDropdown: any;
  mediaHouse: any;
  categoryDropdown: any;
  categories: any;
  onClickSkipSignUp: () => void;
  goBack: () => void;
}

export class SignUpPage2 extends Component<Props> {
  renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <View
          style={[
            styles.checkBox,
            { backgroundColor: item.isSelected ? 'blue' : '#fff' },
          ]}
        >
          <Icon name='check' size={13} color='#fff' />
        </View>
      </View>
    );
  };

  renderSelectedItem = (
    item: any,
    unSelect: ((item: any) => void) | undefined
  ) => (
    <TouchableOpacity onPress={() => unSelect && unSelect(item)} >
      <View style={styles.selectedStyle}>
        <Text style={styles.textSelectedStyle}>{item.label}</Text>
        <CrossIcon color='black' name='cross' size={22} />
      </View>
    </TouchableOpacity>
  );

  render() {
    const {
      countryDropdown,
      multiselect,
      country,
      onChangeItem,
      regionDropdown,
      region,
      languageDropdown,
      language,
      midiaHouseDropdown,
      mediaHouse,
      categoryDropdown,
      categories,
      goBack,
      onClickSkipSignUp
    } = this.props;
    return (
      <View style={{ marginTop: Scale(40), marginHorizontal: Scale(15) }}>
        <View style={styles.skipView}>
          <TouchableOpacity onPress={goBack}>
            <Image source={backArrow} style={{ height: Scale(20), width: Scale(20) }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickSkipSignUp}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity testID='btnBack' onPress={goBack}>
          <Image
            source={backArrow}
            style={{ height: Scale(20), width: Scale(20) }}
            resizeMode='contain'
          />
        </TouchableOpacity> */}
        <Text style={styles.headingText}>Let's customise the app for you: Please give your preferences</Text>
        <Text style={[styles.txtName, { marginTop: Scale(40) }]}>
          Select Country
        </Text>
        <View style={styles.Container}>
          {/* <Text style={{ fontWeight: 'bold', color: 'red' }}>*</Text> */}
          <MultiSelect
            testID='multiSelectCountry'
            style={styles.dropdown}
            containerStyle={[styles.shadow, {}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.searchContainer}
            iconStyle={styles.iconStyle}
            data={countryDropdown}
            ref={multiselect}
            labelField='label'
            valueField='index'
            placeholder='Country'
            value={country}
            search
            searchPlaceholder='Search...'
            onChange={(item, index) => onChangeItem(item, index, 'country')}
            renderItem={(item) => this.renderItem(item)}
            renderSelectedItem={this.renderSelectedItem}
          />
        </View>
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
          Select the region(s) you are interested in
        </Text>
        <View style={styles.Container}>
          <MultiSelect
            testID='multiSelectRegion'
            style={styles.dropdown}
            containerStyle={[styles.shadow, {}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.searchContainer}
            iconStyle={styles.iconStyle}
            data={regionDropdown}
            ref={multiselect}
            labelField='label'
            valueField='index'
            placeholder='Region'
            value={region}
            search
            searchPlaceholder='Search...'
            onChange={(item, index) => onChangeItem(item, index, 'region')}
            renderItem={(item) => this.renderItem(item)}
            renderSelectedItem={this.renderSelectedItem}
          />
          {/* <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(15) }}>*</Text> */}
        </View>
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
          Select language
        </Text>
        <View style={styles.Container}>
          <MultiSelect
            testID='multiSelectLanguage'
            style={styles.dropdown}
            containerStyle={[styles.shadow, {}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.searchContainer}
            iconStyle={styles.iconStyle}
            data={languageDropdown}
            ref={multiselect}
            labelField='label'
            valueField='index'
            placeholder='Language'
            value={language}
            search
            searchPlaceholder='Search...'
            onChange={(item, index) => onChangeItem(item, index, 'language')}
            renderItem={(item) => this.renderItem(item)}
            renderSelectedItem={this.renderSelectedItem}
          />
          {/* <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(15) }}>*</Text> */}
        </View>
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
          Select Media House
        </Text>
        <View style={styles.Container}>
          <MultiSelect
            testID='multiSelectMediaHouse'
            style={styles.dropdown}
            containerStyle={[styles.shadow, {}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.searchContainer}
            iconStyle={styles.iconStyle}
            data={midiaHouseDropdown}
            ref={multiselect}
            labelField='label'
            valueField='index'
            placeholder='Media house'
            value={mediaHouse}
            search
            searchPlaceholder='Search...'
            onChange={(item, index) => onChangeItem(item, index, 'media')}
            renderItem={(item) => this.renderItem(item)}
            renderSelectedItem={this.renderSelectedItem}
          />
          {/* <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(15) }}>*</Text> */}
        </View>
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>
          Select Categories
        </Text>
        <View style={styles.Container}>
          <MultiSelect
            testID='multiSelectCategory'
            style={styles.dropdown}
            containerStyle={[styles.shadow, {}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.searchContainer}
            iconStyle={styles.iconStyle}
            data={categoryDropdown}
            ref={multiselect}
            labelField='label'
            valueField='index'
            placeholder='Categories'
            value={categories}
            search
            searchPlaceholder='Search...'
            onChange={(item, index) => onChangeItem(item, index, 'category')}
            renderItem={(item) => this.renderItem(item)}
            renderSelectedItem={this.renderSelectedItem}
          />
          {/* <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(15) }}>*</Text> */}
        </View>
        {/* <Text style={[styles.txtName,{marginTop:Scale(50)}]}>Select a Country</Text>
        <View style={styles.dropDown}>
          <Dropdown
            style={styles.containerDrop}
            containerStyle={[styles.shadow, { height: this.state.countryDropdown.length > 5 ? Scale(350) : Scale(250) }]}
            data={this.state.countryDropdown}
            search
            searchPlaceholder="Search"
            dropdownPosition='bottom'
            inputSearchStyle={styles.searchContainer}
            labelField="label"
            valueField="value"
            placeholder="Country"
            placeholderStyle={{ color: 'gray', fontWeight: 'bold', left: 10 }}
            value={this.state.country}
            onChange={(item) => this.countrySelector(item, 'country')}
            renderItem={item => this._renderItem(item)}
          />
          <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(5) }}>*</Text>
        </View>
        {this.state.countryArray && this.state.countryArray.length > 0 &&
          <FlatList
            data={this.state.countryArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <View style={styles.selectedItemView}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => this.deleteItem(item, index, 'country')}>
                  <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        }
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>Select region you intrested in</Text>
        <View style={styles.dropDown}>
          <Dropdown
            style={styles.containerDrop}
            containerStyle={[styles.shadow, { height: this.state.regionDropdown.length > 5 ? Scale(350) : Scale(250), width: '90%' }]}
            data={this.state.regionDropdown}
            search
            searchPlaceholder="Search"
            dropdownPosition='bottom'
            inputSearchStyle={styles.searchContainer}
            labelField="label"
            valueField="value"
            placeholder="Region"
            placeholderStyle={{ color: 'gray', fontWeight: 'bold', left: 10 }}
            value={this.state.region}
            onChange={(item) => this.countrySelector(item, 'region')}
            renderItem={item => this._renderItem(item)}
          />
          <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(5) }}>*</Text>
        </View>
        {this.state.regionArray && this.state.regionArray.length > 0 &&
          <FlatList
            data={this.state.regionArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <View style={styles.selectedItemView}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => this.deleteItem(item, index, 'region')}>
                  <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        }
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>Select language</Text>
        <View style={styles.dropDown}>
          <Dropdown
            style={styles.containerDrop}
            containerStyle={[styles.shadow, { height: this.state.languageDropdown.length > 5 ? Scale(350) : Scale(250) }]}
            data={this.state.languageDropdown}
            search
            searchPlaceholder="Search"
            dropdownPosition='bottom'
            inputSearchStyle={styles.searchContainer}
            labelField="label"
            valueField="value"
            placeholder="Language"
            placeholderStyle={{ color: 'gray', fontWeight: 'bold', left: 10 }}
            value={this.state.language}
            onChange={(item) => this.countrySelector(item, 'language')}
            renderItem={item => this._renderItem(item)}
          />
          <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(5) }}>*</Text>
        </View>
        {this.state.languageArray && this.state.languageArray.length > 0 &&
          <FlatList
            data={this.state.languageArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <View style={styles.selectedItemView}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => this.deleteItem(item, index, 'language')}>
                  <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        }
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>Select Media House</Text>
        <View style={styles.dropDown}>
          <Dropdown
            style={styles.containerDrop}
            containerStyle={[styles.shadow, { height: this.state.midiaHouseDropdown.length > 5 ? Scale(350) : Scale(250), width: '90%' }]}
            data={this.state.midiaHouseDropdown}
            search
            searchPlaceholder="Search"
            dropdownPosition='bottom'
            inputSearchStyle={styles.searchContainer}
            labelField="label"
            valueField="value"
            placeholder="Media House"
            placeholderStyle={{ color: 'gray', fontWeight: 'bold', left: 10 }}
            value={this.state.mediaHouse}
            onChange={(item) => this.countrySelector(item, 'media')}
            renderItem={item => this._renderItem(item)}
          />
          <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(5) }}>*</Text>
        </View>
        {this.state.mediaHouseArray && this.state.mediaHouseArray.length > 0 &&
          <FlatList
            data={this.state.mediaHouseArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <View style={styles.selectedItemView}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => this.deleteItem(item, index, 'media')}>
                  <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        }
        <Text style={[styles.txtName, { marginTop: Scale(10) }]}>Select Categories</Text>
        <View style={styles.dropDown}>
          <Dropdown
            style={styles.containerDrop}
            containerStyle={[styles.shadow, { height: this.state.categoryDropdown.length > 5 ? Scale(350) : Scale(250), width: '90%' }]}
            data={this.state.categoryDropdown}
            search
            searchPlaceholder="Search"
            dropdownPosition='bottom'
            inputSearchStyle={styles.searchContainer}
            labelField="label"
            valueField="value"
            placeholder="Categories"
            placeholderStyle={{ color: 'gray', fontWeight: 'bold', left: 10 }}
            value={this.state.categories}
            onChange={(item) => this.countrySelector(item, 'category')}
            renderItem={item => this._renderItem(item)}
          />
          <Text style={{ fontWeight: 'bold', color: 'red', right: Scale(15), bottom: Scale(5) }}>*</Text>
        </View>
        {this.state.categoryArray && this.state.categoryArray.length > 0 &&
          <FlatList
            data={this.state.categoryArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <View style={styles.selectedItemView}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => this.deleteItem(item, index, 'category')}>
                  <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        } */}
      </View>
    );
  }
}

export default SignUpPage2;

const styles = StyleSheet.create({
  item: {
    padding: Scale(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedTextStyle: {
    fontSize: Scale(14),
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
  headingText: {
    fontSize: Scale(18),
    fontWeight: 'bold',
    color: '#000',
    marginTop: Scale(40),
    textAlign: "center",
    alignSelf: 'center'
  },
  txtName: {
    marginLeft: Scale(1),
    color: '#000',
    fontSize: Scale(14),
    fontWeight: '800',
  },
  Container: {
    backgroundColor: '#fff',
    marginTop: Scale(10),
    // flexDirection: 'row',
    // width: '100%',
    // justifyContent: 'space-between',
    // // height: Scale(60),
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: Scale(5),
    // borderRadius: Scale(12),
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
  placeholderStyle: {
    fontSize: Scale(16),
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: Scale(15),
    // width:'100%',
    // alignSelf:'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 2,height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation:2
  },
  iconStyle: {
    width: Scale(20),
    height: Scale(20),
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
  skipView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize:Scale(16),
    fontWeight:'bold',
    color:'blue'
  },
});
