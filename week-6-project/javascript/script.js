function tempAndCityDisplay(response) {
  let temperature = response.data.temperature.current;

  temperature = Math.round(temperature);

  let tempDisplay = document.querySelector("#numeric-temp");
  tempDisplay.innerHTML = `${temperature}`;

  let h1 = document.querySelector("h1");
  searchedCity = response.data.city;
  h1.innerHTML = searchedCity;
}

function displayCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-searched");
  city = cityElement.value;

  let apiKey = "7300c6775obt0415fe6635cd0da0d3fe";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(tempAndCityDisplay);
}
function formatTimeAndDate(now) {
  let hour = now.getHours();
  let minutes = now.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[now.getDay()];

  let time = `${hour}:${minutes}`;
  return `${day} ${time}`;
}

let enteredCity = document.querySelector("#input");
enteredCity.addEventListener("submit", displayCity);

let now = new Date();
let displayDayAndTime = document.querySelector("#display-day-and-time");
displayDayAndTime.innerHTML = formatTimeAndDate(now);
