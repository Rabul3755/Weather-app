const apiKey = "ae4e3e9635abc10cd19b6cb9fc5e13fa";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("input");
const btn = document.querySelector("button");
const forecast = document.querySelector(".icon");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
  }

  var data = await res.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    forecast.src = "/All Projects/weather app/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    forecast.src = "/All Projects/weather app/clear.png";
  } else if (data.weather[0].main == "Rain") {
    forecast.src = "/All Projects/weather app/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    forecast.src = "/All Projects/weather app/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    forecast.src = "/All Projects/weather app/mist.png";
  }

  document.querySelector(".weatherIcon").style.display = "block";
}

btn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
