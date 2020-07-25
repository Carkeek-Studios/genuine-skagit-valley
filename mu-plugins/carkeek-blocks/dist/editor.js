/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/accordion/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/accordion/edit.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CollapseSectionEdit = /*#__PURE__*/function (_Component) {
  _inherits(CollapseSectionEdit, _Component);

  var _super = _createSuper(CollapseSectionEdit);

  function CollapseSectionEdit() {
    var _this;

    _classCallCheck(this, CollapseSectionEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    return _this;
  }

  _createClass(CollapseSectionEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setAttributes({
        inheritedHeaderStyle: this.props.headerStyle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headerStyle = _this$props.headerStyle,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;
      var title = attributes.title;
      var showControls = isSelected || !title ? true : false;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
        tagName: headerStyle,
        value: title,
        className: 'wp-block-carkeek-blocks-expand-section__header',
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        },
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Section Heading...'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
        className: 'wp-block-carkeek-blocks-expand-section__inner-blocks',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }));
    }
  }]);

  return CollapseSectionEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, props) {
  var parentId = select('core/block-editor').getBlockHierarchyRootClientId(props.clientId);
  var parentAttributes = select('core/block-editor').getBlockAttributes(parentId);
  return {
    headerStyle: parentAttributes.headerStyle
  };
})(CollapseSectionEdit));

/***/ }),

