import { View, Text } from "react-native";
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { fetchCityFromCoords, fetchWeatherFromCoords } from "../../api/meteo";
import Txt from "../../components/Txt";
import MeteoBasic from "./components/MetoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo.service";
import MeteoAdvanced from "./components/MeteoAdvanced/MeteoAdvanced";

export default function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(); 
  const currentWeather = weather?.current_weather;

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
    // console.log(coords)
    setWeather(weatherResponse);
  }

  async function fetchCity() {
    const cityResponse = await fetchCityFromCoords(coords);
    // console.log("city : ",cityResponse);
    setCity(cityResponse);
  }

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather();
      fetchCity()
      console.log(weather)
    }
  }, [coords]);

  return currentWeather ? (
    <View style={s.container}>
      <View style={s.meteoBasic}>
        <MeteoBasic
          style={s.meteoBasic}
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
      <View style={s.searchBar}>
        <Text>search </Text>
      </View>
      <View style={s.meteoAdvanced}>
        <MeteoAdvanced dusk={weather.daily.sunrise[0].split("T")[1]} dawn={weather.daily.sunset[0].split("T")[1]} wind={currentWeather.windspeed}/>
      </View>
    </View>
  ) : null;
}
