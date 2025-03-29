export async function fetchWeatherFromCoords(coords) {
  const { lat, lon } = coords;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCityFromCoords(coords) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=43.78&lon=41.199`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return city || village || town;
}
