import React from "react";

import Svg, { Polygon } from "react-native-svg";

type SolidArrowDownProps = {
  width: number;
  height: number;
  color: any;
};

const SolidArrowDown = ({ width, height, color }: SolidArrowDownProps) => {
  return (
    <Svg
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 386.257 386.257"
    >
      <Polygon points="0,96.879 193.129,289.379 386.257,96.879 " fill={color} />
    </Svg>
  );
};

SolidArrowDown.defaultProps = {
  width: 13,
  height: 9,
  color: "#303030"
};

export default SolidArrowDown;
