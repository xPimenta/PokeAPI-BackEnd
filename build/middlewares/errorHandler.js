"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).send(err.message);
};
exports.errorHandler = errorHandler;