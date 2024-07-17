/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inputmask_lib_inputmask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inputmask/lib/inputmask.js */ "./node_modules/inputmask/lib/inputmask.js");
/* harmony import */ var _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/ResponsiveSlider */ "./src/js/ResponsiveSlider.js");
/* harmony import */ var _js_components_product_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/product-card */ "./src/js/components/product-card.js");
/* harmony import */ var _js_components_project_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/components/project-card */ "./src/js/components/project-card.js");
/* harmony import */ var _js_components_catalog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/components/catalog */ "./src/js/components/catalog.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");


// import Choices from "choices.js";
// import 'choices.js/public/assets/styles/choices.min.css'







swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller]);
document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.querySelector('.header');
  new _js_header__WEBPACK_IMPORTED_MODULE_2__.SeasonsHeader(header);
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero__slider .swiper', {
    speed: 400,
    spaceBetween: 0,
    preloadImages: false,
    lazy: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.hero__slider .swiper-pagination',
      type: 'bullets'
    }
  });
  new _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider('.promo__slider').initSwipers({
    spaceBetween: 30,
    slidesPerView: "auto",
    slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    breakpoints: {
      992: {
        spaceBetween: 40,
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      },
      1241: {
        spaceBetween: 120,
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      }
    }
  });
  new _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider('.our-services__content').initSwipers({
    spaceBetween: 10,
    slidesPerView: "auto",
    slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: "auto",
        slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey()
      },
      1240: {
        spaceBetween: 40,
        slidesPerView: 4,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      }
    },
    pagination: {
      el: '.our-services__items .swiper-pagination-circles',
      type: 'bullets'
    }
  });
  new _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider('.news-preview').initSwipers({
    spaceBetween: 10,
    slidesPerView: "auto",
    slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: "auto",
        slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey()
      },
      992: {
        spaceBetween: 40,
        slidesPerView: "auto",
        slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey()
      },
      1240: {
        spaceBetween: 60,
        slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey()
      }
    },
    pagination: {
      el: '.news-preview__content .swiper-pagination-circles',
      type: 'bullets'
    }
  }, true);
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".reviews__swiper.swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__navigation .nav-next',
      prevEl: '.reviews__navigation .nav-prev'
    }
  });
  new _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider('.experts-slider').initSwipers({
    slidesOffsetBefore: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetAfter: _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSlider.getOffsetKey(),
    spaceBetween: 30,
    slidesPerView: "auto",
    breakpoints: {
      // when window width is >= 320px
      601: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      },
      801: {
        spaceBetween: 36,
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      },
      1241: {
        spaceBetween: 48,
        slidesPerView: 4,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      }
    }
  }, true);
  function scrollToElementWithHeaderOffset(element, header) {
    var headerHeight = document.querySelector('header').offsetHeight; // Высота хедера
    var elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно верхней границы окна
    var offsetPosition = elementPosition - headerHeight; // Позиция с учетом высоты хедера

    setTimeout(function () {
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 0);
  }
  var tabsBlock = document.querySelectorAll('[data-tabs]');
  if (tabsBlock.length) {
    tabsBlock.forEach(function (tabsBlock) {
      var btns = tabsBlock.querySelectorAll('[data-tab]');
      var blocks = tabsBlock.querySelectorAll('[data-tab-block]');
      var _iterator = _createForOfIteratorHelper(btns),
        _step;
      try {
        var _loop = function _loop() {
          var btn = _step.value;
          btn.addEventListener('click', function () {
            var id = parseInt(btn.getAttribute('data-tab'));
            var _iterator2 = _createForOfIteratorHelper(blocks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var block = _step2.value;
                if (parseInt(block.getAttribute('data-tab-block')) === id) {
                  block.setAttribute('data-active', '');
                  scrollToElementWithHeaderOffset(tabsBlock);
                } else {
                  block.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            btn.setAttribute('data-active', '');
            var _iterator3 = _createForOfIteratorHelper(btns),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var otherBtn = _step3.value;
                if (parseInt(otherBtn.getAttribute('data-tab')) !== id) {
                  otherBtn.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  var doProportionIcon = function doProportionIcon(icons) {
    var _iterator4 = _createForOfIteratorHelper(icons),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var icon = _step4.value;
        var widthAttr = icon.getAttribute('width');
        var widthReal = icon.clientWidth;
        var heightAttr = icon.getAttribute('height');
        var heightReal = widthReal / widthAttr * heightAttr;
        icon.style.height = "".concat(heightReal, "px");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  var icons = document.querySelectorAll('.icon-pr');
  if (icons.length) {
    doProportionIcon(icons);
    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      doProportionIcon(icons);
    }, 300));
  }
  var showRoomImg = document.querySelectorAll('.showroom-pictures__small img');
  if (showRoomImg.length) {
    showRoomImg.forEach(function (showRoomImage) {
      var showRoomImgContainer = document.querySelector('.showroom-pictures__big img');
      showRoomImage.addEventListener('click', function (evt) {
        var showRoomThumbsContainer = showRoomImage.closest('.showroom-pictures__list');
        showRoomThumbsContainer.querySelector('.showroom-pictures__small.active').classList.remove('active');
        showRoomImage.closest('.showroom-pictures__small').classList.add('active');
        var newSrc = showRoomImage.src;
        showRoomImgContainer.src = newSrc;
        var newSrcSet = showRoomImage.srcset;
        showRoomImgContainer.srcset = newSrcSet;
      });
      showRoomImage.addEventListener('mouseover', function (evt) {
        var showRoomThumbsContainer = showRoomImage.closest('.showroom-pictures__list');
        showRoomThumbsContainer.querySelector('.showroom-pictures__small.active').classList.remove('active');
        showRoomImage.closest('.showroom-pictures__small').classList.add('active');
        var newSrc = showRoomImage.src;
        showRoomImgContainer.src = newSrc;
        var newSrcSet = showRoomImage.srcset;
        showRoomImgContainer.srcset = newSrcSet;
      });
    });
  }
});

/***/ }),

/***/ "./src/js/ResponsiveSlider.js":
/*!************************************!*\
  !*** ./src/js/ResponsiveSlider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveSlider: function() { return /* binding */ ResponsiveSlider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ResponsiveSlider = /*#__PURE__*/function () {
  function ResponsiveSlider(selector) {
    var containerSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, ResponsiveSlider);
    this._selector = selector;
    this._sliders = document.querySelectorAll("".concat(selector));
    if (!containerSelector) {
      this._container = document.querySelector('.container');
    } else {
      this._container = document.querySelector("".concat(containerSelector));
    }
    if (this._sliders) {
      this.initSwipers = this.initSwipers.bind(this);
      this._reinitSlider = this._reinitSlider.bind(this);
    }
  }
  return _createClass(ResponsiveSlider, [{
    key: "_getContainerWidth",
    value: function _getContainerWidth() {
      var fullWidth = this._container.getBoundingClientRect().width;
      var style = window.getComputedStyle(this._container);
      var paddingLeft = parseFloat(style.paddingLeft);
      var paddingRight = parseFloat(style.paddingRight);
      return (window.innerWidth - (fullWidth - paddingLeft - paddingRight)) / 2;
    }
  }, {
    key: "_updateBreakpointConfig",
    value: function _updateBreakpointConfig(breakpoints, distanceFromEdge) {
      var _this = this;
      var reInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      Object.keys(breakpoints).forEach(function (breakpoint) {
        if (reInit) {
          breakpoints[breakpoint].slidesOffsetBefore ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        } else {
          breakpoints[breakpoint].slidesOffsetBefore === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        }
      });
    }
  }, {
    key: "_setDataForSwiper",
    value: function _setDataForSwiper(swiperConfig) {
      var reInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var distanceFromEdge = this._getContainerWidth();
      if (reInit) {
        swiperConfig.slidesOffsetBefore ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      } else {
        swiperConfig.slidesOffsetBefore === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      }
      if (swiperConfig.breakpoints) {
        this._updateBreakpointConfig(swiperConfig.breakpoints, distanceFromEdge, reInit);
      }
      return swiperConfig;
    }
  }, {
    key: "_reinitSlider",
    value: function _reinitSlider() {
      var _this2 = this;
      this._initedSliders.forEach(function (value, ind) {
        _this2._initedSliders.get(ind).slider.destroy();
        var updatedConfig = _this2._setDataForSwiper(_this2._initedSliders.get(ind).config, true);
        _this2._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("".concat(_this2._selector, "[data-slider=\"").concat(ind, "\"] .swiper")), updatedConfig)
        });
      });
    }
  }, {
    key: "_addNavigation",
    value: function _addNavigation(config, selector, ind) {
      config.navigation = {
        nextEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-next"),
        prevEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-prev")
      };
      return config;
    }
  }, {
    key: "initSwipers",
    value: function initSwipers(swiperConfig) {
      var _this3 = this;
      var navNeeded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._initedSliders = new Map();
      this._sliders.forEach(function (slider, ind) {
        slider.setAttribute('data-slider', ind);
        var updatedConfig = _this3._setDataForSwiper(swiperConfig);
        if (navNeeded) {
          updatedConfig = _this3._addNavigation(updatedConfig, _this3._selector, ind);
        }
        _this3._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider.querySelector('.swiper'), updatedConfig)
        });
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this._reinitSlider, 100));
    }
  }], [{
    key: "getOffsetKey",
    value: function getOffsetKey() {
      return 'SHOULD_BE_COUNTED';
    }
  }]);
}();

