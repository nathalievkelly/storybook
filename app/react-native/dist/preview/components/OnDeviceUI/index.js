"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("regenerator-runtime/runtime");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _StoryListView = _interopRequireDefault(require("../StoryListView"));

var _StoryView = _interopRequireDefault(require("../StoryView"));

var _addons2 = _interopRequireDefault(require("./addons"));

var _panel = _interopRequireDefault(require("./panel"));

var _navigation = _interopRequireDefault(require("./navigation"));

var _absolutePositionedKeyboardAwareView = _interopRequireDefault(require("./absolute-positioned-keyboard-aware-view"));

var _constants = require("./navigation/constants");

var _animation = require("./animation");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ANIMATION_DURATION = 300;
var IS_IOS = _reactNative.Platform.OS === 'ios';

var OnDeviceUI =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OnDeviceUI, _PureComponent);

  function OnDeviceUI(props) {
    var _this;

    _classCallCheck(this, OnDeviceUI);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OnDeviceUI).call(this, props));
    _this.animatedValue = void 0;
    _this.channel = void 0;

    _this.onLayout = function (_ref) {
      var previewWidth = _ref.previewWidth,
          previewHeight = _ref.previewHeight;

      _this.setState({
        previewWidth: previewWidth,
        previewHeight: previewHeight
      });
    };

    _this.handleOpenPreview = function () {
      _this.handleToggleTab(_constants.PREVIEW);
    };

    _this.forceReRender = function () {
      _this.forceUpdate();
    };

    _this.handleStoryChange = function (selection) {
      var prevSelection = _this.state.selection;

      if (selection.kind === prevSelection.kind && selection.story === prevSelection.story) {
        _this.handleToggleTab(_constants.PREVIEW);
      }

      _this.setState({
        selection: {
          kind: selection.kind,
          story: selection.story
        },
        storyFn: selection.storyFn
      });
    };

    _this.handleToggleTab = function (newTabOpen) {
      var tabOpen = _this.state.tabOpen;

      if (newTabOpen === tabOpen) {
        return;
      }

      _reactNative.Animated.timing(_this.animatedValue, {
        toValue: newTabOpen,
        duration: ANIMATION_DURATION,
        useNativeDriver: true
      }).start();

      _this.setState({
        tabOpen: newTabOpen,
        // True if swiping between navigator and addons
        slideBetweenAnimation: tabOpen + newTabOpen === _constants.PREVIEW
      }); // close the keyboard opened from a TextInput from story list or knobs


      if (newTabOpen === _constants.PREVIEW) {
        _reactNative.Keyboard.dismiss();
      }
    };

    var _tabOpen = props.tabOpen || _constants.PREVIEW;

    _this.state = {
      tabOpen: _tabOpen,
      slideBetweenAnimation: false,
      selection: {},
      storyFn: null,
      previewWidth: 0,
      previewHeight: 0
    };
    _this.animatedValue = new _reactNative.Animated.Value(_tabOpen);
    _this.channel = _addons["default"].getChannel();
    return _this;
  }

  _createClass(OnDeviceUI, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var getInitialStory, story;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getInitialStory = this.props.getInitialStory;

                if (!getInitialStory) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return getInitialStory();

              case 4:
                story = _context.sent;
                this.setState({
                  selection: story || {},
                  storyFn: story ? story.storyFn : null
                });

              case 6:
                this.channel.on(_coreEvents["default"].SELECT_STORY, this.handleStoryChange);
                this.channel.on(_coreEvents["default"].FORCE_RE_RENDER, this.forceReRender);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.channel.removeListener(_coreEvents["default"].SELECT_STORY, this.handleStoryChange);
      this.channel.removeListener(_coreEvents["default"].FORCE_RE_RENDER, this.forceReRender);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          url = _this$props.url,
          isUIHidden = _this$props.isUIHidden,
          shouldDisableKeyboardAvoidingView = _this$props.shouldDisableKeyboardAvoidingView,
          keyboardAvoidingViewVerticalOffset = _this$props.keyboardAvoidingViewVerticalOffset;
      var _this$state = this.state,
          tabOpen = _this$state.tabOpen,
          slideBetweenAnimation = _this$state.slideBetweenAnimation,
          selection = _this$state.selection,
          storyFn = _this$state.storyFn,
          previewWidth = _this$state.previewWidth,
          previewHeight = _this$state.previewHeight;
      var previewWrapperStyles = [_style["default"].flex, (0, _animation.getPreviewPosition)(this.animatedValue, previewWidth, previewHeight, slideBetweenAnimation)];
      var previewStyles = [_style["default"].flex, tabOpen !== 0 && _style["default"].previewMinimized, (0, _animation.getPreviewScale)(this.animatedValue, slideBetweenAnimation)];
      return _react["default"].createElement(_reactNative.KeyboardAvoidingView, {
        enabled: !shouldDisableKeyboardAvoidingView || tabOpen !== _constants.PREVIEW,
        behavior: IS_IOS ? 'padding' : null,
        keyboardVerticalOffset: keyboardAvoidingViewVerticalOffset,
        style: _style["default"].flex
      }, _react["default"].createElement(_absolutePositionedKeyboardAwareView["default"], {
        onLayout: this.onLayout,
        previewHeight: previewHeight,
        previewWidth: previewWidth
      }, _react["default"].createElement(_reactNative.Animated.View, {
        style: previewWrapperStyles
      }, _react["default"].createElement(_reactNative.Animated.View, {
        style: previewStyles
      }, _react["default"].createElement(_reactNative.TouchableOpacity, {
        accessible: false,
        style: _style["default"].flex,
        disabled: tabOpen === _constants.PREVIEW,
        onPress: this.handleOpenPreview
      }, _react["default"].createElement(_StoryView["default"], {
        url: url,
        selection: selection,
        storyFn: storyFn,
        listenToEvents: false
      })))), _react["default"].createElement(_panel["default"], {
        style: (0, _animation.getNavigatorPanelPosition)(this.animatedValue, previewWidth)
      }, _react["default"].createElement(_StoryListView["default"], {
        stories: stories,
        selectedKind: selection.kind,
        selectedStory: selection.story
      })), _react["default"].createElement(_panel["default"], {
        style: (0, _animation.getAddonPanelPosition)(this.animatedValue, previewWidth)
      }, _react["default"].createElement(_addons2["default"], null))), _react["default"].createElement(_navigation["default"], {
        tabOpen: tabOpen,
        onChangeTab: this.handleToggleTab,
        initialUiVisible: !isUIHidden
      }));
    }
  }]);

  return OnDeviceUI;
}(_react.PureComponent);

exports["default"] = OnDeviceUI;