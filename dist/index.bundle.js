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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchApiData = async () => {\n  const response = await fetch(\n    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',\n  );\n  return response.json();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApiData);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/API/responseAPI.js?");

/***/ }),

/***/ "./src/Display/counter.js":
/*!********************************!*\
  !*** ./src/Display/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (allBokumon) => allBokumon.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/counter.js?");

/***/ }),

/***/ "./src/Display/displayBokomons.js":
/*!****************************************!*\
  !*** ./src/Display/displayBokomons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _responseLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responseLike */ \"./src/Display/responseLike.js\");\n\n\nconst displayPokemon = async (pokemon) => {\n  pokemon.forEach((pokes) => {\n    fetch(pokes.url)\n      .then((response) => response.json())\n      .then(async (pokesData) => {\n        const cards = document.getElementById('card-view');\n        const bokumonVarieties = pokesData.types;\n        const bokumonsImgs = pokesData.sprites.other;\n        const reservedList = document.createElement('li');\n        reservedList.classList.add('card-items');\n        const pokesImg = document.createElement('img');\n        pokesImg.setAttribute(\n          'src',\n          `${bokumonsImgs['official-artwork'].front_default}`,\n        );\n        pokesImg.setAttribute('alt', 'pokemon');\n\n        const hearder1 = document.createElement('h2');\n        hearder1.textContent = `${pokesData.name}`;\n\n        const likeSection = document.createElement('span');\n        likeSection.classList = 'likeSect';\n\n        const likeImg = document.createElement('i');\n        likeImg.classList.add('fas', 'fa-heart', 'heart');\n        likeImg.setAttribute('id', `${pokesData.name}`);\n\n        const spanEle = document.createElement('div');\n        spanEle.setAttribute('id', 'like');\n\n        const listContainer = document.createElement('ul');\n\n        bokumonVarieties.forEach((pokemon) => {\n          listContainer.innerHTML += `<li> ${pokemon.type.name} </li>`;\n        });\n        const commentBtn = document.createElement('button');\n        commentBtn.setAttribute('type', 'button');\n        commentBtn.classList.add(pokesData.name, 'btn');\n        commentBtn.innerHTML = 'comment';\n        commentBtn.addEventListener('click', () => {\n          // This is for the comment modal...\n        });\n        reservedList.appendChild(pokesImg);\n        hearder1.appendChild(likeSection);\n        reservedList.appendChild(hearder1);\n        likeSection.appendChild(likeImg);\n        reservedList.appendChild(spanEle);\n\n        // Append all uls'\n        reservedList.appendChild(commentBtn);\n        cards.appendChild(reservedList);\n        await (0,_responseLike__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokesData, spanEle);\n      });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\n\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/displayBokomons.js?");

/***/ }),

/***/ "./src/Display/responseLike.js":
/*!*************************************!*\
  !*** ./src/Display/responseLike.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';\nconst fetchAllLikes = (pokemon, item) => fetch(url)\n  .then((response) => response.json())\n  .then((likes) => {\n    likes.forEach((pkLike) => {\n      if (pkLike.item_id === pokemon.name) {\n        item.innerHTML = `${pkLike.likes} likes`;\n      }\n    });\n  });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAllLikes);\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/Display/responseLike.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_responseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API/responseAPI */ \"./src/API/responseAPI.js\");\n/* harmony import */ var _Display_displayBokomons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display/displayBokomons */ \"./src/Display/displayBokomons.js\");\n/* harmony import */ var _Display_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display/counter */ \"./src/Display/counter.js\");\n\n\n\n\nconst pokemonTitle = document.getElementById('bokomonTitle');\nwindow.addEventListener('load', async () => {\n  const res = await (0,_API_responseAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  pokemonTitle.innerHTML = `Bokomon(${(0,_Display_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.results)})`;\n  await (0,_Display_displayBokomons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res.results);\n});\n\n//# sourceURL=webpack://Repeat-Kanban-Board/./src/index.js?");

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