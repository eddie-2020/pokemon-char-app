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

/***/ "./src/API/responseAPI.js":
/*!********************************!*\
  !*** ./src/API/responseAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchApiData = async () => {\r\n    const response = await fetch(\r\n      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',\r\n    );\r\n    return response.json();\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApiData);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/API/responseAPI.js?");

/***/ }),

/***/ "./src/Display/counter.js":
/*!********************************!*\
  !*** ./src/Display/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (allBokumon) => allBokumon.length;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/counter.js?");

/***/ }),

/***/ "./src/Display/displayBokomons.js":
/*!****************************************!*\
  !*** ./src/Display/displayBokomons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _responseLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responseLike */ \"./src/Display/responseLike.js\");\n\r\n\r\nconst displayPokemon = async (pokemon) => {\r\n  pokemon.forEach((pokes) => {\r\n    fetch(pokes.url)\r\n      .then((response) => response.json())\r\n      .then(async (pokesData) => {\r\n        const cards = document.getElementById(\"card-view\");\r\n        const bokumonVarieties = pokesData.types;\r\n        const bokumonsImgs = pokesData.sprites.other;\r\n        const reservedList = document.createElement(\"li\");\r\n        reservedList.classList.add(\"card-items\");\r\n        const pokesImg = document.createElement(\"img\");\r\n        pokesImg.setAttribute(\r\n          \"src\",\r\n          `${bokumonsImgs[\"official-artwork\"].front_default}`\r\n        );\r\n        pokesImg.setAttribute(\"alt\", \"pokemon\");\r\n\r\n        const hearder1 = document.createElement(\"h2\");\r\n        hearder1.textContent = `${pokesData.name}`;\r\n\r\n        const likeSection = document.createElement(\"span\");\r\n        likeSection.classList = \"likeSect\";\r\n\r\n        const likeImg = document.createElement(\"i\");\r\n        likeImg.classList.add(\"fas\", \"fa-heart\", \"heart\");\r\n        likeImg.setAttribute(\"id\", `${pokesData.name}`);\r\n\r\n        const spanEle = document.createElement(\"div\");\r\n        spanEle.setAttribute(\"id\", \"like\");\r\n\r\n        const listContainer = document.createElement(\"ul\");\r\n\r\n        bokumonVarieties.forEach((pokemon) => {\r\n          listContainer.innerHTML += `<li> ${pokemon.type.name} </li>`;\r\n        });\r\n        const commentBtn = document.createElement(\"button\");\r\n        commentBtn.setAttribute(\"type\", \"button\");\r\n        commentBtn.classList.add(pokesData.name, \"btn\");\r\n        commentBtn.innerHTML = \"comment\";\r\n        commentBtn.addEventListener(\"click\", () => {\r\n          // This is for the comment modal...\r\n        });\r\n        reservedList.appendChild(pokesImg);\r\n        hearder1.appendChild(likeSection);\r\n        reservedList.appendChild(hearder1);\r\n        likeSection.appendChild(likeImg);\r\n        reservedList.appendChild(spanEle);\r\n\r\n        // Append all uls'\r\n        reservedList.appendChild(commentBtn);\r\n        cards.appendChild(reservedList);\r\n        await (0,_responseLike__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokesData, spanEle);\r\n      });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\r\n\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/displayBokomons.js?");

/***/ }),

/***/ "./src/Display/responseLike.js":
/*!*************************************!*\
  !*** ./src/Display/responseLike.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';\r\nconst fetchAllLikes = (pokemon, item) => fetch(url)\r\n  .then((response) => response.json())\r\n  .then((likes) => {\r\n    likes.forEach((pkLike) => {\r\n      if (pkLike.item_id === pokemon.name) {\r\n        item.innerHTML = `${pkLike.likes} likes`;\r\n      }\r\n    });\r\n  });\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAllLikes);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/responseLike.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_responseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API/responseAPI */ \"./src/API/responseAPI.js\");\n/* harmony import */ var _Display_displayBokomons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display/displayBokomons */ \"./src/Display/displayBokomons.js\");\n/* harmony import */ var _Display_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display/counter */ \"./src/Display/counter.js\");\n\r\n\r\n\r\n\r\nconst pokemonTitle = document.getElementById('bokomonTitle');\r\nwindow.addEventListener('load', async () => {\r\n    const res = await (0,_API_responseAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    pokemonTitle.innerHTML = `Bokomon(${(0,_Display_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.results)})`;\r\n    await (0,_Display_displayBokomons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res.results);\r\n});\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;