"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
require("express-async-errors");
var _commentRouter = _interopRequireDefault(require("./routers/commentRouter"));
var _errorHandler = require("./middlewares/errorHandler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import dotenv from "dotenv"

//dotenv.config()
const app = (0, _express.default)();
app.use(_express.default.static('public'));
app.use(_express.default.json({
  limit: '50mb'
}));
app.use(_express.default.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use((0, _cors.default)());
app.get("/", (req, res) => res.send("Online"));
app.use(_commentRouter.default);
app.use(_errorHandler.errorHandler);
var _default = app;
exports.default = _default;