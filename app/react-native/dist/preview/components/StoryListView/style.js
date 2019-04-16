"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _default = _reactNative.StyleSheet.create({
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 5,
    fontSize: 16,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5
  },
  flex: {
    flex: 1
  },
  sectionList: {
    flex: 1,
    marginBottom: 40
  },
  header: {
    paddingVertical: 5
  },
  headerText: {
    fontSize: 20
  },
  headerTextSelected: {
    fontWeight: 'bold'
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 16
  },
  itemText: {
    fontSize: 16
  },
  itemTextSelected: {
    fontWeight: 'bold'
  }
});

exports["default"] = _default;