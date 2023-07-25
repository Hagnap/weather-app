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

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGeoDataURL: () => (/* binding */ createGeoDataURL),\n/* harmony export */   createWeatherDataURL: () => (/* binding */ createWeatherDataURL),\n/* harmony export */   getGetGeoData: () => (/* binding */ getGetGeoData),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\n// Functions that help interact with the WeatherAPI\n\n// Geo Data\nfunction createGeoDataURL(city) {\n    return \"http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={API key}\"\n                .replace(\"{city}\", city)\n                .replace(\"{API key}\", \"671d001b659b475436a1bb76f1452e11\");\n\n}\n\nasync function getGetGeoData(url) {\n    const response = await fetch(url);\n    const geoData = await response.json();\n    return  geoData;\n}\n\n// Weather Data\nfunction createWeatherDataURL(geoData) {\n    return \"https://api.openweathermap.org/data/3.0/onecall?units=imperial&lat={lat}&lon={lon}&appid={API key}\"\n                                                .replace(\"{lat}\", geoData.lat)\n                                                .replace(\"{lon}\", geoData.lon)\n                                                .replace(\"{API key}\", \"671d001b659b475436a1bb76f1452e11\");\n}\n\nasync function getWeatherData(url) {\n    const response = await fetch(url);\n    const weatherData = await response.json();\n    return weatherData;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

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
/******/ 	__webpack_modules__["./src/weatherAPI.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;