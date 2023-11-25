import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Platform,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  MaskedViewBase,
} from 'react-native'
import FONTS from './Fonts/Fonts'
import Scale from '../../../components/src/Scale'
import CountryPicker, {

  CountryCode,
  CountryCodeList,
  Flag
} from "react-native-country-picker-modal";
import { COLORS } from './Globals';
import SolidArrowDown from './SolidArrowDown';




type Props = React.ComponentProps<typeof TextInput> & {
  label: string,
  value?:string,
  errorText?: string|any,
  labelPlaceHolder?:string,
  mandatory?:boolean,
  countryCode : CountryCode,
  callingCode : string,
  setCountryCode : (val:string) => void,
  setCallingCode : (val:string) => void,
  borderColorFocused?:ViewStyle['borderColor'],
  borderColor?:ViewStyle['borderColor'],
  hideLabelFocused?:boolean;
  labelStyle?:TextStyle,
  textColor?:TextStyle['color'],
  focusedTextColor?:TextStyle['color'],
  renderRightAccessory?: () => JSX.Element;
   isDisabled:boolean;
  focusedLabelColor?:TextStyle['color'],
 
  labelColor?:TextStyle['color'],
}

const MobileTextInput: React.FC<Props> = (props) => {
  const {
    label,
    errorText,
    defaultValue,
    labelPlaceHolder,
    labelStyle,
    isDisabled,
    mandatory,
    focusedTextColor,
    onBlur,
    onFocus,value,
    renderRightAccessory,
    borderColorFocused,
    borderColor,hideLabelFocused,
    labelColor,
    focusedLabelColor,
    textColor,setCallingCode,setCountryCode,countryCode,callingCode,
    ...restOfProps
  } = props
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setisTouched] = useState(false)
  //const [value, setValue] = useState(props.defaultValue || '');
  const inputRef = useRef<TextInput>(null)
  const [isCountryPickerVisible, setIsCountryPickerVisible] =
  useState<boolean>(false);
  const focusAnim = useRef(new Animated.Value(0)).current

  const CountryCodeListRevised:CountryCode[]= ['IN','AE','GB', 'US',"AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "BQ", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CD", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HU", "IS", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "CG", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "ST", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "UM", "VI", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW", "KI", "HK", "AX"];

  const keyboardType = useMemo(
    () =>
      props.keyboardType
        ? props.keyboardType
        : Platform.OS === 'ios'
        ? 'ascii-capable'
        : 'default',
    [props.keyboardType],
  );
  

