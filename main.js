/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var template = document.querySelector(".cards__template");
var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector, handleOpenImage) {
    _classCallCheck(this, Card);
    this._cardSelector = cardSelector;
    this._handleOpenImage = handleOpenImage;
    this._image = data.link;
    this._title = data.name;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
  }
  return _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = template.content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._element.querySelector(".card__like-button").addEventListener("click", function () {
        _this._handleLikeButton();
      });
      this._element.querySelector(".card__delete-button").addEventListener("click", function () {
        _this._handleDeleteButton();
      });
      this._cardImage.addEventListener("click", function () {
        _this._handleOpenImage(_this._image, _this._title);
      });
    }
  }, {
    key: "_handleLikeButton",
    value: function _handleLikeButton() {
      this._element.querySelector(".card__like-button").classList.toggle("active");
    }
  }, {
    key: "_handleDeleteButton",
    value: function _handleDeleteButton() {
      this._element.remove();
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._getTemplate();
      this._setEventListeners();
      this._element.querySelector(".card__image").src = this._image;
      this._element.querySelector(".card__title").textContent = this._title;
      this._element.querySelector(".card__image").alt = this._title;
      return this._element;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formElement) {
    _classCallCheck(this, FormValidator);
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input"));
    this._buttonElement = this._formElement.querySelector(".popup__button");
  }
  return _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(formInput, errorMessage) {
      var formError = this._formElement.querySelector("#".concat(formInput.id, "-error"));
      formInput.classList.add("popup__input-error");
      formError.textContent = errorMessage;
      formError.classList.add("popup__input-error_active");
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formInput) {
      var formError = this._formElement.querySelector("#".concat(formInput.id, "-error"));
      formInput.classList.remove("popup__input-error");
      formError.classList.remove("popup__input-error_active");
      formError.textContent = "";
    }
  }, {
    key: "_isValid",
    value: function _isValid(formInput) {
      if (!formInput.validity.valid) {
        this._showInputError(formInput, formInput.validationMessage);
      } else {
        this._hideInputError(formInput);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (formInput) {
        return !formInput.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add("popup__button_inactive");
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove("popup__button_inactive");
        this._buttonElement.disabled = false;
      }
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var _this = this;
      this._inputList.forEach(function (formInput) {
        formInput.addEventListener("input", function () {
          _this._isValid(formInput);
          _this._toggleButtonState();
        });
      });
      this._toggleButtonState();
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var _this2 = this;
      this._formElement.addEventListener("submit", function (evt) {
        if (_this2._hasInvalidInput()) {
          evt.preventDefault();
        }
      });
      this.setEventListener();
    }
  }]);
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    // this._handleEscClose = this._handleEscClose.bind(this);
  }
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add("popup__opened");
      this.setEventListeners();
    }
  }, {
    key: "close",
    value: function close() {
      if (this._popup.classList.contains("popup__opened")) {
        this._popup.classList.remove("popup__opened");
      }
    }
  }, {
    key: "_handleEscPopup",
    value: function _handleEscPopup(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.querySelector(".popup__close-button").addEventListener("click", function () {
        _this.close();
      });
      this._popup.addEventListener("click", function (evt) {
        if (evt.target === evt.currentTarget) {
          _this.close();
        }
      });
      document.addEventListener("keydown", function (evt) {
        _this._handleEscPopup(evt);
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/components/PopupWithForms.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithForms.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForms; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopupWithForms = /*#__PURE__*/function (_Popup) {
  function PopupWithForms(popupSelector, formSubmitHandler) {
    var _this;
    _classCallCheck(this, PopupWithForms);
    _this = _callSuper(this, PopupWithForms, [popupSelector]);
    _this._form = _this._popup.querySelector(".popup__form");
    _this._formSubmitHandler = formSubmitHandler;
    _this._handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }
  _inherits(PopupWithForms, _Popup);
  return _createClass(PopupWithForms, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formInputs = this._form.querySelectorAll(".popup__input");
      this._formInputValues = {};
      this._formInputs.forEach(function (input) {
        _this2._formInputValues[input.name] = input.value;
      });
      return this._formInputValues;
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(evt) {
      evt.preventDefault();
      var formData = this._getInputValues();
      this._formSubmitHandler(formData);
      this.close();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithForms.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", this._handleSubmit);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForms.prototype), "close", this).call(this);
      this._form.reset();
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _callSuper(this, PopupWithImage, [popupSelector]);
    _this._image = _this._popup.querySelector(".popup__card-image");
    _this._title = _this._popup.querySelector(".popup__card-title");
    return _this;
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "_handleImagePopup",
    value: function _handleImagePopup(link, title) {
      this._image.src = link;
      this._image.alt = title;
      this._title.textContent = title;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithImage.prototype), "setEventListeners", this).call(this);
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._rendereditems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  return _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._rendereditems.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }, {
    key: "addItems",
    value: function addItems(element) {
      this._container.append(element);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      occupationSelector = _ref.occupationSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._occupationElement = document.querySelector(occupationSelector);
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._nameElement.textContent,
        occupation: this._occupationElement.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about;
      this._nameElement.textContent = name;
      this._occupationElement.textContent = about;
    }
  }]);
}();


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCardButton: function() { return /* binding */ addCardButton; },
/* harmony export */   addCardFormElement: function() { return /* binding */ addCardFormElement; },
/* harmony export */   addCardPopupElement: function() { return /* binding */ addCardPopupElement; },
/* harmony export */   closeButton: function() { return /* binding */ closeButton; },
/* harmony export */   editPopupElement: function() { return /* binding */ editPopupElement; },
/* harmony export */   editProfileButton: function() { return /* binding */ editProfileButton; },
/* harmony export */   formElement: function() { return /* binding */ formElement; },
/* harmony export */   imagePopupElement: function() { return /* binding */ imagePopupElement; },
/* harmony export */   initialCards: function() { return /* binding */ initialCards; },
/* harmony export */   inputImage: function() { return /* binding */ inputImage; },
/* harmony export */   inputTitle: function() { return /* binding */ inputTitle; },
/* harmony export */   popupName: function() { return /* binding */ popupName; },
/* harmony export */   popupOccupation: function() { return /* binding */ popupOccupation; },
/* harmony export */   popupSelector: function() { return /* binding */ popupSelector; },
/* harmony export */   profileElement: function() { return /* binding */ profileElement; },
/* harmony export */   profileFormElement: function() { return /* binding */ profileFormElement; },
/* harmony export */   profileNameElement: function() { return /* binding */ profileNameElement; },
/* harmony export */   profileOccupationElement: function() { return /* binding */ profileOccupationElement; }
/* harmony export */ });
var profileElement = document.querySelector(".profile");
var profileNameElement = profileElement.querySelector(".profile__name");
var profileOccupationElement = profileElement.querySelector(".profile__occupation");
var editProfileButton = document.querySelector(".profile__edit-button");
var editPopupElement = document.querySelector("#popup__profile");
var profileFormElement = document.querySelector(".popup__form-edit-profile");
var popupName = profileFormElement.querySelector(".popup__name");
var popupOccupation = profileFormElement.querySelector(".popup__occupation");
var addCardButton = document.querySelector(".profile__button-add-card");
var addCardPopupElement = document.querySelector("#popup__add-card");
var addCardFormElement = document.querySelector(".popup__form-add-card");
var inputTitle = addCardFormElement.querySelector(".popup__input-title");
var inputImage = addCardFormElement.querySelector(".popup__input-image");
var imagePopupElement = document.querySelector("#popup__images");
var closeButton = document.querySelectorAll(".popup__close-button");
var initialCards = [{
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
}, {
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
}, {
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
}, {
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}];
var popupSelector = document.querySelectorAll(".popup");
var formElement = document.querySelectorAll(".popup__form");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopupWithForms.js */ "./src/components/PopupWithForms.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");








var imagePopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_2__["default"]("#popup__images");
imagePopup.setEventListeners();
var addCardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addCardFormElement);
addCardFormValidator.enableValidation();
var renderElements = function renderElements() {
  var cardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    data: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.initialCards,
    renderer: function renderer(item) {
      var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](item, ".cards__template", function (link, name) {
        imagePopup._handleImagePopup(link, name);
      });
      var cardElement = card.generateCard();
      cardSection.addItems(cardElement);
    }
  }, ".cards");
  cardSection.renderItems();
};
renderElements();
var profilePopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_1__["default"]("#popup__profile", function (formData) {
  console.log(formData);
  var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    nameSelector: ".profile__name",
    occupationSelector: ".profile__occupation"
  });
  userInfo.setUserInfo(formData);
});
var profileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_5__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileFormElement);
profileFormValidator.enableValidation();
var addCardPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_1__["default"]("#popup__add-card", function (formData) {
  var newCardData = {
    link: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addCardFormElement.querySelector(".popup__input-image").value,
    name: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addCardFormElement.querySelector(".popup__input-title").value
  };
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](newCardData, ".cards__template", function (link, name) {
    imagePopup._handleImagePopup(link, name);
  });
  var cardElement = newCard.generateCard();
  var cardSection = document.querySelector(".cards");
  cardSection.prepend(cardElement);
  addCardFormValidator.enableValidation();
});
document.querySelector(".profile__edit-button").addEventListener("click", function () {
  profilePopup.open();
});
document.querySelector(".profile__button-add-card").addEventListener("click", function () {
  addCardPopup.open();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxVQUFDYSxRQUFRLEVBQUs7RUFDeEUsSUFBTTBELFdBQVcsR0FBRztJQUNsQnhJLElBQUksRUFBRXVILG1FQUFrQixDQUFDaEksYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUNpQixLQUFLO0lBQ25FTixJQUFJLEVBQUVxSCxtRUFBa0IsQ0FBQ2hJLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUI7RUFDaEUsQ0FBQztFQUVELElBQU1pSSxPQUFPLEdBQUcsSUFBSWpKLDJEQUFJLENBQUNnSixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsVUFBQ3hJLElBQUksRUFBRUUsSUFBSSxFQUFLO0lBQ3hFMkgsVUFBVSxDQUFDeEMsaUJBQWlCLENBQUNyRixJQUFJLEVBQUVFLElBQUksQ0FBQztFQUMxQyxDQUFDLENBQUM7RUFFRixJQUFNTyxXQUFXLEdBQUdnSSxPQUFPLENBQUNySCxZQUFZLENBQUMsQ0FBQztFQUUxQyxJQUFNNEcsV0FBVyxHQUFHMUksUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3BEeUksV0FBVyxDQUFDVSxPQUFPLENBQUNqSSxXQUFXLENBQUM7RUFFaENxSCxvQkFBb0IsQ0FBQzNFLGdCQUFnQixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUY3RCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUN0Q3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9Cb0gsWUFBWSxDQUFDeEUsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUpwRSxRQUFRLENBQ0xDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUMxQ3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9CeUgsWUFBWSxDQUFDN0UsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybXMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fdGVtcGxhdGVcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZU9wZW5JbWFnZSkge1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlT3BlbkltYWdlID0gaGFuZGxlT3BlbkltYWdlO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUJ1dHRvbigpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVPcGVuSW1hZ2UodGhpcy5faW1hZ2UsIHRoaXMuX3RpdGxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2VCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXHJcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZURlbGV0ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKS5zcmMgPSB0aGlzLl9pbWFnZTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J1dHRvblwiKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihmb3JtSW5wdXQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZm9ybUVycm9yID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG5cclxuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX2lucHV0LWVycm9yXCIpO1xyXG4gICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZm9ybUVycm9yLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGZvcm1JbnB1dCkge1xyXG4gICAgY29uc3QgZm9ybUVycm9yID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG5cclxuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX2lucHV0LWVycm9yXCIpO1xyXG4gICAgZm9ybUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlXCIpO1xyXG4gICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkKGZvcm1JbnB1dCkge1xyXG4gICAgaWYgKCFmb3JtSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUlucHV0LCBmb3JtSW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGZvcm1JbnB1dCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWZvcm1JbnB1dC52YWxpZGl0eS52YWxpZDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX19idXR0b25faW5hY3RpdmVcIik7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX2J1dHRvbl9pbmFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChmb3JtSW5wdXQpID0+IHtcclxuICAgICAgZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZChmb3JtSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIC8vIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLl9wb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fb3BlbmVkXCIpKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBfaGFuZGxlRXNjUG9wdXAoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1idXR0b25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUVzY1BvcHVwKGV2dCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtcyBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBmb3JtU3VibWl0SGFuZGxlcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2Zvcm1TdWJtaXRIYW5kbGVyID0gZm9ybVN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9oYW5kbGVTdWJtaXQgPSB0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5fZm9ybUlucHV0cyA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XHJcbiAgICB0aGlzLl9mb3JtSW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2Zvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybUlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtSW5wdXRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMuX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICB0aGlzLl9mb3JtU3VibWl0SGFuZGxlcihmb3JtRGF0YSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FyZC1pbWFnZVwiKTtcclxuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FyZC10aXRsZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVJbWFnZVBvcHVwKGxpbmssIHRpdGxlKSB7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gdGl0bGU7XHJcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlZGl0ZW1zID0gZGF0YTtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlZGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX3JlbmRlcmVyKGl0ZW0pKTtcclxuICB9XHJcbiAgYWRkSXRlbXMoZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBvY2N1cGF0aW9uU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9vY2N1cGF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2NjdXBhdGlvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgIG9jY3VwYXRpb246IHRoaXMuX29jY3VwYXRpb25FbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fb2NjdXBhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBhYm91dDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHByb2ZpbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWVFbGVtZW50ID1cclxuICBwcm9maWxlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlT2NjdXBhdGlvbkVsZW1lbnQgPSBwcm9maWxlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnByb2ZpbGVfX29jY3VwYXRpb25cIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRQb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwX19wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wb3B1cF9fZm9ybS1lZGl0LXByb2ZpbGVcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgcG9wdXBOYW1lID0gcHJvZmlsZUZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cE9jY3VwYXRpb24gPVxyXG4gIHByb2ZpbGVGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19vY2N1cGF0aW9uXCIpO1xyXG5leHBvcnQgY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucHJvZmlsZV9fYnV0dG9uLWFkZC1jYXJkXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGFkZENhcmRQb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwX19hZGQtY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZENhcmRGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucG9wdXBfX2Zvcm0tYWRkLWNhcmRcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgaW5wdXRUaXRsZSA9IGFkZENhcmRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19pbnB1dC10aXRsZVwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dEltYWdlID0gYWRkQ2FyZEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucG9wdXBfX2lucHV0LWltYWdlXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGltYWdlUG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cF9faW1hZ2VzXCIpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZS1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYWxsZSBkZSBZb3NlbWl0ZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBMb3Vpc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vbnRhw7FhcyBDYWx2YXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGFycXVlIE5hY2lvbmFsIGRlIGxhIFZhbm9pc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVwU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybXMuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGluaXRpYWxDYXJkcyxcclxuICBwcm9maWxlRm9ybUVsZW1lbnQsXHJcbiAgYWRkQ2FyZEZvcm1FbGVtZW50LFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjcG9wdXBfX2ltYWdlc1wiKTtcclxuaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgYWRkQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihhZGRDYXJkRm9ybUVsZW1lbnQpO1xyXG5hZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCByZW5kZXJFbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gICAge1xyXG4gICAgICBkYXRhOiBpbml0aWFsQ2FyZHMsXHJcbiAgICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcclxuICAgICAgICAgIGl0ZW0sXHJcblxyXG4gICAgICAgICAgXCIuY2FyZHNfX3RlbXBsYXRlXCIsXHJcbiAgICAgICAgICAobGluaywgbmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpbWFnZVBvcHVwLl9oYW5kbGVJbWFnZVBvcHVwKGxpbmssIG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xyXG4gICAgICAgIGNhcmRTZWN0aW9uLmFkZEl0ZW1zKGNhcmRFbGVtZW50KTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIi5jYXJkc1wiXHJcbiAgKTtcclxuXHJcbiAgY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxufTtcclxuXHJcbnJlbmRlckVsZW1lbnRzKCk7XHJcblxyXG5jb25zdCBwcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoXCIjcG9wdXBfX3Byb2ZpbGVcIiwgKGZvcm1EYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gIGNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICAgIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gICAgb2NjdXBhdGlvblNlbGVjdG9yOiBcIi5wcm9maWxlX19vY2N1cGF0aW9uXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKGZvcm1EYXRhKTtcclxufSk7XHJcblxyXG5jb25zdCBwcm9maWxlRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHByb2ZpbGVGb3JtRWxlbWVudCk7XHJcbnByb2ZpbGVGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtcyhcIiNwb3B1cF9fYWRkLWNhcmRcIiwgKGZvcm1EYXRhKSA9PiB7XHJcbiAgY29uc3QgbmV3Q2FyZERhdGEgPSB7XHJcbiAgICBsaW5rOiBhZGRDYXJkRm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXQtaW1hZ2VcIikudmFsdWUsXHJcbiAgICBuYW1lOiBhZGRDYXJkRm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXQtdGl0bGVcIikudmFsdWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKG5ld0NhcmREYXRhLCBcIi5jYXJkc19fdGVtcGxhdGVcIiwgKGxpbmssIG5hbWUpID0+IHtcclxuICAgIGltYWdlUG9wdXAuX2hhbmRsZUltYWdlUG9wdXAobGluaywgbmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuXHJcbiAgY29uc3QgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xyXG4gIGNhcmRTZWN0aW9uLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG5cclxuICBhZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcHJvZmlsZVBvcHVwLm9wZW4oKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWFkZC1jYXJkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRDYXJkUG9wdXAub3BlbigpO1xyXG4gIH0pO1xyXG4iXSwibmFtZXMiOlsidGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJDYXJkIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZU9wZW5JbWFnZSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlT3BlbkltYWdlIiwiX2ltYWdlIiwibGluayIsIl90aXRsZSIsIm5hbWUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkSW1hZ2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlQnV0dG9uIiwiX2hhbmRsZURlbGV0ZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImdlbmVyYXRlQ2FyZCIsInNyYyIsInRleHRDb250ZW50IiwiYWx0IiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2J1dHRvbkVsZW1lbnQiLCJfc2hvd0lucHV0RXJyb3IiLCJmb3JtSW5wdXQiLCJlcnJvck1lc3NhZ2UiLCJmb3JtRXJyb3IiLCJjb25jYXQiLCJpZCIsImFkZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9pc1ZhbGlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hhc0ludmFsaWRJbnB1dCIsInNvbWUiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJkaXNhYmxlZCIsInNldEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl90aGlzMiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwib3BlbiIsInNldEV2ZW50TGlzdGVuZXJzIiwiY2xvc2UiLCJjb250YWlucyIsIl9oYW5kbGVFc2NQb3B1cCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJQb3B1cFdpdGhGb3JtcyIsIl9Qb3B1cCIsImZvcm1TdWJtaXRIYW5kbGVyIiwiX2NhbGxTdXBlciIsIl9mb3JtIiwiX2Zvcm1TdWJtaXRIYW5kbGVyIiwiX2hhbmRsZVN1Ym1pdCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfZm9ybUlucHV0cyIsIl9mb3JtSW5wdXRWYWx1ZXMiLCJpbnB1dCIsImZvcm1EYXRhIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2hhbmRsZUltYWdlUG9wdXAiLCJ0aXRsZSIsIlNlY3Rpb24iLCJfcmVmIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlZGl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsImFkZEl0ZW1zIiwiZWxlbWVudCIsImFwcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwib2NjdXBhdGlvblNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX29jY3VwYXRpb25FbGVtZW50IiwiZ2V0VXNlckluZm8iLCJvY2N1cGF0aW9uIiwic2V0VXNlckluZm8iLCJfcmVmMiIsImFib3V0IiwicHJvZmlsZUVsZW1lbnQiLCJwcm9maWxlTmFtZUVsZW1lbnQiLCJwcm9maWxlT2NjdXBhdGlvbkVsZW1lbnQiLCJlZGl0UHJvZmlsZUJ1dHRvbiIsImVkaXRQb3B1cEVsZW1lbnQiLCJwcm9maWxlRm9ybUVsZW1lbnQiLCJwb3B1cE5hbWUiLCJwb3B1cE9jY3VwYXRpb24iLCJhZGRDYXJkQnV0dG9uIiwiYWRkQ2FyZFBvcHVwRWxlbWVudCIsImFkZENhcmRGb3JtRWxlbWVudCIsImlucHV0VGl0bGUiLCJpbnB1dEltYWdlIiwiaW1hZ2VQb3B1cEVsZW1lbnQiLCJjbG9zZUJ1dHRvbiIsImluaXRpYWxDYXJkcyIsImltYWdlUG9wdXAiLCJhZGRDYXJkRm9ybVZhbGlkYXRvciIsInJlbmRlckVsZW1lbnRzIiwiY2FyZFNlY3Rpb24iLCJjYXJkIiwicHJvZmlsZVBvcHVwIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvIiwicHJvZmlsZUZvcm1WYWxpZGF0b3IiLCJhZGRDYXJkUG9wdXAiLCJuZXdDYXJkRGF0YSIsIm5ld0NhcmQiLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==