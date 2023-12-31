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

/***/ "./src/getDateData.js":
/*!****************************!*\
  !*** ./src/getDateData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDate: () => (/* binding */ getDate),\n/* harmony export */   getTime: () => (/* binding */ getTime)\n/* harmony export */ });\n// Gets user's location and time/date data\nlet today = new Date();\n\nfunction getDate() {\n    let date = (today.getMonth()+1) + '-' +\n                    (today.getDate()) + '-' +\n                    (today.getFullYear()) + \"\\n\";\n    \n    return date;\n}\n\nfunction getTime() {\n\n    let mins = String(today.getMinutes());\n    if(mins < 10) {\n        mins = mins.padStart(2, '0')\n    }\n\n    return today.getHours() > 12 ? \n        (today.getHours()-12) + ':' + mins + \" PM\":\n        today.getHours() + ':' + mins + \" AM\";\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/getDateData.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _getDateData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDateData */ \"./src/getDateData.js\");\n/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulateDOM */ \"./src/manipulateDOM.js\");\n\n\n\n\n// Get data (defaults to Charlotte if blank)\nlet city = JSON.parse(window.sessionStorage.getItem(\"city-query\"));\nconsole.log(city);\nif(city == '' || city == null) {\n    city = \"Charlotte\";\n}\n\n\nlet geoDataURL = _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.createGeoDataURL(city);\nlet geoData = (await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getGetGeoData(geoDataURL))[0];\n\nlet weatherDataURL = _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.createWeatherDataURL(geoData);\nlet weatherData = await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(weatherDataURL)\n\n// Manipulate DOM\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addDate(_getDateData__WEBPACK_IMPORTED_MODULE_1__.getDate());\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addTime(_getDateData__WEBPACK_IMPORTED_MODULE_1__.getTime());\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addSearchBar();\n\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addCity(geoData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addTemperature(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addTemperatureHighAndLow(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addWeatherDescription(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addHourlyData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addWeeklyData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addHumidityData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addSunData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addFeelsLikeData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addWindData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addUVIData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addDewPointData(weatherData);\n_manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.addFooterContent();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-app/./src/main.js?");

/***/ }),

