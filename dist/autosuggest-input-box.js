"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var AutoSuggestInput = /*#__PURE__*/function (_React$Component) {
  _inherits(AutoSuggestInput, _React$Component);

  var _super = _createSuper(AutoSuggestInput);

  function AutoSuggestInput(props) {
    var _this;

    _classCallCheck(this, AutoSuggestInput);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      showOption: false,
      suggestions: [],
      activeIndex: -1
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onItemSelect = _this.onItemSelect.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.getSuggestions = _this.getSuggestions.bind(_assertThisInitialized(_this));
    _this.removeHover = _this.removeHover.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AutoSuggestInput, [{
    key: "onBlur",
    value: function onBlur(event) {
      this.setState({
        showOption: false,
        activeIndex: -1
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var input = event.target.value;
      this.setState({
        value: input,
        showOption: true,
        suggestions: this.getSuggestions(input)
      });
    }
  }, {
    key: "getSuggestions",
    value: function getSuggestions(input) {
      var inputValue = input.trim().toLowerCase();
      var inputLength = inputValue.length;
      var suggestions = inputLength === 0 ? [] : this.props.list.filter(function (v) {
        return v.toLowerCase().includes(inputValue);
      });
      return suggestions.length === 1 && suggestions[0].toLowerCase() === inputValue ? [] : suggestions;
    }
  }, {
    key: "getSuggestionListComponent",
    value: function getSuggestionListComponent() {
      var _this2 = this;

      if (this.state.suggestions.length !== 0 && this.state.showOption) {
        return /*#__PURE__*/_react["default"].createElement("ul", {
          className: "suggestion-list"
        }, this.state.suggestions.map(function (item, index) {
          var className = index === _this2.state.activeIndex ? 'suggestion-item-hover' : 'suggestion-item';
          return /*#__PURE__*/_react["default"].createElement("li", {
            className: className,
            key: item,
            onMouseDown: _this2.onItemSelect,
            onMouseEnter: _this2.removeHover
          }, item);
        }));
      }
    }
  }, {
    key: "removeHover",
    value: function removeHover() {
      this.setState({
        activeIndex: -1
      });
    }
  }, {
    key: "onItemSelect",
    value: function onItemSelect(event) {
      this.updateValue(event.target.innerText);
    }
  }, {
    key: "updateValue",
    value: function updateValue(val) {
      this.setState({
        value: val,
        showOption: false,
        activeIndex: -1
      });
      this.props.onChange(val);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var index = this.state.activeIndex;
      var active = '';

      if (event.keyCode === 38) {
        if (index > 0) {
          this.setState({
            activeIndex: index - 1
          });
        } else {
          this.setState({
            activeIndex: this.state.suggestions.length - 1
          });
        }

        active = this.state.suggestions[index - 1];
      } else if (event.keyCode === 40) {
        if (this.state.suggestions.length > index + 1) {
          this.setState({
            activeIndex: index + 1
          });
        } else {
          this.setState({
            activeIndex: 0
          });
        }

        active = this.state.suggestions[index];
      } else if (event.keyCode === 13) {
        active = this.state.suggestions[index];

        if (active) {
          this.updateValue(active);
        }

        event.preventDefault();
      } else {
        this.setState({
          showOption: false,
          activeIndex: -1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        autoComplete: "off",
        className: this.props.className,
        id: this.props.id,
        placeholder: this.props.placeholder,
        onChange: this.onInputChange,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur,
        onFocus: this.onInputChange,
        onClick: this.onInputChange,
        value: this.state.value
      }), this.getSuggestionListComponent());
    }
  }]);

  return AutoSuggestInput;
}(_react["default"].Component);

exports["default"] = AutoSuggestInput;