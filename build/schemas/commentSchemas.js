"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const commentSchema = _joi.default.object({
  comment: _joi.default.string().required(),
  name: _joi.default.string().required(),
  email: _joi.default.string().email().required(),
  pokemon: _joi.default.string().required()
});
exports.commentSchema = commentSchema;