/***/ "./src/blocks/accordion/icons.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion/icons.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/accordion/icons.js";
var icons = {};
icons.accordion = wp.element.createElement("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 19
  }
}, wp.element.createElement("path", {
  d: "M87 9H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V13a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V13a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14zM87 37H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V41a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V41a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14zM87 65H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V69a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V69a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}));
icons.dropdown = wp.element.createElement("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 18
  }
}, wp.element.createElement("path", {
  d: "M87 37H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V41a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V41a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/accordion/index.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/accordion/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/accordion/parent.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/accordion/icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/accordion/index.js";







var attributes = {
  title: {
    type: "string"
  },
  inheritedHeaderStyle: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])("carkeek-blocks/expand-collapse-section", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Expand Collapse Section", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Build an Accordion with inner blocks", "carkeek-blocks"),
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].dropdown
  },
  category: "widgets",
  attributes: attributes,
  parent: ["carkeek-blocks/expand-collapse"],
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("accordion", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("expand", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("collapse", "carkeek-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title;
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-expand-section__header inner-block-headline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, title), wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-expand-section__content",
      "aria-expanded": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/accordion/parent.js":
/*!****************************************!*\
  !*** ./src/blocks/accordion/parent.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/accordion/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/accordion/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/accordion/parent.js";






var attributes = {
  headerStyle: {
    type: 'string',
    default: 'h3'
  },
  accordionStyle: {
    type: 'boolean',
    default: false
  },
  rangeSliderStyle: {
    type: 'boolean',
    default: false
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/expand-collapse", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Expand/Colllapse", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Make an accordion of inner blocks", "carkeek-blocks"),
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  },
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  attributes: attributes,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("accordion", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("expand", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("collapse", "carkeek-blocks")],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var headerStyle = attributes.headerStyle,
        accordionStyle = attributes.accordionStyle,
        rangeSliderStyle = attributes.rangeSliderStyle;
    return wp.element.createElement("div", {
      className: "".concat(className),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
      className: "carkeek-accordion-style-label",
      label: "Use Accordion Style",
      checked: accordionStyle,
      onChange: function onChange(value) {
        return setAttributes({
          accordionStyle: value
        });
      },
      help: accordionStyle ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Only one section will be expanded at a time", "carkeek-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Multiple sections can be open at a time", "carkeek-blocks"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
      className: "carkeek-accordion-range-style-label",
      label: "Display as a Range Slider",
      checked: rangeSliderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          rangeSliderStyle: value
        });
      },
      help: accordionStyle ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Each section will display as a point on a range scale", "carkeek-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("", "carkeek-blocks"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
      label: "Section Header Style",
      selected: headerStyle,
      options: [{
        label: 'h2',
        value: 'h2'
      }, {
        label: 'h3',
        value: 'h3'
      }, {
        label: 'h4',
        value: 'h4'
      }, {
        label: 'h5',
        value: 'h5'
      }, {
        label: 'h6',
        value: 'h6'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          headerStyle: value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      allowedBlocks: ["carkeek-blocks/expand-collapse-section"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var accordionStyle = attributes.accordionStyle,
        headerStyle = attributes.headerStyle,
        rangeSliderStyle = attributes.rangeSliderStyle;
    var rangeStyle = rangeSliderStyle ? ' is-range-style' : '';
    var blockStyle = 'innerblock-headline-style-' + headerStyle + rangeStyle;
    return wp.element.createElement("div", {
      "data-accordion": accordionStyle,
      className: blockStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, rangeSliderStyle && wp.element.createElement("div", {
      className: 'range-slider-element',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/accordion/style.editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/accordion/style.editor.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/custom-archive/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/custom-archive/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/custom-archive/edit.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CustomArchiveEdit = /*#__PURE__*/function (_Component) {
  _inherits(CustomArchiveEdit, _Component);

  var _super = _createSuper(CustomArchiveEdit);

  function CustomArchiveEdit() {
    var _this;

    _classCallCheck(this, CustomArchiveEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeNumberOfPosts", function (numberOfPosts) {
      _this.props.setAttributes({
        numberOfPosts: numberOfPosts
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePostType", function (postTypeSelected) {
      _this.props.setAttributes({
        postTypeSelected: postTypeSelected
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTaxonomy", function (taxonomySelected) {
      _this.props.setAttributes({
        taxonomySelected: taxonomySelected
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectTerms", function (terms) {
      _this.props.setAttributes({
        taxTermsSelected: terms.join(",")
      });
    });

    return _this;
  }

  _createClass(CustomArchiveEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          posts = _this$props.posts,
          taxonomies = _this$props.taxonomies,
          taxTerms = _this$props.taxTerms,
          postTypes = _this$props.postTypes,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected;
      var numberOfPosts = attributes.numberOfPosts,
          displayPostExcerpt = attributes.displayPostExcerpt,
          excerptLength = attributes.excerptLength,
          postLayout = attributes.postLayout,
          postsToShow = attributes.postsToShow,
          postTypeSelected = attributes.postTypeSelected,
          filterByTaxonomy = attributes.filterByTaxonomy,
          taxonomySelected = attributes.taxonomySelected,
          taxTermsSelected = attributes.taxTermsSelected,
          hideIfEmpty = attributes.hideIfEmpty,
          emptyMessage = attributes.emptyMessage,
          headline = attributes.headline,
          headlineLevel = attributes.headlineLevel;
      var headlineStyle = 'h' + headlineLevel;
      var icons = {
        pin: wp.element.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "black",
          width: "18px",
          height: "18px",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }
        }, wp.element.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }
        }), wp.element.createElement("path", {
          d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }
        }))
      };
      var postTypeSelect = wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Post Type", "carkeek-blocks"),
        onChange: this.onChangePostType,
        options: postTypes && postTypes.map(function (type) {
          return {
            value: type.slug,
            label: type.name
          };
        }),
        value: postTypeSelected,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      });
      var taxonomySelect = wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Filter by Taxonomy"),
        checked: filterByTaxonomy,
        onChange: function onChange(value) {
          return setAttributes({
            filterByTaxonomy: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }), filterByTaxonomy && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Select Taxonomy", "carkeek-blocks"),
        onChange: this.onChangeTaxonomy,
        options: taxonomies && taxonomies.map(function (type) {
          return {
            value: type.slug,
            label: type.name
          };
        }),
        value: taxonomySelected,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }
      }), taxonomySelected && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
        multiple: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Select Terms", "carkeek-blocks"),
        onChange: this.onSelectTerms,
        options: taxTerms && taxTerms.map(function (type) {
          return {
            value: type.id,
            label: type.name
          };
        }),
        value: taxTermsSelected && taxTermsSelected.split(','),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      })));
      var inspectorControls = wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Posts Settings", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, postTypeSelect, postTypeSelected && wp.element.createElement(wp.element.Fragment, null, " ", taxonomySelect, " "), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Number of Posts", "carkeek-blocks"),
        value: numberOfPosts,
        onChange: this.onChangeNumberOfPosts,
        min: 1,
        max: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Layout", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Layout Style"),
        selected: postLayout,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Grid"),
          value: "grid"
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("List"),
          value: "list"
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Link Tile"),
          value: "link-tile"
        }],
        onChange: function onChange(value) {
          return setAttributes({
            postLayout: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Heading Size", "carkeek-blocks"),
        value: headlineLevel,
        onChange: function onChange(value) {
          return setAttributes({
            headlineLevel: value
          });
        },
        min: 2,
        max: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Include Exerpt"),
        checked: displayPostExcerpt,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostExcerpt: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      }), displayPostExcerpt && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Max number of words in excerpt"),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: 10,
        max: 75,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 29
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Hide Block if Empty"),
        checked: hideIfEmpty,
        onChange: function onChange(value) {
          return setAttributes({
            hideIfEmpty: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }
      }), !hideIfEmpty && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Text to Display if Empty"),
        value: emptyMessage,
        onChange: function onChange(value) {
          return setAttributes({
            emptyMessage: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      })));
      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        var message = hideIfEmpty ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("No Posts Found: Block will not display") : emptyMessage;
        var noPostMessage = typeof postTypeSelected !== "undefined" ? message : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Select a Post Type from the Block Settings");
        var showHeadline = isSelected || headline && !hideIfEmpty ? true : false;
        return wp.element.createElement(wp.element.Fragment, null, inspectorControls, showHeadline && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"], {
          tagName: headlineStyle,
          value: headline,
          onChange: function onChange(headline) {
            return setAttributes({
              headline: headline
            });
          },
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading...'),
          formattingControls: [],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 21
          }
        }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Placeholder"], {
          icon: icons.pin,
          label: headline ? headline : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Latest Posts"),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 21
          }
        }, !Array.isArray(posts) ? wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 50
          }
        }) : noPostMessage));
      } //removing posts should be instant


      var displayPosts = posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;
      return wp.element.createElement(wp.element.Fragment, null, inspectorControls, wp.element.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
          "wp-block-carkeek-blocks-custom-archive": true,
          "is-grid": postLayout === "grid",
          "is-list": postLayout === "list",
          "is-link-tile": postLayout === "link-tile"
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 17
        }
      }, (isSelected || headline) && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"], {
        tagName: headlineStyle,
        value: headline,
        onChange: function onChange(headline) {
          return setAttributes({
            headline: headline
          });
        },
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading...'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }
      }), wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-custom-archive__list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }
      }, displayPosts.map(function (post) {
        var titleTrimmed = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(post, ["title", "rendered", "trim"]);
        var excerpt = post.excerpt.rendered;
        var excerptElement = document.createElement("div");
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || "";
        var imageSourceUrl = post.featuredImageSourceUrl;
        var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
          "wp-block-carkeek-blocks-custom-archive__featured-image": true
        });
        var postExcerpt = wp.element.createElement(wp.element.Fragment, null, excerpt.trim().split(" ", excerptLength).join(" "));
        return wp.element.createElement("div", {
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 33
          }
        }, wp.element.createElement("div", {
          className: imageClasses,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 41
          }
        }, imageSourceUrl && wp.element.createElement("img", {
          src: imageSourceUrl,
          alt: "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 49
          }
        })), wp.element.createElement("div", {
          className: "wp-block-carkeek-blocks-custom-archive__content",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 41
          }
        }, wp.element.createElement("div", {
          className: "wp-block-carkeek-blocks-custom-archive__title",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 41
          }
        }, titleTrimmed ? wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["RawHTML"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 49
          }
        }, titleTrimmed) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("(no title)")), displayPostExcerpt && wp.element.createElement("div", {
          className: "wp-block-carkeek-blocks-custom-archive__post-excerpt",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 41
          }
        }, postExcerpt)));
      })), wp.element.createElement("p", {
        style: {
          textAlign: 'center',
          fontSize: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 21
        }
      }, "(Showing Recent ", postTypeSelected, ": Posts rendered here may differ than the actual query.)")));
    }
  }]);

  return CustomArchiveEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var numberOfPosts = attributes.numberOfPosts,
      postTypeSelected = attributes.postTypeSelected,
      taxonomySelected = attributes.taxonomySelected,
      taxTermsSelected = attributes.taxTermsSelected,
      filterByTaxonomy = attributes.filterByTaxonomy;

  var _select = select("core"),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia,
      getPostTypes = _select.getPostTypes,
      getTaxonomies = _select.getTaxonomies;

  var taxTerms = getEntityRecords('taxonomy', taxonomySelected, {
    per_page: -1
  });
  var query = {
    per_page: numberOfPosts
  };

  if (filterByTaxonomy && taxonomySelected && taxTermsSelected) {
    query[taxonomySelected] = taxTermsSelected;
  }

  var latestPosts = getEntityRecords("postType", postTypeSelected, query);
  var taxonomies = getTaxonomies();
  return {
    postTypes: getPostTypes(),
    taxonomies: !Array.isArray(taxonomies) ? taxonomies : taxonomies.filter(function (tax) {
      return tax.types.includes(postTypeSelected);
    }),
    taxTerms: taxTerms,
    posts: !Array.isArray(latestPosts) ? latestPosts : latestPosts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(image, ["media_details", "sizes", "large", "sourc_url"], null);

        if (!url) {
          url = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(image, "source_url", null);
        }

        return _objectSpread(_objectSpread({}, post), {}, {
          featuredImageSourceUrl: url
        });
      }

      return post;
    })
  };
})(CustomArchiveEdit));

