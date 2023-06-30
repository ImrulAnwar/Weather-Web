async function fetchWeather() {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chittagong";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "82d3a84314mshf1d19c720643ebep17a56cjsnbeb380d2e567",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchWeather();
