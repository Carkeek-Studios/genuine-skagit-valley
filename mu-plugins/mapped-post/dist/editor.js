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

/***/ "./src/blocks/mappedpost-archive/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/mappedpost-archive/edit.js ***!
  \***********************************************/
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
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-archive/edit.js";

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









var MappedPostsArchiveEdit = /*#__PURE__*/function (_Component) {
  _inherits(MappedPostsArchiveEdit, _Component);

  var _super = _createSuper(MappedPostsArchiveEdit);

  function MappedPostsArchiveEdit() {
    var _this;

    _classCallCheck(this, MappedPostsArchiveEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangePostType", function (postTypeSelected) {
      _this.props.setAttributes({
        postTypeSelected: postTypeSelected
      });
    });

    return _this;
  }

  _createClass(MappedPostsArchiveEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          posts = _this$props.posts,
          postTypes = _this$props.postTypes,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var popupTitle = attributes.popupTitle,
          popupExcerpt = attributes.popupExcerpt,
          popupImage = attributes.popupImage,
          excerptLength = attributes.excerptLength,
          postsToShow = attributes.postsToShow,
          postTypeSelected = attributes.postTypeSelected;
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
          lineNumber: 39,
          columnNumber: 13
        }
      });
      var inspectorControls = wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Posts Settings", "carkeek-blocks"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, postTypeSelect, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
        heading: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Include in Popup:"),
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Listing Title"),
        checked: popupTitle,
        onChange: function onChange(value) {
          return setAttributes({
            popupTitle: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Featured Image"),
        checked: popupImage,
        onChange: function onChange(value) {
          return setAttributes({
            popupImage: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Excerpt"),
        checked: popupExcerpt,
        onChange: function onChange(value) {
          return setAttributes({
            popupExcerpt: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }), popupExcerpt && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Max number of words in excerpt"),
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
          lineNumber: 85,
          columnNumber: 25
        }
      })));
      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        var noPostMessage = typeof postTypeSelected !== "undefined" ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("No Posts Found") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Select a Post Type from the Block Settings");
        return wp.element.createElement(wp.element.Fragment, null, inspectorControls, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Placeholder"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Latest Posts"),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 21
          }
        }, !Array.isArray(posts) ? wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 50
          }
        }) : noPostMessage));
      } //removing posts should be instant


      var displayPosts = posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;
      return wp.element.createElement(wp.element.Fragment, null, inspectorControls, wp.element.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, wp.element.createElement("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 157,
            columnNumber: 37
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Read more")));
        return wp.element.createElement("li", {
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 33
          }
        }, popupImage && wp.element.createElement("div", {
          className: imageClasses,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 41
          }
        }, imageSourceUrl && wp.element.createElement("img", {
          src: imageSourceUrl,
          alt: "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 49
          }
        })), popupTitle && wp.element.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: post.link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 41
          }
        }, titleTrimmed ? wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["RawHTML"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 49
          }
        }, titleTrimmed) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("(no title)")), popupExcerpt && wp.element.createElement("div", {
          className: "wp-block-ck-custom_posttype__post-excerpt",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 45
          }
        }, postExcerpt));
      }))));
    }
  }]);

  return MappedPostsArchiveEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var postTypeSelected = attributes.postTypeSelected;

  var _select = select("core"),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia,
      getPostTypes = _select.getPostTypes;

  var query = {
    per_page: 5
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
})(MappedPostsArchiveEdit));

/***/ }),

/***/ "./src/blocks/mappedpost-archive/index.js":
/*!************************************************!*\
  !*** ./src/blocks/mappedpost-archive/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/mappedpost-archive/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/mappedpost-archive/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-archive/index.js";




var attributes = {
  numberOfPosts: {
    type: "number",
    default: 3
  },
  postTypeSelected: {
    type: "string"
  },
  popupImage: {
    type: "boolean",
    default: true
  },
  popupTitle: {
    type: "boolean",
    default: true
  },
  popupExcerpt: {
    type: "boolean",
    default: true
  },
  excerptLength: {
    type: "number",
    default: 25
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("mapped-posts/archive", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Farm Archive", "carkeek-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Block displaying farm listings in a map.", "carkeek-blocks"),
  icon: "location-alt",
  category: "mapped-posts",
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  attributes: attributes,
  supports: {
    align: ["wide", "full"]
  },
  save: function save() {
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/mappedpost-archive/styles.editor.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/mappedpost-archive/styles.editor.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/mappedpost-links/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/mappedpost-links/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-links/edit.js";

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






var MappedPostLink = /*#__PURE__*/function (_Component) {
  _inherits(MappedPostLink, _Component);

  var _super = _createSuper(MappedPostLink);

  function MappedPostLink() {
    var _this;

    _classCallCheck(this, MappedPostLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setLabel", function (label) {
      _this.props.setAttributes({
        label: label
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setUrl", function (url) {
      _this.props.setAttributes({
        url: url
      });
    });

    return _this;
  }

  _createClass(MappedPostLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          siblingsSelected = _this$props.siblingsSelected,
          parentIsSelected = _this$props.parentIsSelected;
      var label = attributes.label,
          url = attributes.url;

      if (isSelected || siblingsSelected || parentIsSelected) {
        return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link Label', 'mapped-posts'),
          value: label,
          onChange: this.setLabel,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }
        }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
          value: url,
          onChange: this.setUrl,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Link", "carkeek-blocks"),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }
        }));
      } else {
        return wp.element.createElement("div", {
          className: "mapped-posts-links__link",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }
        }, " ", label, " ");
      }
    }
  }]);

  return MappedPostLink;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, props) {
  var parentId = select('core/block-editor').getBlockHierarchyRootClientId(props.clientId);
  var siblingsSelected = select('core/block-editor').hasSelectedInnerBlock(parentId);
  var parentIsSelected = select('core/block-editor').isBlockSelected(parentId);
  return {
    siblingsSelected: siblingsSelected,
    parentIsSelected: parentIsSelected
  };
})(MappedPostLink));

