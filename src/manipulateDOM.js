const githubLink = "https://github.com/jhagg26/weather-app";

const timeDiv = document.querySelector("time");
const datePar = document.createElement("p");
const timePar = document.createElement("p");
timeDiv.appendChild(datePar);
timeDiv.appendChild(timePar);

const nav = document.querySelector("nav");
const searchBar = document.createElement("form");
nav.appendChild(searchBar);

const mainData = document.querySelector("#main-data");
const hourlyData = document.querySelector("#hourly-data");
const weeklyData = document.querySelector("#weekly-data");
const miscData = document.querySelector("#misc-data");
const footer = document.querySelector("footer");

function convertWeatherTypeToSVG(weatherType) {

    let svg;

    switch(weatherType) {

        case "Thunderstorm ":
            svg = "Storm.svg";
            break;
    
        case "Clouds":
            svg = "Overcast.svg";
            break;
    
        case "Drizzle":
        case "Mist":
        case "Rain":
            svg = "Rain.svg";
            break;
    
        case "Snow":
            svg = "Snow.svg";
            break;
    
        case "Ash":
        case "Smoke":
        case "Haze":
        case "Dust":
            svg = "Haze.svg";
            break;
    
        case "Fog":
            svg = "Fog.svg";
            break;
    
        case "Sand":
            svg = "Haze.svg";
            break;
    
        case "Squall":
            svg = "Wind.svg";
            break;
    
        case "Tornado":
            svg = "Tornado.svg";
            break;
    
        case "Clear":
        default:
            svg = "Sunny.svg";
    }

    return svg;
}

function convertTimestamptoTime(timeStamp) {

    // Reference: https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/
    let date = new Date(timeStamp * 1000);
    let time = date.getHours();

    time = (time > 12 ? `${time - 12}PM` : `${time}AM`)

    // "Bugs" caused by time conversions. This fixes them
    // The order of these conditions DOES MATTER
    if(time == "12AM") { time = "12PM"; } // 12AM  -> 12PM
    if(time == "0AM") { time = "12AM"; }// 0AM  -> 12AM
 
   return time;
}

