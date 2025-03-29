import { View, Text } from "react-native";
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { fetchWeatherFromCoords } from "../../api/meteo";
import Txt from "../../components/Txt";

export default function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  async function getUserCoords() {
    // demande au user si onb peut récup ses coordonnées
    const { status } = await requestForegroundPermissionsAsync();
    // Si oui, enregistrement des coordonnées dans le state de coords
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
      return;
      // si refus, coordonnées de Paris
    } else {
      setCoords({ lat: "48.8566", lon: "2.3522" });
    }
  }

  async function fetchWeather() {
    const weatherResponse = await fetchWeatherFromCoords(coords);
    setWeather(weatherResponse);
    // console.log(weatherResponse);
  }

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather();
    }
  }, [coords]);

  return (
    <View style={s.container}>
      <View style={s.meteoBasic}>
        <Txt style={s.text}>basic</Txt>
      </View>
      <View style={s.searchBar}>
        <Text>search </Text>
      </View>
      <View style={s.meteoAdvanced}>
        <Text>advanced</Text>
      </View>
    </View>
  );
}
