"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prisma = void 0;
var _client = _interopRequireDefault(require("@prisma/client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  PrismaClient
} = _client.default;
const prisma = new PrismaClient();
exports.prisma = prisma;