/***/ }),

/***/ "./src/js/components/catalog.js":
/*!**************************************!*\
  !*** ./src/js/components/catalog.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");

document.addEventListener("DOMContentLoaded", function (event) {
  var moreInFilters = document.querySelectorAll('[data-more-btn]');
  if (moreInFilters.length) {
    moreInFilters.forEach(function (moreInFilter) {
      var accord = moreInFilter.closest('[data-patchy-wrapper]');
      if (accord) {
        moreInFilter.addEventListener('click', function (evt) {
          if (accord.hasAttribute('data-full')) {
            accord.removeAttribute('data-full');
            moreInFilter.textContent = moreInFilter.getAttribute('data-more-text');
          } else {
            accord.setAttribute('data-full', true);
            moreInFilter.textContent = moreInFilter.getAttribute('data-less-text');
          }
        });
      }
    });
  }
  var filterAccordions = document.querySelectorAll('.filter-accordion');
  if (filterAccordions.length) {
    filterAccordions.forEach(function (filterAccordion) {
      var btn = filterAccordion.querySelector('.filter-accordion__current');
      var body = filterAccordion.querySelector('.filter-accordion__body');
      var items = filterAccordion.querySelectorAll('.catalog-sections__item');
      if (body && btn) {
        btn.addEventListener('click', function () {
          if (filterAccordion.hasAttribute('data-open')) {
            filterAccordion.removeAttribute('data-open');
          } else {
            filterAccordion.setAttribute('data-open', true);
          }
        });
        items.forEach(function (item) {
          item.addEventListener('click', function () {
            setTimeout(function () {
              var _filterAccordion$quer;
              (_filterAccordion$quer = filterAccordion.querySelector('.catalog-sections__item--active')) === null || _filterAccordion$quer === void 0 || _filterAccordion$quer.classList.remove('catalog-sections__item--active');
              btn.textContent = item.textContent;
              item.classList.add('catalog-sections__item--active');
              filterAccordion.removeAttribute('data-open');
            }, 50);
          });
        });
      }
    });
  }
  var filterBox = document.querySelector('.catalog-sort');
  if (filterBox) {
    var filterBoxTop = filterBox.querySelector('.catalog-sort__current');
    var filterBoxOpenAdditional = filterBox.querySelector('.catalog-sort__label');
    var filterBoxList = filterBox.querySelector('.catalog-sort__body');
    var filterBoxItems = filterBox.querySelectorAll('.catalog-sort__item-to-choose');
    var clickOutBoxHandler = function clickOutBoxHandler(_ref) {
      var target = _ref.target;
      if (!target.classList.contains('catalog-sort__current') && !target.closest('.catalog-sort__current') && !target.classList.contains('catalog-sort__label') && !target.closest('.catalog-sort__label')) {
        filterBoxList.removeAttribute('data-active');
      }
    };
    filterBoxItems.forEach(function (filterBoxItem) {
      filterBoxItem.addEventListener('click', function (evt) {
        if (!filterBoxItem.hasAttribute('data-active')) {
          var activeCur = filterBoxList.querySelector('[data-active]');
          activeCur === null || activeCur === void 0 || activeCur.removeAttribute('data-active');
          filterBoxItem.setAttribute('data-active', true);
          filterBoxTop.textContent = filterBoxItem.textContent;
        }
      });
    });
    if (filterBoxOpenAdditional) {
      filterBoxOpenAdditional.addEventListener('click', function (evt) {
        if (filterBoxList.getAttribute('data-active')) {
          filterBoxList.removeAttribute('data-active');
        } else {
          filterBoxList.setAttribute('data-active', true);
          document.addEventListener('click', clickOutBoxHandler);
        }
      });
    }
    filterBoxTop.addEventListener('click', function (evt) {
      if (filterBoxList.getAttribute('data-active')) {
        filterBoxList.removeAttribute('data-active');
      } else {
        filterBoxList.setAttribute('data-active', true);
        document.addEventListener('click', clickOutBoxHandler);
      }
    });
  }
  var filterBlocks = document.querySelectorAll('.filter-group__block');
  if (filterBlocks.length) {
    filterBlocks.forEach(function (filterBlock) {
      var tumblr = filterBlock.querySelector('.filter-group__block__header');
      if (tumblr) {
        tumblr.addEventListener('click', function () {
          if (filterBlock.classList.contains('filter-group__block--active')) {
            filterBlock.classList.remove('filter-group__block--active');
          } else {
            filterBlock.classList.add('filter-group__block--active');
          }
        });
      }
    });
  }
  var additionalBurgers = document.querySelectorAll('[data-burger-wrapper]');
  if (additionalBurgers.length) {
    additionalBurgers.forEach(function (additionalBurger) {
      var btns = additionalBurger.querySelectorAll('[data-burger-btn]');
      var burger = additionalBurger.querySelector('[data-burger]');
      var close = additionalBurger.querySelector('[data-burger-close]');
      var body = document.querySelector('body');
      if (btns.length && burger) {
        btns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            burger.setAttribute('data-opened', true);
            body.classList.add('lock');
          });
        });
      }
      if (close && burger) {
        close.addEventListener('click', function () {
          burger.removeAttribute('data-opened');
          body.classList.remove('lock');
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/product-card.js":
/*!*******************************************!*\
  !*** ./src/js/components/product-card.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResponsiveSlider */ "./src/js/ResponsiveSlider.js");


