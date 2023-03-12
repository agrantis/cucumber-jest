"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaths = getPaths;
var _fastGlob = _interopRequireDefault(require("fast-glob"));
function getPaths(cwd, paths) {
  try {
    return _fastGlob.default.sync(paths, {
      cwd,
      absolute: true,
      onlyFiles: true
    });
  } catch (e) {
    console.error(e);
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmFzdEdsb2IiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImdldFBhdGhzIiwiY3dkIiwicGF0aHMiLCJnbG9iIiwic3luYyIsImFic29sdXRlIiwib25seUZpbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRQYXRocy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2xvYiBmcm9tICdmYXN0LWdsb2InO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0aHMoY3dkOiBzdHJpbmcsIHBhdGhzOiBzdHJpbmdbXSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnbG9iLnN5bmMocGF0aHMsIHtcbiAgICAgICAgICAgIGN3ZCxcbiAgICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgICAgb25seUZpbGVzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFTyxTQUFTQyxRQUFRQSxDQUFDQyxHQUFXLEVBQUVDLEtBQWUsRUFBRTtFQUNuRCxJQUFJO0lBQ0EsT0FBT0MsaUJBQUksQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLEVBQUU7TUFDcEJELEdBQUc7TUFDSEksUUFBUSxFQUFFLElBQUk7TUFDZEMsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtJQUNSQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sRUFBRTtFQUNiO0FBQ0oifQ==