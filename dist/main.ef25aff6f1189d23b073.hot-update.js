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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useCardsShuffleAlgorithm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useCardsCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCardsCreate */ \"./src/hooks/useCardsCreate.tsx\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\nfunction useCardsShuffleAlgorithm() {\n  var unoDeck = (0,_useCardsCreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var cards = unoDeck();\n  function fisherYatesShuffle(cards) {\n    for (var i = cards.length - 1; i > 0; i--) {\n      var j = Math.floor(Math.random() * (i + 1));\n      // Swap elements\n      var _ref = [cards[j], cards[i]];\n      cards[i] = _ref[0];\n      cards[j] = _ref[1];\n    }\n    console.log(\"...shuffled cards is \", _toConsumableArray(cards));\n    return cards;\n  }\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    console.log(\"...cards is \", _toConsumableArray(cards));\n    return fisherYatesShuffle(cards);\n  }, [cards]);\n}\n\n//# sourceURL=webpack://uno/./src/hooks/useCardsShuffleAlgorithm.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c32e61910f45d14f136")
/******/ })();
/******/ 
/******/ }
);