/***/ }),

/***/ "./src/blocks/custom-archive/index.js":
/*!********************************************!*\
  !*** ./src/blocks/custom-archive/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/custom-archive/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/custom-archive/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var attributes = {
  numberOfPosts: {
    type: "number",
    default: 3
  },
  postTypeSelected: {
    type: "string"
  },
  displayPostExcerpt: {
    type: "boolean",
    default: true
  },
  postLayout: {
    type: "string",
    default: "grid"
  },
  excerptLength: {
    type: "number",
    default: 25
  },
  filterByTaxonomy: {
    type: "boolean",
    default: false
  },
  taxonomySelected: {
    type: "string"
  },
  taxTermsSelected: {
    type: "string"
  },
  hideIfEmpty: {
    type: "boolean",
    default: true
  },
  emptyMessage: {
    type: "string"
  },
  headline: {
    type: "string"
  },
  headlineLevel: {
    type: "number",
    default: '2'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/custom-archive", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom Post Type Archive", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Block showing the latest items by post type.", "carkeek-blocks"),
  icon: "book-alt",
  category: "widgets",
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  attributes: attributes,
  supports: {
    align: ["wide", "full"]
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/custom-archive/styles.editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/custom-archive/styles.editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/form-assembly/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/form-assembly/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/blocks/form-assembly/icons.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/form-assembly/edit.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





 //import { Icon } from "@wordpress/icons"; cannot get Icon to work, something to do with the Build, but not sure what

var FormAssemblyEdit = /*#__PURE__*/function (_Component) {
  _inherits(FormAssemblyEdit, _Component);

  var _super = _createSuper(FormAssemblyEdit);

  function FormAssemblyEdit() {
    _classCallCheck(this, FormAssemblyEdit);

    return _super.apply(this, arguments);
  }

  _createClass(FormAssemblyEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var formId = attributes.formId; //const inputId = `blocks-shortcode-input-${ instanceId }`;

      return wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-form-assembly components-placeholder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
        className: "components-placeholder__label",
        icon: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].form,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Form Assembly Form'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, wp.element.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, "Form Id"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
        className: "blocks-shortcode__textarea",
        value: formId,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Enter Form Id...'),
        onChange: function onChange(formId) {
          return setAttributes({
            formId: formId
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      })));
    }
  }]);

  return FormAssemblyEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormAssemblyEdit);

/***/ }),

