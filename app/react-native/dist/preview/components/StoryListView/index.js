"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.some");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title,
      selected = _ref.selected;
  return _react["default"].createElement(_reactNative.View, {
    key: title,
    style: _style["default"].header
  }, _react["default"].createElement(_reactNative.Text, {
    style: [_style["default"].headerText, selected && _style["default"].headerTextSelected]
  }, title));
};

var ListItem = function ListItem(_ref2) {
  var kind = _ref2.kind,
      title = _ref2.title,
      selected = _ref2.selected,
      onPress = _ref2.onPress;
  return _react["default"].createElement(_reactNative.TouchableOpacity, {
    key: title,
    style: _style["default"].item,
    onPress: onPress,
    testID: "Storybook.ListItem.".concat(kind, ".").concat(title),
    accessibilityLabel: "Storybook.ListItem.".concat(title)
  }, _react["default"].createElement(_reactNative.Text, {
    style: [_style["default"].itemText, selected && _style["default"].itemTextSelected]
  }, title));
};

var StoryListView =
/*#__PURE__*/
function (_Component) {
  _inherits(StoryListView, _Component);

  function StoryListView(props) {
    var _this;

    _classCallCheck(this, StoryListView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoryListView).call(this, props));

    _this.handleStoryAdded = function () {
      var stories = _this.props.stories;

      if (stories) {
        var data = stories.dumpStoryBook().map(function (section) {
          return {
            title: section.kind,
            data: section.stories.map(function (story) {
              return {
                key: story,
                name: story,
                kind: section.kind
              };
            })
          };
        }, {});

        _this.setState({
          data: data,
          originalData: data
        });
      }
    };

    _this.handleChangeSearchText = function (text) {
      var query = text.trim();
      var data = _this.state.originalData;

      if (!query) {
        _this.setState({
          data: data
        });

        return;
      }

      var checkValue = function checkValue(value) {
        return value.toLowerCase().includes(query.toLowerCase());
      };

      var filteredData = data.reduce(function (acc, story) {
        var hasTitle = checkValue(story.title);
        var hasKind = story.data.some(function (ref) {
          return checkValue(ref.name);
        });

        if (hasTitle || hasKind) {
          acc.push(Object.assign({}, story, {
            // in case the query matches component's title, all of its stories will be shown
            data: !hasTitle ? story.data.filter(function (ref) {
              return checkValue(ref.name);
            }) : story.data
          }));
        }

        return acc;
      }, []);

      _this.setState({
        data: filteredData
      });
    };

    _this.state = {
      data: [],
      originalData: []
    };
    return _this;
  }

  _createClass(StoryListView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var channel = _addons["default"].getChannel();

      channel.on(_coreEvents["default"].STORY_ADDED, this.handleStoryAdded);
      this.handleStoryAdded();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var channel = _addons["default"].getChannel();

      channel.removeListener(_coreEvents["default"].STORY_ADDED, this.handleStoryAdded);
    }
  }, {
    key: "changeStory",
    value: function changeStory(kind, story) {
      var channel = _addons["default"].getChannel();

      channel.emit(_coreEvents["default"].SET_CURRENT_STORY, {
        kind: kind,
        story: story
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectedKind = _this$props.selectedKind,
          selectedStory = _this$props.selectedStory;
      var data = this.state.data;
      return _react["default"].createElement(_reactNative.SafeAreaView, {
        style: _style["default"].flex
      }, _react["default"].createElement(_reactNative.TextInput, {
        clearButtonMode: "while-editing",
        disableFullscreenUI: true,
        onChangeText: this.handleChangeSearchText,
        placeholder: "Filter",
        returnKeyType: "search",
        style: _style["default"].searchBar
      }), _react["default"].createElement(_reactNative.SectionList, {
        testID: "Storybook.ListView",
        style: _style["default"].sectionList,
        renderItem: function renderItem(_ref3) {
          var item = _ref3.item;
          return _react["default"].createElement(ListItem, {
            title: item.name,
            kind: item.kind,
            selected: item.kind === selectedKind && item.name === selectedStory,
            onPress: function onPress() {
              return _this2.changeStory(item.kind, item.name);
            }
          });
        },
        renderSectionHeader: function renderSectionHeader(_ref4) {
          var title = _ref4.section.title;
          return _react["default"].createElement(SectionHeader, {
            title: 'title',
            selected: title === selectedKind
          });
        },
        keyExtractor: function keyExtractor(item, index) {
          return item + index;
        },
        sections: data,
        stickySectionHeadersEnabled: false
      }));
    }
  }]);

  return StoryListView;
}(_react.Component);

exports["default"] = StoryListView;