/***/ "./src/manipulateDOM.js":
/*!******************************!*\
  !*** ./src/manipulateDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCity: () => (/* binding */ addCity),\n/* harmony export */   addDate: () => (/* binding */ addDate),\n/* harmony export */   addDewPointData: () => (/* binding */ addDewPointData),\n/* harmony export */   addFeelsLikeData: () => (/* binding */ addFeelsLikeData),\n/* harmony export */   addFooterContent: () => (/* binding */ addFooterContent),\n/* harmony export */   addHourlyData: () => (/* binding */ addHourlyData),\n/* harmony export */   addHumidityData: () => (/* binding */ addHumidityData),\n/* harmony export */   addSearchBar: () => (/* binding */ addSearchBar),\n/* harmony export */   addSunData: () => (/* binding */ addSunData),\n/* harmony export */   addTemperature: () => (/* binding */ addTemperature),\n/* harmony export */   addTemperatureHighAndLow: () => (/* binding */ addTemperatureHighAndLow),\n/* harmony export */   addTime: () => (/* binding */ addTime),\n/* harmony export */   addUVIData: () => (/* binding */ addUVIData),\n/* harmony export */   addWeatherDescription: () => (/* binding */ addWeatherDescription),\n/* harmony export */   addWeeklyData: () => (/* binding */ addWeeklyData),\n/* harmony export */   addWindData: () => (/* binding */ addWindData)\n/* harmony export */ });\nconst githubLink = \"https://github.com/jhagg26/weather-app\";\n\nconst timeDiv = document.querySelector(\"time\");\nconst datePar = document.createElement(\"p\");\nconst timePar = document.createElement(\"p\");\ntimeDiv.appendChild(datePar);\ntimeDiv.appendChild(timePar);\n\nconst nav = document.querySelector(\"nav\");\nconst searchBar = document.createElement(\"form\");\nnav.appendChild(searchBar);\n\n/*\n\n    form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    task.name = document.getElementById(\"task-name\").value;\n    task.description = document.getElementById(\"task-description\").value;\n    task.dueDate = document.getElementById(\"task-duedate\").value;\n    task.priority = document.getElementById(\"task-priority\").value;\n\n    if (project) {\n      window.localStorage.setItem(\n        \"allProjects\",\n        JSON.stringify(Project.projectCollection)\n      );\n\n      displayCurrentProject(project);\n    } else {\n      window.localStorage.setItem(\n        \"allTasks\",\n        JSON.stringify(Task.taskCollection)\n      );\n\n      displayAllTasks();\n    }\n  });\n*/\n\nsearchBar.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    console.log(document.querySelector(\"input\").value);\n    window.sessionStorage.setItem(\"city-query\", JSON.stringify(document.querySelector(\"input\").value));\n    location.reload();\n});\n\nconst mainData = document.querySelector(\"#main-data\");\nconst hourlyData = document.querySelector(\"#hourly-data\");\nconst weeklyData = document.querySelector(\"#weekly-data\");\nconst miscData = document.querySelector(\"#misc-data\");\nconst footer = document.querySelector(\"footer\");\n\nfunction convertWeatherTypeToSVG(weatherType) {\n\n    let svg;\n\n    switch(weatherType) {\n\n        case \"Thunderstorm \":\n            svg = \"Storm.svg\";\n            break;\n    \n        case \"Clouds\":\n            svg = \"Overcast.svg\";\n            break;\n    \n        case \"Drizzle\":\n        case \"Mist\":\n        case \"Rain\":\n            svg = \"Rain.svg\";\n            break;\n    \n        case \"Snow\":\n            svg = \"Snow.svg\";\n            break;\n    \n        case \"Ash\":\n        case \"Smoke\":\n        case \"Haze\":\n        case \"Dust\":\n            svg = \"Haze.svg\";\n            break;\n    \n        case \"Fog\":\n            svg = \"Fog.svg\";\n            break;\n    \n        case \"Sand\":\n            svg = \"Haze.svg\";\n            break;\n    \n        case \"Squall\":\n            svg = \"Wind.svg\";\n            break;\n    \n        case \"Tornado\":\n            svg = \"Tornado.svg\";\n            break;\n    \n        case \"Clear\":\n        default:\n            svg = \"Sunny.svg\";\n    }\n\n    return svg;\n}\n\nfunction convertTimestamptoTime(timeStamp) {\n\n    // Reference: https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/\n    let date = new Date(timeStamp * 1000);\n    let time = date.getHours();\n\n    time = (time > 12 ? `${time - 12}PM` : `${time}AM`)\n\n    // \"Bugs\" caused by time conversions. This fixes them\n    // The order of these conditions DOES MATTER\n    if(time == \"12AM\") { time = \"12PM\"; } // 12AM  -> 12PM\n    if(time == \"0AM\") { time = \"12AM\"; }// 0AM  -> 12AM\n \n   return time;\n}\n\nfunction getDayOfTheWeek(index) {\n    switch(index) {\n        case 0:\n            return \"Sunday\";\n        case 1:\n            return \"Monday\";\n        case 2:\n            return \"Tuesday\";\n        case 3:\n            return \"Wednesday\";\n        case 4:\n            return \"Thursday\";\n        case 5:\n            return \"Friday\";\n        case 6:\n            return \"Saturday\";\n    }\n}\n\nfunction getWindDirection(degrees) {\n    if(degrees == 0 || degrees == 360) { \n        return \"North\"; \n    } else if(degrees > 0 && degrees < 90) {\n        return \"North East\";\n    } else if(degrees == 90) {\n        return \"East\";\n    } else if(degrees > 90 && degrees < 180) {\n        return \"South East\";\n    } else if(degrees == 180) {\n        return \"South\";\n    } else if(degrees > 180 && degrees < 270) {\n        return \"South West\";\n    } else if(degrees == 270) {\n        return \"West\";\n    } else if(degrees > 270 && degrees < 360) {\n        return \"North West\";\n    }\n}\n\n\nfunction addDate(date) {\n    datePar.textContent = `${date}`\n}\n\nfunction addTime(time) {\n    timePar.textContent = `${time}`\n}\n\nfunction addSearchBar() {\n    const searchBarInput = document.createElement(\"input\");\n    searchBarInput.type = \"text\";\n    searchBarInput.placeholder = \"Charlotte\";\n\n    searchBar.appendChild(searchBarInput);\n}\n\nfunction addCity(geoData) {\n    console.log(geoData);\n    const cityName = document.createElement(\"p\");\n    cityName.setAttribute(\"id\", \"city-name\");\n    cityName.textContent = geoData.name;\n    mainData.append(cityName);\n}\n\nfunction addTemperature(data) {\n    const temperature = document.createElement(\"p\");\n    temperature.setAttribute(\"id\", \"temperature\");\n    temperature.textContent = data.current.temp + \"° F\";\n    mainData.appendChild(temperature);\n}\n\nfunction addTemperatureHighAndLow(data) {\n    const tempHighAndLow = document.createElement(\"p\");\n    tempHighAndLow.setAttribute(\"id\", \"temperature-low-high\");\n    tempHighAndLow.textContent = (data.daily[0].temp.min + \"° F\") + \n                                  ' / ' +\n                                  (data.daily[0].temp.max + \"° F\");\n                                 \n    mainData.appendChild(tempHighAndLow);\n}\n\nfunction addWeatherDescription(data) {\n    const weatherDescription = document.createElement(\"p\");\n    weatherDescription.setAttribute(\"id\", \"weather-description\");\n    // Reference: https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city\n    // A great solution, separate at the space, for each substring we get from the split we make the first letter capitalized, and then join all the substrings \n    // Gotta love ES6 :)\n    weatherDescription.textContent = data.current.weather[0].description.split(' ')\n                                                                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))\n                                                                        .join(' '); \n    \n    mainData.appendChild(weatherDescription);\n}\n\nfunction addHourlyData(data) {\n\n    let time;\n\n\n    for(let i = 0; i < 24; i++) {\n        let hourDiv = document.createElement(\"div\");\n        hourDiv.setAttribute(\"class\", \"hour-div\");\n        let time = document.createElement(\"p\");\n        let weatherSVG = document.createElement(\"img\");\n        weatherSVG.setAttribute(\"class\", \"weather-svg\");\n        let temperature = document.createElement(\"p\");\n\n        time.textContent = convertTimestamptoTime(data.hourly[i].dt);\n        weatherSVG.src = `../images/${convertWeatherTypeToSVG(data.hourly[i].weather[0].main)}`;\n        temperature.textContent = `${data.hourly[i].temp}° F`;\n\n        hourDiv.appendChild(time);\n        hourDiv.appendChild(weatherSVG);\n        hourDiv.appendChild(temperature);\n\n        hourlyData.appendChild(hourDiv);\n    }\n}\n\nfunction addWeeklyData(data) {\n\n    let date = new Date(data.daily[0].dt * 1000);\n\n    for(let i = 0; i < 7; i++) {\n        let dayDiv = document.createElement(\"div\");\n        dayDiv.setAttribute(\"class\", \"day-div\");\n        let day = document.createElement(\"p\");\n        day.setAttribute(\"class\", \"day-par\");\n        let weatherSVG = document.createElement(\"img\");\n        weatherSVG.setAttribute(\"class\", \"weather-svg\");\n        let temperature = document.createElement(\"p\");\n\n        if(i == 0) {\n            day.textContent = \"Today\";\n        } else {\n            date = new Date(data.daily[i].dt * 1000);\n            day.textContent = getDayOfTheWeek(date.getDay());\n        }\n\n        weatherSVG.src = `../images/${convertWeatherTypeToSVG(data.daily[i].weather[0].main)}`;\n        temperature.textContent = `${data.daily[i].temp.min}° F /  ${data.daily[i].temp.max}° F`;\n\n        dayDiv.appendChild(day);\n        dayDiv.appendChild(weatherSVG);\n        dayDiv.appendChild(temperature);\n\n        weeklyData.append(dayDiv);\n    }\n}\n\nfunction addHumidityData(data) {\n    const humidity = document.createElement(\"div\");\n    humidity.setAttribute(\"id\", \"humidity-data\");\n    humidity.innerHTML = `<p><i>Humidity</i></br>${data.current.humidity}</p>`;\n    miscData.appendChild(humidity);\n}\n\nfunction addWindData(data){\n    const wind = document.createElement(\"div\");\n    wind.setAttribute(\"id\", \"wind-data\");\n    wind.innerHTML = `<p><i>Wind Speed</i></br>${data.current.wind_speed} MPH`\n                        + `</br></br>`\n                        + `<i>Wind Direction</i></br>${getWindDirection(data.current.wind_deg)} (${data.current.wind_deg}°)</p>`;\n    miscData.appendChild(wind);\n}\n\nfunction addSunData(data) {\n    const sun = document.createElement(\"div\");\n    sun.setAttribute(\"id\", \"sun-data\");\n    sun.innerHTML = `<p><i>Sunrise</i></br>${convertTimestamptoTime(data.current.sunrise)}`\n                                + `</br></br>`\n                                + `<i>Sunrise</i></br>${convertTimestamptoTime(data.current.sunset)}</p>`;\n    miscData.appendChild(sun);\n}\nfunction addUVIData(data){\n    const uvi = document.createElement(\"div\");\n    uvi.setAttribute(\"id\", \"uvi-data\");\n    uvi.innerHTML = `<p><i>UVI</i></br>${data.current.uvi}</p>`;\n    miscData.appendChild(uvi);\n}\n\nfunction addFeelsLikeData(data) {\n    const feelsLike = document.createElement(\"div\");\n    feelsLike.setAttribute(\"id\", \"feels-like-data\");\n    feelsLike.innerHTML = `<p><i>Feels Like</i></br>${data.current.feels_like}° F</p>`;\n    miscData.appendChild(feelsLike);\n}\n\nfunction addDewPointData(data) {\n    const dewPoint = document.createElement(\"div\");\n    dewPoint.setAttribute(\"id\", \"dew-point-data\");\n    dewPoint.innerHTML = `<p><i>Dew Point</i></br>${data.current.dew_point}</p>`;\n    miscData.appendChild(dewPoint);\n}\n\nfunction addFooterContent() {\n    let text = document.createElement(\"p\");\n    text.textContent = \"Copyright © 2023 jhagg26 \";\n\n    const button = document.createElement(\"button\");\n    button.innerHTML = \"<img src='../images/github-logo.svg'>\";\n\n    button.addEventListener(\"click\", () => {\n        window.open(githubLink, '_blank');\n    });\n\n    footer.appendChild(text);\n    footer.appendChild(button);\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/manipulateDOM.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGeoDataURL: () => (/* binding */ createGeoDataURL),\n/* harmony export */   createWeatherDataURL: () => (/* binding */ createWeatherDataURL),\n/* harmony export */   getGetGeoData: () => (/* binding */ getGetGeoData),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\n// Functions that help interact with the WeatherAPI\n\n// Geo Data\nfunction createGeoDataURL(city) {\n    return \"http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={API key}\"\n                .replace(\"{city}\", city)\n                .replace(\"{API key}\", \"671d001b659b475436a1bb76f1452e11\");\n\n}\n\nasync function getGetGeoData(url) {\n    const response = await fetch(url);\n    const geoData = await response.json();\n    return  geoData;\n}\n\n// Weather Data\nfunction createWeatherDataURL(geoData) {\n    return \"https://api.openweathermap.org/data/3.0/onecall?units=imperial&lat={lat}&lon={lon}&appid={API key}\"\n                                                .replace(\"{lat}\", geoData.lat)\n                                                .replace(\"{lon}\", geoData.lon)\n                                                .replace(\"{API key}\", \"671d001b659b475436a1bb76f1452e11\");\n}\n\nasync function getWeatherData(url) {\n    const response = await fetch(url);\n    const weatherData = await response.json();\n    return weatherData;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;