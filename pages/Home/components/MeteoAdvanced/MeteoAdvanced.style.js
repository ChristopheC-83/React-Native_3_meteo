import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Txt from "../../../../components/Txt";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#00000050",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  meteoComponent: { alignItems: "center" },
  textTop: {
    fontSize: 20,
    marginBottom: 5,
  },
  textBottom: {
    fontSize: 15,
    marginTop: 5,
  },
});

export function MeteoAdvancedContainer({ value, label, unit=null }) {
    return(
  <View style={s.meteoComponent}>
    <Txt style={s.textTop}>{value} {unit}</Txt>
    <Txt style={s.textBottom}>{label} </Txt>
  </View>)
}
