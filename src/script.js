let now = new Date();

let currentDay = document.querySelector("li#day");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentDay.innerHTML = day;

function formatDate(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let dates = date.getDate();
  let year = date.getFullYear();
  return `${month} ${dates}, ${year}`;
}

let currentMonthDateYear = document.querySelector("li#month-date-year");

currentMonthDateYear.innerHTML = formatDate(now);

function formatTime(time) {
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

let currentTime = document.querySelector("li#time");
currentTime.innerHTML = formatTime(now);

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#current-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#current-low").innerHTML = Math.round(
    response.data.main.temp_min
  );

  document.querySelector("#current-conditions").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "07b4c9439e97bc1f2dad7f2fe9fb8fca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchCity(city) {
  let apiKey = "07b4c9439e97bc1f2dad7f2fe9fb8fca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Austin");
