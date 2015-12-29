(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fiten-color-native"] = factory();
	else
		root["fiten-color-native"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default; /**
	                                    * Created by andycall on 15/12/24.
	                                    */

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	  贴吧无线 色彩规范 v6.7
	  Date: 2015/12/24
	*/

	exports.default = {
	    // 日常 - 内容色值
	    cp_cont_b: '#18191a',
	    cp_cont_f: '#494b4c',
	    cp_cont_c: '#7a7c80',
	    cp_cont_d: '#abaeb2',
	    cp_cont_e: '#c4c7cc',
	    cp_cont_g: '#ffffff',
	    cp_cont_h: '#f2460c',
	    cp_cont_m: '#dce6f5',
	    cp_cont_p: '#18191a',

	    // 夜间 - 内容色值
	    cp_cont_b_1: '#9bafcc',
	    cp_cont_f_1: '#8899b2',
	    cp_cont_c_1: '#748399',
	    cp_cont_d_1: '#616d80',
	    cp_cont_e_1: '#4e5766',
	    cp_cont_g_1: '#9bafcc',
	    cp_cont_h_1: '#d93e0b',
	    cp_cont_m_1: '#9bafcc',
	    cp_cont_p_1: '#18191a',

	    // 日常 - 载体色值
	    cp_bg_line_a: '#cacbcc',
	    cp_bg_line_b: '#e3e4e5',
	    cp_bg_line_c: '#edeef0',
	    cp_bg_line_e: '#f7f8fa',
	    cp_bg_line_i: '#fcfdff',
	    cp_bg_line_d: '#ffffff',
	    cp_bg_line_m: '#262b4c',
	    cp_bg_line_j: '#4c6180',

	    // 夜间 - 载体色值
	    cp_bg_line_a_1: '#0c1624',
	    cp_bg_line_b_1: '#0e1929',
	    cp_bg_line_c_1: '#121f33',
	    cp_bg_line_e_1: '#142238',
	    cp_bg_line_i_1: '#172842',
	    cp_bg_line_d_1: '#15253d',
	    cp_bg_line_m_1: '#192c47',
	    cp_bg_line_j_1: '#3d4e66',

	    // 日常 - 辅助色值
	    cp_link_tip_a: '#3385ff',
	    cp_link_tip_c: '#3668b2',
	    cp_link_tip_d: '#fa702a',
	    cp_other_a: '#673699',
	    cp_other_b: '#ff5460',
	    cp_other_c: '#26bf85',
	    cp_other_d: '#33aaff',
	    cp_other_e: '#ff821c',
	    cp_other_f: '#4c6180',

	    // 夜间 - 辅助色值
	    cp_link_tip_a_1: '#245db2',
	    cp_link_tip_c_1: '#1f3b66',
	    cp_link_tip_d_1: '#ad4d1d',
	    cp_other_a_1: '#341b4c',
	    cp_other_b_1: '#b23b43',
	    cp_other_c_1: '#177350',
	    cp_other_d_1: '#2477b2',
	    cp_other_e_1: '#b25d14',
	    cp_other_f_1: '#3d4e66',

	    // 日常 - 按钮字色值
	    cp_cont_i: '#ffffff',

	    // 夜间 - 按钮字色值
	    cp_cont_i_1: 'rgba(255, 255, 255, 0.7)'
	};

/***/ }
/******/ ])
});
;