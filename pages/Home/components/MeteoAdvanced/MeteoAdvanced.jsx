import { View, Text } from "react-native";
import { MeteoAdvancedContainer, s } from "./MeteoAdvanced.style";
import Txt from "../../../../components/Txt";

export default function MeteoAdvanced({dusk, dawn, wind}) {
  return (
    <View style={s.container}>
      <MeteoAdvancedContainer value={dusk} label="Aube" />
      <MeteoAdvancedContainer value={dawn} label="Crépuscule" />
      <MeteoAdvancedContainer value={wind} label="Vent" unit="km/h" />
    </View>
  );
}
