export async function fetchWeatherFromCoords(coords) {
  const { lat, lon } = coords;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// export async function fetchCityFromCoords(coords) {
//   console.log("coords to search : ", coords.lat);
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const { city, village, town }=data
//   console.log("Ville extraite :", city || village || town);
//   return city || village || town;
// }

export async function fetchCityFromCoords(coords) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`;
    // console.log("URL construite :", url);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "MyWeatherApp/1.0 (contact@tonsite.com)",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Données JSON reçues :", data);

    // 🔹 Extraction intelligente de la ville

    const city = data.address.village || data.address.municipality;
    // console.log("Ville extraite :", city);

    return city;
  } catch (error) {
    console.error("Erreur dans fetchCityFromCoords :", error);
  }
}
