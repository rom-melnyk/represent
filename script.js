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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRepresent", function() { return initRepresent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transitions__ = __webpack_require__(7);





function initRepresent() {
    window.addEventListener('keydown', ({ key, shiftKey }) => {
        // console.info(arguments[0]);
        switch (key) {
            case '?':
                // TBD show help
                break;
            case 'ArrowLeft':
                Object(__WEBPACK_IMPORTED_MODULE_2__transitions__["d" /* previousSlide */])();
                break;
            case 'ArrowRight':
                Object(__WEBPACK_IMPORTED_MODULE_2__transitions__["b" /* nextSlide */])();
                break;
            case ' ':
                if (shiftKey) {
                    Object(__WEBPACK_IMPORTED_MODULE_2__transitions__["e" /* previousTransition */])();
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_2__transitions__["c" /* nextTransition */])();
                }
                break;
            default:
        }
    });

    const leftControlElem = document.querySelector('body > .controls.left');
    const rightControlElem = document.querySelector('body > .controls.right');

    if (leftControlElem) {
        leftControlElem.addEventListener('click', __WEBPACK_IMPORTED_MODULE_2__transitions__["d" /* previousSlide */]);
    }
    if (rightControlElem) {
        rightControlElem.addEventListener('click', __WEBPACK_IMPORTED_MODULE_2__transitions__["b" /* nextSlide */]);
    }

    const paginationElem = document.querySelector('footer > .pagination');
    if (paginationElem) {
        paginationElem.addEventListener('click', ({ target }) => {
            const targetClassList = target && target.classList;
            if (targetClassList && targetClassList.contains('page') && !targetClassList.contains('current')) {
                Object(__WEBPACK_IMPORTED_MODULE_2__transitions__["a" /* goToSlide */])(target.innerText);
            }
        });
    }
}