useEffect(() => {

  if(isFocused&&!isTouched){
setisTouched(true)
  }
}, [isFocused])


  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isTouched || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isTouched, value])

  let color = isFocused ? props.borderColorFocused : props.borderColor
  if (errorText) {
    color = '#B00020'
  }

  let colorLabel = isFocused ? props.focusedLabelColor : props.labelColor||color
  let colorText = isFocused ? props.focusedTextColor : props.textColor
  

  

  return (
    <View style={styles.mainWrapper}>
      <View style={[styles.containerStyle,{borderColor:color}]}>
        {isTouched&&
      <TouchableOpacity
        key="countryCode"
        activeOpacity={isDisabled ? 1 : 0.8}
        onPress={
          !isDisabled ? () => setIsCountryPickerVisible(true) : undefined
        }
        style={[styles.phoneNumberLeftContainer]}>
        <Fragment>
          <View
            style={styles.phoneNumberFlagContainer}>
            <Flag
              countryCode={countryCode}
              
              flagSize={Platform.OS === 'android' ? Scale(16) : Scale(16)}
            />
          </View>
        </Fragment>
        <Text style={styles.phoneNumberCallingCodeText}>+{callingCode}</Text>
        <SolidArrowDown/>
        
      </TouchableOpacity>}
      <CountryPicker
        visible={isCountryPickerVisible}
        onClose={() => setIsCountryPickerVisible(false)}
        countryCode={countryCode}
        withCountryNameButton={false}
        
        withCallingCode={true}
        withCallingCodeButton
        preferredCountries={CountryCodeListRevised}
        withFlag={true}
        withFlagButton={true}
        withFilter={false}  
        withCloseButton={true}
        
        
        withModal={true}

        containerButtonStyle={styles.countryPickerContainer}
        onSelect={country => {
          setCountryCode(country.cca2);
          setCallingCode(country.callingCode[0]);
        }}
      />
      <TextInput      
        style={[
          styles.input,
          !isTouched&&{borderWidth:0},
        
          {color:colorText},
          {
            borderColor: color,
           
          },
        ]}        
        ref={inputRef}
        
        onChangeText={props.onChangeText}
        {...restOfProps}
        keyboardType={keyboardType}
        value={value}
        onBlur={(event) => {
          setIsFocused(false)
          onBlur?.(event)
        }}
        onFocus={(event) => {
          setIsFocused(true)
          onFocus?.(event)
        }}
      />
      
      
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
               style={[
                styles.labelContainer,
                {
                  transform: [
                    {
                      scale: focusAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, hideLabelFocused?0: 0.6],
                      }),
                    },
                    {
                      translateY: focusAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [Scale(10), Scale(0)],
                      }),
                    },
                    {
                      translateX: focusAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [Scale(16),-Scale(39) ],
                      }),
                    },
                  ],
                },
              ]}
        >
          <Text
            style={[
              styles.label,
              props.labelStyle,
                      {
                color:colorLabel,
              },
            ]}
          >
            {(labelPlaceHolder&&(!isFocused&&!value))?labelPlaceHolder:  label}
            {errorText||mandatory ? '*' : ''}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: Scale(16),

    paddingTop:Scale(10),
    borderLeftWidth: 1,
    textAlignVertical:'top',

    fontFamily: FONTS.Regular,
    fontSize: Scale(14),
    flex:1,
    height:Scale(40),
    
  },rightAccessory:{
    position:'absolute',
    right:0,
    alignSelf:'center',
    
  },  phoneNumberCallingCodeText: {
    fontSize: Scale(14),
    lineHeight: Scale(35),
    color: COLORS.black,
    fontFamily:FONTS.Regular,
    fontWeight:'400',
    
    paddingLeft: Scale(2),
    paddingRight: Scale(5),
  },
  phoneNumberDivider: {
    height: 25,
    width: 0,
    borderWidth: 0.65,
    backgroundColor: COLORS.gray,
    borderColor: COLORS.gray,
    marginLeft: Scale(5),
  },
  countryPickerContainer: {
    opacity: 0,
    height: 0,
    width: 0,
  }, phoneNumberLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Scale(10),
    height:Scale(34),
    alignSelf:'flex-end',
    paddingRight:Scale(5)
    
    
    
 
    
    
  },  phoneNumberFlagContainer: {
    width: Scale(28),
    height: Scale(18),
    
    
  },
  phoneNumberFlagMaskedView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    top: 0,
    left: 3,
    width: 45,
    height: 30,
    borderRadius: 1,
    borderColor: 'red',
    borderWidth: 4,
    backgroundColor: COLORS.white,
  },
   containerStyle: {

    borderWidth: 1,
    alignContent: "flex-start",
    flexDirection: "row",
    borderRadius: Scale(5),
    justifyContent: "flex-start",
    
  },
  mainWrapper:{    marginBottom: Scale(12),},
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 0,
    width:Scale(200),

    
    
    
  },
  labelContainerFocused: {
    position: 'absolute',
    paddingHorizontal: 0,
    width:Scale(200),
    transform: [
      {
        scale: 0.6
      },
      {
        translateY: 0
        
      },
      {
        translateX: -Scale(39)
        
      },
    ],

    
    
    
  },
  label: {
    fontFamily: FONTS.Regular,
    fontSize: Scale(14),
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
    fontFamily: 'Avenir-Medium',
  },
})

export default MobileTextInput