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

input,
select {
    height: 31px;
    font-size: 15px;
    color: rgb(39, 39, 39);
    padding: 4px;
    border: 2px solid #cccdce;
    border-radius: 5px;
    border-color: rgba(56, 55, 55, 0.356);
    min-width: 250px;
}

.def-input {
    border-color: rgba(56, 55, 55, 0.356);
}

select {
    background-color: white;
    height: 43px;
}

.notValid {
    outline: none;
    border-color: red;
}

.isValid {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;IACZ,eAAe;IACf,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;;;;;GAMG;;;AAGH;;;;;;;;;;;;;;;;;;;;;;;;GAwBG;AACH;;;;;GAKG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,UAAU;AACd","sourcesContent":[":root {\n    --theme1: rgb(47, 112, 159);\n    /* rgb(158, 101, 125); */\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-field {\n    margin: 0px 0 7px 0;\n    display: flex;\n    flex-direction: column;\n}\n\ninput,\nselect {\n    height: 31px;\n    font-size: 15px;\n    color: rgb(39, 39, 39);\n    padding: 4px;\n    border: 2px solid #cccdce;\n    border-radius: 5px;\n    border-color: rgba(56, 55, 55, 0.356);\n    min-width: 250px;\n}\n\n.def-input {\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\nselect {\n    background-color: white;\n    height: 43px;\n}\n\n.notValid {\n    outline: none;\n    border-color: red;\n}\n\n.isValid {\n    outline: none;\n    border-color: rgb(22, 201, 46);\n}\n/* \ninput:focus {\n    background-color: rgba(0, 109, 252, 0.13);\n    outline: none;\n    border-color: var(--theme1);\n    box-shadow: 8px 8px 12px 0 var(--theme1)\n} */\n\n\n/* input:valid {\n    background-color: rgba(0, 252, 71, 0.13);\n    outline: none;\n    border-color: rgb(22, 201, 46);\n}\n\n\ninput:not(:focus):placeholder-shown:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\ninput:focus:placeholder-shown:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: rgba(56, 55, 55, 0.356);\n}\n\ninput:invalid{\n    background-color: rgba(252, 0, 0, 0.13);\n    outline: none;\n    border-color: red;\n    box-shadow: 8px 8px 12px 0 red\n} */\n/* input:focus {\n    background-color: rgba(0, 109, 252, 0.13);\n    outline: none;\n    border-color: var(--theme1);\n    box-shadow: 3px 3px 2px 0 var(--theme1)\n} */\n\n.error {\n    display: flex;\n    align-items: center;\n    min-height: 17px;\n    width: 100%;\n    font-size: 13px;\n    color: red;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/countries.js":
/*!**************************!*\
  !*** ./src/countries.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module to store a whole bunch of country options

const countryOptions = [
  { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Åland Islands', label: 'Åland Islands' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' },
  { value: 'American Samoa', label: 'American Samoa' },
  { value: 'Andorra', label: 'Andorra' },
  { value: 'Angola', label: 'Angola' },
  { value: 'Anguilla', label: 'Anguilla' },
  { value: 'Antarctica', label: 'Antarctica' },
  { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Armenia', label: 'Armenia' },
  { value: 'Aruba', label: 'Aruba' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Azerbaijan', label: 'Azerbaijan' },
  { value: 'Bahamas', label: 'Bahamas' },
  { value: 'Bahrain', label: 'Bahrain' },
  { value: 'Bangladesh', label: 'Bangladesh' },
  { value: 'Barbados', label: 'Barbados' },
  { value: 'Belarus', label: 'Belarus' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Belize', label: 'Belize' },
  { value: 'Benin', label: 'Benin' },
  { value: 'Bermuda', label: 'Bermuda' },
  { value: 'Bhutan', label: 'Bhutan' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
  { value: 'Botswana', label: 'Botswana' },
  { value: 'Bouvet Island', label: 'Bouvet Island' },
  { value: 'Brazil', label: 'Brazil' },
  {
    value: 'British Indian Ocean Territory',
    label: 'British Indian Ocean Territory',
  },
  { value: 'Brunei Darussalam', label: 'Brunei Darussalam' },
  { value: 'Bulgaria', label: 'Bulgaria' },
  { value: 'Burkina Faso', label: 'Burkina Faso' },
  { value: 'Burundi', label: 'Burundi' },
  { value: 'Cambodia', label: 'Cambodia' },
  { value: 'Cameroon', label: 'Cameroon' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Cape Verde', label: 'Cape Verde' },
  { value: 'Cayman Islands', label: 'Cayman Islands' },
  { value: 'Central African Republic', label: 'Central African Republic' },
  { value: 'Chad', label: 'Chad' },
  { value: 'Chile', label: 'Chile' },
  { value: 'China', label: 'China' },
  { value: 'Christmas Island', label: 'Christmas Island' },
  { value: 'Cocos (Keeling) Islands', label: 'Cocos (Keeling) Islands' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Comoros', label: 'Comoros' },
  { value: 'Congo', label: 'Congo' },
  {
    value: 'Congo, The Democratic Republic of The',
    label: 'Congo, The Democratic Republic of The',
  },
  { value: 'Cook Islands', label: 'Cook Islands' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: "Cote D'ivoire", label: "Cote D'ivoire" },
  { value: 'Croatia', label: 'Croatia' },
  { value: 'Cuba', label: 'Cuba' },
  { value: 'Curaçao', label: 'Curaçao' },
  { value: 'Cyprus', label: 'Cyprus' },
  { value: 'Czech Republic', label: 'Czech Republic' },
  { value: 'Denmark', label: 'Denmark' },
  { value: 'Djibouti', label: 'Djibouti' },
  { value: 'Dominica', label: 'Dominica' },
  { value: 'Dominican Republic', label: 'Dominican Republic' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'Egypt', label: 'Egypt' },
  { value: 'El Salvador', label: 'El Salvador' },
  { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
  { value: 'Eritrea', label: 'Eritrea' },
  { value: 'Estonia', label: 'Estonia' },
  { value: 'Ethiopia', label: 'Ethiopia' },
  {
    value: 'Falkland Islands (Malvinas)',
    label: 'Falkland Islands (Malvinas)',
  },
  { value: 'Faroe Islands', label: 'Faroe Islands' },
  { value: 'Fiji', label: 'Fiji' },
  { value: 'Finland', label: 'Finland' },
  { value: 'France', label: 'France' },
  { value: 'French Guiana', label: 'French Guiana' },
  { value: 'French Polynesia', label: 'French Polynesia' },
  {
    value: 'French Southern Territories',
    label: 'French Southern Territories',
  },
  { value: 'Gabon', label: 'Gabon' },
  { value: 'Gambia', label: 'Gambia' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Gibraltar', label: 'Gibraltar' },
  { value: 'Greece', label: 'Greece' },
  { value: 'Greenland', label: 'Greenland' },
  { value: 'Grenada', label: 'Grenada' },
  { value: 'Guadeloupe', label: 'Guadeloupe' },
  { value: 'Guam', label: 'Guam' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Guernsey', label: 'Guernsey' },
  { value: 'Guinea', label: 'Guinea' },
  { value: 'Guinea-bissau', label: 'Guinea-bissau' },
  { value: 'Guyana', label: 'Guyana' },
  { value: 'Haiti', label: 'Haiti' },
  {
    value: 'Heard Island and Mcdonald Islands',
    label: 'Heard Island and Mcdonald Islands',
  },
  {
    value: 'Holy See (Vatican City State)',
    label: 'Holy See (Vatican City State)',
  },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Hong Kong', label: 'Hong Kong' },
  { value: 'Hungary', label: 'Hungary' },
  { value: 'Iceland', label: 'Iceland' },
  { value: 'India', label: 'India' },
  { value: 'Indonesia', label: 'Indonesia' },
  { value: 'Iran, Islamic Republic of', label: 'Iran, Islamic Republic of' },
  { value: 'Iraq', label: 'Iraq' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Isle of Man', label: 'Isle of Man' },
  { value: 'Israel', label: 'Israel' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Jamaica', label: 'Jamaica' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Jersey', label: 'Jersey' },
  { value: 'Jordan', label: 'Jordan' },
  { value: 'Kazakhstan', label: 'Kazakhstan' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Kiribati', label: 'Kiribati' },
  {
    value: "Korea, Democratic People's Republic of",
    label: "Korea, Democratic People's Republic of",
  },
  { value: 'Korea, Republic of', label: 'Korea, Republic of' },
  { value: 'Kuwait', label: 'Kuwait' },
  { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
  {
    value: "Lao People's Democratic Republic",
    label: "Lao People's Democratic Republic",
  },
  { value: 'Latvia', label: 'Latvia' },
  { value: 'Lebanon', label: 'Lebanon' },
  { value: 'Lesotho', label: 'Lesotho' },
  { value: 'Liberia', label: 'Liberia' },
  { value: 'Libyan Arab Jamahiriya', label: 'Libyan Arab Jamahiriya' },
  { value: 'Liechtenstein', label: 'Liechtenstein' },
  { value: 'Lithuania', label: 'Lithuania' },
  { value: 'Luxembourg', label: 'Luxembourg' },
  { value: 'Macao', label: 'Macao' },
  {
    value: 'Macedonia, The Former Yugoslav Republic of',
    label: 'Macedonia, The Former Yugoslav Republic of',
  },
  { value: 'Madagascar', label: 'Madagascar' },
  { value: 'Malawi', label: 'Malawi' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Maldives', label: 'Maldives' },
  { value: 'Mali', label: 'Mali' },
  { value: 'Malta', label: 'Malta' },
  { value: 'Marshall Islands', label: 'Marshall Islands' },
  { value: 'Martinique', label: 'Martinique' },
  { value: 'Mauritania', label: 'Mauritania' },
  { value: 'Mauritius', label: 'Mauritius' },
  { value: 'Mayotte', label: 'Mayotte' },
  { value: 'Mexico', label: 'Mexico' },
  {
    value: 'Micronesia, Federated States of',
    label: 'Micronesia, Federated States of',
  },
  { value: 'Moldova, Republic of', label: 'Moldova, Republic of' },
  { value: 'Monaco', label: 'Monaco' },
  { value: 'Mongolia', label: 'Mongolia' },
  { value: 'Montenegro', label: 'Montenegro' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Morocco', label: 'Morocco' },
  { value: 'Mozambique', label: 'Mozambique' },
  { value: 'Myanmar', label: 'Myanmar' },
  { value: 'Namibia', label: 'Namibia' },
  { value: 'Nauru', label: 'Nauru' },
  { value: 'Nepal', label: 'Nepal' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'New Caledonia', label: 'New Caledonia' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'Niue', label: 'Niue' },
  { value: 'Norfolk Island', label: 'Norfolk Island' },
  { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Oman', label: 'Oman' },
  { value: 'Pakistan', label: 'Pakistan' },
  { value: 'Palau', label: 'Palau' },
  {
    value: 'Palestinian Territory, Occupied',
    label: 'Palestinian Territory, Occupied',
  },
  { value: 'Panama', label: 'Panama' },
  { value: 'Papua New Guinea', label: 'Papua New Guinea' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Peru', label: 'Peru' },
  { value: 'Philippines', label: 'Philippines' },
  { value: 'Pitcairn', label: 'Pitcairn' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'Puerto Rico', label: 'Puerto Rico' },
  { value: 'Qatar', label: 'Qatar' },
  { value: 'Reunion', label: 'Reunion' },
  { value: 'Romania', label: 'Romania' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Saint Helena', label: 'Saint Helena' },
  { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucia', label: 'Saint Lucia' },
  { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
  {
    value: 'Saint Vincent and The Grenadines',
    label: 'Saint Vincent and The Grenadines',
  },
  { value: 'Samoa', label: 'Samoa' },
  { value: 'San Marino', label: 'San Marino' },
  { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
  { value: 'Senegal', label: 'Senegal' },
  { value: 'Serbia', label: 'Serbia' },
  { value: 'Seychelles', label: 'Seychelles' },
  { value: 'Sierra Leone', label: 'Sierra Leone' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Slovakia', label: 'Slovakia' },
  { value: 'Slovenia', label: 'Slovenia' },
  { value: 'Solomon Islands', label: 'Solomon Islands' },
  { value: 'Somalia', label: 'Somalia' },
  { value: 'South Africa', label: 'South Africa' },
  {
    value: 'South Georgia and The South Sandwich Islands',
    label: 'South Georgia and The South Sandwich Islands',
  },
  { value: 'Spain', label: 'Spain' },
  { value: 'Sri Lanka', label: 'Sri Lanka' },
  { value: 'Sudan', label: 'Sudan' },
  { value: 'Suriname', label: 'Suriname' },
  { value: 'Svalbard and Jan Mayen', label: 'Svalbard and Jan Mayen' },
  { value: 'Eswatini', label: 'Eswatini' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Switzerland', label: 'Switzerland' },
  { value: 'Syrian Arab Republic', label: 'Syrian Arab Republic' },
  { value: 'Taiwan (ROC)', label: 'Taiwan (ROC)' },
  { value: 'Tajikistan', label: 'Tajikistan' },
  {
    value: 'Tanzania, United Republic of',
    label: 'Tanzania, United Republic of',
  },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Timor-leste', label: 'Timor-leste' },
  { value: 'Togo', label: 'Togo' },
  { value: 'Tokelau', label: 'Tokelau' },
  { value: 'Tonga', label: 'Tonga' },
  { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
  { value: 'Tunisia', label: 'Tunisia' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Turkmenistan', label: 'Turkmenistan' },
  { value: 'Turks and Caicos Islands', label: 'Turks and Caicos Islands' },
  { value: 'Tuvalu', label: 'Tuvalu' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United States', label: 'United States' },
  {
    value: 'United States Minor Outlying Islands',
    label: 'United States Minor Outlying Islands',
  },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Uzbekistan', label: 'Uzbekistan' },
  { value: 'Vanuatu', label: 'Vanuatu' },
  { value: 'Venezuela', label: 'Venezuela' },
  { value: 'Vietnam', label: 'Vietnam' },
  { value: 'Virgin Islands, British', label: 'Virgin Islands, British' },
  { value: 'Virgin Islands, U.S.', label: 'Virgin Islands, U.S.' },
  { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
  { value: 'Western Sahara', label: 'Western Sahara' },
  { value: 'Yemen', label: 'Yemen' },
  { value: 'Zambia', label: 'Zambia' },
  { value: 'Zimbabwe', label: 'Zimbabwe' },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countryOptions);


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Factory function to create a collect form data and put it in a user object

const newUser = (uEmail, uCountry, uZipCode, uPassword, uPasswordConfirm) => {
  const email = uEmail;
  const country = uCountry;
  const zipCode = uZipCode;
  const password = uPassword;
  const passwordConfirm = uPasswordConfirm;

  return {
    email,
    country,
    zipCode,
    password,
    passwordConfirm,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newUser);


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
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries */ "./src/countries.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");




// Create page a form DOM elements to hang everything on
const content = document.getElementById('content');

const display = document.createElement('div');
display.id = 'display';

const formCard = document.createElement('div');
formCard.id = 'form-card';

const form = document.createElement('form');
form.id = 'form';
form.noValidate = true;

// INPUT FIELD CREATION AND CUSTOM VALIDITY----------------

// EMAIL
const email = document.createElement('input');
email.id = 'email';
email.type = 'email';
email.name = 'email';
email.required = true;
email.placeholder = 'Enter your email address';
email.minLength = 3;
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

// COUNTRY
const country = document.createElement('select');
country.id = 'country';
country.required = true;
country.classList.add('def-input');
const countryLabel = document.createElement('label');
countryLabel.classList.add('labels');
countryLabel.textContent = 'Country';
const countryError = document.createElement('span');
countryError.classList.add('error');
// Default option display on load
const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.textContent = 'Select country';
country.appendChild(defaultOption);
// Create an option from each country in countryOptions and put it in the select list
for (let i = 0; i < _countries__WEBPACK_IMPORTED_MODULE_1__["default"].length; i += 1) {
  const option = document.createElement('option');
  option.value = _countries__WEBPACK_IMPORTED_MODULE_1__["default"][i].value;
  option.textContent = _countries__WEBPACK_IMPORTED_MODULE_1__["default"][i].label;
  country.appendChild(option);
}

const showCountryError = () => {
  if (country.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    countryError.textContent = 'Select country';
    country.className = 'notValid';
  }
};

country.oninput = () => {
  if (country.validity.valid) {
    countryError.textContent = '';
    country.className = 'isValid';
  } else if (!country.validity.valid) {
    showCountryError();
    country.className = 'notValid';
  }
};

// ZIP CODE
const zipCode = document.createElement('input');
zipCode.id = 'zip-code';
zipCode.type = 'text';
zipCode.required = true;
zipCode.pattern = '[0-9]{5}';
zipCode.maxLength = 5;
zipCode.placeholder = 'Enter a 5 digit Zip Code';
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

// PASSWORD
const password = document.createElement('input');
password.id = 'password';
password.type = 'password';
password.required = true;
password.pattern = '(?=.*?[0-9])(?=.*?[A-Za-z]).+';
password.minLength = 6;
password.placeholder = '6 char. Letter and number';
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
    // If the field doesn't match letter+number pattern or is too short,
    // display the following error message.
    passwordError.textContent = '6 characters long with a number and a letter';
    password.className = 'notValid';
  } else if (password.validity.tooShort) {
    // If the field doesn't meet minLength,
    // display the following error message.
    passwordError.textContent = 'Must be 6 charecters long ';
    password.className = 'notValid';
  } else if (password.validity.patternMismatch) {
    // If the field doesn't match letter+number pattern,
    // display the following error message.
    passwordError.textContent = 'Must contain a number and a letter';
    password.className = 'notValid';
  }
};

