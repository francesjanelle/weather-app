// Week 4 Homework below

let now = new Date();

// console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
// let year = now.getFullYear();

function formDate() {
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  console.log(`${hour}:${minute}`);
}
let currently = document.querySelector(".currentTime");
currently.innerHTML = `${month} ${date}, ${day}. ${hour}:${minute}`;

// console.log(hour, minute, date, month)
// console.log(day)
// console.log(minute);

/*function searchInBox(event) {
  event.preventDefault();
  // alert("Hello!");
  let searchBox = document.querySelector("#search-location");
  
  let headerOne = document.querySelector(".location");
  headerOne.innerHTML = searchBox.value;
}
let form = document.querySelector("#searching");

form.addEventListener("submit", searchInBox); */

// for some reason code above isn't working eventhough
// its the same as below

function displayWeather(response) {
  document.querySelector(".location").innerHTML = response.data.name;
  document.querySelector(".currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchInBox(event) {
  event.preventDefault();
  // alert("Hello!");
  // let searchBox = document.querySelector("#search-location");

  //  let headerOne = document.querySelector(".location");
  // headerOne.innerHTML = searchBox.value;
  let myCity = document.querySelector("#search-location").value;
  let metric = "metric";
  const apiKey = "deb4d0036edfa966c7a36750fd024ceb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${apiKey}&units=${metric}`;
  // `${apiUrlStart}?lat=${myLat}&lon=${myLon}&appid=${apiKey}&units=${metric}`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#searching");
form.addEventListener("submit", searchInBox);

function nowCelTemp(event) {
  event.preventDefault();

  let numCelTemp = document.querySelector(".currentTemp");
  numCelTemp.innerHTML = `2°C / -1°C`;
}
let celciusDegree = document.querySelector("#celcius");

celciusDegree.addEventListener("click", nowCelTemp);

function nowFahrTemp(event) {
  event.preventDefault();

  let numFahrTemp = document.querySelector(".currentTemp");
  numFahrTemp.innerHTML = `36°F / 30°F`;
}
let farhenDegree = document.querySelector("#fahrenheit");
farhenDegree.addEventListener("click", nowFahrTemp);

// Week 3 Homework below

/* let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city = prompt("Enter a city");
city = city.trim();
city = city.toLowerCase();

// if (weather[city] > 0) {
if (weather[city] !== undefined) {
  let cityTemp = weather[city].temp;
  let cityHumid = weather[city].humidity;
  let cityCelsi = Math.round(cityTemp);
  let cityFare = Math.round(cityTemp * 1.8 + 32); //end of math.round
  // formuloa for °C to °F
  // (0°C × 9/5) + 32 = 32°F

  alert(
    `It is currently ${cityFare}°F (${cityCelsi}°C) in ${city} with a humidity of ${cityHumid}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Please search https://www.google.com/search?q=weather+${city}`
  );
}
*/

//week 5 homework below
// attempt on bonus challenge

/* function showTemperature(position) {
  let temperature = position.data.main.temp;
  console.log(temperature);
}

function currentCity(position) {
  let myLat = Math.round(position.coords.latitude);
  console.log(myLat);
  let myLon = Math.round(position.coords.longitude);
  console.log(myLon);
  let metric = "metric";
  const apiKey = "deb4d0036edfa966c7a36750fd024ceb";
  let apiUrlStart = `http://api.openweathermap.org/data/2.5/weather`;
  let apiUrlEnd = `${apiUrlStart}?lat=${myLat}&lon=${myLon}&appid=${apiKey}&units=${metric}`;
  // console.log(apiUrlStart, apiUrlEnd)
}

let currentButton = document.querySelector("#greenLocation");
currentButton.addEventListener("submit", currentCity);

function searchCity(position) {
  let citySearh = document.querySelector("#search-location");

  let headerOneSeach = document.querySelector(".location");
  headerOneSeach.innerHTML = citySearh.value;

  const apiKey = "deb4d0036edfa966c7a36750fd024ceb";
  let apiUrlStart = `http://api.openweathermap.org/data/2.5/weather`;
  let apiUrlEnd = `${apiUrlStart}?q=${citySearh}&appid=${apiKey}&units=${metric}`;
  let metric = "metric";

  axios.get(apiUrlEnd).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(currentCity);
*/
