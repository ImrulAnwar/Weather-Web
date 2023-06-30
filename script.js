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

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

async function checkWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    // API call to get weather
    const weather_response = await fetch(URL).then((response) =>
      response.json()
    );
    // Check if the response throws an error
    if (weather_response.cod === "404") {
      // Hiding the weather body and showing the error message
      locationNotFound.style.display = "flex";
      weatherBody.style.display = "none";
      console.log("error");
      return;
    }
    // Else set the text values and images
    setTheValues(weather_response);
  } catch (error) {
    console.log(error);
  }
}

function setTheValues(weather_response) {
  // setting the text values
  temperature.innerHTML =
    Math.round(weather_response.main.temp - 273.15) + "°C";
  weatherDesc.innerHTML = weather_response.weather[0].description;
  humidity.innerHTML = weather_response.main.humidity + " %";
  windSpeed.innerHTML = weather_response.wind.speed + "km/h";
  // Hiding any error message and showing the weather body instead
  locationNotFound.style.display = "none";
  weatherBody.style.display = "flex";

  setThePictures(weather_response);
}

function setThePictures(weather_response) {
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
