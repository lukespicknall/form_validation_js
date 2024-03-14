/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --theme1: rgb(47, 112, 159);
    /* rgb(158, 101, 125); */
}

* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.form-field {
    margin: 0px 0 7px 0;
    display: flex;
    flex-direction: column;
}

input {
    height: 31px;
    font-size: 15px;
    color: rgb(39, 39, 39);
    padding: 4px;
    border: 2px solid #cccdce;
    border-radius: 5px;
    border-color: rgba(56, 55, 55, 0.356);
    min-width: 250px;
    /* width: 100%; */
}

.def-input {
    border-color: rgba(56, 55, 55, 0.356);
}

.notValid {
    background-color: rgba(255, 165, 165, 0.301);
    outline: none;
    border-color: red;
}

.isValid {
    background-color: rgba(0, 252, 71, 0.075);
    outline: none;
    border-color: rgb(22, 201, 46);
}
/* 
input:focus {
    background-color: rgba(0, 109, 252, 0.13);
    outline: none;
    border-color: var(--theme1);
    box-shadow: 8px 8px 12px 0 var(--theme1)
} */


/* input:valid {
    background-color: rgba(0, 252, 71, 0.13);
    outline: none;
    border-color: rgb(22, 201, 46);
}


input:not(:focus):placeholder-shown:invalid{
    background-color: rgba(252, 0, 0, 0.13);
    outline: none;
    border-color: rgba(56, 55, 55, 0.356);
}

input:focus:placeholder-shown:invalid{
    background-color: rgba(252, 0, 0, 0.13);
    outline: none;
    border-color: rgba(56, 55, 55, 0.356);
}

input:invalid{
    background-color: rgba(252, 0, 0, 0.13);
    outline: none;
    border-color: red;
    box-shadow: 8px 8px 12px 0 red
} */
/* input:focus {
    background-color: rgba(0, 109, 252, 0.13);
    outline: none;
    border-color: var(--theme1);
    box-shadow: 3px 3px 2px 0 var(--theme1)
} */

.error {
    display: flex;
    align-items: center;
    min-height: 17px;
    width: 100%;
    font-size: 13px;
    color: red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,qCAAqC;IACrC,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,8BAA8B;AAClC;AACA;;;;;;GAMG;;;AAGH;;;;;;;;;;;;;;;;;;;;;;;;GAwBG;AACH;;;;;GAKG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,UAAU;AACd","sourcesContent":[":root {\n    --theme1: rgb(47, 112, 159);\n    /* rgb(158, 101, 125); */\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-field {\n    margin: 0px 0 7px 0;\n    display: flex;\n    flex-direction: column;\n}\n\ninput {\n    height: 31px;\n    font-size: 15px;\n    color: rgb(39, 39, 39);\n    padding: 4px;\n    border: 2px solid #cccdce;\n    border-radius: 5px;\n    border-color: rgba(56, 55, 55, 0.356);\n    min-width: 250px;\n    /* width: 100%; */\n}\n\n.def-input {\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\n.notValid {\n    background-color: rgba(255, 165, 165, 0.301);\n    outline: none;\n    border-color: red;\n}\n\n.isValid {\n    background-color: rgba(0, 252, 71, 0.075);\n    outline: none;\n    border-color: rgb(22, 201, 46);\n}\n/* \ninput:focus {\n    background-color: rgba(0, 109, 252, 0.13);\n    outline: none;\n    border-color: var(--theme1);\n    box-shadow: 8px 8px 12px 0 var(--theme1)\n} */\n\n\n/* input:valid {\n    background-color: rgba(0, 252, 71, 0.13);\n    outline: none;\n    border-color: rgb(22, 201, 46);\n}\n\n\ninput:not(:focus):placeholder-shown:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\ninput:focus:placeholder-shown:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\ninput:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: red;\n    box-shadow: 8px 8px 12px 0 red\n} */\n/* input:focus {\n    background-color: rgba(0, 109, 252, 0.13);\n    outline: none;\n    border-color: var(--theme1);\n    box-shadow: 3px 3px 2px 0 var(--theme1)\n} */\n\n.error {\n    display: flex;\n    align-items: center;\n    min-height: 17px;\n    width: 100%;\n    font-size: 13px;\n    color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// create DOM elements and thier attributes
const content = document.getElementById('content');

const display = document.createElement('div');
display.id = 'display';

const formCard = document.createElement('div');
formCard.id = 'form-card';

const form = document.createElement('form');
form.id = 'form';
form.noValidate = true;

const email = document.createElement('input');
email.id = 'email';
email.type = 'email';
email.name = 'email';
email.required = true;
email.placeholder = 'Enter your email address';
email.setCustomValidity('');
email.classList.add('def-input');
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.classList.add('labels');
emailLabel.textContent = 'Email';
const emailError = document.createElement('span');
emailError.classList.add('error');

const showEmailError = () => {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an email address.';
    email.className = 'notValid';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an email address.';
    email.className = 'notValid';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    email.className = 'notValid';
  }
};

email.oninput = () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    email.className = 'isValid';
  } else if (!email.validity.valid) {
    // emailError.textContent = 'i dont thoink so!';
    showEmailError();
    email.className = 'notValid';
  }
};

