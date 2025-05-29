"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateuno"]("main",{

/***/ "./src/card/PlayerCards.tsx":
/*!**********************************!*\
  !*** ./src/card/PlayerCards.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_usePlayerChangedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/usePlayerChangedCard */ \"./src/hooks/usePlayerChangedCard.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nfunction PlayerCards(_ref) {\n  var playerId = _ref.playerId;\n  var playerCardsData = (0,_hooks_usePlayerChangedCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerId);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"player cards changed for player \", playerId, \" with cards \", playerCardsData[playerId]);\n  }, [playerCardsData]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    children: playerCardsData\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerCards);\n\n//# sourceURL=webpack://uno/./src/card/PlayerCards.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6065c9c83714b7659fe6")
/******/ })();
/******/ 
/******/ }
);