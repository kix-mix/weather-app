function timeNow(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#city");
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
  currentCity.innerHTML = response.data.name;
}

let dateElement = document.querySelector("#local-time");
let currentTime = new Date();
dateElement.innerHTML = timeNow(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
