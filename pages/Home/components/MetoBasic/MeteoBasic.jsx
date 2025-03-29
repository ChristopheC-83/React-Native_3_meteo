import { View, Text, Image } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../../../../components/Txt";
import Clock from "../Clock/Clock";

export default function MeteoBasic({temperature, city,interpretation }) {
  return (
    <View style={s.container}>
      <View style={s.clock}>
        <Clock/>
      </View>
      <Txt>{city}</Txt>
      <Txt style={s.weatherLabel}>{interpretation.label}</Txt>
      <View style={s.tempBox}>
        <Txt style={s.temp}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image}/>
      </View>
    </View>
  );
}
