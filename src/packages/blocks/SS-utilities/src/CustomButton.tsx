import React, { ReactElement, ReactNode } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { height } from "./Dimensions";
import FONTS from "./Fonts/Fonts";
import Scale from "../../../components/src/Scale";
import { COLORS } from "./Globals";

type Props = {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  styleDisabled?: ViewStyle;
  loading?: boolean;
  loadingColor?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  testID?: string;
  text?: string | ReactElement;
  textStyle?: TextStyle;
  iconContainerStyle?: ViewStyle;
  disabled?: boolean;
};

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      testID={props.testID}
      disabled={props.loading || props.disabled}
      onPress={props.onPress}
      style={[
        styles.container,
        props.disabled ? props.styleDisabled : props.style
      ]}
    >
      {props.loading ? (
        <ActivityIndicator size="small" color={props.loadingColor || "white"} />
      ) : (
        <View style={styles.titleContainer}>
          <View style={[styles.iconContainer, props.iconContainerStyle]}>
            {props.icon || null}
          </View>
          <Text
            style={[styles.title, props.textStyle, { fontFamily: FONTS.Bold }]}
          >
            {props.text}
          </Text>
          {props.rightIcon ? props.rightIcon : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Scale(5),
    marginBottom: 5
  },
  iconContainer: {},
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    alignItems: "center",
    textAlignVertical: "center"
  },
  title: {
    lineHeight: 22,

    color: COLORS.white,
    fontSize: Scale(14),
    alignSelf: "center",
    marginLeft: 10,
    fontFamily: FONTS.Bold
  }
});

export default CustomButton;
