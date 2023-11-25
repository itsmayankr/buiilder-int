import React, { useEffect, useMemo, useRef, useState } from 'react'
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
} from 'react-native'
import FONTS from './Fonts/Fonts'
import Scale from '../../../components/src/Scale'


type Props = React.ComponentProps<typeof TextInput> & {
  label: string,
  value?:string,
  errorText?: string|any,
  labelPlaceHolder?:string,
  mandatory?:boolean,
  borderColorFocused?:ViewStyle['borderColor'],
  borderColor?:ViewStyle['borderColor'],
  containerStyle?:ViewStyle,hideLabelFocused?:boolean;
  labelStyle?:TextStyle,
  textColor?:TextStyle['color'],
  focusedTextColor?:TextStyle['color'],
  renderRightAccessory?: () => JSX.Element;
 
  focusedLabelColor?:TextStyle['color'],
 
  labelColor?:TextStyle['color'],
}

const AnimatedTextInput: React.FC<Props> = (props) => {
  const {
    label,
    errorText,
    defaultValue,
    containerStyle,labelPlaceHolder,
    labelStyle,
    style,
    mandatory,
    focusedTextColor,
    onBlur,
    onFocus,value,
    renderRightAccessory,
    borderColorFocused,
    borderColor,hideLabelFocused,
    labelColor,
    focusedLabelColor,
    textColor,
    ...restOfProps
  } = props
  const [isFocused, setIsFocused] = useState(false)
  
  const inputRef = useRef<TextInput>(null)
  const focusAnim = useRef(new Animated.Value(0)).current

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
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isFocused, value])

  let color = isFocused ? props.borderColorFocused : props.borderColor
  if (errorText) {
    color = '#B00020'
  }

  let colorLabel = isFocused ? props.focusedLabelColor : props.labelColor||color
  let colorText = isFocused ? props.focusedTextColor : props.textColor

  const RightAccessory=()=>{
    if(renderRightAccessory){
      return(
      <View style={styles.rightAccessory}>
        {renderRightAccessory()}
      </View>)
    }else return null

  }
  

  return (
    <View style={containerStyle}>
      <TextInput      
        style={[
          styles.input,
          style,
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
      
      {renderRightAccessory&&<RightAccessory/>}
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
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: Scale(16),

    paddingTop:Scale(10),
    borderWidth: 1,
    textAlignVertical:'top',
    borderRadius: Scale(5),
    fontFamily: FONTS.Regular,
    fontSize: Scale(14),
    height:Scale(40),
    
  },rightAccessory:{
    position:'absolute',
    right:0,
    alignSelf:'center',
    
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 0,
    width:Scale(200),

    
    
    
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

export default AnimatedTextInput