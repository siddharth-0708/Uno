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

/***/ "./src/hooks/useCardsShuffleAlgorithm.tsx":
/*!************************************************!*\
  !*** ./src/hooks/useCardsShuffleAlgorithm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useCardsShuffleAlgorithm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useCardsCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCardsCreate */ \"./src/hooks/useCardsCreate.tsx\");\n\n\nfunction useCardsShuffleAlgorithm() {\n  var unoDeck = (0,_useCardsCreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var cards = unoDeck();\n  function fisherYatesShuffle(cards) {\n    for (var i = cards.length - 1; i > 0; i--) {\n      var j = Math.floor(Math.random() * (i + 1));\n      // Swap elements\n      var _ref = [cards[j], cards[i]];\n      cards[i] = _ref[0];\n      cards[j] = _ref[1];\n    }\n    return cards;\n  }\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    console.log(\"...cards is \", cards);\n    fisherYatesShuffle(cards);\n  }, [cards]);\n}\n\n//# sourceURL=webpack://uno/./src/hooks/useCardsShuffleAlgorithm.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e8e09c4e47593d8cf6cd")
/******/ })();
/******/ 
/******/ }
);