const inputBox = document.getElementById("inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.getElementById("weatherImg");
const temperature = document.getElementById("temperature");
const weatherDesc = document.getElementById("weatherDesc");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const locationNotFound = document.getElementById("lnf");
const weatherBody = document.getElementById("weatherBody");

const API_KEY = "9a8540a130c68d7453a8e576039c5b29";

async function checkWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const weather_response = await fetch(URL).then((response) =>
      response.json()
    );
    if (weather_response.cod === "404") {
      locationNotFound.style.display = "flex";
      weatherBody.style.display = "none";
      console.log("error");
      return;
    }
    setTheValues(weather_response);
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
function setTheValues(weather_response) {
  console.log(weather_response);
  temperature.innerHTML =
    Math.round(weather_response.main.temp - 273.15) + "°C";
  weatherDesc.innerHTML = weather_response.weather[0].description;
  humidity.innerHTML = weather_response.main.humidity + " %";
  windSpeed.innerHTML = weather_response.wind.speed + "km/h";
  locationNotFound.style.display = "none";
  weatherBody.style.display = "flex";

  switch (weather_response.weather[0].main) {
    case "Clouds":
      weatherImg.src = "images/cloud.png";
      break;

    case "Clear":
      weatherImg.src = "images/clear.png";
      break;

    case "Mist":
      weatherImg.src = "images/mist.png";
      break;

    case "Rain":
      weatherImg.src = "images/rain.png";
      break;

    case "Snow":
      weatherImg.src = "images/snow.png";
      break;
  }
}