/***/ "./src/blocks/form-assembly/icons.js":
/*!*******************************************!*\
  !*** ./src/blocks/form-assembly/icons.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/form-assembly/icons.js";
var icons = {};
icons.form = wp.element.createElement("svg", {
  width: "80px",
  height: "80px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 14
  }
}, wp.element.createElement("path", {
  d: "M61 3.998H3c-1.654 0-3 1.346-3 3v52.004a1 1 0 001 1h62a1 1 0 001-1V6.998c0-1.654-1.346-3-3-3zm-59 6h60v48.004H2V9.998zm1-4h1.02c-.552 0-.994.447-.994 1s.452 1 1.005 1a1 1 0 100-2h2.988c-.552 0-.994.447-.994 1s.452 1 1.005 1a1 1 0 100-2h2.992c-.552 0-.994.447-.994 1s.452 1 1.005 1a1 1 0 100-2H61a1 1 0 011 1v1H2v-1a1 1 0 011-1z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), wp.element.createElement("path", {
  d: "M8 37.008c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM59 28.009H5a1 1 0 00-1 1v4.999a1 1 0 001 1h54a1 1 0 001-1v-4.999a1 1 0 00-1-1zm-3.707 2.29l-.293.293-.293-.293a.995.995 0 00-.691-.29h1.969a.991.991 0 00-.692.29zM58 33.008H6v-2.999h47.984a.999.999 0 00-.691 1.704l1 1a.997.997 0 001.414 0l1-1a.999.999 0 00-.691-1.704H58v2.999z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}), wp.element.createElement("path", {
  d: "M8.03 40.007h-.01c-.552 0-.994.447-.994 1s.452 1 1.005 1a1 1 0 10-.001-2zM59 11.999H5a1 1 0 00-1 1v4.999a1 1 0 001 1h54a1 1 0 001-1v-4.999a1 1 0 00-1-1zm-1 4.999H6v-2.999h52v2.999zM59 20H5a1 1 0 00-1 1v4.999a1 1 0 001 1h54a1 1 0 001-1V21a1 1 0 00-1-1zm-1 4.999H6V22h52v2.999zM15 40.007h13.992a1 1 0 100-2H15a1 1 0 100 2zM22.985 42.007a1 1 0 00-1-1H15a1 1 0 100 2h6.985a1 1 0 001-1zM42.004 41.008c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.898-2-2zM58.996 38.007H45.004a1 1 0 100 2h13.992a1 1 0 100-2zM51.989 41.007h-6.985a1 1 0 100 2h6.985a1 1 0 100-2zM43.002 48.001H21l-.003.001A4.003 4.003 0 0017.004 52a4.003 4.003 0 003.993 3.999L21 56h22.002a4.004 4.004 0 003.995-3.999 4.004 4.004 0 00-3.995-4zM42.998 54H21.003a2 2 0 010-3.999h21.995a2 2 0 010 3.999z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), wp.element.createElement("path", {
  d: "M39 51H25a1 1 0 100 2h14a1 1 0 100-2z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/form-assembly/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/form-assembly/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/form-assembly/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/form-assembly/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var attributes = {
  formId: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/form-assembly", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Form Assembly Block", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Display a Form Assembly Form", "carkeek-blocks"),
  icon: "feedback",
  category: "widgets",
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  attributes: attributes,
  supports: {
    align: ["wide", "full"]
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/form-assembly/styles.editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/form-assembly/styles.editor.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/link-gallery/index.js":
/*!******************************************!*\
  !*** ./src/blocks/link-gallery/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/link-gallery/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/link-gallery/index.js";





var attributes = {
  columns: {
    type: "number",
    default: 3
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("carkeek-blocks/link-gallery", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Link Gallery", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Block showing a collection of linked images", "carkeek-blocks"),
  icon: "grid-view",
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("tiles", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("columns", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("links", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("logos", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("gallery", "carkeek-blocks")],
  attributes: attributes,
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var columns = attributes.columns;

    var updateColumns = function updateColumns(value) {
      setAttributes({
        columns: value
      });
    };

    return wp.element.createElement("div", {
      className: "".concat(className, " has-").concat(columns, "-columns"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Columns", "carkeek-blocks"),
      value: columns,
      onChange: updateColumns,
      min: 1,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      allowedBlocks: ["core/image"],
      orientation: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns;
    return wp.element.createElement("div", {
      className: "has-".concat(columns, "-columns"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/link-gallery/style.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/link-gallery/style.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/link-tile/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/link-tile/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/link-tile/edit.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var LinkTileEdit = /*#__PURE__*/function (_Component) {
  _inherits(LinkTileEdit, _Component);

  var _super = _createSuper(LinkTileEdit);

  function LinkTileEdit() {
    var _this;

    _classCallCheck(this, LinkTileEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedLink: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeLinkTitle", function (linkTitle) {
      _this.props.setAttributes({
        linkTitle: linkTitle
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeLink", function (linkUrl) {
      _this.props.setAttributes({
        linkUrl: linkUrl
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (_ref) {
      var id = _ref.id,
          url = _ref.url;

      _this.props.setAttributes({
        imgId: id,
        imgUrl: url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadError", function (message) {
      var noticeOperations = _this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
    });

    _defineProperty(_assertThisInitialized(_this), "removeImage", function () {
      _this.props.setAttributes({
        imgId: null,
        imgUrl: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageSizeChange", function (imgUrl) {
      _this.props.setAttributes({
        imgUrl: imgUrl
      });
    });

    return _this;
  }

  _createClass(LinkTileEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var imgUrl = attributes.imgUrl,
          imgId = attributes.imgId;

      if (imgUrl && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imgUrl) && !imgId) {
        setAttributes({
          imgUrl: "",
          alt: ""
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isSelected && !this.props.isSelected) {
        this.setState({
          selectedLink: null
        });
      }
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      var _this$props2 = this.props,
          image = _this$props2.image,
          imageSizes = _this$props2.imageSizes;
      if (!image) return [];
      var options = [];
      var sizes = image.media_details.sizes;

      var _loop = function _loop(key) {
        var size = sizes[key];
        var imageSize = imageSizes.find(function (size) {
          return size.slug === key;
        });

        if (imageSize) {
          options.push({
            label: imageSize.name,
            value: size.source_url
          });
        }
      };

      for (var key in sizes) {
        _loop(key);
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log(this.props);
      var _this$props3 = this.props,
          className = _this$props3.className,
          attributes = _this$props3.attributes,
          noticeUI = _this$props3.noticeUI,
          isSelected = _this$props3.isSelected,
          backgroundColor = _this$props3.backgroundColor,
          setAttributes = _this$props3.setAttributes,
          setBackgroundColor = _this$props3.setBackgroundColor;
      var title = attributes.title,
          imgUrl = attributes.imgUrl,
          linkUrl = attributes.linkUrl,
          linkTitle = attributes.linkTitle,
          imgId = attributes.imgId,
          focalPoint = attributes.focalPoint;
      var imageStyle = {
        backgroundImage: "url( ".concat(imgUrl, " )")
      };

      if (focalPoint) {
        imageStyle.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
      }

      var bgColorClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        "has-background-color": backgroundColor.color,
        "wp-block-carkeek-blocks-link-tile__bg": true
      });
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Image Settings", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }
      }, imgId && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Image Size", "carkeek-blocks"),
        options: this.getImageSizes(),
        onChange: this.onImageSizeChange,
        value: imgUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }
      }), imgId && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FocalPointPicker"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Focal Point", "carkeek-blocks"),
        url: imgUrl,
        onChange: function onChange(newFocalPoint) {
          return setAttributes({
            focalPoint: newFocalPoint
          });
        },
        value: focalPoint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Color Settings", "carkeek-blocks"),
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Background Color", "carkeek-blocks"),
          clearable: false
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }
      })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }, imgUrl && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }
      }, imgId && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 33
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
        onSelect: this.onSelectImage,
        allowedTypes: ["image"],
        value: imgId,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Edit Image", "carkeek-blocks"),
            onClick: open,
            icon: "edit",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 49
            }
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 37
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Remove Image", "carkeek-blocks"),
        onClick: this.removeImage,
        icon: "trash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 29
        }
      }))), wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }
      }, imgUrl ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-link-tile__img",
        style: imageStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 29
        }
      }, Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imgUrl) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 55
        }
      }), isSelected ? wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
        className: "wp-block-carkeek-blocks-link-tile__title",
        onChange: this.onChangeTitle,
        value: title,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Title", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 37
        }
      }) : wp.element.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 37
        }
      }, title)), isSelected && wp.element.createElement("div", {
        className: bgColorClass,
        style: {
          backgroundColor: backgroundColor.color
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
        className: "wp-block-carkeek-blocks-link-tile__title_hover",
        onChange: this.onChangeLinkTitle,
        value: linkTitle,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Hover State Title", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 37
        }
      }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInput"], {
        value: linkUrl,
        onChange: this.onChangeLink,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Links To", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 37
        }
      }))) : wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
        icon: "format-image",
        onSelect: this.onSelectImage,
        onError: this.onUploadError //accept="image/*"
        ,
        allowedTypes: ["image"],
        notices: noticeUI,
        labels: {
          title: "Tile Image",
          instructions: "Upload an image file or pick one from your media library."
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 25
        }
      })));
    }
  }]);

  return LinkTileEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, props) {
  var imgId = props.attributes.imgId;
  return {
    image: imgId ? select("core").getMedia(imgId) : null,
    imageSizes: select("core/editor").getEditorSettings().imageSizes
  };
}), Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["withColors"])({
  backgroundColor: "background-color"
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withNotices"]])(LinkTileEdit));

/***/ }),

