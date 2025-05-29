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

/***/ "./src/card/Card.tsx":
/*!***************************!*\
  !*** ./src/card/Card.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_gameSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/gameSelectors */ \"./src/store/gameSelectors.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nfunction Card() {\n  var cardsData = _store_gameSelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCardsData();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"card shuffle data ISSS \", cardsData);\n  }, [cardsData]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    style: {\n      position: 'absolute',\n      top: '0px'\n    },\n    children: [\"Hello Uno \", cardsData.length]\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://uno/./src/card/Card.tsx?");

/***/ }),

/***/ "./src/store/gameSelectors.tsx":
/*!*************************************!*\
  !*** ./src/store/gameSelectors.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar gameSelectors = {\n  getCardsData: function getCardsData() {\n    return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (_ref) {\n      var gameState = _ref.gameState;\n      return gameState.cardsData;\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSelectors);\n\n//# sourceURL=webpack://uno/./src/store/gameSelectors.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a9ba08084c906790b35b")
/******/ })();
/******/ 
/******/ }
);