document.addEventListener("DOMContentLoaded", function (event) {
  function handleSlideChange(swiper) {
    if (swiper.isEnd) {
      swiper.el.classList.add('reached-end');
    } else {
      swiper.el.classList.remove('reached-end');
    }
  }
  if (document.querySelector('.product__slider .swiper-container') && document.querySelector('.product__thumbs .swiper-container')) {
    var productSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product__slider .swiper-container', {
      speed: 400,
      spaceBetween: 10,
      loop: false,
      navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
      }
    });
    var thumbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product__thumbs .swiper-container', {
      speed: 400,
      loop: false,
      loopedSlides: 4,
      spaceBetween: 24,
      slidesPerView: "auto",
      centeredSlides: false,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      breakpoints: {
        768: {
          slidesPerView: 3
        }
      },
      navigation: {
        nextEl: '.product__thumbs .nav-next',
        prevEl: '.product__thumbs .nav-prev'
      },
      on: {
        slideChange: function slideChange() {
          handleSlideChange(this);
        },
        resize: function resize() {
          this.update();
        }
      }
    });
    productSwiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = productSwiper;
    thumbsSwiper.on('click', function (swiper, event) {
      var clickedIndex = swiper.clickedIndex;
      if (clickedIndex !== undefined) {
        productSwiper.slideTo(clickedIndex);
      }
    });
    window.addEventListener('resize', function () {
      thumbsSwiper.update();
    });
  }
  if (document.querySelector('.product__variants-list .swiper-container')) {
    var _productVariantsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product__variants-list .swiper-container', {
      speed: 400,
      spaceBetween: 15,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.product__variants-list .nav-next',
        prevEl: '.product__variants-list .nav-prev'
      },
      on: {
        slideChange: function slideChange() {
          handleSlideChange(this);
        },
        resize: function resize() {
          this.update();
        }
      }
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', function () {
      _productVariantsSwiper.update();
    });
  }
  var productVariantsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product__variants-list .swiper-container', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.product__variants-list .nav-next',
      prevEl: '.product__variants-list .nav-prev'
    },
    on: {
      slideChange: function slideChange() {
        handleSlideChange(this);
      },
      resize: function resize() {
        this.update();
      }
    }
  });
  new _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider('.description-block').initSwipers({
    spaceBetween: 10,
    slidesPerView: "auto",
    slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
    slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
    breakpoints: {
      769: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      },
      993: {
        spaceBetween: 40,
        slidesPerView: 3,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0
      }
    },
    pagination: {
      el: '.description-block__slider .swiper-pagination-circles',
      type: 'bullets'
    }
  });
});

