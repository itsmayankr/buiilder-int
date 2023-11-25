import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

import React from "react";

interface myProps {
  loading: boolean;
  style?: any;
  color?: string;
}
export default function Loader(props: myProps) {
  return props.loading ? (
    <View style={{...styles.loading, ...props.style}}>
      <ActivityIndicator size="large" color={props.color || "black"} />
    </View>
  ) : (
    <View />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0, 
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    // backgroundColor:'red'
  },
});
