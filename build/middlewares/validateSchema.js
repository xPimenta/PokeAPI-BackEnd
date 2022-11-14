"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = validateSchema;
var _errorFactory = require("../utils/errorFactory.js");
function validateSchema(schema) {
  return async (req, _res, next) => {
    const validation = schema.validate(req.body, {
      abortEarly: false
    });
    if (validation.error) throw (0, _errorFactory.errorFactory)("error_invalid_body", "true");
    next();
  };
}