if (typeof window !== 'undefined') {
    window.initRepresent = initRepresent;
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "html, body {\n  background-color: #bdccdb;\n  color: #0b2641;\n  font-family: sans-serif;\n  font-size: 2.5vh;\n  font-weight: normal; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 1em 0 0.25em;\n  font-weight: normal;\n  white-space: nowrap; }\n\nh1 {\n  font-size: 2.50em; }\n\nh2 {\n  font-size: 2.00em; }\n\nh3 {\n  font-size: 1.75em; }\n\nh4 {\n  font-size: 1.50em; }\n\nh5 {\n  font-size: 1.25em; }\n\nh6 {\n  font-size: 1.10em; }\n\nbody > header {\n  position: absolute;\n  width: 100%;\n  height: 25vh;\n  top: 0;\n  left: 0;\n  padding: 0 2em;\n  background-color: transparent;\n  opacity: 0;\n  transition: background-color 150ms linear, opacity 150ms linear; }\n  body > header > h1 {\n    margin-top: -6em;\n    transition: margin 150ms linear; }\n  body > header > h2 {\n    margin-top: 0; }\n  body > header:hover {\n    opacity: 1;\n    background-color: #bdccdb; }\n    body > header:hover > h1 {\n      margin-top: 1em; }\n\nbody > .controls {\n  position: absolute;\n  width: 15vw;\n  height: 60vh;\n  top: 25vh;\n  cursor: pointer; }\n  body > .controls.left::after, body > .controls.right::after {\n    display: inline-block;\n    width: 100%;\n    line-height: 60vh;\n    font-size: 2em;\n    vertical-align: middle;\n    text-align: center;\n    transition: margin 150ms linear; }\n  body > .controls.left {\n    left: 0; }\n    body > .controls.left::after {\n      margin-left: -100%;\n      content: \"u2190\"; }\n    body > .controls.left:hover::after {\n      margin-left: 0; }\n  body > .controls.right {\n    right: 0; }\n    body > .controls.right::after {\n      margin-left: 100%;\n      content: \"u2192\"; }\n    body > .controls.right:hover::after {\n      margin-left: 0; }\n\n.button, body > footer > .pagination .page {\n  display: inline-block;\n  padding: 0 .75em;\n  margin-right: .5em;\n  line-height: 2em;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 0.25em;\n  border: 1px solid #bdccdb;\n  transition: background-color 150ms linear; }\n  .button:last-child, body > footer > .pagination .page:last-child {\n    margin-right: 0; }\n  .button:hover, body > footer > .pagination .page:hover {\n    background-color: #8ba6c1; }\n\nbody > footer {\n  position: absolute;\n  width: 100%;\n  height: 15vh;\n  bottom: 0;\n  left: 0;\n  padding: 1em 1em 0;\n  opacity: 0;\n  transition: opacity 150ms linear; }\n  body > footer > .pagination {\n    margin-top: 6em;\n    opacity: 0;\n    white-space: nowrap;\n    transition: margin 150ms linear; }\n    body > footer > .pagination .page.current {\n      cursor: default;\n      background-color: #8ba6c1; }\n  body > footer > .credits {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    padding: .25rem 2rem;\n    font-size: .75em;\n    text-align: center;\n    color: white;\n    background-color: #8ba6c1;\n    opacity: 0;\n    transition: opacity 150ms linear; }\n  body > footer:hover {\n    opacity: 1; }\n    body > footer:hover > .pagination {\n      margin-top: 0;\n      opacity: 1; }\n    body > footer:hover > .credits {\n      opacity: 1; }\n\n.button, body > footer > .pagination .page {\n  display: inline-block;\n  padding: 0 .75em;\n  margin-right: .5em;\n  line-height: 2em;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 0.25em;\n  border: 1px solid #bdccdb;\n  transition: background-color 150ms linear; }\n  .button:last-child, body > footer > .pagination .page:last-child {\n    margin-right: 0; }\n  .button:hover, body > footer > .pagination .page:hover {\n    background-color: #8ba6c1; }\n\n.slides {\n  width: 100%;\n  height: 100%;\n  padding: 2em; }\n  .slides > .slide > h1:first-child {\n    margin-top: calc(1em - 2rem); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n", "", {"version":3,"sources":["/home/rom/Prj/represent/src/scss/src/scss/_text.scss","/home/rom/Prj/represent/src/scss/src/scss/_config.scss","/home/rom/Prj/represent/src/scss/src/scss/_header.scss","/home/rom/Prj/represent/src/scss/src/scss/_controls.scss","/home/rom/Prj/represent/src/scss/src/scss/_interactives.scss","/home/rom/Prj/represent/src/scss/src/scss/_footer.scss","/home/rom/Prj/represent/src/scss/src/scss/_slide.scss","/home/rom/Prj/represent/src/scss/src/scss/style.scss"],"names":[],"mappings":"AAGA;EACE,0BCDiC;EDEjC,eCA6B;EDE7B,wBAAuB;EACvB,iBAAgB;EAChB,oBAAmB,EACpB;;AAGD;EACE,qBCNkB;EDOlB,oBAAmB;EACnB,oBAAmB,EACpB;;AAED;EAAK,kBAAiB,EAAK;;AAC3B;EAAK,kBAAiB,EAAK;;AAC3B;EAAK,kBAAiB,EAAK;;AAC3B;EAAK,kBAAiB,EAAK;;AAC3B;EAAK,kBAAiB,EAAK;;AAC3B;EAAK,kBAAiB,EAAK;;AErB3B;EACE,mBAAkB;EAClB,YAAW;EACX,aDQkB;ECPlB,OAAM;EACN,QAAO;EACP,eDEW;ECDX,8BAA6B;EAC7B,WAAU;EACV,gEDZ8B,EC+B/B;EA5BD;IAaI,iBAAgB;IAChB,gCDjB4B,ECkB7B;EAfH;IAkBI,cAAa,EACd;EAnBH;IAuBI,WAAU;IACV,0BDxB+B,EC2BhC;IA3BH;MA0Ba,gBDnBG,ECmBwB;;AC1BxC;EACE,mBAAkB;EAClB,YFWkB;EEVlB,aAA+C;EAC/C,UFOkB;EELlB,gBAAe,EAqChB;EA3CD;IAUI,sBAAqB;IACrB,YAAW;IAEX,kBAAiB;IACjB,eFNS;IEOT,uBAAsB;IACtB,mBAAkB;IAElB,gCFrB4B,EEsB7B;EAnBH;IAsBI,QAAO,EAQR;IA9BH;MAyBM,mBAAkB;MAClB,iBAAiB,EAClB;IA3BL;MA6BqB,eAAc,EAAK;EA7BxC;IAiCI,SAAQ,EAQT;IAzCH;MAoCM,kBAAiB;MACjB,iBAAiB,EAClB;IAtCL;MAwCqB,eAAc,EAAK;;ACxCxC;EACE,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAElB,iBHGW;EGFX,uBAAsB;EAEtB,gBAAe;EACf,sBHJkB;EGKlB,0BHViC;EGWjC,0CHd8B,EGmB/B;EAhBD;IAaiB,gBAAe,EAAK;EAbrC;IAeY,0BHdsB,EGcc;;ACdhD;EACE,mBAAkB;EAClB,YAAW;EACX,aJQkB;EIPlB,UAAS;EACT,QAAO;EAEP,mBAAkC;EAElC,WAAU;EACV,iCJd8B,EI6D/B;EAzDD;IAcI,gBAAe;IACf,WAAU;IACV,oBAAmB;IACnB,gCJrB4B,EI+B7B;IA3BH;MAuBQ,gBAAe;MACf,0BJxB0B,EIyB3B;EAzBP;IA+BI,mBAAkB;IAClB,YAAW;IACX,UAAS;IACT,QAAO;IAEP,qBAAoB;IACpB,iBAAgB;IAChB,mBAAkB;IAElB,aAAY;IACZ,0BJzC8B;II0C9B,WAAU;IACV,iCJ/C4B,EIgD7B;EA5CH;IAgDI,WAAU,EAQX;IAxDH;MAmDM,cAAa;MACb,WAAU,EACX;IArDL;MAuDmB,WAAU,EAAK;;ADxDlC;EACE,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAElB,iBHGW;EGFX,uBAAsB;EAEtB,gBAAe;EACf,sBHJkB;EGKlB,0BHViC;EGWjC,0CHd8B,EGmB/B;EAhBD;IAaiB,gBAAe,EAAK;EAbrC;IAeY,0BHdsB,EGcc;;AEfhD;EACE,YAAW;EACX,aAAY;EACZ,aLKW,EKAZ;EARD;IAMI,6BAA4B,EAC7B;;ACCH;EACE,UAAS;EACT,WAAU;EACV,uBAAsB,EACvB;;AAGD;EACE,YAAW;EACX,aAAY;EACZ,iBAAgB,EACjB","file":"style.scss","sourcesContent":["@import \"_config\";\n\n\nhtml, body {\n  background-color: $color-xx-light;\n  color: $color-dark;\n\n  font-family: sans-serif;\n  font-size: 2.5vh;\n  font-weight: normal;\n}\n\n\nh1, h2, h3, h4, h5, h6 {\n  margin: $gap-medium 0 $gap-xx-small;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\nh1 { font-size: 2.50em; }\nh2 { font-size: 2.00em; }\nh3 { font-size: 1.75em; }\nh4 { font-size: 1.50em; }\nh5 { font-size: 1.25em; }\nh6 { font-size: 1.10em; }","$transition-params: 150ms linear;\n\n\n$color-xx-light: hsl(210, 30%, 80%);\n$color-x-light: hsl(210, 30%, 65%);\n$color-dark: hsl(210, 70%, 15%);\n\n\n$gap-xx-small: .25em;\n$gap-x-small: .5em;\n$gap-medium: 1em;\n$gap-big: 2em;\n\n\n$header-height: 25vh;\n$footer-height: 15vh;\n$control-width: 15vw;\n","@import \"_config\";\n\n\nbody > header {\n  position: absolute;\n  width: 100%;\n  height: $header-height;\n  top: 0;\n  left: 0;\n  padding: 0 $gap-big;\n  background-color: transparent;\n  opacity: 0;\n  transition: background-color $transition-params, opacity $transition-params;\n\n\n  & > h1 {\n    margin-top: -6em;\n    transition: margin $transition-params;\n  }\n\n  & > h2 {\n    margin-top: 0;\n  }\n\n\n  &:hover {\n    opacity: 1;\n    background-color: $color-xx-light;\n\n    & > h1 { margin-top: $gap-medium; }\n  }\n}\n","@import \"_config\";\n\n\nbody > .controls {\n  position: absolute;\n  width: $control-width;\n  height: 100vh - $header-height - $footer-height;\n  top: $header-height;\n\n  cursor: pointer;\n\n\n  &.left::after, &.right::after {\n    display: inline-block;\n    width: 100%;\n\n    line-height: 60vh;\n    font-size: $gap-big;\n    vertical-align: middle;\n    text-align: center;\n\n    transition: margin $transition-params;\n  }\n\n  &.left {\n    left: 0;\n\n    &::after {\n      margin-left: -100%;\n      content: \"\\u2190\";\n    }\n\n    &:hover::after { margin-left: 0; }\n  }\n\n  &.right {\n    right: 0;\n\n    &::after {\n      margin-left: 100%;\n      content: \"\\u2192\";\n    }\n\n    &:hover::after { margin-left: 0; }\n  }\n\n}\n","@import \"_config\";\n\n\n.button {\n  display: inline-block;\n  padding: 0 .75em;\n  margin-right: .5em;\n\n  line-height: $gap-big;\n  vertical-align: middle;\n\n  cursor: pointer;\n  border-radius: $gap-xx-small;\n  border: 1px solid $color-xx-light;\n  transition: background-color $transition-params;\n\n  &:last-child { margin-right: 0; }\n\n  &:hover { background-color: $color-x-light; }\n}","@import \"_config\";\n@import \"_interactives\";\n\n\nbody > footer {\n  position: absolute;\n  width: 100%;\n  height: $footer-height;\n  bottom: 0;\n  left: 0;\n\n  padding: $gap-medium $gap-medium 0;\n\n  opacity: 0;\n  transition: opacity $transition-params;\n\n\n  & > .pagination {\n    margin-top: 6em;\n    opacity: 0;\n    white-space: nowrap;\n    transition: margin $transition-params;\n\n    & .page {\n      @extend .button;\n\n      &.current {\n        cursor: default;\n        background-color: $color-x-light;\n      }\n    }\n  }\n\n\n  & > .credits {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n\n    padding: .25rem 2rem;\n    font-size: .75em;\n    text-align: center;\n\n    color: white;\n    background-color: $color-x-light;\n    opacity: 0;\n    transition: opacity $transition-params;\n  }\n\n\n  &:hover {\n    opacity: 1;\n\n    & > .pagination {\n      margin-top: 0;\n      opacity: 1;\n    }\n\n    & > .credits { opacity: 1; }\n  }\n}\n","@import \"_config\";\n\n\n.slides {\n  width: 100%;\n  height: 100%;\n  padding: $gap-big;\n\n  & > .slide > h1:first-child {\n    margin-top: calc(1em - 2rem);\n  }\n}\n","@import \"_config\";\n@import \"_text\";\n\n@import \"_header\";\n@import \"_controls\";\n@import \"_footer\";\n@import \"_interactives\";\n\n@import \"_slide\";\n\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export qs */
/* unused harmony export qsa */
const qs = document.querySelector;
const qsa = (...args) => {
    return Array.from(document.querySelector.apply(document, args));
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return previousSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nextSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return goToSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return previousTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nextTransition; });
function nextSlide() {
    console.info('Next slide');
}

function previousSlide() {
    console.info('Previous slide');
}

function goToSlide(no) {
    console.info(`Go to slide #${no}`);
}

function nextTransition() {
    console.info(`Next transition`);
}

function previousTransition() {
    console.info('Previous transition');
}



/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map