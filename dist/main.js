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
password.placeholder = '6 char. letter and number';
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
passwordConfirm.placeholder = 'Confirm your password';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLGtEQUFjLFNBQVM7QUFDM0M7QUFDQSxpQkFBaUIsa0RBQWM7QUFDL0IsdUJBQXVCLGtEQUFjO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy91c2VyLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRoZW1lMTogcmdiKDQ3LCAxMTIsIDE1OSk7XG4gICAgLyogcmdiKDE1OCwgMTAxLCAxMjUpOyAqL1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMHB4IDAgN3B4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjZGNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5kZWYtaW5wdXQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XG59XG5cbnNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0M3B4O1xufVxuXG4ubm90VmFsaWQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5pc1ZhbGlkIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcbn1cbi8qIFxuaW5wdXQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTA5LCAyNTIsIDAuMTMpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZTEpO1xuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTJweCAwIHZhcigtLXRoZW1lMSlcbn0gKi9cblxuXG4vKiBpbnB1dDp2YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTIsIDcxLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcbn1cblxuXG5pbnB1dDpub3QoOmZvY3VzKTpwbGFjZWhvbGRlci1zaG93bjppbnZhbGlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XG59XG5cbmlucHV0OmZvY3VzOnBsYWNlaG9sZGVyLXNob3duOmludmFsaWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU2LCA1NSwgNTUsIDAuMzU2KTtcbn1cblxuaW5wdXQ6aW52YWxpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEycHggMCByZWRcbn0gKi9cbi8qIGlucHV0OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwOSwgMjUyLCAwLjEzKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUxKTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAwIHZhcigtLXRoZW1lMSlcbn0gKi9cblxuLmVycm9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7Ozs7OztHQU1HOzs7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0g7Ozs7O0dBS0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGhlbWUxOiByZ2IoNDcsIDExMiwgMTU5KTtcXG4gICAgLyogcmdiKDE1OCwgMTAxLCAxMjUpOyAqL1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tZmllbGQge1xcbiAgICBtYXJnaW46IDBweCAwIDdweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjZGNlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5kZWYtaW5wdXQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbn1cXG5cXG4ubm90VmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLmlzVmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMiwgMjAxLCA0Nik7XFxufVxcbi8qIFxcbmlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDksIDI1MiwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUxKTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4IDAgdmFyKC0tdGhlbWUxKVxcbn0gKi9cXG5cXG5cXG4vKiBpbnB1dDp2YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjUyLCA3MSwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIyLCAyMDEsIDQ2KTtcXG59XFxuXFxuXFxuaW5wdXQ6bm90KDpmb2N1cyk6cGxhY2Vob2xkZXItc2hvd246aW52YWxpZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDAsIDAsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTYsIDU1LCA1NSwgMC4zNTYpO1xcbn1cXG5cXG5pbnB1dDpmb2N1czpwbGFjZWhvbGRlci1zaG93bjppbnZhbGlke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMCwgMCwgMC4xMyk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NiwgNTUsIDU1LCAwLjM1Nik7XFxufVxcblxcbmlucHV0OmludmFsaWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAwLCAwLCAwLjEzKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTJweCAwIHJlZFxcbn0gKi9cXG4vKiBpbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTA5LCAyNTIsIDAuMTMpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lMSk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IDAgdmFyKC0tdGhlbWUxKVxcbn0gKi9cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxN3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gTW9kdWxlIHRvIHN0b3JlIGEgd2hvbGUgYnVuY2ggb2YgY291bnRyeSBvcHRpb25zXG5cbmNvbnN0IGNvdW50cnlPcHRpb25zID0gW1xuICB7IHZhbHVlOiAnQWZnaGFuaXN0YW4nLCBsYWJlbDogJ0FmZ2hhbmlzdGFuJyB9LFxuICB7IHZhbHVlOiAnw4VsYW5kIElzbGFuZHMnLCBsYWJlbDogJ8OFbGFuZCBJc2xhbmRzJyB9LFxuICB7IHZhbHVlOiAnQWxiYW5pYScsIGxhYmVsOiAnQWxiYW5pYScgfSxcbiAgeyB2YWx1ZTogJ0FsZ2VyaWEnLCBsYWJlbDogJ0FsZ2VyaWEnIH0sXG4gIHsgdmFsdWU6ICdBbWVyaWNhbiBTYW1vYScsIGxhYmVsOiAnQW1lcmljYW4gU2Ftb2EnIH0sXG4gIHsgdmFsdWU6ICdBbmRvcnJhJywgbGFiZWw6ICdBbmRvcnJhJyB9LFxuICB7IHZhbHVlOiAnQW5nb2xhJywgbGFiZWw6ICdBbmdvbGEnIH0sXG4gIHsgdmFsdWU6ICdBbmd1aWxsYScsIGxhYmVsOiAnQW5ndWlsbGEnIH0sXG4gIHsgdmFsdWU6ICdBbnRhcmN0aWNhJywgbGFiZWw6ICdBbnRhcmN0aWNhJyB9LFxuICB7IHZhbHVlOiAnQW50aWd1YSBhbmQgQmFyYnVkYScsIGxhYmVsOiAnQW50aWd1YSBhbmQgQmFyYnVkYScgfSxcbiAgeyB2YWx1ZTogJ0FyZ2VudGluYScsIGxhYmVsOiAnQXJnZW50aW5hJyB9LFxuICB7IHZhbHVlOiAnQXJtZW5pYScsIGxhYmVsOiAnQXJtZW5pYScgfSxcbiAgeyB2YWx1ZTogJ0FydWJhJywgbGFiZWw6ICdBcnViYScgfSxcbiAgeyB2YWx1ZTogJ0F1c3RyYWxpYScsIGxhYmVsOiAnQXVzdHJhbGlhJyB9LFxuICB7IHZhbHVlOiAnQXVzdHJpYScsIGxhYmVsOiAnQXVzdHJpYScgfSxcbiAgeyB2YWx1ZTogJ0F6ZXJiYWlqYW4nLCBsYWJlbDogJ0F6ZXJiYWlqYW4nIH0sXG4gIHsgdmFsdWU6ICdCYWhhbWFzJywgbGFiZWw6ICdCYWhhbWFzJyB9LFxuICB7IHZhbHVlOiAnQmFocmFpbicsIGxhYmVsOiAnQmFocmFpbicgfSxcbiAgeyB2YWx1ZTogJ0JhbmdsYWRlc2gnLCBsYWJlbDogJ0JhbmdsYWRlc2gnIH0sXG4gIHsgdmFsdWU6ICdCYXJiYWRvcycsIGxhYmVsOiAnQmFyYmFkb3MnIH0sXG4gIHsgdmFsdWU6ICdCZWxhcnVzJywgbGFiZWw6ICdCZWxhcnVzJyB9LFxuICB7IHZhbHVlOiAnQmVsZ2l1bScsIGxhYmVsOiAnQmVsZ2l1bScgfSxcbiAgeyB2YWx1ZTogJ0JlbGl6ZScsIGxhYmVsOiAnQmVsaXplJyB9LFxuICB7IHZhbHVlOiAnQmVuaW4nLCBsYWJlbDogJ0JlbmluJyB9LFxuICB7IHZhbHVlOiAnQmVybXVkYScsIGxhYmVsOiAnQmVybXVkYScgfSxcbiAgeyB2YWx1ZTogJ0JodXRhbicsIGxhYmVsOiAnQmh1dGFuJyB9LFxuICB7IHZhbHVlOiAnQm9saXZpYScsIGxhYmVsOiAnQm9saXZpYScgfSxcbiAgeyB2YWx1ZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLCBsYWJlbDogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnIH0sXG4gIHsgdmFsdWU6ICdCb3Rzd2FuYScsIGxhYmVsOiAnQm90c3dhbmEnIH0sXG4gIHsgdmFsdWU6ICdCb3V2ZXQgSXNsYW5kJywgbGFiZWw6ICdCb3V2ZXQgSXNsYW5kJyB9LFxuICB7IHZhbHVlOiAnQnJhemlsJywgbGFiZWw6ICdCcmF6aWwnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgbGFiZWw6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICB9LFxuICB7IHZhbHVlOiAnQnJ1bmVpIERhcnVzc2FsYW0nLCBsYWJlbDogJ0JydW5laSBEYXJ1c3NhbGFtJyB9LFxuICB7IHZhbHVlOiAnQnVsZ2FyaWEnLCBsYWJlbDogJ0J1bGdhcmlhJyB9LFxuICB7IHZhbHVlOiAnQnVya2luYSBGYXNvJywgbGFiZWw6ICdCdXJraW5hIEZhc28nIH0sXG4gIHsgdmFsdWU6ICdCdXJ1bmRpJywgbGFiZWw6ICdCdXJ1bmRpJyB9LFxuICB7IHZhbHVlOiAnQ2FtYm9kaWEnLCBsYWJlbDogJ0NhbWJvZGlhJyB9LFxuICB7IHZhbHVlOiAnQ2FtZXJvb24nLCBsYWJlbDogJ0NhbWVyb29uJyB9LFxuICB7IHZhbHVlOiAnQ2FuYWRhJywgbGFiZWw6ICdDYW5hZGEnIH0sXG4gIHsgdmFsdWU6ICdDYXBlIFZlcmRlJywgbGFiZWw6ICdDYXBlIFZlcmRlJyB9LFxuICB7IHZhbHVlOiAnQ2F5bWFuIElzbGFuZHMnLCBsYWJlbDogJ0NheW1hbiBJc2xhbmRzJyB9LFxuICB7IHZhbHVlOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJywgbGFiZWw6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnIH0sXG4gIHsgdmFsdWU6ICdDaGFkJywgbGFiZWw6ICdDaGFkJyB9LFxuICB7IHZhbHVlOiAnQ2hpbGUnLCBsYWJlbDogJ0NoaWxlJyB9LFxuICB7IHZhbHVlOiAnQ2hpbmEnLCBsYWJlbDogJ0NoaW5hJyB9LFxuICB7IHZhbHVlOiAnQ2hyaXN0bWFzIElzbGFuZCcsIGxhYmVsOiAnQ2hyaXN0bWFzIElzbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJywgbGFiZWw6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0NvbG9tYmlhJywgbGFiZWw6ICdDb2xvbWJpYScgfSxcbiAgeyB2YWx1ZTogJ0NvbW9yb3MnLCBsYWJlbDogJ0NvbW9yb3MnIH0sXG4gIHsgdmFsdWU6ICdDb25nbycsIGxhYmVsOiAnQ29uZ28nIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0NvbmdvLCBUaGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiBUaGUnLFxuICAgIGxhYmVsOiAnQ29uZ28sIFRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIFRoZScsXG4gIH0sXG4gIHsgdmFsdWU6ICdDb29rIElzbGFuZHMnLCBsYWJlbDogJ0Nvb2sgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0Nvc3RhIFJpY2EnLCBsYWJlbDogJ0Nvc3RhIFJpY2EnIH0sXG4gIHsgdmFsdWU6IFwiQ290ZSBEJ2l2b2lyZVwiLCBsYWJlbDogXCJDb3RlIEQnaXZvaXJlXCIgfSxcbiAgeyB2YWx1ZTogJ0Nyb2F0aWEnLCBsYWJlbDogJ0Nyb2F0aWEnIH0sXG4gIHsgdmFsdWU6ICdDdWJhJywgbGFiZWw6ICdDdWJhJyB9LFxuICB7IHZhbHVlOiAnQ3VyYcOnYW8nLCBsYWJlbDogJ0N1cmHDp2FvJyB9LFxuICB7IHZhbHVlOiAnQ3lwcnVzJywgbGFiZWw6ICdDeXBydXMnIH0sXG4gIHsgdmFsdWU6ICdDemVjaCBSZXB1YmxpYycsIGxhYmVsOiAnQ3plY2ggUmVwdWJsaWMnIH0sXG4gIHsgdmFsdWU6ICdEZW5tYXJrJywgbGFiZWw6ICdEZW5tYXJrJyB9LFxuICB7IHZhbHVlOiAnRGppYm91dGknLCBsYWJlbDogJ0RqaWJvdXRpJyB9LFxuICB7IHZhbHVlOiAnRG9taW5pY2EnLCBsYWJlbDogJ0RvbWluaWNhJyB9LFxuICB7IHZhbHVlOiAnRG9taW5pY2FuIFJlcHVibGljJywgbGFiZWw6ICdEb21pbmljYW4gUmVwdWJsaWMnIH0sXG4gIHsgdmFsdWU6ICdFY3VhZG9yJywgbGFiZWw6ICdFY3VhZG9yJyB9LFxuICB7IHZhbHVlOiAnRWd5cHQnLCBsYWJlbDogJ0VneXB0JyB9LFxuICB7IHZhbHVlOiAnRWwgU2FsdmFkb3InLCBsYWJlbDogJ0VsIFNhbHZhZG9yJyB9LFxuICB7IHZhbHVlOiAnRXF1YXRvcmlhbCBHdWluZWEnLCBsYWJlbDogJ0VxdWF0b3JpYWwgR3VpbmVhJyB9LFxuICB7IHZhbHVlOiAnRXJpdHJlYScsIGxhYmVsOiAnRXJpdHJlYScgfSxcbiAgeyB2YWx1ZTogJ0VzdG9uaWEnLCBsYWJlbDogJ0VzdG9uaWEnIH0sXG4gIHsgdmFsdWU6ICdFdGhpb3BpYScsIGxhYmVsOiAnRXRoaW9waWEnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXG4gICAgbGFiZWw6ICdGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcyknLFxuICB9LFxuICB7IHZhbHVlOiAnRmFyb2UgSXNsYW5kcycsIGxhYmVsOiAnRmFyb2UgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0ZpamknLCBsYWJlbDogJ0ZpamknIH0sXG4gIHsgdmFsdWU6ICdGaW5sYW5kJywgbGFiZWw6ICdGaW5sYW5kJyB9LFxuICB7IHZhbHVlOiAnRnJhbmNlJywgbGFiZWw6ICdGcmFuY2UnIH0sXG4gIHsgdmFsdWU6ICdGcmVuY2ggR3VpYW5hJywgbGFiZWw6ICdGcmVuY2ggR3VpYW5hJyB9LFxuICB7IHZhbHVlOiAnRnJlbmNoIFBvbHluZXNpYScsIGxhYmVsOiAnRnJlbmNoIFBvbHluZXNpYScgfSxcbiAge1xuICAgIHZhbHVlOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcbiAgICBsYWJlbDogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsXG4gIH0sXG4gIHsgdmFsdWU6ICdHYWJvbicsIGxhYmVsOiAnR2Fib24nIH0sXG4gIHsgdmFsdWU6ICdHYW1iaWEnLCBsYWJlbDogJ0dhbWJpYScgfSxcbiAgeyB2YWx1ZTogJ0dlb3JnaWEnLCBsYWJlbDogJ0dlb3JnaWEnIH0sXG4gIHsgdmFsdWU6ICdHZXJtYW55JywgbGFiZWw6ICdHZXJtYW55JyB9LFxuICB7IHZhbHVlOiAnR2hhbmEnLCBsYWJlbDogJ0doYW5hJyB9LFxuICB7IHZhbHVlOiAnR2licmFsdGFyJywgbGFiZWw6ICdHaWJyYWx0YXInIH0sXG4gIHsgdmFsdWU6ICdHcmVlY2UnLCBsYWJlbDogJ0dyZWVjZScgfSxcbiAgeyB2YWx1ZTogJ0dyZWVubGFuZCcsIGxhYmVsOiAnR3JlZW5sYW5kJyB9LFxuICB7IHZhbHVlOiAnR3JlbmFkYScsIGxhYmVsOiAnR3JlbmFkYScgfSxcbiAgeyB2YWx1ZTogJ0d1YWRlbG91cGUnLCBsYWJlbDogJ0d1YWRlbG91cGUnIH0sXG4gIHsgdmFsdWU6ICdHdWFtJywgbGFiZWw6ICdHdWFtJyB9LFxuICB7IHZhbHVlOiAnR3VhdGVtYWxhJywgbGFiZWw6ICdHdWF0ZW1hbGEnIH0sXG4gIHsgdmFsdWU6ICdHdWVybnNleScsIGxhYmVsOiAnR3Vlcm5zZXknIH0sXG4gIHsgdmFsdWU6ICdHdWluZWEnLCBsYWJlbDogJ0d1aW5lYScgfSxcbiAgeyB2YWx1ZTogJ0d1aW5lYS1iaXNzYXUnLCBsYWJlbDogJ0d1aW5lYS1iaXNzYXUnIH0sXG4gIHsgdmFsdWU6ICdHdXlhbmEnLCBsYWJlbDogJ0d1eWFuYScgfSxcbiAgeyB2YWx1ZTogJ0hhaXRpJywgbGFiZWw6ICdIYWl0aScgfSxcbiAge1xuICAgIHZhbHVlOiAnSGVhcmQgSXNsYW5kIGFuZCBNY2RvbmFsZCBJc2xhbmRzJyxcbiAgICBsYWJlbDogJ0hlYXJkIElzbGFuZCBhbmQgTWNkb25hbGQgSXNsYW5kcycsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcbiAgICBsYWJlbDogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ0hvbmR1cmFzJywgbGFiZWw6ICdIb25kdXJhcycgfSxcbiAgeyB2YWx1ZTogJ0hvbmcgS29uZycsIGxhYmVsOiAnSG9uZyBLb25nJyB9LFxuICB7IHZhbHVlOiAnSHVuZ2FyeScsIGxhYmVsOiAnSHVuZ2FyeScgfSxcbiAgeyB2YWx1ZTogJ0ljZWxhbmQnLCBsYWJlbDogJ0ljZWxhbmQnIH0sXG4gIHsgdmFsdWU6ICdJbmRpYScsIGxhYmVsOiAnSW5kaWEnIH0sXG4gIHsgdmFsdWU6ICdJbmRvbmVzaWEnLCBsYWJlbDogJ0luZG9uZXNpYScgfSxcbiAgeyB2YWx1ZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YnLCBsYWJlbDogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YnIH0sXG4gIHsgdmFsdWU6ICdJcmFxJywgbGFiZWw6ICdJcmFxJyB9LFxuICB7IHZhbHVlOiAnSXJlbGFuZCcsIGxhYmVsOiAnSXJlbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0lzbGUgb2YgTWFuJywgbGFiZWw6ICdJc2xlIG9mIE1hbicgfSxcbiAgeyB2YWx1ZTogJ0lzcmFlbCcsIGxhYmVsOiAnSXNyYWVsJyB9LFxuICB7IHZhbHVlOiAnSXRhbHknLCBsYWJlbDogJ0l0YWx5JyB9LFxuICB7IHZhbHVlOiAnSmFtYWljYScsIGxhYmVsOiAnSmFtYWljYScgfSxcbiAgeyB2YWx1ZTogJ0phcGFuJywgbGFiZWw6ICdKYXBhbicgfSxcbiAgeyB2YWx1ZTogJ0plcnNleScsIGxhYmVsOiAnSmVyc2V5JyB9LFxuICB7IHZhbHVlOiAnSm9yZGFuJywgbGFiZWw6ICdKb3JkYW4nIH0sXG4gIHsgdmFsdWU6ICdLYXpha2hzdGFuJywgbGFiZWw6ICdLYXpha2hzdGFuJyB9LFxuICB7IHZhbHVlOiAnS2VueWEnLCBsYWJlbDogJ0tlbnlhJyB9LFxuICB7IHZhbHVlOiAnS2lyaWJhdGknLCBsYWJlbDogJ0tpcmliYXRpJyB9LFxuICB7XG4gICAgdmFsdWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIixcbiAgICBsYWJlbDogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLFxuICB9LFxuICB7IHZhbHVlOiAnS29yZWEsIFJlcHVibGljIG9mJywgbGFiZWw6ICdLb3JlYSwgUmVwdWJsaWMgb2YnIH0sXG4gIHsgdmFsdWU6ICdLdXdhaXQnLCBsYWJlbDogJ0t1d2FpdCcgfSxcbiAgeyB2YWx1ZTogJ0t5cmd5enN0YW4nLCBsYWJlbDogJ0t5cmd5enN0YW4nIH0sXG4gIHtcbiAgICB2YWx1ZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLFxuICAgIGxhYmVsOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsXG4gIH0sXG4gIHsgdmFsdWU6ICdMYXR2aWEnLCBsYWJlbDogJ0xhdHZpYScgfSxcbiAgeyB2YWx1ZTogJ0xlYmFub24nLCBsYWJlbDogJ0xlYmFub24nIH0sXG4gIHsgdmFsdWU6ICdMZXNvdGhvJywgbGFiZWw6ICdMZXNvdGhvJyB9LFxuICB7IHZhbHVlOiAnTGliZXJpYScsIGxhYmVsOiAnTGliZXJpYScgfSxcbiAgeyB2YWx1ZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLCBsYWJlbDogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnIH0sXG4gIHsgdmFsdWU6ICdMaWVjaHRlbnN0ZWluJywgbGFiZWw6ICdMaWVjaHRlbnN0ZWluJyB9LFxuICB7IHZhbHVlOiAnTGl0aHVhbmlhJywgbGFiZWw6ICdMaXRodWFuaWEnIH0sXG4gIHsgdmFsdWU6ICdMdXhlbWJvdXJnJywgbGFiZWw6ICdMdXhlbWJvdXJnJyB9LFxuICB7IHZhbHVlOiAnTWFjYW8nLCBsYWJlbDogJ01hY2FvJyB9LFxuICB7XG4gICAgdmFsdWU6ICdNYWNlZG9uaWEsIFRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YnLFxuICAgIGxhYmVsOiAnTWFjZWRvbmlhLCBUaGUgRm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ01hZGFnYXNjYXInLCBsYWJlbDogJ01hZGFnYXNjYXInIH0sXG4gIHsgdmFsdWU6ICdNYWxhd2knLCBsYWJlbDogJ01hbGF3aScgfSxcbiAgeyB2YWx1ZTogJ01hbGF5c2lhJywgbGFiZWw6ICdNYWxheXNpYScgfSxcbiAgeyB2YWx1ZTogJ01hbGRpdmVzJywgbGFiZWw6ICdNYWxkaXZlcycgfSxcbiAgeyB2YWx1ZTogJ01hbGknLCBsYWJlbDogJ01hbGknIH0sXG4gIHsgdmFsdWU6ICdNYWx0YScsIGxhYmVsOiAnTWFsdGEnIH0sXG4gIHsgdmFsdWU6ICdNYXJzaGFsbCBJc2xhbmRzJywgbGFiZWw6ICdNYXJzaGFsbCBJc2xhbmRzJyB9LFxuICB7IHZhbHVlOiAnTWFydGluaXF1ZScsIGxhYmVsOiAnTWFydGluaXF1ZScgfSxcbiAgeyB2YWx1ZTogJ01hdXJpdGFuaWEnLCBsYWJlbDogJ01hdXJpdGFuaWEnIH0sXG4gIHsgdmFsdWU6ICdNYXVyaXRpdXMnLCBsYWJlbDogJ01hdXJpdGl1cycgfSxcbiAgeyB2YWx1ZTogJ01heW90dGUnLCBsYWJlbDogJ01heW90dGUnIH0sXG4gIHsgdmFsdWU6ICdNZXhpY28nLCBsYWJlbDogJ01leGljbycgfSxcbiAge1xuICAgIHZhbHVlOiAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZicsXG4gICAgbGFiZWw6ICdNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ01vbGRvdmEsIFJlcHVibGljIG9mJywgbGFiZWw6ICdNb2xkb3ZhLCBSZXB1YmxpYyBvZicgfSxcbiAgeyB2YWx1ZTogJ01vbmFjbycsIGxhYmVsOiAnTW9uYWNvJyB9LFxuICB7IHZhbHVlOiAnTW9uZ29saWEnLCBsYWJlbDogJ01vbmdvbGlhJyB9LFxuICB7IHZhbHVlOiAnTW9udGVuZWdybycsIGxhYmVsOiAnTW9udGVuZWdybycgfSxcbiAgeyB2YWx1ZTogJ01vbnRzZXJyYXQnLCBsYWJlbDogJ01vbnRzZXJyYXQnIH0sXG4gIHsgdmFsdWU6ICdNb3JvY2NvJywgbGFiZWw6ICdNb3JvY2NvJyB9LFxuICB7IHZhbHVlOiAnTW96YW1iaXF1ZScsIGxhYmVsOiAnTW96YW1iaXF1ZScgfSxcbiAgeyB2YWx1ZTogJ015YW5tYXInLCBsYWJlbDogJ015YW5tYXInIH0sXG4gIHsgdmFsdWU6ICdOYW1pYmlhJywgbGFiZWw6ICdOYW1pYmlhJyB9LFxuICB7IHZhbHVlOiAnTmF1cnUnLCBsYWJlbDogJ05hdXJ1JyB9LFxuICB7IHZhbHVlOiAnTmVwYWwnLCBsYWJlbDogJ05lcGFsJyB9LFxuICB7IHZhbHVlOiAnTmV0aGVybGFuZHMnLCBsYWJlbDogJ05ldGhlcmxhbmRzJyB9LFxuICB7IHZhbHVlOiAnTmV3IENhbGVkb25pYScsIGxhYmVsOiAnTmV3IENhbGVkb25pYScgfSxcbiAgeyB2YWx1ZTogJ05ldyBaZWFsYW5kJywgbGFiZWw6ICdOZXcgWmVhbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ05pY2FyYWd1YScsIGxhYmVsOiAnTmljYXJhZ3VhJyB9LFxuICB7IHZhbHVlOiAnTmlnZXInLCBsYWJlbDogJ05pZ2VyJyB9LFxuICB7IHZhbHVlOiAnTmlnZXJpYScsIGxhYmVsOiAnTmlnZXJpYScgfSxcbiAgeyB2YWx1ZTogJ05pdWUnLCBsYWJlbDogJ05pdWUnIH0sXG4gIHsgdmFsdWU6ICdOb3Jmb2xrIElzbGFuZCcsIGxhYmVsOiAnTm9yZm9sayBJc2xhbmQnIH0sXG4gIHsgdmFsdWU6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLCBsYWJlbDogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ05vcndheScsIGxhYmVsOiAnTm9yd2F5JyB9LFxuICB7IHZhbHVlOiAnT21hbicsIGxhYmVsOiAnT21hbicgfSxcbiAgeyB2YWx1ZTogJ1Bha2lzdGFuJywgbGFiZWw6ICdQYWtpc3RhbicgfSxcbiAgeyB2YWx1ZTogJ1BhbGF1JywgbGFiZWw6ICdQYWxhdScgfSxcbiAge1xuICAgIHZhbHVlOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXG4gICAgbGFiZWw6ICdQYWxlc3RpbmlhbiBUZXJyaXRvcnksIE9jY3VwaWVkJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ1BhbmFtYScsIGxhYmVsOiAnUGFuYW1hJyB9LFxuICB7IHZhbHVlOiAnUGFwdWEgTmV3IEd1aW5lYScsIGxhYmVsOiAnUGFwdWEgTmV3IEd1aW5lYScgfSxcbiAgeyB2YWx1ZTogJ1BhcmFndWF5JywgbGFiZWw6ICdQYXJhZ3VheScgfSxcbiAgeyB2YWx1ZTogJ1BlcnUnLCBsYWJlbDogJ1BlcnUnIH0sXG4gIHsgdmFsdWU6ICdQaGlsaXBwaW5lcycsIGxhYmVsOiAnUGhpbGlwcGluZXMnIH0sXG4gIHsgdmFsdWU6ICdQaXRjYWlybicsIGxhYmVsOiAnUGl0Y2Fpcm4nIH0sXG4gIHsgdmFsdWU6ICdQb2xhbmQnLCBsYWJlbDogJ1BvbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ1BvcnR1Z2FsJywgbGFiZWw6ICdQb3J0dWdhbCcgfSxcbiAgeyB2YWx1ZTogJ1B1ZXJ0byBSaWNvJywgbGFiZWw6ICdQdWVydG8gUmljbycgfSxcbiAgeyB2YWx1ZTogJ1FhdGFyJywgbGFiZWw6ICdRYXRhcicgfSxcbiAgeyB2YWx1ZTogJ1JldW5pb24nLCBsYWJlbDogJ1JldW5pb24nIH0sXG4gIHsgdmFsdWU6ICdSb21hbmlhJywgbGFiZWw6ICdSb21hbmlhJyB9LFxuICB7IHZhbHVlOiAnUnVzc2lhJywgbGFiZWw6ICdSdXNzaWEnIH0sXG4gIHsgdmFsdWU6ICdSd2FuZGEnLCBsYWJlbDogJ1J3YW5kYScgfSxcbiAgeyB2YWx1ZTogJ1NhaW50IEhlbGVuYScsIGxhYmVsOiAnU2FpbnQgSGVsZW5hJyB9LFxuICB7IHZhbHVlOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJywgbGFiZWw6ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnIH0sXG4gIHsgdmFsdWU6ICdTYWludCBMdWNpYScsIGxhYmVsOiAnU2FpbnQgTHVjaWEnIH0sXG4gIHsgdmFsdWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJywgbGFiZWw6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyB9LFxuICB7XG4gICAgdmFsdWU6ICdTYWludCBWaW5jZW50IGFuZCBUaGUgR3JlbmFkaW5lcycsXG4gICAgbGFiZWw6ICdTYWludCBWaW5jZW50IGFuZCBUaGUgR3JlbmFkaW5lcycsXG4gIH0sXG4gIHsgdmFsdWU6ICdTYW1vYScsIGxhYmVsOiAnU2Ftb2EnIH0sXG4gIHsgdmFsdWU6ICdTYW4gTWFyaW5vJywgbGFiZWw6ICdTYW4gTWFyaW5vJyB9LFxuICB7IHZhbHVlOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJywgbGFiZWw6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnIH0sXG4gIHsgdmFsdWU6ICdTYXVkaSBBcmFiaWEnLCBsYWJlbDogJ1NhdWRpIEFyYWJpYScgfSxcbiAgeyB2YWx1ZTogJ1NlbmVnYWwnLCBsYWJlbDogJ1NlbmVnYWwnIH0sXG4gIHsgdmFsdWU6ICdTZXJiaWEnLCBsYWJlbDogJ1NlcmJpYScgfSxcbiAgeyB2YWx1ZTogJ1NleWNoZWxsZXMnLCBsYWJlbDogJ1NleWNoZWxsZXMnIH0sXG4gIHsgdmFsdWU6ICdTaWVycmEgTGVvbmUnLCBsYWJlbDogJ1NpZXJyYSBMZW9uZScgfSxcbiAgeyB2YWx1ZTogJ1NpbmdhcG9yZScsIGxhYmVsOiAnU2luZ2Fwb3JlJyB9LFxuICB7IHZhbHVlOiAnU2xvdmFraWEnLCBsYWJlbDogJ1Nsb3Zha2lhJyB9LFxuICB7IHZhbHVlOiAnU2xvdmVuaWEnLCBsYWJlbDogJ1Nsb3ZlbmlhJyB9LFxuICB7IHZhbHVlOiAnU29sb21vbiBJc2xhbmRzJywgbGFiZWw6ICdTb2xvbW9uIElzbGFuZHMnIH0sXG4gIHsgdmFsdWU6ICdTb21hbGlhJywgbGFiZWw6ICdTb21hbGlhJyB9LFxuICB7IHZhbHVlOiAnU291dGggQWZyaWNhJywgbGFiZWw6ICdTb3V0aCBBZnJpY2EnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ1NvdXRoIEdlb3JnaWEgYW5kIFRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgICBsYWJlbDogJ1NvdXRoIEdlb3JnaWEgYW5kIFRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgfSxcbiAgeyB2YWx1ZTogJ1NwYWluJywgbGFiZWw6ICdTcGFpbicgfSxcbiAgeyB2YWx1ZTogJ1NyaSBMYW5rYScsIGxhYmVsOiAnU3JpIExhbmthJyB9LFxuICB7IHZhbHVlOiAnU3VkYW4nLCBsYWJlbDogJ1N1ZGFuJyB9LFxuICB7IHZhbHVlOiAnU3VyaW5hbWUnLCBsYWJlbDogJ1N1cmluYW1lJyB9LFxuICB7IHZhbHVlOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsIGxhYmVsOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicgfSxcbiAgeyB2YWx1ZTogJ0Vzd2F0aW5pJywgbGFiZWw6ICdFc3dhdGluaScgfSxcbiAgeyB2YWx1ZTogJ1N3ZWRlbicsIGxhYmVsOiAnU3dlZGVuJyB9LFxuICB7IHZhbHVlOiAnU3dpdHplcmxhbmQnLCBsYWJlbDogJ1N3aXR6ZXJsYW5kJyB9LFxuICB7IHZhbHVlOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLCBsYWJlbDogJ1N5cmlhbiBBcmFiIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnVGFpd2FuIChST0MpJywgbGFiZWw6ICdUYWl3YW4gKFJPQyknIH0sXG4gIHsgdmFsdWU6ICdUYWppa2lzdGFuJywgbGFiZWw6ICdUYWppa2lzdGFuJyB9LFxuICB7XG4gICAgdmFsdWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcbiAgICBsYWJlbDogJ1RhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2YnLFxuICB9LFxuICB7IHZhbHVlOiAnVGhhaWxhbmQnLCBsYWJlbDogJ1RoYWlsYW5kJyB9LFxuICB7IHZhbHVlOiAnVGltb3ItbGVzdGUnLCBsYWJlbDogJ1RpbW9yLWxlc3RlJyB9LFxuICB7IHZhbHVlOiAnVG9nbycsIGxhYmVsOiAnVG9nbycgfSxcbiAgeyB2YWx1ZTogJ1Rva2VsYXUnLCBsYWJlbDogJ1Rva2VsYXUnIH0sXG4gIHsgdmFsdWU6ICdUb25nYScsIGxhYmVsOiAnVG9uZ2EnIH0sXG4gIHsgdmFsdWU6ICdUcmluaWRhZCBhbmQgVG9iYWdvJywgbGFiZWw6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyB9LFxuICB7IHZhbHVlOiAnVHVuaXNpYScsIGxhYmVsOiAnVHVuaXNpYScgfSxcbiAgeyB2YWx1ZTogJ1R1cmtleScsIGxhYmVsOiAnVHVya2V5JyB9LFxuICB7IHZhbHVlOiAnVHVya21lbmlzdGFuJywgbGFiZWw6ICdUdXJrbWVuaXN0YW4nIH0sXG4gIHsgdmFsdWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLCBsYWJlbDogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ1R1dmFsdScsIGxhYmVsOiAnVHV2YWx1JyB9LFxuICB7IHZhbHVlOiAnVWdhbmRhJywgbGFiZWw6ICdVZ2FuZGEnIH0sXG4gIHsgdmFsdWU6ICdVa3JhaW5lJywgbGFiZWw6ICdVa3JhaW5lJyB9LFxuICB7IHZhbHVlOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLCBsYWJlbDogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyB9LFxuICB7IHZhbHVlOiAnVW5pdGVkIEtpbmdkb20nLCBsYWJlbDogJ1VuaXRlZCBLaW5nZG9tJyB9LFxuICB7IHZhbHVlOiAnVW5pdGVkIFN0YXRlcycsIGxhYmVsOiAnVW5pdGVkIFN0YXRlcycgfSxcbiAge1xuICAgIHZhbHVlOiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcbiAgICBsYWJlbDogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcycsXG4gIH0sXG4gIHsgdmFsdWU6ICdVcnVndWF5JywgbGFiZWw6ICdVcnVndWF5JyB9LFxuICB7IHZhbHVlOiAnVXpiZWtpc3RhbicsIGxhYmVsOiAnVXpiZWtpc3RhbicgfSxcbiAgeyB2YWx1ZTogJ1ZhbnVhdHUnLCBsYWJlbDogJ1ZhbnVhdHUnIH0sXG4gIHsgdmFsdWU6ICdWZW5lenVlbGEnLCBsYWJlbDogJ1ZlbmV6dWVsYScgfSxcbiAgeyB2YWx1ZTogJ1ZpZXRuYW0nLCBsYWJlbDogJ1ZpZXRuYW0nIH0sXG4gIHsgdmFsdWU6ICdWaXJnaW4gSXNsYW5kcywgQnJpdGlzaCcsIGxhYmVsOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnIH0sXG4gIHsgdmFsdWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsIGxhYmVsOiAnVmlyZ2luIElzbGFuZHMsIFUuUy4nIH0sXG4gIHsgdmFsdWU6ICdXYWxsaXMgYW5kIEZ1dHVuYScsIGxhYmVsOiAnV2FsbGlzIGFuZCBGdXR1bmEnIH0sXG4gIHsgdmFsdWU6ICdXZXN0ZXJuIFNhaGFyYScsIGxhYmVsOiAnV2VzdGVybiBTYWhhcmEnIH0sXG4gIHsgdmFsdWU6ICdZZW1lbicsIGxhYmVsOiAnWWVtZW4nIH0sXG4gIHsgdmFsdWU6ICdaYW1iaWEnLCBsYWJlbDogJ1phbWJpYScgfSxcbiAgeyB2YWx1ZTogJ1ppbWJhYndlJywgbGFiZWw6ICdaaW1iYWJ3ZScgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cnlPcHRpb25zO1xuIiwiLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBjb2xsZWN0IGZvcm0gZGF0YSBhbmQgcHV0IGl0IGluIGEgdXNlciBvYmplY3RcblxuY29uc3QgbmV3VXNlciA9ICh1RW1haWwsIHVDb3VudHJ5LCB1WmlwQ29kZSwgdVBhc3N3b3JkLCB1UGFzc3dvcmRDb25maXJtKSA9PiB7XG4gIGNvbnN0IGVtYWlsID0gdUVtYWlsO1xuICBjb25zdCBjb3VudHJ5ID0gdUNvdW50cnk7XG4gIGNvbnN0IHppcENvZGUgPSB1WmlwQ29kZTtcbiAgY29uc3QgcGFzc3dvcmQgPSB1UGFzc3dvcmQ7XG4gIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IHVQYXNzd29yZENvbmZpcm07XG5cbiAgcmV0dXJuIHtcbiAgICBlbWFpbCxcbiAgICBjb3VudHJ5LFxuICAgIHppcENvZGUsXG4gICAgcGFzc3dvcmQsXG4gICAgcGFzc3dvcmRDb25maXJtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VXNlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNvdW50cnlPcHRpb25zIGZyb20gJy4vY291bnRyaWVzJztcbmltcG9ydCBuZXdVc2VyIGZyb20gJy4vdXNlcic7XG5cbi8vIENyZWF0ZSBwYWdlIGEgZm9ybSBET00gZWxlbWVudHMgdG8gaGFuZyBldmVyeXRoaW5nIG9uXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGlzcGxheS5pZCA9ICdkaXNwbGF5JztcblxuY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcm1DYXJkLmlkID0gJ2Zvcm0tY2FyZCc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ2Zvcm0nO1xuZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcblxuLy8gSU5QVVQgRklFTEQgQ1JFQVRJT04gQU5EIENVU1RPTSBWQUxJRElUWS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRU1BSUxcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmVtYWlsLmlkID0gJ2VtYWlsJztcbmVtYWlsLnR5cGUgPSAnZW1haWwnO1xuZW1haWwubmFtZSA9ICdlbWFpbCc7XG5lbWFpbC5yZXF1aXJlZCA9IHRydWU7XG5lbWFpbC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnO1xuZW1haWwubWluTGVuZ3RoID0gMztcbmVtYWlsLmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5lbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG5lbWFpbExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuZW1haWxMYWJlbC50ZXh0Q29udGVudCA9ICdFbWFpbCc7XG5jb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuZW1haWxFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuXG5jb25zdCBzaG93RW1haWxFcnJvciA9ICgpID0+IHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIC8vIElmIHRoZSBmaWVsZCBpcyBlbXB0eSxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuJztcbiAgICBlbWFpbC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIC8vIElmIHRoZSBmaWVsZCBkb2Vzbid0IGNvbnRhaW4gYW4gZW1haWwgYWRkcmVzcyxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyZWQgdmFsdWUgbmVlZHMgdG8gYmUgYW4gZW1haWwgYWRkcmVzcy4nO1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAvLyBJZiB0aGUgZGF0YSBpcyB0b28gc2hvcnQsXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9IGBFbWFpbCBzaG91bGQgYmUgYXQgbGVhc3QgJHtlbWFpbC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7ZW1haWwudmFsdWUubGVuZ3RofS5gO1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbmVtYWlsLm9uaW5wdXQgPSAoKSA9PiB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbWFpbC5jbGFzc05hbWUgPSAnaXNWYWxpZCc7XG4gIH0gZWxzZSBpZiAoIWVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgLy8gZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdpIGRvbnQgdGhvaW5rIHNvISc7XG4gICAgc2hvd0VtYWlsRXJyb3IoKTtcbiAgICBlbWFpbC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG4vLyBDT1VOVFJZXG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5jb3VudHJ5LmlkID0gJ2NvdW50cnknO1xuY291bnRyeS5yZXF1aXJlZCA9IHRydWU7XG5jb3VudHJ5LmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgY291bnRyeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvdW50cnlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbmNvdW50cnlMYWJlbC50ZXh0Q29udGVudCA9ICdDb3VudHJ5JztcbmNvbnN0IGNvdW50cnlFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNvdW50cnlFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuLy8gRGVmYXVsdCBvcHRpb24gZGlzcGxheSBvbiBsb2FkXG5jb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5kZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG5kZWZhdWx0T3B0aW9uLnRleHRDb250ZW50ID0gJ1NlbGVjdCBjb3VudHJ5JztcbmNvdW50cnkuYXBwZW5kQ2hpbGQoZGVmYXVsdE9wdGlvbik7XG4vLyBDcmVhdGUgYW4gb3B0aW9uIGZyb20gZWFjaCBjb3VudHJ5IGluIGNvdW50cnlPcHRpb25zIGFuZCBwdXQgaXQgaW4gdGhlIHNlbGVjdCBsaXN0XG5mb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cnlPcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSBjb3VudHJ5T3B0aW9uc1tpXS52YWx1ZTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gY291bnRyeU9wdGlvbnNbaV0ubGFiZWw7XG4gIGNvdW50cnkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuY29uc3Qgc2hvd0NvdW50cnlFcnJvciA9ICgpID0+IHtcbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIGNvdW50cnlFcnJvci50ZXh0Q29udGVudCA9ICdTZWxlY3QgY291bnRyeSc7XG4gICAgY291bnRyeS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG5jb3VudHJ5Lm9uaW5wdXQgPSAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgY291bnRyeS5jbGFzc05hbWUgPSAnaXNWYWxpZCc7XG4gIH0gZWxzZSBpZiAoIWNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93Q291bnRyeUVycm9yKCk7XG4gICAgY291bnRyeS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG4vLyBaSVAgQ09ERVxuY29uc3QgemlwQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG56aXBDb2RlLmlkID0gJ3ppcC1jb2RlJztcbnppcENvZGUudHlwZSA9ICd0ZXh0JztcbnppcENvZGUucmVxdWlyZWQgPSB0cnVlO1xuemlwQ29kZS5wYXR0ZXJuID0gJ1swLTldezV9JztcbnppcENvZGUubWF4TGVuZ3RoID0gNTtcbnppcENvZGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSA1IGRpZ2l0IFppcCBDb2RlJztcbnppcENvZGUuY2xhc3NMaXN0LmFkZCgnZGVmLWlucHV0Jyk7XG5jb25zdCB6aXBDb2RlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuemlwQ29kZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuemlwQ29kZUxhYmVsLnRleHRDb250ZW50ID0gJ1ppcCBDb2RlJztcbmNvbnN0IHppcENvZGVFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnppcENvZGVFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuXG5jb25zdCBzaG93WmlwQ29kZUVycm9yID0gKCkgPT4ge1xuICBpZiAoemlwQ29kZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgaXMgZW1wdHksXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgemlwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJ0VudGVyIGEgNSBkaWdpdCBaaXAgQ29kZS4nO1xuICAgIHppcENvZGUuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmICh6aXBDb2RlLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIC8vIElmIHRoZSBmaWVsZCBkb2Vzbid0IGNvbnRhaW4gYW4gemlwQ29kZSBhZGRyZXNzLFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHppcENvZGVFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlciBhIDUgZGlnaXQgWmlwIENvZGUuJztcbiAgICB6aXBDb2RlLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbnppcENvZGUub25pbnB1dCA9ICgpID0+IHtcbiAgaWYgKHppcENvZGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICB6aXBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB6aXBDb2RlLmNsYXNzTmFtZSA9ICdpc1ZhbGlkJztcbiAgfSBlbHNlIGlmICghemlwQ29kZS52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3daaXBDb2RlRXJyb3IoKTtcbiAgICB6aXBDb2RlLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbi8vIFBBU1NXT1JEXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wYXNzd29yZC5pZCA9ICdwYXNzd29yZCc7XG5wYXNzd29yZC50eXBlID0gJ3Bhc3N3b3JkJztcbnBhc3N3b3JkLnJlcXVpcmVkID0gdHJ1ZTtcbnBhc3N3b3JkLnBhdHRlcm4gPSAnKD89Lio/WzAtOV0pKD89Lio/W0EtWmEtel0pLisnO1xucGFzc3dvcmQubWluTGVuZ3RoID0gNjtcbnBhc3N3b3JkLnBsYWNlaG9sZGVyID0gJzYgY2hhci4gbGV0dGVyIGFuZCBudW1iZXInO1xucGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnZGVmLWlucHV0Jyk7XG5jb25zdCBwYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5wYXNzd29yZExhYmVsLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkJztcbmNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5wYXNzd29yZEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbmNvbnN0IHNob3dQYXNzd29yZEVycm9yID0gKCkgPT4ge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgYSBwYXNzd29yZCc7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggJiYgcGFzc3dvcmQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBtYXRjaCBsZXR0ZXIrbnVtYmVyIHBhdHRlcm4gb3IgaXMgdG9vIHNob3J0LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnNiBjaGFyYWN0ZXJzIGxvbmcgd2l0aCBhIG51bWJlciBhbmQgYSBsZXR0ZXInO1xuICAgIHBhc3N3b3JkLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBtZWV0IG1pbkxlbmd0aCxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ011c3QgYmUgNiBjaGFyZWN0ZXJzIGxvbmcgJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIC8vIElmIHRoZSBmaWVsZCBkb2Vzbid0IG1hdGNoIGxldHRlcitudW1iZXIgcGF0dGVybixcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ011c3QgY29udGFpbiBhIG51bWJlciBhbmQgYSBsZXR0ZXInO1xuICAgIHBhc3N3b3JkLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH1cbn07XG5cbnBhc3N3b3JkLm9uaW5wdXQgPSAoKSA9PiB7XG4gIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWxpZCkge1xuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnaXNWYWxpZCc7XG4gIH0gZWxzZSBpZiAoIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICBwYXNzd29yZC5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG4vLyBQQVNTV09SRCBDT05GSVJNXG5jb25zdCBwYXNzd29yZENvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGFzc3dvcmRDb25maXJtLmlkID0gJ3Bhc3N3b3JkLWNvbmZpcm0nO1xucGFzc3dvcmRDb25maXJtLnR5cGUgPSAncGFzc3dvcmQnO1xucGFzc3dvcmRDb25maXJtLnJlcXVpcmVkID0gdHJ1ZTtcbnBhc3N3b3JkQ29uZmlybS5wbGFjZWhvbGRlciA9ICdDb25maXJtIHlvdXIgcGFzc3dvcmQnO1xucGFzc3dvcmRDb25maXJtLmNsYXNzTGlzdC5hZGQoJ2RlZi1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRDb25maXJtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG5wYXNzd29yZENvbmZpcm1MYWJlbC50ZXh0Q29udGVudCA9ICdDb25maXJtIFBhc3N3b3JkJztcbmNvbnN0IHBhc3N3b3JkQ29uZmlybUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucGFzc3dvcmRDb25maXJtRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuY29uc3Qgc2hvd1Bhc3N3b3JkQ29uZmlybUVycm9yID0gKCkgPT4ge1xuICBpZiAocGFzc3dvcmRDb25maXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIC8vIElmIHRoZSBmaWVsZCBpcyBlbXB0eSxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZENvbmZpcm1FcnJvci50ZXh0Q29udGVudCA9ICdDb25maXJtIHlvdXIgcGFzc3dvcmQnO1xuICAgIHBhc3N3b3JkQ29uZmlybS5jbGFzc05hbWUgPSAnbm90VmFsaWQnO1xuICB9XG59O1xuXG5wYXNzd29yZENvbmZpcm0ub25pbnB1dCA9ICgpID0+IHtcbiAgLy8gY29uc3QgcGFzc3dvcmRHcmFiYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XG4gIGlmIChwYXNzd29yZENvbmZpcm0udmFsdWUgIT09IHBhc3N3b3JkLnZhbHVlKSB7XG4gICAgLy8gSWYgcGFzc3dvcmQgY29uZmlybSBkb2Vzbid0IG1hdGNoIHBhc3N3b3JkXG4gICAgcGFzc3dvcmRDb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCc7XG4gICAgcGFzc3dvcmRDb25maXJtLmNsYXNzTmFtZSA9ICdub3RWYWxpZCc7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmRDb25maXJtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgcGFzc3dvcmRDb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYXNzd29yZENvbmZpcm0uY2xhc3NOYW1lID0gJ2lzVmFsaWQnO1xuICB9IGVsc2UgaWYgKCFwYXNzd29yZENvbmZpcm0udmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93UGFzc3dvcmRDb25maXJtRXJyb3IoKTtcbiAgICBwYXNzd29yZENvbmZpcm0uY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgfVxufTtcblxuLy8gUHV0IHRob3NlIGVsZW1lbnRzIGluIGFuIGFycmF5IHRvIGxvb3AgdGhyb3VnaCBmb3IgRE9NIGNyZWF0aW9uIGJlbG93LlxuY29uc3QgaW5wdXRzID0gW1xuICBlbWFpbExhYmVsLFxuICBlbWFpbCxcbiAgZW1haWxFcnJvcixcbiAgY291bnRyeUxhYmVsLFxuICBjb3VudHJ5LFxuICBjb3VudHJ5RXJyb3IsXG4gIHppcENvZGVMYWJlbCxcbiAgemlwQ29kZSxcbiAgemlwQ29kZUVycm9yLFxuICBwYXNzd29yZExhYmVsLFxuICBwYXNzd29yZCxcbiAgcGFzc3dvcmRFcnJvcixcbiAgcGFzc3dvcmRDb25maXJtTGFiZWwsXG4gIHBhc3N3b3JkQ29uZmlybSxcbiAgcGFzc3dvcmRDb25maXJtRXJyb3IsXG5dO1xuXG4vLyBQdXQgZWFjaCBncm91cCBvZiBsYWJlbCwgaW5wdXQsIGFuZCBlcnJvciBzcGFuIGludG8gYSBmb3JtRmllbGQgZGl2IGZvciBzdHlsaW5nLlxuZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpICs9IDMpIHtcbiAgY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCdmb3JtLWZpZWxkJyk7XG4gIGNvbnN0IGdyYWJiZXIgPSBpICsgMTtcbiAgY29uc3QgZ3JhYmJlcjIgPSBpICsgMjtcbiAgZm9ybUZpZWxkLmFwcGVuZENoaWxkKGlucHV0c1tpXSk7XG4gIGZvcm1GaWVsZC5hcHBlbmRDaGlsZChpbnB1dHNbZ3JhYmJlcl0pO1xuICBmb3JtRmllbGQuYXBwZW5kQ2hpbGQoaW5wdXRzW2dyYWJiZXIyXSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRmllbGQpO1xufVxuXG4vLyBTVUJNSVQgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3Qgc3VibWl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXQtYnV0dG9uJztcbnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0Qm94LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJveCk7XG5cbnN1Ym1pdEJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgLy8gY291bnRlciB0byB2ZXJpZnkgZWFjaCByZXF1aXJlbWVudCBpcyBtZXQgYW5kIGZvcm0gbWF5IGJlIHN1Ym1pdHRlZFxuICBsZXQgdmVyaWZ5ID0gMDtcbiAgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgIC8vIElmIGl0IGlzbid0LCB3ZSBkaXNwbGF5IGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2VcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICAgIC8vIFRoZW4gd2UgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHNlbnQgYnkgY2FuY2VsaW5nIHRoZSBldmVudFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJpZnkgKz0gMTtcbiAgfVxuICBpZiAoIWNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxheSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgIC8vIFRoZW4gd2UgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHNlbnQgYnkgY2FuY2VsaW5nIHRoZSBldmVudFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJpZnkgKz0gMTtcbiAgfVxuICBpZiAoIXppcENvZGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxheSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gICAgc2hvd1ppcENvZGVFcnJvcigpO1xuICAgIC8vIFRoZW4gd2UgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHNlbnQgYnkgY2FuY2VsaW5nIHRoZSBldmVudFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJpZnkgKz0gMTtcbiAgfVxuICBpZiAoIXBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgLy8gSWYgaXQgaXNuJ3QsIHdlIGRpc3BsYXkgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZVxuICAgIHNob3dQYXNzd29yZEVycm9yKCk7XG4gICAgLy8gVGhlbiB3ZSBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudCBieSBjYW5jZWxpbmcgdGhlIGV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2Uge1xuICAgIHZlcmlmeSArPSAxO1xuICB9XG4gIGlmICghcGFzc3dvcmRDb25maXJtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgLy8gSWYgaXQgaXNuJ3QsIHdlIGRpc3BsYXkgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZVxuICAgIHNob3dQYXNzd29yZENvbmZpcm1FcnJvcigpO1xuICAgIC8vIFRoZW4gd2UgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHNlbnQgYnkgY2FuY2VsaW5nIHRoZSBldmVudFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIGlmIChwYXNzd29yZENvbmZpcm0udmFsdWUgIT09IHBhc3N3b3JkLnZhbHVlKSB7XG4gICAgLy8gSWYgdGhlIGNvbmZpcm0gcGFzc3dvcmQgZmllbGQgZG9lc24ndCBtYXRjaCBwYXNzd29yZCBmaWVsZCxcbiAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICBwYXNzd29yZENvbmZpcm1FcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcbiAgICBwYXNzd29yZENvbmZpcm0uY2xhc3NOYW1lID0gJ25vdFZhbGlkJztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSB7XG4gICAgdmVyaWZ5ICs9IDE7XG4gIH1cbiAgLy8gSWYgYWxsIHZlcmlmaWNhdGlvbnMgYXJlIG1ldCwgcHV0IGFsbCBpbnB1dCBkYXRhIGludG8gYSBuZXdVc2VyIG9iamVjdCxcbiAgLy8gQWxlcnQgZGlzcGxheWluZyB0aGF0IHVzZXIgaW5mbyBhbmQgU3VibWl0LlxuICBpZiAodmVyaWZ5ID09PSA1KSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gZW1haWwudmFsdWU7XG4gICAgY29uc3QgdXNlckNvdW50cnkgPSBjb3VudHJ5LnZhbHVlO1xuICAgIGNvbnN0IHVzZXJaaXBDb2RlID0gemlwQ29kZS52YWx1ZTtcbiAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCB1c2VyUGFzc3dvcmRDb25maXJtID0gcGFzc3dvcmRDb25maXJtLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gbmV3VXNlcihcbiAgICAgIHVzZXJFbWFpbCxcbiAgICAgIHVzZXJDb3VudHJ5LFxuICAgICAgdXNlclppcENvZGUsXG4gICAgICB1c2VyUGFzc3dvcmQsXG4gICAgICB1c2VyUGFzc3dvcmRDb25maXJtLFxuICAgICk7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgfVxufTtcblxuLy8gUFVUIEFMTCBPRiBUSEFUIE9OIFRIRSBQQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZvcm1DYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5kaXNwbGF5LmFwcGVuZChmb3JtQ2FyZCk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5cbi8vIGpzIHN0eWxlIHRoYXQgb3VnaHQgdG8gYmUgcmVwbGFjZWQgd2l0aGluIHN0eWxlLmNzc1xuc3VibWl0QnRuLnN0eWxlLndpZHRoID0gJzE1MHB4Jztcblxuc3VibWl0Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5zdWJtaXRCb3guc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbnN1Ym1pdEJveC5zdHlsZS5tYXJnaW5Ub3AgPSAnNXB4JztcblxuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuZm9ybS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuZm9ybS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG5mb3JtLnN0eWxlLndpZHRoID0gJzI3NXB4JztcblxuZm9ybUNhcmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvcm1DYXJkLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5mb3JtQ2FyZC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5mb3JtQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGVzbW9rZSc7XG5mb3JtQ2FyZC5zdHlsZS5wYWRkaW5nID0gJzQwcHgnO1xuXG5kaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5kaXNwbGF5LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuZGlzcGxheS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuZGlzcGxheS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuZGlzcGxheS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=