/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	global.Gun = __webpack_require__(1);
	
	$(function () {
	    var Draw = new (__webpack_require__(2))("container");
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    reset: function reset(str) {
	        $(str).css('backgroundPositionY', 0);
	    },
	    starmove: function starmove(str, value, hei, i, fn) {
	        $(str).animate({
	            backgroundPositionY: hei * 30 - hei * value
	            //现在圈数为3
	        }, {
	            duration: 3000 + i * 2000,
	            easing: "linear",
	            complete: fn
	        });
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function _class(str) {
	        _classCallCheck(this, _class);
	
	        this.$dom = $('#' + str);
	        this.init();
	    }
	
	    _createClass(_class, [{
	        key: "init",
	        value: function init() {
	            this.numBox = this.$dom.find(".num-box");
	            this.num = $(this.numBox).find(".num");
	            this.btn = this.$dom.find(".btn");
	            this.height = parseInt($(this.num).css("height"));
	            this.count = 0;
	            this.isBegin = false;
	            this.run();
	        }
	    }, {
	        key: "run",
	        value: function run() {
	            var _this = this;
	
	            this.value = [];
	            var hei = this.height;
	            $(this.btn).on("click", function () {
	                if (_this.isBegin) return false;
	                _this.isBegin = true;
	                $.each(_this.num, function (i, n) {
	                    _this.value[i] = parseInt(Math.random() * 10);
	                    var value = _this.value[i];
	                    Gun.reset(n);
	                    Gun.starmove(n, value, hei, i, _this.jugde.bind(_this));
	                });
	            });
	        }
	    }, {
	        key: "jugde",
	        value: function jugde() {
	            this.count++;
	            if (this.count == 3) {
	                if (this.value[0] == this.value[1] && this.value[2] == this.value[1]) {
	                    alert("恭喜中奖");
	                } else {
	                    alert("很遗憾，没有中奖");
	                }
	                this.isBegin = false;
	                this.count = 0;
	            }
	        }
	    }]);
	
	    return _class;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map