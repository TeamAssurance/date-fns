"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _index = require("./_lib/formatDistance/index.js");

let _index2 = _interopRequireDefault(_index);

let _index3 = require("./_lib/formatLong/index.js");

let _index4 = _interopRequireDefault(_index3);

let _index5 = require("./_lib/formatRelative/index.js");

let _index6 = _interopRequireDefault(_index5);

let _index7 = require("./_lib/localize/index.js");

let _index8 = _interopRequireDefault(_index7);

let _index9 = require("./_lib/match/index.js");

let _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let locale = {
  formatDistance: _index2.default,
  formatLong: _index4.default,
  formatRelative: _index6.default,
  localize: _index8.default,
  match: _index10.default,
  options: {
    weekStartsOn: 1 /* Monday */
    , firstWeekContainsDate: 1 /* First week of new year contains Jan 1st  */
  }
};

exports.default = locale;
module.exports = exports["default"];