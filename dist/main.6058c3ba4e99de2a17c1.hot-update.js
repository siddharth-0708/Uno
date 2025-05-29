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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_gameSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/gameSelectors */ \"./src/store/gameSelectors.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _PlayerCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerCards */ \"./src/card/PlayerCards.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar i = 0;\nfunction Card() {\n  var cardsData = _store_gameSelectors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCardsData();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n\n  // useEffect(()=>{\n  //   console.log(\"card shuffle data ISSS \", cardsData);\n\n  //   if(i > 4){\n  //     return;\n  //   }\n  //   setTimeout(() => {\n  //     i++;\n  //     dispatch(unoActions.setShuffleCards(cardsData));\n  //   }, 1000);\n  // },[cardsData]);  \n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    children: [\"player1\", \"player2\", \"player3\", \"player4\"].map(function (id) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlayerCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        playerId: id\n      });\n    })\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://uno/./src/card/Card.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8c4f9866dc414a17e9b")
/******/ })();
/******/ 
/******/ }
);