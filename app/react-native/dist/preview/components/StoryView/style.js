"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _default = _reactNative.StyleSheet.create({
  main: {
    flex: 1
  },
  help: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

exports["default"] = _default;