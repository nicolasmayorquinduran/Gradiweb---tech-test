/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _utils_featured_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/featured-products */ \"./src/utils/featured-products.js\");\n/* harmony import */ var _utils_featured_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_featured_products__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/header */ \"./src/utils/header.js\");\n/* harmony import */ var _utils_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_header__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_ket_club_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/ket_club.jpg */ \"./assets/ket_club.jpg\");\n/* harmony import */ var _assets_shuffle_essentials_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/shuffle_essentials.webp */ \"./assets/shuffle_essentials.webp\");\n/* harmony import */ var _assets_hero_banner_img_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/hero_banner_img.avif */ \"./assets/hero_banner_img.avif\");\n/* harmony import */ var _assets_homepage_bottom_banner_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/homepage_bottom_banner.avif */ \"./assets/homepage_bottom_banner.avif\");\n/* harmony import */ var _assets_shuffle_crewneck_black_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/shuffle_crewneck_black.avif */ \"./assets/shuffle_crewneck_black.avif\");\n/* harmony import */ var _assets_shuffle_crewneck_grey_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/shuffle_crewneck_grey.avif */ \"./assets/shuffle_crewneck_grey.avif\");\n/* harmony import */ var _assets_shuffle_hat_black_avif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/shuffle_hat_black.avif */ \"./assets/shuffle_hat_black.avif\");\n/* harmony import */ var _assets_shuffle_hat_purple_avif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/shuffle_hat_purple.avif */ \"./assets/shuffle_hat_purple.avif\");\n/* harmony import */ var _assets_shuffle_hoodie_black_avif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/shuffle_hoodie_black.avif */ \"./assets/shuffle_hoodie_black.avif\");\n/* harmony import */ var _assets_shuffle_hoodie_purple_avif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/shuffle_hoodie_purple.avif */ \"./assets/shuffle_hoodie_purple.avif\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/shuffle_t-shirt_white.avif'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _assets_shuffle_t_shirt_black_avif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/shuffle_t-shirt_black.avif */ \"./assets/shuffle_t-shirt_black.avif\");\n/* harmony import */ var _assets_waifu_body_pillow_avif__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/waifu_body_pillow.avif */ \"./assets/waifu_body_pillow.avif\");\n/* harmony import */ var _assets_spring_banner_avif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/spring_banner.avif */ \"./assets/spring_banner.avif\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ }),

/***/ "./src/utils/featured-products.js":
/*!****************************************!*\
  !*** ./src/utils/featured-products.js ***!
  \****************************************/
/***/ (() => {

eval("// variables que mencionaste\nlet allProducts = [];\nlet offset = 0;\nconst carrouselRowLength = 4;\nconst parser = new DOMParser();\n\nlet isLoading = false;\nlet reachedEnd = false;\n\nfunction appendProducts(newProducts) {\n  const container = document.querySelector('#featured-products-container');\n  if (!container || !newProducts || newProducts.length === 0) return;\n\n  const fragment = document.createDocumentFragment();\n  newProducts.forEach(card => fragment.appendChild(card));\n  container.appendChild(fragment);\n}\n\nfunction initInitialProducts() {\n  const container = document.querySelector('#featured-products-container');\n  if (!container) return;\n\n  const existing = Array.from(container.querySelectorAll('.product-card'));\n  if (existing.length) {\n    allProducts = existing.slice();\n    offset = allProducts.length;\n  }\n}\n\nasync function loadMore() {\n  if (isLoading || reachedEnd) return;\n  isLoading = true;\n  try {\n    const response = await fetch(`/api/products?from=${offset}&limit=${carrouselRowLength}`, {\n      method: 'GET'\n    });\n    \n    if (!response.ok) throw new Error('La respuesta de la red no fue exitosa.');\n\n    const htmlString = await response.text();\n    const doc = parser.parseFromString(htmlString, 'text/html');\n    const newNodes = Array.from(doc.querySelectorAll('.product-card'));\n\n    if (newNodes.length === 0) {\n      reachedEnd = true;\n      return;\n    }\n\n    allProducts.push(...newNodes);\n    appendProducts(newNodes);\n\n    offset += newNodes.length;\n  } catch (error) {\n    console.error('Error al obtener los productos:', error);\n  } finally {\n    isLoading = false;\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const container = document.getElementById('featured-products-container');\n  const scrollTopBtn = document.getElementById('scroll-top-btn');\n\n  initInitialProducts();\n  if (allProducts.length === 0) {\n    loadMore();\n  }\n\n  if (!container) return;\n\n  container.addEventListener('scroll', () => {\n    const { scrollTop, scrollHeight, clientHeight } = container;\n    if (scrollTop > 200) {\n      if (scrollTopBtn) scrollTopBtn.style.display = 'block';\n    } else {\n      if (scrollTopBtn) scrollTopBtn.style.display = 'none';\n    }\n\n    const threshold = 20;\n    if (scrollTop + clientHeight >= scrollHeight - threshold) {\n      loadMore();\n    }\n  });\n\n  if (scrollTopBtn) {\n    scrollTopBtn.addEventListener('click', () => {\n      container.scrollTo({ top: 0, behavior: 'smooth' });\n    });\n  }\n});\n\n\n//# sourceURL=webpack://shopify-simulator/./src/utils/featured-products.js?");

/***/ }),