/***/ }),

/***/ "./src/blocks/mappedpost-links/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/mappedpost-links/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/mappedpost-links/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/mappedpost-links/parent.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/mappedpost-links/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-links/index.js";





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("mapped-posts/link", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Link", "mapped-post"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Link", "mapped-post"),
  icon: "admin-links",
  category: "mapped-posts",
  parent: ["mapped-posts/mappedpost-links"],
  attributes: {
    url: {
      type: 'string',
      src: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    label: {
      type: 'string',
      src: 'html',
      selector: 'a'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var url = attributes.url,
        label = attributes.label;
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, wp.element.createElement("a", {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, label));
  }
});

/***/ }),

/***/ "./src/blocks/mappedpost-links/parent.js":
/*!***********************************************!*\
  !*** ./src/blocks/mappedpost-links/parent.js ***!
  \***********************************************/
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
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-links/parent.js";
//import "./styles.editor.scss";
//import edit from "./edit";



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("mapped-posts/mappedpost-links", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Mapped Post Links", "mapped-post"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Mapped Post Links Section", "mapped-post"),
  icon: "editor-code",
  category: "mapped-posts",
  edit: function edit() {
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, wp.element.createElement("div", {
      className: "mappedpost-inner__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "Farm Links (click to edit)"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: ["mapped-posts/link"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }));
  },
  save: function save() {
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/mappedpost-links/style.editor.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/mappedpost-links/style.editor.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/mappedpost-meta/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/mappedpost-meta/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/pattyohara/Sites/wa-farmland-trust/app/public/wp-content/mu-plugins/mapped-post/src/blocks/mappedpost-meta/index.js";




var attributes = {
  location: {
    type: 'string',
    source: 'meta',
    meta: 'mappedposts_location'
  },
  acreage: {
    type: 'string',
    source: 'meta',
    meta: 'mappedposts_acreage'
  },
  date: {
    type: 'string',
    source: 'meta',
    meta: 'mappedposts_date'
  },
  maponly: {
    type: 'boolean',
    source: 'meta',
    meta: 'mappedposts_maponly',
    default: false
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("mapped-posts/mappedpost-meta", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Mapped Post Meta", "mapped-post"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Block that holds the meta data for the mapped post", "mapped-post"),
  icon: "location",
  category: "mapped-posts",
  attributes: attributes,
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    function setLocation(loc) {
      setAttributes({
        location: loc
      });
    }

    function setDate(date) {
      setAttributes({
        date: date
      });
    }

    function setAcreage(acres) {
      setAttributes({
        acreage: acres
      });
    }

    function setMaponly(maponly) {
      setAttributes({
        maponly: maponly
      });
    }

    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Map Only', 'mapped-posts'),
      help: attributes.maponly ? 'Link to Farm Listing will not be displayed' : 'Link to Farm Listing will be displayed',
      checked: attributes.maponly,
      onChange: setMaponly,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Location', 'mapped-posts'),
      value: attributes.location,
      onChange: setLocation,
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('City, ST (enter full address down below)', 'mapped-posts'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Date Protected', 'mapped-posts'),
      value: attributes.date,
      onChange: setDate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Acres', 'mapped-posts'),
      value: attributes.acreage,
      onChange: setAcreage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_mappedpost_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/mappedpost-meta */ "./src/blocks/mappedpost-meta/index.js");
/* harmony import */ var _blocks_mappedpost_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/mappedpost-links */ "./src/blocks/mappedpost-links/index.js");
/* harmony import */ var _blocks_mappedpost_archive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/mappedpost-archive */ "./src/blocks/mappedpost-archive/index.js");




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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

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