/***/ }),

/***/ "./src/js/components/project-card.js":
/*!*******************************************!*\
  !*** ./src/js/components/project-card.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResponsiveSlider */ "./src/js/ResponsiveSlider.js");


document.addEventListener("DOMContentLoaded", function (event) {
  function handleSlideChange(swiper) {
    if (swiper.isEnd) {
      swiper.el.closest('.card-welcome').classList.add('reached-end');
    } else {
      swiper.el.closest('.card-welcome').classList.remove('reached-end');
    }
  }
  if (document.querySelector('.card-welcome__slider.swiper') && document.querySelector('.card-welcome__mini-gallery .swiper')) {
    var productSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.card-welcome__slider.swiper', {
      speed: 400,
      spaceBetween: 10,
      loop: false,
      navigation: {
        prevEl: '.card-welcome__left .card-welcome__prev',
        nextEl: '.card-welcome__left .card-welcome__next'
      },
      on: {
        slideChange: function slideChange() {
          handleSlideChange(this);
        },
        resize: function resize() {
          this.update();
        }
      }
    });
    var thumbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.card-welcome__mini-gallery .swiper', {
      speed: 400,
      loop: false,
      spaceBetween: 10,
      slidesPerView: 3,
      centeredSlides: false,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      breakpoints: {
        600: {
          spaceBetween: 20,
          slidesPerView: 4
        },
        768: {
          spaceBetween: 24,
          slidesPerView: 4
        }
      },
      pagination: {
        el: '.card-welcome__mini-gallery .swiper-pagination-circles',
        type: 'bullets'
      },
      on: {
        slideChange: function slideChange() {
          handleSlideChange(this);
        },
        resize: function resize() {
          this.update();
        }
      }
    });
    productSwiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = productSwiper;
    thumbsSwiper.on('click', function (swiper, event) {
      var clickedIndex = swiper.clickedIndex;
      if (clickedIndex !== undefined) {
        productSwiper.slideTo(clickedIndex);
      }
    });
    window.addEventListener('resize', function () {
      thumbsSwiper.update();
    });
  }
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.capabilities-slider', {
    speed: 400,
    loop: true,
    navigation: {
      prevEl: '.capabilities-slider__prev',
      nextEl: '.capabilities-slider__next'
    }
  });
  new _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider('.goods-slider', '.goods .container').initSwipers({
    spaceBetween: 10,
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    breakpoints: {
      600: {
        spaceBetween: 10,
        slidesPerView: 2,
        slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey()
      },
      769: {
        spaceBetween: 20,
        slidesPerView: "auto",
        slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey()
      },
      993: {
        spaceBetween: 40,
        slidesPerView: "auto",
        slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey()
      }
    },
    navigation: {
      prevEl: '.goods-slider .goods__prev',
      nextEl: '.goods-slider .goods__next'
    },
    pagination: {
      el: '.goods-slider .swiper-pagination-circles',
      type: 'bullets'
    }
  });
  function handleSlideChangeProjects(swiper) {
    if (swiper.isEnd) {
      swiper.el.classList.add('reached-end');
    } else {
      swiper.el.classList.remove('reached-end');
    }
  }
  new _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider('.projects', '.projects .container').initSwipers({
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    watchOverflow: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      600: {
        spaceBetween: 20,
        slidesPerView: "auto",
        slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey()
      },
      993: {
        spaceBetween: 40,
        slidesPerView: 4,
        slidesOffsetBefore: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey(),
        slidesOffsetAfter: _ResponsiveSlider__WEBPACK_IMPORTED_MODULE_1__.ResponsiveSlider.getOffsetKey()
      }
    },
    navigation: {
      prevEl: '.projects .projects__prev',
      nextEl: '.projects .projects__next'
    },
    pagination: {
      el: '.projects .swiper-pagination-circles',
      type: 'bullets'
    },
    on: {
      slideChange: function slideChange() {
        handleSlideChangeProjects(this);
      },
      resize: function resize() {
        this.update();
      }
    }
  });
});

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeasonsHeader: function() { return /* binding */ SeasonsHeader; }
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SeasonsHeader = /*#__PURE__*/function () {
  function SeasonsHeader(header) {
    var _this = this;
    _classCallCheck(this, SeasonsHeader);
    _defineProperty(this, "_clickOutBurger", function (_ref) {
      var target = _ref.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          _this._closeBurger();
        }
      }
    });
    this._header = header;
    this._scrolledLogic = this._scrolledLogic.bind(this);
    this._clickOutBasket = this._clickOutBasket.bind(this);
    this._body = document.querySelector('body');
    this._burgerIcon = this._header.querySelector('.header-burger-icon');
    this._burger = this._header.querySelector('.header__nav');
    this._addHandlers();
    this._isDesktop = window.innerWidth >= 992;
    this._isMobile = window.innerWidth < 768;
    this._scrolledLogic();
  }
  return _createClass(SeasonsHeader, [{
    key: "_openBurger",
    value: function _openBurger() {
      var _this2 = this;
      this._header.setAttribute('data-open', true);
      this._burgerIcon.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.slideDown)(this._burger, 300, function () {
        document.addEventListener('click', _this2._clickOutBurger);
        _this2._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_resetStylesForDesktop",
    value: function _resetStylesForDesktop() {
      this._burger.style = '';
      this._burgerIcon.removeAttribute('data-open');
      this._header.removeAttribute('data-open');
      this._body.classList.remove('blocked');
      this._isDesktop = true;
    }
  }, {
    key: "_closeBurger",
    value: function _closeBurger() {
      var _this3 = this;
      this._burgerIcon.removeAttribute('data-open');
      document.removeEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.slideUp)(this._burger, 300, function () {
        _this3._header.removeAttribute('data-animating');
        _this3._header.removeAttribute('data-open');
        _this3._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_addHandlers",
    value: function _addHandlers() {
      var _this4 = this;
      this._burgerIcon.addEventListener('click', function () {
        if (!_this4._header.hasAttribute('data-animating')) {
          _this4._header.setAttribute('data-animating', true);
          if (_this4._header.hasAttribute('data-open')) {
            _this4._closeBurger();
          } else {
            _this4._openBurger();
          }
        }
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this4._isDesktop = window.innerWidth >= 992;
        if (window.innerWidth < 992) {}
        _this4._isMobile = window.innerWidth < 768;
        if (_this4._isDesktop) {
          _this4._resetStylesForDesktop();
        }
      }, 100));
      window.addEventListener('scroll', this._scrolledLogic);
      this._header.addEventListener('animationstart', function () {
        _this4._header.classList.add('animation-collapsing');
      });
      this._header.addEventListener('animationend', function () {
        _this4._header.classList.remove('animation-collapsing');
        _this4._header.style.top = 0;
      });
    }
  }, {
    key: "_clickOutBasket",
    value: function _clickOutBasket(_ref2) {
      var target = _ref2.target;
    } // if (!this._catalog.hasAttribute('data-animating')) {
    //     if (!target.classList.contains('header') && !target.closest('header')) {
    //     }
    // }
  }, {
    key: "_scrolledLogic",
    value: function _scrolledLogic() {
      var _this5 = this;
      var headerHeight = this._header.getBoundingClientRect().height;
      window.addEventListener('scroll', function () {
        var topScrolled = window.pageYOffset;
        if (!_this5._header.classList.contains('header--scrolled')) {
          if (topScrolled < headerHeight) {
            _this5._header.style.top = "-".concat(topScrolled, "px");
          } else {
            _this5._header.classList.add('header--scrolled');
            document.documentElement.style.setProperty('--header-height', "".concat(_this5._header.offsetHeight, "px"));
          }
        } else if (topScrolled === 0 && !_this5._header.classList.contains('animation-collapsing')) {
          _this5._header.classList.remove('header--scrolled');
        }
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideDown: function() { return /* binding */ slideDown; },
/* harmony export */   slideUp: function() { return /* binding */ slideUp; }
/* harmony export */ });
/* unused harmony export slideToggle */
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = 'border-box';
  target.style.height = "".concat(target.offsetHeight, "px");
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* SLIDE DOWN */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* TOOGLE */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
var accordeons = document.querySelectorAll('.faq-item');
if (accordeons.length) {
  var _iterator = _createForOfIteratorHelper(accordeons),
    _step;
  try {
    var _loop = function _loop() {
      var accordeon = _step.value;
      var button = accordeon.querySelector('.faq-item__question');
      button.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(accordeons),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var otherAccordeon = _step2.value;
            if (otherAccordeon !== accordeon) {
              otherAccordeon.classList.remove('faq-item--active');
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        accordeon.classList.add('faq-item--active');
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// faq-page
var faqs = document.querySelectorAll('.faq-block');
if (faqs.length) {
  var _iterator3 = _createForOfIteratorHelper(faqs),
    _step3;
  try {
    var _loop2 = function _loop2() {
      var accordeon = _step3.value;
      var button = accordeon.querySelector('.faq-block__question');
      var answer = accordeon.querySelector('.faq-block__answer');
      button.addEventListener('click', function () {
        if (accordeon.classList.contains('faq-block--active')) {
          slideUp(answer, 300, function () {});
          accordeon.classList.remove('faq-block--active');
        } else {
          var _iterator4 = _createForOfIteratorHelper(faqs),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var otherAccordeon = _step4.value;
              if (otherAccordeon !== accordeon) {
                otherAccordeon.classList.remove('faq-block--active');
                var otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                slideUp(otherAnswer, 300, function () {});
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          slideDown(answer, 300, function () {});
          accordeon.classList.add('faq-block--active');
        }
      });
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.a8c09021c5aeeb48d03e.js.map