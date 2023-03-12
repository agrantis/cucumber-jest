"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.isJson = isJson;
function isJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0pzb24iLCJ0ZXh0IiwiSlNPTiIsInBhcnNlIiwiZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pc0pzb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzSnNvbih0ZXh0KTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsTUFBTUEsQ0FBQ0MsSUFBSSxFQUFXO0VBQ2xDLElBQUk7SUFDQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNGLElBQUksQ0FBQztJQUNoQixPQUFPLElBQUk7RUFDZixDQUFDLENBQUMsT0FBT0csQ0FBQyxFQUFFO0lBQ1IsT0FBTyxLQUFLO0VBQ2hCO0FBQ0oifQ==