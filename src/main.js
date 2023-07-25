import * as weatherAPI from "./weatherAPI";
import * as dateData from "./getDateData"

let city = "Charlotte";

let geoDataURL = weatherAPI.createGeoDataURL(city);
let geoData = (await weatherAPI.getGetGeoData(geoDataURL))[0];

let weatherDataURL = weatherAPI.createWeatherDataURL(geoData);
let weatherData = await weatherAPI.getWeatherData(weatherDataURL)

console.log(weatherData);
console.log(dateData.getDate());
console.log(dateData.getTime());