 function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = Math.round(response.data.wind.speed);
  let humidity = Math.round(response.data.main.humidity);
  let currentTempValue = document.querySelector("#current-temp-value");
  let currentWindValue = document.querySelector("#wind-speed");
  let currentHumidityValue = document.querySelector("#humidity");
  currentWindValue.innerHTML = `${wind}`;
  currentTempValue.innerHTML = `${temperature}`;
  currentHumidityValue.innerHTML = `${humidity}`;
}

function newCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#enter-city");
    let currentCity = document.querySelector("#current-city");
  if (newCity.value) {
    currentCity.innerHTML = `${newCity.value.toUpperCase()}`;
  } 
  let apiKey = "b9ba0314a93083136d968577c718e31d";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${apiKey}&&units=metric`;
axios.get(url).then(showWeather);
 }

let newCityForm = document.querySelector("#enter-city-form");
newCityForm.addEventListener("submit", newCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");
let hour = now.getHours();
 if (hour < 10) {
    hour = `0${hour}`;
  }
let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
currentDay.innerHTML = `${day.toUpperCase()}`;
currentTime.innerHTML =`${hour}:${minutes}`;

function changeTempUnit(event) {
event.preventDefault();
//let currentTempValue = document.querySelector("#current-temp-value");
//let currentTempUnit=document.querySelector("#current-temp-unit");
//let currentTempValueF = currentTempValue*1.8+32;
//console.log(currentTempValue);
//console.log(currentTempValueF);
//if (currentTempUnit.innerHTML === "C") {
//currentTempValue.innerHTML = `${currentTempValueF}` 
//currentTempUnit.innerHTML = `F`} 
//else 
//{currentTemp.innerHTML = `<a href="" id="current-temp" class="current-temp">6°<span id="current-temp-unit">C</span></a>`}
          }


let currentTemp = document.querySelector("#current-temp");
currentTemp.addEventListener("click", changeTempUnit);

//let currentTempF = document.querySelector("#current-temp-f")
//console.log(`${currentTempF}`);