const country = document.createElement('input');
country.id = 'country';
country.type = ' select';
country.required = true;
country.classList.add('def-input');
const countryLabel = document.createElement('label');
countryLabel.classList.add('labels');
countryLabel.textContent = 'Country';
const countryError = document.createElement('span');
countryError.classList.add('error');

const zipCode = document.createElement('input');
zipCode.id = 'zip-code';
zipCode.type = 'text';
zipCode.required = true;
zipCode.pattern = '[0-9]{5}';
zipCode.maxLength = 5;
zipCode.placeholder = 'Enter a 5 digit zipcode';
zipCode.classList.add('def-input');
const zipCodeLabel = document.createElement('label');
zipCodeLabel.classList.add('labels');
zipCodeLabel.textContent = 'Zip Code';
const zipCodeError = document.createElement('span');
zipCodeError.classList.add('error');

const showZipCodeError = () => {
  if (zipCode.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    zipCodeError.textContent = 'Enter a 5 digit Zip Code.';
    zipCode.className = 'notValid';
  } else if (zipCode.validity.patternMismatch) {
    // If the field doesn't contain an zipCode address,
    // display the following error message.
    zipCodeError.textContent = 'Enter a 5 digit Zip Code.';
    zipCode.className = 'notValid';
  }
};

zipCode.oninput = () => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = '';
    zipCode.className = 'isValid';
  } else if (!zipCode.validity.valid) {
    showZipCodeError();
    zipCode.className = 'notValid';
  }
};

const password = document.createElement('input');
password.id = 'password';
password.type = 'password';
password.required = true;
password.pattern = '(?=.*d)(?=.*[a-zA-Z]).{6,}';
password.minLength = 6;
password.classList.add('def-input');
const passwordLabel = document.createElement('label');
passwordLabel.classList.add('labels');
passwordLabel.textContent = 'Password';
const passwordError = document.createElement('span');
passwordError.classList.add('error');

const showPasswordError = () => {
  if (password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = 'Enter a password';
    password.className = 'notValid';
  } else if (password.validity.patternMismatch && password.validity.tooShort) {
    // If the field doesn't contain an password address,
    // display the following error message.
    passwordError.textContent = '6 characters long with a number and a letter';
    password.className = 'notValid';
  } else if (password.validity.tooShort) {
    // If the field doesn't contain an password address,
    // display the following error message.
    passwordError.textContent = 'Must be 6 charecters long ';
    password.className = 'notValid';
  } else if (password.validity.patternMismatch) {
    // If the field doesn't contain an password address,
    // display the following error message.
    passwordError.textContent = 'Must contain a number and a letter';
    password.className = 'notValid';
  }
};

password.oninput = () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    password.className = "isValid";
  } else if (!password.validity.valid) {
    showPasswordError();
    password.className = "notValid";
  }
};

