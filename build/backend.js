require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\"use strict\";\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\nvar express = _interopRequire(__webpack_require__(1));\n\nvar index = _interopRequire(__webpack_require__(2));\n\nvar page = _interopRequire(__webpack_require__(4));\n\nvar path = _interopRequire(__webpack_require__(5));\n\nvar app = express();\n\napp.use(\"/\", express[\"static\"](path.resolve(__dirname, \"..\", \"static\")));\n\napp.get(\"/\", index);\napp.get(\"/page\", page);\n\nconsole.log(\"Listening on port 4000...\");\napp.listen(4000);\n/* WEBPACK VAR INJECTION */}.call(exports, \"src\"))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFBTyxPQUFPLHVDQUFNLENBQVM7O0lBQ3RCLEtBQUssdUNBQU0sQ0FBUzs7SUFDcEIsSUFBSSx1Q0FBTSxDQUFROztJQUNsQixJQUFJLHVDQUFNLENBQU07O0FBRXZCLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDOztBQUVwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLFVBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzs7QUFFckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUN6QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcbmltcG9ydCBwYWdlIGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ3N0YXRpYycpKSlcblxuYXBwLmdldCgnLycsIGluZGV4KTtcbmFwcC5nZXQoJy9wYWdlJywgcGFnZSk7XG5cbmNvbnNvbGUubG9nKFwiTGlzdGVuaW5nIG9uIHBvcnQgNDAwMC4uLlwiKTtcbmFwcC5saXN0ZW4oNDAwMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\nvar t = _interopRequire(__webpack_require__(3));\n\nmodule.exports = function (req, res) {\n  var arr = JSON.parse(req.query.arr || \"[]\");\n  res.send(t.map(arr, function (x) {\n    return x + 1;\n  }));\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQU8sQ0FBQyx1Q0FBTSxDQUFnQjs7aUJBRWYsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ2hDLE1BQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFDNUMsS0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLENBQUMsRUFBRTtBQUFFLFdBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3JEIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdCBmcm9tICd0cmFuc2R1Y2Vycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIHZhciBhcnIgPSBKU09OLnBhcnNlKHJlcS5xdWVyeS5hcnIgfHwgJ1tdJyk7XG4gIHJlcy5zZW5kKHQubWFwKGFyciwgZnVuY3Rpb24oeCkgeyByZXR1cm4geCArIDE7IH0pKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"transducers.js\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cmFuc2R1Y2Vycy5qc1wiPzA0MDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRyYW5zZHVjZXJzLmpzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ0cmFuc2R1Y2Vycy5qc1wiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nmodule.exports = function (req, res) {\n  res.send(\"page\");\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS5qcz81YTVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O2lCQUFlLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNoQyxLQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2xCIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyZXEsIHJlcykge1xuICByZXMuc2VuZCgncGFnZScpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhZ2UuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);