/***/ "./src/blocks/link-tile/index.js":
/*!***************************************!*\
  !*** ./src/blocks/link-tile/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/link-tile/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/link-tile/parent.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/link-tile/edit.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/link-tile/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var attributes = {
  title: {
    type: "string"
  },
  imgId: {
    type: "number"
  },
  imgUrl: {
    type: "string"
  },
  linkTitle: {
    type: "string"
  },
  linkUrl: {
    type: "string",
    source: "attribute",
    selector: "a",
    attribute: "href"
  },
  backgroundColor: {
    type: "string",
    default: "theme-green"
  },
  textColor: {
    type: "string"
  },
  focalPoint: {
    type: "object"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/link-tile", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Link Tile", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(" Block that displays a link with an image background and hover state. ", "carkeek-blocks"),
  icon: "admin-links",
  parent: ["carkeek-blocks/link-tiles"],
  supports: {
    reusable: false,
    html: false
  },
  category: "widgets",
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("link", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("tile", "carkeek-blocks")],
  attributes: attributes,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes,
        className = _ref.className;
    var title = attributes.title,
        imgUrl = attributes.imgUrl,
        linkTitle = attributes.linkTitle,
        linkUrl = attributes.linkUrl,
        backgroundColor = attributes.backgroundColor,
        focalPoint = attributes.focalPoint;
    var imageStyle = {
      backgroundImage: "url( ".concat(imgUrl, " )")
    };

    if (focalPoint) {
      imageStyle.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["getColorClassName"])("background-color", backgroundColor);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, (_classnames = {}, _defineProperty(_classnames, backgroundClass, backgroundClass), _defineProperty(_classnames, "wp-block-column", true), _classnames));
    return wp.element.createElement("div", {
      className: classes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, imgUrl && wp.element.createElement("a", {
      className: "wp-block-carkeek-blocks-link-tile__link wp-block-carkeek-blocks-link-tile__inner",
      href: linkUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, wp.element.createElement("div", {
      style: imageStyle,
      className: "wp-block-carkeek-blocks-link-tile__img wp-block-carkeek-blocks-link-tile__inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, wp.element.createElement("span", {
      className: "link-tile__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, title)), wp.element.createElement("span", {
      className: "link-tile__hover_title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, linkTitle ? linkTitle : title)));
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/link-tile/parent.js":
/*!****************************************!*\
  !*** ./src/blocks/link-tile/parent.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/link-tile/parent.js";



var attributes = {
  align: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("carkeek-blocks/link-tiles", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Link Tiles", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Block showing a collection of linked tiles", "carkeek-blocks"),
  icon: "grid-view",
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("tiles", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("columns", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("links", "carkeek-blocks")],
  attributes: attributes,
  edit: function edit(_ref) {
    var className = _ref.className;
    return wp.element.createElement("div", {
      className: "".concat(className, " wp-block-columns"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: ["carkeek-blocks/link-tile"],
      template: [["carkeek-blocks/link-tile"], ["carkeek-blocks/link-tile"]],
      orientation: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }));
  },
  save: function save() {
    return wp.element.createElement("div", {
      className: "wp-block-columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/link-tile/style.editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/link-tile/style.editor.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/rollover-images/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/rollover-images/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/rollover-images/edit.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ImageRollover = /*#__PURE__*/function (_Component) {
  _inherits(ImageRollover, _Component);

  var _super = _createSuper(ImageRollover);

  function ImageRollover() {
    _classCallCheck(this, ImageRollover);

    return _super.apply(this, arguments);
  }

  _createClass(ImageRollover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          innerBlocksHeadlineLevel = _this$props.innerBlocksHeadlineLevel;
      var rolloverText = attributes.rolloverText,
          rolloverHeadline = attributes.rolloverHeadline;
      var headerTag = 'h' + innerBlocksHeadlineLevel;
      return wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-rollover-image--images",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
        templateLock: true,
        template: [["core/image", {
          className: 'image-01'
        }], ["core/image", {
          className: 'image-02'
        }]],
        orientation: "horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      })), wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-rollover-image--text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
        tagName: headerTag,
        value: rolloverHeadline,
        onChange: function onChange(rolloverHeadline) {
          return setAttributes({
            rolloverHeadline: rolloverHeadline
          });
        },
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rollover Heading...'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
        tagName: 'p',
        value: rolloverText,
        onChange: function onChange(rolloverText) {
          return setAttributes({
            rolloverText: rolloverText
          });
        },
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rollover Content...'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      })));
    }
  }]);

  return ImageRollover;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, props) {
  var parentId = select('core/block-editor').getBlockHierarchyRootClientId(props.clientId);
  var parentAttributes = select('core/block-editor').getBlockAttributes(parentId);
  return {
    innerBlocksHeadlineLevel: parentAttributes.innerBlocksHeadlineLevel
  };
})(ImageRollover));

/***/ }),

