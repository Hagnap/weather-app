// Functions that help interact with the WeatherAPI

// Geo Data
function createGeoDataURL(city) {
    return "https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={API key}"
                .replace("{city}", city)
                .replace("{API key}", process.env.API_KEY);

}

async function getGetGeoData(url) {
    const response = await fetch(url);
    const geoData = await response.json();
    return  geoData;
}

// Weather Data
function createWeatherDataURL(geoData) {
    return "https://api.openweathermap.org/data/3.0/onecall?units=imperial&lat={lat}&lon={lon}&appid={API key}"
                                                .replace("{lat}", geoData.lat)
                                                .replace("{lon}", geoData.lon)
                                                .replace("{API key}", process.env.API_KEY);
}

async function getWeatherData(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
}

export {
    createGeoDataURL,
    getGetGeoData,
    createWeatherDataURL,
    getWeatherData
}