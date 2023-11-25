import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FONTS from "./Fonts/Fonts";
import Scale from "../../../components/src/Scale";
import { COLORS } from "./Globals";
import { ChevronUpBig } from "../../appointmentmanagement/src/assets";

type ClosableSectionProps = {
  title?: string;
  maxHeight?: number;

  children: React.ReactNode;
  isOpened?: boolean;
  onStateChange: (isOpen: boolean) => void;

  showIcon: boolean;
};

export const ClosableSection = ({
  title,
  maxHeight,
  isOpened,
  children,

  onStateChange,

  showIcon
}: ClosableSectionProps) => {
  const [_isOpened, _setIsOpened] = useState<boolean>(
    typeof isOpened !== "undefined" ? isOpened : true
  );

  useEffect(() => {
    return () => {
      if (typeof isOpened !== "undefined") {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        _setIsOpened(!isOpened);
      }
    };
  }, [isOpened]);

  const _onStateChange = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    _setIsOpened(!_isOpened);
    onStateChange(!_isOpened);
  }, [_isOpened, onStateChange]);

  const iconUp = useMemo(
    () => (
      <Image
        source={ChevronUpBig}
        resizeMode="contain"
        style={styles.bellIcon}
      />
    ),
    []
  );
  const iconDown = useMemo(
    () => (
      <Image
        source={ChevronUpBig}
        resizeMode="contain"
        style={[styles.bellIcon, { transform: [{ rotate: "180deg" }] }]}
      />
    ),
    []
  );

  const combinedTitleContainerStyle = useMemo(() => {
    return [styles.filterItemTitleBoxContainer];
  }, [styles.filterItemTitleBoxContainer]);

  const combinedTitleTextStyle = useMemo(() => {
    return [styles.semiBoldTextBlack];
  }, [styles.semiBoldTextBlack]);

  return (
    <View
      style={[styles.filterItem, maxHeight ? { maxHeight: maxHeight } : {}]}
    >
      {title ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={combinedTitleContainerStyle}
          onPress={_onStateChange}
        >
          <View style={styles.filterItemTitleContainer}>
            <Text style={combinedTitleTextStyle}>{title}</Text>
          </View>

          <View style={styles.filterItemTitleIcon}>
            {_isOpened ? iconDown : iconUp}
          </View>
        </TouchableOpacity>
      ) : null}
      <View style={styles.filterItemContainer}>
        {_isOpened ? children : null}
      </View>
    </View>
  );
};

ClosableSection.defaultProps = {
  containerStyle: {},
  titleStyle: {},
  subtitleStyle: {},
  onStateChange: () => {},
  showIcon: true,
  iconSize: 4,
  inverted: false
};

const styles = StyleSheet.create({
  filterItem: {
    paddingHorizontal: Scale(20)
    // borderBottomWidth: 1,
    // borderBottomColor: colors.silver,
  },
  bellIcon: {
    width: Scale(9),
    height: Scale(9)
  },
  filterItemTitleBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: Scale(20),

    marginTop: Scale(20)
  },
  filterItemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  semiBoldTextBlack: {
    fontSize: Scale(14),
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: FONTS.Medium,
    fontWeight: "500",
    color: COLORS.black,
    lineHeight: Scale(22)
  },

  filterItemTitleIcon: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    alignContent: "center"
  },
  filterItemContainer: {
    paddingBottom: Scale(15)
  }
});