/***/ "./src/blocks/rollover-images/icons.js":
/*!*********************************************!*\
  !*** ./src/blocks/rollover-images/icons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/rollover-images/icons.js";
var icons = {};
icons.swap = wp.element.createElement("svg", {
  width: "40px",
  height: "40px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 14
  }
}, wp.element.createElement("path", {
  d: "M5.9 8H42.5V44.6H5.9z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), wp.element.createElement("path", {
  d: "M32.6 61.9h7L28.5 51 17.4 62h7c1 12.6 11.7 22.6 24.6 22.6v-8.1c-8.4-.1-15.4-6.4-16.4-14.6zM66.7 38.4h-6.9l11.1 11.1L82 38.4h-7c-1-12.6-11.7-22.6-24.7-22.6V24c8.4 0 15.4 6.3 16.4 14.4z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}), wp.element.createElement("circle", {
  cx: "73",
  cy: "75.1",
  r: "18.3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/rollover-images/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/rollover-images/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/rollover-images/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/rollover-images/parent.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/rollover-images/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/rollover-images/edit.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/rollover-images/index.js";








var attributes = {
  rolloverText: {
    type: "string"
  },
  rolloverHeadline: {
    type: "string"
  },
  inheritedHeaderStyle: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("carkeek-blocks/rollover-image", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Rollover Image", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])(" Block that displays a link with an image background and hover state. ", "carkeek-blocks"),
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].swap
  },
  parent: ["carkeek-blocks/rollover-images"],
  supports: {
    reusable: false,
    html: false
  },
  category: "widgets",
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("image", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("rollover", "carkeek-blocks")],
  attributes: attributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var rolloverText = attributes.rolloverText,
        rolloverHeadline = attributes.rolloverHeadline;
    return wp.element.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }), wp.element.createElement("div", {
      className: "image-rollover__hover_text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"].Content, {
      tagName: 'div',
      className: 'inner-block-headline',
      value: rolloverHeadline,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"].Content, {
      tagName: 'p',
      className: 'inner-block-content',
      value: rolloverText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    })));
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/rollover-images/parent.js":
/*!**********************************************!*\
  !*** ./src/blocks/rollover-images/parent.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/blocks/rollover-images/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/rollover-images/parent.js";





var attributes = {
  columns: {
    type: "number",
    default: 4
  },
  headline: {
    type: "string"
  },
  staticContent: {
    type: "string"
  },
  headlineLevel: {
    type: "number",
    default: '2'
  },
  innerBlocksHeadlineLevel: {
    type: "number",
    default: '3'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("carkeek-blocks/rollover-images", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Rollover Images", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Display a collection of rollover images with related text", "carkeek-blocks"),
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_0__["default"].swap
  },
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("images", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("rollover", "carkeek-blocks")],
  attributes: attributes,
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var columns = attributes.columns,
        headline = attributes.headline,
        headlineLevel = attributes.headlineLevel,
        innerBlocksHeadlineLevel = attributes.innerBlocksHeadlineLevel,
        staticContent = attributes.staticContent;
    var headlineStyle = 'h' + headlineLevel;

    var updateColumns = function updateColumns(value) {
      setAttributes({
        columns: value
      });
    };

    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Columns", "carkeek-blocks"),
      value: columns,
      onChange: updateColumns,
      min: 1,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Heading Size", "carkeek-blocks"),
      value: headlineLevel,
      onChange: function onChange(value) {
        return setAttributes({
          headlineLevel: value
        });
      },
      min: 2,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Inner BlocksHeading Size", "carkeek-blocks"),
      value: innerBlocksHeadlineLevel,
      onChange: function onChange(value) {
        return setAttributes({
          innerBlocksHeadlineLevel: value
        });
      },
      min: 2,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }))), wp.element.createElement("div", {
      className: "".concat(className, " has-").concat(columns, "-columns"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: headlineStyle,
      value: headline,
      onChange: function onChange(headline) {
        return setAttributes({
          headline: headline
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Heading...'),
      formattingControls: [],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: 'p',
      value: staticContent,
      onChange: function onChange(staticContent) {
        return setAttributes({
          staticContent: staticContent
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default content...'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      allowedBlocks: ["carkeek-blocks/rollover-image"],
      template: [["carkeek-blocks/rollover-image"]],
      orientation: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    })));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns,
        headlineLevel = attributes.headlineLevel,
        headline = attributes.headline,
        innerBlocksHeadlineLevel = attributes.innerBlocksHeadlineLevel,
        staticContent = attributes.staticContent;
    var headlineStyle = 'h' + headlineLevel;
    return wp.element.createElement("div", {
      className: "has-".concat(columns, "-columns innerblock-headline-style-h").concat(innerBlocksHeadlineLevel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: headlineStyle,
      className: 'rollover-images__headline',
      value: headline,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }), wp.element.createElement("div", {
      className: 'rollover-images__inner',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    })), wp.element.createElement("div", {
      className: 'rollover-images__footer',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: 'span',
      className: 'rollover-images__default-content',
      value: staticContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }), wp.element.createElement("div", {
      className: 'rollover-images__hover-content',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/rollover-images/style.editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/rollover-images/style.editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/slider/index.js":
/*!************************************!*\
  !*** ./src/blocks/slider/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/slider/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/slider/index.js";





var attributes = {
  autoPlay: {
    type: 'boolean',
    default: true
  },
  autoPlaySpeed: {
    type: 'number',
    default: 3000
  },
  sliderType: {
    type: 'string',
    default: 'single'
  },
  slidesToShow: {
    type: 'number',
    default: 3
  },
  slidesToScroll: {
    type: 'number',
    default: 3
  },
  carousel: {
    type: 'boolean',
    default: false
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("carkeek-blocks/slider", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Block Slider", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Make a slideshow of inner blocks", "carkeek-blocks"),
  icon: wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M0 0h24v24H0V0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })),
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  attributes: attributes,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("slider", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("slide", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("gallery", "carkeek-blocks")],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var autoPlay = attributes.autoPlay,
        autoPlaySpeed = attributes.autoPlaySpeed,
        sliderType = attributes.sliderType,
        slidesToScroll = attributes.slidesToScroll,
        slidesToShow = attributes.slidesToShow,
        carousel = attributes.carousel;
    return wp.element.createElement("div", {
      className: "".concat(className),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Auto Play Slider",
      checked: autoPlay,
      onChange: function onChange(value) {
        return setAttributes({
          autoPlay: value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }), autoPlay && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Speed in ms", "carkeek-blocks"),
      value: autoPlaySpeed,
      onChange: function onChange(value) {
        return setAttributes({
          autoPlaySpeed: value
        });
      },
      min: 1000,
      max: 10000,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }), carousel && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
      label: "Slider type",
      selected: sliderType,
      options: [{
        label: 'Single Slides',
        value: 'single'
      }, {
        label: 'Carousel',
        value: 'carousel'
      }],
      onChange: function onChange(sliderType) {
        setAttributes({
          sliderType: sliderType
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }), sliderType == 'carousel' && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Slides to Show", "carkeek-blocks"),
      value: slidesToShow,
      onChange: function onChange(slidesToShow) {
        setAttributes({
          slidesToShow: slidesToShow
        });
      },
      min: 2,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }), sliderType == 'carousel' && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Slides to Scroll", "carkeek-blocks"),
      value: slidesToScroll,
      onChange: function onChange(slidesToScroll) {
        setAttributes({
          slidesToScroll: slidesToScroll
        });
      },
      min: 1,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      allowedBlocks: ["core/group", "core/media-text", "core/cover"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var autoPlay = attributes.autoPlay,
        autoPlaySpeed = attributes.autoPlaySpeed,
        slidesToShow = attributes.slidesToShow,
        sliderType = attributes.sliderType,
        slidesToScroll = attributes.slidesToScroll;
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-slider__slide-wrapper",
      "data-autoplay": autoPlay,
      "data-speed": autoPlaySpeed,
      "data-type": sliderType,
      "data-slides": slidesToShow,
      "data-scroll": slidesToScroll,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/slider/style.editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/slider/style.editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/team-member/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/team-member/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/team-member/edit.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TeamMemberEdit = /*#__PURE__*/function (_Component) {
  _inherits(TeamMemberEdit, _Component);

  var _super = _createSuper(TeamMemberEdit);

  function TeamMemberEdit() {
    var _this;

    _classCallCheck(this, TeamMemberEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedLink: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeName", function (name) {
      _this.props.setAttributes({
        name: name
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeDetails", function (details) {
      _this.props.setAttributes({
        details: details
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeEmail", function (email) {
      _this.props.setAttributes({
        email: email
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeEmailLabel", function (emailLabel) {
      _this.props.setAttributes({
        emailLabel: emailLabel
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (_ref) {
      var id = _ref.id,
          url = _ref.url,
          alt = _ref.alt;

      _this.props.setAttributes({
        id: id,
        url: url,
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectURL", function (url) {
      _this.props.setAttributes({
        url: url,
        id: null,
        alt: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadError", function (message) {
      var noticeOperations = _this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
    });

    _defineProperty(_assertThisInitialized(_this), "removeImage", function () {
      _this.props.setAttributes({
        id: null,
        url: "",
        alt: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateAlt", function (alt) {
      _this.props.setAttributes({
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageSizeChange", function (url) {
      _this.props.setAttributes({
        url: url
      });
    });

    return _this;
  }

  _createClass(TeamMemberEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var url = attributes.url,
          id = attributes.id;

      if (url && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && !id) {
        setAttributes({
          url: "",
          alt: ""
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isSelected && !this.props.isSelected) {
        this.setState({
          selectedLink: null
        });
      }
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      var _this$props2 = this.props,
          image = _this$props2.image,
          imageSizes = _this$props2.imageSizes;
      if (!image) return [];
      var options = [];
      var sizes = image.media_details.sizes;

      var _loop = function _loop(key) {
        var size = sizes[key];
        var imageSize = imageSizes.find(function (size) {
          return size.slug === key;
        });

        if (imageSize) {
          options.push({
            label: imageSize.name,
            value: size.source_url
          });
        }
      };

      for (var key in sizes) {
        _loop(key);
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log(this.props);
      var _this$props3 = this.props,
          className = _this$props3.className,
          attributes = _this$props3.attributes,
          noticeUI = _this$props3.noticeUI,
          isSelected = _this$props3.isSelected,
          layout = _this$props3.layout;
      var title = attributes.title,
          name = attributes.name,
          url = attributes.url,
          alt = attributes.alt,
          id = attributes.id,
          details = attributes.details,
          email = attributes.email,
          emailLabel = attributes.emailLabel;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Image Settings", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, url && !Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Alt Text (Alternative Text)", "carkeek-blocks"),
        value: alt,
        onChange: this.updateAlt,
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Alternative text describes your image to people can't see it. Add a short description with its key details."),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 29
        }
      }), id && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Image Size", "carkeek-blocks"),
        options: this.getImageSizes(),
        onChange: this.onImageSizeChange,
        value: url,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 29
        }
      }))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, url && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }, id && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 33
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
        onSelect: this.onSelectImage,
        allowedTypes: ["image"],
        value: id,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Edit Image", "carkeek-blocks"),
            onClick: open,
            icon: "edit",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 49
            }
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 37
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Remove Image", "carkeek-blocks"),
        onClick: this.removeImage,
        icon: "trash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 29
        }
      }))), wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 17
        }
      }, (layout == "grid" || isSelected) && wp.element.createElement(wp.element.Fragment, null, url ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("img", {
        src: url,
        alt: alt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 33
        }
      }), Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 52
        }
      })) : wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
        icon: "format-image",
        onSelect: this.onSelectImage,
        onError: this.onUploadError //accept="image/*"
        ,
        allowedTypes: ["image"],
        notices: noticeUI,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 29
        }
      })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        className: "wp-block-carkeek-blocks-team-member__name",
        tagName: "div",
        onChange: this.onChangeName,
        value: name,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Member Name", "carkeek-blocks"),
        formatingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        className: "wp-block-carkeek-blocks-team-member__title",
        tagName: "div",
        onChange: this.onChangeTitle,
        value: title,
        placeholder: isSelected ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Member Title", "carkeek-blocks") : null,
        formatingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }
      }), isSelected && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        className: "wp-block-carkeek-blocks-team-member__details",
        tagName: "p",
        onChange: this.onChangeDetails,
        value: details,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Member Details", "carkeek-blocks"),
        formatingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
        value: email,
        onChange: this.onChangeEmail,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Email", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
        value: emailLabel,
        onChange: this.onChangeEmailLabel,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Email Label", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }
      }))));
    }
  }]);

  return TeamMemberEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, props) {
  var id = props.attributes.id;
  var parentId = select('core/block-editor').getBlockHierarchyRootClientId(props.clientId);
  var parentAttributes = select('core/block-editor').getBlockAttributes(parentId);
  return {
    image: id ? select("core").getMedia(id) : null,
    imageSizes: select("core/editor").getEditorSettings().imageSizes,
    layout: parentAttributes.layout
  };
})(Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withNotices"])(TeamMemberEdit)));

/***/ }),

