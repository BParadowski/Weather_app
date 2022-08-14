export default async function getCoordinants(place) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=c163d488922d9e2b4e18ae84875b853c`,
      { mode: "cors" }
    );
    const dataArray = await response.json();
    // get coordinants of the first city
    const coords = [dataArray[0]["lat"], dataArray[0]["lon"]];
    return coords;
  } catch (err) {
    console.log("Place doesn't exist");
  }
}
