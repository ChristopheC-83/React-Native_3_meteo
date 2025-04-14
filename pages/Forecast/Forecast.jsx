import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./Forecast.style";
import Container from "../../components/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import Txt from "../../components/Txt";
import ForecastListItem from "../../components/ForecastListItrem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo.service";
import { dateToDDMM, DAYS } from "../../services/date.service";

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

  const forecastList = (
    <View style={s.forecastList}>
      {params.time.map((time, index) => {
        console.log(params.weathercode[index]);
        let code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const day = DAYS[new Date(time).getDay()];
        const date =new Date(time)
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