const passwordConfirm = document.createElement('input');
passwordConfirm.id = 'password-confirm';
passwordConfirm.type = 'password';
passwordConfirm.required = true;
passwordConfirm.classList.add('def-input');
const passwordConfirmLabel = document.createElement('label');
passwordConfirmLabel.classList.add('labels');
passwordConfirmLabel.textContent = 'Confirm Password';
const passwordConfirmError = document.createElement('span');
passwordConfirmError.classList.add('error');

const inputs = [
  emailLabel,
  email,
  emailError,
  countryLabel,
  country,
  countryError,
  zipCodeLabel,
  zipCode,
  zipCodeError,
  passwordLabel,
  password,
  passwordError,
  passwordConfirmLabel,
  passwordConfirm,
  passwordConfirmError,
];

// put each pair of label, input, and error span into a formField div for styling
for (let i = 0; i < inputs.length; i += 3) {
  const formField = document.createElement('div');
  formField.classList.add('form-field');
  const grabber = i + 1;
  const grabber2 = i + 2;
  formField.appendChild(inputs[i]);
  formField.appendChild(inputs[grabber]);
  formField.appendChild(inputs[grabber2]);

  //   const error
  //   console.log(inputs[grabber].id);
  form.appendChild(formField);
}

const submitBox = document.createElement('div');
const submitBtn = document.createElement('button');
submitBtn.id = 'submit-button';
submitBtn.textContent = 'Submit';
submitBox.appendChild(submitBtn);
form.appendChild(submitBox);

submitBtn.onclick = (e) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
  if (!zipCode.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipCodeError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
};

formCard.appendChild(form);

display.append(formCard);

content.appendChild(display);

// js style that ought to be replaced within style.css
submitBtn.style.width = '150px';

submitBox.style.display = 'flex';
submitBox.style.justifyContent = 'center';
submitBox.style.marginTop = '5px';

form.style.display = 'flex';
form.style.justifyContent = 'center';
form.style.flexDirection = 'column';
form.style.width = '275px';

formCard.style.display = 'flex';
formCard.style.justifyContent = 'center';
formCard.style.alignItems = 'center';
formCard.style.backgroundColor = 'whitesmoke';
formCard.style.padding = '40px';

