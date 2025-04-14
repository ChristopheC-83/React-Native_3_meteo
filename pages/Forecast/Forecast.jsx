import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./Forecast.style";
import Container from "../../components/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import Txt from "../../components/Txt";

export default function Forecast({}) {
  const { params } = useRoute();
  const nav = useNavigation();
  console.log("params", params);

  const backButton = (
    // goBack() est une fonction native de navigation qui permet de revenir à l'écran précédent
    <TouchableOpacity onPress={() => nav.goBack()} style={s.backButton}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.headerTexts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );

  return <Container>{header}</Container>;
}
