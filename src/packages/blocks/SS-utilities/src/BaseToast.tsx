import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useCallback, useMemo } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import Toast from "react-native-toast-message";

import Close from "../../../components/src/Close";
import FONTS from "./Fonts/Fonts";
import { COLORS } from "./Globals";
import Scale from "../../../components/src/Scale";

interface Props {
  icon?: React.ReactNode;
  text1?: string;
  onPress?: () => void;
  success: boolean;
}

const BaseToast = ({ icon, text1, onPress, success }: Props) => {
  const handleClose = () => {
    Toast.hide();
  };

  const handleOnPress = useCallback(() => {
    if (typeof onPress === "function") {
      onPress();
      handleClose();
    }
  }, [handleClose, onPress]);

  const mainContainer: StyleProp<ViewStyle> = useMemo(
    () => [
      styles.container,
      {
        flexDirection: "row"
      }
    ],
    []
  );

  const textStyle = useMemo(
    () => ({
      fontFamily: FONTS.Regular,
      color: success ? COLORS.green : COLORS.red,
      fontSize: Scale(14),
      lineHeight: Scale(20)
    }),
    [FONTS.Regular]
  );

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={handleOnPress}
      activeOpacity={1}
    >
      <View style={mainContainer}>
        {icon && icon}
        <View style={styles.messageContainer}>
          <Text style={textStyle}>{text1}</Text>
        </View>
        <TouchableOpacity onPress={handleClose} style={styles.close}>
          <Close width={15} height={15} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: "100%"
  },
  container: {
    alignItems: "flex-start",
    backgroundColor: COLORS.white,
    flex: 1,
    width: "100%",
    minHeight: Scale(80),
    paddingTop: 15,
    // paddingLeft: 20,
    paddingBottom: 10,
    // borderRadius: 5,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  messageContainer: {
    alignItems: "flex-start",
    paddingLeft: Scale(20),
    paddingRight: Scale(25),
    width: "90%"
  },
  close: {
    paddingHorizontal: 10,
    marginRight: 10,
    paddingTop: 5,
    height: "100%"

    //marginRight: 20
  }
});

export default React.memo(BaseToast);
