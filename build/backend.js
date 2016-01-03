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

	eval("\"use strict\";\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\nvar express = _interopRequire(__webpack_require__(1));\n\nvar _csvStore = __webpack_require__(2);\n\nvar readStore = _csvStore.readStore;\nvar readCSV = _csvStore.readCSV;\n\nvar mapTransform = __webpack_require__(7).mapTransform;\n\n// Load app\nvar app = express();\n\n// Store API\napp.get(\"/store/:file\", readCSV);\napp.get(\"/store\", readStore);\n\n// Map API\napp.get(\"/map/:file\", mapTransform);\n\n// Start Server\nconsole.log(\"Listening on port 4000...\");\napp.listen(4000);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFBTyxPQUFPLHVDQUFNLENBQVM7O29DQUNNLENBQWE7O0lBQXZDLFNBQVMsYUFBVCxTQUFTO0lBQUUsT0FBTyxhQUFQLE9BQU87O0lBQ2xCLFlBQVksdUJBQVEsQ0FBaUIsRUFBckMsWUFBWTs7O0FBSXJCLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDOzs7QUFHcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQzs7O0FBRzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzs7O0FBSW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7QUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyByZWFkU3RvcmUsIHJlYWRDU1YgfSBmcm9tICcuL2Nzdi1zdG9yZSdcbmltcG9ydCB7IG1hcFRyYW5zZm9ybSB9IGZyb20gJy4vbWFwLXRyYW5zZm9ybSdcblxuXG4vLyBMb2FkIGFwcFxudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gU3RvcmUgQVBJXG5hcHAuZ2V0KCcvc3RvcmUvOmZpbGUnLCByZWFkQ1NWKVxuYXBwLmdldCgnL3N0b3JlJywgcmVhZFN0b3JlKVxuXG4vLyBNYXAgQVBJXG5hcHAuZ2V0KCcvbWFwLzpmaWxlJywgbWFwVHJhbnNmb3JtKVxuXG5cbi8vIFN0YXJ0IFNlcnZlclxuY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBwb3J0IDQwMDAuLi4nKVxuYXBwLmxpc3Rlbig0MDAwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\"use strict\";\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\nexports.readFile = readFile;\n\n// API\n\nexports.readStore = readStore;\n\n/*\n * Requires file param\n */\nexports.readCSV = readCSV;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar fs = _interopRequire(__webpack_require__(3));\n\nvar path = _interopRequire(__webpack_require__(4));\n\nvar Promise = _interopRequire(__webpack_require__(5));\n\nvar _transducersJs = __webpack_require__(6);\n\nvar map = _transducersJs.map;\nvar filter = _transducersJs.filter;\n\n// Store Management\n\nvar storeDir = path.resolve(__dirname, \"..\", \"data\");\nvar EXTENSIONS = [\"csv\"];\n\nfunction trimExtensions(filenames) {\n  return map(filenames, function (name) {\n    return name.split(\".\")[0];\n  });\n}\n\nfunction whiteListExtensions(files, extensions) {\n  return filter(files, function (file) {\n    var splits = file.split(\".\");\n    var extension = splits[splits.length - 1];\n\n    return extensions.indexOf(extension) !== -1;\n  });\n}\n\nfunction readFiles() {\n  return new Promise(function (resolve, reject) {\n    fs.readdir(storeDir, function (err, files) {\n      if (err) {\n        reject(err);\n      }\n\n      var allowedFiles = whiteListExtensions(files, EXTENSIONS);\n      resolve(trimExtensions(allowedFiles));\n    });\n  });\n}\n\nfunction readFile(file) {\n  return new Promise(function (resolve, reject) {\n    var filename = path.join(storeDir, file);\n    fs.readFile(filename, { encoding: \"utf8\" }, function (err, contents) {\n      if (err) {\n        reject(err);\n      }\n\n      resolve(contents);\n    });\n  });\n}\n\nfunction readStore(req, res, next) {\n  readFiles().then(function (files) {\n    return res.send(files);\n  })[\"catch\"](function (err) {\n    return next(err);\n  });\n}\n\nfunction readCSV(req, res, next) {\n  var filename = req.params.file + \".csv\";\n  readFile(filename).then(function (file) {\n    return res.send(file);\n  })[\"catch\"](function (err) {\n    return next(err);\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(exports, \"src\"))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3N2LXN0b3JlLmpzPzQxZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQTBDZ0IsUUFBUSxHQUFSLFFBQVE7Ozs7UUFnQlIsU0FBUyxHQUFULFNBQVM7Ozs7O1FBVVQsT0FBTyxHQUFQLE9BQU87Ozs7O0lBcEVoQixFQUFFLHVDQUFNLENBQUk7O0lBQ1osSUFBSSx1Q0FBTSxDQUFNOztJQUNoQixPQUFPLHVDQUFNLENBQVU7O3lDQUNGLENBQWdCOztJQUFuQyxHQUFHLGtCQUFILEdBQUc7SUFBRSxNQUFNLGtCQUFOLE1BQU07Ozs7QUFLcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUN0RCxJQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQzs7QUFFMUIsU0FBUyxjQUFjLENBQUMsU0FBUyxFQUFFO0FBQ2pDLFNBQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQUksRUFBSztBQUM5QixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQzFCLENBQUM7Q0FDSDs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQzdCLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzlCLFFBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7QUFFM0MsV0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM1QyxDQUFDO0NBQ0g7O0FBSUQsU0FBUyxTQUFTLEdBQUc7QUFDbkIsU0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQU07QUFDdkMsTUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ25DLFVBQUksR0FBRyxFQUFFO0FBQ1AsY0FBTSxDQUFDLEdBQUcsQ0FBQztPQUNaOztBQUVELFVBQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7QUFDM0QsYUFBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN0QyxDQUFDO0dBQ0gsQ0FBQztDQUNIOztBQUdNLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUM3QixTQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxRQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7QUFDMUMsTUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFLO0FBQzdELFVBQUksR0FBRyxFQUFFO0FBQ1AsY0FBTSxDQUFDLEdBQUcsQ0FBQztPQUNaOztBQUVELGFBQU8sQ0FBQyxRQUFRLENBQUM7S0FDbEIsQ0FBQztHQUNILENBQUM7Q0FDSDs7QUFLTSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN4QyxXQUFTLEVBQUUsQ0FDUixJQUFJLENBQUMsVUFBQyxLQUFLO1dBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7R0FBQSxDQUFDLFNBQzNCLENBQUMsVUFBQyxHQUFHO1dBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztHQUFBLENBQUM7Q0FDN0I7O0FBTU0sU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDdEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTTtBQUN6QyxVQUFRLENBQUMsUUFBUSxDQUFDLENBQ2YsSUFBSSxDQUFDLFVBQUMsSUFBSTtXQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0dBQUEsQ0FBQyxTQUN6QixDQUFDLFVBQUMsR0FBRztXQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7R0FBQSxDQUFDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gJ3RyYW5zZHVjZXJzLmpzJ1xuXG5cbi8vIFN0b3JlIE1hbmFnZW1lbnRcblxuY29uc3Qgc3RvcmVEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnZGF0YScpXG5jb25zdCBFWFRFTlNJT05TID0gWydjc3YnXVxuXG5mdW5jdGlvbiB0cmltRXh0ZW5zaW9ucyhmaWxlbmFtZXMpIHtcbiAgcmV0dXJuIG1hcChmaWxlbmFtZXMsIChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIG5hbWUuc3BsaXQoJy4nKVswXVxuICB9KVxufVxuXG5mdW5jdGlvbiB3aGl0ZUxpc3RFeHRlbnNpb25zKGZpbGVzLCBleHRlbnNpb25zKSB7XG4gIHJldHVybiBmaWx0ZXIoZmlsZXMsIChmaWxlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRzID0gZmlsZS5zcGxpdCgnLicpXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gc3BsaXRzW3NwbGl0cy5sZW5ndGggLSAxXVxuXG4gICAgcmV0dXJuIGV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pICE9PSAtMVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gcmVhZEZpbGVzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgID0+IHtcbiAgICBmcy5yZWFkZGlyKHN0b3JlRGlyLCAoZXJyLCBmaWxlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxvd2VkRmlsZXMgPSB3aGl0ZUxpc3RFeHRlbnNpb25zKGZpbGVzLCBFWFRFTlNJT05TKVxuICAgICAgcmVzb2x2ZSh0cmltRXh0ZW5zaW9ucyhhbGxvd2VkRmlsZXMpKVxuICAgIH0pXG4gIH0pXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguam9pbihzdG9yZURpciwgZmlsZSlcbiAgICBmcy5yZWFkRmlsZShmaWxlbmFtZSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0sIChlcnIsIGNvbnRlbnRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoY29udGVudHMpXG4gICAgfSlcbiAgfSlcbn1cblxuXG4vLyBBUElcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRTdG9yZShyZXEsIHJlcywgbmV4dCkge1xuICByZWFkRmlsZXMoKVxuICAgIC50aGVuKChmaWxlcykgPT4gcmVzLnNlbmQoZmlsZXMpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBuZXh0KGVycikpXG59XG5cblxuLypcbiAqIFJlcXVpcmVzIGZpbGUgcGFyYW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDU1YocmVxLCByZXMsIG5leHQpIHtcbiAgY29uc3QgZmlsZW5hbWUgPSByZXEucGFyYW1zLmZpbGUgKyAnLmNzdidcbiAgcmVhZEZpbGUoZmlsZW5hbWUpXG4gICAgLnRoZW4oKGZpbGUpID0+IHJlcy5zZW5kKGZpbGUpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBuZXh0KGVycikpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jc3Ytc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"fs\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiPzJlMDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"bluebird\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibHVlYmlyZFwiP2ZiM2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJibHVlYmlyZFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = require(\"transducers.js\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cmFuc2R1Y2Vycy5qc1wiPzA0MDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRyYW5zZHVjZXJzLmpzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ0cmFuc2R1Y2Vycy5qc1wiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _interopRequire = function (obj) { return obj && obj.__esModule ? obj[\"default\"] : obj; };\n\n// API\n\n/*\n * Require file param\n */\nexports.mapTransform = mapTransform;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Papa = _interopRequire(__webpack_require__(8));\n\nvar readFile = __webpack_require__(2).readFile;\n\nvar _transducersJs = __webpack_require__(6);\n\nvar map = _transducersJs.map;\nvar filter = _transducersJs.filter;\n\nvar _ = _interopRequire(__webpack_require__(9));\n\n// Read CSV File and transform coordinates\n\nvar mapColumns = [\"lat\", \"lng\"];\nvar parseConfig = {\n  header: true,\n  skipEmptyLines: true\n};\n\nfunction CSVtoJSON(csvstring) {\n  var csv = Papa.parse(csvstring, parseConfig);\n\n  if (csv.errors.length > 0) {\n    console.error(csv.errors);\n    throw new Error(\"Errors while parsing\");\n  }\n\n  return csv.data;\n}\n\nfunction getColumns(csv, columns) {\n  return map(csv, function (row) {\n    return filter(row, function (column) {\n      var header = column[0];\n\n      return columns.indexOf(header) !== -1;\n    });\n  });\n}\n\nfunction filterEmptyRows(csv) {\n  return filter(csv, function (row) {\n    return _.any(row, function (value) {\n      return value.length > 0;\n    });\n  });\n}\n\nfunction parseFloatRows(csv) {\n  return map(csv, function (row) {\n    return _.mapValues(row, parseFloat);\n  });\n}\nfunction mapTransform(req, res, next) {\n  var filename = req.params.file + \".csv\";\n  readFile(filename).then(CSVtoJSON).then(function (csv) {\n    return getColumns(csv, mapColumns);\n  }).then(filterEmptyRows).then(parseFloatRows).then(function (data) {\n    return res.send(data);\n  })[\"catch\"](function (err) {\n    return next(err);\n  });\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFwLXRyYW5zZm9ybS5qcz9mM2FmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztRQXlEZ0IsWUFBWSxHQUFaLFlBQVk7Ozs7O0lBekRyQixJQUFJLHVDQUFNLENBQVc7O0lBQ25CLFFBQVEsdUJBQVEsQ0FBYSxFQUE3QixRQUFROzt5Q0FDVyxDQUFnQjs7SUFBbkMsR0FBRyxrQkFBSCxHQUFHO0lBQUUsTUFBTSxrQkFBTixNQUFNOztJQUNiLENBQUMsdUNBQU0sQ0FBUTs7OztBQUt0QixJQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUc7QUFDbEIsUUFBTSxFQUFFLElBQUk7QUFDWixnQkFBYyxFQUFFLElBQUk7Q0FDckI7O0FBR0QsU0FBUyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzs7QUFFOUMsTUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDekIsV0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ3pCLFVBQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUM7R0FDeEM7O0FBRUQsU0FBTyxHQUFHLENBQUMsSUFBSTtDQUNoQjs7QUFHRCxTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQ2hDLFNBQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBSztBQUN2QixXQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQyxNQUFNLEVBQUs7QUFDN0IsVUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QyxDQUFDO0dBQ0gsQ0FBQztDQUNIOztBQUdELFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRTtBQUM1QixTQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUs7QUFDMUIsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUs7YUFBSyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7S0FBQSxDQUFDO0dBQy9DLENBQUM7Q0FDSDs7QUFHRCxTQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDM0IsU0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFLO0FBQ3ZCLFdBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDO0dBQ3BDLENBQUM7Q0FDSDtBQVFNLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzNDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU07QUFDekMsVUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDZixJQUFJLENBQUMsVUFBQyxHQUFHO1dBQUssVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7R0FBQSxDQUFDLENBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUNwQixJQUFJLENBQUMsVUFBQyxJQUFJO1dBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7R0FBQSxDQUFDLFNBQ3pCLENBQUMsVUFBQyxHQUFHO1dBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztHQUFBLENBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSdcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnLi9jc3Ytc3RvcmUnXG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gJ3RyYW5zZHVjZXJzLmpzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5cbi8vIFJlYWQgQ1NWIEZpbGUgYW5kIHRyYW5zZm9ybSBjb29yZGluYXRlc1xuXG5jb25zdCBtYXBDb2x1bW5zID0gWydsYXQnLCAnbG5nJ11cbmNvbnN0IHBhcnNlQ29uZmlnID0ge1xuICBoZWFkZXI6IHRydWUsXG4gIHNraXBFbXB0eUxpbmVzOiB0cnVlXG59XG5cblxuZnVuY3Rpb24gQ1NWdG9KU09OKGNzdnN0cmluZykge1xuICBjb25zdCBjc3YgPSBQYXBhLnBhcnNlKGNzdnN0cmluZywgcGFyc2VDb25maWcpXG5cbiAgaWYgKGNzdi5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUuZXJyb3IoY3N2LmVycm9ycylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9ycyB3aGlsZSBwYXJzaW5nJylcbiAgfVxuXG4gIHJldHVybiBjc3YuZGF0YVxufVxuXG5cbmZ1bmN0aW9uIGdldENvbHVtbnMoY3N2LCBjb2x1bW5zKSB7XG4gIHJldHVybiBtYXAoY3N2LCAocm93KSA9PiB7XG4gICAgcmV0dXJuIGZpbHRlcihyb3csIChjb2x1bW4pID0+IHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGNvbHVtblswXVxuXG4gICAgICByZXR1cm4gY29sdW1ucy5pbmRleE9mKGhlYWRlcikgIT09IC0xXG4gICAgfSlcbiAgfSlcbn1cblxuXG5mdW5jdGlvbiBmaWx0ZXJFbXB0eVJvd3MoY3N2KSB7XG4gIHJldHVybiBmaWx0ZXIoY3N2LCAocm93KSA9PiB7XG4gICAgcmV0dXJuIF8uYW55KHJvdywgKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggPiAwKVxuICB9KVxufVxuXG5cbmZ1bmN0aW9uIHBhcnNlRmxvYXRSb3dzKGNzdikge1xuICByZXR1cm4gbWFwKGNzdiwgKHJvdykgPT4ge1xuICAgIHJldHVybiBfLm1hcFZhbHVlcyhyb3csIHBhcnNlRmxvYXQpXG4gIH0pXG59XG5cblxuLy8gQVBJXG5cbi8qXG4gKiBSZXF1aXJlIGZpbGUgcGFyYW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRyYW5zZm9ybShyZXEsIHJlcywgbmV4dCkge1xuICBjb25zdCBmaWxlbmFtZSA9IHJlcS5wYXJhbXMuZmlsZSArICcuY3N2J1xuICByZWFkRmlsZShmaWxlbmFtZSlcbiAgICAudGhlbihDU1Z0b0pTT04pXG4gICAgLnRoZW4oKGNzdikgPT4gZ2V0Q29sdW1ucyhjc3YsIG1hcENvbHVtbnMpKVxuICAgIC50aGVuKGZpbHRlckVtcHR5Um93cylcbiAgICAudGhlbihwYXJzZUZsb2F0Um93cylcbiAgICAudGhlbigoZGF0YSkgPT4gcmVzLnNlbmQoZGF0YSkpXG4gICAgLmNhdGNoKChlcnIpID0+IG5leHQoZXJyKSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21hcC10cmFuc2Zvcm0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("module.exports = require(\"papaparse\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXBhcGFyc2VcIj9kOWJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXBhcGFyc2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhcGFwYXJzZVwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports = require(\"lodash\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj8wYzhiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);