password.oninput = () => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    password.className = 'isValid';
  } else if (!password.validity.valid) {
    showPasswordError();
    password.className = 'notValid';
  }
};

// PASSWORD CONFIRM
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

const showPasswordConfirmError = () => {
  if (passwordConfirm.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordConfirmError.textContent = 'Confirm your password';
    passwordConfirm.className = 'notValid';
  }
};

passwordConfirm.oninput = () => {
  // const passwordGrabber = document.getElementById('password');
  if (passwordConfirm.value !== password.value) {
    // If password confirm doesn't match password
    passwordConfirmError.textContent = 'Passwords do not match';
    passwordConfirm.className = 'notValid';
  } else if (passwordConfirm.validity.valid) {
    passwordConfirmError.textContent = '';
    passwordConfirm.className = 'isValid';
  } else if (!passwordConfirm.validity.valid) {
    showPasswordConfirmError();
    passwordConfirm.className = 'notValid';
  }
};

// Put those elements in an array to loop through for DOM creation below.
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

// Put each group of label, input, and error span into a formField div for styling.
for (let i = 0; i < inputs.length; i += 3) {
  const formField = document.createElement('div');
  formField.classList.add('form-field');
  const grabber = i + 1;
  const grabber2 = i + 2;
  formField.appendChild(inputs[i]);
  formField.appendChild(inputs[grabber]);
  formField.appendChild(inputs[grabber2]);

  form.appendChild(formField);
}

// SUBMIT SECTION -----------------------------------------
const submitBox = document.createElement('div');
const submitBtn = document.createElement('button');
submitBtn.id = 'submit-button';
submitBtn.textContent = 'Submit';
submitBox.appendChild(submitBtn);
form.appendChild(submitBox);

submitBtn.onclick = (e) => {
  // counter to verify each requirement is met and form may be submitted
  let verify = 0;
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  } else {
    verify += 1;
  }
  if (!country.validity.valid) {
    // If it isn't, we display an appropriate error message
    showCountryError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  } else {
    verify += 1;
  }
  if (!zipCode.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipCodeError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  } else {
    verify += 1;
  }
  if (!password.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  } else {
    verify += 1;
  }
  if (!passwordConfirm.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordConfirmError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  } else if (passwordConfirm.value !== password.value) {
    // If the confirm password field doesn't match password field,
    // display the following error message.
    passwordConfirmError.textContent = 'Passwords do not match';
    passwordConfirm.className = 'notValid';
    e.preventDefault();
  } else {
    verify += 1;
  }
  // If all verifications are met, put all input data into a newUser object,
  // Alert displaying that user info and Submit.
  if (verify === 5) {
    const userEmail = email.value;
    const userCountry = country.value;
    const userZipCode = zipCode.value;
    const userPassword = password.value;
    const userPasswordConfirm = passwordConfirm.value;
    const userData = (0,_user__WEBPACK_IMPORTED_MODULE_2__["default"])(
      userEmail,
      userCountry,
      userZipCode,
      userPassword,
      userPasswordConfirm,
    );
    alert(JSON.stringify(userData));
  }
};

