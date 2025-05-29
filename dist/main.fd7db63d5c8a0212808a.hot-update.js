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

/***/ "./src/store/gameSlices.tsx":
/*!**********************************!*\
  !*** ./src/store/gameSlices.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unoActions: () => (/* binding */ unoActions),\n/* harmony export */   unoReducers: () => (/* binding */ unoReducers)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar initialState = {\n  cardsData: []\n};\nvar unoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"uno\",\n  initialState: initialState,\n  reducers: {\n    setInitCardsData: function setInitCardsData(state, actions) {\n      state.cardsData = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    },\n    setShuffleCards: function setShuffleCards(state, actions) {\n      state.cardsData = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(actions.payload.cards);\n    }\n  }\n});\nvar unoActions = unoSlice.actions;\nvar unoReducers = unoSlice.reducer;\n\n//# sourceURL=webpack://uno/./src/store/gameSlices.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16a09e538cd5e274ec14")
/******/ })();
/******/ 
/******/ }
);