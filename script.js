const inputBox = document.getElementById("inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.getElementById("weatherImg");
const temperature = document.getElementById("temperature");
const weatherDesc = document.getElementById("weatherDesc");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const API_KEY = "9a8540a130c68d7453a8e576039c5b29";

async function checkWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const weather_response = await fetch(URL).then((response) =>
      response.json()
    );
    console.log(weather_response);
    temperature.innerHTML =
      Math.round(weather_response.main.temp - 273.15) + "°C";
    weatherDesc.innerHTML = weather_response.weather[0].description;
    humidity.innerHTML = weather_response.main.humidity + " %";
    windSpeed.innerHTML = weather_response.wind.speed + "km/h";
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

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