// PUT ALL OF THAT ON THE PAGE ----------------------------
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFVBQVUsT0FBTyw0QkFBNEIsTUFBTSxTQUFTLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxnQ0FBZ0Msa0NBQWtDLDZCQUE2QixLQUFLLE9BQU8sZ0JBQWdCLGlCQUFpQixnREFBZ0QsR0FBRyxpQkFBaUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsR0FBRyxvQkFBb0IsbUJBQW1CLHNCQUFzQiw2QkFBNkIsbUJBQW1CLGdDQUFnQyx5QkFBeUIsNENBQTRDLHVCQUF1QixHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxZQUFZLDhCQUE4QixtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQix3QkFBd0IsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0IsZ0RBQWdELG9CQUFvQixrQ0FBa0Msa0RBQWtELHdCQUF3QiwrQ0FBK0Msb0JBQW9CLHFDQUFxQyxHQUFHLGtEQUFrRCw4Q0FBOEMsb0JBQW9CLDRDQUE0QyxHQUFHLDBDQUEwQyw4Q0FBOEMsb0JBQW9CLDRDQUE0QyxHQUFHLGtCQUFrQiw4Q0FBOEMsb0JBQW9CLHdCQUF3Qix3Q0FBd0Msb0JBQW9CLGdEQUFnRCxvQkFBb0Isa0NBQWtDLGlEQUFpRCxjQUFjLG9CQUFvQiwwQkFBMEIsdUJBQXVCLGtCQUFrQixzQkFBc0IsaUJBQWlCLEdBQUcscUJBQXFCO0FBQ3I2RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3ZHMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQSxJQUFJLDRDQUE0QztBQUNoRCxJQUFJLGdEQUFnRDtBQUNwRCxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtEQUFrRDtBQUN0RCxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLDREQUE0RDtBQUNoRSxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtFQUFrRTtBQUN0RSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLGdEQUFnRDtBQUNwRCxJQUFJLGtDQUFrQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSx3REFBd0Q7QUFDNUQsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSw4Q0FBOEM7QUFDbEQsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSwwQ0FBMEM7QUFDOUMsSUFBSSxrREFBa0Q7QUFDdEQsSUFBSSxzRUFBc0U7QUFDMUUsSUFBSSw4QkFBOEI7QUFDbEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxzREFBc0Q7QUFDMUQsSUFBSSxvRUFBb0U7QUFDeEUsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxnQ0FBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksOENBQThDO0FBQ2xELElBQUksMENBQTBDO0FBQzlDLElBQUksZ0RBQWdEO0FBQ3BELElBQUksb0NBQW9DO0FBQ3hDLElBQUksOEJBQThCO0FBQ2xDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksa0RBQWtEO0FBQ3RELElBQUksb0NBQW9DO0FBQ3hDLElBQUksc0NBQXNDO0FBQzFDLElBQUksc0NBQXNDO0FBQzFDLElBQUksMERBQTBEO0FBQzlELElBQUksb0NBQW9DO0FBQ3hDLElBQUksZ0NBQWdDO0FBQ3BDLElBQUksNENBQTRDO0FBQ2hELElBQUksd0RBQXdEO0FBQzVELElBQUksb0NBQW9DO0FBQ3hDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksc0NBQXNDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLGdEQUFnRDtBQUNwRCxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLGdEQUFnRDtBQUNwRCxJQUFJLHNEQUFzRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSwwQ0FBMEM7QUFDOUMsSUFBSSw4QkFBOEI7QUFDbEMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSxnREFBZ0Q7QUFDcEQsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSxnQ0FBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHdFQUF3RTtBQUM1RSxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLDRDQUE0QztBQUNoRCxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLHNDQUFzQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSwwREFBMEQ7QUFDOUQsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSwwQ0FBMEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksa0NBQWtDO0FBQ3RDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksa0VBQWtFO0FBQ3RFLElBQUksZ0RBQWdEO0FBQ3BELElBQUksd0NBQXdDO0FBQzVDLElBQUksMENBQTBDO0FBQzlDLElBQUksZ0NBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLHNEQUFzRDtBQUMxRCxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSw4REFBOEQ7QUFDbEUsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSwwQ0FBMEM7QUFDOUMsSUFBSSwwQ0FBMEM7QUFDOUMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSwwQ0FBMEM7QUFDOUMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSw0Q0FBNEM7QUFDaEQsSUFBSSxnREFBZ0Q7QUFDcEQsSUFBSSw0Q0FBNEM7QUFDaEQsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxvQ0FBb0M7QUFDeEMsSUFBSSw4QkFBOEI7QUFDbEMsSUFBSSxrREFBa0Q7QUFDdEQsSUFBSSxzRUFBc0U7QUFDMUUsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSw4QkFBOEI7QUFDbEMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxnQ0FBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksa0NBQWtDO0FBQ3RDLElBQUksc0RBQXNEO0FBQzFELElBQUksc0NBQXNDO0FBQzFDLElBQUksOEJBQThCO0FBQ2xDLElBQUksNENBQTRDO0FBQ2hELElBQUksc0NBQXNDO0FBQzFDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksc0NBQXNDO0FBQzFDLElBQUksNENBQTRDO0FBQ2hELElBQUksZ0NBQWdDO0FBQ3BDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksOENBQThDO0FBQ2xELElBQUksZ0VBQWdFO0FBQ3BFLElBQUksNENBQTRDO0FBQ2hELElBQUksd0VBQXdFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLGdFQUFnRTtBQUNwRSxJQUFJLDhDQUE4QztBQUNsRCxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLDhDQUE4QztBQUNsRCxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLG9EQUFvRDtBQUN4RCxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLDhDQUE4QztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxrRUFBa0U7QUFDdEUsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSxrQ0FBa0M7QUFDdEMsSUFBSSw0Q0FBNEM7QUFDaEQsSUFBSSw4REFBOEQ7QUFDbEUsSUFBSSw4Q0FBOEM7QUFDbEQsSUFBSSwwQ0FBMEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksc0NBQXNDO0FBQzFDLElBQUksNENBQTRDO0FBQ2hELElBQUksOEJBQThCO0FBQ2xDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksZ0NBQWdDO0FBQ3BDLElBQUksNERBQTREO0FBQ2hFLElBQUksb0NBQW9DO0FBQ3hDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksOENBQThDO0FBQ2xELElBQUksc0VBQXNFO0FBQzFFLElBQUksa0NBQWtDO0FBQ3RDLElBQUksa0NBQWtDO0FBQ3RDLElBQUksb0NBQW9DO0FBQ3hDLElBQUksOERBQThEO0FBQ2xFLElBQUksa0RBQWtEO0FBQ3RELElBQUksZ0RBQWdEO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLDBDQUEwQztBQUM5QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLG9DQUFvQztBQUN4QyxJQUFJLG9FQUFvRTtBQUN4RSxJQUFJLDhEQUE4RDtBQUNsRSxJQUFJLHdEQUF3RDtBQUM1RCxJQUFJLGtEQUFrRDtBQUN0RCxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLGtDQUFrQztBQUN0QyxJQUFJLHNDQUFzQztBQUMxQzs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RTOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDbEJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDWjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHlEQUF5RCxpQkFBaUIsWUFBWSxjQUFjLG1CQUFtQjtBQUN2SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLGtEQUFjLFNBQVM7QUFDM0M7QUFDQSxpQkFBaUIsa0RBQWM7QUFDL0IsdUJBQXVCLGtEQUFjO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvY291bnRyaWVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aGVtZTE6IHJnYig0NywgMTEyLCAxNTkpO1xuICAgIC8qIHJnYigxNTgsIDEwMSwgMTI1KTsgKi9cbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDBweCAwIDdweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICAgIGhlaWdodDogMzFweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjY2RjZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZGVmLWlucHV0IHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xufVxuXG5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNDNweDtcbn1cblxuLm5vdFZhbGlkIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uaXNWYWxpZCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMiwgMjAxLCA0Nik7XG59XG4vKiBcbmlucHV0OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwOSwgMjUyLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUxKTtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggMCB2YXIoLS10aGVtZTEpXG59ICovXG5cblxuLyogaW5wdXQ6dmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjUyLCA3MSwgMC4xMyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMiwgMjAxLCA0Nik7XG59XG5cblxuaW5wdXQ6bm90KDpmb2N1cyk6cGxhY2Vob2xkZXItc2hvd246aW52YWxpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xufVxuXG5pbnB1dDpmb2N1czpwbGFjZWhvbGRlci1zaG93bjppbnZhbGlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XG59XG5cbmlucHV0OmludmFsaWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4IDAgcmVkXG59ICovXG4vKiBpbnB1dDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDksIDI1MiwgMC4xMyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lMSk7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMCB2YXIoLS10aGVtZTEpXG59ICovXG5cbi5lcnJvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBOzs7Ozs7R0FNRzs7O0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNIOzs7OztHQUtHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRoZW1lMTogcmdiKDQ3LCAxMTIsIDE1OSk7XFxuICAgIC8qIHJnYigxNTgsIDEwMSwgMTI1KTsgKi9cXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb3JtLWZpZWxkIHtcXG4gICAgbWFyZ2luOiAwcHggMCA3cHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjY2RjZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uZGVmLWlucHV0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNDNweDtcXG59XFxuXFxuLm5vdFZhbGlkIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pc1ZhbGlkIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjIsIDIwMSwgNDYpO1xcbn1cXG4vKiBcXG5pbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTA5LCAyNTIsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lMSk7XFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTJweCAwIHZhcigtLXRoZW1lMSlcXG59ICovXFxuXFxuXFxuLyogaW5wdXQ6dmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1MiwgNzEsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMiwgMjAxLCA0Nik7XFxufVxcblxcblxcbmlucHV0Om5vdCg6Zm9jdXMpOnBsYWNlaG9sZGVyLXNob3duOmludmFsaWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6cGxhY2Vob2xkZXItc2hvd246aW52YWxpZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggMCByZWRcXG59ICovXFxuLyogaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwOSwgMjUyLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZTEpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAwIHZhcigtLXRoZW1lMSlcXG59ICovXFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIE1vZHVsZSB0byBzdG9yZSBhIHdob2xlIGJ1bmNoIG9mIGNvdW50cnkgb3B0aW9uc1xuXG5jb25zdCBjb3VudHJ5T3B0aW9ucyA9IFtcbiAgeyB2YWx1ZTogJ0FmZ2hhbmlzdGFuJywgbGFiZWw6ICdBZmdoYW5pc3RhbicgfSxcbiAgeyB2YWx1ZTogJ8OFbGFuZCBJc2xhbmRzJywgbGFiZWw6ICfDhWxhbmQgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0FsYmFuaWEnLCBsYWJlbDogJ0FsYmFuaWEnIH0sXG4gIHsgdmFsdWU6ICdBbGdlcmlhJywgbGFiZWw6ICdBbGdlcmlhJyB9LFxuICB7IHZhbHVlOiAnQW1lcmljYW4gU2Ftb2EnLCBsYWJlbDogJ0FtZXJpY2FuIFNhbW9hJyB9LFxuICB7IHZhbHVlOiAnQW5kb3JyYScsIGxhYmVsOiAnQW5kb3JyYScgfSxcbiAgeyB2YWx1ZTogJ0FuZ29sYScsIGxhYmVsOiAnQW5nb2xhJyB9LFxuICB7IHZhbHVlOiAnQW5ndWlsbGEnLCBsYWJlbDogJ0FuZ3VpbGxhJyB9LFxuICB7IHZhbHVlOiAnQW50YXJjdGljYScsIGxhYmVsOiAnQW50YXJjdGljYScgfSxcbiAgeyB2YWx1ZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLCBsYWJlbDogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnIH0sXG4gIHsgdmFsdWU6ICdBcmdlbnRpbmEnLCBsYWJlbDogJ0FyZ2VudGluYScgfSxcbiAgeyB2YWx1ZTogJ0FybWVuaWEnLCBsYWJlbDogJ0FybWVuaWEnIH0sXG4gIHsgdmFsdWU6ICdBcnViYScsIGxhYmVsOiAnQXJ1YmEnIH0sXG4gIHsgdmFsdWU6ICdBdXN0cmFsaWEnLCBsYWJlbDogJ0F1c3RyYWxpYScgfSxcbiAgeyB2YWx1ZTogJ0F1c3RyaWEnLCBsYWJlbDogJ0F1c3RyaWEnIH0sXG4gIHsgdmFsdWU6ICdBemVyYmFpamFuJywgbGFiZWw6ICdBemVyYmFpamFuJyB9LFxuICB7IHZhbHVlOiAnQmFoYW1hcycsIGxhYmVsOiAnQmFoYW1hcycgfSxcbiAgeyB2YWx1ZTogJ0JhaHJhaW4nLCBsYWJlbDogJ0JhaHJhaW4nIH0sXG4gIHsgdmFsdWU6ICdCYW5nbGFkZXNoJywgbGFiZWw6ICdCYW5nbGFkZXNoJyB9LFxuICB7IHZhbHVlOiAnQmFyYmFkb3MnLCBsYWJlbDogJ0JhcmJhZG9zJyB9LFxuICB7IHZhbHVlOiAnQmVsYXJ1cycsIGxhYmVsOiAnQmVsYXJ1cycgfSxcbiAgeyB2YWx1ZTogJ0JlbGdpdW0nLCBsYWJlbDogJ0JlbGdpdW0nIH0sXG4gIHsgdmFsdWU6ICdCZWxpemUnLCBsYWJlbDogJ0JlbGl6ZScgfSxcbiAgeyB2YWx1ZTogJ0JlbmluJywgbGFiZWw6ICdCZW5pbicgfSxcbiAgeyB2YWx1ZTogJ0Jlcm11ZGEnLCBsYWJlbDogJ0Jlcm11ZGEnIH0sXG4gIHsgdmFsdWU6ICdCaHV0YW4nLCBsYWJlbDogJ0JodXRhbicgfSxcbiAgeyB2YWx1ZTogJ0JvbGl2aWEnLCBsYWJlbDogJ0JvbGl2aWEnIH0sXG4gIHsgdmFsdWU6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJywgbGFiZWw6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyB9LFxuICB7IHZhbHVlOiAnQm90c3dhbmEnLCBsYWJlbDogJ0JvdHN3YW5hJyB9LFxuICB7IHZhbHVlOiAnQm91dmV0IElzbGFuZCcsIGxhYmVsOiAnQm91dmV0IElzbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0JyYXppbCcsIGxhYmVsOiAnQnJhemlsJyB9LFxuICB7XG4gICAgdmFsdWU6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgIGxhYmVsOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcbiAgfSxcbiAgeyB2YWx1ZTogJ0JydW5laSBEYXJ1c3NhbGFtJywgbGFiZWw6ICdCcnVuZWkgRGFydXNzYWxhbScgfSxcbiAgeyB2YWx1ZTogJ0J1bGdhcmlhJywgbGFiZWw6ICdCdWxnYXJpYScgfSxcbiAgeyB2YWx1ZTogJ0J1cmtpbmEgRmFzbycsIGxhYmVsOiAnQnVya2luYSBGYXNvJyB9LFxuICB7IHZhbHVlOiAnQnVydW5kaScsIGxhYmVsOiAnQnVydW5kaScgfSxcbiAgeyB2YWx1ZTogJ0NhbWJvZGlhJywgbGFiZWw6ICdDYW1ib2RpYScgfSxcbiAgeyB2YWx1ZTogJ0NhbWVyb29uJywgbGFiZWw6ICdDYW1lcm9vbicgfSxcbiAgeyB2YWx1ZTogJ0NhbmFkYScsIGxhYmVsOiAnQ2FuYWRhJyB9LFxuICB7IHZhbHVlOiAnQ2FwZSBWZXJkZScsIGxhYmVsOiAnQ2FwZSBWZXJkZScgfSxcbiAgeyB2YWx1ZTogJ0NheW1hbiBJc2xhbmRzJywgbGFiZWw6ICdDYXltYW4gSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsIGxhYmVsOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnQ2hhZCcsIGxhYmVsOiAnQ2hhZCcgfSxcbiAgeyB2YWx1ZTogJ0NoaWxlJywgbGFiZWw6ICdDaGlsZScgfSxcbiAgeyB2YWx1ZTogJ0NoaW5hJywgbGFiZWw6ICdDaGluYScgfSxcbiAgeyB2YWx1ZTogJ0NocmlzdG1hcyBJc2xhbmQnLCBsYWJlbDogJ0NocmlzdG1hcyBJc2xhbmQnIH0sXG4gIHsgdmFsdWU6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsIGxhYmVsOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdDb2xvbWJpYScsIGxhYmVsOiAnQ29sb21iaWEnIH0sXG4gIHsgdmFsdWU6ICdDb21vcm9zJywgbGFiZWw6ICdDb21vcm9zJyB9LFxuICB7IHZhbHVlOiAnQ29uZ28nLCBsYWJlbDogJ0NvbmdvJyB9LFxuICB7XG4gICAgdmFsdWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgVGhlJyxcbiAgICBsYWJlbDogJ0NvbmdvLCBUaGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiBUaGUnLFxuICB9LFxuICB7IHZhbHVlOiAnQ29vayBJc2xhbmRzJywgbGFiZWw6ICdDb29rIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdDb3N0YSBSaWNhJywgbGFiZWw6ICdDb3N0YSBSaWNhJyB9LFxuICB7IHZhbHVlOiBcIkNvdGUgRCdpdm9pcmVcIiwgbGFiZWw6IFwiQ290ZSBEJ2l2b2lyZVwiIH0sXG4gIHsgdmFsdWU6ICdDcm9hdGlhJywgbGFiZWw6ICdDcm9hdGlhJyB9LFxuICB7IHZhbHVlOiAnQ3ViYScsIGxhYmVsOiAnQ3ViYScgfSxcbiAgeyB2YWx1ZTogJ0N1cmHDp2FvJywgbGFiZWw6ICdDdXJhw6dhbycgfSxcbiAgeyB2YWx1ZTogJ0N5cHJ1cycsIGxhYmVsOiAnQ3lwcnVzJyB9LFxuICB7IHZhbHVlOiAnQ3plY2ggUmVwdWJsaWMnLCBsYWJlbDogJ0N6ZWNoIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnRGVubWFyaycsIGxhYmVsOiAnRGVubWFyaycgfSxcbiAgeyB2YWx1ZTogJ0RqaWJvdXRpJywgbGFiZWw6ICdEamlib3V0aScgfSxcbiAgeyB2YWx1ZTogJ0RvbWluaWNhJywgbGFiZWw6ICdEb21pbmljYScgfSxcbiAgeyB2YWx1ZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsIGxhYmVsOiAnRG9taW5pY2FuIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnRWN1YWRvcicsIGxhYmVsOiAnRWN1YWRvcicgfSxcbiAgeyB2YWx1ZTogJ0VneXB0JywgbGFiZWw6ICdFZ3lwdCcgfSxcbiAgeyB2YWx1ZTogJ0VsIFNhbHZhZG9yJywgbGFiZWw6ICdFbCBTYWx2YWRvcicgfSxcbiAgeyB2YWx1ZTogJ0VxdWF0b3JpYWwgR3VpbmVhJywgbGFiZWw6ICdFcXVhdG9yaWFsIEd1aW5lYScgfSxcbiAgeyB2YWx1ZTogJ0VyaXRyZWEnLCBsYWJlbDogJ0VyaXRyZWEnIH0sXG4gIHsgdmFsdWU6ICdFc3RvbmlhJywgbGFiZWw6ICdFc3RvbmlhJyB9LFxuICB7IHZhbHVlOiAnRXRoaW9waWEnLCBsYWJlbDogJ0V0aGlvcGlhJyB9LFxuICB7XG4gICAgdmFsdWU6ICdGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcyknLFxuICAgIGxhYmVsOiAnRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ0Zhcm9lIElzbGFuZHMnLCBsYWJlbDogJ0Zhcm9lIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdGaWppJywgbGFiZWw6ICdGaWppJyB9LFxuICB7IHZhbHVlOiAnRmlubGFuZCcsIGxhYmVsOiAnRmlubGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0ZyYW5jZScsIGxhYmVsOiAnRnJhbmNlJyB9LFxuICB7IHZhbHVlOiAnRnJlbmNoIEd1aWFuYScsIGxhYmVsOiAnRnJlbmNoIEd1aWFuYScgfSxcbiAgeyB2YWx1ZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLCBsYWJlbDogJ0ZyZW5jaCBQb2x5bmVzaWEnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsXG4gICAgbGFiZWw6ICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMnLFxuICB9LFxuICB7IHZhbHVlOiAnR2Fib24nLCBsYWJlbDogJ0dhYm9uJyB9LFxuICB7IHZhbHVlOiAnR2FtYmlhJywgbGFiZWw6ICdHYW1iaWEnIH0sXG4gIHsgdmFsdWU6ICdHZW9yZ2lhJywgbGFiZWw6ICdHZW9yZ2lhJyB9LFxuICB7IHZhbHVlOiAnR2VybWFueScsIGxhYmVsOiAnR2VybWFueScgfSxcbiAgeyB2YWx1ZTogJ0doYW5hJywgbGFiZWw6ICdHaGFuYScgfSxcbiAgeyB2YWx1ZTogJ0dpYnJhbHRhcicsIGxhYmVsOiAnR2licmFsdGFyJyB9LFxuICB7IHZhbHVlOiAnR3JlZWNlJywgbGFiZWw6ICdHcmVlY2UnIH0sXG4gIHsgdmFsdWU6ICdHcmVlbmxhbmQnLCBsYWJlbDogJ0dyZWVubGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0dyZW5hZGEnLCBsYWJlbDogJ0dyZW5hZGEnIH0sXG4gIHsgdmFsdWU6ICdHdWFkZWxvdXBlJywgbGFiZWw6ICdHdWFkZWxvdXBlJyB9LFxuICB7IHZhbHVlOiAnR3VhbScsIGxhYmVsOiAnR3VhbScgfSxcbiAgeyB2YWx1ZTogJ0d1YXRlbWFsYScsIGxhYmVsOiAnR3VhdGVtYWxhJyB9LFxuICB7IHZhbHVlOiAnR3Vlcm5zZXknLCBsYWJlbDogJ0d1ZXJuc2V5JyB9LFxuICB7IHZhbHVlOiAnR3VpbmVhJywgbGFiZWw6ICdHdWluZWEnIH0sXG4gIHsgdmFsdWU6ICdHdWluZWEtYmlzc2F1JywgbGFiZWw6ICdHdWluZWEtYmlzc2F1JyB9LFxuICB7IHZhbHVlOiAnR3V5YW5hJywgbGFiZWw6ICdHdXlhbmEnIH0sXG4gIHsgdmFsdWU6ICdIYWl0aScsIGxhYmVsOiAnSGFpdGknIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0hlYXJkIElzbGFuZCBhbmQgTWNkb25hbGQgSXNsYW5kcycsXG4gICAgbGFiZWw6ICdIZWFyZCBJc2xhbmQgYW5kIE1jZG9uYWxkIElzbGFuZHMnLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsXG4gICAgbGFiZWw6ICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsXG4gIH0sXG4gIHsgdmFsdWU6ICdIb25kdXJhcycsIGxhYmVsOiAnSG9uZHVyYXMnIH0sXG4gIHsgdmFsdWU6ICdIb25nIEtvbmcnLCBsYWJlbDogJ0hvbmcgS29uZycgfSxcbiAgeyB2YWx1ZTogJ0h1bmdhcnknLCBsYWJlbDogJ0h1bmdhcnknIH0sXG4gIHsgdmFsdWU6ICdJY2VsYW5kJywgbGFiZWw6ICdJY2VsYW5kJyB9LFxuICB7IHZhbHVlOiAnSW5kaWEnLCBsYWJlbDogJ0luZGlhJyB9LFxuICB7IHZhbHVlOiAnSW5kb25lc2lhJywgbGFiZWw6ICdJbmRvbmVzaWEnIH0sXG4gIHsgdmFsdWU6ICdJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mJywgbGFiZWw6ICdJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mJyB9LFxuICB7IHZhbHVlOiAnSXJhcScsIGxhYmVsOiAnSXJhcScgfSxcbiAgeyB2YWx1ZTogJ0lyZWxhbmQnLCBsYWJlbDogJ0lyZWxhbmQnIH0sXG4gIHsgdmFsdWU6ICdJc2xlIG9mIE1hbicsIGxhYmVsOiAnSXNsZSBvZiBNYW4nIH0sXG4gIHsgdmFsdWU6ICdJc3JhZWwnLCBsYWJlbDogJ0lzcmFlbCcgfSxcbiAgeyB2YWx1ZTogJ0l0YWx5JywgbGFiZWw6ICdJdGFseScgfSxcbiAgeyB2YWx1ZTogJ0phbWFpY2EnLCBsYWJlbDogJ0phbWFpY2EnIH0sXG4gIHsgdmFsdWU6ICdKYXBhbicsIGxhYmVsOiAnSmFwYW4nIH0sXG4gIHsgdmFsdWU6ICdKZXJzZXknLCBsYWJlbDogJ0plcnNleScgfSxcbiAgeyB2YWx1ZTogJ0pvcmRhbicsIGxhYmVsOiAnSm9yZGFuJyB9LFxuICB7IHZhbHVlOiAnS2F6YWtoc3RhbicsIGxhYmVsOiAnS2F6YWtoc3RhbicgfSxcbiAgeyB2YWx1ZTogJ0tlbnlhJywgbGFiZWw6ICdLZW55YScgfSxcbiAgeyB2YWx1ZTogJ0tpcmliYXRpJywgbGFiZWw6ICdLaXJpYmF0aScgfSxcbiAge1xuICAgIHZhbHVlOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsXG4gICAgbGFiZWw6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIixcbiAgfSxcbiAgeyB2YWx1ZTogJ0tvcmVhLCBSZXB1YmxpYyBvZicsIGxhYmVsOiAnS29yZWEsIFJlcHVibGljIG9mJyB9LFxuICB7IHZhbHVlOiAnS3V3YWl0JywgbGFiZWw6ICdLdXdhaXQnIH0sXG4gIHsgdmFsdWU6ICdLeXJneXpzdGFuJywgbGFiZWw6ICdLeXJneXpzdGFuJyB9LFxuICB7XG4gICAgdmFsdWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIixcbiAgICBsYWJlbDogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLFxuICB9LFxuICB7IHZhbHVlOiAnTGF0dmlhJywgbGFiZWw6ICdMYXR2aWEnIH0sXG4gIHsgdmFsdWU6ICdMZWJhbm9uJywgbGFiZWw6ICdMZWJhbm9uJyB9LFxuICB7IHZhbHVlOiAnTGVzb3RobycsIGxhYmVsOiAnTGVzb3RobycgfSxcbiAgeyB2YWx1ZTogJ0xpYmVyaWEnLCBsYWJlbDogJ0xpYmVyaWEnIH0sXG4gIHsgdmFsdWU6ICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJywgbGFiZWw6ICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJyB9LFxuICB7IHZhbHVlOiAnTGllY2h0ZW5zdGVpbicsIGxhYmVsOiAnTGllY2h0ZW5zdGVpbicgfSxcbiAgeyB2YWx1ZTogJ0xpdGh1YW5pYScsIGxhYmVsOiAnTGl0aHVhbmlhJyB9LFxuICB7IHZhbHVlOiAnTHV4ZW1ib3VyZycsIGxhYmVsOiAnTHV4ZW1ib3VyZycgfSxcbiAgeyB2YWx1ZTogJ01hY2FvJywgbGFiZWw6ICdNYWNhbycgfSxcbiAge1xuICAgIHZhbHVlOiAnTWFjZWRvbmlhLCBUaGUgRm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mJyxcbiAgICBsYWJlbDogJ01hY2Vkb25pYSwgVGhlIEZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZicsXG4gIH0sXG4gIHsgdmFsdWU6ICdNYWRhZ2FzY2FyJywgbGFiZWw6ICdNYWRhZ2FzY2FyJyB9LFxuICB7IHZhbHVlOiAnTWFsYXdpJywgbGFiZWw6ICdNYWxhd2knIH0sXG4gIHsgdmFsdWU6ICdNYWxheXNpYScsIGxhYmVsOiAnTWFsYXlzaWEnIH0sXG4gIHsgdmFsdWU6ICdNYWxkaXZlcycsIGxhYmVsOiAnTWFsZGl2ZXMnIH0sXG4gIHsgdmFsdWU6ICdNYWxpJywgbGFiZWw6ICdNYWxpJyB9LFxuICB7IHZhbHVlOiAnTWFsdGEnLCBsYWJlbDogJ01hbHRhJyB9LFxuICB7IHZhbHVlOiAnTWFyc2hhbGwgSXNsYW5kcycsIGxhYmVsOiAnTWFyc2hhbGwgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ01hcnRpbmlxdWUnLCBsYWJlbDogJ01hcnRpbmlxdWUnIH0sXG4gIHsgdmFsdWU6ICdNYXVyaXRhbmlhJywgbGFiZWw6ICdNYXVyaXRhbmlhJyB9LFxuICB7IHZhbHVlOiAnTWF1cml0aXVzJywgbGFiZWw6ICdNYXVyaXRpdXMnIH0sXG4gIHsgdmFsdWU6ICdNYXlvdHRlJywgbGFiZWw6ICdNYXlvdHRlJyB9LFxuICB7IHZhbHVlOiAnTWV4aWNvJywgbGFiZWw6ICdNZXhpY28nIH0sXG4gIHtcbiAgICB2YWx1ZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLFxuICAgIGxhYmVsOiAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZicsXG4gIH0sXG4gIHsgdmFsdWU6ICdNb2xkb3ZhLCBSZXB1YmxpYyBvZicsIGxhYmVsOiAnTW9sZG92YSwgUmVwdWJsaWMgb2YnIH0sXG4gIHsgdmFsdWU6ICdNb25hY28nLCBsYWJlbDogJ01vbmFjbycgfSxcbiAgeyB2YWx1ZTogJ01vbmdvbGlhJywgbGFiZWw6ICdNb25nb2xpYScgfSxcbiAgeyB2YWx1ZTogJ01vbnRlbmVncm8nLCBsYWJlbDogJ01vbnRlbmVncm8nIH0sXG4gIHsgdmFsdWU6ICdNb250c2VycmF0JywgbGFiZWw6ICdNb250c2VycmF0JyB9LFxuICB7IHZhbHVlOiAnTW9yb2NjbycsIGxhYmVsOiAnTW9yb2NjbycgfSxcbiAgeyB2YWx1ZTogJ01vemFtYmlxdWUnLCBsYWJlbDogJ01vemFtYmlxdWUnIH0sXG4gIHsgdmFsdWU6ICdNeWFubWFyJywgbGFiZWw6ICdNeWFubWFyJyB9LFxuICB7IHZhbHVlOiAnTmFtaWJpYScsIGxhYmVsOiAnTmFtaWJpYScgfSxcbiAgeyB2YWx1ZTogJ05hdXJ1JywgbGFiZWw6ICdOYXVydScgfSxcbiAgeyB2YWx1ZTogJ05lcGFsJywgbGFiZWw6ICdOZXBhbCcgfSxcbiAgeyB2YWx1ZTogJ05ldGhlcmxhbmRzJywgbGFiZWw6ICdOZXRoZXJsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ05ldyBDYWxlZG9uaWEnLCBsYWJlbDogJ05ldyBDYWxlZG9uaWEnIH0sXG4gIHsgdmFsdWU6ICdOZXcgWmVhbGFuZCcsIGxhYmVsOiAnTmV3IFplYWxhbmQnIH0sXG4gIHsgdmFsdWU6ICdOaWNhcmFndWEnLCBsYWJlbDogJ05pY2FyYWd1YScgfSxcbiAgeyB2YWx1ZTogJ05pZ2VyJywgbGFiZWw6ICdOaWdlcicgfSxcbiAgeyB2YWx1ZTogJ05pZ2VyaWEnLCBsYWJlbDogJ05pZ2VyaWEnIH0sXG4gIHsgdmFsdWU6ICdOaXVlJywgbGFiZWw6ICdOaXVlJyB9LFxuICB7IHZhbHVlOiAnTm9yZm9sayBJc2xhbmQnLCBsYWJlbDogJ05vcmZvbGsgSXNsYW5kJyB9LFxuICB7IHZhbHVlOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJywgbGFiZWw6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdOb3J3YXknLCBsYWJlbDogJ05vcndheScgfSxcbiAgeyB2YWx1ZTogJ09tYW4nLCBsYWJlbDogJ09tYW4nIH0sXG4gIHsgdmFsdWU6ICdQYWtpc3RhbicsIGxhYmVsOiAnUGFraXN0YW4nIH0sXG4gIHsgdmFsdWU6ICdQYWxhdScsIGxhYmVsOiAnUGFsYXUnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ1BhbGVzdGluaWFuIFRlcnJpdG9yeSwgT2NjdXBpZWQnLFxuICAgIGxhYmVsOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXG4gIH0sXG4gIHsgdmFsdWU6ICdQYW5hbWEnLCBsYWJlbDogJ1BhbmFtYScgfSxcbiAgeyB2YWx1ZTogJ1BhcHVhIE5ldyBHdWluZWEnLCBsYWJlbDogJ1BhcHVhIE5ldyBHdWluZWEnIH0sXG4gIHsgdmFsdWU6ICdQYXJhZ3VheScsIGxhYmVsOiAnUGFyYWd1YXknIH0sXG4gIHsgdmFsdWU6ICdQZXJ1JywgbGFiZWw6ICdQZXJ1JyB9LFxuICB7IHZhbHVlOiAnUGhpbGlwcGluZXMnLCBsYWJlbDogJ1BoaWxpcHBpbmVzJyB9LFxuICB7IHZhbHVlOiAnUGl0Y2Fpcm4nLCBsYWJlbDogJ1BpdGNhaXJuJyB9LFxuICB7IHZhbHVlOiAnUG9sYW5kJywgbGFiZWw6ICdQb2xhbmQnIH0sXG4gIHsgdmFsdWU6ICdQb3J0dWdhbCcsIGxhYmVsOiAnUG9ydHVnYWwnIH0sXG4gIHsgdmFsdWU6ICdQdWVydG8gUmljbycsIGxhYmVsOiAnUHVlcnRvIFJpY28nIH0sXG4gIHsgdmFsdWU6ICdRYXRhcicsIGxhYmVsOiAnUWF0YXInIH0sXG4gIHsgdmFsdWU6ICdSZXVuaW9uJywgbGFiZWw6ICdSZXVuaW9uJyB9LFxuICB7IHZhbHVlOiAnUm9tYW5pYScsIGxhYmVsOiAnUm9tYW5pYScgfSxcbiAgeyB2YWx1ZTogJ1J1c3NpYScsIGxhYmVsOiAnUnVzc2lhJyB9LFxuICB7IHZhbHVlOiAnUndhbmRhJywgbGFiZWw6ICdSd2FuZGEnIH0sXG4gIHsgdmFsdWU6ICdTYWludCBIZWxlbmEnLCBsYWJlbDogJ1NhaW50IEhlbGVuYScgfSxcbiAgeyB2YWx1ZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsIGxhYmVsOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyB9LFxuICB7IHZhbHVlOiAnU2FpbnQgTHVjaWEnLCBsYWJlbDogJ1NhaW50IEx1Y2lhJyB9LFxuICB7IHZhbHVlOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsIGxhYmVsOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicgfSxcbiAge1xuICAgIHZhbHVlOiAnU2FpbnQgVmluY2VudCBhbmQgVGhlIEdyZW5hZGluZXMnLFxuICAgIGxhYmVsOiAnU2FpbnQgVmluY2VudCBhbmQgVGhlIEdyZW5hZGluZXMnLFxuICB9LFxuICB7IHZhbHVlOiAnU2Ftb2EnLCBsYWJlbDogJ1NhbW9hJyB9LFxuICB7IHZhbHVlOiAnU2FuIE1hcmlubycsIGxhYmVsOiAnU2FuIE1hcmlubycgfSxcbiAgeyB2YWx1ZTogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsIGxhYmVsOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyB9LFxuICB7IHZhbHVlOiAnU2F1ZGkgQXJhYmlhJywgbGFiZWw6ICdTYXVkaSBBcmFiaWEnIH0sXG4gIHsgdmFsdWU6ICdTZW5lZ2FsJywgbGFiZWw6ICdTZW5lZ2FsJyB9LFxuICB7IHZhbHVlOiAnU2VyYmlhJywgbGFiZWw6ICdTZXJiaWEnIH0sXG4gIHsgdmFsdWU6ICdTZXljaGVsbGVzJywgbGFiZWw6ICdTZXljaGVsbGVzJyB9LFxuICB7IHZhbHVlOiAnU2llcnJhIExlb25lJywgbGFiZWw6ICdTaWVycmEgTGVvbmUnIH0sXG4gIHsgdmFsdWU6ICdTaW5nYXBvcmUnLCBsYWJlbDogJ1NpbmdhcG9yZScgfSxcbiAgeyB2YWx1ZTogJ1Nsb3Zha2lhJywgbGFiZWw6ICdTbG92YWtpYScgfSxcbiAgeyB2YWx1ZTogJ1Nsb3ZlbmlhJywgbGFiZWw6ICdTbG92ZW5pYScgfSxcbiAgeyB2YWx1ZTogJ1NvbG9tb24gSXNsYW5kcycsIGxhYmVsOiAnU29sb21vbiBJc2xhbmRzJyB9LFxuICB7IHZhbHVlOiAnU29tYWxpYScsIGxhYmVsOiAnU29tYWxpYScgfSxcbiAgeyB2YWx1ZTogJ1NvdXRoIEFmcmljYScsIGxhYmVsOiAnU291dGggQWZyaWNhJyB9LFxuICB7XG4gICAgdmFsdWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCBUaGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gICAgbGFiZWw6ICdTb3V0aCBHZW9yZ2lhIGFuZCBUaGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gIH0sXG4gIHsgdmFsdWU6ICdTcGFpbicsIGxhYmVsOiAnU3BhaW4nIH0sXG4gIHsgdmFsdWU6ICdTcmkgTGFua2EnLCBsYWJlbDogJ1NyaSBMYW5rYScgfSxcbiAgeyB2YWx1ZTogJ1N1ZGFuJywgbGFiZWw6ICdTdWRhbicgfSxcbiAgeyB2YWx1ZTogJ1N1cmluYW1lJywgbGFiZWw6ICdTdXJpbmFtZScgfSxcbiAgeyB2YWx1ZTogJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nLCBsYWJlbDogJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nIH0sXG4gIHsgdmFsdWU6ICdFc3dhdGluaScsIGxhYmVsOiAnRXN3YXRpbmknIH0sXG4gIHsgdmFsdWU6ICdTd2VkZW4nLCBsYWJlbDogJ1N3ZWRlbicgfSxcbiAgeyB2YWx1ZTogJ1N3aXR6ZXJsYW5kJywgbGFiZWw6ICdTd2l0emVybGFuZCcgfSxcbiAgeyB2YWx1ZTogJ1N5cmlhbiBBcmFiIFJlcHVibGljJywgbGFiZWw6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycgfSxcbiAgeyB2YWx1ZTogJ1RhaXdhbiAoUk9DKScsIGxhYmVsOiAnVGFpd2FuIChST0MpJyB9LFxuICB7IHZhbHVlOiAnVGFqaWtpc3RhbicsIGxhYmVsOiAnVGFqaWtpc3RhbicgfSxcbiAge1xuICAgIHZhbHVlOiAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXG4gICAgbGFiZWw6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ1RoYWlsYW5kJywgbGFiZWw6ICdUaGFpbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ1RpbW9yLWxlc3RlJywgbGFiZWw6ICdUaW1vci1sZXN0ZScgfSxcbiAgeyB2YWx1ZTogJ1RvZ28nLCBsYWJlbDogJ1RvZ28nIH0sXG4gIHsgdmFsdWU6ICdUb2tlbGF1JywgbGFiZWw6ICdUb2tlbGF1JyB9LFxuICB7IHZhbHVlOiAnVG9uZ2EnLCBsYWJlbDogJ1RvbmdhJyB9LFxuICB7IHZhbHVlOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsIGxhYmVsOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycgfSxcbiAgeyB2YWx1ZTogJ1R1bmlzaWEnLCBsYWJlbDogJ1R1bmlzaWEnIH0sXG4gIHsgdmFsdWU6ICdUdXJrZXknLCBsYWJlbDogJ1R1cmtleScgfSxcbiAgeyB2YWx1ZTogJ1R1cmttZW5pc3RhbicsIGxhYmVsOiAnVHVya21lbmlzdGFuJyB9LFxuICB7IHZhbHVlOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJywgbGFiZWw6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdUdXZhbHUnLCBsYWJlbDogJ1R1dmFsdScgfSxcbiAgeyB2YWx1ZTogJ1VnYW5kYScsIGxhYmVsOiAnVWdhbmRhJyB9LFxuICB7IHZhbHVlOiAnVWtyYWluZScsIGxhYmVsOiAnVWtyYWluZScgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJywgbGFiZWw6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBLaW5nZG9tJywgbGFiZWw6ICdVbml0ZWQgS2luZ2RvbScgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBTdGF0ZXMnLCBsYWJlbDogJ1VuaXRlZCBTdGF0ZXMnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcycsXG4gICAgbGFiZWw6ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxuICB9LFxuICB7IHZhbHVlOiAnVXJ1Z3VheScsIGxhYmVsOiAnVXJ1Z3VheScgfSxcbiAgeyB2YWx1ZTogJ1V6YmVraXN0YW4nLCBsYWJlbDogJ1V6YmVraXN0YW4nIH0sXG4gIHsgdmFsdWU6ICdWYW51YXR1JywgbGFiZWw6ICdWYW51YXR1JyB9LFxuICB7IHZhbHVlOiAnVmVuZXp1ZWxhJywgbGFiZWw6ICdWZW5lenVlbGEnIH0sXG4gIHsgdmFsdWU6ICdWaWV0bmFtJywgbGFiZWw6ICdWaWV0bmFtJyB9LFxuICB7IHZhbHVlOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLCBsYWJlbDogJ1ZpcmdpbiBJc2xhbmRzLCBCcml0aXNoJyB9LFxuICB7IHZhbHVlOiAnVmlyZ2luIElzbGFuZHMsIFUuUy4nLCBsYWJlbDogJ1ZpcmdpbiBJc2xhbmRzLCBVLlMuJyB9LFxuICB7IHZhbHVlOiAnV2FsbGlzIGFuZCBGdXR1bmEnLCBsYWJlbDogJ1dhbGxpcyBhbmQgRnV0dW5hJyB9LFxuICB7IHZhbHVlOiAnV2VzdGVybiBTYWhhcmEnLCBsYWJlbDogJ1dlc3Rlcm4gU2FoYXJhJyB9LFxuICB7IHZhbHVlOiAnWWVtZW4nLCBsYWJlbDogJ1llbWVuJyB9LFxuICB7IHZhbHVlOiAnWmFtYmlhJywgbGFiZWw6ICdaYW1iaWEnIH0sXG4gIHsgdmFsdWU6ICdaaW1iYWJ3ZScsIGxhYmVsOiAnWmltYmFid2UnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJ5T3B0aW9ucztcbiIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgY29sbGVjdCBmb3JtIGRhdGEgYW5kIHB1dCBpdCBpbiBhIHVzZXIgb2JqZWN0XG5cbmNvbnN0IG5ld1VzZXIgPSAodUVtYWlsLCB1Q291bnRyeSwgdVppcENvZGUsIHVQYXNzd29yZCwgdVBhc3N3b3JkQ29uZmlybSkgPT4ge1xuICBjb25zdCBlbWFpbCA9IHVFbWFpbDtcbiAgY29uc3QgY291bnRyeSA9IHVDb3VudHJ5O1xuICBjb25zdCB6aXBDb2RlID0gdVppcENvZGU7XG4gIGNvbnN0IHBhc3N3b3JkID0gdVBhc3N3b3JkO1xuICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSB1UGFzc3dvcmRDb25maXJtO1xuXG4gIHJldHVybiB7XG4gICAgZW1haWwsXG4gICAgY291bnRyeSxcbiAgICB6aXBDb2RlLFxuICAgIHBhc3N3b3JkLFxuICAgIHBhc3N3b3JkQ29uZmlybSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1VzZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjb3VudHJ5T3B0aW9ucyBmcm9tICcuL2NvdW50cmllcyc7XG5pbXBvcnQgbmV3VXNlciBmcm9tICcuL3VzZXInO1xuXG4vLyBDcmVhdGUgcGFnZSBhIGZvcm0gRE9NIGVsZW1lbnRzIHRvIGhhbmcgZXZlcnl0aGluZyBvblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XG5cbmNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtQ2FyZC5pZCA9ICdmb3JtLWNhcmQnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICdmb3JtJztcbmZvcm0ubm9WYWxpZGF0ZSA9IHRydWU7XG5cbi8vIElOUFVUIEZJRUxEIENSRUFUSU9OIEFORCBDVVNUT00gVkFMSURJVFktLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEVNQUlMXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5lbWFpbC5pZCA9ICdlbWFpbCc7XG5lbWFpbC50eXBlID0gJ2VtYWlsJztcbmVtYWlsLm5hbWUgPSAnZW1haWwnO1xuZW1haWwucmVxdWlyZWQgPSB0cnVlO1xuZW1haWwucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJztcbmVtYWlsLm1pbkxlbmd0aCA9IDM7XG5lbWFpbC5jbGFzc0xpc3QuYWRkKCdkZWYtaW5wdXQnKTtcbmNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuZW1haWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbmVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwnO1xuY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmVtYWlsRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3Qgc2hvd0VtYWlsRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgaXMgZW1wdHksXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdZb3UgbmVlZCB0byBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLic7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MsXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlcmVkIHZhbHVlIG5lZWRzIHRvIGJlIGFuIGVtYWlsIGFkZHJlc3MuJztcbiAgICBlbWFpbC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgLy8gSWYgdGhlIGRhdGEgaXMgdG9vIHNob3J0LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBgRW1haWwgc2hvdWxkIGJlIGF0IGxlYXN0ICR7ZW1haWwubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke2VtYWlsLnZhbHVlLmxlbmd0aH0uYDtcbiAgICBlbWFpbC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG5lbWFpbC5vbmlucHV0ID0gKCkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ2lzVmFsaWQnO1xuICB9IGVsc2UgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgIC8vIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnaSBkb250IHRob2luayBzbyEnO1xuICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuLy8gQ09VTlRSWVxuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuY291bnRyeS5pZCA9ICdjb3VudHJ5JztcbmNvdW50cnkucmVxdWlyZWQgPSB0cnVlO1xuY291bnRyeS5jbGFzc0xpc3QuYWRkKCdkZWYtaW5wdXQnKTtcbmNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb3VudHJ5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5jb3VudHJ5TGFiZWwudGV4dENvbnRlbnQgPSAnQ291bnRyeSc7XG5jb25zdCBjb3VudHJ5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jb3VudHJ5RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbi8vIERlZmF1bHQgb3B0aW9uIGRpc3BsYXkgb24gbG9hZFxuY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcnO1xuZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9ICdTZWxlY3QgY291bnRyeSc7XG5jb3VudHJ5LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuLy8gQ3JlYXRlIGFuIG9wdGlvbiBmcm9tIGVhY2ggY291bnRyeSBpbiBjb3VudHJ5T3B0aW9ucyBhbmQgcHV0IGl0IGluIHRoZSBzZWxlY3QgbGlzdFxuZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJ5T3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnZhbHVlID0gY291bnRyeU9wdGlvbnNbaV0udmFsdWU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvdW50cnlPcHRpb25zW2ldLmxhYmVsO1xuICBjb3VudHJ5LmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmNvbnN0IHNob3dDb3VudHJ5RXJyb3IgPSAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIC8vIElmIHRoZSBmaWVsZCBpcyBlbXB0eSxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBjb3VudHJ5RXJyb3IudGV4dENvbnRlbnQgPSAnU2VsZWN0IGNvdW50cnknO1xuICAgIGNvdW50cnkuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuY291bnRyeS5vbmlucHV0ID0gKCkgPT4ge1xuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWxpZCkge1xuICAgIGNvdW50cnlFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvdW50cnkuY2xhc3NOYW1lID0gJ2lzVmFsaWQnO1xuICB9IGVsc2UgaWYgKCFjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgIGNvdW50cnkuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuLy8gWklQIENPREVcbmNvbnN0IHppcENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuemlwQ29kZS5pZCA9ICd6aXAtY29kZSc7XG56aXBDb2RlLnR5cGUgPSAndGV4dCc7XG56aXBDb2RlLnJlcXVpcmVkID0gdHJ1ZTtcbnppcENvZGUucGF0dGVybiA9ICdbMC05XXs1fSc7XG56aXBDb2RlLm1heExlbmd0aCA9IDU7XG56aXBDb2RlLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgNSBkaWdpdCBaaXAgQ29kZSc7XG56aXBDb2RlLmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgemlwQ29kZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnppcENvZGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbnppcENvZGVMYWJlbC50ZXh0Q29udGVudCA9ICdaaXAgQ29kZSc7XG5jb25zdCB6aXBDb2RlRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG56aXBDb2RlRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3Qgc2hvd1ppcENvZGVFcnJvciA9ICgpID0+IHtcbiAgaWYgKHppcENvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHppcENvZGVFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlciBhIDUgZGlnaXQgWmlwIENvZGUuJztcbiAgICB6aXBDb2RlLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAoemlwQ29kZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBjb250YWluIGFuIHppcENvZGUgYWRkcmVzcyxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICB6aXBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSA1IGRpZ2l0IFppcCBDb2RlLic7XG4gICAgemlwQ29kZS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG56aXBDb2RlLm9uaW5wdXQgPSAoKSA9PiB7XG4gIGlmICh6aXBDb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgemlwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgemlwQ29kZS5jbGFzc05hbWUgPSAnaXNWYWxpZCc7XG4gIH0gZWxzZSBpZiAoIXppcENvZGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93WmlwQ29kZUVycm9yKCk7XG4gICAgemlwQ29kZS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG4vLyBQQVNTV09SRFxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGFzc3dvcmQuaWQgPSAncGFzc3dvcmQnO1xucGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XG5wYXNzd29yZC5yZXF1aXJlZCA9IHRydWU7XG5wYXNzd29yZC5wYXR0ZXJuID0gJyg/PS4qP1swLTldKSg/PS4qP1tBLVphLXpdKS4rJztcbnBhc3N3b3JkLm1pbkxlbmd0aCA9IDY7XG5wYXNzd29yZC5wbGFjZWhvbGRlciA9ICc2IGNoYXIuIExldHRlciBhbmQgbnVtYmVyJztcbnBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5wYXNzd29yZExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xucGFzc3dvcmRMYWJlbC50ZXh0Q29udGVudCA9ICdQYXNzd29yZCc7XG5jb25zdCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucGFzc3dvcmRFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuXG5jb25zdCBzaG93UGFzc3dvcmRFcnJvciA9ICgpID0+IHtcbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIC8vIElmIHRoZSBmaWVsZCBpcyBlbXB0eSxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGEgcGFzc3dvcmQnO1xuICAgIHBhc3N3b3JkLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoICYmIHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgbWF0Y2ggbGV0dGVyK251bWJlciBwYXR0ZXJuIG9yIGlzIHRvbyBzaG9ydCxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJzYgY2hhcmFjdGVycyBsb25nIHdpdGggYSBudW1iZXIgYW5kIGEgbGV0dGVyJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGRvZXNuJ3QgbWVldCBtaW5MZW5ndGgsXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdNdXN0IGJlIDYgY2hhcmVjdGVycyBsb25nICc7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBtYXRjaCBsZXR0ZXIrbnVtYmVyIHBhdHRlcm4sXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdNdXN0IGNvbnRhaW4gYSBudW1iZXIgYW5kIGEgbGV0dGVyJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG5wYXNzd29yZC5vbmlucHV0ID0gKCkgPT4ge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gJ2lzVmFsaWQnO1xuICB9IGVsc2UgaWYgKCFwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dQYXNzd29yZEVycm9yKCk7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuLy8gUEFTU1dPUkQgQ09ORklSTVxuY29uc3QgcGFzc3dvcmRDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBhc3N3b3JkQ29uZmlybS5pZCA9ICdwYXNzd29yZC1jb25maXJtJztcbnBhc3N3b3JkQ29uZmlybS50eXBlID0gJ3Bhc3N3b3JkJztcbnBhc3N3b3JkQ29uZmlybS5yZXF1aXJlZCA9IHRydWU7XG5wYXNzd29yZENvbmZpcm0uY2xhc3NMaXN0LmFkZCgnZGVmLWlucHV0Jyk7XG5jb25zdCBwYXNzd29yZENvbmZpcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5wYXNzd29yZENvbmZpcm1MYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbnBhc3N3b3JkQ29uZmlybUxhYmVsLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gUGFzc3dvcmQnO1xuY29uc3QgcGFzc3dvcmRDb25maXJtRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5wYXNzd29yZENvbmZpcm1FcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuXG5jb25zdCBzaG93UGFzc3dvcmRDb25maXJtRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChwYXNzd29yZENvbmZpcm0udmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkQ29uZmlybUVycm9yLnRleHRDb250ZW50ID0gJ0NvbmZpcm0geW91ciBwYXNzd29yZCc7XG4gICAgcGFzc3dvcmRDb25maXJtLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbnBhc3N3b3JkQ29uZmlybS5vbmlucHV0ID0gKCkgPT4ge1xuICAvLyBjb25zdCBwYXNzd29yZEdyYWJiZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbiAgaWYgKHBhc3N3b3JkQ29uZmlybS52YWx1ZSAhPT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICAvLyBJZiBwYXNzd29yZCBjb25maXJtIGRvZXNuJ3QgbWF0Y2ggcGFzc3dvcmRcbiAgICBwYXNzd29yZENvbmZpcm1FcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcbiAgICBwYXNzd29yZENvbmZpcm0uY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmIChwYXNzd29yZENvbmZpcm0udmFsaWRpdHkudmFsaWQpIHtcbiAgICBwYXNzd29yZENvbmZpcm1FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhc3N3b3JkQ29uZmlybS5jbGFzc05hbWUgPSAnaXNWYWxpZCc7XG4gIH0gZWxzZSBpZiAoIXBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dQYXNzd29yZENvbmZpcm1FcnJvcigpO1xuICAgIHBhc3N3b3JkQ29uZmlybS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG4vLyBQdXQgdGhvc2UgZWxlbWVudHMgaW4gYW4gYXJyYXkgdG8gbG9vcCB0aHJvdWdoIGZvciBET00gY3JlYXRpb24gYmVsb3cuXG5jb25zdCBpbnB1dHMgPSBbXG4gIGVtYWlsTGFiZWwsXG4gIGVtYWlsLFxuICBlbWFpbEVycm9yLFxuICBjb3VudHJ5TGFiZWwsXG4gIGNvdW50cnksXG4gIGNvdW50cnlFcnJvcixcbiAgemlwQ29kZUxhYmVsLFxuICB6aXBDb2RlLFxuICB6aXBDb2RlRXJyb3IsXG4gIHBhc3N3b3JkTGFiZWwsXG4gIHBhc3N3b3JkLFxuICBwYXNzd29yZEVycm9yLFxuICBwYXNzd29yZENvbmZpcm1MYWJlbCxcbiAgcGFzc3dvcmRDb25maXJtLFxuICBwYXNzd29yZENvbmZpcm1FcnJvcixcbl07XG5cbi8vIFB1dCBlYWNoIGdyb3VwIG9mIGxhYmVsLCBpbnB1dCwgYW5kIGVycm9yIHNwYW4gaW50byBhIGZvcm1GaWVsZCBkaXYgZm9yIHN0eWxpbmcuXG5mb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkgKz0gMykge1xuICBjb25zdCBmb3JtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZmllbGQnKTtcbiAgY29uc3QgZ3JhYmJlciA9IGkgKyAxO1xuICBjb25zdCBncmFiYmVyMiA9IGkgKyAyO1xuICBmb3JtRmllbGQuYXBwZW5kQ2hpbGQoaW5wdXRzW2ldKTtcbiAgZm9ybUZpZWxkLmFwcGVuZENoaWxkKGlucHV0c1tncmFiYmVyXSk7XG4gIGZvcm1GaWVsZC5hcHBlbmRDaGlsZChpbnB1dHNbZ3JhYmJlcjJdKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1GaWVsZCk7XG59XG5cbi8vIFNVQk1JVCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBzdWJtaXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0QnRuLmlkID0gJ3N1Ym1pdC1idXR0b24nO1xuc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5zdWJtaXRCb3guYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Qm94KTtcblxuc3VibWl0QnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAvLyBjb3VudGVyIHRvIHZlcmlmeSBlYWNoIHJlcXVpcmVtZW50IGlzIG1ldCBhbmQgZm9ybSBtYXkgYmUgc3VibWl0dGVkXG4gIGxldCB2ZXJpZnkgPSAwO1xuICBpZiAoIWVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgLy8gSWYgaXQgaXNuJ3QsIHdlIGRpc3BsYXkgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZVxuICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2Uge1xuICAgIHZlcmlmeSArPSAxO1xuICB9XG4gIGlmICghY291bnRyeS52YWxpZGl0eS52YWxpZCkge1xuICAgIC8vIElmIGl0IGlzbid0LCB3ZSBkaXNwbGF5IGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2VcbiAgICBzaG93Q291bnRyeUVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2Uge1xuICAgIHZlcmlmeSArPSAxO1xuICB9XG4gIGlmICghemlwQ29kZS52YWxpZGl0eS52YWxpZCkge1xuICAgIC8vIElmIGl0IGlzbid0LCB3ZSBkaXNwbGF5IGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2VcbiAgICBzaG93WmlwQ29kZUVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2Uge1xuICAgIHZlcmlmeSArPSAxO1xuICB9XG4gIGlmICghcGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxheSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICAvLyBUaGVuIHdlIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzZW50IGJ5IGNhbmNlbGluZyB0aGUgZXZlbnRcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSB7XG4gICAgdmVyaWZ5ICs9IDE7XG4gIH1cbiAgaWYgKCFwYXNzd29yZENvbmZpcm0udmFsaWRpdHkudmFsaWQpIHtcbiAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxheSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gICAgc2hvd1Bhc3N3b3JkQ29uZmlybUVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkQ29uZmlybS52YWx1ZSAhPT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICAvLyBJZiB0aGUgY29uZmlybSBwYXNzd29yZCBmaWVsZCBkb2Vzbid0IG1hdGNoIHBhc3N3b3JkIGZpZWxkLFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkQ29uZmlybUVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnO1xuICAgIHBhc3N3b3JkQ29uZmlybS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJpZnkgKz0gMTtcbiAgfVxuICAvLyBJZiBhbGwgdmVyaWZpY2F0aW9ucyBhcmUgbWV0LCBwdXQgYWxsIGlucHV0IGRhdGEgaW50byBhIG5ld1VzZXIgb2JqZWN0LFxuICAvLyBBbGVydCBkaXNwbGF5aW5nIHRoYXQgdXNlciBpbmZvIGFuZCBTdWJtaXQuXG4gIGlmICh2ZXJpZnkgPT09IDUpIHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSBlbWFpbC52YWx1ZTtcbiAgICBjb25zdCB1c2VyQ291bnRyeSA9IGNvdW50cnkudmFsdWU7XG4gICAgY29uc3QgdXNlclppcENvZGUgPSB6aXBDb2RlLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZENvbmZpcm0gPSBwYXNzd29yZENvbmZpcm0udmFsdWU7XG4gICAgY29uc3QgdXNlckRhdGEgPSBuZXdVc2VyKFxuICAgICAgdXNlckVtYWlsLFxuICAgICAgdXNlckNvdW50cnksXG4gICAgICB1c2VyWmlwQ29kZSxcbiAgICAgIHVzZXJQYXNzd29yZCxcbiAgICAgIHVzZXJQYXNzd29yZENvbmZpcm0sXG4gICAgKTtcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICB9XG59O1xuXG4vLyBQVVQgQUxMIE9GIFRIQVQgT04gVEhFIFBBR0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZm9ybUNhcmQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbmRpc3BsYXkuYXBwZW5kKGZvcm1DYXJkKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5KTtcblxuLy8ganMgc3R5bGUgdGhhdCBvdWdodCB0byBiZSByZXBsYWNlZCB3aXRoaW4gc3R5bGUuY3NzXG5zdWJtaXRCdG4uc3R5bGUud2lkdGggPSAnMTUwcHgnO1xuXG5zdWJtaXRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbnN1Ym1pdEJveC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuc3VibWl0Qm94LnN0eWxlLm1hcmdpblRvcCA9ICc1cHgnO1xuXG5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5mb3JtLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5mb3JtLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbmZvcm0uc3R5bGUud2lkdGggPSAnMjc1cHgnO1xuXG5mb3JtQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuZm9ybUNhcmQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvcm1DYXJkLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbmZvcm1DYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZXNtb2tlJztcbmZvcm1DYXJkLnN0eWxlLnBhZGRpbmcgPSAnNDBweCc7XG5cbmRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmRpc3BsYXkuc3R5bGUud2lkdGggPSAnMTAwJSc7XG5kaXNwbGF5LnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG5kaXNwbGF5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5kaXNwbGF5LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==