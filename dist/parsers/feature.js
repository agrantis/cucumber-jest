"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFeature = parseFeature;
var _variables = require("./variables");
function parseFeature(cwd, featurePath, extensions) {
  const variables = (0, _variables.getVariables)(cwd, featurePath, extensions);
  return variables ? (0, _variables.populateVariables)(cwd, featurePath, variables) : featurePath;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdmFyaWFibGVzIiwicmVxdWlyZSIsInBhcnNlRmVhdHVyZSIsImN3ZCIsImZlYXR1cmVQYXRoIiwiZXh0ZW5zaW9ucyIsInZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsInBvcHVsYXRlVmFyaWFibGVzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhcnNlcnMvZmVhdHVyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFZhcmlhYmxlcywgcG9wdWxhdGVWYXJpYWJsZXN9IGZyb20gJy4vdmFyaWFibGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmVhdHVyZShcbiAgICBjd2Q6IHN0cmluZyxcbiAgICBmZWF0dXJlUGF0aDogc3RyaW5nLFxuICAgIGV4dGVuc2lvbnM6IHN0cmluZ1tdXG4pIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBnZXRWYXJpYWJsZXMoY3dkLCBmZWF0dXJlUGF0aCwgZXh0ZW5zaW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzXG4gICAgICAgID8gcG9wdWxhdGVWYXJpYWJsZXMoY3dkLCBmZWF0dXJlUGF0aCwgdmFyaWFibGVzKVxuICAgICAgICA6IGZlYXR1cmVQYXRoO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsVUFBQSxHQUFBQyxPQUFBO0FBRU8sU0FBU0MsWUFBWUEsQ0FDeEJDLEdBQVcsRUFDWEMsV0FBbUIsRUFDbkJDLFVBQW9CLEVBQ3RCO0VBQ0UsTUFBTUMsU0FBUyxHQUFHLElBQUFDLHVCQUFZLEVBQUNKLEdBQUcsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFFNUQsT0FBT0MsU0FBUyxHQUNWLElBQUFFLDRCQUFpQixFQUFDTCxHQUFHLEVBQUVDLFdBQVcsRUFBRUUsU0FBUyxDQUFDLEdBQzlDRixXQUFXO0FBQ3JCIn0=