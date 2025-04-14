import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../../../../components/Txt";
import Clock from "../Clock/Clock";

export default function MeteoBasic({
  onPress,
  temperature,
  city,
  interpretation,
}) {
  return (
    <View style={s.container}>
      <View style={s.clock}>
        <Clock />
      </View>
      <Txt>{city}</Txt>
      <Txt style={s.weatherLabel}>{interpretation.label}</Txt>
      <View style={s.tempBox}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={s.temp}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </View>
  );
}
