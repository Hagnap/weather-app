/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/manipulateDOM.js":
/*!******************************!*\
  !*** ./src/manipulateDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCity: () => (/* binding */ addCity),\n/* harmony export */   addDate: () => (/* binding */ addDate),\n/* harmony export */   addHourlyData: () => (/* binding */ addHourlyData),\n/* harmony export */   addSearchBar: () => (/* binding */ addSearchBar),\n/* harmony export */   addTemperature: () => (/* binding */ addTemperature),\n/* harmony export */   addTemperatureHighAndLow: () => (/* binding */ addTemperatureHighAndLow),\n/* harmony export */   addTime: () => (/* binding */ addTime),\n/* harmony export */   addWeatherDescription: () => (/* binding */ addWeatherDescription)\n/* harmony export */ });\nconst timeDiv = document.querySelector(\"time\");\nconst datePar = document.createElement(\"p\");\nconst timePar = document.createElement(\"p\");\ntimeDiv.appendChild(datePar);\ntimeDiv.appendChild(timePar);\n\nconst nav = document.querySelector(\"nav\");\nconst searchBar = document.createElement(\"form\");\nnav.appendChild(searchBar);\n\nconst mainData = document.querySelector(\"#main-data\");\nconst hourlyData = document.querySelector(\"#hourly-data\");\nconst weeklyData = document.querySelector(\"#weekly-data\");\nconst miscData = document.querySelector(\"#misc-data\");\n\nfunction convertWeatherTypeToSVG(weatherType) {\n\n    let svg;\n\n    switch(weatherType) {\n\n        case \"Thunderstorm \":\n            svg = \"Storm.svg\";\n            break;\n    \n        case \"Clouds\":\n            svg = \"Overcast.svg\";\n            break;\n    \n        case \"Drizzle\":\n        case \"Mist\":\n        case \"Rain\":\n            svg = \"Rain.svg\";\n            break;\n    \n        case \"Snow\":\n            svg = \"Snow.svg\";\n            break;\n    \n        case \"Ash\":\n        case \"Smoke\":\n        case \"Haze\":\n        case \"Dust\":\n            svg = \"Haze.svg\";\n            break;\n    \n        case \"Fog\":\n            svg = \"Fog.svg\";\n            break;\n    \n        case \"Sand\":\n            svg = \"Haze.svg\";\n            break;\n    \n        case \"Squall\":\n            svg = \"Wind.svg\";\n            break;\n    \n        case \"Tornado\":\n            svg = \"Tornado.svg\";\n            break;\n    \n        case \"Clear\":\n        default:\n            svg = \"Sunny.svg\";\n    }\n\n    return svg;\n}\n\nfunction convertTimestamptoTime(timeStamp) {\n\n    // Reference: https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/\n    let date = new Date(timeStamp * 1000);\n    let time = date.getHours();\n\n    time = (time > 12 ? `${time - 12}PM` : `${time}AM`)\n\n    // \"Bugs\" caused by time conversions. This fixes them\n    // The order of these conditions DOES MATTER\n    if(time == \"12AM\") { time = \"12PM\"; } // 12AM  -> 12PM\n    if(time == \"0AM\") { time = \"12AM\"; }// 0AM  -> 12AM\n \n   return time;\n}\n\nfunction getDayOfTheWeek(index) {\n    switch(index) {\n        case 0:\n            return \"Sunday\";\n        case 1:\n            return \"Monday\";\n        case 2:\n            return \"Tuesday\";\n        case 3:\n            return \"Wednesday\";\n        case 4:\n            return \"Thursday\";\n        case 5:\n            return \"Friday\";\n        case 6:\n            return \"Saturday\";\n    }\n}\n\nfunction getWindDirection(degrees) {\n    if(degrees == 0 || degrees == 360) { \n        return \"North\"; \n    } else if(degrees > 0 && degrees < 90) {\n        return \"North East\";\n    } else if(degrees == 90) {\n        return \"East\";\n    } else if(degrees > 90 && degrees < 180) {\n        return \"South East\";\n    } else if(degrees == 180) {\n        return \"South\";\n    } else if(degrees > 180 && degrees < 270) {\n        return \"South West\";\n    } else if(degrees == 270) {\n        return \"West\";\n    } else if(degrees > 270 && degrees < 360) {\n        return \"North West\";\n    }\n}\n\n\nfunction addDate(date) {\n    datePar.textContent = `${date}`\n}\n\nfunction addTime(time) {\n    timePar.textContent = `${time}`\n}\n\nfunction addSearchBar() {\n    const searchBarInput = document.createElement(\"input\");\n    searchBarInput.type = \"text\";\n    searchBarInput.placeholder = \"Name of a City\";\n\n    searchBar.appendChild(searchBarInput);\n}\n\nfunction addCity(geoData) {\n    console.log(geoData);\n    const cityName = document.createElement(\"p\");\n    cityName.textContent = geoData.name;\n    mainData.append(cityName);\n}\n\nfunction addTemperature(data) {\n    const temperature = document.createElement(\"p\");\n    temperature.textContent = data.current.temp + \"° F\";\n    mainData.appendChild(temperature);\n}\n\nfunction addTemperatureHighAndLow(data) {\n    const tempHighAndLow = document.createElement(\"p\");\n    tempHighAndLow.textContent = (data.daily[0].temp.min + \"° F\") + \n                                  ' / ' +\n                                  (data.daily[0].temp.max + \"° F\");\n                                 \n    mainData.appendChild(tempHighAndLow);\n}\n\nfunction addWeatherDescription(data) {\n    const weatherDescription = document.createElement(\"p\");\n    // Reference: https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city\n    // A great solution, separate at the space, for each substring we get from the split we make the first letter capitalized, and then join all the substrings \n    // Gotta love ES6 :)\n    weatherDescription.textContent = data.current.weather[0].description.split(' ')\n                                                                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))\n                                                                        .join(' '); \n    \n    mainData.appendChild(weatherDescription);\n}\n\nfunction addHourlyData(data) {\n\n    let time;\n\n\n    for(let i = 0; i < 24; i++) {\n        let hourDiv = document.createElement(\"div\");\n        hourDiv.setAttribute(\"class\", \"hour-div\");\n        let time = document.createElement(\"p\");\n        let weatherSVG = document.createElement(\"img\");\n        weatherSVG.setAttribute(\"class\", \"weather-svg\");\n        let temperature = document.createElement(\"p\");\n\n        //console.log(data.hourly[i]);\n        //console.log(data.hourly[i].weather[0].main);\n        time.textContent = convertTimestamptoTime(data.hourly[i].dt);\n        weatherSVG.src = `../images/${convertWeatherTypeToSVG(data.hourly[i].weather[0].main)}`;\n        temperature.textContent = `${data.hourly[i].temp}° F`;\n\n        hourDiv.appendChild(time);\n        hourDiv.appendChild(weatherSVG);\n        hourDiv.appendChild(temperature);\n\n        hourlyData.appendChild(hourDiv);\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/manipulateDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/manipulateDOM.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;