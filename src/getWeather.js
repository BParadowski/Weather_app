import getCoordinants from "./getCoordinants";

export default async function getWeather(place) {
  try {
    const [lat, lon] = await getCoordinants(place);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=c163d488922d9e2b4e18ae84875b853c`,
      { mode: "cors" }
    );
    const data = await response.json();
    const weather = data["weather"][0]["description"];
    const iconId = data["weather"][0]["icon"];
    const temp = data["main"]["temp"];
    const name = data["name"];
    return { weather, name, iconId, temp };
  } catch (err) {
    console.log("No coordinants provided");
  }
}