/***/ "./src/utils/header.js":
/*!*****************************!*\
  !*** ./src/utils/header.js ***!
  \*****************************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n  stickyMenu();\n  toggleMenu();\n});\n\n\nfunction stickyMenu() {\n  const topBar = document.querySelector('#top-bar');\n  const header = document.querySelector('#header');\n  const topBarHeight = topBar.offsetHeight;\n  const headerHeight = header.offsetHeight;\n  window.addEventListener('scroll', () => {\n    if (window.scrollY > topBarHeight + headerHeight) {\n      header.classList.add('scrolled');\n    } else {\n      header.classList.remove('scrolled');\n    }\n  });\n}\n\nfunction toggleMenu() {\n  const headerLinksContainer = document.getElementById('header-links-container');\n  const openBtn = document.getElementById('open-hamburger-btn');\n  const closeBtn = document.getElementById('close-hamburger-btn');\n\n  if (openBtn && headerLinksContainer) {\n    openBtn.addEventListener('click', () => {\n      headerLinksContainer.setAttribute('data-hamburger-open', 'true');\n    });\n  }\n\n  if (closeBtn && headerLinksContainer) {\n    closeBtn.addEventListener('click', () => {\n      headerLinksContainer.setAttribute('data-hamburger-open', 'false');\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack://shopify-simulator/./src/utils/header.js?");

/***/ }),

/***/ "./assets/hero_banner_img.avif":
/*!*************************************!*\
  !*** ./assets/hero_banner_img.avif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/hero_banner_img.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/hero_banner_img.avif?");

/***/ }),

/***/ "./assets/homepage_bottom_banner.avif":
/*!********************************************!*\
  !*** ./assets/homepage_bottom_banner.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/homepage_bottom_banner.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/homepage_bottom_banner.avif?");

/***/ }),

/***/ "./assets/ket_club.jpg":
/*!*****************************!*\
  !*** ./assets/ket_club.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ket_club.jpg\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/ket_club.jpg?");

/***/ }),

/***/ "./assets/shuffle_crewneck_black.avif":
/*!********************************************!*\
  !*** ./assets/shuffle_crewneck_black.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_crewneck_black.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_crewneck_black.avif?");

/***/ }),

/***/ "./assets/shuffle_crewneck_grey.avif":
/*!*******************************************!*\
  !*** ./assets/shuffle_crewneck_grey.avif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_crewneck_grey.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_crewneck_grey.avif?");

/***/ }),

/***/ "./assets/shuffle_essentials.webp":
/*!****************************************!*\
  !*** ./assets/shuffle_essentials.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_essentials.webp\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_essentials.webp?");

/***/ }),

/***/ "./assets/shuffle_hat_black.avif":
/*!***************************************!*\
  !*** ./assets/shuffle_hat_black.avif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_hat_black.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_hat_black.avif?");

/***/ }),

/***/ "./assets/shuffle_hat_purple.avif":
/*!****************************************!*\
  !*** ./assets/shuffle_hat_purple.avif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_hat_purple.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_hat_purple.avif?");

/***/ }),

/***/ "./assets/shuffle_hoodie_black.avif":
/*!******************************************!*\
  !*** ./assets/shuffle_hoodie_black.avif ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_hoodie_black.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_hoodie_black.avif?");

/***/ }),

/***/ "./assets/shuffle_hoodie_purple.avif":
/*!*******************************************!*\
  !*** ./assets/shuffle_hoodie_purple.avif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_hoodie_purple.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_hoodie_purple.avif?");

/***/ }),

/***/ "./assets/shuffle_t-shirt_black.avif":
/*!*******************************************!*\
  !*** ./assets/shuffle_t-shirt_black.avif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/shuffle_t-shirt_black.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/shuffle_t-shirt_black.avif?");

/***/ }),

/***/ "./assets/spring_banner.avif":
/*!***********************************!*\
  !*** ./assets/spring_banner.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/spring_banner.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/spring_banner.avif?");

/***/ }),

/***/ "./assets/waifu_body_pillow.avif":
/*!***************************************!*\
  !*** ./assets/waifu_body_pillow.avif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/waifu_body_pillow.avif\";\n\n//# sourceURL=webpack://shopify-simulator/./assets/waifu_body_pillow.avif?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;