function getDayOfTheWeek(index) {
    switch(index) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

function getWindDirection(degrees) {
    if(degrees == 0 || degrees == 360) { 
        return "North"; 
    } else if(degrees > 0 && degrees < 90) {
        return "North East";
    } else if(degrees == 90) {
        return "East";
    } else if(degrees > 90 && degrees < 180) {
        return "South East";
    } else if(degrees == 180) {
        return "South";
    } else if(degrees > 180 && degrees < 270) {
        return "South West";
    } else if(degrees == 270) {
        return "West";
    } else if(degrees > 270 && degrees < 360) {
        return "North West";
    }
}


function addDate(date) {
    datePar.textContent = `${date}`
}

function addTime(time) {
    timePar.textContent = `${time}`
}

function addSearchBar() {
    const searchBarInput = document.createElement("input");
    searchBarInput.type = "text";
    searchBarInput.placeholder = "Name of a City";

    searchBar.appendChild(searchBarInput);
}

function addCity(geoData) {
    console.log(geoData);
    const cityName = document.createElement("p");
    cityName.textContent = geoData.name;
    mainData.append(cityName);
}

function addTemperature(data) {
    const temperature = document.createElement("p");
    temperature.textContent = data.current.temp + "° F";
    mainData.appendChild(temperature);
}

function addTemperatureHighAndLow(data) {
    const tempHighAndLow = document.createElement("p");
    tempHighAndLow.textContent = (data.daily[0].temp.min + "° F") + 
                                  ' / ' +
                                  (data.daily[0].temp.max + "° F");
                                 
    mainData.appendChild(tempHighAndLow);
}

function addWeatherDescription(data) {
    const weatherDescription = document.createElement("p");
    // Reference: https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
    // A great solution, separate at the space, for each substring we get from the split we make the first letter capitalized, and then join all the substrings 
    // Gotta love ES6 :)
    weatherDescription.textContent = data.current.weather[0].description.split(' ')
                                                                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                        .join(' '); 
    
    mainData.appendChild(weatherDescription);
}

function addHourlyData(data) {

    let time;


    for(let i = 0; i < 24; i++) {
        let hourDiv = document.createElement("div");
        hourDiv.setAttribute("class", "hour-div");
        let time = document.createElement("p");
        let weatherSVG = document.createElement("img");
        weatherSVG.setAttribute("class", "weather-svg");
        let temperature = document.createElement("p");
        
        time.textContent = convertTimestamptoTime(data.hourly[i].dt);
        weatherSVG.src = `../images/${convertWeatherTypeToSVG(data.hourly[i].weather[0].main)}`;
        temperature.textContent = `${data.hourly[i].temp}° F`;

        hourDiv.appendChild(time);
        hourDiv.appendChild(weatherSVG);
        hourDiv.appendChild(temperature);

        hourlyData.appendChild(hourDiv);
    }
}

function addWeeklyData(data) {

    let date = new Date(data.daily[0].dt * 1000);

    for(let i = 0; i < 7; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.setAttribute("class", "day-div");
        let day = document.createElement("p");
        day.setAttribute("class", "day-par");
        let weatherSVG = document.createElement("img");
        weatherSVG.setAttribute("class", "weather-svg");
        let temperature = document.createElement("p");

        if(i == 0) {
            day.textContent = "Today";
        } else {
            date = new Date(data.daily[i].dt * 1000);
            day.textContent = getDayOfTheWeek(date.getDay());
        }

        weatherSVG.src = `../images/${convertWeatherTypeToSVG(data.daily[i].weather[0].main)}`;
        temperature.textContent = `${data.daily[i].temp.min}° F /  ${data.daily[i].temp.max}° F`;

        dayDiv.appendChild(day);
        dayDiv.appendChild(weatherSVG);
        dayDiv.appendChild(temperature);

        weeklyData.append(dayDiv);
    }
}

function addHumidityData(data) {
    const humidity = document.createElement("div");
    humidity.setAttribute("id", "humidity-data");
    humidity.innerHTML = `Humidity</br>${data.current.humidity}`;
    miscData.appendChild(humidity);
}

function addWindData(data){
    const wind = document.createElement("div");
    wind.setAttribute("id", "wind-data");
    wind.innerHTML = `Wind Speed</br>${data.current.wind_speed} MPH`
                        + `</br></br>`
                        + `Wind Direction</br>${getWindDirection(data.current.wind_deg)} (${data.current.wind_deg}°)`;
    miscData.appendChild(wind);
}

function addSunData(data) {
    const sun = document.createElement("div");
    sun.setAttribute("id", "sun-data");
    const sunrise = document.createElement("p");
    sunrise.innerHTML = `Sunrise</br>${convertTimestamptoTime(data.current.sunrise)}`;
    const sunset = document.createElement("p");
    sunset.innerHTML = `Sunrise</br>${convertTimestamptoTime(data.current.sunset)}`;
    
    sun.appendChild(sunrise);
    sun.appendChild(sunset);
    
    miscData.appendChild(sun);
}
function addUVIData(data){
    const uvi = document.createElement("div");
    uvi.setAttribute("id", "uvi-data");
    uvi.innerHTML = `UVI</br>${data.current.uvi}`;
    miscData.appendChild(uvi);
}

function addFeelsLikeData(data) {
    const feelsLike = document.createElement("div");
    feelsLike.setAttribute("id", "feels-like-data");
    feelsLike.innerHTML = `Feels Like</br>${data.current.feels_like}° F`;
    miscData.appendChild(feelsLike);
}

function addDewPointData(data) {
    const dewPoint = document.createElement("div");
    dewPoint.setAttribute("id", "dew-point-data");
    dewPoint.innerHTML = `Dew Point</br>${data.current.dew_point}`;
    miscData.appendChild(dewPoint);
}

function addFooterContent() {
    let text = document.createElement("p");
    text.textContent = "Copyright © 2023 jhagg26 ";

    const button = document.createElement("button");
    button.innerHTML = "<img src='../images/github-logo.svg'>";

    button.addEventListener("click", () => {
        window.open(githubLink, '_blank');
    });

    footer.appendChild(text);
    footer.appendChild(button);
}

export {
    addDate,
    addTime,
    addSearchBar,
    addCity,
    addTemperature,
    addTemperatureHighAndLow,
    addWeatherDescription,
    addHourlyData,
    addWeeklyData,
    addHumidityData,
    addWindData,
    addSunData,
    addUVIData,
    addFeelsLikeData,
    addDewPointData,
    addFooterContent
}