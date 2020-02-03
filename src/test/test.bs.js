'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Test(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setCount1 = match[1];
  var onClick1 = React.useCallback((function (_x) {
          return Curry._1(setCount1, (function (old_state) {
                        return old_state + 1 | 0;
                      }));
        }), /* array */[setCount1]);
  var onClick2 = React.useCallback((function (_x) {
          return Curry._1(setCount1, (function (old_state) {
                        return old_state - 1 | 0;
                      }));
        }), /* array */[setCount1]);
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: onClick1
                }), React.createElement("div", undefined, String(match[0])), React.createElement("button", {
                  onClick: onClick2
                }));
}

var make = Test;

exports.make = make;
/* react Not a pure module */
