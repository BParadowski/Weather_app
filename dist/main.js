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
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=c163d488922d9e2b4e18ae84875b853c`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLHlEQUF5RCxNQUFNO0FBQy9ELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4Qzs7QUFFL0I7QUFDZjtBQUNBLDZCQUE2QiwyREFBYztBQUMzQztBQUNBLDZEQUE2RCxJQUFJLE9BQU8sSUFBSTtBQUM1RSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsT0FBTztBQUMxRCxpQ0FBaUMsTUFBTTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldENvb3JkaW5hbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYW50cyhwbGFjZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtwbGFjZX0mYXBwaWQ9YzE2M2Q0ODg5MjJkOWUyYjRlMThhZTg0ODc1Yjg1M2NgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gZ2V0IGNvb3JkaW5hbnRzIG9mIHRoZSBmaXJzdCBjaXR5XG4gICAgY29uc3QgY29vcmRzID0gW2RhdGFBcnJheVswXVtcImxhdFwiXSwgZGF0YUFycmF5WzBdW1wibG9uXCJdXTtcbiAgICByZXR1cm4gY29vcmRzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBsYWNlIGRvZXNuJ3QgZXhpc3RcIik7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRDb29yZGluYW50cyBmcm9tIFwiLi9nZXRDb29yZGluYW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBsYWNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgW2xhdCwgbG9uXSA9IGF3YWl0IGdldENvb3JkaW5hbnRzKHBsYWNlKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9YzE2M2Q0ODg5MjJkOWUyYjRlMThhZTg0ODc1Yjg1M2NgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBkYXRhW1wid2VhdGhlclwiXVswXVtcImRlc2NyaXB0aW9uXCJdO1xuICAgIGNvbnN0IGljb25JZCA9IGRhdGFbXCJ3ZWF0aGVyXCJdWzBdW1wiaWNvblwiXTtcbiAgICBjb25zdCB0ZW1wID0gZGF0YVtcIm1haW5cIl1bXCJ0ZW1wXCJdO1xuICAgIGNvbnN0IG5hbWUgPSBkYXRhW1wibmFtZVwiXTtcbiAgICByZXR1cm4geyB3ZWF0aGVyLCBuYW1lLCBpY29uSWQsIHRlbXAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coXCJObyBjb29yZGluYW50cyBwcm92aWRlZFwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9nZXRXZWF0aGVyXCI7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoX2J1dHRvblwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX2lucHV0XCIpO1xuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlcl9pbmZvXCIpO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICBpZiAoZGF0YSkge1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICByZW5kZXJXZWF0aGVyRGl2KGRhdGEubmFtZSwgZGF0YS53ZWF0aGVyLCBkYXRhLnRlbXAsIGRhdGEuaWNvbklkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEaXYobmFtZSwgd2VhdGhlciwgdGVtcCwgaWNvbklkKSB7XG4gICAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbklkfS5wbmdgO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7dGVtcH0gZGVncmVlcyBDZWxjaXVzYDtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gd2VhdGhlcjtcblxuICAgIGluZm8ucmVwbGFjZUNoaWxkcmVuKHBsYWNlLCBkZXNjLCBpY29uLCB0ZW1wZXJhdHVyZSk7XG4gIH1cbn07XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVdlYXRoZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9