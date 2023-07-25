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

export {
    addDate,
    addTime,
    addSearchBar,
    addCity,
    addTemperature,
    addTemperatureHighAndLow,
    addWeatherDescription,
}