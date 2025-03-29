import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: { alignItems: "flex-end" },
  weatherLabel: {
    fontSize:20,
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  tempBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temp:{
    fontSize:130,

  },
  image: {
    width: 90,
    height: 90,

  },
});