/***/ "./src/blocks/team-member/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/team-member/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/team-member/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/team-member/parent.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-member/edit.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/team-member/index.js";







var attributes = {
  name: {
    type: "string",
    source: "html",
    selector: ".wp-block-carkeek-blocks-team-member__name"
  },
  title: {
    type: "string",
    source: "html",
    selector: ".wp-block-carkeek-blocks-team-member__title"
  },
  details: {
    type: "string",
    source: "html",
    selector: ".wp-block-carkeek-blocks-team-member__details"
  },
  id: {
    type: "number"
  },
  alt: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "alt",
    default: ""
  },
  url: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "src"
  },
  email: {
    type: "string"
  },
  emailLabel: {
    type: "string",
    default: "Send an email"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/team-member", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Team Member", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(" Block showing a Team Member. ", "carkeek-blocks"),
  icon: "admin-users",
  parent: ["carkeek-blocks/team-members"],
  supports: {
    reusable: false,
    html: false
  },
  category: "widgets",
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("team", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("member", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("person", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("staff", "carkeek-blocks")],
  attributes: attributes,
  deprecated: [{
    attributes: attributes,
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          name = attributes.name,
          url = attributes.url,
          alt = attributes.alt,
          id = attributes.id,
          details = attributes.details,
          email = attributes.email,
          emailLabel = attributes.emailLabel;
      return wp.element.createElement("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-team-member__initial",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      }, url && wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-team-member__image",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, wp.element.createElement("img", {
        src: url,
        alt: alt,
        className: id ? "wp-image-".concat(id) : null,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      })), name && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
        className: "wp-block-carkeek-blocks-team-member__name",
        tagName: "div",
        value: name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }), title && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
        className: "wp-block-carkeek-blocks-team-member__title",
        tagName: "p",
        value: title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }
      })), wp.element.createElement("div", {
        className: "wp-block-carkeek-blocks-team-member__additional",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 22
        }
      }, details && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
        className: "wp-block-carkeek-blocks-team-member__details",
        tagName: "p",
        value: details,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 29
        }
      }), email && wp.element.createElement("a", {
        className: "{button is-style-cta}",
        href: "mailto:{email}",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, emailLabel)));
    }
  }],
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title,
        name = attributes.name,
        url = attributes.url,
        alt = attributes.alt,
        id = attributes.id,
        details = attributes.details,
        email = attributes.email,
        emailLabel = attributes.emailLabel;
    return wp.element.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-team-member__initial",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, url && wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-team-member__image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, wp.element.createElement("img", {
      src: url,
      alt: alt,
      className: id ? "skip-lazy wp-image-".concat(id) : 'skip-lazy',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    })), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      className: "wp-block-carkeek-blocks-team-member__name",
      tagName: "div",
      value: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }), title && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      className: "wp-block-carkeek-blocks-team-member__title",
      tagName: "p",
      value: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    })), wp.element.createElement("div", {
      className: "wp-block-carkeek-blocks-team-member__additional",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 18
      }
    }, details && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      className: "wp-block-carkeek-blocks-team-member__details",
      tagName: "p",
      value: details,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }), email && wp.element.createElement("a", {
      className: "button is-style-cta",
      href: "mailto:".concat(email),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, emailLabel)));
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/team-member/parent.js":
/*!******************************************!*\
  !*** ./src/blocks/team-member/parent.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/team-member/parent.js";





var attributes = {
  columns: {
    type: "number",
    default: 3
  },
  layout: {
    type: "string",
    default: "grid"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("carkeek-blocks/team-members", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Team Members", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Block showing a Team Members.", "carkeek-blocks"),
  icon: wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "black",
    width: "48px",
    height: "48px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Path"], {
    d: "M0 0h24v24H0V0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Path"], {
    d: "M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.42zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })),
  category: "widgets",
  supports: {
    html: false,
    align: ["wide", "full"]
  },
  transforms: {
    from: [{
      type: "block",
      blocks: ["core/gallery"],
      transform: function transform(_ref) {
        var columns = _ref.columns,
            images = _ref.images;
        var inner = images.map(function (_ref2) {
          var alt = _ref2.alt,
              id = _ref2.id,
              url = _ref2.url;
          return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])("carkeek-blocks/team-member", {
            alt: alt,
            id: id,
            url: url
          });
        });
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])("carkeek-blocks/team-members", {
          columns: columns
        }, inner);
      }
    }, {
      type: "block",
      blocks: ["core/image"],
      isMultiBlock: true,
      transform: function transform(attributes) {
        var inner = attributes.map(function (_ref3) {
          var alt = _ref3.alt,
              id = _ref3.id,
              url = _ref3.url;
          return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])("carkeek-blocks/team-member", {
            alt: alt,
            id: id,
            url: url
          });
        });
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])("carkeek-blocks/team-members", {
          columns: 3
        }, inner);
      }
    }]
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("team", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("member", "carkeek-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("person", "carkeek-blocks")],
  attributes: attributes,
  edit: function edit(_ref4) {
    var className = _ref4.className,
        attributes = _ref4.attributes,
        setAttributes = _ref4.setAttributes;
    var columns = attributes.columns,
        layout = attributes.layout;
    return wp.element.createElement("div", {
      className: "".concat(className, " has-").concat(columns, "-columns is-").concat(layout, "-style"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Columns", "carkeek-blocks"),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("With list style layout, this determines the width of the column.", "carkeek-blocks"),
      value: columns,
      onChange: function onChange(columns) {
        return setAttributes({
          columns: columns
        });
      },
      min: 1,
      max: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RadioControl"], {
      label: "Layout",
      selected: layout,
      options: [{
        label: "Grid",
        value: 'grid'
      }, {
        label: "List",
        value: 'list'
      }],
      onChange: function onChange(layout) {
        return setAttributes({
          layout: layout
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      allowedBlocks: ["carkeek-blocks/team-member"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }));
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var columns = attributes.columns,
        layout = attributes.layout;
    return wp.element.createElement("div", {
      className: "has-".concat(columns, "-columns is-").concat(layout, "-style"),
      "data-layout": layout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/team-member/style.editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/team-member/style.editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_team_member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/team-member */ "./src/blocks/team-member/index.js");
/* harmony import */ var _blocks_link_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/link-tile */ "./src/blocks/link-tile/index.js");
/* harmony import */ var _blocks_custom_archive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/custom-archive */ "./src/blocks/custom-archive/index.js");
/* harmony import */ var _blocks_link_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/link-gallery */ "./src/blocks/link-gallery/index.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/slider */ "./src/blocks/slider/index.js");
/* harmony import */ var _blocks_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/accordion */ "./src/blocks/accordion/index.js");
/* harmony import */ var _blocks_form_assembly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/form-assembly */ "./src/blocks/form-assembly/index.js");
/* harmony import */ var _blocks_rollover_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/rollover-images */ "./src/blocks/rollover-images/index.js");









/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map