import getWeather from "./getWeather";

const btn = document.getElementById("search_button");
const input = document.getElementById("user_input");
const info = document.querySelector(".weather_info");

const displayWeather = async () => {
  const data = await getWeather(input.value);
  if (data) {
    input.value = "";
    renderWeatherDiv(data.name, data.weather, data.temp, data.iconId);
  }

  function renderWeatherDiv(name, weather, temp, iconId) {
    const place = document.createElement("h4");
    const icon = document.createElement("img");
    const temperature = document.createElement("h4");
    const desc = document.createElement("p");

    place.textContent = name;
    icon.src = `http://openweathermap.org/img/wn/${iconId}.png`;
    temperature.textContent = `${temp} degrees Celcius`;
    desc.textContent = weather;

    info.replaceChildren(place, desc, icon, temperature);
  }
};

btn.addEventListener("click", displayWeather);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayWeather();
    input.value = "";
  }
});
