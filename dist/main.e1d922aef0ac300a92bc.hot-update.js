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

/***/ "./src/store/utils.ts":
/*!****************************!*\
  !*** ./src/store/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateUnoDeck: () => (/* binding */ generateUnoDeck),\n/* harmony export */   shuffledCards: () => (/* binding */ shuffledCards)\n/* harmony export */ });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar generateUnoDeck = function generateUnoDeck() {\n  var colors = ['R', 'G', 'B', 'Y'];\n  var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\n  var actionCards = ['Skip', 'Reverse', 'Draw2'];\n  var deck = [];\n\n  // For each color\n  for (var _i = 0, _colors = colors; _i < _colors.length; _i++) {\n    var color = _colors[_i];\n    // One zero per color\n    deck.push('0' + color);\n\n    // Two of each 1-9\n    for (var i = 1; i <= 9; i++) {\n      deck.push(i + color);\n      deck.push(i + color);\n    }\n\n    // Two of each action card\n    var _iterator = _createForOfIteratorHelper(actionCards),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var action = _step.value;\n        deck.push(action + color);\n        deck.push(action + color);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  // 4 Wild cards and 4 Wild Draw Four cards\n  for (var _i2 = 0; _i2 < 4; _i2++) {\n    deck.push('W');\n    deck.push('WD4');\n  }\n\n  //shuffle and create Init cards\n  return shuffledCards(deck);\n};\nvar shuffledCards = function shuffledCards(cardsArray) {\n  var cards = _toConsumableArray(cardsArray);\n  for (var i = 0; i < cards.length; i++) {\n    var j = Math.floor(Math.random() * (cards.length - i)) + i;\n    var temp = cards[i];\n    cards[i] = cards[j];\n    cards[j] = temp;\n  }\n  return cards;\n};\n\n//# sourceURL=webpack://uno/./src/store/utils.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6acab67fe2e352b472f")
/******/ })();
/******/ 
/******/ }
);