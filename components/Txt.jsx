import { Text } from "react-native";

export default function Txt({ children, style }) {
  return <Text style={[s.customText, style ]}>{children}</Text>;
}
import React from "react";

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    customText: {
    fontFamily: "ReemKufiFun",
    color: "white",
  },
});