display.style.display = 'flex';
display.style.width = '100%';
display.style.height = '100vh';
display.style.justifyContent = 'center';
display.style.alignItems = 'center';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aGVtZTE6IHJnYig0NywgMTEyLCAxNTkpO1xuICAgIC8qIHJnYigxNTgsIDEwMSwgMTI1KTsgKi9cbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDBweCAwIDdweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW5wdXQge1xuICAgIGhlaWdodDogMzFweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjY2RjZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xufVxuXG4uZGVmLWlucHV0IHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xufVxuXG4ubm90VmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjUsIDE2NSwgMC4zMDEpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5pc1ZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1MiwgNzEsIDAuMDc1KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcbn1cbi8qIFxuaW5wdXQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTA5LCAyNTIsIDAuMTMpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZTEpO1xuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTJweCAwIHZhcigtLXRoZW1lMSlcbn0gKi9cblxuXG4vKiBpbnB1dDp2YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTIsIDcxLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcbn1cblxuXG5pbnB1dDpub3QoOmZvY3VzKTpwbGFjZWhvbGRlci1zaG93bjppbnZhbGlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XG59XG5cbmlucHV0OmZvY3VzOnBsYWNlaG9sZGVyLXNob3duOmludmFsaWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcbn1cblxuaW5wdXQ6aW52YWxpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggMCByZWRcbn0gKi9cbi8qIGlucHV0OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwOSwgMjUyLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUxKTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAwIHZhcigtLXRoZW1lMSlcbn0gKi9cblxuLmVycm9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7Ozs7OztHQU1HOzs7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0g7Ozs7O0dBS0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGhlbWUxOiByZ2IoNDcsIDExMiwgMTU5KTtcXG4gICAgLyogcmdiKDE1OCwgMTAxLCAxMjUpOyAqL1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tZmllbGQge1xcbiAgICBtYXJnaW46IDBweCAwIDdweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NkY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5kZWYtaW5wdXQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xcbn1cXG5cXG4ubm90VmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY1LCAxNjUsIDAuMzAxKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pc1ZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTIsIDcxLCAwLjA3NSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcXG59XFxuLyogXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwOSwgMjUyLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZTEpO1xcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggMCB2YXIoLS10aGVtZTEpXFxufSAqL1xcblxcblxcbi8qIGlucHV0OnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTIsIDcxLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjIsIDIwMSwgNDYpO1xcbn1cXG5cXG5cXG5pbnB1dDpub3QoOmZvY3VzKTpwbGFjZWhvbGRlci1zaG93bjppbnZhbGlke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XFxufVxcblxcbmlucHV0OmZvY3VzOnBsYWNlaG9sZGVyLXNob3duOmludmFsaWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4IDAgcmVkXFxufSAqL1xcbi8qIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDksIDI1MiwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUxKTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMCB2YXIoLS10aGVtZTEpXFxufSAqL1xcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE3cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gY3JlYXRlIERPTSBlbGVtZW50cyBhbmQgdGhpZXIgYXR0cmlidXRlc1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XG5cbmNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtQ2FyZC5pZCA9ICdmb3JtLWNhcmQnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICdmb3JtJztcbmZvcm0ubm9WYWxpZGF0ZSA9IHRydWU7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmVtYWlsLmlkID0gJ2VtYWlsJztcbmVtYWlsLnR5cGUgPSAnZW1haWwnO1xuZW1haWwubmFtZSA9ICdlbWFpbCc7XG5lbWFpbC5yZXF1aXJlZCA9IHRydWU7XG5lbWFpbC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnO1xuZW1haWwuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuZW1haWwuY2xhc3NMaXN0LmFkZCgnZGVmLWlucHV0Jyk7XG5jb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbmVtYWlsTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5lbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsJztcbmNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5lbWFpbEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbmNvbnN0IHNob3dFbWFpbEVycm9yID0gKCkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYW4gZW1haWwgYWRkcmVzcy4nO1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgY29udGFpbiBhbiBlbWFpbCBhZGRyZXNzLFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXJlZCB2YWx1ZSBuZWVkcyB0byBiZSBhbiBlbWFpbCBhZGRyZXNzLic7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIC8vIElmIHRoZSBkYXRhIGlzIHRvbyBzaG9ydCxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gYEVtYWlsIHNob3VsZCBiZSBhdCBsZWFzdCAke2VtYWlsLm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHtlbWFpbC52YWx1ZS5sZW5ndGh9LmA7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuZW1haWwub25pbnB1dCA9ICgpID0+IHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9ICdpc1ZhbGlkJztcbiAgfSBlbHNlIGlmICghZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICAvLyBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ2kgZG9udCB0aG9pbmsgc28hJztcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY291bnRyeS5pZCA9ICdjb3VudHJ5JztcbmNvdW50cnkudHlwZSA9ICcgc2VsZWN0JztcbmNvdW50cnkucmVxdWlyZWQgPSB0cnVlO1xuY291bnRyeS5jbGFzc0xpc3QuYWRkKCdkZWYtaW5wdXQnKTtcbmNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb3VudHJ5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5jb3VudHJ5TGFiZWwudGV4dENvbnRlbnQgPSAnQ291bnRyeSc7XG5jb25zdCBjb3VudHJ5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jb3VudHJ5RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3QgemlwQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG56aXBDb2RlLmlkID0gJ3ppcC1jb2RlJztcbnppcENvZGUudHlwZSA9ICd0ZXh0JztcbnppcENvZGUucmVxdWlyZWQgPSB0cnVlO1xuemlwQ29kZS5wYXR0ZXJuID0gJ1swLTldezV9JztcbnppcENvZGUubWF4TGVuZ3RoID0gNTtcbnppcENvZGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSA1IGRpZ2l0IHppcGNvZGUnO1xuemlwQ29kZS5jbGFzc0xpc3QuYWRkKCdkZWYtaW5wdXQnKTtcbmNvbnN0IHppcENvZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG56aXBDb2RlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG56aXBDb2RlTGFiZWwudGV4dENvbnRlbnQgPSAnWmlwIENvZGUnO1xuY29uc3QgemlwQ29kZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuemlwQ29kZUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbmNvbnN0IHNob3daaXBDb2RlRXJyb3IgPSAoKSA9PiB7XG4gIGlmICh6aXBDb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIC8vIElmIHRoZSBmaWVsZCBpcyBlbXB0eSxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICB6aXBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSA1IGRpZ2l0IFppcCBDb2RlLic7XG4gICAgemlwQ29kZS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKHppcENvZGUudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgY29udGFpbiBhbiB6aXBDb2RlIGFkZHJlc3MsXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgemlwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGEgNSBkaWdpdCBaaXAgQ29kZS4nO1xuICAgIHppcENvZGUuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuemlwQ29kZS5vbmlucHV0ID0gKCkgPT4ge1xuICBpZiAoemlwQ29kZS52YWxpZGl0eS52YWxpZCkge1xuICAgIHppcENvZGVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHppcENvZGUuY2xhc3NOYW1lID0gJ2lzVmFsaWQnO1xuICB9IGVsc2UgaWYgKCF6aXBDb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd1ppcENvZGVFcnJvcigpO1xuICAgIHppcENvZGUuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGFzc3dvcmQuaWQgPSAncGFzc3dvcmQnO1xucGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XG5wYXNzd29yZC5yZXF1aXJlZCA9IHRydWU7XG5wYXNzd29yZC5wYXR0ZXJuID0gJyg/PS4qZCkoPz0uKlthLXpBLVpdKS57Nix9JztcbnBhc3N3b3JkLm1pbkxlbmd0aCA9IDY7XG5wYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdkZWYtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbnBhc3N3b3JkTGFiZWwudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQnO1xuY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnBhc3N3b3JkRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3Qgc2hvd1Bhc3N3b3JkRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgaXMgZW1wdHksXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlciBhIHBhc3N3b3JkJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCAmJiBwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIC8vIElmIHRoZSBmaWVsZCBkb2Vzbid0IGNvbnRhaW4gYW4gcGFzc3dvcmQgYWRkcmVzcyxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJzYgY2hhcmFjdGVycyBsb25nIHdpdGggYSBudW1iZXIgYW5kIGEgbGV0dGVyJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgY29udGFpbiBhbiBwYXNzd29yZCBhZGRyZXNzLFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnTXVzdCBiZSA2IGNoYXJlY3RlcnMgbG9uZyAnO1xuICAgIHBhc3N3b3JkLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgY29udGFpbiBhbiBwYXNzd29yZCBhZGRyZXNzLFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnTXVzdCBjb250YWluIGEgbnVtYmVyIGFuZCBhIGxldHRlcic7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxucGFzc3dvcmQub25pbnB1dCA9ICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpc1ZhbGlkXCI7XG4gIH0gZWxzZSBpZiAoIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSBcIm5vdFZhbGlkXCI7XG4gIH1cbn07XG5cbmNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wYXNzd29yZENvbmZpcm0uaWQgPSAncGFzc3dvcmQtY29uZmlybSc7XG5wYXNzd29yZENvbmZpcm0udHlwZSA9ICdwYXNzd29yZCc7XG5wYXNzd29yZENvbmZpcm0ucmVxdWlyZWQgPSB0cnVlO1xucGFzc3dvcmRDb25maXJtLmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRDb25maXJtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5wYXNzd29yZENvbmZpcm1MYWJlbC50ZXh0Q29udGVudCA9ICdDb25maXJtIFBhc3N3b3JkJztcbmNvbnN0IHBhc3N3b3JkQ29uZmlybUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucGFzc3dvcmRDb25maXJtRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3QgaW5wdXRzID0gW1xuICBlbWFpbExhYmVsLFxuICBlbWFpbCxcbiAgZW1haWxFcnJvcixcbiAgY291bnRyeUxhYmVsLFxuICBjb3VudHJ5LFxuICBjb3VudHJ5RXJyb3IsXG4gIHppcENvZGVMYWJlbCxcbiAgemlwQ29kZSxcbiAgemlwQ29kZUVycm9yLFxuICBwYXNzd29yZExhYmVsLFxuICBwYXNzd29yZCxcbiAgcGFzc3dvcmRFcnJvcixcbiAgcGFzc3dvcmRDb25maXJtTGFiZWwsXG4gIHBhc3N3b3JkQ29uZmlybSxcbiAgcGFzc3dvcmRDb25maXJtRXJyb3IsXG5dO1xuXG4vLyBwdXQgZWFjaCBwYWlyIG9mIGxhYmVsLCBpbnB1dCwgYW5kIGVycm9yIHNwYW4gaW50byBhIGZvcm1GaWVsZCBkaXYgZm9yIHN0eWxpbmdcbmZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSArPSAzKSB7XG4gIGNvbnN0IGZvcm1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgnZm9ybS1maWVsZCcpO1xuICBjb25zdCBncmFiYmVyID0gaSArIDE7XG4gIGNvbnN0IGdyYWJiZXIyID0gaSArIDI7XG4gIGZvcm1GaWVsZC5hcHBlbmRDaGlsZChpbnB1dHNbaV0pO1xuICBmb3JtRmllbGQuYXBwZW5kQ2hpbGQoaW5wdXRzW2dyYWJiZXJdKTtcbiAgZm9ybUZpZWxkLmFwcGVuZENoaWxkKGlucHV0c1tncmFiYmVyMl0pO1xuXG4gIC8vICAgY29uc3QgZXJyb3JcbiAgLy8gICBjb25zb2xlLmxvZyhpbnB1dHNbZ3JhYmJlcl0uaWQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1GaWVsZCk7XG59XG5cbmNvbnN0IHN1Ym1pdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zdWJtaXRCdG4uaWQgPSAnc3VibWl0LWJ1dHRvbic7XG5zdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbnN1Ym1pdEJveC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCb3gpO1xuXG5zdWJtaXRCdG4ub25jbGljayA9IChlKSA9PiB7XG4gIC8vIGlmIHRoZSBlbWFpbCBmaWVsZCBpcyB2YWxpZCwgd2UgbGV0IHRoZSBmb3JtIHN1Ym1pdFxuICBpZiAoIWVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgLy8gSWYgaXQgaXNuJ3QsIHdlIGRpc3BsYXkgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZVxuICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGlmICghemlwQ29kZS52YWxpZGl0eS52YWxpZCkge1xuICAgIC8vIElmIGl0IGlzbid0LCB3ZSBkaXNwbGF5IGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2VcbiAgICBzaG93WmlwQ29kZUVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5mb3JtQ2FyZC5hcHBlbmRDaGlsZChmb3JtKTtcblxuZGlzcGxheS5hcHBlbmQoZm9ybUNhcmQpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG4vLyBqcyBzdHlsZSB0aGF0IG91Z2h0IHRvIGJlIHJlcGxhY2VkIHdpdGhpbiBzdHlsZS5jc3NcbnN1Ym1pdEJ0bi5zdHlsZS53aWR0aCA9ICcxNTBweCc7XG5cbnN1Ym1pdEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuc3VibWl0Qm94LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5zdWJtaXRCb3guc3R5bGUubWFyZ2luVG9wID0gJzVweCc7XG5cbmZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvcm0uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvcm0uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuZm9ybS5zdHlsZS53aWR0aCA9ICcyNzVweCc7XG5cbmZvcm1DYXJkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5mb3JtQ2FyZC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuZm9ybUNhcmQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuZm9ybUNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlc21va2UnO1xuZm9ybUNhcmQuc3R5bGUucGFkZGluZyA9ICc0MHB4JztcblxuZGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuZGlzcGxheS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbmRpc3BsYXkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbmRpc3BsYXkuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmRpc3BsYXkuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9