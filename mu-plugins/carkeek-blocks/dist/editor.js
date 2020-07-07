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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/carkeek-blocks/src/blocks/custom-archive/edit.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    return _this;
  }

  _createClass(CustomArchiveEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          posts = _this$props.posts,
          postTypes = _this$props.postTypes,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var numberOfPosts = attributes.numberOfPosts,
          displayPostContent = attributes.displayPostContent,
          displayPostTitle = attributes.displayPostTitle,
          displayPostContentRadio = attributes.displayPostContentRadio,
          excerptLength = attributes.excerptLength,
          displayFeaturedImage = attributes.displayFeaturedImage,
          postLayout = attributes.postLayout,
          postsToShow = attributes.postsToShow,
          postTypeSelected = attributes.postTypeSelected;
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
            lineNumber: 50,
            columnNumber: 17
          }
        }, wp.element.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }
        }), wp.element.createElement("path", {
          d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }
        })),
        list: wp.element.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "black",
          width: "18px",
          height: "18px",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }
        }, wp.element.createElement("g", {
          fill: "none",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }
        }, wp.element.createElement("path", {
          d: "M0 0h24v24H0V0z",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }
        }), wp.element.createElement("path", {
          d: "M0 0h24v24H0V0z",
          opacity: ".87",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }
        })), wp.element.createElement("path", {
          d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }
        })),
        grid: wp.element.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "black",
          width: "18px",
          height: "18px",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }
        }, wp.element.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }
        }), wp.element.createElement("path", {
          d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }
        }))
      };
      var postTypeSelect = wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Post Type", "carkeek-blocks"),
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
          lineNumber: 90,
          columnNumber: 13
        }
      });
      var inspectorControls = wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Posts Settings", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, postTypeSelect, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Number of Posts", "carkeek-blocks"),
        value: numberOfPosts,
        onChange: this.onChangeNumberOfPosts,
        min: 1,
        max: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show Post Title"),
        checked: displayPostTitle,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostTitle: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Post content"),
        checked: displayPostContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContent: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }), displayPostContent && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show:"),
        selected: displayPostContentRadio,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Excerpt"),
          value: "excerpt"
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Full post"),
          value: "full_post"
        }],
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContentRadio: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }
      }), displayPostContent && displayPostContentRadio === "excerpt" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Max number of words in excerpt"),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: 10,
        max: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 29
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Display featured image"),
        checked: displayFeaturedImage,
        onChange: function onChange(value) {
          return setAttributes({
            displayFeaturedImage: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      })));
      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        var noPostMessage = typeof postTypeSelected !== "undefined" ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("No Posts Found") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Select a Post Type from the Block Settings");
        return wp.element.createElement(wp.element.Fragment, null, inspectorControls, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
          icon: icons.pin,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Latest Posts"),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }
        }, !Array.isArray(posts) ? wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 50
          }
        }) : noPostMessage));
      } //removing posts should be instant


      var displayPosts = posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;
      var layoutControls = [{
        icon: icons.list,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("List view"),
        onClick: function onClick() {
          return setAttributes({
            postLayout: "list"
          });
        },
        isActive: postLayout === "list"
      }, {
        icon: icons.grid,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Grid view"),
        onClick: function onClick() {
          return setAttributes({
            postLayout: "grid"
          });
        },
        isActive: postLayout === "grid"
      }];
      return wp.element.createElement(wp.element.Fragment, null, inspectorControls, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], {
        controls: layoutControls,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      })), wp.element.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
          "wp-block-ck-custom_posttype__list": true,
          "is-grid": postLayout === "grid",
          "is-list": postLayout === "list"
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }
      }, wp.element.createElement("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
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
          "wp-block-ck-custom_posttype__featured-image": true
        });
        var postExcerpt = wp.element.createElement(wp.element.Fragment, null, excerpt.trim().split(" ", excerptLength).join(" "), wp.element.createElement("a", {
          href: post.link,
          target: "_blank",
          rel: "noopener noreferrer",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 37
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Read more")));
        return wp.element.createElement("li", {
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 33
          }
        }, displayFeaturedImage && wp.element.createElement("div", {
          className: imageClasses,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 41
          }
        }, imageSourceUrl && wp.element.createElement("img", {
          src: imageSourceUrl,
          alt: "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 49
          }
        })), displayPostTitle && wp.element.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: post.link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 41
          }
        }, titleTrimmed ? wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["RawHTML"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 49
          }
        }, titleTrimmed) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("(no title)")), displayPostContent && displayPostContentRadio === "excerpt" && wp.element.createElement("div", {
          className: "wp-block-ck-custom_posttype__post-excerpt",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 45
          }
        }, postExcerpt), displayPostContent && displayPostContentRadio === "full_post" && wp.element.createElement("div", {
          className: "wp-block-ck-custom_posttype__post-full-content",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 45
          }
        }, wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["RawHTML"], {
          key: "html",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 49
          }
        }, post.content.raw.trim())));
      }))));
    }
  }]);

  return CustomArchiveEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var numberOfPosts = attributes.numberOfPosts,
      postTypeSelected = attributes.postTypeSelected;

  var _select = select("core"),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia,
      getPostTypes = _select.getPostTypes;

  var query = {
    per_page: numberOfPosts
  };
  var latestPosts = getEntityRecords("postType", postTypeSelected, query);
  return {
    postTypes: getPostTypes(),
    posts: !Array.isArray(latestPosts) ? latestPosts : latestPosts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(image, ["media_details", "sizes", "large", "sourc_url"], null);

        if (!url) {
          url = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(image, "source_url", null);
        }

        return _objectSpread({}, post, {
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
  displayFeaturedImage: {
    type: "boolean",
    default: true
  },
  displayPostTitle: {
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
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("carkeek-blocks/custom-archive", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom Post Type Archive", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("BLock showing the latest custom post type items.", "carkeek-blocks"),
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    type: "string",
    default: "wide"
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
        lineNumber: 39,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: ["carkeek-blocks/link-tile"],
      template: [["carkeek-blocks/link-tile"], ["carkeek-blocks/link-tile"]],
      orientation: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
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
        lineNumber: 54,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Speed", "carkeek-blocks"),
      value: autoPlaySpeed,
      onChange: function onChange(value) {
        return setAttributes({
          autoPlaySpeed: value
        });
      },
      min: 1000,
      max: 8000,
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    var attributes = _ref5.attributes,
        className = _ref5.className;
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