import * as weatherAPI from "./weatherAPI";
import * as dateData from "./getDateData"
import * as dom from "./manipulateDOM"

// Get data (defaults to Charlotte)
let city = "Charlotte";

let geoDataURL = weatherAPI.createGeoDataURL(city);
let geoData = (await weatherAPI.getGetGeoData(geoDataURL))[0];

let weatherDataURL = weatherAPI.createWeatherDataURL(geoData);
let weatherData = await weatherAPI.getWeatherData(weatherDataURL)

// Manipulate DOM
dom.addDate(dateData.getDate());
dom.addTime(dateData.getTime());
//dom.addSearchBar();

dom.addCity(geoData);
dom.addTemperature(weatherData);
dom.addTemperatureHighAndLow(weatherData);
dom.addWeatherDescription(weatherData);
dom.addHourlyData(weatherData);