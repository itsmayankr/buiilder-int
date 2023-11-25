import React from 'react';
// Customizable Area Start
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CheckBox from '@react-native-community/checkbox';
// Customizable Area End

import FilteroptionsController, {
  Props,
  //configJSON
} from './FilteroptionsController';

export default class Filteroptions extends FilteroptionsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  getBrands(item: any, index: any) {
    let value = item.attributes;
    return (
      <View style={[styles.flexBox, styles.checkBox]} key={item.id}>
        <CheckBox
          key={value.id}
          value={item.checked}
          boxType={'square'}
          style={Platform.OS === 'ios' ? styles.innerCheckBox : null}
          animationDuration={0}
          onValueChange={() => this.onCheck(item, index)}
          testID={'getBrands'}
        />
        <Text style={styles.checkText}> {value.name}</Text>
      </View>
    );
  }
  getCategory(item: any, index: any) {
    let value = item.attributes.category;
    return (
      <View style={[styles.flexBox, styles.checkBox]} key={item.id}>
        <CheckBox
          key={value.id}
          value={item.checked}
          boxType={'square'}
          style={Platform.OS === 'ios' ? styles.innerCheckBox : null}
          animationDuration={0}
          onValueChange={() => this.onCheckCategory(item, index)}
          testID={'getCategory'}
        />
        <Text style={styles.checkText}> {value.name}</Text>
      </View>
    );
  }
  onCheck = (item: any, i: any) => {
    let items = [];
    items = this.state.GetAllBrand;
    items[i].checked = items[i].checked ? !items[i].checked : true;
    console.log(items, 'item.checked');
    if (items) {
      items.forEach((d: any) => {
        if (item.id === d.id) {
          if (d.checked) {
            this.state.selectedItems.push(d);
          } else {
            this.setState({ selectedItems: [] });
          }
        }
      });
    }

    this.setState({ GetAllBrand: items });
  };
  onCheckCategory = (item: any, i: any) => {
    let items = [];
    items = this.state.arrayHolder;
    items[i].checked = items[i].checked ? !items[i].checked : true;
    console.log(items, 'item.checked');
    if (items) {
      items.forEach((d: any) => {
        if (item.id === d.id) {
          console.log(item.id, 'item.id', d.id, 'd.id');
          if (d.checked) {
            this.state.selectedCategory.push(d);
          } else {
            this.setState({
              selectedCategory: [],
            });
          }
        }
      });
    }

    this.setState({ data: items });
  };
  searchFilterFunction = (text: any) => {
    if (this.state.brand) {
      if (text === '') {
        this.setState({
          GetAllBrand: this.state.BrandList,
        });
      } else {
        let Name = this.state.BrandList;
        const textData = Name.filter((item: any) =>
          item.attributes.name
            .toLocaleLowerCase()
            .startsWith(text.toLowerCase())
        );
        this.setState({ GetAllBrand: textData });
      }
    } else if (this.state.category) {
      if (text === '') {
        this.setState({
          arrayHolder: this.state.categoryArray,
        });
      } else {
        let Name = this.state.categoryArray;
        const textData = Name.filter((item: any) =>
          item.attributes.category.name
            .toLocaleLowerCase()
            .startsWith(text.toLowerCase())
        );
        this.setState({ arrayHolder: textData });
      }
    }
  };

  valueChange(value: any) {
    this.setState({
      priceMin: value[0],
      priceMax: value[1],
    });
  }

  valueChangeFinish() {
    this.setState({
      minValue: this.state.priceMin,
      maxValue: this.state.priceMax,
    });
  }

  renderPriceRange() {
    if (!this.state.pricerange) {
      return null;
    }
    const { minValue, maxValue } = this.state;
    const sliderLength = windowWidth - 200;
    const min =
      this.props.navigation.state.params &&
      this.props.navigation.state.params.min
        ? this.props.navigation.state.params.min
        : 0;
    const max =
      this.props.navigation.state.params &&
      this.props.navigation.state.params.max
        ? this.props.navigation.state.params.max
        : 100;
    return (
      <View style={styles.sliderContainer}>
        <MultiSlider
          onValuesChange={(value) => this.valueChange(value)}
          onValuesChangeFinish={() => this.valueChangeFinish()}
          sliderLength={sliderLength}
          values={[minValue, maxValue]}
          min={min}
          max={max}
          enableLabel={true}
          step={1}
        />
      </View>
    );
  }
  renderBrandList() {
    const { GetAllBrand } = this.state;
    if (!this.state.brand) {
      return null;
    }
    return (
      <View>
        <View style={[styles.flexBox, styles.textBox]}>
          <Icon
            name='search'
            size={15}
            style={styles.searchIcon}
            color='#808080'
          />
          <TextInput
            style={styles.inputStyle}
            placeholder='Search for a Brand'
            onChangeText={(text) => this.searchFilterFunction(text)}
            testID={'filterBrand'}
          />
        </View>
        <FlatList
          renderItem={({ item, index }) => this.getBrands(item, index)}
          contentContainerStyle={styles.flatContainer}
          scrollEnabled={true}
          extraData={this.state}
          keyExtractor={(item: any) => item.id}
          data={GetAllBrand}
        />
      </View>
    );
  }
  renderCategoryList() {
    if (!this.state.category) {
      return null;
    }
    return (
      <View>
        <View style={[styles.flexBox, styles.textBox]}>
          <Icon
            name='search'
            size={15}
            style={styles.searchIcon}
            color='#808080'
          />
          <TextInput
            style={styles.inputStyle}
            placeholder='Search for a Category'
            onChangeText={(text) => this.searchFilterFunction(text)}
            testID={'filterCategory'}
          />
        </View>
        <FlatList
          renderItem={({ item, index }) => this.getCategory(item, index)}
          contentContainerStyle={styles.flatContainer}
          scrollEnabled={true}
          extraData={this.state}
          keyExtractor={(item: any) => item.id}
          data={this.state.arrayHolder}
        />
      </View>
    );
  }

  updateItemsCheckedStatus = () => {
    const { GetAllBrand, selectedItems, data, selectedCategory } = this.state;

    if (selectedItems && selectedItems.length > 0 && GetAllBrand) {
      const updatedBrandList = GetAllBrand.map((item: any) => ({
        ...item,
        checked: !!selectedItems.find((o: any) => o.id === item.id),
      }));
      this.setState({
        GetAllBrand: updatedBrandList,
      });
    }

    if (selectedCategory && selectedCategory.length > 0 && data) {
      const updatedCategoryList = data.map((item: any) => ({
        ...item,
        checked: !!selectedCategory.find((o: any) => o.id === item.id),
      }));
      this.setState({
        data: updatedCategoryList,
      });
    }
  };
  //Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    this.updateItemsCheckedStatus();

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={[styles.flexBox, styles.containerBox]}>
            <View style={styles.leftContent}>
              <TouchableOpacity
                style={[
                  styles.textBtn,
                  this.state.pricerange ? styles.bgWhite : null,
                ]}
                onPress={() => this.openFilter('pricerange')}
                testID={'openFilterPrice'}
              >
                <Text style={styles.textButton}>Price range</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.textBtn,
                  this.state.brand ? styles.bgWhite : null,
                ]}
                onPress={() => this.openFilter('brand')}
                testID={'openFilterBrand'}
              >
                <Text style={styles.textButton}>Brand</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.textBtn,
                  this.state.category ? styles.bgWhite : null,
                ]}
                onPress={() => this.openFilter('category')}
                testID={'openFiltercategory'}
              >
                <Text style={styles.textButton}>Category</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightContent}>
              {this.renderPriceRange()}
              {this.renderBrandList()}
              {this.renderCategoryList()}
            </View>
          </View>
          <View style={[styles.flexBox, styles.buttonBox]}>
            <TouchableOpacity
              style={styles.cancelbtn}
              onPress={() => this.props.navigation.goBack()}
              testID={'BackPage'}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.applybtn]}
              onPress={() => this.applyAllfilters()}
              testID={'applyFilter'}
            >
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 650,
    backgroundColor: '#ffffffff',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContent: {
    width: '35%',
    backgroundColor: '#ddd',
    height: '100%',
    paddingVertical: 15,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  rightContent: {
    width: '65%',
    height: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  textBtn: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  textButton: {
    fontSize: 16,
    color: '#444',
  },
  containerBox: {
    height: windowHeight - 150,
  },
  checkText: {
    fontSize: 16,
  },
  checkBox: {
    alignItems: 'center',
    marginVertical: 5,
  },
  innerCheckBox: {
    height: 25,
    width: 25,
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  cancelbtn: {
    backgroundColor: '#ccc',
    width: '49%',
    borderRadius: 6,
    padding: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  applybtn: {
    backgroundColor: 'green',
    width: '49%',
    borderRadius: 6,
    padding: 10,
  },
  flatContainer: {
    paddingBottom: 50,
  },
  buttonBox: {
    padding: 15,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFF',
  },
  searchIcon: {},
  inputStyle: {
    width: '100%',
    paddingLeft: 25,
  },
  textBox: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  sliderContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  // disableButton:{
  //   opacity:0.5
  // },
  // activeButton:{
  //   opacity:1
  // }
});
// Customizable Area End
