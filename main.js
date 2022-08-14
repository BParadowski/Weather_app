/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getCoordinants.js":
/*!*******************************!*\
  !*** ./src/getCoordinants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoordinants)
/* harmony export */ });
async function getCoordinants(place) {
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


/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _getCoordinants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCoordinants */ "./src/getCoordinants.js");


async function getWeather(place) {
  try {
    const [lat, lon] = await (0,_getCoordinants__WEBPACK_IMPORTED_MODULE_0__["default"])(place);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");


const btn = document.getElementById("search_button");
const input = document.getElementById("user_input");
const info = document.querySelector(".weather_info");

const displayWeather = async () => {
  const data = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
  if (data) {
    input.value = "";
    renderWeatherDiv(data.name, data.weather, data.temp, data.iconId);
  }

  function renderWeatherDiv(name, weather, temp, iconId) {
    const place = document.createElement("h4");
    const icon = document.createElement("img");
    const temperature = document.createElement("h4");
    const desc = document.createElement("p");

    place.textContent = name;
    icon.src = `http://openweathermap.org/img/wn/${iconId}.png`;
    temperature.textContent = `${temp} degrees Celcius`;
    desc.textContent = weather;

    info.replaceChildren(place, desc, icon, temperature);
  }
};

btn.addEventListener("click", displayWeather);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayWeather();
    input.value = "";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4Qzs7QUFFL0I7QUFDZjtBQUNBLDZCQUE2QiwyREFBYztBQUMzQztBQUNBLDZEQUE2RCxJQUFJLE9BQU8sSUFBSTtBQUM1RSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsT0FBTztBQUMxRCxpQ0FBaUMsTUFBTTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldENvb3JkaW5hbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYW50cyhwbGFjZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3BsYWNlfSZhcHBpZD1jMTYzZDQ4ODkyMmQ5ZTJiNGUxOGFlODQ4NzViODUzY2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBnZXQgY29vcmRpbmFudHMgb2YgdGhlIGZpcnN0IGNpdHlcbiAgICBjb25zdCBjb29yZHMgPSBbZGF0YUFycmF5WzBdW1wibGF0XCJdLCBkYXRhQXJyYXlbMF1bXCJsb25cIl1dO1xuICAgIHJldHVybiBjb29yZHM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiUGxhY2UgZG9lc24ndCBleGlzdFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IGdldENvb3JkaW5hbnRzIGZyb20gXCIuL2dldENvb3JkaW5hbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocGxhY2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbbGF0LCBsb25dID0gYXdhaXQgZ2V0Q29vcmRpbmFudHMocGxhY2UpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPW1ldHJpYyZhcHBpZD1jMTYzZDQ4ODkyMmQ5ZTJiNGUxOGFlODQ4NzViODUzY2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGFbXCJ3ZWF0aGVyXCJdWzBdW1wiZGVzY3JpcHRpb25cIl07XG4gICAgY29uc3QgaWNvbklkID0gZGF0YVtcIndlYXRoZXJcIl1bMF1bXCJpY29uXCJdO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRhW1wibWFpblwiXVtcInRlbXBcIl07XG4gICAgY29uc3QgbmFtZSA9IGRhdGFbXCJuYW1lXCJdO1xuICAgIHJldHVybiB7IHdlYXRoZXIsIG5hbWUsIGljb25JZCwgdGVtcCB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vIGNvb3JkaW5hbnRzIHByb3ZpZGVkXCIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL2dldFdlYXRoZXJcIjtcblxuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hfYnV0dG9uXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfaW5wdXRcIik7XG5jb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyX2luZm9cIik7XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gIGlmIChkYXRhKSB7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHJlbmRlcldlYXRoZXJEaXYoZGF0YS5uYW1lLCBkYXRhLndlYXRoZXIsIGRhdGEudGVtcCwgZGF0YS5pY29uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyV2VhdGhlckRpdihuYW1lLCB3ZWF0aGVyLCB0ZW1wLCBpY29uSWQpIHtcbiAgICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uSWR9LnBuZ2A7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSBkZWdyZWVzIENlbGNpdXNgO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyO1xuXG4gICAgaW5mby5yZXBsYWNlQ2hpbGRyZW4ocGxhY2UsIGRlc2MsIGljb24sIHRlbXBlcmF0dXJlKTtcbiAgfVxufTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5V2VhdGhlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBkaXNwbGF5V2VhdGhlcigpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=