"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoSuggestInput = void 0;
var _react = require("react");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AutoSuggestInput = function AutoSuggestInput(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    suggestions = _useState6[0],
    setSuggestions = _useState6[1];
  var _useState7 = (0, _react.useState)(-1),
    _useState8 = _slicedToArray(_useState7, 2),
    activeIndex = _useState8[0],
    setActiveIndex = _useState8[1];
  var onChange = function onChange(event) {
    var input = event.target.value;
    setValue(input);
    setSuggestions(getSuggestions(input));
    setShowOption(true);
  };
  var getSuggestions = function getSuggestions(input) {
    var inputValue = input.trim().toLowerCase();
    var inputLength = inputValue.length;
    var suggestions = inputLength === 0 ? [] : props.list.filter(function (v) {
      return v.toLowerCase().includes(inputValue);
    });
    return suggestions.length === 1 && suggestions[0].toLowerCase() === inputValue ? [] : suggestions;
  };
  var SuggestionList = function SuggestionList() {
    if (suggestions.length > 0 && showOption) {
      var listStyle = props.listStyle ? _objectSpread(_objectSpread({}, props.listStyle), {}, {
        display: 'block',
        position: 'absolute'
      }) : {
        display: 'block',
        position: 'absolute',
        width: '200px',
        color: '#495057',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '0.75rem',
        fontWeight: '400',
        padding: '0px 0px',
        margin: '0px',
        zIndex: '999'
      };
      var itemStyle = props.itemStyle ? _objectSpread(_objectSpread({}, props.itemStyle), {}, {
        listStyleType: 'none'
      }) : {
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #d4d4d4',
        borderTop: 'none',
        listStyleType: 'none'
      };
      var itemHoverStyle = props.itemHoverStyle ? _objectSpread(_objectSpread({}, props.itemHoverStyle), {}, {
        listStyleType: 'none'
      }) : {
        padding: '10px',
        backgroundColor: '#e9e9e9',
        border: '1px solid #d4d4d4',
        borderTop: 'none',
        listStyleType: 'none'
      };
      var firstItemStyle = props.firstItemStyle ? props.firstItemStyle : itemStyle;
      var lastItemStyle = props.lastItemStyle ? props.lastItemStyle : itemStyle;
      return /*#__PURE__*/React.createElement("ul", {
        style: listStyle
      }, suggestions.map(function (item, index) {
        var iStyle = index === activeIndex ? itemHoverStyle : suggestions.length === index + 1 ? lastItemStyle : index === 0 ? firstItemStyle : itemStyle;
        return /*#__PURE__*/React.createElement("li", {
          style: iStyle,
          key: item,
          onMouseDown: onItemSelect,
          onMouseEnter: function onMouseEnter() {
            return setActiveIndex(index);
          }
        }, item);
      }));
    }
  };
  var onItemSelect = function onItemSelect(event) {
    updateValue(event.target.innerText);
  };
  var updateValue = function updateValue(value) {
    setValue(value);
    setShowOption(false);
    setActiveIndex(-1);
    props.onChange(value);
  };
  var onKeyDown = function onKeyDown(event) {
    var index = activeIndex;
    var active = '';
    if (event.keyCode === 38) {
      if (index > 0) {
        setActiveIndex(index - 1);
      } else {
        setActiveIndex(suggestions.length - 1);
      }
    } else if (event.keyCode === 40) {
      if (suggestions.length > index + 1) {
        setActiveIndex(index + 1);
      } else {
        setActiveIndex(0);
      }
    } else if (event.keyCode === 13) {
      active = suggestions[index];
      if (active) {
        updateValue(active);
      }
      event.preventDefault();
    } else {
      setShowOption(false);
      setActiveIndex(-1);
    }
  };
  var onBlur = function onBlur(event) {
    setShowOption(false);
    setActiveIndex(-1);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    autoComplete: "off",
    id: props.id,
    name: props.name,
    style: props.inputStyle,
    placeholder: props.placeholder,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onBlur: onBlur,
    onFocus: onChange,
    onClick: onChange,
    value: value
  }), /*#__PURE__*/React.createElement(SuggestionList, null));
};
exports.AutoSuggestInput = AutoSuggestInput;